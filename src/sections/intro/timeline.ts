/**
 * PARTITION DE L'INTRO — les six scènes du storyboard.
 *
 * Source de vérité : `docs/STORYBOARD-INTRO.md`, dont la frise a été
 * arrêtée par l'auteur du projet (voir aussi ETAT-DU-PROJET §2, « Séquence
 * de l'intro : six scènes de montagne, puis Bienvenue dans l'AeroLab »).
 *
 * La version précédente tenait sur sept phases aux titres différents —
 * « le cockpit », « comprendre » — héritées d'avant le storyboard. Elle est
 * remplacée ici scène pour scène, avec les bornes du document :
 *
 *   0 → 14 %   01  UN RÊVE.                 —
 *   14 → 28 %  02  UN MATIN.                —
 *   28 → 44 %  03  UNE MACHINE.             Tecnam F-HOOT
 *   44 → 56 %  04  UN CIEL.                 —
 *   56 → 78 %  05  UNE PREMIÈRE FOIS.       A350, décollage
 *   78 → 90 %  06  LE CIEL EST À TOI.       A350, orbite libre
 *   90 → 100 %     BIENVENUE DANS L'AÉRO LAB.  A350, passage et atterrissage
 *
 * Une seule échelle 0 → 1 pour toute la séquence : la scène 3D et les
 * couches de texte lisent les mêmes bornes, donc la synchronisation est
 * structurelle et non approximative.
 */

/** Bornes des six scènes, telles que le storyboard les fixe. */
export const SCENES = {
  reve: [0.0, 0.14],
  matin: [0.14, 0.28],
  machine: [0.28, 0.44],
  ciel: [0.44, 0.56],
  premiereFois: [0.56, 0.78],
  cielATooi: [0.78, 0.9],
  bienvenue: [0.9, 1.0],
} as const

export const INTRO = {
  /**
   * Longueur de la zone scrollable, en hauteurs d'écran. Sept scènes
   * demandent plus de course que les six phases précédentes, sans quoi
   * l'orbite autour du Tecnam et le décollage se jouent trop vite.
   */
  lengthVh: 940,

  // ---- bornes de scène, dérivées du storyboard ----
  dream: SCENES.reve[0],
  morning: SCENES.matin[0],
  /** Le Tecnam entre en scène 03 — c'est « la machine ». */
  machine: SCENES.machine[0],
  sky: SCENES.ciel[0],
  firstTime: SCENES.premiereFois[0],
  freeSky: SCENES.cielATooi[0],
  welcome: SCENES.bienvenue[0],

  // ---- repères de mise en scène 3D ----
  //
  // Ces cinq marques sont celles que lisent Stage.tsx et camera.ts. Elles
  // ne sont plus posées à la main : elles se déduisent des scènes, ce qui
  // garantit qu'un déplacement de scène entraîne la mise en scène avec lui.

  /** L'appareil se devine, très loin — fin de la scène 02. */
  planeAppears: 0.22,
  /** Rotation autour du train principal, au cœur de la scène 05. */
  takeoff: 0.62,
  /**
   * Bascule nuit → jour. Le storyboard la place en scène 02 : « la brume se
   * dissipe, le ciel s'ouvre, le relief se durcit ». C'est aussi le seuil
   * où l'encre des textes passe du clair au sombre.
   */
  skyTurnsWhite: 0.2,
  /** Au-dessus de la mer de nuages — scène 04. */
  dreamHigh: SCENES.ciel[0],
  /** Orbite libre autour de l'A350 — scène 06. */
  wing: SCENES.cielATooi[0],

  /**
   * Fenêtre du poste de pilotage A400M.
   *
   * Le storyboard ne lui donne pas de scène à elle : ses six scènes vont du
   * rêve au ciel, et l'intérieur n'y figure pas. Le poste est donc rattaché
   * à la scène 03 — « une machine » — qui est le moment où l'appareil cesse
   * d'être une silhouette pour devenir un objet qu'on inspecte. Il n'est
   * monté que dans cette fenêtre, puis démonté (voir ETAT-DU-PROJET §1).
   *
   * À signaler à l'auteur du projet : c'est une décision d'implémentation,
   * pas une consigne du storyboard.
   */
  cockpitEnter: 0.33,
  cockpitExit: 0.42,
} as const

/**
 * Chapitres de la barre de repère, et surtout moyen d'avancer sans molette.
 * Un par scène du storyboard, avec son numéro affiché.
 */
export const CHAPTERS: { at: number; id: string; label: string }[] = [
  { at: SCENES.reve[0], id: '01', label: 'Un rêve' },
  { at: SCENES.matin[0], id: '02', label: 'Un matin' },
  { at: SCENES.machine[0], id: '03', label: 'Une machine' },
  { at: SCENES.ciel[0], id: '04', label: 'Un ciel' },
  { at: SCENES.premiereFois[0], id: '05', label: 'Une première fois' },
  { at: SCENES.cielATooi[0], id: '06', label: 'Le ciel est à toi' },
]

