# Storyboard de l'introduction cinématique

**Statut : proposition soumise à validation. Aucune ligne de code n'est écrite
avant accord explicite de l'auteur du projet.**

Six scènes de montagne, puis l'arrivée sur le site. Une seule page, tout est
piloté par le défilement : chaque geste de molette fait avancer une frise
temporelle unique, sans jamais de changement de page.

Deux appareils se partagent le récit, conformément à l'arbitrage rendu :

- **Tecnam P2008 JC, immatriculé F-HOOT** — *la machine*, celle sur laquelle on
  apprend réellement.
- **Airbus A350-1000** — *l'horizon du parcours*. C'est lui qui décolle,
  tourne, et se pose.

Le site raconte ainsi exactement le chemin qu'il enseigne : du premier vol à la
ligne.

---

## La frise

| Part du défilement | Scène | Appareil |
| ---: | --- | --- |
| 0 → 14 % | 01 **UN RÊVE.** | — |
| 14 → 28 % | 02 **UN MATIN.** | — |
| 28 → 44 % | 03 **UNE MACHINE.** | Tecnam F-HOOT |
| 44 → 56 % | 04 **UN CIEL.** | — |
| 56 → 78 % | 05 **UNE PREMIÈRE FOIS.** | A350 — décollage |
| 78 → 90 % | 06 **LE CIEL EST À TOI.** | A350 — orbite libre |
| 90 → 100 % | **BIENVENUE DANS L'AÉRO LAB.** | A350 — passage et atterrissage |

Les titres des scènes 01, 03 et 04 sont ceux des maquettes. **02, 06 et le titre
final sont des propositions**, à valider ou à remplacer.

---

## 01 — UN RÊVE.

**Décor** `montagnes/montagne-brume-01-1536x1024.png` — le sommet dans la
brume, lumière froide et plate, rochers enneigés au premier plan.

**Caméra** Immobile en apparence. Un très lent rapprochement, de 1,00 à 1,06,
imperceptible scène par scène mais qui installe une tension. La brume dérive
lentement en sens inverse du rapprochement : c'est elle qui donne la
profondeur, en deux couches indépendantes devant et derrière le sommet.

**Appareil** Aucun. Rien ne vole encore. C'est le propos de la scène.

**Texte** La marque `AERO // LAB` et son filet vertical en haut. Le titre
**UN RÊVE.** au centre, qui monte de vingt pixels en s'opacifiant. `01` en bas
à gauche. `SCROLL TO BEGIN` en bas au centre, en respiration lente.

**Intention** Le premier écran ne doit rien expliquer. Il doit donner froid.

---

## 02 — UN MATIN.

**Décor** `montagnes/montagne-ciel-bleu-02-1672x941.png` — le même massif, mais
le ciel s'est ouvert, le soleil rase par la gauche, le relief se durcit.

**Transition** La brume de la scène 01 ne coupe pas : elle se dissipe. Fondu
enchaîné entre les deux plaques, piloté au pixel par le défilement, pendant que
les couches de brume s'écartent vers les bords.

**Caméra** Panoramique descendant. On quitte les sommets pour la vallée. Dans le
dernier tiers, tout au fond, une piste mouillée se devine — la promesse de la
scène suivante.

**Appareil** Aucun.

**Texte** **UN MATIN.** Le titre de la scène 01 s'efface par le haut, celui de
la 02 arrive par le bas, avec un léger décalage entre les deux mots.

**Intention** La lumière arrive. Le rêve devient regardable.

---

## 03 — UNE MACHINE.

**Décor** `maquette-une-machine-hd-1515x518.jpeg` — la piste mouillée, les
montagnes sombres. Décor déjà vide d'appareil.

**Appareil** Le **Tecnam en 3D**, immobile sur la piste, de trois quarts avant.
Immatriculation **F-HOOT** peinte sur le fuselage. Reflet sur l'asphalte
mouillé, feu à éclats qui bat lentement.

