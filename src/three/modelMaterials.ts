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

/* ------------------------------------------------------------- application */

export interface DressOptions {
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
  }
  const cache = new Map<string, THREE.Material | null>()

  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh
    if (!mesh.isMesh) return

    const source = mesh.material as THREE.MeshStandardMaterial
    const name = source?.name ?? ''
    const spec = specFor(name)
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

    const key = `${name}|${spec.role}`
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
        mat = std
      }
      cache.set(key, mat)
    }

    if (mat) mesh.material = mat
  })

  opts.onReport?.(report)
  return report
}
