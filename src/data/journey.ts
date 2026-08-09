/**
 * PARCOURS VERS LE COCKPIT (§14).
 *
 * ⚠ RÈGLE APPLIQUÉE ICI SANS EXCEPTION (§14 + §38) :
 * la SÉQUENCE ci-dessous est celle indiquée par l'auteur. Elle n'est PAS
 * présentée comme un parcours réglementaire tant qu'elle n'a pas été
 * vérifiée auprès de l'autorité compétente.
 *
 * Aucune durée, aucun coût, aucun prérequis réglementaire n'est écrit ici :
 * ces champs restent explicitement vides et l'interface les affiche comme
 * « à documenter ». Il vaut mieux une page qui assume ce qu'elle ne sait pas
 * qu'une page crédible et fausse — surtout devant un professionnel.
 */

export interface Step {
  id: string
  name: string
  kind: 'Étape' | 'Théorie' | 'Pratique' | 'Aptitude' | 'Qualification' | 'Sélection'
  /** Description générale, non réglementaire. */
  line: string
  /** Ce que l'étape apporte, en termes de compétences. */
  apporte?: string
}

export const JOURNEY: Step[] = [
  {
    id: 'decouverte',
    name: 'Découverte',
    kind: 'Étape',
    line: "Premier contact : vol d'initiation, club, aéroclub, forum, lectures. Le moment où le projet cesse d'être abstrait.",
    apporte: "Savoir si l'on veut vraiment y aller.",
  },
  {
    id: 'bia',
    name: 'BIA',
    kind: 'Théorie',
    line: "Brevet d'initiation aéronautique : première culture aéronautique structurée, généralement suivie en milieu scolaire.",
    apporte: 'Les bases : aérodynamique, aéronefs, météo, navigation, réglementation.',
  },
  {
    id: 'ppl',
    name: 'PPL',
    kind: 'Pratique',
    line: 'Licence de pilote privé : la première licence qui permet de voler comme commandant de bord, hors transport rémunéré.',
    apporte: 'Piloter seul, préparer et conduire un vol de navigation.',
  },
  {
    id: 'atpl-theorique',
    name: 'ATPL théorique',
    kind: 'Théorie',
    line: "Le bloc théorique le plus lourd du parcours professionnel : plusieurs matières, examens séparés.",
    apporte: "Le socle théorique attendu d'un pilote professionnel.",
  },
  {
    id: 'medical',
    name: 'Aptitude médicale',
    kind: 'Aptitude',
    line: "Examen médical aéronautique, à passer auprès d'un centre ou d'un médecin agréé. À anticiper : c'est une condition d'accès, pas une formalité de fin de parcours.",
  },
  {
    id: 'cpl',
    name: 'CPL',
    kind: 'Qualification',
    line: 'Licence de pilote professionnel : elle ouvre le pilotage contre rémunération.',
  },
  {
    id: 'ir',
    name: 'IR',
    kind: 'Qualification',
    line: 'Qualification de vol aux instruments : voler sans référence visuelle extérieure, dans le système de circulation aérienne.',
  },
  {
    id: 'me',
    name: 'Multi-engine',
    kind: 'Qualification',
    line: 'Qualification multimoteur : piloter un appareil à plusieurs moteurs, y compris avec un moteur en panne.',
  },
  {
    id: 'uprt',
    name: 'UPRT',
    kind: 'Qualification',
    line: "Formation à la prévention et à la récupération des positions inusuelles : reconnaître une situation qui dérape et la rattraper.",
  },
  {
    id: 'mcc',
    name: 'MCC',
    kind: 'Qualification',
    line: "Travail en équipage : répartition des tâches, communication, prise de décision à deux dans le cockpit.",
  },
  {
    id: 'selections',
    name: 'Sélections',
    kind: 'Sélection',
    line: "Processus de recrutement des compagnies : tests, simulateur, entretiens. Les compétences non techniques y pèsent autant que le pilotage.",
  },
  {
    id: 'airline',
    name: 'Airline pilot',
    kind: 'Étape',
    line: "Qualification de type sur l'appareil de la compagnie, adaptation en ligne, puis les lignes. Le début du métier, pas la fin du parcours.",
  },
]

/** Champs volontairement non renseignés — affichés comme tels (§14). */
export const UNDOCUMENTED_FIELDS = [
  'Prérequis réglementaires',
  'Durée indicative',
  'Coûts indicatifs',
  'Examens et épreuves',
] as const
