import type { TrackId } from '@/data/tracks'

/**
 * SCHÉMA DE CONTENU (§26).
 *
 * Le contenu est séparé du code : une fiche est une donnée, pas un
 * composant. Ajouter un cours ne demande jamais de toucher au rendu — il
 * suffit de décrire ses blocs. Chaque type de bloc a son composant dédié
 * dans components/course/.
 */

/**
 * Identifiants des simulations et schémas RÉELLEMENT implémentés.
 * On n'ouvre pas d'identifiant tant que le composant correspondant n'existe
 * pas : une référence morte finirait tôt ou tard dans une page de démo.
 */
export type SimId = 'lift-airfoil' | 'lift-curve'

export type DiagramId = 'pressure-field'

/**
 * Schémas redessinés en SVG depuis les cours de l'auteur.
 *
 * RÈGLE (assets/RESSOURCES.md §1) : géométrie, proportions et étiquettes
 * identiques à l'original. Chaque identifiant ci-dessous a
 *   — un composant SVG dans components/course/schemas/,
 *   — une reproduction de l'original dans public/verif/<cours>/<id>.webp,
 *   — une ligne dans la page de comparatif /verification/<cours>.
 * On n'ouvre pas d'identifiant sans ces trois pièces.
 */
export type SchemaId =
  | 'atmosphere-coupe'
  | 'atmosphere-temperature'
  | 'colonne-air'
  | 'vent-forces'
  | 'cellules-hadley'
  | 'fleches-vent'
  | 'gradient-adiabatique'
  | 'stabilite-instabilite'
  | 'front-chaud-coupe'
  | 'front-froid-coupe'
  | 'symbole-front-chaud'
  | 'symbole-front-froid'
  | 'symboles-occlusion'
  | 'brouillard-radiation'
  | 'brouillard-advection'
  | 'brouillard-evaporation'
  | 'brouillard-pente'
  | 'visibilite-secteurs'
  | 'visibilite-brume'
  | 'prise-de-decision'
  // Cours 2 — Aérodynamique et mécanique du vol
  | 'polaire-aile'
  | 'polaire-etablissement'
  | 'composition-forces'
  | 'equilibres'
  // Cours 3 — Étude des aéronefs
  | 'chaine-barometrique'
  | 'vor-to-from'
  // Cours 4C — Aéromédecine
  | 'saturation-oxygene'
  | 'seuils-hypoxie'
  | 'illusions-piste'
  | 'pressurisation-cabine'
  | 'facteurs-de-charge'
  | 'surpression-pulmonaire'

export interface Source {
  /** Intitulé exact de la source. */
  label: string
  /** Type — on ne mélange pas un règlement et une illustration (§40). */
  kind: 'officiel' | 'pédagogique' | 'ouvrage' | 'fiche auteur' | 'illustration'
  url?: string
  detail?: string
}