**Caméra** **Orbite lente autour de l'appareil**, quarante degrés sur la durée
de la scène, l'angle étant directement piloté par le défilement. Remonter fait
reculer l'orbite. C'est ici que la contrainte du cahier des charges — *« on doit
pouvoir tourner autour de l'avion, voir les détails »* — est honorée pour la
première fois, et sur l'appareil que l'élève touchera vraiment.

**Texte** **UNE MACHINE.** Le micro-libellé `TECNAM P2008 JC` en bas à droite,
conservé de la maquette. `03` en bas à gauche.

**Intention** Le rêve prend une forme, une immatriculation, un numéro de série.
Il devient atteignable.

---

## 04 — UN CIEL.

**Décor** `maquette-un-ciel.jpeg` — au-dessus de la mer de nuages, lumière
chaude, sommets qui percent.

**Caméra** On est monté sans savoir comment. Léger roulis, très lent, comme
depuis un hublot. Les nuages défilent en trois couches à des vitesses
différentes.

**Appareil** Aucun au premier plan. Le Tecnam, minuscule, très loin sur la
gauche — on le cherche plus qu'on ne le voit.

**Texte** **UN CIEL.** Le micro-libellé `FREE TO FLY` à droite, conservé de la
maquette. `04` en bas à gauche.

**Intention** La récompense du premier vol. C'est la scène la plus calme de la
séquence, et elle doit l'être : elle prépare le contraste avec la suivante.

---

## 05 — UNE PREMIÈRE FOIS.

**Décor** `pistes/piste-sans-avion-1672x941.png` — la piste 27 dans l'axe, au
couchant, aérogare et tour éclairées, mer de nuages dans la vallée, le sommet
au fond. Les cinquante-cinq derniers pixels du bas sont rognés pour écarter le
filigrane de génération.

**Appareil** **L'A350**, aligné au seuil, train sorti, dans l'axe.

**Le décollage, dans l'ordre :**

1. Montée en régime — les **soufflantes accélèrent** ; elles occupent des
   meshes distincts, leur rotation est donc pilotable.
2. Lâcher des freins, roulage, accélération. Le décor défile, la piste
   s'écoule sous l'appareil, les feux d'axe passent de plus en plus vite.
3. **Rotation autour du train principal** — le nez se lève, le train avant
   quitte le sol avant les autres. C'est ce détail qui distingue un vrai
   décollage d'une translation vers le haut.
4. Décollage. Le train principal quitte la piste.
5. **Rentrée du train** — les deux atterrisseurs principaux occupent chacun un
   mesh dédié, la manœuvre est donc réellement animable et non simulée par une
   disparition.
6. Montée vers le sommet, en s'écartant de l'axe.

**Caméra** D'abord posée dans l'axe de la piste, au niveau du seuil, à hauteur
d'homme. Elle accompagne l'accélération, puis se laisse dépasser et bascule
vers le haut pour suivre la montée.

**Texte** **UNE PREMIÈRE FOIS.** puis, pendant la montée, les phrases
d'accroche du cahier des charges qui se posent l'une après l'autre :

> *N'as-tu pas toujours rêvé d'être pilote de ligne ?*
> *N'as-tu pas toujours rêvé de contrôler le ciel ?*

**Intention** C'est le sommet émotionnel de la séquence. Tout ce qui précède
l'a préparé, tout ce qui suit en redescend.

---

## 06 — LE CIEL EST À TOI.

**Décor** Ciel d'altitude, nuages volumétriques, le massif très loin en
dessous.

**Appareil** L'A350 en croisière. **Orbite libre :** le défilement fait tourner
la caméra autour de lui sur cent quatre-vingts degrés. On passe au-dessus des
ailes, on longe les moteurs, on découvre la dérive. C'est la deuxième fois que
la contrainte de rotation libre est honorée, et cette fois sur l'appareil de
ligne, avec le détail que ses 627 000 triangles permettent.

**Texte** La troisième phrase d'accroche :

> *Le moteur et le cœur de l'avion, c'est toi qui les pilotes.*

