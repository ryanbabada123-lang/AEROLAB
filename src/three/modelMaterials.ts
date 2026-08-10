import * as THREE from 'three'

/**
 * HABILLAGE DES MODÈLES LIVRÉS SANS LEURS TEXTURES
 *
 * Les trois modèles du site nous parviennent sans leurs images : vingt-cinq
 * manquantes sur le poste de pilotage A400M, quinze sur le Tecnam. Il faut donc
 * leur rendre une matière.
 *
 * Le constat qui organise ce fichier est qu'il n'y a PAS soixante-onze
 * matériaux à réinventer. L'inventaire du modèle montre que la plupart portent
 * déjà des valeurs plausibles — un bouton à 0,19 de gris et 0,82 de rugosité
 * n'a besoin de rien. Trois familles seulement sont à traiter :
 *
 *   1. Les surfaces laissées en blanc pur avec métal et rugosité à 1, état par
 *      défaut de ce qui attendait tout de sa texture. Elles portent l'essentiel
 *      de la surface visible : panneaux et sièges à eux seuls font 100 262 des
 *      167 845 triangles du poste.
 *
 *   2. La géométrie d'aide restée dans l'export. Les OCCLUDER_BOOLS, verts et
 *      semi-transparents, sont les découpes booléennes des emplacements de
 *      boutons : 30 560 triangles, soit 18 % du modèle, qui ne doivent pas être
 *      dessinés du tout.
 *
 *   3. Les afficheurs, qui reçoivent des instruments vivants dessinés ailleurs
 *      plutôt qu'une couleur plate.
 *
 * Ce qui n'est PAS fait ici, et ne le sera pas : inventer les inscriptions des
 * panneaux. Les matériaux `Panels_Text_Decals` et `Decal_Korry` portaient les
 * libellés et les légendes de commutateurs. Leurs textures manquent, et
 * fabriquer des étiquettes vraisemblables reviendrait à inventer des données
 * aéronautiques devant des écoles. Ces surfaces restent donc muettes — ce que
 * les cadrages de l'introduction rendent lisible comme un parti pris.
 */

/* ------------------------------------------------------------------ palette */

/**
 * Teintes de poste de pilotage. Le gris-vert sombre des planches Airbus, le
 * tissu bleuté des sièges, les plastiques et les métaux. Volontairement froides
 * pour s'accorder aux plaques de montagne du site.
 */
const M = {
  panel: '#3b4147',
  panelDeep: '#2e3439',
  seatFabric: '#28303a',
  seatFrame: '#1b2026',
  plasticGrey: '#4a5057',
  plasticDark: '#15181b',
  metalBrushed: '#7d838a',
  metalDark: '#23272b',
  screw: '#0d0f11',
  glass: '#0a0d10',
  displayOff: '#05080b',
  cabin: '#454b52',
} as const

/* ------------------------------------------------------------------- règles */

export type SurfaceRole =
  | 'panel'
  | 'seat'
  | 'plastic'
  | 'metal'
  | 'screw'
  | 'glass'
  | 'display'
  | 'hidden'
  | 'decal'
  | 'keep'

export interface SurfaceSpec {
  role: SurfaceRole
  color?: string
  metalness?: number
  roughness?: number
  opacity?: number
  /** Rend la surface non éclairée : sert aux afficheurs. */
  unlit?: boolean
  /**
   * Bande de peinture calculée sur la géométrie, pour obtenir une livrée deux
   * tons sans dépendre du découpage en pièces ni des coordonnées de texture.
   *
   * Les modèles fournis n'ont ni pièce « capot » ni carte UV connue : viser une
   * zone par son nom échoue, et poser un motif par UV le placerait au hasard.
   * On teinte donc selon la position dans le repère du modèle, ce qui est
   * déterministe et vérifiable à la mesure.
   */
  paint?: {
    /** Axe local de la pièce : 0 pour la longueur, 1 la hauteur, 2 l'envergure. */
    axis: 0 | 1 | 2
    /**
     * Étendue peinte, en FRACTION de la boîte englobante de la pièce le long de
     * cet axe : `fromStart` part du minimum, `fromEnd` du maximum. Une fraction
     * plutôt qu'une distance, parce que le repère local d'une pièce est décalé
     * par rapport à celui où l'on mesure — un seuil en mètres tombe alors à
     * côté, et il faut le régler à l'aveugle. Une fraction se calibre seule.
     */
    fromStart?: number
    fromEnd?: number
    color: string
    /** Douceur de la transition, en fraction de la même étendue. */
    feather?: number
  }
}

