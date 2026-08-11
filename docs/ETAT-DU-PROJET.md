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
| Moteur de cours + chapitre 1 Météo comme référence | ~10 % | à faire |
| Les six autres chapitres BIA + Histoire à rédiger | ~60 % | à faire |

**Le poids est dans les cours**, et il ne peut pas être comprimé sans trahir
deux règles posées par l'auteur du projet : ne pas résumer le texte, ne pas
approximer les schémas. 641 445 signes, 1 731 images, des centaines de schémas à
redessiner en SVG avec comparatif de vérification.

### Le contenu réellement en place

`src/content/index.ts` déclare huit matières et porte la mention « en attente
des fiches ». **Une seule fiche existe**, `aerodynamique-portance.ts`, qui traite
la portance — une notion sur les onze sections du Cours 2. L'auteur du projet a
été explicitement corrigé sur ce point : il croyait les cours faits.

---

## 3 bis. À REPRENDRE EN PREMIER — le fichier autonome et ses modèles

La construction passe : `npm run build` et `npm run single` réussissent, et le
fichier autonome pèse 2,99 Mo avec sa feuille de style et son script intégrés.

**Mais il n'est pas encore auto-suffisant pour la 3D.** Le §8 veut un site
ouvrable d'un double-clic, donc servi par `file://`, où un chemin absolu comme
`/models/x.glb` désigne la racine du disque. Les modèles ne se chargeaient donc
pas, et rien ne le signalait à la construction — ni erreur, ni avertissement.

Ce qui est déjà corrigé : les chemins sont bâtis sur `import.meta.env.BASE_URL`
et le build mono-fichier pose sa base à `./`. Ils sortent désormais relatifs.

Ce qui reste à faire, et c'est le premier point de la reprise :

1. Le HTML est écrit dans `.preview/aerolab.html` tandis que les modèles sont
   copiés dans `dist-single/models/`. **Le fichier doit voisiner un dossier
   `models/`** — soit en écrivant le HTML dans `dist-single/`, soit en copiant
   les modèles à côté de lui.
2. Vérifier l'ouverture réelle en `file://`, avec une capture. C'est la seule
   preuve qui vaille : la construction ne dit rien de ce protocole.
3. Trancher ensuite entre deux lectures du §8. Un HTML **plus** un dossier de
   modèles satisfait l'esprit — aucun serveur à lancer — mais pas la lettre. Un
   fichier littéralement unique demanderait d'intégrer les 5,1 Mo de modèles en
   base64, soit environ 6,8 Mo de plus. À soumettre à l'auteur du projet.

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
- Chapitre 5 Histoire : à rédiger d'après sources en ligne, avec ses sources
  citées, et à marquer « non validé par un instructeur » jusqu'à relecture
- Plaques en 3 840 px de large, si l'outil de l'auteur le permet
- Provenance des visuels de montagne et de piste
- Les inscriptions des panneaux de cockpit resteront muettes : les inventer
  serait fabriquer des données aéronautiques
