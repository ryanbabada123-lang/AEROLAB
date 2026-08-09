import type { Course, Subject } from './types'
import { portance } from './bia/aerodynamique-portance'

/**
 * REGISTRE DE CONTENU (§26 / §52).
 *
 * Ajouter une fiche = ajouter un objet ici. Aucun composant à modifier.
 *
 * PÉRIMÈTRE ASSUMÉ :
 * — Les matières BIA listées ci-dessous sont exactement celles énumérées par
 *   l'auteur (§11). Aucune n'a été ajoutée pour remplir l'interface.
 * — Les matières PPL et ATPL ne sont PAS listées : l'auteur ne les a pas
 *   fournies (§12 / §13). Leurs pages exposent l'architecture prête à les
 *   recevoir plutôt qu'un découpage inventé.
 */

export const COURSES: Course[] = [portance]

export const courseById = (id: string) => COURSES.find((c) => c.id === id)

export const coursesOfSubject = (subjectId: string) =>
  COURSES.filter((c) => c.subject === subjectId)

/** Matières BIA — liste fournie par l'auteur, en attente des fiches. */
export const BIA_SUBJECTS: Subject[] = [
  {
    id: 'aerodynamique',
    track: 'bia',
    name: 'Aérodynamique',
    line: "Comment naît la portance, ce qui freine, ce qui décroche.",
    courses: ['bia-aero-portance'],
  },
  {
    id: 'aeronefs',
    track: 'bia',
    name: 'Connaissance des aéronefs',
    line: "Structure, motorisation, commandes, systèmes.",
    courses: [],
  },
  {
    id: 'meteorologie',
    track: 'bia',
    name: 'Météorologie',
    line: "Lire l'atmosphère avant d'y entrer.",
    courses: [],
  },
  {
    id: 'navigation',
    track: 'bia',
    name: 'Navigation',
    line: 'Savoir où l’on est, où l’on va, et en combien de temps.',
    courses: [],
  },
  {
    id: 'reglementation',
    track: 'bia',
    name: 'Réglementation',
    line: "Le cadre dans lequel un vol est légal et sûr.",
    courses: [],
  },
  {
    id: 'facteurs-humains',
    track: 'bia',
    name: 'Facteurs humains',
    line: "Les limites du pilote font partie des limites de l'avion.",
    courses: [],
  },
  {
    id: 'histoire',
    track: 'bia',
    name: 'Histoire et culture aéronautique',
    line: "D'où vient ce que l'on pilote aujourd'hui.",
    courses: [],
  },
  {
    id: 'securite',
    track: 'bia',
    name: 'Sécurité des vols',
    line: 'Anticiper plutôt que réagir.',
    courses: [],
  },
]

export const subjectById = (id: string) =>
  BIA_SUBJECTS.find((s) => s.id === id)
