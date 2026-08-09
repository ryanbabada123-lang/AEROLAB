/**
 * LES LABORATOIRES (§15 → §23).
 *
 * `open` = manipulable dès maintenant.
 * `scaffold` = architecture en place, en attente du contenu de l'auteur.
 * On ne présente jamais une coquille comme une expérience terminée (§44).
 */

export interface Lab {
  id: string
  name: string
  line: string
  to: string
  status: 'open' | 'scaffold'
}

export const LABS: Lab[] = [
  {
    id: 'cockpit',
    name: 'Cockpit Lab',
    line: "Explorer une planche de bord instrument par instrument, en découverte, en entraînement puis en évaluation.",
    to: '/lab/cockpit',
    status: 'open',
  },
  {
    id: 'aero',
    name: 'Aerodynamics Lab',
    line: "Faire varier l'incidence et voir l'écoulement, les pressions et la portance réagir.",
    to: '/cours/bia/bia-aero-portance',
    status: 'open',
  },
  {
    id: 'aircraft',
    name: 'Aircraft Lab',
    line: "Bibliothèque d'aéronefs et vue éclatée : chaque pièce, sa fonction.",
    to: '/lab/aircraft',
    status: 'open',
  },
  {
    id: 'flight',
    name: 'Flight Lab',
    line: 'Décollage, atterrissage, vent de travers, décrochage, panne moteur.',
    to: '/lab',
    status: 'scaffold',
  },
  {
    id: 'navigation',
    name: 'Navigation Lab',
    line: 'Carte, route, cap, dérive, temps de vol — sous forme de missions.',
    to: '/lab',
    status: 'scaffold',
  },
  {
    id: 'weather',
    name: 'Weather Lab',
    line: "Altitude, pression, vent, nuages, visibilité : lire l'atmosphère.",
    to: '/lab',
    status: 'scaffold',
  },
  {
    id: 'mindset',
    name: 'Think Like a Pilot',
    line: 'Scénarios de décision : anticiper, arbitrer, dérouter.',
    to: '/lab',
    status: 'scaffold',
  },
]
