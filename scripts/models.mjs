/**
 * PIPELINE DES MODÈLES 3D
 *
 * Transforme les archives Sketchfab de `assets/models/` en fichiers `.glb`
 * servables, dans `public/models/`.
 *
 * Deux règles gouvernent ce script, et elles ne sont pas négociables :
 *
 * 1. AUCUNE FUSION DE MESHES. Les fonctions `join` et `flatten` de
 *    gltf-transform sont volontairement absentes. La rentrée du train et la
 *    rotation des soufflantes de l'A350 ne sont possibles que parce que ces
 *    organes occupent des meshes distincts ; les fusionner rendrait la
 *    séquence de décollage infaisable.
 *
 * 2. SIMPLIFICATION CIBLÉE, PAS UNIFORME. Sur l'A350, les deux soufflantes et
 *    les deux atterrisseurs totalisent 62 % des triangles pour une poignée de
 *    pixels à l'écran, tandis que la cellule porte la silhouette. On taille
 *    donc dans les premiers et on épargne la seconde.
 *
 * Usage : node scripts/models.mjs [nom]
 */

import { NodeIO, PropertyType } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import {
  dedup,
  prune,
  quantize,
  simplifyPrimitive,
  textureCompress,
  weld,
} from '@gltf-transform/functions'
import { MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer'
import { EXTMeshoptCompression } from '@gltf-transform/extensions'
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'assets/models')
const OUT = path.join(ROOT, 'public/models')

/* ------------------------------------------------------------------ recettes */

/**
 * `keep` : fraction de triangles conservée, par nom de mesh.
 * `default` s'applique à tout mesh non nommé explicitement.
 */
const RECIPES = {
  a350: {
    dir: 'a350-1000-newbie99999993',
    out: 'a350-1000.glb',
    texture: { size: 2048, format: 'webp', quality: 84 },
    keep: {
      // Soufflantes : 102 396 triangles chacune pour un disque de 3,3 m vu
      // de loin et en rotation rapide. Le flou de mouvement absorbe tout.
      Object_0: 0.16,
      Object_1: 0.16,
      // Atterrisseurs principaux : bogies et pneus sculptés. Visibles au
      // seuil de piste, puis rentrés. On garde de quoi lire les roues.
      Object_2: 0.34,
      Object_3: 0.34,
      // Atterrisseur avant et organes mêlés.
      Object_4: 0.34,
      // Cellule : fuselage, ailes, empennage, dérive. C'est la silhouette,
      // on n'y touche presque pas.
      Object_5: 0.9,
      Object_6: 0.9,
      Object_7: 1,
    },
    default: 0.6,
  },

  a400m: {
    dir: 'a400m-flightdeck-coursedesign',
    out: 'a400m-flightdeck.glb',
    // Les 25 textures ne sont pas fournies : leurs références sont retirées
    // avant chargement, et les matériaux seront rebâtis dans le code.
    stripTextures: true,
    // 813 meshes de petites pièces (commutateurs, boutons). Les simplifier
    // les détruirait sans rien gagner : le poids est dans leur nombre, pas
    // dans leur densité. On ne simplifie donc rien ici, on quantifie et on
    // compresse.
    keep: {},
    default: 1,
    // Le modèle traîne cinq objets parasites, dont deux entièrement dégénérés
    // — 52 triangles écrasés en un point — et trois miettes de quelques
    // centimètres égarées à treize mètres. Ils portent la boîte englobante à
    // 39,54 m alors que le poste en mesure dix, ce qui fausserait tout cadrage
    // automatique. 176 triangles sur 333 676 : leur retrait ne coûte rien.
    cullBeyond: { axis: 2, limit: 8 },
  },

  tecnam: {
    dir: 'tecnam-p2010-helijah',
    out: 'tecnam-p2010.glb',
    optional: true,
    // Les 15 textures ne sont pas fournies. Leurs références sont retirées,
    // mais les noms de matériaux sont conservés et valent une notice : ils
    // désignent un à un les instruments de la planche de bord — horizon,
    // altimètre, anémomètre, PFD, MFD, carte, bande d'altitude, échelle de
    // tangage — chacun porté par son propre mesh. C'est ce découpage qui
    // permettra d'y peindre des instruments vivants et justes.
    stripTextures: true,
    // 43 401 triangles seulement : rien à simplifier, tout est utile.
    keep: {},
    default: 1,
  },
}

