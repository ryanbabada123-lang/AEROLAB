# État du projet

Document de reprise. Il dit ce qui est fait, ce qui est décidé, ce qui reste, et
les pièges déjà rencontrés — afin qu'une session suivante reprenne sans rien
redemander à l'auteur du projet.

Compléments : `assets/RESSOURCES.md` pour les sources et les licences,
`docs/STORYBOARD-INTRO.md` pour l'introduction.

---

## 1. Ce qui est acquis

### Modèles 3D — `public/models/`, 5,10 Mo au total

| Modèle | Poids | Triangles | Notes |
| --- | ---: | ---: | --- |
| `a350-1000.glb` | 2,94 Mo | 256 945 | Cotes réelles à 3 mm près. Sept organes d'animation préservés. |
| `a400m-flightdeck.glb` | 1,79 Mo | 333 500 rendus | 404 meshes uniques, 808 instances. Sans textures. |
| `tecnam-p2010.glb` | 0,37 Mo | 43 401 | Sans textures. Dix-sept matériaux nommés, un par instrument. |

Chaîne rejouable : `node scripts/models.mjs` compresse,
`node scripts/models-verify.mjs` contrôle, `node scripts/models-preview.mjs`
rend des planches sous plusieurs angles, `node scripts/model-parts.mjs <glb>`
donne les noms de pièces tels que le chargeur les monte.

### Habillage — `src/three/modelMaterials.ts`

88 surfaces habillées par règles sur leur nom, occluders masqués, afficheurs
éteints en attente d'instruments, livrée blanc et noir du Tecnam.

### Les modèles dans l'introduction — `src/three/Model.tsx`

Chargeur commun aux trois modèles : clone la scène, pose les matériaux du site,
retrouve par leur nom les organes d'animation. Le Tecnam tient les scènes
d'avant le décollage avec ses instruments vivants, l'A350 prend la suite avec
rentrée du train, soufflantes en rotation et orbite pilotée par le défilement,
et le poste A400M n'est monté que pendant sa fenêtre puis démonté.

### Le site découvert — `src/sections/Discover.tsx`

Sept sections dans le style de la maquette blizzard. Chaque carte dit son état
réel.

### Espace élève — `src/pages/Student.tsx`, `src/lib/student.ts`

Profil local, progression, fichier exportable et réimportable.

---

## 2. Décisions prises, et par qui

Toutes prises par l'auteur du projet, sauf mention contraire.

| Sujet | Décision |
| --- | --- |
| Appareil de l'introduction | **Les deux.** Tecnam F-HOOT = « une machine », A350 = « une première fois », et c'est l'A350 qui décolle et atterrit. |
| Séquence de l'intro | **Six scènes** de montagne, puis « Bienvenue dans l'AeroLab » avec l'A350 qui passe devant le titre en rotation. |
| Marques | **Les deux.** Glyphe de sommet pendant l'intro, aile en chevron dès que le site se découvre. Le risque de deux marques a été signalé ; la bascule est donc traitée comme un moment assumé. |
| Navigation | Barre courte comme la maquette, **tout le programme conservé en sous-menus**. |
| Attribution des cours | Crédits regroupés sur **une page accessible depuis le pied de page**, pas sur chaque cours. |
| Avion école | **Tecnam P2010** de helijah. Le P2008 n'existe pas sous licence exploitable. Réserve : le P2010 est un quatre places, le P2008 un deux places. |
| Livrée du Tecnam | **Blanc et noir.** |
| Textures manquantes | À reconstruire par le code. Autorisation explicite donnée. |
| Comptes utilisateurs | **Firebase, plus tard, par l'auteur du projet.** D'ici là, profil local et fichier portable. |
| Registres visuels | *Décision d'implémentation, à confirmer :* sombre et arrondi pour les écrans de navigation, blanc et anguleux pour les pages de cours — 430 pages équivalent A4 se lisent mal sur fond sombre. |

### Ce que la migration Firebase trouvera en place

Le profil (`aerolab.student.v1`) et le carnet (`aerolab.flightlog.v1`) sont du
JSON **versionné et sérialisable tel quel**. Migrer consistera à écrire la même
structure côté serveur, sans remodeler quoi que ce soit. Le fichier exportable
utilise le même assemblage (`kind: 'aerolab.eleve'`), ce qui donne d'emblée une
voie d'import pour les élèves déjà avancés.

