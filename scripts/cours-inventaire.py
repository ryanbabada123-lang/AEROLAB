#!/usr/bin/env python3
"""
Inventaire des figures des cours : combien sont RÉELLEMENT redessinables.

POURQUOI
--------
Le compte annoncé jusqu'ici — « 1 731 images, donc autant de schémas à
redessiner » — est faux. Toutes les images d'un cours ne sont pas des
schémas. Trois familles coexistent, et une seule relève du redessin au
trait :

  · SCHÉMA   — coupes, courbes, diagrammes, symboles. Se redessine.
  · IMAGE    — photographies et rendus 3D en écorché. En faire un dessin
               au trait ne serait pas une reproduction fidèle mais une
               AUTRE image. Demande une source libre, pas un crayon.
  · VIGNETTE — trop petite pour porter une figure : puce, logo, filet.

Ce script donne un reste à faire honnête plutôt qu'un chiffre gonflé.

CE QUE CE SCRIPT NE FAIT PAS, ET POURQUOI
-----------------------------------------
Il ne classe PAS automatiquement schéma / photographie. Deux heuristiques
ont été essayées et REJETÉES sur des cas dont la réponse était connue :

  1. Part d'aplats — pixels appartenant aux teintes dominantes. Rejetée :
     la photographie de cumulus donne 0,64 (le ciel est un grand aplat) et
     la chaîne barométrique 0,70. Les deux se recouvrent.
  2. Continuité locale — part des pixels voisins identiques. Rejetée :
     le schéma du VOR donne 0,273 et la carte des isobares, qui est une
     image, 0,291. Elles se croisent.

La raison est de fond : dans ces cours, TOUT est une illustration couleur
tramée — le schéma au trait comme le rendu photoréaliste. Ce qui les
sépare n'est pas une texture mesurable mais ce que la figure REPRÉSENTE.
Il faut un œil, page par page.

Le script fait donc ce qui est fiable : il compte les figures assez
grandes pour porter une information, par cours. C'est une BORNE
SUPÉRIEURE du travail de redessin, pas son compte exact — et c'est déjà
beaucoup plus honnête que « 1 731 images à redessiner ».

USAGE
    python3 scripts/cours-inventaire.py [--details]
"""

import argparse
import glob
import os
from collections import Counter

import pymupdf

# En dessous, l'image ne peut pas porter une figure lisible.
MIN_PT = (110, 80)

# Une figure « portante » occupe au moins un quart de la largeur utile.
GRANDE_PT = (190, 150)


def inventaire(path: str, details=False):
    doc = pymupdf.open(path)
    counts = Counter()
    limites = []

    for i in range(doc.page_count):
        page = doc[i]
        seen = set()
        for info in page.get_images(full=True):
            xref = info[0]
            if xref in seen:
                continue
            seen.add(xref)
            rects = page.get_image_rects(xref)
            if not rects:
                continue
            r = rects[0]
            if r.width < MIN_PT[0] or r.height < MIN_PT[1]:
                counts["vignette"] += 1
            elif r.width >= GRANDE_PT[0] and r.height >= GRANDE_PT[1]:
                counts["grande"] += 1
                if details:
                    limites.append((i + 1, f"{r.width:.0f}x{r.height:.0f}"))
            else:
                counts["moyenne"] += 1

    # Les tracés vectoriels ne sont pas des images : ils sont déjà du
    # dessin, et les compter comme « à redessiner » n'a pas de sens.
    vect = sum(1 for p in doc if len(p.get_drawings()) > 30)

    return counts, limites, vect, doc.page_count


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--details", action="store_true")
    a = ap.parse_args()

    total = Counter()
    print(f"{'Cours':<34} {'p.':>4} {'grandes':>8} {'moyennes':>9} "
          f"{'vignettes':>10}")
    print("-" * 76)

    for path in sorted(glob.glob("assets/cours/**/*.pdf", recursive=True)):
        if "archive" in path:
            continue
        counts, limites, vect, pages = inventaire(path, a.details)
        total.update(counts)
        nom = os.path.basename(path)[:33]
        print(f"{nom:<34} {pages:>4} {counts['grande']:>8} "
              f"{counts['moyenne']:>9} {counts['vignette']:>10}")
        if a.details and limites:
            for p, taille in limites[:14]:
                print(f"     p{p:<4} {taille}")

    print("-" * 76)
    print(f"{'TOTAL':<34} {'':>4} {total['grande']:>8} "
          f"{total['moyenne']:>9} {total['vignette']:>10}")
    print()
    print(f"BORNE SUPÉRIEURE du redessin : {total['grande']} grandes figures,")
    print(f"soit {total['grande'] + total['moyenne']} en comptant les moyennes.")
    print(f"{total['vignette']} vignettes sont hors sujet (puces, logos, filets).")
    print()
    print("Combien sont des SCHÉMAS et non des photographies ou des rendus,")
    print("ce script ne le dit pas : voir l'entête, deux heuristiques ont été")
    print("essayées et rejetées. Il faut un œil, page par page.")


if __name__ == "__main__":
    main()
