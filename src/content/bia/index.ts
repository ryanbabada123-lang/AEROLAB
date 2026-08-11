import type { Course, Source } from '@/content/types'
import { meteorologie } from './meteo'
import { histoire } from './histoire'

/**
 * LES SEPT COURS BIA D'ANDRÉ PARIS.
 *
 * Le chapitre 1 (météorologie) a été composé à la main, section par section,
 * et sert de référence : c'est lui qui porte les schémas redessinés et le
 * comparatif de vérification.
 *
 * Les six autres sont produits par `scripts/cours-extraire.py` depuis la
 * couche texte native des PDF. Ce n'est pas un raccourci : sur 542 668
 * signes, une transcription à la main dérive, alors que l'extraction rend
 * exactement ce qui est écrit. Le script mesure sa propre fidélité à chaque
 * passage — de 99,1 % à 100,0 % des signes non blancs, le reste étant du
 * pied de page et des marques de puce.
 *
 * CE QU'IL LEUR MANQUE, ET QUI EST ASSUMÉ : la plupart de leurs schémas ne
 * sont pas encore redessinés. Leur statut est donc `text-only` et non
 * `ready`, et chaque page l'affiche.
 *
 * Le reste à faire est chiffré dans docs/INVENTAIRE-FIGURES.md : 404 grandes
 * figures pour les sept cours — et NON 1 731, chiffre qui comptait les puces
 * et les logos. Le tri entre schémas à redessiner et images demandant une
 * source libre se fait à l'œil, planche-contact par planche-contact.
 */

const PARIS = (fichier: string, pages: number, signes: number): Source => ({
  label: `Cours BIA — ${fichier}, édition 2024`,
  kind: 'fiche auteur',
  detail:
    `André PARIS, Comité Départemental Aéronautique 35 — HT, IFI, SFE. ` +
    `${pages} pages, ${signes.toLocaleString('fr-FR')} signes, ` +
    `texte extrait de la couche texte native du document.`,
})

const EXTRACTION: Source = {
  label: 'Chaîne d’extraction — scripts/cours-extraire.py',
  kind: 'pédagogique',
  detail:
    'Le texte de cette page vient directement de la couche texte du PDF de ' +
    'l’auteur. Le script mesure sa fidélité à chaque passage et refuse de ' +
    'produire un fichier sous 97 % des signes non blancs.',
}

export const aerodynamique: Course = {
  id: 'bia-aerodynamique',
  track: 'bia',
  subject: 'aerodynamique',
  title: 'Aérodynamique et mécanique du vol',
  claim: 'Ce qui porte, ce qui freine, ce qui décroche.',
  status: 'text-only',
  minutes: 120,
  origin: {
    file: 'assets/cours/bia/BIA-Cours2-Aerodynamique-MecaVol-2024-06-15.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 64,
    verifyId: 'aerodynamique',
  },
  sections: [],
  loadSections: () =>
    import('./generated/aerodynamique').then((m) => m.aerodynamiqueSections),
  sources: [PARIS('Aérodynamique et mécanique du vol', 64, 123316), EXTRACTION],
}

export const aeronefs: Course = {
  id: 'bia-aeronefs',
  track: 'bia',
  subject: 'aeronefs',
  title: 'Étude des aéronefs et des engins spatiaux',
  claim: 'Structure, motorisation, commandes, instruments.',
  status: 'text-only',
  minutes: 165,
  origin: {
    file: 'assets/cours/bia/BIA-Cours3-Connaissance-Aeronefs-2024-06-15.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 83,
    verifyId: 'aeronefs',
  },
  sections: [],
  loadSections: () =>
    import('./generated/aeronefs').then((m) => m.aeronefsSections),
  sources: [PARIS('Connaissance des aéronefs', 83, 173123), EXTRACTION],
}

export const reglementation: Course = {
  id: 'bia-reglementation',
  track: 'bia',
  subject: 'reglementation',
  title: 'Réglementation et sécurité des vols',
  claim: 'Le cadre dans lequel un vol est légal et sûr.',
  status: 'text-only',
  minutes: 90,
  origin: {
    file: 'assets/cours/bia/BIA-Cours4A-Reglementation-2024-06-15.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 34,
  },
  sections: [],
  loadSections: () =>
    import('./generated/reglementation').then((m) => m.reglementationSections),
  sources: [PARIS('Réglementation', 34, 90680), EXTRACTION],
}

export const navigation: Course = {
  id: 'bia-navigation',
  track: 'bia',
  subject: 'navigation',
  title: 'Navigation',
  claim: 'Savoir où l’on est, où l’on va, et en combien de temps.',
  status: 'text-only',
  minutes: 75,
  origin: {
    file: 'assets/cours/bia/BIA-Cours4B-Navigation-2024-06-15.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 32,
  },
  sections: [],
  loadSections: () =>
    import('./generated/navigation').then((m) => m.navigationSections),
  sources: [PARIS('Navigation', 32, 71561), EXTRACTION],
}

export const aeromedecine: Course = {
  id: 'bia-aeromedecine',
  track: 'bia',
  subject: 'facteurs-humains',
  title: 'Aéromédecine et facteurs humains',
  claim: 'Les limites du pilote font partie des limites de l’avion.',
  status: 'text-only',
  minutes: 55,
  origin: {
    file: 'assets/cours/bia/BIA-Cours4C-Aeromedecine-2024-06-15.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 16,
    verifyId: 'aeromedecine',
  },
  sections: [],
  loadSections: () =>
    import('./generated/aeromedecine').then((m) => m.aeromedecineSections),
  sources: [PARIS('Aéromédecine', 16, 55097), EXTRACTION],
}

export const anglais: Course = {
  id: 'bia-anglais',
  track: 'bia',
  subject: 'anglais',
  title: 'Anglais aéronautique',
  claim: 'L’épreuve facultative — treize files et le vocabulaire exigible.',
  status: 'text-only',
  minutes: 60,
  origin: {
    file: 'assets/cours/bia/BIA-Cours6-Anglais-Vocabulaire-2024-06-15.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 65,
  },
  sections: [],
  loadSections: () =>
    import('./generated/anglais').then((m) => m.anglaisSections),
  sources: [
    PARIS('Anglais aéronautique', 65, 28891),
    {
      label: 'CIRAS de Montpellier et de Lille',
      kind: 'pédagogique',
      detail:
        'Crédités par l’auteur sur ce cours. Plusieurs schémas de gouvernes ' +
        'y sont marqués « copyrights NASA » (domaine public).',
    },
    EXTRACTION,
  ],
}

export const BIA_COURSES: Course[] = [
  meteorologie,
  aerodynamique,
  aeronefs,
  reglementation,
  navigation,
  aeromedecine,
  histoire,
  anglais,
]
