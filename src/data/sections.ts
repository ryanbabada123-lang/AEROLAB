/**
 * LES SECTIONS DU SITE — ce que l'on découvre quand l'introduction s'achève.
 *
 * La maquette fournie par l'auteur du projet montre deux cartes, BIA et PPL
 * théorique. Le cahier des charges en demande sept en tout : la barre de
 * navigation reste courte, comme sur la maquette, et déroule le reste en
 * sous-menus, tandis que la page présente les sept cartes.
 *
 * `state` dit la vérité sur chaque section, et cette honnêteté est une règle du
 * projet : une matière sans contenu affiche qu'elle en attend, jamais du texte
 * plausible. C'est ce qui permet de montrer le site sans mentir.
 */

export type SectionState = 'ready' | 'partial' | 'awaiting'

export interface SectionFeature {
  /** Pictogramme : `book`, `quiz`, `chart`, `target`, `wing`, `globe`. */
  icon: 'book' | 'quiz' | 'chart' | 'target' | 'wing' | 'globe'
  title: string
  line: string
}

export interface SiteSection {
  id: string
  /** Titre affiché en très grand, comme sur la maquette. */
  title: string
  /** Sous-titre en capitales bleues sous le titre. */
  kicker: string
  blurb: string
  /**
   * Destination, quand la section en a une.
   *
   * ABSENTE quand il n'y a rien à ouvrir. Elle était renseignée pour toutes
   * les sections, y compris celles en attente de contenu : trois de ces
   * adresses ne menaient nulle part, et `scripts/audit-liens.mjs` les
   * signalait comme des liens morts — à raison. Une section sans page n'a
   * pas d'adresse.
   */
  to?: string
  features: [SectionFeature, SectionFeature, SectionFeature]
  state: SectionState
  /** Ce qu'il manque, affiché tel quel quand l'état n'est pas `ready`. */
  awaiting?: string
}

