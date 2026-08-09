/**
 * PIÈCES DE L'AVION — vue éclatée (§18).
 *
 * Descriptions génériques du rôle de chaque élément sur un monomoteur à
 * aile haute. Elles ne portent aucune caractéristique chiffrée : la forme
 * 3D est une silhouette propre à AERO//LAB (§51.4), pas un appareil réel.
 */

export interface PartDef {
  id: string
  name: string
  /** Direction d'éclatement. */
  dir: [number, number, number]
  role: string
}

export const PARTS: PartDef[] = [
  {
    id: 'wing',
    name: 'Aile',
    dir: [0, 1.6, 0],
    role: "Elle crée la portance. Sa surface, son profil et son incidence déterminent la force qui soutient l'avion.",
  },
  {
    id: 'fuselage',
    name: 'Fuselage',
    dir: [0, 0, 0],
    role: "Structure centrale : il relie l'aile, l'empennage et le moteur, et porte l'équipage et la charge.",
  },
  {
    id: 'tailplane',
    name: 'Empennage horizontal',
    dir: [0, -1.1, 1.8],
    role: "Il assure la stabilité en tangage. La gouverne de profondeur y contrôle l'assiette.",
  },
  {
    id: 'fin',
    name: 'Dérive',
    dir: [0, 1.9, 1.6],
    role: 'Elle assure la stabilité en lacet. La gouverne de direction y contrôle le mouvement autour de l’axe vertical.',
  },
  {
    id: 'engine',
    name: 'Moteur et hélice',
    dir: [0, 0, -2.6],
    role: "L'hélice transforme la puissance du moteur en traction : c'est ce qui produit la vitesse, donc la portance.",
  },
  {
    id: 'gear',
    name: "Train d'atterrissage",
    dir: [0, -2.1, 0],
    role: "Il supporte l'appareil au sol, encaisse l'atterrissage et permet le roulage.",
  },
  {
    id: 'controls',
    name: 'Gouvernes',
    dir: [2.6, 0.7, 0],
    role: 'Ailerons, profondeur et direction : les surfaces mobiles par lesquelles le pilote agit sur la trajectoire.',
  },
]

