import type { Complement } from '.'

/**
 * COMPLÉMENTS — Cours 2, Aérodynamique et mécanique du vol.
 *
 * Quatre schémas redessinés à ce jour sur les 115 figures du cours : le tri
 * du reste est à faire (docs/INVENTAIRE-FIGURES.md).
 */
export const aerodynamiqueComplements: Complement[] = [
  {
    page: 8,
    blocs: [
      {
        type: 'schema',
        schema: 'composition-forces',
        page: 8,
        caption:
          'Deux forces perpendiculaires se composent en une résultante, ' +
          'diagonale du rectangle qu’elles forment.',
      },
      {
        type: 'schema',
        schema: 'equilibres',
        page: 8,
        caption:
          'Stable, indifférent, instable : trois façons pour un corps écarté ' +
          'de sa position de réagir.',
      },
    ],
  },
  {
    page: 17,
    blocs: [
      {
        type: 'schema',
        schema: 'polaire-aile',
        page: 17,
        caption:
          'La polaire porte le coefficient de portance contre le coefficient ' +
          'de traînée. Chaque point de la courbe est une incidence.',
      },
    ],
  },
  {
    page: 18,
    blocs: [
      {
        type: 'schema',
        schema: 'polaire-etablissement',
        page: 18,
        caption:
          'Comment la polaire se construit à partir des deux courbes de Cz ' +
          'et de Cx en fonction de l’incidence.',
      },
    ],
  },
]