---

## 3. Ce qui reste, par poids

| Bloc | Part du total | État |
| --- | ---: | --- |
| Instruments vivants du Tecnam | ~3 % | ✅ fait, vitesses sourcées sur le manuel de vol |
| Remplacer les primitives par les vrais modèles dans l'intro | ~7 % | ✅ fait — Tecnam, cockpit A400M et A350 en place |
| Frise à six scènes + décollage et atterrissage | ~10 % | partiel : les trois appareils jouent dans la frise existante à sept phases, qui reste à réécrire sur les six scènes du storyboard |
| Moteur de cours + chapitre 1 Météo comme référence | ~10 % | ✅ fait — texte intégral, 20 schémas SVG, comparatif de vérification |
| Les six autres chapitres BIA | ~60 % | texte intégral en place ; schémas commencés — **6 redessinés sur ~1 535** |
| Chapitre 5 Histoire | — | ✅ rédigé d'après les sources officielles ; **à faire relire par un instructeur** |

**Le poids est dans les cours**, et il ne peut pas être comprimé sans trahir
deux règles posées par l'auteur du projet : ne pas résumer le texte, ne pas
approximer les schémas. 641 445 signes, 1 731 images, des centaines de schémas à
redessiner en SVG avec comparatif de vérification.

### Le contenu réellement en place

`src/content/index.ts` déclare huit matières. **Deux fiches existent** :
`aerodynamique-portance.ts`, qui traite la portance — une notion sur les onze
sections du Cours 2 —, et `bia/meteo/`, qui est le **chapitre 1 Météorologie
en entier**. L'auteur du projet avait été explicitement corrigé sur ce point :
il croyait les cours faits, une seule fiche existait alors.

---

## 3 ter. Le moteur de cours et le chapitre 1 — état exact

### Ce qui est livré

**Le moteur** — `src/components/course/` : révélation des blocs au défilement
sur `IntersectionObserver` (pas d'asservissement du scroll, pas de
scroll-jacking), barre de progression de lecture mesurée sur l'article et non
sur la page, sommaire actif, bandeau de provenance. `prefers-reduced-motion`
court-circuite l'animation avant même de poser l'observer.

