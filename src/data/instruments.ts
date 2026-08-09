/**
 * COCKPIT LAB — fiches d'instruments (§15).
 *
 * STATUT : contenu de démonstration. Les descriptions ci-dessous se limitent
 * à ce qui est vrai pour tout tableau de bord classique à six instruments.
 * Elles ne remplacent AUCUN manuel de vol : les tolérances, les limitations
 * et les procédures d'un appareil donné viennent de sa documentation
 * officielle, et le texte définitif viendra des fiches de l'auteur (§52).
 */

export interface Instrument {
  id: string
  name: string
  abbr: string
  /** Position dans la grille 3 × 2 du « six-pack ». */
  cell: [number, number]
  fonction: string
  unite: string
  principe: string
  lecture: string
  limites: string
  retenir: string
  /** Énoncé utilisé en mode évaluation. */
  challenge: string
}

export const INSTRUMENTS: Instrument[] = [
  {
    id: 'asi',
    name: 'Anémomètre',
    abbr: 'ASI',
    cell: [0, 0],
    fonction: "Indiquer la vitesse de l'avion par rapport à l'air.",
    unite: 'Nœuds (kt) ou km/h selon l’instrument.',
    principe:
      "Compare la pression totale captée par le tube de Pitot à la pression statique. L'écart entre les deux — la pression dynamique — dépend de la vitesse.",
    lecture:
      "Des arcs de couleur délimitent les plages d'utilisation : plage de volets, plage normale, plage à n'utiliser qu'en air calme, et vitesse à ne jamais dépasser.",
    limites:
      "Un Pitot ou une prise statique obstrués faussent l'indication. La vitesse lue est une vitesse indiquée : elle diffère de la vitesse vraie, d'autant plus que l'altitude augmente.",
    retenir:
      "L'anémomètre ne mesure pas une vitesse sol. Le vent ne l'influence pas.",
    challenge: "Quel instrument mesure la vitesse par rapport à l'air ?",
  },
  {
    id: 'ai',
    name: 'Horizon artificiel',
    abbr: 'AI',
    cell: [1, 0],
    fonction:
      "Donner l'assiette de l'avion : à cabrer ou à piquer, et l'inclinaison latérale.",
    unite: 'Degrés d’assiette et d’inclinaison.',
    principe:
      "Un gyroscope maintient une référence fixe dans l'espace ; la maquette d'avion se déplace par rapport à cette référence.",
    lecture:
      "La ligne d'horizon sépare ciel et sol. La maquette centrale représente l'avion ; l'index supérieur donne l'inclinaison.",
    limites:
      "Un gyroscope demande un temps d'alignement après la mise en route, et peut se dérégler lors de manœuvres inhabituelles selon le modèle.",
    retenir:
      "C'est l'instrument de référence en vol sans visibilité extérieure.",
    challenge: "Quel instrument donne l'assiette et l'inclinaison ?",
  },
  {
    id: 'alt',
    name: 'Altimètre',
    abbr: 'ALT',
    cell: [2, 0],
    fonction: "Indiquer l'altitude ou la hauteur, selon le calage choisi.",
    unite: 'Pieds (ft) le plus souvent, parfois mètres.',
    principe:
      "Baromètre anéroïde : il mesure la pression statique, qui décroît avec l'altitude, et la convertit selon l'atmosphère standard.",
    lecture:
      "Plusieurs aiguilles de rangs différents. Une fenêtre latérale affiche le calage barométrique retenu.",
    limites:
      "L'indication dépend entièrement du calage affiché et s'écarte de la réalité lorsque la température s'éloigne du standard — notamment par temps froid, où l'altitude réelle est inférieure à l'altitude lue.",
    retenir:
      "Un altimètre indique une pression traduite en altitude, pas une hauteur mesurée au sol.",
    challenge: "Quel instrument repose sur la mesure de la pression statique ?",
  },
  {
    id: 'tc',
    name: 'Indicateur de virage',
    abbr: 'TC',
    cell: [0, 1],
    fonction:
      'Indiquer le taux de virage et la symétrie du vol.',
    unite: 'Taux de virage, et bille centrée ou non.',
    principe:
      "Un gyroscope détecte la rotation ; une bille dans un tube courbe, soumise à la pesanteur et à l'accélération, révèle la symétrie.",
    lecture:
      "Des index marquent le taux standard. La bille au centre signale un vol symétrique ; décalée, elle indique un dérapage ou une glissade.",
    limites:
      "L'instrument renseigne sur le taux de virage, pas sur l'inclinaison exacte de l'appareil.",
    retenir: 'La bille se rattrape au pied, du côté où elle est sortie.',
    challenge: 'Quel instrument renseigne sur la symétrie du vol ?',
  },
  {
    id: 'hi',
    name: 'Conservateur de cap',
    abbr: 'HI',
    cell: [1, 1],
    fonction: "Afficher le cap suivi, de façon stable.",
    unite: 'Degrés (0 à 359).',
    principe:
      "Gyroscope à axe horizontal. Contrairement au compas magnétique, il ne subit ni oscillation ni erreur d'accélération.",
    lecture:
      "Une rose des caps tourne devant un index fixe qui marque le cap suivi.",
    limites:
      "Il dérive avec le temps : il doit être recalé régulièrement sur le compas magnétique, en vol stabilisé.",
    retenir:
      "Il est stable mais pas autonome : sans recalage, son indication s'éloigne progressivement du cap réel.",
    challenge: 'Quel instrument doit être recalé régulièrement sur le compas ?',
  },
  {
    id: 'vsi',
    name: 'Variomètre',
    abbr: 'VSI',
    cell: [2, 1],
    fonction: 'Indiquer la vitesse verticale, en montée comme en descente.',
    unite: 'Pieds par minute (ft/min).',
    principe:
      "Mesure la vitesse à laquelle la pression statique évolue, au moyen d'une fuite calibrée.",
    lecture:
      "Aiguille au-dessus du zéro en montée, en dessous en descente. Le zéro correspond au palier.",
    limites:
      "L'indication accuse un retard de quelques secondes sur le changement réel de trajectoire.",
    retenir:
      "C'est un instrument de tendance : on l'utilise pour confirmer une évolution, pas pour la déclencher.",
    challenge: 'Quel instrument indique la vitesse verticale ?',
  },
]

export const instrumentById = (id: string) =>
  INSTRUMENTS.find((i) => i.id === id)
