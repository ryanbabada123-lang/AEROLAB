import type { Block, CourseSection } from '@/content/types'

/**
 * COMPLÉMENTS AUX COURS EXTRAITS.
 *
 * Les six cours produits par `scripts/cours-extraire.py` ne contiennent que
 * ce qui se trouve dans la couche TEXTE du PDF. Or deux choses n'y sont
 * pas : les figures, qui sont des images, et les tableaux que l'auteur a
 * lui aussi mis en image — leur contenu est alors invisible du script.
 *
 * On ne peut pas les ajouter dans les fichiers de `generated/` : ils sont
 * réécrits à chaque extraction, et c'est justement ce qui garantit que leur
 * texte est exactement celui du document. Les compléments vivent donc à
 * côté, et sont recollés au chargement.
 *
 * SANS CE MÉCANISME, les schémas redessinés n'existeraient que sur les pages
 * de comparatif : un élève qui lit le cours ne les verrait jamais.
 */

export interface Complement {
  /**
   * Page du document source où la figure ou le tableau se trouve. C'est elle
   * qui décide de la section d'accueil par défaut.
   */
  page: number
  /**
   * Section d'accueil imposée, quand la page ne suffit pas à trancher.
   *
   * Trois sections de l'Aéromédecine commencent page 1 : la pagination seule
   * ne peut pas dire laquelle accueille la figure. Cet identifiant lève
   * l'ambiguïté. S'il ne correspond à aucune section — parce qu'une nouvelle
   * extraction a renommé un titre de l'auteur — on retombe sur la règle de
   * pagination, avec un avertissement en console plutôt qu'une page cassée.
   */
  section?: string
  blocs: Block[]
}

/**
 * Recolle les compléments aux sections extraites.
 *
 * Chaque complément rejoint la DERNIÈRE section commencée avant sa page, et
 * s'ajoute à la fin de ses blocs. Le rattachement passe donc par la
 * pagination du document source, seule donnée stable entre deux extractions.
 *
 * Les sections extraites ne sont pas modifiées : on en rend une copie.
 */
export function avecComplements(
  sections: CourseSection[],
  complements: Complement[],
): CourseSection[] {
  const sortie = sections.map((s) => ({ ...s, blocks: [...s.blocks] }))

  for (const c of complements) {
    let cible = c.section ? sortie.findIndex((s) => s.id === c.section) : -1

    if (c.section && cible === -1) {
      console.warn(
        `Complément page ${c.page} : section « ${c.section} » introuvable, ` +
          `rattachement par la pagination.`,
      )
    }

    if (cible === -1) {
      cible = 0
      for (let i = 0; i < sortie.length; i++) {
        const debut = sortie[i].pages?.[0]
        if (debut !== undefined && debut <= c.page) cible = i
      }
    }

    sortie[cible].blocks.push(...c.blocs)
  }

  return sortie
}
