/**
 * LES 4 AXES (§09 / §10).
 *
 * Chaque axe a sa propre identité : accent, motif, grain de fond. Ce ne
 * sont pas quatre boutons dans une grille — ce sont quatre entrées
 * distinctes dans la plateforme.
 */

export type TrackId = 'bia' | 'ppl' | 'atpl' | 'journey'

export interface Track {
  id: TrackId
  index: string
  name: string
  claim: string
  line: string
  /** Motif de fond propre à l'axe. */
  motif: 'horizon' | 'runway' | 'grid' | 'path'
  tone: 'ice' | 'light' | 'graphite' | 'electric'
  to: string
}

export const TRACKS: Track[] = [
  {
    id: 'bia',
    index: '01',
    name: 'BIA',
    claim: "Découvrir l'aéronautique",
    line: 'Comprendre les bases du monde aéronautique.',
    motif: 'horizon',
    tone: 'ice',
    to: '/formation/bia',
  },
  {
    id: 'ppl',
    index: '02',
    name: 'PPL',
    claim: 'Apprendre à piloter',
    line: 'Passer de la théorie aux premières heures de vol.',
    motif: 'runway',
    tone: 'light',
    to: '/formation/ppl',
  },
  {
    id: 'atpl',
    index: '03',
    name: 'ATPL',
    claim: "Maîtriser l'aviation",
    line: 'Acquérir les connaissances théoriques professionnelles.',
    motif: 'grid',
    tone: 'graphite',
    to: '/formation/atpl',
  },
  {
    id: 'journey',
    index: '04',
    name: 'Devenir pilote de ligne',
    claim: 'Transformer le rêve en carrière',
    line: "Construire ton parcours jusqu'au cockpit d'un avion de ligne.",
    motif: 'path',
    tone: 'electric',
    to: '/journey',
  },
]

export const trackById = (id: string) => TRACKS.find((t) => t.id === id)