/**
 * Règles appliquées dans l'ordre, par expression sur le NOM du matériau. La
 * première qui correspond gagne. `keep` laisse le matériau tel qu'il est livré.
 */
const RULES: [RegExp, SurfaceSpec][] = [
  // 1 — Géométrie d'aide : jamais dessinée.
  [/^OCCLUDER_BOOLS/i, { role: 'hidden' }],

  // 2 — Afficheurs : reçoivent une texture vivante, donc pas d'éclairage.
  //
  // Sur le poste A400M, les grandes surfaces d'écran ne portent pas de nom
  // parlant : ce sont de simples quads de deux à quatre triangles nommés
  // `Material.004` à `Material.009`, laissés en blanc pur par l'absence des
  // images qui les habitaient. Sans cette règle, le poste s'affiche avec de
  // grands rectangles blancs en pleine planche de bord.
  [
    /FakeDisplay|GLASS_DISP|Apache_D_MFD|^Slide\d|^Material\.00[456789]$|_pfd\.|_mfd\.|_map\.|_ai\.|_alt\.|_asi\.|attitude_indicator|alt\.tape|pitchscale/i,
    { role: 'display', color: M.displayOff, unlit: true },
  ],

  // 3 — Inscriptions : conservées en géométrie, laissées muettes faute de leurs
  //     textures. Rendues discrètes pour ne pas se signaler comme un manque.
  [
    /Panels_Text_Decals|Decal_Korry/i,
    { role: 'decal', color: M.panelDeep, roughness: 0.62, opacity: 0.35 },
  ],

  // 4 — Verrières et verres d'instruments.
  [/^transparent$/i, { role: 'glass', color: '#aac4dc', opacity: 0.14, roughness: 0.04 }],
  [/^transparentExt$/i, { role: 'glass', color: '#b8cfe4', opacity: 0.3, roughness: 0.06 }],
  [/Gauge_glass|CLEAR_SWITCH/i, { role: 'glass', color: '#cfe0ee', opacity: 0.22, roughness: 0.05 }],
  // `m32mat` : cyan très réfléchissant en mode fondu, soit le verre posé
  // devant un afficheur. Traité comme tel plutôt que laissé turquoise vif.
  [/^m32mat$/i, { role: 'glass', color: '#9fc4dc', opacity: 0.16, roughness: 0.04 }],

  // 5 — Les quatre surfaces réellement cassées : blanc pur, métal et rugosité
  //     à 1, faute de la texture qui portait tout.
  [/COCKPIT_PANELS_BASE/i, { role: 'panel', color: M.panel, metalness: 0.06, roughness: 0.74 }],
  [/^CPit_seats/i, { role: 'seat', color: M.seatFabric, metalness: 0.02, roughness: 0.93 }],
  [/^Grey_plastic/i, { role: 'plastic', color: M.plasticGrey, metalness: 0.04, roughness: 0.78 }],
  [/^Plastic_Black_4/i, { role: 'plastic', color: M.plasticDark, metalness: 0.08, roughness: 0.82 }],

  // 6 — Tecnam : les surfaces de cabine et la planche, toutes livrées en
  //     `DefaultWhite`, donc indiscernables sans leurs textures. On les traite
  //     par leur suffixe.
  [/_panel\.png/i, { role: 'panel', color: M.panelDeep, metalness: 0.05, roughness: 0.7 }],
  [/_Seat\.png/i, { role: 'seat', color: M.seatFabric, metalness: 0.02, roughness: 0.93 }],
  [/_interior\.png/i, { role: 'plastic', color: M.cabin, metalness: 0.03, roughness: 0.8 }],
  [/_switch\.png/i, { role: 'metal', color: M.metalDark, metalness: 0.4, roughness: 0.5 }],

  // 7 — Familles génériques, pour les matériaux au nom parlant mais aux valeurs
  //     incertaines.
  [/Screw/i, { role: 'screw', color: M.screw, metalness: 0.5, roughness: 0.5 }],
  [/^Plastic_white$/i, { role: 'plastic', color: M.plasticGrey, metalness: 0.02, roughness: 0.8 }],

  // 8 — La cellule du Tecnam et tout ce qui reste en blanc par défaut. Une
  //     cellule blanche aux matériaux justes tient de la photographie de presse
  //     constructeur, ce qui sert le projet plutôt que de le desservir.
  [/^DefaultWhite$/i, { role: 'plastic', color: '#eef2f7', metalness: 0.05, roughness: 0.42 }],
  [/^None$/i, { role: 'plastic', color: '#dfe8f0', metalness: 0.04, roughness: 0.5 }],

  // 9 — Tout le reste garde ce que son auteur a réglé.
  [/.*/, { role: 'keep' }],
]

