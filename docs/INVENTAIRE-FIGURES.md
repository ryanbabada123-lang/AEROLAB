# Inventaire des figures — tri à l'œil, cours par cours

Ce document est le **tri manuel** des figures des cours BIA : lesquelles se
redessinent en SVG, lesquelles n'en relèvent pas.

Il complète `scripts/cours-inventaire.py`, qui compte mais ne sait pas trier —
deux heuristiques automatiques ont été écrites et rejetées, voir son entête et
`ETAT-DU-PROJET.md` §3 sexies. **Ne pas réessayer de l'automatiser.**

## La méthode, et pourquoi elle tient

`scripts/cours-planches.py <pdf>` monte des **planches-contact** : douze
figures par image, chacune portant son repère `pNN·i` — page, puis rang dans
la page. Trier un cours de 83 pages demande alors sept coups d'œil au lieu de
quatre-vingt-neuf.

C'est ce repère `pNN·i` qui sert de clé dans les tableaux ci-dessous. Il est
stable tant que le PDF ne change pas.

## Les trois verdicts

| Verdict | Ce que ça veut dire | Ce qu'il faut faire |
| --- | --- | --- |
| **SCHÉMA** | Coupe, courbe, diagramme, symbole. Sa géométrie porte l'information. | Redessiner en SVG, avec comparatif. |
| **IMAGE** | Photographie, rendu 3D, illustration anatomique. Sa matière porte l'information. | Trouver une source libre. Un redessin au trait n'en serait pas une reproduction fidèle mais **une autre image**. |
| **TABLEAU** | Une grille de texte, mise en image dans le PDF. | Transcrire en tableau HTML — plus lisible, et accessible au lecteur d'écran. |

---

## Cours 4C — Aéromédecine · 16 pages · **trié en entier**

| Repère | Figure | Verdict |
| --- | --- | --- |
| p1·1 · p1·2 | Décroissance de la température avec l'altitude, jusqu'à la tropopause | **SCHÉMA** ✅ — les deux sont quasi identiques, une seule redessinée |
| p1·3 | Coupe anatomique de l'oreille, en couleur | IMAGE |
| p2·1 | Trompe d'Eustache, ouverte et bouchée — dessin au trait | **SCHÉMA** ✅ |
| p2·2 | Canaux semi-circulaires et axes de l'avion | IMAGE |
| p4·1 | Surpression pulmonaire au cours d'une décompression | **SCHÉMA** ✅ |
| p4·2 | Principes de pressurisation cabine — altitude cabine contre altitude avion | **SCHÉMA** ✅ |
| p5·1 | Appareil respiratoire et alvéoles | IMAGE |
| p6·1 | Saturation en O₂ de l'hémoglobine selon l'altitude | **SCHÉMA** ✅ — courbe pure |
| p6·2 | Seuils d'hypoxie : indifférence, réaction, troubles, seuil critique | **SCHÉMA** ✅ |
| p9·1 · p9·2 | Facteurs de charge Gx, Gy, Gz sur le pilote | **SCHÉMA** ✅ — les deux sont quasi identiques |
| p11·1 | Coupe de l'œil, en couleur | IMAGE |
| p12·1 | Quatre vues d'un avion léger | IMAGE |
| p14·1 | Illusions d'approche : piste étroite, normale, large | **SCHÉMA** ✅ |
| p16·1 | Check-list M.A. F.O.R.M.E. | TABLEAU ✅ — transcrit, texte relevé à l'écran |

**Bilan : 8 schémas distincts, TOUS REDESSINÉS**, 1 tableau transcrit, et 5
images demandant une source libre. Soit **la moitié** des figures traitées, et
le premier cours dont le tri est mené jusqu'au bout.

Les huit se comparent à leur original sur `/verification/aeromedecine`, et
apparaissent dans le cours lui-même par `src/content/bia/complements/` — sans
quoi ils n'auraient existé que sur la page de comparatif.

Les cinq images sont toutes des **planches anatomiques** — oreille, canaux
semi-circulaires, appareil respiratoire, œil. Les redessiner au trait
produirait un autre dessin, pas une reproduction. Il leur faut des planches
libres ; il en existe de bonne qualité dans le domaine public, à chercher.

---

## Les six autres cours — à trier

Les planches-contact se génèrent par `python3 scripts/cours-planches.py <pdf>`.
Le nombre de planches donne le nombre de coups d'œil nécessaires.

| Cours | Pages | Figures | Planches | État |
| --- | ---: | ---: | ---: | --- |
| Météorologie | 49 | 111 | 10 | 20 schémas déjà redessinés, tri du reste à faire |
| **Aéromédecine** | **16** | **16** | **2** | ✅ **tri complet, 8 schémas + 1 tableau livrés** |
| Aérodynamique | 64 | 115 | 10 | 4 redessinés, tri à faire |
| Étude des aéronefs | 83 | 194 | 17 | 2 redessinés, tri à faire ; beaucoup d'écorchés 3D repérés |
| Réglementation | 34 | 46 | 4 | tri à faire |
| Navigation | 32 | 38 | 4 | planches générées, tri à faire |
| Anglais aéronautique | 65 | 133 | 12 | tri à faire |

**Ce que le premier tri complet apprend :** sur l'Aéromédecine, la moitié des
figures se redessinent — et elles l'ont toutes été. Le Cours 3, lui, laisse voir beaucoup d'écorchés 3D —
sa proportion sera plus basse. La borne de 404 grandes figures pour le BIA
donne donc un ordre de grandeur de **150 à 200 schémas** réellement à
redessiner, pas 1 500.