/* -------------------------------------------------------------------- outils */

const fmt = (n) => n.toLocaleString('fr-FR')
const mo = (n) => `${(n / 1e6).toFixed(2)} Mo`

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

function triangleCount(doc) {
  let tri = 0
  for (const mesh of doc.getRoot().listMeshes()) {
    for (const prim of mesh.listPrimitives()) {
      const idx = prim.getIndices()
      tri += idx ? idx.getCount() / 3 : prim.getAttribute('POSITION').getCount() / 3
    }
  }
  return Math.round(tri)
}

/**
 * Retire images, textures et références de texture d'un glTF dont les fichiers
 * d'accompagnement manquent. Les noms de matériaux sont préservés : ce sont eux
 * qui permettront de rebâtir l'habillage (`CPit_seats`, `Grey_plastic`,
 * `Plastic_Black_4`…).
 */
async function stripTextureRefs(gltfPath) {
  const json = JSON.parse(await fs.readFile(gltfPath, 'utf8'))
  const slots = [
    'baseColorTexture',
    'metallicRoughnessTexture',
    'normalTexture',
    'occlusionTexture',
    'emissiveTexture',
  ]
  let removed = 0
  for (const mat of json.materials ?? []) {
    for (const slot of slots) {
      if (mat[slot]) {
        delete mat[slot]
        removed++
      }
      if (mat.pbrMetallicRoughness?.[slot]) {
        delete mat.pbrMetallicRoughness[slot]
        removed++
      }
    }
  }
  delete json.images
  delete json.textures
  delete json.samplers
  const tmp = gltfPath.replace(/\.gltf$/, '.__stripped.gltf')
  await fs.writeFile(tmp, JSON.stringify(json))
  return { tmp, removed, materials: (json.materials ?? []).length }
}

const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

/** Produit de deux matrices 4×4 en ordre colonne, convention glTF. */
function mul(a, b) {
  const o = new Array(16).fill(0)
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++)
      for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k]
  return o
}

/**
 * Détache les nœuds dont la géométrie tient entièrement au-delà d'une limite
 * sur un axe. Sert à écarter les objets parasites qui faussent la boîte
 * englobante, et rend compte de chaque retrait : rien ne disparaît en silence.
 */
function cullOutliers(doc, { axis, limit }) {
  const dropped = []

  const walk = (node, m) => {
    const M = mul(m, node.getMatrix())
    const mesh = node.getMesh()
    if (mesh) {
      let lo = Infinity
      let hi = -Infinity
      let tri = 0
      for (const prim of mesh.listPrimitives()) {
        const pos = prim.getAttribute('POSITION')
        if (!pos) continue
        const idx = prim.getIndices()
        tri += idx ? idx.getCount() / 3 : pos.getCount() / 3
        const v = [0, 0, 0]
        for (let i = 0; i < pos.getCount(); i++) {
          pos.getElement(i, v)
          const w =
            M[axis] * v[0] + M[4 + axis] * v[1] + M[8 + axis] * v[2] + M[12 + axis]
          if (w < lo) lo = w
          if (w > hi) hi = w
        }
      }
      if (lo > limit || hi < -limit) {
        dropped.push({
          name: node.getName() || mesh.getName(),
          tri: Math.round(tri),
          at: (lo + hi) / 2,
        })
        node.setMesh(null)
      }
    }
    for (const child of node.listChildren()) walk(child, M)
  }

  for (const scene of doc.getRoot().listScenes()) {
    for (const node of scene.listChildren()) walk(node, IDENTITY)
  }
  return dropped
}

