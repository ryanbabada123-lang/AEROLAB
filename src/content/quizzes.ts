/**
 * QUIZ (§41).
 *
 * Chaque question porte son explication : une bonne réponse sans « pourquoi »
 * n'apprend rien. Les questions ratées alimentent les notions à revoir du
 * carnet de vol.
 */

export type QuestionKind =
  | 'qcm'
  | 'vrai-faux'
  | 'situation'
  | 'graphique'
  | 'identification'

export interface Question {
  id: string
  kind: QuestionKind
  prompt: string
  /** Contexte affiché au-dessus de l'énoncé (situation, lecture de courbe…). */
  context?: string
  options: string[]
  correct: number
  why: string
}

export interface Quiz {
  id: string
  courseId: string
  title: string
  questions: Question[]
}

export const QUIZZES: Record<string, Quiz> = {
  'bia-aero-portance-q1': {
    id: 'bia-aero-portance-q1',
    courseId: 'bia-aero-portance',
    title: 'Portance',
    questions: [
      {
        id: 'q1',
        kind: 'qcm',
        prompt: "Par rapport à quelle direction la portance est-elle définie ?",
        options: [
          "Perpendiculaire au vent relatif",
          "Perpendiculaire à l'horizon",
          "Perpendiculaire à l'axe longitudinal de l'avion",
          "Parallèle à la trajectoire sol",
        ],
        correct: 0,
        why: "La portance est par définition la composante de la force aérodynamique perpendiculaire au VENT RELATIF. En virage ou en montée, elle n'est donc pas verticale : c'est précisément pour cela qu'un virage incliné exige un supplément de portance pour maintenir l'altitude.",
      },
      {
        id: 'q2',
        kind: 'vrai-faux',
        prompt:
          "Deux filets d'air séparés au bord d'attaque doivent se rejoindre en même temps au bord de fuite.",
        options: ['Vrai', 'Faux'],
        correct: 1,
        why: "Faux — et c'est l'erreur la plus répandue sur la portance. Rien n'impose ce rendez-vous : l'air passé par l'extrados arrive en réalité au bord de fuite AVANT celui de l'intrados. L'accélération de l'extrados est réelle, mais son explication n'est pas celle-là.",
      },
      {
        id: 'q3',
        kind: 'qcm',
        prompt:
          "À incidence constante, la vitesse est doublée. Que devient la portance ?",
        options: [
          'Elle double',
          'Elle est multipliée par quatre',
          'Elle reste identique',
          'Elle est multipliée par huit',
        ],
        correct: 1,
        why: "Dans L = ½ρV²S·C_L, la vitesse intervient au CARRÉ. La doubler multiplie donc la portance par quatre, tous les autres paramètres restant inchangés.",
      },
      {
        id: 'q4',
        kind: 'graphique',
        context:
          "Sur la courbe Cz = f(α), le coefficient de portance croît de façon quasi linéaire, atteint un maximum, puis chute.",
        prompt: 'Que représente le sommet de la courbe ?',
        options: [
          "La vitesse maximale de l'avion",
          "L'incidence de décrochage",
          "La finesse maximale",
          "Le point de traînée minimale",
        ],
        correct: 1,
        why: "Le sommet correspond au Cz maximal, atteint à l'incidence de décrochage. Au-delà, l'écoulement décolle de l'extrados : la portance chute et la traînée augmente fortement.",
      },
      {
        id: 'q5',
        kind: 'situation',
        context:
          "En finale, un pilote constate qu'il est court sur le plan. Il tire sur le manche pour « aller chercher » le terrain, sans ajouter de puissance.",
        prompt: 'Quel est le risque principal ?',
        options: [
          "Augmenter l'incidence jusqu'au décrochage, près du sol",
          'Dépasser la vitesse maximale en air agité',
          "Surcharger le train d'atterrissage",
          'Perdre la référence de cap',
        ],
        correct: 0,
        why: "Tirer sur le manche augmente l'incidence. Sans puissance, la vitesse diminue et l'incidence nécessaire au maintien de la portance augmente encore : on se rapproche de l'incidence de décrochage, à faible hauteur, là où la récupération est la plus difficile. Le plan se corrige avec la puissance, pas en tirant.",
      },
    ],
  },
}

export const quizById = (id: string): Quiz | undefined => QUIZZES[id]
