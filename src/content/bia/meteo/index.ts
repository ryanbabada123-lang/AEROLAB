import type { Course } from '@/content/types'
import { section1, section2, section3 } from './sections-1-3'
import { section4, section5, section6 } from './sections-4-6'
import { section7, section8 } from './sections-7-8'
import { section9, section10 } from './sections-9-10'

/**
 * CHAPITRE 1 — MÉTÉOROLOGIE ET AÉROLOGIE.
 *
 * Reprise intégrale du cours d'André PARIS, édition 2024, 49 pages.
 * L'attribution détaillée est regroupée sur la page de crédits, accessible
 * depuis le pied de page — décision consignée dans assets/RESSOURCES.md §1.
 */
export const meteorologie: Course = {
  id: 'bia-meteo',
  track: 'bia',
  subject: 'meteorologie',
  title: 'Météorologie et aérologie',
  claim: 'Lire l’atmosphère avant d’y entrer.',
  status: 'ready',
  minutes: 95,
  origin: {
    file: 'assets/cours/bia/BIA-Cours1-Meteorologie-2024-06-06.pdf',
    author: 'André PARIS',
    edition: '2024',
    pages: 49,
    verifyId: 'meteo',
  },
  sections: [
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
    section8,
    section9,
    section10,
  ],
  sources: [
    {
      label: 'Cours BIA n° 1 — Météorologie, édition 2024',
      kind: 'fiche auteur',
      detail:
        'André PARIS, Comité Départemental Aéronautique 35 — HT, IFI, SFE. 49 pages, texte repris mot pour mot.',
    },
    {
      label: 'Météo France — cartes TEMSI, WINTEM, coupes verticales, imagerie satellite',
      kind: 'officiel',
      detail:
        'Documents reproduits dans le cours source. Non intégrés au site : leur reproduction demande une autorisation.',
    },
    {
      label: 'Arrêté du 3 mars 2006 relatif aux règles de l’air',
      kind: 'officiel',
      detail: 'Annexe 1, action préliminaire au vol — cité au § 10.',
    },
    {
      label: 'CIRAS de Lille — Frédéric WILLOT et Didier VANDERPERRE',
      kind: 'pédagogique',
      detail: 'Remerciés par l’auteur pour leur contribution à l’élaboration du document.',
    },
  ],
}
