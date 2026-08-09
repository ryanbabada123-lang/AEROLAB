/**
 * GÉOMÉTRIE ET MODÈLE AÉRODYNAMIQUE — base des simulations (§27).
 *
 * ------------------------------------------------------------------
 * HONNÊTETÉ DU MODÈLE (§38 / §51.3)
 * ------------------------------------------------------------------
 * 1. La géométrie du profil suit la définition analytique NACA à 4 chiffres.
 *    C'est une formule publiée, pas une approximation maison.
 *
 * 2. Le coefficient de portance utilise la THÉORIE DES PROFILS MINCES
 *    (Cl = 2π·α en régime linéaire, incompressible, non visqueux), à
 *    laquelle on ajoute une saturation puis une chute au-delà de
 *    l'incidence de décrochage.
 *
 *    Cette chute post-décrochage est un HABILLAGE PÉDAGOGIQUE : elle
 *    reproduit la forme qualitative de la courbe réelle, elle ne prédit
 *    pas les valeurs d'un profil donné. Le décrochage réel dépend du
 *    profil, du nombre de Reynolds, de l'état de surface et de la
 *    configuration. Toute interface exploitant ce module DOIT afficher
 *    cet avertissement — voir MODEL_NOTE.
 *
 * 3. Aucune performance d'aéronef réel n'est calculée ici.
 * ------------------------------------------------------------------
 */

export const MODEL_NOTE = {
  geometry:
    'Profil tracé avec la définition analytique NACA à 4 chiffres (distribution d’épaisseur + ligne de cambrure).',
  lift:
    'Portance calculée par la théorie des profils minces (Cl = 2π·α, régime linéaire), prolongée par une saturation puis une chute au-delà de l’incidence de décrochage.',
  limits:
    'Modèle pédagogique, en écoulement incompressible et bidimensionnel. Il reproduit la FORME de la courbe, pas les valeurs d’un profil réel : celles-ci dépendent du profil exact, du nombre de Reynolds, de l’état de surface et de la configuration. Ne jamais l’utiliser pour une préparation de vol.',
} as const

export interface NacaParams {
  /** Cambrure maximale, en fraction de corde (le 1er chiffre / 100). */
  m: number
  /** Position de la cambrure max, en fraction de corde (2e chiffre / 10). */
  p: number
  /** Épaisseur relative max, en fraction de corde (2 derniers chiffres / 100). */
  t: number
}

/** "2412" → { m: 0.02, p: 0.4, t: 0.12 } */
export function parseNaca(code: string): NacaParams {
  const s = code.padStart(4, '0')
  return {
    m: Number(s[0]) / 100,
    p: Number(s[1]) / 10,
    t: Number(s.slice(2)) / 100,
  }
}

/** Demi-épaisseur du profil à l'abscisse x (0→1). Formule NACA 4 chiffres. */
function thickness(x: number, t: number) {
  return (
    5 *
    t *
    (0.2969 * Math.sqrt(x) -
      0.126 * x -
      0.3516 * x * x +
      0.2843 * x * x * x -
      // -0.1036 ferme le bord de fuite (au lieu de -0.1015 qui le laisse ouvert).
      0.1036 * x * x * x * x)
  )
}

/** Ligne de cambrure et sa pente à l'abscisse x. */
function camber(x: number, m: number, p: number) {
  if (m === 0 || p === 0) return { yc: 0, dy: 0 }
  if (x < p) {
    return {
      yc: (m / (p * p)) * (2 * p * x - x * x),
      dy: ((2 * m) / (p * p)) * (p - x),
    }
  }
  const q = (1 - p) * (1 - p)
  return {
    yc: (m / q) * (1 - 2 * p + 2 * p * x - x * x),
    dy: ((2 * m) / q) * (p - x),
  }
}

export interface Point {
  x: number
  y: number
}

/**
 * Contour fermé du profil, corde 1, bord d'attaque à l'origine.
 * Points ordonnés : extrados du bord de fuite vers le bord d'attaque,
 * puis intrados vers le bord de fuite.
 */
