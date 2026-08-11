import type { Complement } from '.'

/**
 * COMPLÉMENTS — Cours 4C, Aéromédecine.
 *
 * Les huit schémas triés de ce cours (docs/INVENTAIRE-FIGURES.md) sont tous
 * redessinés, et cette liste est ce qui les fait apparaître DANS le cours et
 * non seulement sur /verification/aeromedecine.
 *
 * S'y ajoute la check-list M.A. F.O.R.M.E. de la page 16 : l'auteur l'a mise
 * en image, son texte est donc absent de la couche texte du PDF et a été
 * relevé à l'écran. Un tableau la rend plus lisible qu'une reproduction
 * d'image, et surtout accessible au lecteur d'écran.
 *
 * Ne restent hors de cette liste que les cinq planches anatomiques en
 * couleurs — oreille, canaux semi-circulaires, appareil respiratoire, œil —
 * qui demandent des sources libres et non un redessin.
 */
export const aeromedecineComplements: Complement[] = [
  {
    page: 1,
    // Trois sections commencent page 1 : la température relève des rappels
    // physiques, pas de l'introduction ni des effets de la pression.
    section: 'rappels-des-elements-physiques-de-differentiatio',
    blocs: [
      {
        type: 'schema',
        schema: 'temperature-tropopause',
        page: 1,
        caption:
          'La température décroît de 6,5 °C par 1 000 mètres, soit 2 °C par ' +
          '1 000 pieds, depuis + 15 °C au sol jusqu’à − 56,5 °C à la ' +
          'tropopause — au-delà de laquelle elle ne varie plus.',
      },
    ],
  },
  {
    page: 2,
    blocs: [
      {
        type: 'schema',
        schema: 'trompe-eustache',
        page: 2,
        caption:
          'À gauche la trompe est complètement bouchée : la pression ' +
          'extérieure pousse seule sur le tympan. À droite elle est ' +
          'perméable, et l’air passe.',
      },
    ],
  },
  {
    page: 4,
    // La surpression pulmonaire relève des effets de la PRESSION, section
    // qui court de la page 1 à la page 4 — et non de la pressurisation des
    // cabines, qui commence elle aussi page 4.
    section: 'les-effets-des-variations-de-pression-sur-l-orga',
    blocs: [
      {
        type: 'schema',
        schema: 'surpression-pulmonaire',
        page: 4,
        caption:
          'Au cours d’une décompression, le gaz contenu dans les poumons se ' +
          'dilate et pousse sur la paroi. Le rapport entre le volume ' +
          'pulmonaire et la surface d’ouverture de la trachée décide de ce ' +
          'que l’expiration peut évacuer.',
      },
    ],
  },
  {
    page: 4,
    blocs: [
      {
        type: 'schema',
        schema: 'pressurisation-cabine',
        page: 4,
        caption:
          'Deux profils d’altitude avion et les deux profils d’altitude ' +
          'cabine correspondants. C’est leur écart qui mesure le travail de ' +
          'la pressurisation.',
      },
    ],
  },
  {
    page: 6,
    blocs: [
      {
        type: 'schema',
        schema: 'saturation-oxygene',
        page: 6,
        caption:
          'L’axe des altitudes décroît vers la droite : le sol est à droite. ' +
          'La saturation tient au-dessus de 90 % jusqu’à 10 000 pieds, puis ' +
          's’effondre.',
      },
      {
        type: 'schema',
        schema: 'seuils-hypoxie',
        page: 6,
        caption:
          'Les quatre seuils, en escalier : indifférence jusqu’à 4 500 pieds, ' +
          'seuil de réaction, seuil des troubles à 11 500 pieds, troubles ' +
          'marqués à 13 500 pieds, seuil critique à 20 000 pieds.',
      },
    ],
  },
  {
    page: 9,
    blocs: [
      {
        type: 'schema',
        schema: 'facteurs-de-charge',
        page: 9,
        caption:
          'Les trois axes rapportés au pilote : Gz suivant l’axe tête-pieds, ' +
          'Gy suivant l’axe des épaules, Gx suivant l’axe du regard.',
      },
    ],
  },
  {
    page: 14,
    blocs: [
      {
        type: 'schema',
        schema: 'illusions-piste',
        page: 14,
        caption:
          'La même approche sur trois largeurs de piste. Une piste étroite ' +
          'paraît plus éloignée et fait se poser court ; une piste large ' +
          'paraît plus proche et fait arrondir haut.',
      },
    ],
  },
  {
    page: 16,
    blocs: [
      {
        type: 'table',
        caption:
          'La check-list M.A. F.O.R.M.E. — « Cette Check-List fait partie de ' +
          'votre Préparation Pré-Vol »',
        page: 16,
        headers: ['', 'Point à vérifier', 'La question à se poser'],
        rows: [
          [
            'M',
            'Médicaments',
            '« Suis-je sous l’effet de médicaments (ou drogues) susceptibles ' +
              'd’avoir des effets sur ma vigilance, mon efficience, mon ' +
              'jugement ? »',
          ],
          ['A', 'Alcool', '« Mon alcoolémie est-elle bien à zéro ? »'],
          [
            'F',
            'Fatigue',
            '« Suis-je fatigué de façon aigüe ou chronique ? » « Ai-je une ' +
              'dette de sommeil ? »',
          ],
          [
            'O',
            'Opérationnel',
            '« Suis-je en condition Optimale sur le plan physique, pas de ' +
              'handicap Occasionnel, Ok sur le plan ORL ?… »',
          ],
          [
            'R',
            'Repas',
            '« Ai-je mangé ni trop, ni trop peu ? » (sucres rapides = risque ' +
              'd’hypoglycémie…)',
          ],
          [
            'M',
            'Météo mentale',
            '« Suis-je serein sur le plan psychologique, non stressé, sans ' +
              'surcharge émotionnelle, ni tourment ? »',
          ],
          [
            'E',
            'Excitation',
            '« Suis-je calme, en pleine possession de mes moyens, NON ' +
              'SUREXCITE, non porté vers des comportements dangereux, ' +
              'téméraires ou indisciplinés ? »',
          ],
        ],
      },
    ],
  },
]
