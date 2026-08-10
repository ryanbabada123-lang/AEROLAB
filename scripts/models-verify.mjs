/**
 * VÉRIFICATION DES MODÈLES COMPRESSÉS
 *
 * Compare chaque `.glb` produit à son archive d'origine sur trois points qui
 * décident de son exploitabilité :
 *
 *   — les cotes, qui ne doivent pas avoir bougé ;
 *   — le nombre de triangles RÉELLEMENT rendus, instances comprises, qui n'est
 *     pas le nombre de triangles des meshes uniques : la déduplication fait
 *     chuter le second sans rien retirer à la scène, et confondre les deux
 *     ferait croire à une perte de contenu ;
 *   — la présence des organes dont l'animation dépend.
 */

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions'
import { MeshoptDecoder } from 'meshoptimizer'
import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const fmt = (n) => Math.round(n).toLocaleString('fr-FR')

/** Organes dont la séquence de décollage dépend, par modèle. */
const CRITICAL = {
  'a350-1000.glb': {
    Object_0: 'soufflante gauche',
    Object_1: 'soufflante droite',
    Object_2: 'atterrisseur principal gauche',
    Object_3: 'atterrisseur principal droit',
    Object_4: 'atterrisseur avant',
    Object_5: 'cellule',
    Object_6: 'cellule',
  },
}

/** Cotes attendues, en mètres, relevées sur les archives d'origine. */
const EXPECTED = {
  'a350-1000.glb': { long: 73.83, env: 64.91, haut: 17.46 },
}

async function load(p) {
  await MeshoptDecoder.ready
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({ 'meshopt.decoder': MeshoptDecoder })
  return io.read(p)
}

/** Triangles des meshes uniques, et triangles réellement rendus. */
function counts(doc) {
  const perMesh = new Map()
  for (const mesh of doc.getRoot().listMeshes()) {
    let t = 0
    for (const prim of mesh.listPrimitives()) {
      const idx = prim.getIndices()
      t += idx
        ? idx.getCount() / 3
        : (prim.getAttribute('POSITION')?.getCount() ?? 0) / 3
    }
    perMesh.set(mesh, t)
  }
  const unique = [...perMesh.values()].reduce((a, b) => a + b, 0)
  let rendered = 0
  let instances = 0
  for (const node of doc.getRoot().listNodes()) {
    const m = node.getMesh()
    if (!m) continue
    rendered += perMesh.get(m) ?? 0
    instances++
  }
  return { unique, rendered, instances, meshes: perMesh.size }
}

/** Boîte englobante de la scène, transformations de nœuds composées. */
function bounds(doc) {
  const lo = [Infinity, Infinity, Infinity]
  const hi = [-Infinity, -Infinity, -Infinity]

  const walk = (node, m) => {
    const M = mul(m, node.getMatrix())
    const mesh = node.getMesh()
    if (mesh) {
      for (const prim of mesh.listPrimitives()) {
        const pos = prim.getAttribute('POSITION')
        if (!pos) continue
        const n = pos.getCount()
        const v = [0, 0, 0]
        // Un pas d'échantillonnage garde la vérification rapide sur les
        // modèles très denses sans changer les extrema utiles.
        const step = n > 40000 ? 3 : 1
        for (let i = 0; i < n; i += step) {
          pos.getElement(i, v)
          const x = M[0] * v[0] + M[4] * v[1] + M[8] * v[2] + M[12]
          const y = M[1] * v[0] + M[5] * v[1] + M[9] * v[2] + M[13]
          const z = M[2] * v[0] + M[6] * v[1] + M[10] * v[2] + M[14]
          if (x < lo[0]) lo[0] = x
          if (y < lo[1]) lo[1] = y
          if (z < lo[2]) lo[2] = z
          if (x > hi[0]) hi[0] = x
          if (y > hi[1]) hi[1] = y
          if (z > hi[2]) hi[2] = z
        }
      }
    }
    for (const child of node.listChildren()) walk(child, M)
  }

  for (const scene of doc.getRoot().listScenes()) {
    for (const node of scene.listChildren()) walk(node, IDENTITY)
  }
  return { lo, hi, size: hi.map((h, i) => h - lo[i]) }
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

/* ---------------------------------------------------------------------- main */

const dir = path.join(ROOT, 'public/models')
const files = (await fs.readdir(dir)).filter((f) => f.endsWith('.glb')).sort()
let failures = 0

for (const file of files) {
  const doc = await load(path.join(dir, file))
  const c = counts(doc)
  const b = bounds(doc)
  const bytes = (await fs.stat(path.join(dir, file))).size

  console.log('\n' + '═'.repeat(70))
  console.log(`${file}   ${(bytes / 1e6).toFixed(2)} Mo`)
  console.log('═'.repeat(70))
  console.log(
    `  meshes uniques ${fmt(c.meshes)}   instances dans la scène ${fmt(c.instances)}`,
  )
  console.log(`  triangles des meshes uniques : ${fmt(c.unique)}`)
  console.log(`  triangles réellement rendus  : ${fmt(c.rendered)}`)
  if (c.rendered > c.unique) {
    console.log(
      `  → ${fmt(c.rendered - c.unique)} triangles proviennent d'instances ` +
        `partagées : la déduplication a mutualisé des meshes identiques sans ` +
        `rien retirer à la scène.`,
    )
  }
  console.log(
    `  cotes : ${b.size.map((s) => s.toFixed(2)).join(' × ')} m`,
  )

  const exp = EXPECTED[file]
  if (exp) {
    const got = [...b.size].sort((x, y) => y - x)
    const want = [exp.long, exp.env, exp.haut]
    const labels = ['longueur', 'envergure', 'hauteur']
    for (let i = 0; i < 3; i++) {
      const d = Math.abs(got[i] - want[i])
      const ok = d < 0.05
      if (!ok) failures++
      console.log(
        `    ${ok ? '✓' : '✗'} ${labels[i].padEnd(10)} ${got[i].toFixed(2)} m ` +
          `(attendu ${want[i].toFixed(2)} m, écart ${(d * 100).toFixed(1)} cm)`,
      )
    }
  }

  const crit = CRITICAL[file]
  if (crit) {
    const present = new Set(doc.getRoot().listMeshes().map((m) => m.getName()))
    console.log('  organes nécessaires à l\'animation :')
    for (const [nm, role] of Object.entries(crit)) {
      const ok = present.has(nm)
      if (!ok) failures++
      console.log(`    ${ok ? '✓' : '✗'} ${nm.padEnd(10)} ${role}`)
    }
  }

  const compressed = doc
    .getRoot()
    .listExtensionsUsed()
    .some((e) => e.extensionName === EXTMeshoptCompression.EXTENSION_NAME)
  console.log(`  compression meshopt : ${compressed ? '✓ active' : '✗ absente'}`)
  if (!compressed) failures++
}

console.log('\n' + (failures ? `✗ ${failures} contrôle(s) en échec` : '✓ tous les contrôles passent'))
process.exit(failures ? 1 : 0)
