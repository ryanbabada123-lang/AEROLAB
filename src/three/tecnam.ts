import * as THREE from 'three'
import { nacaOutline, parseNaca } from '@/lib/airfoil'

/**
 * TECNAM P2008JC — géométrie de référence.
 *
 * UN SEUL avion sur tout le site : ce module est la source unique, et
 * l'intro comme la vue éclatée composent à partir d'ici. Impossible qu'un
 * appareil différent apparaisse d'une section à l'autre.
 *
 * ------------------------------------------------------------------
 * NIVEAU DE FIDÉLITÉ — à lire avant d'ajouter une cote
 * ------------------------------------------------------------------
 * Les proportions reproduisent l'architecture générale du P2008JC :
 * aile haute CANTILEVER (aucun mât — c'est ce qui le distingue au premier
 * coup d'œil d'un Cessna), fuselage composite fuselé, dérive en flèche à
 * sommet arrondi, empennage horizontal bas, train tricycle à jambes
 * composites, hélice bipale à casserole.
 *
 * Ce n'est PAS un plan coté. Aucune dimension affichée dans l'interface ne
 * doit être déduite de ce modèle : les cotes et performances réelles
 * figurent dans la documentation constructeur et le manuel de vol, et
 * nulle part ailleurs (§38).
 *
 * L'avantage sur une photo : la 3D n'a pas de définition. Elle reste nette
 * sur un écran de téléphone comme sur un vidéoprojecteur.
 * ------------------------------------------------------------------
 */

/** Envergure du modèle, en unités de scène. Tout en découle. */
export const SPAN = 7.0
const SEMI = SPAN / 2

/* ------------------------------------------------------------ FUSELAGE */

/**
 * Corps de révolution défini par son rayon le long de l'axe, puis légèrement
 * aplati : un fuselage n'est pas un tube parfait.
 */
export function fuselageGeometry(quality = 1) {
  const seg = Math.max(12, Math.round(36 * quality))
  const profile: [number, number][] = [
    [0.02, -1.98],
    [0.115, -1.955],
    [0.2, -1.925],
    [0.265, -1.865],
    [0.325, -1.76],
    [0.375, -1.6],
    [0.415, -1.3],
    [0.43, -0.95],
    [0.435, -0.5],
    [0.435, 0.05],
    [0.415, 0.55],
    [0.365, 1.1],
    [0.295, 1.68],
    [0.215, 2.22],
    [0.15, 2.6],
    [0.095, 2.85],
    [0.05, 2.98],
  ]
  const g = new THREE.LatheGeometry(
    profile.map(([r, z]) => new THREE.Vector2(r, z)),
    seg,
  )
  // L'axe du tour est Y : on couche le corps sur Z, nez vers -Z.
  g.rotateX(Math.PI / 2)
  // Section légèrement ovale, plus haute que large.
  g.scale(0.94, 1, 1)
  g.computeVertexNormals()
  return g
}

/* ---------------------------------------------------------------- AILE */

/**
 * Demi-aile extrudée à partir d'un VRAI profil (définition NACA), pas d'un
 * parallélépipède : le bord d'attaque arrondi et le bord de fuite effilé
 * se voient immédiatement, surtout en vue éclatée.
 */
export function wingGeometry(quality = 1) {
  const chord = 0.92
  const pts = nacaOutline(parseNaca('2412'), Math.max(24, Math.round(56 * quality)))
  const shape = new THREE.Shape()
  pts.forEach((p, i) => {
    const x = (p.x - 0.28) * chord
    const y = p.y * chord
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)
  })
  shape.closePath()

  const g = new THREE.ExtrudeGeometry(shape, {
    depth: SEMI - 0.12,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.045,
    bevelSegments: Math.max(1, Math.round(3 * quality)),
    curveSegments: 1,
  })
  // Extrusion sur Z → on la bascule sur X pour en faire une envergure.
  g.rotateY(-Math.PI / 2)
  g.computeVertexNormals()
  return g
}