/* ------------------------------------------------------------------ pipeline */

async function build(name, recipe) {
  const dir = path.join(SRC, recipe.dir)
  const gltf = path.join(dir, 'scene.gltf')

  if (!(await exists(gltf))) {
    if (recipe.optional) {
      console.log(`\n○ ${name} — absent, ignoré (${recipe.dir})`)
      return null
    }
    throw new Error(`introuvable : ${gltf}`)
  }

  console.log(`\n▸ ${name}`)

  await MeshoptEncoder.ready
  await MeshoptSimplifier.ready

  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({ 'meshopt.encoder': MeshoptEncoder })

  let readPath = gltf
  let tmp = null
  if (recipe.stripTextures) {
    const s = await stripTextureRefs(gltf)
    tmp = s.tmp
    readPath = s.tmp
    console.log(
      `  textures absentes : ${s.removed} références retirées sur ` +
        `${s.materials} matériaux, dont les noms sont conservés`,
    )
  }

  const doc = await io.read(readPath)
  if (tmp) await fs.rm(tmp, { force: true })

  const meshes = doc.getRoot().listMeshes()
  const nodesBefore = doc.getRoot().listNodes().length
  const triBefore = triangleCount(doc)
  console.log(
    `  entrée : ${fmt(triBefore)} triangles, ${fmt(meshes.length)} meshes, ` +
      `${fmt(nodesBefore)} nœuds`,
  )

  /* --- soudure : indispensable avant toute simplification --------------- */
  await doc.transform(weld())

  /* --- simplification ciblée, mesh par mesh ----------------------------- */
  const anySimplify =
    Object.values(recipe.keep).some((r) => r < 1) || recipe.default < 1
  if (anySimplify) {
    const report = []
    for (const mesh of doc.getRoot().listMeshes()) {
      const nm = mesh.getName()
      const ratio = recipe.keep[nm] ?? recipe.default
      if (ratio >= 1) continue
      let before = 0
      let after = 0
      for (const prim of mesh.listPrimitives()) {
        const i0 = prim.getIndices()
        before += i0 ? i0.getCount() / 3 : 0
        simplifyPrimitive(prim, {
          simplifier: MeshoptSimplifier,
          ratio,
          // Borne d'erreur serrée : la simplification s'arrête avant de
          // déformer la silhouette, même si le ratio n'est pas atteint.
          error: 0.0012,
          lockBorder: true,
        })
        const i1 = prim.getIndices()
        after += i1 ? i1.getCount() / 3 : 0
      }
      if (before) report.push({ nm, ratio, before, after })
    }
    for (const r of report) {
      const pct = ((1 - r.after / r.before) * 100).toFixed(0)
      console.log(
        `    ${r.nm.padEnd(12)} ${String(fmt(Math.round(r.before))).padStart(9)} → ` +
          `${String(fmt(Math.round(r.after))).padStart(8)} tri  (−${pct} %)`,
      )
    }
  }

  /* --- retrait des objets parasites -------------------------------------- */
  if (recipe.cullBeyond) {
    const dropped = cullOutliers(doc, recipe.cullBeyond)
    if (dropped.length) {
      const axis = 'XYZ'[recipe.cullBeyond.axis]
      console.log(
        `    ${dropped.length} objet(s) parasite(s) retiré(s) au-delà de ` +
          `|${axis}| = ${recipe.cullBeyond.limit} m :`,
      )
      for (const d of dropped) {
        console.log(
          `      ${d.name.padEnd(14)} ${String(d.tri).padStart(4)} tri  ` +
            `à ${axis} = ${d.at.toFixed(2)} m`,
        )
      }
    }
  }

  /* --- nettoyage --------------------------------------------------------- */
  //
  // Sur un modèle privé de ses textures, la déduplication des MATÉRIAUX est un
  // piège : dépouillés de ce qui les distinguait, ils deviennent identiques et
  // se font fusionner. Le Tecnam y perdait ses dix-sept matériaux réduits à
  // trois, et avec eux l'identité de chaque instrument — horizon, altimètre,
  // anémomètre, PFD — qui est justement ce qui permettra de les peindre.
  // On déduplique donc tout sauf les matériaux dans ce cas.
  const dedupTypes = recipe.stripTextures
    ? [PropertyType.ACCESSOR, PropertyType.MESH, PropertyType.SKIN]
    : undefined

  await doc.transform(
    dedup(dedupTypes ? { propertyTypes: dedupTypes } : {}),
    prune({
      keepAttributes: false,
      keepLeaves: false,
      // `prune` retirerait aussi les matériaux devenus « inutiles » à ses yeux.
      // Sur les modèles dépouillés, ils portent la seule information qui reste.
      propertyTypes: recipe.stripTextures
        ? [PropertyType.ACCESSOR, PropertyType.NODE, PropertyType.MESH, PropertyType.PRIMITIVE]
        : undefined,
    }),
  )

  /* --- textures ---------------------------------------------------------- */
  if (recipe.texture) {
    const t = recipe.texture
    await doc.transform(
      textureCompress({
        encoder: sharp,
        targetFormat: t.format,
        resize: [t.size, t.size],
        quality: t.quality,
      }),
    )
    for (const tex of doc.getRoot().listTextures()) {
      console.log(
        `    texture ${tex.getName() || '(sans nom)'} → ` +
          `${tex.getMimeType()} ${mo(tex.getImage()?.byteLength ?? 0)}`,
      )
    }
  }

  /* --- quantification + compression géométrique ------------------------- */
  await doc.transform(
    quantize({
      quantizePosition: 14,
      quantizeNormal: 10,
      quantizeTexcoord: 12,
    }),
  )
  doc.createExtension(EXTMeshoptCompression).setRequired(true)

  /* --- écriture ---------------------------------------------------------- */
  await fs.mkdir(OUT, { recursive: true })
  const dest = path.join(OUT, recipe.out)
  const glb = await io.writeBinary(doc)
  await fs.writeFile(dest, glb)

  /* --- vérifications ---------------------------------------------------- */
  const triAfter = triangleCount(doc)
  const names = doc.getRoot().listMeshes().map((m) => m.getName())
  const srcBytes =
    (await fs.stat(gltf)).size +
    ((await exists(path.join(dir, 'scene.bin')))
      ? (await fs.stat(path.join(dir, 'scene.bin'))).size
      : 0)

  console.log(
    `  sortie : ${fmt(triAfter)} triangles (−${(((triBefore - triAfter) / triBefore) * 100).toFixed(0)} %), ` +
      `${fmt(names.length)} meshes conservés`,
  )
  console.log(`  poids  : ${mo(srcBytes)} → ${mo(glb.byteLength)}  →  ${recipe.out}`)

  return { name, triBefore, triAfter, srcBytes, outBytes: glb.byteLength, names }
}

/* ---------------------------------------------------------------------- main */

const only = process.argv[2]
const results = []
for (const [name, recipe] of Object.entries(RECIPES)) {
  if (only && only !== name) continue
  const r = await build(name, recipe)
  if (r) results.push(r)
}

console.log('\n' + '─'.repeat(64))
for (const r of results) {
  console.log(
    `${r.name.padEnd(10)} ${mo(r.srcBytes).padStart(9)} → ${mo(r.outBytes).padStart(9)}` +
      `   ${fmt(r.triAfter).padStart(9)} tri`,
  )
}
const total = results.reduce((s, r) => s + r.outBytes, 0)
console.log(`${'TOTAL'.padEnd(10)} ${' '.repeat(11)}  ${mo(total).padStart(9)}`)