export const SECTIONS: SiteSection[] = [
  {
    id: 'bia',
    title: 'BIA',
    kicker: "Brevet d'initiation aéronautique",
    blurb:
      "Tout le programme du BIA, repris des cours du Comité départemental " +
      "aéronautique 35, chapitre par chapitre et au mot près.",
    to: '/formation/bia',
    features: [
      {
        icon: 'book',
        title: 'Sept chapitres',
        line: 'Météo, aérodynamique, aéronefs, navigation, réglementation, aéromédecine, histoire.',
      },
      {
        icon: 'quiz',
        title: "QCM d'entraînement",
        line: "Des questions posées comme à l'examen, avec leurs réponses.",
      },
      {
        icon: 'chart',
        title: 'Suivi de progression',
        line: 'Ce qui est acquis, ce qui reste à revoir, chapitre par chapitre.',
      },
    ],
    state: 'partial',
    awaiting:
      'Une fiche sur huit matières est écrite. Les 641 445 signes des cours ' +
      "restent à intégrer, schémas compris.",
  },

  {
    id: 'ppl-theorique',
    title: 'PPL théorique',
    kicker: 'Licence de pilote privé — théorie',
    blurb:
      "L'examen théorique du PPL, module par module, dans la continuité du " +
      'BIA plutôt qu\'en repartant de zéro.',
    to: '/formation/ppl',
    features: [
      {
        icon: 'book',
        title: 'Cours détaillés',
        line: 'Chaque module expliqué avec ses schémas et ses ordres de grandeur.',
      },
      {
        icon: 'quiz',
        title: "QCM conformes à l'examen",
        line: "La forme de l'épreuve officielle, pour s'y habituer avant le jour J.",
      },
      {
        icon: 'target',
        title: 'Méthode',
        line: 'Dans quel ordre apprendre, et pourquoi cet ordre-là.',
      },
    ],
    state: 'awaiting',
    awaiting: 'Les cours PPL théorique ne sont pas encore fournis.',
  },

  {
    id: 'ppl-pratique',
    title: 'PPL pratique',
    kicker: 'Licence de pilote privé — vol',
    blurb:
      "Ce qui se passe réellement en vol, sur le Tecnam : la visite prévol, " +
      'le tour de piste, la panne, la navigation.',
    features: [
      {
        icon: 'wing',
        title: 'Le Tecnam en 3D',
        line: 'On tourne autour, on entre dedans, on lit la planche de bord.',
      },
      {
        icon: 'book',
        title: 'Exercice par exercice',
        line: 'Chaque leçon de la progression, et ce que l\'instructeur attend.',
      },
      {
        icon: 'target',
        title: 'Avant le vol',
        line: 'Ce qu\'il faut avoir compris au sol pour ne pas le découvrir en l\'air.',
      },
    ],
    state: 'awaiting',
    awaiting: 'Les contenus PPL pratique ne sont pas encore fournis.',
  },

  {
    id: 'anglais',
    title: 'Anglais aéronautique',
    kicker: 'Épreuve facultative du BIA',
    blurb:
      'Les treize dossiers du cours, le vocabulaire exigible dans les deux ' +
      'sens, et les schémas légendés en anglais.',
    to: '/cours/bia/bia-anglais',
    features: [
      {
        icon: 'globe',
        title: 'Treize dossiers',
        line: "Des types d'avions à la météo, en passant par le cockpit.",
      },
      {
        icon: 'book',
        title: 'Vocabulaire exigible',
        line: 'Français vers anglais et anglais vers français, la liste complète.',
      },
      {
        icon: 'quiz',
        title: 'Schémas légendés',
        line: 'Nommer chaque pièce en anglais, sur le schéma lui-même.',
      },
    ],
    state: 'awaiting',
    awaiting:
      'Le cours est fourni — 65 pages, 13 dossiers — et reste à intégrer.',
  },

  {
    id: 'annales',
    title: 'Annales BIA',
    kicker: 'Les épreuves des années passées',
    blurb:
      'Les sujets tels qu\'ils sont tombés, pour mesurer ce qui est vraiment ' +
      'demandé plutôt que ce qu\'on imagine.',
    features: [
      {
        icon: 'quiz',
        title: 'Sujets complets',
        line: 'Chaque épreuve dans son intégralité, dans sa forme d\'origine.',
      },
      {
        icon: 'book',
        title: 'Corrigés expliqués',
        line: 'Pas seulement la bonne réponse : pourquoi les autres sont fausses.',
      },
      {
        icon: 'chart',
        title: 'Ce qui revient',
        line: 'Les notions qui tombent tous les ans, repérées sur plusieurs sessions.',
      },
    ],
    state: 'awaiting',
    awaiting: 'Les annales ne sont pas encore fournies.',
  },

  {
    id: 'qcm',
    title: 'Banque de questions',
    kicker: 'S\'entraîner, se tromper, comprendre',
    blurb:
      'Toutes les questions du site rassemblées, filtrables par chapitre et ' +
      'par difficulté.',
    features: [
      {
        icon: 'quiz',
        title: 'Par chapitre',
        line: 'Réviser une notion précise sans traverser tout le programme.',
      },
      {
        icon: 'target',
        title: 'Réponses justifiées',
        line: 'Chaque réponse renvoie au passage du cours qui la fonde.',
      },
      {
        icon: 'chart',
        title: 'Erreurs récurrentes',
        line: 'Ce sur quoi tu te trompes revient plus souvent.',
      },
    ],
    state: 'awaiting',
    awaiting: 'La banque se remplira à mesure que les chapitres seront intégrés.',
  },

  {
    id: 'devenir-pilote',
    title: 'Devenir pilote de ligne',
    kicker: 'Le chemin complet, sans détour',
    blurb:
      'Ce que personne ne t\'explique clairement : par où commencer, ce que ' +
      'coûte chaque étape, et à quoi sert vraiment le PPL.',
    to: '/journey',
    features: [
      {
        icon: 'target',
        title: 'Les étapes',
        line: 'Du BIA à la ligne, dans l\'ordre, avec les prérequis de chacune.',
      },
      {
        icon: 'wing',
        title: 'Pourquoi le PPL',
        line: 'À quoi il sert, ce qu\'il ouvre, pourquoi il reste la base.',
      },
      {
        icon: 'globe',
        title: 'L\'anglais',
        line: 'Pourquoi il n\'est pas une formalité, et quand s\'y mettre.',
      },
    ],
    state: 'awaiting',
    awaiting: 'Le parcours reste à rédiger.',
  },
]

/**
 * NAVIGATION — barre courte comme sur la maquette, le reste en sous-menus.
 *
 * Décision de l'auteur du projet : ne rien perdre du §2 du cahier des charges,
 * tout en gardant la barre lisible.
 */
export interface NavEntry {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

/**
 * LE MENU N'ANNONCE QUE CE QUI EXISTE.
 *
 * Il proposait onze destinations dont SEPT tombaient sur « cette route
 * n'existe pas » : annales, banque de questions, anglais, PPL théorique,
 * PPL pratique, parcours, à propos. Rien ne le signalait — ni la
 * compilation, ni le rendu — et un visiteur qui explorait le menu tombait
 * sur la page d'erreur une fois sur deux.
 *
 * Trois adresses avaient une vraie destination et étaient simplement mal
 * écrites : `/formation/ppl-theorique` pour `/formation/ppl`, `/parcours`
 * pour `/journey`, `/formation/anglais` pour le cours lui-même. Les quatre
 * autres ne correspondaient à rien : elles sont retirées, et reviendront le
 * jour où leur page existera.
 *
 * `scripts/audit-liens.mjs` visite chaque adresse du code et échoue si
 * l'une d'elles rend la page d'erreur.
 */
export const NAV: NavEntry[] = [
  { label: 'Accueil', to: '/' },
  {
    label: 'BIA',
    to: '/formation/bia',
    children: [
      { label: 'Les chapitres', to: '/formation/bia' },
      { label: 'Anglais aéronautique', to: '/cours/bia/bia-anglais' },
    ],
  },
  {
    label: 'PPL',
    to: '/formation/ppl',
    children: [
      { label: 'PPL théorique', to: '/formation/ppl' },
      { label: 'Devenir pilote de ligne', to: '/journey' },
    ],
  },
  { label: 'Ressources', to: '/lab' },
]