/** Aileron : volet mobile en bout d'aile, décalé vers le bord de fuite. */
export function aileronGeometry() {
  const g = new THREE.BoxGeometry(1.42, 0.045, 0.2)
  g.computeVertexNormals()
  return g
}

/** Volet de courbure, côté emplanture. */
export function flapGeometry() {
  const g = new THREE.BoxGeometry(1.3, 0.05, 0.22)
  return g
}

/* ------------------------------------------------------------ EMPENNAGE */

/** Dérive en flèche, sommet arrondi — la signature de la silhouette. */
export function finGeometry(quality = 1) {
  const s = new THREE.Shape()
  s.moveTo(-0.42, 0)
  s.lineTo(-0.1, 0.62)
  s.quadraticCurveTo(0.02, 0.94, 0.3, 0.99)
  s.lineTo(0.62, 1.0)
  s.quadraticCurveTo(0.78, 0.98, 0.76, 0.86)
  s.lineTo(0.72, 0.06)
  s.lineTo(0.5, 0)
  s.closePath()

  const g = new THREE.ExtrudeGeometry(s, {
    depth: 0.075,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.022,
    bevelSegments: Math.max(1, Math.round(2 * quality)),
    curveSegments: Math.max(3, Math.round(8 * quality)),
  })
  g.center()
  // Le plan de la dérive contient l'axe du fuselage : épaisseur sur X.
  // Signe négatif, sinon le bord de fuite pointerait vers l'avant.
  g.rotateY(-Math.PI / 2)
  g.computeVertexNormals()
  return g
}

/** Gouverne de direction, articulée en arrière de la dérive. */
export function rudderGeometry() {
  const s = new THREE.Shape()
  s.moveTo(0, 0)
  s.lineTo(0.34, 0.04)
  s.lineTo(0.2, 0.9)
  s.lineTo(0, 0.86)
  s.closePath()
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.06, bevelEnabled: false })
  g.center()
  g.rotateY(-Math.PI / 2)
  return g
}

/** Empennage horizontal, monté bas sur le cône arrière. */
export function stabGeometry(quality = 1) {
  const chord = 0.5
  const pts = nacaOutline(parseNaca('0010'), Math.max(16, Math.round(34 * quality)))
  const shape = new THREE.Shape()
  pts.forEach((p, i) => {
    const x = (p.x - 0.35) * chord
    const y = p.y * chord
    i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y)
  })
  shape.closePath()
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: 0.94,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.035,
    bevelSegments: 2,
    curveSegments: 1,
  })
  g.rotateY(-Math.PI / 2)
  g.computeVertexNormals()
  return g
}

/** Gouverne de profondeur. */
export function elevatorGeometry() {
  return new THREE.BoxGeometry(1.9, 0.045, 0.17)
}

/* ---------------------------------------------------------------- CABINE */

/**
 * Verrière : profil latéral extrudé sur la largeur de cabine. Le pare-brise
 * incliné, le pavillon et la retombée arrière sont dessinés d'un trait.
 */
export function canopyGeometry(quality = 1) {
  const s = new THREE.Shape()
  s.moveTo(-0.95, 0)
  s.quadraticCurveTo(-0.82, 0.32, -0.5, 0.45)
  s.lineTo(0.02, 0.5)
  s.quadraticCurveTo(0.36, 0.47, 0.48, 0.3)
  s.lineTo(0.55, 0)
  s.closePath()

  const g = new THREE.ExtrudeGeometry(s, {
    depth: 0.78,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.055,
    bevelSegments: Math.max(2, Math.round(4 * quality)),
    curveSegments: Math.max(6, Math.round(14 * quality)),
  })
  g.center()
  // Profil dans le plan ZY, épaisseur sur X. Signe négatif : sans lui le
  // pare-brise regarderait vers la queue.
  g.rotateY(-Math.PI / 2)
  g.computeVertexNormals()
  return g
}

/* ------------------------------------------------------------- ATTERRISSEUR */

