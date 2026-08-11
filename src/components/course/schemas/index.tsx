import type { ReactElement } from 'react'
import type { SchemaId } from '@/content/types'
import { AtmosphereCoupe, AtmosphereTemperature, ColonneAir } from './atmosphere'
import { CellulesHadley, FlechesVent, VentForces } from './vent'
import { GradientAdiabatique, StabiliteInstabilite } from './stabilite'
import {
  FrontChaudCoupe,
  FrontFroidCoupe,
  SymboleFrontChaud,
  SymboleFrontFroid,
  SymbolesOcclusion,
} from './fronts'
import {
  BrouillardAdvection,
  BrouillardEvaporation,
  BrouillardPente,
  BrouillardRadiation,
} from './brouillards'
import { PriseDeDecision, VisibiliteBrume, VisibiliteSecteurs } from './information'
import {
  CompositionForces,
  Equilibres,
  PolaireAile,
  PolaireEtablissement,
} from './aerodynamique'
import { ChaineBarometrique, VorToFrom } from './aeronefs'
import {
  FacteursDeCharge,
  IllusionsPiste,
  PressurisationCabine,
  SaturationOxygene,
  SeuilsHypoxie,
} from './aeromedecine'

/**
 * REGISTRE DES SCHÉMAS REDESSINÉS.
 *
 * Le type `SchemaId` et ce registre se tiennent l'un l'autre : ajouter un
 * identifiant sans son composant est une erreur de compilation, ce qui
 * évite d'avoir une figure annoncée mais absente dans une page de cours.
 */
export const SCHEMAS: Record<SchemaId, () => ReactElement> = {
  'atmosphere-coupe': AtmosphereCoupe,
  'atmosphere-temperature': AtmosphereTemperature,
  'colonne-air': ColonneAir,
  'vent-forces': VentForces,
  'cellules-hadley': CellulesHadley,
  'fleches-vent': FlechesVent,
  'gradient-adiabatique': GradientAdiabatique,
  'stabilite-instabilite': StabiliteInstabilite,
  'front-chaud-coupe': FrontChaudCoupe,
  'front-froid-coupe': FrontFroidCoupe,
  'symbole-front-chaud': SymboleFrontChaud,
  'symbole-front-froid': SymboleFrontFroid,
  'symboles-occlusion': SymbolesOcclusion,
  'brouillard-radiation': BrouillardRadiation,
  'brouillard-advection': BrouillardAdvection,
  'brouillard-evaporation': BrouillardEvaporation,
  'brouillard-pente': BrouillardPente,
  'visibilite-secteurs': VisibiliteSecteurs,
  'visibilite-brume': VisibiliteBrume,
  'prise-de-decision': PriseDeDecision,
  'polaire-aile': PolaireAile,
  'polaire-etablissement': PolaireEtablissement,
  'composition-forces': CompositionForces,
  'equilibres': Equilibres,
  'chaine-barometrique': ChaineBarometrique,
  'vor-to-from': VorToFrom,
  'saturation-oxygene': SaturationOxygene,
  'seuils-hypoxie': SeuilsHypoxie,
  'illusions-piste': IllusionsPiste,
  'pressurisation-cabine': PressurisationCabine,
  'facteurs-de-charge': FacteursDeCharge,
}

/** Intitulé de chaque schéma — sert au comparatif et aux légendes. */
export const SCHEMA_TITLES: Record<SchemaId, string> = {
  'atmosphere-coupe': 'Les couches successives de l’atmosphère',
  'atmosphere-temperature': 'Structure de l’atmosphère terrestre et courbe de température',
  'colonne-air': 'Densité de l’air selon l’altitude',
  'vent-forces': 'Les trois forces qui agissent sur le vent',
  'cellules-hadley': 'La circulation atmosphérique générale',
  'fleches-vent': 'Représentation du vent sur les cartes',
  'gradient-adiabatique': 'Gradient adiabatique en air sec et en air humide',
  'stabilite-instabilite': 'Stabilité, instabilité et couche de bloquage',
  'front-chaud-coupe': 'Coupe d’un front chaud',
  'front-froid-coupe': 'Coupe d’un front froid',
  'symbole-front-chaud': 'Symbole du front chaud',
  'symbole-front-froid': 'Symbole du front froid',
  'symboles-occlusion': 'Symboles de l’occlusion',
  'brouillard-radiation': 'Le brouillard de radiation',
  'brouillard-advection': 'Le brouillard d’advection',
  'brouillard-evaporation': 'Le brouillard d’évaporation',
  'brouillard-pente': 'Le brouillard de pente',
  'visibilite-secteurs': 'Visibilité dominante : trois secteurs',
  'visibilite-brume': 'Visibilité dominante réduite par la brume',
  'prise-de-decision': 'Schéma de construction de la prise de décision',
  'polaire-aile': 'Polaire d’une aile d’avion',
  'polaire-etablissement': 'Établissement de la polaire',
  'composition-forces': 'Composition de deux forces perpendiculaires',
  equilibres: 'Les trois équilibres : stable, indifférent, instable',
  'chaine-barometrique': 'La chaîne barométrique',
  'vor-to-from': 'Les secteurs TO et FROM du VOR',
  'saturation-oxygene': 'Saturation en oxygène de l’hémoglobine selon l’altitude',
  'seuils-hypoxie': 'Les seuils de l’hypoxie d’altitude',
  'illusions-piste': 'Illusions d’approche selon la largeur de piste',
  'pressurisation-cabine': 'Principes de pressurisation cabine',
  'facteurs-de-charge': 'Les facteurs de charge Gx, Gy et Gz sur le pilote',
}

export function Schema({ id }: { id: SchemaId }) {
  const Component = SCHEMAS[id]
  return <Component />
}
