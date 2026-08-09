/**
 * PARTITION DE L'INTRO (§04 → §08)
 *
 * Une seule échelle 0 → 1 pour toute la séquence narrative. Scène 3D et
 * couches de texte lisent les mêmes bornes : la synchronisation est
 * structurelle, pas approximative.
 *
 *   0.00  RÊVE          noir, presque rien
 *   0.10  APPROCHE      l'avion apparaît, très loin
 *   0.30  COCKPIT       la caméra entre, les instruments s'allument
 *   0.46  DÉCOLLAGE     l'avion monte, le ciel blanchit
 *   0.62  LE RÊVE       nuages, lumière, "c'est ton avion"
 *   0.76  BASCULE       le fuselage laisse place au profil d'aile
 *   0.90  AERO//LAB     les questions, puis l'entrée dans la plateforme
 */

export const INTRO = {
  /** Longueur de la zone scrollable de l'intro, en hauteurs d'écran. */
  lengthVh: 860,

  // ---- bornes de scène ----
  dream: 0.0,
  planeAppears: 0.09,
  approach: 0.16,
  cockpitEnter: 0.29,
  cockpitCore: 0.36,
  cockpitExit: 0.45,
  takeoff: 0.47,
  skyTurnsWhite: 0.55,
  dreamHigh: 0.62,
  dissolve: 0.74,
  wing: 0.79,
  questions: 0.88,
  welcome: 0.955,
} as const

/** Texte de la séquence — chaque temps a ses bornes (in, full, fade, out). */
export interface Beat {
  id: string
  kind: 'whisper' | 'statement' | 'hero' | 'question'
  text: string
  at: [number, number, number, number]
}

export const BEATS: Beat[] = [
  // ---- 01 · RÊVE ----
  // Le premier temps est déjà lisible AVANT tout scroll : les bornes basses
  // sont négatives pour que l'opacité vaille 1 à la première frame.
  { id: 'b1', kind: 'hero', text: 'Un rêve.', at: [-0.04, -0.005, 0.028, 0.042] },
  { id: 'b2', kind: 'hero', text: 'Une machine.', at: [0.038, 0.054, 0.074, 0.088] },
  { id: 'b3', kind: 'hero', text: 'Un ciel.', at: [0.084, 0.098, 0.116, 0.13] },
  {
    id: 'b4',
    kind: 'hero',
    text: 'Devenir pilote.',
    at: [0.128, 0.146, 0.172, 0.19],
  },

  // ---- 02 · L'AVION ----
  {
    id: 'b5',
    kind: 'statement',
    text: 'Tout pilote a commencé quelque part.',
    at: [0.196, 0.214, 0.232, 0.246],
  },
  {
    id: 'b6',
    kind: 'whisper',
    text: 'Une première fois sur une piste.',
    at: [0.246, 0.258, 0.268, 0.278],
  },
  {
    id: 'b7',
    kind: 'whisper',
    text: 'Une première fois dans un cockpit.',
    at: [0.278, 0.29, 0.3, 0.31],
  },
  {
    id: 'b8',
    kind: 'whisper',
    text: 'Un premier décollage.',
    at: [0.31, 0.322, 0.332, 0.342],
  },

  // ---- 03 · COCKPIT ----
  {
    id: 'b9',
    kind: 'statement',
    text: "Tu n'es plus spectateur.",
    at: [0.375, 0.395, 0.412, 0.426],
  },
  {
    id: 'b10',
    kind: 'hero',
    text: 'Tu es aux commandes.',
    at: [0.424, 0.442, 0.458, 0.472],
  },

  // ---- 04 · LE RÊVE ----
  {
    id: 'b11',
    kind: 'statement',
    text: 'Imagine-toi ici.',
    at: [0.545, 0.565, 0.585, 0.6],
  },
  {
    id: 'b12',
    kind: 'whisper',
    text: 'Le soleil devant toi.',
    at: [0.6, 0.612, 0.624, 0.634],
  },
  {
    id: 'b13',
    kind: 'whisper',
    text: 'Les nuages sous tes ailes.',
    at: [0.634, 0.646, 0.658, 0.668],
  },
  {
    id: 'b14',
    kind: 'whisper',
    text: 'Et personne pour piloter à ta place.',
    at: [0.668, 0.68, 0.692, 0.702],
  },
  {
    id: 'b15',
    kind: 'hero',
    text: 'C’est ton avion.',
    at: [0.706, 0.722, 0.738, 0.752],
  },

  // ---- 05 · BASCULE ----
  {
    id: 'b16',
    kind: 'statement',
    text: 'Mais avant de voler…',
    at: [0.752, 0.768, 0.782, 0.795],
  },
  {
    id: 'b17',
    kind: 'hero',
    text: 'Il faut comprendre le vol.',
    at: [0.795, 0.812, 0.832, 0.848],
  },
]

/** Les questions de la section §08, révélées en cascade sur le profil d'aile. */
export const QUESTIONS = [
  'Pourquoi un avion vole ?',
  'Comment fonctionne une aile ?',
  'Pourquoi un avion décroche ?',
  'Comment lire ses instruments ?',
  'Comment naviguer ?',
  'Comment lire le ciel ?',
  'Comment prendre une décision ?',
]
