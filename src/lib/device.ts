/**
 * Détection de capacités (§51.2 / §53).
 *
 * RÈGLE : on n'ampute JAMAIS le récit. On ajuste uniquement des paramètres
 * de rendu invisibles pour l'utilisateur : DPR, densité de géométrie,
 * post-processing, fréquence de recalcul.
 */

export type Tier = 'high' | 'mid' | 'low'

export interface DeviceProfile {
  tier: Tier
  /** Device pixel ratio autorisé [min, max] pour le renderer. */
  dpr: [number, number]
  /** Multiplicateur de densité de géométrie / particules. */
  density: number
  /** Ombres autorisées. */
  shadows: boolean
  /** Plateforme prioritaire (§53.1) : desktop, tablette, iPhone. */
  priority: boolean
  isTouch: boolean
  isIOS: boolean
  webgl: boolean
}

let cached: DeviceProfile | null = null

function detectWebGL(): boolean {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    return !!gl
  } catch {
    return false
  }
}

export function getDeviceProfile(): DeviceProfile {
  if (cached) return cached

  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''
  const nav = typeof navigator !== 'undefined' ? navigator : undefined

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    // iPadOS 13+ se déclare "Macintosh" mais expose du multi-touch.
    (/Macintosh/.test(ua) && (nav?.maxTouchPoints ?? 0) > 1)

  const isAndroid = /Android/.test(ua)
  const isTouch =
    (nav?.maxTouchPoints ?? 0) > 0 ||
    (typeof window !== 'undefined' &&
      window.matchMedia('(hover: none) and (pointer: coarse)').matches)

  const coarseWidth = typeof window !== 'undefined' ? window.innerWidth : 1440
  const isPhoneSize = coarseWidth < 768

  // Plateformes prioritaires : desktop, tablette (iPad + Android récent), iPhone.
  // Les autres téléphones (Android phone) → support minimal (§53.1 #4).
  const isAndroidPhone = isAndroid && isPhoneSize
  const priority = !isAndroidPhone

  const cores = nav?.hardwareConcurrency ?? 4
  const mem = (nav as { deviceMemory?: number } | undefined)?.deviceMemory ?? 4

  let tier: Tier = 'high'
  if (isAndroidPhone) tier = 'low'
  else if (isTouch && (cores <= 4 || mem <= 3)) tier = 'low'
  else if (isTouch || cores <= 6 || mem <= 4) tier = 'mid'

  const profile: DeviceProfile = {
    tier,
    dpr: tier === 'high' ? [1, 2] : tier === 'mid' ? [1, 1.75] : [0.75, 1.25],
    density: tier === 'high' ? 1 : tier === 'mid' ? 0.66 : 0.4,
    shadows: tier === 'high',
    priority,
    isTouch,
    isIOS,
    webgl: detectWebGL(),
  }

  cached = profile
  return profile
}

/**
 * Garde-fou framerate : si l'appareil décroche, on baisse la qualité de RENDU
 * (jamais le contenu narratif). Renvoie un multiplicateur 0.5 → 1.
 */
export function createPerfGovernor(onDowngrade: (scale: number) => void) {
  let frames = 0
  let last = performance.now()
  let scale = 1
  let stableLowSamples = 0

  return function tick() {
    frames++
    const now = performance.now()
    const elapsed = now - last
    if (elapsed < 1000) return

    const fps = (frames * 1000) / elapsed
    frames = 0
    last = now

    if (fps < 45 && scale > 0.5) {
      stableLowSamples++
      if (stableLowSamples >= 2) {
        scale = Math.max(0.5, scale - 0.15)
        stableLowSamples = 0
        onDowngrade(scale)
      }
    } else if (fps > 57) {
      stableLowSamples = 0
    }
  }
}