export type Block =
  /** Chapeau introductif, gros corps de texte. */
  | { type: 'lead'; text: string }
  | { type: 'text'; text: string }
  | { type: 'concept'; title: string; text: string }
  | { type: 'definition'; term: string; text: string }
  | {
      type: 'formula'
      latex: string
      caption?: string
      /** Légende des symboles — une formule sans ses unités n'apprend rien. */
      where?: { sym: string; desc: string }[]
    }
  | { type: 'diagram'; diagram: DiagramId; caption?: string }
  /**
   * Schéma redessiné en SVG depuis le cours source. `page` renvoie à la
   * page du PDF d'origine — c'est ce qui rend la vérification possible.
   */
  | { type: 'schema'; schema: SchemaId; caption?: string; page: number }
  /** Sous-titre interne à une section (numérotation de l'auteur conservée). */
  | { type: 'heading'; level: 3 | 4; text: string }
  /** Liste. `ordered` pour les énumérations numérotées de l'auteur. */
  | { type: 'list'; items: string[]; ordered?: boolean }
  /**
   * Tableau. Plusieurs tableaux des cours sont des IMAGES dans le PDF :
   * leur texte est absent de la couche texte et a été relevé à l'écran.
   * `page` permet de revenir à l'original pour contrôle.
   */
  | {
      type: 'table'
      caption?: string
      page?: number
      headers: string[]
      rows: string[][]
    }
  /**
   * Message codé (METAR, TAF, SIGMET) suivi de son décodage ligne à ligne,
   * tel que l'auteur le présente. Le code reste en chasse fixe.
   */
  | { type: 'coded'; code: string; decode: string[] }
  /**
   * Frise chronologique. Le chapitre d'histoire est une suite de dates :
   * les rendre en paragraphes noierait la chronologie, qui est justement
   * ce que l'élève doit retenir.
   */
  | {
      type: 'timeline'
      entries: { date: string; text: string; fait?: string }[]
    }
  | { type: 'simulation'; sim: SimId; title: string; brief?: string }
  | { type: 'keypoints'; title?: string; items: string[] }
  | {
      type: 'callout'
      /** `model` sert à signaler explicitement une simplification (§25). */
      tone: 'note' | 'warn' | 'model'
      title: string
      text: string
    }
  | { type: 'quiz'; quizId: string }
  /** Emplacement réservé, visible et assumé — jamais de faux texte (§51.3). */
  | { type: 'awaiting'; what: string }

export interface CourseSection {
  id: string
  /** Numéro affiché dans le sommaire latéral. */
  title: string
  /** Numérotation de l'auteur, conservée telle quelle (« 1 », « 10 »). */
  number?: string
  /** Pages du document source couvertes par la section. */
  pages?: [number, number]
  blocks: Block[]
}

export type CourseStatus =
  /** Contenu définitif, fourni par l'auteur. */
  | 'ready'
  /** Architecture + simulations en place, texte de démonstration à remplacer. */
  | 'demo'
  /**
   * Texte intégral et fidèle de l'auteur, mais schémas pas encore
   * redessinés. Distinct de `demo` : ici rien n'est à remplacer, il reste
   * à dessiner.
   */
  | 'text-only'
  /**
   * Rédigé pour ce site d'après des sources publiques citées, faute de
   * fiche de l'auteur — et PAS ENCORE RELU PAR UN INSTRUCTEUR. Le cours
   * d'histoire est dans ce cas.
   */
  | 'sourced'
  /** Coquille prête, aucun contenu encore. */
  | 'awaiting-content'

export interface Course {
  id: string
  track: TrackId
  subject: string
  title: string
  claim: string
  status: CourseStatus
  /** Durée de lecture indicative, en minutes. Omise si inconnue. */
  minutes?: number
  /**
   * Document d'origine, quand le cours est la reprise mot pour mot d'une
   * fiche de l'auteur. Alimente le bandeau de provenance et la page de
   * comparatif des schémas.
   */
  origin?: {
    /** Fichier source, chemin depuis la racine du dépôt. */
    file: string
    /** Auteur du document — l'attribution détaillée est sur /credits. */
    author: string
    edition: string
    pages: number
    /** Identifiant de la page de comparatif : /verification/<verifyId>. */
    verifyId?: string
  }
  /**
   * Sections chargées d'emblée. Vide pour les cours volumineux, qui
   * passent par `loadSections`.
   */
  sections: CourseSection[]
  /**
   * Chargement différé des sections.
   *
   * Les six cours extraits pèsent 720 Ko de texte à eux seuls. Les embarquer
   * dans le paquet principal le faisait passer de 365 à 937 Ko : tout
   * visiteur de la page d'accueil téléchargeait les 343 pages du BIA. Chaque
   * cours est donc un module à part, demandé au moment où on l'ouvre.
   */
  loadSections?: () => Promise<CourseSection[]>
  sources: Source[]
}

export interface Subject {
  id: string
  track: TrackId
  name: string
  line: string
  /** Cours rattachés. Vide = matière en attente des fiches. */
  courses: string[]
}