/** Trouve la règle qui s'applique à un nom de matériau. */
export function specFor(name: string): SurfaceSpec {
  for (const [re, spec] of RULES) if (re.test(name)) return spec
  return { role: 'keep' }
}

/* --------------------------------------------------- livrées, pièce par pièce */

/**
 * Surcharges par PIÈCE, et non par matériau.
 *
 * Toute la cellule du Tecnam partage un unique matériau `DefaultWhite` :
 * fuselage, ailes, empennage, train et capot sont indiscernables par leur
 * matériau. Une livrée deux tons ne peut donc s'obtenir qu'en visant les nœuds,
 * dont voici les rôles relevés à la mesure, en mètres :
 *
 *   Object_7   X [-3,31 ; 3,72]  Y [-0,71 ; 1,31]  Z [-0,95 ; 0,95]  fuselage
 *   Object_8   X [-3,43 ; 3,69]  Y [-1,19 ; 1,20]  Z [-5,24 ; 5,24]  ailes et
 *                                                                   empennage
 *   Object_9   X [-2,99 ; -0,58] Y [-1,32 ; -0,87] Z [-1,12 ; 1,12]  train et
 *                                                                   carénages
 *   Object_10  X [-3,76 ; -0,79] Y [-0,96 ; 0,41]  Z [-2,38 ; 2,38]  avant
 *
 * Ces noms ne valent que pour un modèle donné : les surcharges sont donc
 * rangées par modèle et n'ont aucun effet ailleurs.
 */
const LIVERY: Record<string, [RegExp, SurfaceSpec][]> = {
  // Livrée blanc et noir demandée par l'auteur du projet.
  'tecnam-p2010': [
    // FUSELAGE — blanc, avec le capot moteur peint en noir. Le nez du fuselage
    // s'étend jusqu'à X = -3,31 ; la cloison pare-feu se situe vers -2,55, d'où
    // la limite. Aucune pièce « capot » n'existe dans le modèle, et le nœud qui
    // couvre l'avant (Object_10) s'est révélé être de la géométrie intérieure,
    // invisible du dehors : la teinte est donc posée sur la géométrie.
    [
      /^Object_7$/,
      {
        role: 'plastic',
        color: '#f6f8fb',
        metalness: 0.07,
        roughness: 0.33,
        paint: { axis: 0, fromStart: 0.27, color: '#101317', feather: 0.008 },
      },
    ],
    // AILES ET EMPENNAGE — blanc franc, peu rugueux pour accrocher la lumière
    // rasante des plaques de montagne.
    [/^Object_8$/, { role: 'plastic', color: '#f6f8fb', metalness: 0.07, roughness: 0.33 }],
    // ROUES ET MÂT — noir. Vérifié au rendu par-dessous : c'est bien la pièce
    // qui porte les trois pneus.
    [/^Object_9$/, { role: 'plastic', color: '#0f1215', metalness: 0.14, roughness: 0.48 }],
    // Géométrie avant intérieure : sombre, elle n'est de toute façon pas vue.
    [/^Object_10$/, { role: 'plastic', color: '#12161a', metalness: 0.2, roughness: 0.4 }],
  ],
}