/**
 * Micro-libellés des maquettes, conservés à la lettre.
 * `at` est la scène où le libellé apparaît, `corner` sa place dans le cadre.
 */
export const MICRO_LABELS: {
  text: string
  at: [number, number]
  corner: 'bottom-center' | 'bottom-right' | 'right'
}[] = [
  { text: 'SCROLL TO BEGIN', at: [0.0, 0.12], corner: 'bottom-center' },
  { text: 'TECNAM P2008 JC', at: [0.3, 0.43], corner: 'bottom-right' },
  { text: 'FREE TO FLY', at: [0.46, 0.55], corner: 'right' },
]

/** Texte de la séquence — chaque temps a ses bornes (in, full, fade, out). */
export interface Beat {
  id: string
  kind: 'whisper' | 'statement' | 'hero' | 'question'
  text: string
  at: [number, number, number, number]
}

/**
 * Les titres de scène sont ceux des maquettes, avec leur point final —
 * « UN RÊVE. », « UNE MACHINE. » Les phrases d'accroche des scènes 05 et 06
 * sont celles du cahier des charges, reprises telles quelles par le
 * storyboard.
 */
export const BEATS: Beat[] = [
  // ---- 01 · UN RÊVE. ----
  // Le premier temps est lisible AVANT tout scroll : les bornes basses sont
  // négatives pour que l'opacité vaille 1 dès la première frame.
  { id: 's1', kind: 'hero', text: 'Un rêve.', at: [-0.04, -0.005, 0.1, 0.135] },

  // ---- 02 · UN MATIN. ----
  // Le titre de la 01 s'efface par le haut pendant que celui de la 02
  // arrive par le bas : les fenêtres se chevauchent volontairement.
  { id: 's2', kind: 'hero', text: 'Un matin.', at: [0.13, 0.165, 0.245, 0.275] },
  {
    id: 's2b',
    kind: 'whisper',
    text: 'La brume se dissipe. Le rêve devient regardable.',
    at: [0.2, 0.222, 0.252, 0.272],
  },

  // ---- 03 · UNE MACHINE. ----
  { id: 's3', kind: 'hero', text: 'Une machine.', at: [0.275, 0.31, 0.4, 0.432] },
  {
    id: 's3b',
    kind: 'whisper',
    text: 'Une immatriculation. Un numéro de série.',
    at: [0.34, 0.362, 0.404, 0.428],
  },
  {
    id: 's3c',
    kind: 'statement',
    text: 'Celle sur laquelle on apprend vraiment.',
    at: [0.39, 0.412, 0.428, 0.44],
  },

  // ---- 04 · UN CIEL. ----
  { id: 's4', kind: 'hero', text: 'Un ciel.', at: [0.432, 0.465, 0.53, 0.556] },
  {
    id: 's4b',
    kind: 'whisper',
    text: 'La récompense du premier vol.',
    at: [0.49, 0.512, 0.538, 0.554],
  },

  // ---- 05 · UNE PREMIÈRE FOIS. ----
  {
    id: 's5',
    kind: 'hero',
    text: 'Une première fois.',
    at: [0.552, 0.586, 0.646, 0.674],
  },
  // Les deux accroches du cahier des charges, posées pendant la montée.
  {
    id: 's5b',
    kind: 'statement',
    text: 'N’as-tu pas toujours rêvé d’être pilote de ligne ?',
    at: [0.672, 0.696, 0.722, 0.74],
  },
  {
    id: 's5c',
    kind: 'statement',
    text: 'N’as-tu pas toujours rêvé de contrôler le ciel ?',
    at: [0.738, 0.758, 0.772, 0.784],
  },

  // ---- 06 · LE CIEL EST À TOI. ----
  {
    id: 's6',
    kind: 'hero',
    text: 'Le ciel est à toi.',
    at: [0.782, 0.808, 0.856, 0.876],
  },
  // La troisième accroche : la séquence cesse de raconter, elle s'adresse.
  {
    id: 's6b',
    kind: 'statement',
    text: 'Le moteur et le cœur de l’avion, c’est toi qui les pilotes.',
    at: [0.856, 0.876, 0.892, 0.902],
  },

  // ---- Final · BIENVENUE DANS L'AÉRO LAB. ----
  // L'A350 traverse le cadre devant le titre : le texte s'installe derrière
  // lui, révélé par son passage.
  {
    id: 'fin',
    kind: 'hero',
    text: 'Bienvenue dans l’Aéro Lab.',
    at: [0.9, 0.928, 0.99, 1.02],
  },
]

/** Les questions révélées en fin de séquence, avant l'entrée dans le site. */
export const QUESTIONS = [
  'Pourquoi un avion vole ?',
  'Comment fonctionne une aile ?',
  'Pourquoi un avion décroche ?',
  'Comment lire ses instruments ?',
  'Comment naviguer ?',
  'Comment lire le ciel ?',
  'Comment prendre une décision ?',
]
