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
  blocks: Block[]
}

export type CourseStatus =
  /** Contenu définitif, fourni par l'auteur. */
  | 'ready'
  /** Architecture + simulations en place, texte de démonstration à remplacer. */
  | 'demo'
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
  sections: CourseSection[]
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
