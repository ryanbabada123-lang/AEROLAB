import * as THREE from 'three'
import { smoothstep } from '@/lib/math'

/**
 * MOUVEMENT DE CAMÉRA (§05 → §08).
 *
 * Une piste de keyframes : position + point visé + focale. On interpole en
 * smoothstep entre deux clés, ce qui donne des départs et des arrivées
 * amortis — jamais de translation linéaire, qui trahit toujours l'animation.
 */

export interface Key {
  p: number
  pos: [number, number, number]
  look: [number, number, number]
  fov: number
  /** Roulis, en radians — la caméra n'est pas un rail de train. */
  roll?: number
  /**
   * 1 = la caméra est À L'INTÉRIEUR de l'appareil.
   * En portrait, on élargit alors le champ au lieu de reculer : reculer
   * ferait sortir la caméra du cockpit.
   */
  inside?: number
}

export const CAMERA_TRACK: Key[] = [
  // ---- RÊVE : immobile dans le noir, l'avion n'existe pas encore ----
  { p: 0.0, pos: [0, 0.6, 16], look: [0, 0.4, 0], fov: 42 },
  { p: 0.08, pos: [0, 0.6, 14.5], look: [0, 0.4, 0], fov: 42 },

  // ---- APPROCHE : l'avion est très loin, la caméra le rejoint ----
  { p: 0.13, pos: [3.5, 1.4, 78], look: [0, 0.2, 0], fov: 34, roll: 0.04 },
  { p: 0.2, pos: [6.2, 1.1, 34], look: [0, 0.3, 0], fov: 36, roll: 0.02 },
  { p: 0.26, pos: [4.4, 0.9, 13], look: [0, 0.35, 0], fov: 40 },

  // ---- ENTRÉE COCKPIT : la caméra vise la verrière puis s'assoit dedans.
  // La place du pilote : les yeux juste au-dessus de la planche, la
  // verrière occupant les deux tiers hauts du cadre. ----
  { p: 0.31, pos: [1.4, 0.9, 5.4], look: [0, 0.5, -0.6], fov: 46, inside: 0.35 },
  { p: 0.35, pos: [0, 0.6, 1.34], look: [0, 0.44, -4], fov: 54, inside: 1 },
  { p: 0.44, pos: [0, 0.52, 0.82], look: [0, 0.3, -4], fov: 58, inside: 1 },

  // ---- DÉCOLLAGE : retour extérieur, l'appareil monte ----
  { p: 0.5, pos: [9, 2.0, 12], look: [0, 0.25, 0], fov: 40, roll: -0.05, inside: 0.2 },
  { p: 0.57, pos: [11, 3.6, 8.5], look: [0, 0.5, 0], fov: 38, roll: -0.03 },

  // ---- CROISIÈRE : orbite lente, le rêve ----
  { p: 0.64, pos: [10.5, 2.6, -7], look: [0, 0.4, 0], fov: 36 },
  { p: 0.71, pos: [-2, 2.8, -13.5], look: [0, 0.35, 0], fov: 34 },
  { p: 0.76, pos: [-11, 1.6, -4], look: [0, 0.3, 0], fov: 36 },

  // ---- BASCULE : l'avion se dissout, on se recentre sur le profil ----
  { p: 0.82, pos: [-6.5, 0.8, 7.5], look: [0, 0.25, 0], fov: 34 },
  { p: 0.88, pos: [0, 0.25, 9.5], look: [0, 0.1, 0], fov: 30 },
  { p: 1.0, pos: [0, 0.1, 8.2], look: [0, 0, 0], fov: 28 },
]

const _a = new THREE.Vector3()
const _b = new THREE.Vector3()

export interface CameraSample {
  pos: THREE.Vector3
  look: THREE.Vector3
  fov: number
  roll: number
  inside: number
}

const sample: CameraSample = {
  pos: new THREE.Vector3(),
  look: new THREE.Vector3(),
  fov: 40,
  roll: 0,
  inside: 0,
}

export function sampleCamera(p: number): CameraSample {
  const track = CAMERA_TRACK
  let i = 0
  while (i < track.length - 2 && p > track[i + 1].p) i++

  const a = track[i]
  const b = track[i + 1]
  const t = smoothstep((p - a.p) / (b.p - a.p || 1))

  _a.set(...a.pos)
  _b.set(...b.pos)
  sample.pos.copy(_a).lerp(_b, t)

  _a.set(...a.look)
  _b.set(...b.look)
  sample.look.copy(_a).lerp(_b, t)

  sample.fov = a.fov + (b.fov - a.fov) * t
  sample.roll = (a.roll ?? 0) + ((b.roll ?? 0) - (a.roll ?? 0)) * t
  sample.inside = (a.inside ?? 0) + ((b.inside ?? 0) - (a.inside ?? 0)) * t
  return sample
}

/**
 * CADRAGE SELON LE FORMAT D'ÉCRAN (§53).
 *
 * Le champ d'une caméra perspective est VERTICAL : un écran étroit et haut
 * (iPhone en portrait) rogne donc la scène sur les côtés. Sans correction,
 * l'avion sort du cadre et le cockpit devient illisible.
 *
 * Correction en deux temps, pour ne jamais tout demander à un seul levier :
 *   — on élargit le champ (mais borné, sinon la perspective se déforme) ;
 *   — on recule la caméra (sauf en intérieur, où reculer sortirait du
 *     cockpit : là, seul le champ travaille).
 *
 * Le RÉCIT est identique sur tous les formats — seul le cadrage s'ajuste.
 */
export function fitToAspect(s: CameraSample, aspect: number) {
  const REF = 1.6
  const k = Math.min(Math.max(REF / aspect, 1), 2.6)
  if (k <= 1.001) return s

  const inside = Math.min(Math.max(s.inside, 0), 1)
  const fovK = 1 + (k - 1) * (0.6 + inside * 0.4)
  const maxFov = 74 + inside * 16
  s.fov = Math.min(s.fov * fovK, maxFov)

  const distK = 1 + (k - 1) * 0.42 * (1 - inside)
  if (distK > 1.001) {
    _a.copy(s.pos).sub(s.look).multiplyScalar(distK)
    s.pos.copy(s.look).add(_a)
  }
  return s
}
