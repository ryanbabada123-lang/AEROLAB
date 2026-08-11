import type { Complement } from '.'

/**
 * COMPLÉMENTS — Cours 3, Étude des aéronefs et des engins spatiaux.
 *
 * Deux schémas redessinés à ce jour sur les 194 figures du cours, dont
 * beaucoup d'écorchés en trois dimensions qui ne relèveront pas du redessin
 * (docs/INVENTAIRE-FIGURES.md).
 */
export const aeronefsComplements: Complement[] = [
  {
    page: 59,
    blocs: [
      {
        type: 'schema',
        schema: 'chaine-barometrique',
        page: 59,
        caption:
          'La chaîne barométrique : une prise de pression totale, une prise ' +
          'de pression statique, et les trois instruments qui les exploitent.',
      },
    ],
  },
  {
    page: 75,
    blocs: [
      {
        type: 'schema',
        schema: 'vor-to-from',
        page: 75,
        caption:
          'Les secteurs TO et FROM du VOR. L’indication ne dépend pas du cap ' +
          'de l’avion mais de sa position par rapport au radial affiché.',
      },
    ],
  },
]
