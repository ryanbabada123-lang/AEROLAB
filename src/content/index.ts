import type { Course, Subject } from './types'
import { portance } from './bia/aerodynamique-portance'
import { BIA_COURSES } from './bia'

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

export const COURSES: Course[] = [...BIA_COURSES, portance]

export const courseById = (id: string) => COURSES.find((c) => c.id === id)

export const coursesOfSubject = (subjectId: string) =>
  COURSES.filter((c) => c.subject === subjectId)

/** Matières BIA — liste fournie par l'auteur, en attente des fiches. */
/**
 * LES MATIÈRES DU BIA, DANS L'ORDRE DE L'ÉPREUVE.
 *
 * L'ordre compte : c'est celui des cinq parties de l'examen, et celui des
 * fascicules de l'auteur. La liste était rangée autrement, si bien que la
 * page d'accueil numérotait « 01 Aérodynamique » alors que le chapitre 1 du
 * BIA est la météorologie — un élève qui compare avec son livret n'y
 * retrouvait pas ses repères.
 */
export const BIA_SUBJECTS: Subject[] = [
  {
    id: 'meteorologie',
    track: 'bia',
    name: 'Météorologie et aérologie',
    line: "Lire l'atmosphère avant d'y entrer.",
    courses: ['bia-meteo'],
  },
  {
    id: 'aerodynamique',
    track: 'bia',
    name: 'Aérodynamique et mécanique du vol',
    line: 'Comment naît la portance, ce qui freine, ce qui décroche.',
    courses: ['bia-aerodynamique', 'bia-aero-portance'],
  },
  {
    id: 'aeronefs',
    track: 'bia',
    name: 'Étude des aéronefs',
    line: 'Structure, motorisation, commandes, systèmes.',
    courses: ['bia-aeronefs'],
  },
  {
    id: 'reglementation',
    track: 'bia',
    name: 'Réglementation',
    line: 'Le cadre dans lequel un vol est légal et sûr.',
    courses: ['bia-reglementation'],
  },
  {
    id: 'navigation',
    track: 'bia',
    name: 'Navigation',
    line: 'Savoir où l’on est, où l’on va, et en combien de temps.',
    courses: ['bia-navigation'],
  },
  {
    id: 'facteurs-humains',
    track: 'bia',
    name: 'Aéromédecine et facteurs humains',
    line: "Les limites du pilote font partie des limites de l'avion.",
    courses: ['bia-aeromedecine'],
  },
  {
    id: 'histoire',
    track: 'bia',
    name: 'Histoire et culture aéronautique',
    line: "D'où vient ce que l'on pilote aujourd'hui.",
    courses: ['bia-histoire'],
  },
  {
    id: 'anglais',
    track: 'bia',
    name: 'Anglais aéronautique',
    line: "L'épreuve facultative — treize files et le vocabulaire exigible.",
    courses: ['bia-anglais'],
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