export function nacaOutline(params: NacaParams, samples = 90): Point[] {
  const { m, p, t } = params
  const upper: Point[] = []
  const lower: Point[] = []

  for (let i = 0; i <= samples; i++) {
    // Répartition en cosinus : plus de points au bord d'attaque, là où la
    // courbure est forte.
    const beta = (Math.PI * i) / samples
    const x = (1 - Math.cos(beta)) / 2
    const yt = thickness(x, t)
    const { yc, dy } = camber(x, m, p)
    const th = Math.atan(dy)
    upper.push({ x: x - yt * Math.sin(th), y: yc + yt * Math.cos(th) })
    lower.push({ x: x + yt * Math.sin(th), y: yc - yt * Math.cos(th) })
  }

  return [...upper.reverse(), ...lower.slice(1)]
}

/** Incidence de portance nulle (deg) — issue de la cambrure, ≈ 0 si symétrique. */
export function zeroLiftAngle(params: NacaParams): number {
  // Approximation usuelle : une aile cambrée porte déjà à incidence nulle,
  // donc son incidence de portance nulle est négative.
  return -params.m * 100 * 1.1
}

export interface LiftState {
  /** Incidence (deg). */
  alpha: number
  /** Coefficient de portance (sans dimension). */
  cl: number
  /** Coefficient de traînée — tendance qualitative uniquement. */
  cd: number
  stalled: boolean
  /** Fraction de l'extrados où l'écoulement est décollé, 0→1. */
  separation: number
}

export interface LiftModelOptions {
  /** Incidence de décrochage (deg). */
  alphaStall?: number
  /** Traînée parasite minimale — ordre de grandeur pédagogique. */
  cd0?: number
  /** Facteur de traînée induite. */
  k?: number
}

/**
 * Coefficient de portance selon l'incidence.
 * Voir MODEL_NOTE : linéaire jusqu'au décrochage, puis chute conventionnelle.
 */
export function liftModel(
  alphaDeg: number,
  params: NacaParams,
  opts: LiftModelOptions = {},
): LiftState {
  const { alphaStall = 15, cd0 = 0.02, k = 0.05 } = opts
  const a0 = zeroLiftAngle(params)
  const eff = alphaDeg - a0

  // Régime linéaire : Cl = 2π·α (α en radians).
  const slope = (2 * Math.PI * Math.PI) / 180
  const linear = slope * eff

  const stalled = alphaDeg > alphaStall
  let cl: number
  if (!stalled) {
    // Léger arrondi juste avant le décrochage, comme sur une polaire réelle.
    const near = Math.max(0, (alphaDeg - (alphaStall - 4)) / 4)
    cl = linear * (1 - 0.14 * near * near)
  } else {
    const clMax = slope * (alphaStall - a0) * 0.86
    const over = alphaDeg - alphaStall
    cl = clMax * Math.max(0.32, 1 - 0.055 * over - 0.0016 * over * over)
  }

  // Décollement : négligeable en régime linéaire, il remonte vers le bord
  // d'attaque une fois le décrochage installé.
  const separation = stalled
    ? Math.min(0.95, 0.3 + (alphaDeg - alphaStall) * 0.05)
    : Math.max(0, (alphaDeg - (alphaStall - 5)) / 5) * 0.22

  const cd = cd0 + k * cl * cl + (stalled ? 0.06 + separation * 0.42 : 0)

  return { alpha: alphaDeg, cl, cd, stalled, separation }
}

/** Échantillonne la courbe Cl = f(α) pour le graphique. */
export function liftCurve(
  params: NacaParams,
  opts: LiftModelOptions = {},
  from = -8,
  to = 24,
  step = 0.5,
): { alpha: number; cl: number }[] {
  const pts: { alpha: number; cl: number }[] = []
  for (let a = from; a <= to + 1e-9; a += step) {
    pts.push({ alpha: a, cl: liftModel(a, params, opts).cl })
  }
  return pts
}