/** Trouve la surcharge de livrée applicable à une pièce, s'il en existe. */
function liveryFor(model: string | undefined, node: string): SurfaceSpec | null {
  if (!model) return null
  const rules = LIVERY[model]
  if (!rules) return null
  for (const [re, spec] of rules) if (re.test(node)) return spec
  return null
}

/* ------------------------------------------------------------------ peinture */

/**
 * Teinte une partie du maillage selon sa position dans le repère du modèle, en
 * injectant deux lignes dans le nuanceur standard de three.js.
 *
 * Le mélange se fait sur la couleur diffuse avant tout éclairage, si bien que la
 * zone peinte reçoit les mêmes reflets et la même ombre que le reste : elle a
 * l'air peinte, non collée.
 */
function applyPaint(
  mat: THREE.MeshStandardMaterial,
  paint: NonNullable<SurfaceSpec['paint']>,
  geometry: THREE.BufferGeometry,
) {
  const target = new THREE.Color(paint.color)
  const axis = 'xyz'[paint.axis]

  // La limite est déduite de la pièce elle-même, ce qui rend le réglage
  // indépendant du repère local et donc vérifiable sans tâtonner.
  geometry.computeBoundingBox()
  const box = geometry.boundingBox
  const lo = box ? box.min.getComponent(paint.axis) : 0
  const hi = box ? box.max.getComponent(paint.axis) : 1
  const span = Math.max(1e-5, hi - lo)
  const fromStart = paint.fromStart !== undefined
  const frac = fromStart ? (paint.fromStart ?? 0) : (paint.fromEnd ?? 0)
  const edge = fromStart ? lo + span * frac : hi - span * frac
  const feather = Math.max(1e-5, span * (paint.feather ?? 0.02))

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uPaintColor = { value: target }
    shader.uniforms.uPaintEdge = { value: edge }
    shader.uniforms.uPaintFeather = { value: feather }

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying float vPaintAxis;')
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\n  vPaintAxis = position.${axis};`,
      )

    const test = fromStart
      ? 'smoothstep(uPaintEdge + uPaintFeather, uPaintEdge - uPaintFeather, vPaintAxis)'
      : 'smoothstep(uPaintEdge - uPaintFeather, uPaintEdge + uPaintFeather, vPaintAxis)'

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
varying float vPaintAxis;
uniform vec3 uPaintColor;
uniform float uPaintEdge;
uniform float uPaintFeather;`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
  diffuseColor.rgb = mix(diffuseColor.rgb, uPaintColor, ${test});`,
      )
  }
  // three.js met en cache les programmes compilés : sans clé distincte, un
  // matériau peint réutiliserait le programme d'un matériau non peint.
  mat.customProgramCacheKey = () => `paint:${axis}:${edge.toFixed(3)}:${paint.color}`
}

/* ------------------------------------------------------------- application */

export interface DressOptions {
  /**
   * Identifiant du modèle, sans extension — `tecnam-p2010`, `a350-1000`,
   * `a400m-flightdeck`. Nécessaire pour appliquer une livrée, dont les règles
   * visent des noms de pièces propres à chaque modèle.
   */
  model?: string
  /** Textures d'afficheur, par nom de matériau. */
  displays?: Record<string, THREE.Texture>
  /** Rapport au journal des surfaces traitées, pour vérification. */
  onReport?: (report: DressReport) => void
}

export interface DressReport {
  total: number
  byRole: Record<string, number>
  hiddenTriangles: number
  /** Matériaux laissés tels quels : utile pour repérer un oubli. */
  kept: string[]
  /**
   * Pièces repeintes par une livrée, avec la couleur obtenue. Toutes les règles
   * de livrée portant le même rôle, le décompte par rôle ne dit pas si elles
   * ont pris : ce champ le dit.
   */
  livery: { part: string; color: string }[]
}

/**
 * Applique l'habillage à une scène glTF chargée. Les matériaux sont remplacés,
 * jamais mutés en place : un même matériau peut être partagé par plusieurs
 * modèles, et le mode d'affichage d'un afficheur diffère de celui d'un panneau.
 */
export function dressModel(root: THREE.Object3D, opts: DressOptions = {}): DressReport {
  const report: DressReport = {
    total: 0,
    byRole: {},
    hiddenTriangles: 0,
    kept: [],
    livery: [],
  }
  const cache = new Map<string, THREE.Material | null>()

  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (!mesh.isMesh) return

    const source = mesh.material as THREE.MeshStandardMaterial
    const name = source?.name ?? ''

    // La livrée l'emporte sur les règles de matériau : c'est tout son intérêt,
    // puisqu'elle sert précisément à distinguer des pièces qui partagent le
    // même matériau. Le nom de la pièce peut être porté par l'objet lui-même
    // ou par son parent, selon la façon dont le chargeur a monté la scène.
    const nodeName = mesh.name || mesh.parent?.name || ''
    const painted = liveryFor(opts.model, nodeName)
    const spec = painted ?? specFor(name)
    if (painted) {
      report.livery.push({ part: nodeName, color: painted.color ?? '?' })
    }

    report.total++
    report.byRole[spec.role] = (report.byRole[spec.role] ?? 0) + 1

    if (spec.role === 'hidden') {
      mesh.visible = false
      const idx = (mesh.geometry as THREE.BufferGeometry)?.index
      report.hiddenTriangles += idx ? idx.count / 3 : 0
      return
    }

    if (spec.role === 'keep') {
      if (!report.kept.includes(name)) report.kept.push(name)
      // Les modèles arrivent en `metallicFactor` élevé sur des surfaces mates ;
      // on borne sans écraser le réglage d'origine.
      if (source && source.metalness > 0.9 && source.roughness > 0.9) {
        source.metalness = 0.15
      }
      return
    }

    // Le cache est clé sur la SPÉCIFICATION RÉSOLUE, pas sur le nom du
    // matériau. Le fuselage blanc et le train noir du Tecnam portent tous deux
    // le matériau `DefaultWhite` et le rôle `plastic` : une clé fondée sur le
    // nom les confondrait, et la seconde pièce hériterait de la couleur de la
    // première.
    // La bande de peinture DOIT entrer dans la clé. Sans elle, le fuselage peint
    // et les ailes non peintes du Tecnam — mêmes matériau, rôle, couleur et
    // rugosité — partageaient un seul matériau, et le bord d'attaque des ailes
    // se retrouvait peint sur toute l'envergure.
    const key = [
      name,
      spec.role,
      spec.color,
      spec.metalness,
      spec.roughness,
      spec.opacity,
      spec.unlit,
      spec.paint
        ? `${spec.paint.axis}:${spec.paint.fromStart ?? ''}:${spec.paint.fromEnd ?? ''}:${spec.paint.color}`
        : '',
    ].join('|')
    let mat = cache.get(key)

    if (mat === undefined) {
      const display = opts.displays?.[name]

      if (spec.unlit) {
        mat = new THREE.MeshBasicMaterial({
          name,
          color: new THREE.Color(spec.color ?? '#000'),
          map: display ?? null,
          toneMapped: false,
        })
      } else {
        const std = new THREE.MeshStandardMaterial({
          name,
          color: new THREE.Color(spec.color ?? '#888'),
          metalness: spec.metalness ?? 0.1,
          roughness: spec.roughness ?? 0.7,
          side: source?.side ?? THREE.FrontSide,
        })
        if (spec.opacity !== undefined && spec.opacity < 1) {
          std.transparent = true
          std.opacity = spec.opacity
          std.depthWrite = false
        }
        if (spec.paint) applyPaint(std, spec.paint, mesh.geometry as THREE.BufferGeometry)
        mat = std
      }
      cache.set(key, mat)
    }

    if (mat) mesh.material = mat
  })

  opts.onReport?.(report)
  return report
}