**Intention** On passe du récit au vouvoiement du lecteur. La séquence cesse de
raconter et commence à s'adresser.

---

## Final — BIENVENUE DANS L'AÉRO LAB.

**L'A350 redescend**, prend de la vitesse, et **traverse le cadre devant le
titre**, en rotation : il s'incline en passant, aile basse vers la caméra, et
sort par la droite. Le titre **BIENVENUE DANS L'AÉRO LAB** s'installe derrière
lui, révélé par son passage.

Puis l'appareil revient dans l'axe, sort son train, et **se pose sur la
piste 27** — la même qu'au décollage. La boucle se ferme sur l'aérodrome du
départ. Pendant qu'il ralentit, la navigation du site se déploie :

`BIA` · `PPL théorique` · `PPL pratique` · `Anglais aéronautique` ·
`Annales BIA` · `Banque de questions` · `Devenir pilote de ligne`

Le défilement redevient alors normal, et le site est en navigation libre.

**Point à trancher :** l'atterrissage peut aussi devenir une septième scène à
part entière, avec son propre titre, plutôt que d'être intégré au final. Le
final serait alors plus sobre, et l'atterrissage aurait le temps de respirer.

---

## Ce que la réalisation implique

### Le défilement

Une frise unique normalisée de 0 à 1, à laquelle le défilement est asservi avec
un lissage — jamais de saut, jamais de rupture. La section est épinglée pendant
toute la durée de l'introduction. Remonter rejoue la séquence à l'envers, sans
état incohérent.

### Le poids des modèles

L'A350 pèse 626 981 triangles et 20,6 Mo de binaire, plus 2,3 Mo de texture en
4096 × 4096. **Inutilisable en l'état sur le web.** Compression géométrique et
texture en KTX2, cible de 3 à 5 Mo sans perte visible. Le Tecnam, à
25 001 faces, ne coûte rien. Le chargement se fait pendant les scènes 01 et 02,
qui n'ont besoin d'aucun modèle : au moment où le Tecnam apparaît, il est déjà
là.

### L'assise sur la piste

La plaque de piste sert de **décor, pas de sol**. La piste est rebâtie en
géométrie afin que l'appareil puisse rouler, cabrer autour de son train et se
poser en un point précis. La caméra est résolue depuis l'image : point de fuite
sur l'axe vertical, fuite symétrique, largeur de piste normalisée — focale,
hauteur et assiette s'en déduisent, et le modèle ne glisse pas.

### Réserves connues

- **Les plaques plafonnent à 1 672 px de large.** En plan lointain avec brume et
  premier plan reconstruits, cela passe ; une version en 3 840 px reste
  souhaitable pour un vidéoprojecteur d'école.
- **Le texte des maquettes est incrusté.** La typographie est donc rebâtie en
  texte vivant, à l'identique : nette à toute résolution, animable, lisible sur
  mobile et par un lecteur d'écran.
- **Réglages PBR à revoir** sur l'A350, dont les huit matériaux sont en
  `metallicFactor = 0`, rendu mat et plastique. Le Tecnam n'a aucune texture :
  son habillage est à construire — ce qui, sur une cellule blanche bien
  éclairée, donne le rendu d'une photographie de presse constructeur.

### Ce qui doit être prévu dès le départ

- **Un lien pour passer l'introduction.** Un directeur d'école devant un
  vidéoprojecteur ne doit pas avoir à parcourir six scènes pour atteindre les
  cours. Discret, en haut à droite, présent dès le premier écran.
- **Respect de `prefers-reduced-motion`.** Pour qui a désactivé les animations,
  l'introduction devient une suite d'images fixes enchaînées par fondus, sans
  défilement asservi.
- **Budget réduit sur mobile** : modèles allégés, nuages volumétriques
  remplacés par des couches plates, orbites conservées.
- **Ouverture par double-clic sur `index.html`**, sans serveur, comme l'exige le
  cahier des charges. L'outillage du dépôt produit déjà un fichier autonome.