Six types de blocs ont été ajoutés au schéma de contenu : `heading`, `list`,
`table`, `coded` (messages METAR, TAF, SIGMET et leur décodage), `schema` (SVG
redessiné, avec sa page d'origine) et l'extension des blocs existants.

**Le texte** — les 98 777 signes du cours, repris mot pour mot, en dix sections
(`src/content/bia/meteo/`). Le compte d'extraction correspond exactement à
celui consigné dans `assets/RESSOURCES.md`, ce qui vérifie que rien n'a été
perdu à l'extraction.

**Les schémas** — 20 redessinés en SVG, avec la page d'origine portée sous
chaque figure. **Le comparatif de vérification est en ligne** :
`/verification/meteo` pose l'original découpé du PDF face au redessin, avec un
curseur de superposition — c'est lui qui révèle les écarts de géométrie qu'une
comparaison côte à côte laisse passer. Les originaux sont produits par
`scripts/cours-figures.py`, sans retouche.

### Deux trouvailles sur le document source

**Le tableau du front froid était invisible.** La page 28 annonce « Ci-dessous,
l'évolution des paramètres météo au passage d'un front froid » et rien ne suit.
Le tableau est pourtant bien là : il est posé aux mêmes coordonnées que la
coupe du front froid, qui est dessinée par-dessus et le masque entièrement.
Récupéré depuis l'image d'origine, il est restitué dans le cours, avec la
mention du défaut.

**Plusieurs tableaux ne sont pas du texte.** Les six types de masses d'air
(p. 20), les dix genres de nuages (p. 22), les paramètres au passage des fronts
(p. 27 et 28), les fréquences VOLMET (p. 49) sont des **images** : leur texte
est absent de la couche texte du PDF. Ils ont été relevés à l'écran et
retranscrits en tableaux HTML — donc lisibles par un lecteur d'écran, ce que
l'original n'était pas.

### Ce qui reste sur ce chapitre, et pourquoi

| Reste | Nature | Pourquoi ce n'est pas fait |
| --- | --- | --- |
| ~8 schémas | figures de l'auteur | Redessin non commencé : carte mondiale des isobares, solstices, cycle de l'eau, onde de relief, brises de bord de mer, fronts en air stable et instable, perturbation vue de dessus, secteur chaud, coupe d'occlusion. Signalés en clair dans le cours par des blocs `awaiting`. |
| Photographies | ~40 clichés | **Ne se redessinent pas.** Les dix genres de nuages, l'orage, le baromètre sont des photographies. Il leur faut une source libre, qui n'est pas réunie. |
| Planches Météo France / OACI | tableaux METAR et TAF, TEMSI, WINTEM, satellite | **Ne doivent pas être redessinées** : ce serait fabriquer des données aéronautiques, ce que le cahier des charges interdit. Il faut une autorisation de reproduction, ou des relevés authentiques. |

**Le schéma des flèches de vent (p. 16) demande une relecture visuelle.** Les
cinq barbules de l'auteur ne portent pas toutes leurs barbes du même côté du
mât ; le côté est donc donné exemple par exemple dans le code plutôt que par
une formule, et le résultat mérite d'être confronté à l'original sur
`/verification/meteo#fleches-vent` avant d'être considéré comme acquis.

---

## 3 bis. Le fichier autonome — RÉSOLU, avec un reste mineur

La construction passe : `npm run build` et `npm run single` réussissent, et le
fichier autonome pèse 2,99 Mo avec sa feuille de style et son script intégrés.

Le défaut qui s'y cachait : le §8 veut un site ouvrable d'un double-clic, donc
servi par `file://`, où un chemin absolu comme `/models/x.glb` désigne la racine
du disque. Les modèles ne se chargeaient pas, et rien ne le signalait à la
construction — ni erreur, ni avertissement.

Deux corrections l'ont levé. Les chemins sont bâtis sur
`import.meta.env.BASE_URL`, le build mono-fichier posant sa base à `./` :
ils sortent relatifs. `npm run single` copie désormais `models/` et
`images/` auprès du document, et le style intégré voit ses chemins réécrits — la
feuille venait de `assets/` où elle désignait ses images par `../images/`, ce qui
remontait d'un cran de trop une fois intégrée.

Vérifié en ouvrant réellement `file:///…/aerolab.html` dans un navigateur : les
**trois modèles se chargent** et le Tecnam s'affiche. C'était la seule preuve
qui valait, la construction ne disant rien de ce protocole.

Le livrable est donc un document de 2,99 Mo accompagné de `models/` (4,86 Mo) et
`images/` (1,80 Mo). **Reste à soumettre à l'auteur du projet** : cette forme
satisfait l'esprit du §8 — aucun serveur à lancer, ça s'ouvre au double-clic —
mais pas sa lettre. Un fichier littéralement unique demanderait d'intégrer les
modèles en base64, pour près de sept mégaoctets de plus.

**Reste mineur** : une variante d'image en AVIF n'est pas résolue à l'ouverture,
son équivalent WebP prenant le relais sans conséquence visible. À élucider sans
urgence.

---

## 4. Pièges déjà rencontrés — ne pas les refaire

**La déduplication efface les matériaux des modèles sans textures.** Dépouillés
de leurs images, des matériaux deviennent identiques et se font fusionner : les
dix-sept du Tecnam tombaient à trois, effaçant l'identité de chaque instrument.
`scripts/models.mjs` épargne désormais les matériaux dans ce cas, et
`models-verify.mjs` échoue si un matériau nommé disparaît.

**Triangles de meshes uniques ≠ triangles rendus.** Le cockpit affichait
« −52 % » après déduplication alors que rien n'était perdu : 404 meshes
instanciés 808 fois. Les deux comptes sont désormais distingués.

**Ne jamais fusionner les meshes.** `join` et `flatten` sont volontairement
absents du pipeline : la rentrée du train et la rotation des soufflantes de
l'A350 en dépendent.

**Ne pas viser une zone d'un modèle par un seuil en mètres.** Le repère local
d'une pièce est décalé par rapport à celui où l'on mesure. La bande de peinture
se règle en fraction de la boîte englobante de la pièce, ce qui se calibre seul.

**La clé de cache d'un matériau doit inclure tout ce qui le distingue.** Sans la
bande de peinture dans la clé, fuselage peint et ailes non peintes partageaient
un matériau, et le bord d'attaque devenait noir sur toute l'envergure.

**Un intérieur ne se cadre pas depuis l'extérieur.** Il faut mesurer où sont les
sièges et les panneaux, puis placer la caméra en coordonnées absolues. Les
repères des deux postes sont notés dans `scripts/models-preview.mjs`.

**Les zones sombres n'existent pas quand la barre s'initialise.** Les pages sont
chargées en différé : la barre relève les zones à l'exécution *et* à chaque
mutation du contenu.

**Un chemin absolu casse le `file://`.** Voir §3 bis : rien ne le signale à la
construction, et le symptôme n'apparaît qu'au double-clic.

**Vérifier au rendu, pas au raisonnement.** Chaque affirmation visuelle de ce
projet a été contrôlée par une capture, et plusieurs erreurs n'ont été trouvées
que comme ça — occluders verts, rectangles blancs en pleine planche, bord
d'attaque noir, barre blanche sur fond sombre.

---

## 5. Ce qui manque encore côté sources

- Cours PPL théorique, PPL pratique, annales BIA
- ~~Chapitre 5 Histoire~~ — **fait.** Les sources ont été trouvées et
  téléchargées : le **manuel officiel du BIA** (Eduscol, Ministère de
  l'Éducation nationale, version 4.0 édition 2021, 274 pages, rédigé sous la
  direction du CIRAS de Toulouse) et le **chapitre 5 du CIRAS** (65 pages).
  Les deux sont dans `assets/cours/histoire/` et ont une couche texte native.
  Le chapitre suit le plan du **programme officiel 2015** en quatre parties,
  reprend ses dates, mais son texte est écrit pour ce site — on ne recopie pas
  un document sur lequel l'auteur du projet n'a pas la main. Statut `sourced`,
  et un encadré rouge en tête de chapitre dit qu'il **reste à faire relire par
  un instructeur**.
- Plaques en 3 840 px de large, si l'outil de l'auteur le permet
- Provenance des visuels de montagne et de piste
- Les inscriptions des panneaux de cockpit resteront muettes : les inventer
  serait fabriquer des données aéronautiques


---

## 3 quater. Les six autres cours — texte en place, schémas à faire

### La décision d'outillage, et pourquoi

Le chapitre 1 a été composé à la main, section par section : 49 pages. Les six
cours restants totalisent **294 pages et 542 668 signes**. À cette échelle, une
transcription manuelle *dérive* — un accent, une virgule, un mot sauté — et la
règle « mot pour mot » n'est plus vérifiable.

Ils sont donc produits par `scripts/cours-extraire.py`, qui lit la **couche
texte native** des PDF. Ce n'est pas un raccourci mais une garantie : ce qui
sort est littéralement ce qui est dans le document. Aucune reconnaissance de
caractères n'intervient — les huit cours ont une couche texte, aucun n'est un
scan.

Le script retire l'entête et le pied de page répétés, saute le sommaire,
reconnaît les titres à leur numérotation *et à leur corps typographique*,
recolle les paragraphes que la mise en page a coupés, et reconnaît les listes
à leur puce. **Il ne réécrit rien, ne résume rien, ne complète rien.**

### La mesure de fidélité

Le script mesure sa propre fidélité à chaque passage et refuse de produire un
fichier sous 97 %. La mesure porte sur les **signes non blancs** : l'espacement
du PDF vient de la mise en page et n'a aucune valeur, mais un mot perdu se voit.

| Cours | Pages | Sections | Blocs | Fidélité |
| --- | ---: | ---: | ---: | ---: |
| Aérodynamique et mécanique du vol | 64 | 21 | 836 | 100,1 % |
| Étude des aéronefs | 83 | 11 | 964 | 100,0 % |
| Réglementation | 34 | 31 | 522 | 99,5 % |
| Navigation | 32 | 27 | 528 | 99,9 % |
| Aéromédecine | 16 | 10 | 358 | 99,8 % |
| Anglais aéronautique | 65 | 44 | 183 | 99,1 % |

Le reste est de la marque de puce et du tiret de numérotation, neutralisés des
deux côtés de la mesure parce que ce sont des signes de mise en forme, pas des
mots.

**Trois erreurs de mesure ont été trouvées et corrigées** avant d'obtenir ces
chiffres — c'est pour ça qu'ils valent quelque chose. La première comptait le
sommaire au dénominateur et faisait apparaître 92 % là où il y avait 100 %. La
deuxième oubliait les titres de section, rangés hors des blocs. La troisième
comptait les puces comme du texte perdu.

### Un statut à part : `text-only`

Ces six cours ne sont pas des démonstrations à remplacer — leur texte **est**
celui de l'auteur, exact au signe. Il leur manque les schémas. Les confondre
avec `demo` aurait laissé croire qu'il faut refaire le texte. Un statut
`text-only` a donc été ajouté, et chaque page affiche exactement ce qui lui
manque.

### Le paquet, et le piège évité

Embarquer 720 Ko de texte dans le paquet principal le faisait passer de 365 à
**937 Ko** : tout visiteur de la page d'accueil téléchargeait les 343 pages du
BIA. Chaque cours est donc un module chargé à l'ouverture de sa page. Le paquet
principal est revenu à 369 Ko, et les six chunks pèsent de 25 à 175 Ko chacun.

### Ce qui reste sur ces six cours

**Les schémas.** 1 535 images pour 294 pages. Le chapitre 1 donne l'échelle du
travail : 20 figures redessinées pour 49 pages. Les mêmes réserves qu'au
chapitre 1 s'appliqueront — les photographies ne se redessinent pas, et les
documents Météo France, OACI et NASA reproduits en pleine page demandent une
autorisation plutôt qu'un redessin.

**Le découpage en sections mérite une relecture.** Il est déduit de la
numérotation et du corps typographique, ce qui donne un résultat juste dans
l'ensemble mais quelques sections de trop là où l'auteur a mis en valeur un
intertitre — « SOIT », « AVANT DÉPART », « DISTANCES » en Navigation. Le texte
n'en perd rien ; c'est le sommaire qui est bavard.


---

## 3 quinquies. Les schémas des six autres cours — où en est le chantier

### Ce qui est en place

Le **comparatif est générique** : `/verification/<cours>` accepte n'importe
quel cours. Ajouter un cours demande une entrée dans le registre `SETS` de
`src/pages/Verification.tsx` et un dossier `public/verif/<cours>/`. Rien
d'autre.

| Cours | Schémas redessinés | Comparatif |
| --- | ---: | --- |
| Météorologie | 20 | `/verification/meteo` |
| Aérodynamique | 4 | `/verification/aerodynamique` |
| Étude des aéronefs | 2 | `/verification/aeronefs` |

**Aérodynamique** : composition des forces, les trois équilibres, la polaire
d'une aile avec tous ses points caractéristiques, et l'établissement de la
polaire à partir des mesures en soufflerie.

**Aéronefs** : la chaîne barométrique — deux circuits, le rouge de pression
totale vers le seul anémomètre et le bleu statique vers les trois
instruments — et les secteurs TO/FROM du VOR.

### La leçon du chantier : toutes les figures ne sont pas des schémas

C'est la découverte qui structure la suite du travail. Sur les 1 731 images
des huit cours, trois familles se distinguent, et une seule relève du
redessin :

1. **Les schémas au trait** — coupes, courbes, diagrammes, symboles. Ils se
   redessinent, et c'est ce qui est fait.
2. **Les rendus photoréalistes et les photographies** — l'intérieur de
   l'altimètre et du compas en écorché 3D (cours 3), les dix genres de nuages,
   l'orage, les planches de bord. Un redessin au trait n'en serait pas une
   reproduction fidèle mais une autre image. Il leur faut des sources libres.
3. **Les documents officiels reproduits** — planches Météo France, OACI, NASA.
   Les redessiner reviendrait à fabriquer des données aéronautiques. Il leur
   faut une autorisation de reproduction.

**Le compte de « 1 535 schémas restants » est donc faux, et largement
surévalué.** Le nombre réel de figures redessinables reste à établir cours par
cours — c'est le premier travail à faire avant d'annoncer un reste.

### Le rythme constaté

Chaque figure demande d'être ouverte, relevée à l'écran, redessinée, puis
**confrontée à l'original au rendu**. Ce dernier point n'est pas une
formalité : il a trouvé un maximum de portance placé à 13,4 au lieu de 11,4,
une flèche de décrochage pointant à droite au lieu du bas, des barbules de
vent mal orientées, une silhouette d'avion qui rendait en étoile, et une
colonne de températures collée à l'échelle des altitudes. Aucune de ces
erreurs n'était visible dans le code.
