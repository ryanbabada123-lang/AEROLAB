export const clamp = (v: number, min = 0, max = 1) =>
  v < min ? min : v > max ? max : v

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/** Remap linéaire de [a,b] vers [0,1], borné. */
export const range = (v: number, a: number, b: number) =>
  clamp((v - a) / (b - a || 1))

/** Remap de [a,b] vers [c,d], borné. */
export const remap = (v: number, a: number, b: number, c: number, d: number) =>
  lerp(c, d, range(v, a, b))

export const smoothstep = (t: number) => {
  const x = clamp(t)
  return x * x * (3 - 2 * x)
}

/** Rampe douce sur [a,b] : 0 avant a, 1 après b, smooth entre. */
export const ramp = (v: number, a: number, b: number) =>
  smoothstep(range(v, a, b))

/** Fenêtre : monte sur [a,b], reste à 1, redescend sur [c,d]. */
export const window4 = (v: number, a: number, b: number, c: number, d: number) =>
  ramp(v, a, b) * (1 - ramp(v, c, d))

/** Lissage exponentiel indépendant du framerate. */
export const damp = (current: number, target: number, lambda: number, dt: number) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt))

export const degToRad = (d: number) => (d * Math.PI) / 180
export const radToDeg = (r: number) => (r * 180) / Math.PI