/** Jambe principale composite : lame incurvée, pas un tube droit. */
export function mainLegGeometry(side: 1 | -1) {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(side * 0.36, -0.24, 0),
    new THREE.Vector3(side * 0.72, -0.46, 0),
    new THREE.Vector3(side * 0.92, -0.62, 0),
  ])
  const g = new THREE.TubeGeometry(curve, 14, 0.045, 8, false)
  g.scale(1, 1, 1.9) // section aplatie, comme une lame
  return g
}

export function noseLegGeometry() {
  const g = new THREE.CylinderGeometry(0.038, 0.05, 0.62, 10)
  return g
}

export function wheelGeometry(radius = 0.155, quality = 1) {
  const g = new THREE.CylinderGeometry(
    radius,
    radius,
    0.1,
    Math.max(10, Math.round(24 * quality)),
  )
  g.rotateZ(Math.PI / 2)
  return g
}

export function spatGeometry() {
  const g = new THREE.SphereGeometry(0.2, 12, 10)
  g.scale(0.45, 0.72, 1.35)
  return g
}

/* ------------------------------------------------------------- PROPULSION */

export function spinnerGeometry(quality = 1) {
  // Base au pare-feu (z = 0), pointe vers l'avant (z négatif).
  const profile: [number, number][] = [
    [0.205, 0],
    [0.2, -0.09],
    [0.178, -0.21],
    [0.14, -0.33],
    [0.085, -0.44],
    [0.006, -0.52],
  ]
  const g = new THREE.LatheGeometry(
    profile.map(([r, z]) => new THREE.Vector2(r, z)),
    Math.max(10, Math.round(26 * quality)),
  )
  g.rotateX(Math.PI / 2)
  g.computeVertexNormals()
  return g
}

/** Pale : vrillée et effilée, pas une planche. */
export function bladeGeometry() {
  const g = new THREE.BoxGeometry(0.085, 0.66, 0.022, 1, 6, 1)
  const pos = g.getAttribute('position') as THREE.BufferAttribute
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i)
    const t = (y + 0.33) / 0.66 // 0 au pied, 1 en bout
    // Corde réduite en bout, vrillage progressif.
    const taper = 1 - t * 0.45
    const twist = (1 - t) * 0.5
    const x = pos.getX(i) * taper
    const z = pos.getZ(i)
    pos.setX(i, x * Math.cos(twist) - z * Math.sin(twist))
    pos.setZ(i, x * Math.sin(twist) + z * Math.cos(twist))
  }
  g.translate(0, 0.33, 0)
  g.computeVertexNormals()
  return g
}

/* ------------------------------------------------------------------ POSES */

/** Emplacements de chaque pièce — partagés par l'intro et la vue éclatée. */
export const POSE = {
  fuselage: [0, 0, 0] as const,

  // Les demi-voilures sont extrudées vers -X ; la droite est obtenue par
  // symétrie (scale -1). Sans cela les deux moitiés se superposeraient.
  wingA: [-0.06, 0.45, -0.28] as const,
  wingB: [0.06, 0.45, -0.28] as const,
  /** Coordonnées LOCALES dans le repère d'une demi-aile (héritent du dièdre). */
  aileronLocal: [-2.6, 0, 0.78] as const,
  flapLocal: [-1.06, 0, 0.79] as const,

  canopy: [0, 0.36, -0.42] as const,

  fin: [0, 0.8, 2.36] as const,
  rudder: [0, 0.8, 2.9] as const,
  stabA: [-0.03, 0.09, 2.42] as const,
  stabB: [0.03, 0.09, 2.42] as const,
  elevator: [0, 0.09, 2.79] as const,

  spinner: [0, 0, -1.88] as const,
  prop: [0, 0, -2.06] as const,

  mainLegRight: [0.16, -0.34, 0.34] as const,
  mainLegLeft: [-0.16, -0.34, 0.34] as const,
  wheelRight: [1.08, -0.96, 0.34] as const,
  wheelLeft: [-1.08, -0.96, 0.34] as const,
  noseLeg: [0, -0.6, -1.6] as const,
  noseWheel: [0, -0.93, -1.6] as const,
} as const
