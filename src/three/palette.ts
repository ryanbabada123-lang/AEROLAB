import * as THREE from 'three'

/** Palette 3D — alignée sur les tokens CSS (§51.1). */
export const P3 = {
  void: new THREE.Color('#05070a'),
  voidWarm: new THREE.Color('#0c1119'),
  snow: new THREE.Color('#fbfcfd'),
  frost: new THREE.Color('#eef2f7'),
  ice: new THREE.Color('#dfe8f0'),
  glacier: new THREE.Color('#cfe0ee'),
  glacierDeep: new THREE.Color('#9fbdd6'),
  graphite: new THREE.Color('#2b333d'),
  ink: new THREE.Color('#0b0f14'),
  electric: new THREE.Color('#1667ff'),
  hot: new THREE.Color('#ff8a3d'),
}

/** Couleur de fond de la scène en fonction de la progression narrative. */
export function skyColor(p: number, out: THREE.Color) {
  if (p < 0.45) {
    // Nuit → aube froide pendant l'approche et le cockpit.
    out.copy(P3.void).lerp(P3.voidWarm, Math.min(1, p / 0.45))
  } else if (p < 0.6) {
    // Le ciel blanchit au décollage.
    const t = (p - 0.45) / 0.15
    out.copy(P3.voidWarm).lerp(P3.glacier, t * t)
  } else if (p < 0.78) {
    const t = (p - 0.6) / 0.18
    out.copy(P3.glacier).lerp(P3.frost, t)
  } else {
    const t = Math.min(1, (p - 0.78) / 0.12)
    out.copy(P3.frost).lerp(P3.snow, t)
  }
  return out
}
