import type { CourseSection } from '@/content/types'

/**
 * ⚠️ FICHIER PRODUIT PAR `scripts/cours-extraire.py`. NE PAS ÉDITER À LA MAIN :
 * toute retouche serait écrasée à la prochaine extraction, et surtout elle
 * romprait la garantie qui fait la valeur de ce fichier — son texte est
 * exactement celui de la couche texte du PDF, au signe près.
 *
 * Source : assets/cours/bia/BIA-Cours4C-Aeromedecine-2024-06-15.pdf
 * 16 pages, 55097 signes.
 *
 * Pour corriger une coupe de paragraphe ou un titre mal reconnu, corrigez
 * les heuristiques du script et relancez-le, pour que la correction profite
 * aux sept autres cours.
 */
export const aeromedecineSections: CourseSection[] = [
  {
    "id": "du-bia",
    "number": "",
    "title": "Du bia",
    "pages": [
      1,
      1
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Depuis la naissance, nous apprenons à évoluer dans un univers à deux dimensions subissant constamment le poids de la pesanteur. Notre cerveau s’est habitué à cet environnement en y intégrant ses caractéristiques grâce à ses capteurs : oreille interne, voûte plantaire, œil, … L’évolution et l’adaptation de l’humain dans un milieu à 3 dimensions, procurée par le vol, constituent une découverte d’un nouvel environnement où la pesanteur varie avec les mouvements de l’avion, où la pression et la température diffèrent des ressentis habituels."
      },
      {
        "type": "text",
        "text": "Pour le cerveau notamment, il y a discordance entre les sensations acquises (depuis la naissance) et le vécu de la situation en vol. Cette discordance crée un conflit interne source de malaise que l’on appelle « le mal de l’air »."
      }
    ]
  },
  {
    "id": "rappels-des-elements-physiques-de-differentiatio",
    "number": "1",
    "title": "Rappels des éléments physiques de différentiation entre sol et espace",
    "pages": [
      1,
      1
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Avec l’augmentation d’altitude, la pression et la température diminuent"
      }
    ]
  },
  {
    "id": "les-effets-des-variations-de-pression-sur-l-orga",
    "number": "2",
    "title": "Les effets des variations de pression sur l’organisme",
    "pages": [
      1,
      4
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "2.1 - Anatomie de l’oreille"
      },
      {
        "type": "text",
        "text": "L’oreille se compose de trois parties l’oreille externe, l’oreille moyenne et l’oreille interne."
      },
      {
        "type": "text",
        "text": "L’oreille externe comporte le pavillon et le conduit auditif. L’oreille moyenne possède le tympan, les osselets et la trompe d’Eustache. Enfin, l’oreille interne contient la cochlée et les canaux semi- circulaires de l’équilibre."
      },
      {
        "type": "text",
        "text": "Le pavillon rassemble les sons et les dirige le long du conduit auditif jusqu’au tympan. Les sons, qui sont produits par des variations de pression de l’air, font vibrer le tympan."
      },
      {
        "type": "text",
        "text": "Le tympan ferme hermétiquement le conduit auditif externe. Il se présente comme une membrane qui vibre à la manière d’une peau de tambour. La vibration du tympan est transmise par les osselets chargés de transmettre les vibrations sonores. Les osselets sont situés dans la caisse de tympan qui est relié aux fosses nasales par l’intermédiaire de la trompe d’eustache."
      },
      {
        "type": "text",
        "text": "L’oreille assure non seulement l’ouïe, mais en plus elle constitue l’organe de l’équilibre, ce qui est fondamental pour le pilote. L’oreille interne comprend trois canaux semi-circulaires interconnectés et contenant un liquide."
      },
      {
        "type": "text",
        "text": "A chaque mouvement de la tête, les mouvements relatifs du fluide par rapport aux canaux sont transmis au cerveau par le nerf auditif."
      },
      {
        "type": "text",
        "text": "Egalisation des pressions pour une meilleure écoute Pour que le tympan puisse vibrer sans contrainte assurant ainsi une bonne sensibilité, l’air enfermé dans l’oreille moyenne doit se trouver à la même pression qu’à l’extérieur. La trompe d’Eustache qui est reliée à un orifice débouchant au fond de la gorge assure cette égalisation. Cependant, lors des montées et des descentes, une sensation de gonflement est en général ressentie, car la pression met un certain temps à se rétablir entre l’oreille externe et l’oreille moyenne."
      },
      {
        "type": "text",
        "text": "Cette trompe d’eustache relie donc la cavité du tympan avec l’extérieur par l’intermédiaire du nez."
      },
      {
        "type": "text",
        "text": "Cette communication permet d’équilibrer en permanence les pressions entre l’intérieur et l’extérieur du tympan."
      },
      {
        "type": "text",
        "text": "Cette mise à l’air libre créée par cette trompe peut toutefois être altérée voir bouchée (rhume) et ne peut plus permettre une égalisation des pressions. Néanmoins, cette trompe a la particularité d’offrir une meilleure perméabilité dans le sens tympan fosses nasales."
      },
      {
        "type": "text",
        "text": "La pression reste constante à l’intérieur de la caisse de tympan alors qu’elle diminue à l’extérieur."
      },
      {
        "type": "text",
        "text": "Une surpression s’exerce donc sur le tympan par l’intérieur. Lors de la descente, la pression augmente dans la cabine mais pas dans la caisse du tympan, une surpression s’exerce alors sur ce tympan par l’extérieur qui ne cessera qu’à l’éclatement de ce tympan."
      },
      {
        "type": "text",
        "text": "Si la trompe est complètement bouchée (croquis de gauche), lors de la montée de l’avion,"
      },
      {
        "type": "text",
        "text": "En aviation légère peu de problème lors de la montée car les variations de pression sont lentes et la perméabilité de la trompe permet une lente mais possible égalisation des pressions (croquis de droite)."
      },
      {
        "type": "text",
        "text": "Par contre, lors de descentes rapides, l’équilibre se fait alors nettement plus difficilement et l’on ressent des malaises ou des douleurs qui s’estompent suite à une déglutition ou un bâillement."
      },
      {
        "type": "text",
        "text": "On comprend mieux à présent le danger de voler lorsque l’on est enrhumé car la trompe d’Eustache est le plus souvent bouchée, et le tympan peut en souffrir gravement."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.2 - L’otite barotraumatique"
      },
      {
        "type": "text",
        "text": "Les symptômes :"
      },
      {
        "type": "list",
        "items": [
          "La douleur : elle siège dans l’oreille et son intensité varie avec la différence de pression atteinte et"
        ]
      },
      {
        "type": "text",
        "text": "l’état d’ouverture de la trompe d’eustache. Cette douleur peut être insidieuse, simplement gênante, ou extrêmement intense et capable de provoquer une syncope."
      },
      {
        "type": "list",
        "items": [
          "La sensation d’oreille bouchée : elle correspond à un certain degré de surdité, conséquence de"
        ]
      },
      {
        "type": "text",
        "text": "l’épanchement de liquide et de sang derrière l’oreille."
      },
      {
        "type": "list",
        "items": [
          "Les bourdonnements : ils aggravent la surdité partielle.",
          "Un vertige ou sensation de vertige",
          "Un écoulement de sang à l’oreille : il reste exceptionnel et peut traduire la perforation du tympan."
        ]
      },
      {
        "type": "text",
        "text": "L’égalisation des pressions entraîne l’atténuation voir la disparition des douleurs."
      },
      {
        "type": "text",
        "text": "Conduite à tenir en cas d’otite :"
      },
      {
        "type": "list",
        "items": [
          "En vol : si les troubles apparaissent lors de la montée, pour le pilote ou le passager, il faut"
        ]
      },
      {
        "type": "text",
        "text": "redescendre et reporter le vol."
      },
      {
        "type": "list",
        "items": [
          "En descente : au début, il est possible de réaliser avec succès deux types de manœuvres",
          "Bâillements, mouvement de déglutition, ouverture de la mâchoire avec mouvement"
        ]
      },
      {
        "type": "text",
        "text": "de translation pour ouvrir la trompe d’eustache."
      },
      {
        "type": "list",
        "items": [
          "Manœuvre de Valsalva : qui consiste à souffler fortement par le nez"
        ]
      },
      {
        "type": "text",
        "text": "soigneusement bougé par deux doigts, la bouche étant fermée. L’air est ainsi projeté sous pression vers la caisse du tympan et permet dans certains cas d’égaliser les pressions."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.3 - La distension intestinale"
      },
      {
        "type": "text",
        "text": "Elle produit essentiellement des manifestations douloureuses calmées par l’évacuation des gaz en excès. Exceptionnelle jusqu’à 12000 ft, elle peut survenir plus bas lorsque le régime alimentaire est inadéquat ou bien lorsqu’un sujet est victime de gastro-entérite."
      },
      {
        "type": "text",
        "text": "Les aliments à éviter relèvent de différentes catégories"
      },
      {
        "type": "list",
        "items": [
          "haricots, pois secs, navets ;",
          "choux, choux fleurs, choux de Bruxelles ;",
          "céleri, concombres, son ;",
          "pommes crues ;",
          "boissons gazeuses."
        ]
      },
      {
        "type": "text",
        "text": "A très haute altitude, la distension intestinale refoule le diaphragme, gène la respiration et peut devenir invalidante."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.4 - L’aéroembolisme (maladie de décompression)"
      },
      {
        "type": "text",
        "text": "Sous l’effet de la pression barométrique au sol, le gaz azote se dissout dans le sang et les tissus sous forme de microbulles. Si la pression diminue d’au moins la moitié de sa valeur au sol (hauteur de 5500 m) en un temps très bref, les microbulles subissent une détente rapide et se transforment en vraies bulles capables de gêner la circulation sanguine et d’engendrer des douleurs."
      },
      {
        "type": "text",
        "text": "Cette maladie ne concerne pas le pilote d’aéro-club sauf s’il pratique conjointement la plongée sous-marine et le vol en altitude. Elle peut par contre atteindre le vélivole avide de performance ainsi que les pilotes d’avions pressurisés."
      },
      {
        "type": "text",
        "text": "Nota pour les pratiquants de la plongée sous-marine : Les risques d'aéroembolisme de remontée peuvent se cumuler avec l'expansion des gaz dus à l'altitude et provoquer des accidents extrêmement graves. Pour les éviter, il faut ménager une douzaine d'heures de délai entre une plongée et un vol. Ce délai doit même être porté à 24 heures si la plongée a nécessité des paliers."
      },
      {
        "type": "text",
        "text": "En pratique, la maladie d’aéroembolisme n’apparaît pas en dessous de 7000 m, quatre critères peuvent toutefois aggraver le risque :"
      },
      {
        "type": "list",
        "items": [
          "la vitesse de montée ;",
          "le temps passé en altitude ;",
          "la température ambiante ;",
          "l’état de saturation en azote dans l’organisme avant le départ."
        ]
      },
      {
        "type": "text",
        "text": "Les symptômes : a) Les douleurs articulaires : genoux épaules poignets b) Les manifestations cutanées : envie de se gratter, plaques d’urticaire c) Manifestations nerveuses : maux de tête, amputation du champ visuel"
      },
      {
        "type": "text",
        "text": "d) troubles respiratoires La prédisposition : a) Plongée sous-marine préalable b) L’âge : dès 40 ans, le risque augmente nettement c) L’obésité : l’azote dissout dans la graisse met beaucoup de temps à s’éliminer d) Le régime alimentaire : riche en sucre, il le diminue, riche en protéines : il l’aggrave."
      }
    ]
  },
  {
    "id": "pressurisation-des-cabines",
    "number": "",
    "title": "Pressurisation des cabines",
    "pages": [
      4,
      5
    ],
    "blocks": [
      {
        "type": "text",
        "text": "La pressurisation des cabines a permis d’éliminer en grande partie les risques d’hypoxie, de contre- indication médicale et d’aéroembolisme."
      },
      {
        "type": "text",
        "text": "Néanmoins, des accidents de dépressurisation de la cabine peuvent survenir avec des conséquences dramatiques."
      },
      {
        "type": "text",
        "text": "Le principe de pressurisation des cabines répond à un principe fort simple : un compresseur prélève de l’air à l’extérieur pour l’envoyer en cabine. La valeur de pression désirée est obtenue en jouant sur le débit de fuite par une ouverture réglable qui rejette l’air à l’extérieur."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.1 - La décompression explosive"
      },
      {
        "type": "text",
        "text": "En cas d’ouverture accidentel et donc augmentation brutal du débit de fuite, la pression interne chute très rapidement : ce phénomène s’appelle la décompression explosive."
      },
      {
        "type": "text",
        "text": "L’arbre pulmonaire supporte très mal cette décompression. En effet le volume d’air contenu dans les poumons est d’environ 5 litres, ce volume ne peut s’évacuer que part la trachée dont la section de passage n’est que de 2 cm²."
      },
      {
        "type": "text",
        "text": "Lorsque la pression s’effondre rapidement en cabine, l’air contenu dans les poumons se trouve alors en surpression, Il ne peut s’évacuer que par la trachée en un temps d’autant plus court que la décompression est violente. Les alvéoles pulmonaires risquent alors d’éclater en entraînant une détresse respiratoire suraiguë."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.2 - Gérer les différences de pression"
      },
      {
        "type": "text",
        "text": "Afin d’améliorer le confort et l’acceptabilité par le plus grand nombre, la pression intérieure des avions de ligne doit se rapprocher des pressions habituelles vécues au sol. Elle est donc supérieure à la pression barométrique environnante."
      },
      {
        "type": "text",
        "text": "En fonction du rétablissement d’altitude souhaité dans la cabine, cette différence de pression (dp) est plus ou moins importante."
      },
      {
        "type": "text",
        "text": "A niveau de vol égal :"
      },
      {
        "type": "list",
        "items": [
          "Sur un avion de transport, il est impossible de diminuer la dp ; car cela revient à augmenter l’altitude"
        ]
      },
      {
        "type": "text",
        "text": "cabine, or il faut tenir compte de l’hypoxie qui survient des 4500 ft, susceptible de gêner des passagers âgés ou malades."
      },
      {
        "type": "list",
        "items": [
          "Sur un avion de chasse en revanche, cette solution est adoptée car les pilotes sont"
        ]
      },
      {
        "type": "text",
        "text": "généralement en pleine santé et porteurs d’inhalateurs d’oxygène ;"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.3 - Diminuer le coefficient de fuite"
      },
      {
        "type": "text",
        "text": "On appelle le coefficient de fuite le rapport de la surface d’ouverture accidentelle au volume de la cabine : ce rapport ne doit pas dépasser une certaine limite afin d’éliminer tout risque de rupture pulmonaire."
      },
      {
        "type": "text",
        "text": "Pour ce faire, il faut :"
      },
      {
        "type": "list",
        "items": [
          "Diminuer le coefficient de fuite sur les avions de transport en réduisant la surface des portes de"
        ]
      },
      {
        "type": "text",
        "text": "hublots (zone de moindre résistance)."
      },
      {
        "type": "list",
        "items": [
          "Pallier cette diminution impossible sur un avion de chasse qui doit bénéficier d’une verrière"
        ]
      },
      {
        "type": "text",
        "text": "panoramique par des systèmes spécifiques"
      },
      {
        "type": "text",
        "text": "Conséquences d’une décompression explosive ? Dans la cabine :"
      },
      {
        "type": "list",
        "items": [
          "souffle pouvant projeter ou éjecter du matériel et des hommes ;",
          "production immédiate d’un intense brouillard, conséquence de la production de vapeur d’eau"
        ]
      },
      {
        "type": "text",
        "text": "sous l’effet de la détente ;"
      },
      {
        "type": "list",
        "items": [
          "apparition dans la cabine d’un froid glacé."
        ]
      },
      {
        "type": "text",
        "text": "Sur le corps humain :"
      },
      {
        "type": "list",
        "items": [
          "surpression pulmonaire ;",
          "aéroembolisme ;",
          "hypoxie."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.4 - Temps de conscience utile"
      },
      {
        "type": "text",
        "text": "Durée pendant laquelle un individu conserve ses facultés mentales. Il est d'environ 2 minutes à 25 000 ft en cas de décompression explosive. Il faut alors effectuer une descente rapide vers un niveau inférieur à 10 000 pieds"
      },
      {
        "type": "text",
        "text": "Cas des pilotes de planeur : ils volent souvent plusieurs heures à altitude élevée (entre 1 500 et 3 500 m) dans une atmosphère turbulente et sous une verrière surchauffée. L’hypoxie s’ajoute alors à la fatigue et à la déshydratation et leurs performances mentales s'en trouvent affectées."
      }
    ]
  },
  {
    "id": "les-effets-des-variations-d-oxygene-sur-l-organi",
    "number": "4",
    "title": "Les effets des variations d’oxygène sur l’organisme",
    "pages": [
      5,
      7
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "4.1 - L’Hypoxie d’altitude et les échanges gazeux"
      },
      {
        "type": "text",
        "text": "L’organisme puise son oxygène dans l’atmosphère, à la pression barométrique environnante. Sous l’effet de la montée en altitude, la pression diminue, la proportion de la composition de l’air restant constante, la pression partielle d’oxygène diminue donc d’autant. La quantité d’oxygène dans le sang diminue progressivement et donne lieu à des troubles dont l’aboutissement est la perte de connaissance."
      },
      {
        "type": "text",
        "text": "L’ensemble de ces manifestations est appelé hypoxie d’altitude."
      },
      {
        "type": "text",
        "text": "Le potentiel énergétique du corps humain dépend de l’apport en oxygène assuré par la respiration. Si cet apport diminue ou vient à manquer, l’organisme souffre aussitôt et notamment le cerveau (il utilise à lui seul 20% de cet oxygène) car il ne possède aucune réserve d’énergie."
      },
      {
        "type": "text",
        "text": "L’enrichissement du sang en oxygène se fait au niveau de l’interface sang - poumons. En même temps, le gaz carbonique est rejeté du sang vers les poumons, puis dans l’air ambiant."
      },
      {
        "type": "text",
        "text": "Lorsque la pression partielle de l’oxygène dans l’air ambiant diminue, la quantité d’oxygène échangée au niveau des poumons diminue et le sang s’appauvrit en oxygène."
      },
      {
        "type": "text",
        "text": "L’hypoxie est également dépendante de 3 facteurs :"
      },
      {
        "type": "list",
        "items": [
          "l'amplitude de la diminution de pression ;",
          "la vitesse de cette diminution : la montée en altitude devra dans la mesure du possible être"
        ]
      },
      {
        "type": "text",
        "text": "progressive afin de permettre aux systèmes compensateurs de bien jouer leur rôle ;"
      },
      {
        "type": "list",
        "items": [
          "l'état de santé des individus : la sensibilité de l'homme à l'hypoxie est augmentée par le manque de"
        ]
      },
      {
        "type": "text",
        "text": "sommeil, la fatigue, les abus de tabac ou d'alcool et une alimentation trop riche en graisse. A l'inverse, une alimentation riche en hydrates de carbone et en vitamine B1 et C augmente la tolérance à l'hypoxie."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.2 - Le transport de l’oxygène dans les cellules des tissus de l’organisme"
      },
      {
        "type": "text",
        "text": "Dans le sang, l’oxygène est fixé sur une grosse molécule : l’hémoglobine. Elle seule est capable de transporter l’oxygène vers les tissus. Il faut pour cela qu’elle contienne suffisamment d’oxygène ou dans un autre cas, qu’elle soit saturée en O2."
      },
      {
        "type": "text",
        "text": "Au sol, le taux de saturation en O2 de l’hémoglobine est d’environ 95%. Ce taux diminue avec la diminution de la pression en O2 dans les poumons, autrement dit avec une prise d’altitude. La saturation varie suivant la courbe ci-contre :"
      },
      {
        "type": "text",
        "text": "En cas d’asphyxie, l’organisme cherche par tous les moyens à augmenter les échanges pulmonaires."
      },
      {
        "type": "text",
        "text": "Les mouvements respiratoires deviennent plus amples et plus rapides, l’angoisse fait que le sujet fait participer tous ses muscles respiratoires. Ce phénomène est dû à une augmentation anormale du taux de gaz carbonique dans le sang."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.3 - Effet de l’altitude sur la pression de l’oxygène et le taux de CO2"
      },
      {
        "type": "text",
        "text": "La concentration en oxygène reste constante dans l’atmosphère quelle que soit l’altitude. La concentration en CO2 est quasiment nulle sauf à proximité immédiate du sol."
      },
      {
        "type": "text",
        "text": "En altitude, la pression barométrique diminue, la pression partielle de l’oxygène diminue également."
      },
      {
        "type": "text",
        "text": "En conséquence, la saturation en O2 de l’hémoglobine diminue entraînant une augmentation du rythme cardiaque et respiratoire. Le taux de gaz carbonique reste inchangé et c’est pourquoi il n’y a aucune réponse alarmant le pilote."
      },
      {
        "type": "text",
        "text": "L’hypoxie d’altitude est particulièrement sournoise car elle s’installe à l’insu du pilote."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.4 - Manifestation de l’hypoxie d’altitude"
      },
      {
        "type": "text",
        "text": "Les effets de ‘hypoxie sont directement liés au niveau de vol atteint par le pilote. Trois seuils permettent de classer par ordre croissant la nature des symptômes apparaissant."
      },
      {
        "type": "text",
        "text": "De 0 à 4500 ft : zone d’indifférence La saturation en oxygène de l’hémoglobine reste proche de la normale, il ne se produit aucun trouble."
      },
      {
        "type": "text",
        "text": "A partir de 4500 ft : seuil de réaction Le pilote entre dans la zone de compensation complète, l’augmentation du rythme cardiaque et respiratoire suffit à compenser la baisse de la saturation en oxygène de l’hémoglobine."
      },
      {
        "type": "text",
        "text": "A partir de 11500 ft : seuil des troubles, zone de compensation incomplète Le pilote s’expose aux symptômes suivants :"
      },
      {
        "type": "list",
        "items": [
          "Sensation de malaise indéfini",
          "Picotement des extrémités (bout des"
        ]
      },
      {
        "type": "text",
        "text": "doigts)"
      },
      {
        "type": "list",
        "items": [
          "Fatigue lassitude avec parfois une"
        ]
      },
      {
        "type": "text",
        "text": "grande inspiration qui surprend."
      },
      {
        "type": "list",
        "items": [
          "Maux de tête",
          "Trouble du jugement, euphorie,"
        ]
      },
      {
        "type": "text",
        "text": "indifférence, dépression"
      },
      {
        "type": "list",
        "items": [
          "La respiration et le rythme cardiaque"
        ]
      },
      {
        "type": "text",
        "text": "s’accélèrent."
      },
      {
        "type": "text",
        "text": "A partir de 13500 ft : aggravation des troubles ressentis"
      },
      {
        "type": "list",
        "items": [
          "obscurcissement de la vision",
          "rétrécissement du champ visuel",
          "assourdissement des bruits",
          "couleur bleue des lèvres et des"
        ]
      },
      {
        "type": "text",
        "text": "ongles"
      },
      {
        "type": "text",
        "text": "A partir de 20000 ft : seuil critique La perte de connaissance est imminente, les mouvements respiratoires deviennent irréguliers, le rythme cardiaque ralentit. La phase ultime est marquée par un arrêt respiratoire qui entraîne la mort …"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.5 - Protection contre l’hypoxie"
      },
      {
        "type": "text",
        "text": "La seule façon de se protéger des effets de l’hypoxie consiste à augmenter la pression partielle d’oxygène inhalé dans les poumons."
      },
      {
        "type": "text",
        "text": "Trois possibilités :"
      },
      {
        "type": "list",
        "items": [
          "augmenter partiellement la pression dans la cabine ou dans un vêtement adapté"
        ]
      },
      {
        "type": "text",
        "text": "(stratosphérique) ;"
      },
      {
        "type": "list",
        "items": [
          "augmenter artificiellement la concentration en oxygène dans l’air inhalé en faisant respirer au pilote"
        ]
      },
      {
        "type": "text",
        "text": "un mélange enrichi en oxygène (au moyen d’un inhalateur) ;"
      },
      {
        "type": "list",
        "items": [
          "combiner les deux méthodes lorsque l’on veut garder une faible pressurisation cabine et voler"
        ]
      },
      {
        "type": "text",
        "text": "très haut (avion de chasse). Il faut également savoir que :"
      },
      {
        "type": "list",
        "items": [
          "l'organisme humain comporte des systèmes compensateurs capables de retarder l'apparition des"
        ]
      },
      {
        "type": "text",
        "text": "premiers troubles"
      },
      {
        "type": "list",
        "items": [
          "tous les pilotes ne réagissent pas de la même façon à l'hypoxie",
          "c'est le système nerveux qui est le plus touché du fait de sa faible résistance au manque d'oxygène",
          "les symptômes apparaissent le plus souvent de façon insidieuse"
        ]
      },
      {
        "type": "text",
        "text": "Le comportement induit évoque une intoxication alcoolique : euphorie, altération du jugement, troubles de la mémoire. On constate également une augmentation des fréquences cardiaques et respiratoires."
      }
    ]
  },
  {
    "id": "l-hyperventilation",
    "number": "5",
    "title": "L'hyperventilation",
    "pages": [
      7,
      7
    ],
    "blocks": [
      {
        "type": "text",
        "text": "L’hyperventilation est souvent le résultat de l’anxiété, du stress ou de l’excitation qui déclenche une accélération du rythme de la respiration. Ceci provoque une augmentation d’un des déchets de la respiration, le dioxyde de carbone qui est évacué par le sang. Or la régulation de la respiration est assurée en réagissant au taux de dioxyde de carbone contenu dans le sang, ce qui dérègle dans ce cas un fonctionnement normal de la respiration."
      },
      {
        "type": "text",
        "text": "Lors d’une activité physique, les cellules consomment davantage d’oxygène et de ce fait le taux de dioxyde de carbone augmente. Le cerveau provoque alors une accélération du rythme respiratoire, Toutefois, si la respiration s’accélère sans qu’il y ait effort physique, l’équilibre est rompu et le corps cherche à éliminer plus de dioxyde de carbone que le métabolisme n’en produit, ce qui conduit à des changements chimiques et à l’hyperventilation."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5.1 - Symptômes"
      },
      {
        "type": "text",
        "text": "Les symptômes associés à l’hyperventilation sont les suivants :"
      },
      {
        "type": "list",
        "items": [
          "vertiges",
          "sensation de chaleur anormale",
          "démangeaisons des extrémités",
          "accélération du rythme cardiaque",
          "nausées;",
          "vision voilée."
        ]
      },
      {
        "type": "text",
        "text": "Dans les cas extrêmes, la perte de conscience peut intervenir, mais la respiration redevient alors normale."
      },
      {
        "type": "text",
        "text": "On remarque que ces symptômes sont semblables à ceux de l’hypoxie. Si des symptômes surviennent et qu’il est difficile d’identifier avec certitude l’hypoxie ou l’hyperventilation, voici ce qu’il faut faire:"
      },
      {
        "type": "list",
        "items": [
          "vérifier l’alimentation d’oxygène",
          "régler le régulateur d’oxygène sur 100% et le surveiller;"
        ]
      },
      {
        "type": "text",
        "text": "si les symptômes disparaissent au bout de trois ou quatre respirations profondes, l’hypoxie commençait à s’installer (la récupération est très rapide lors de l’inhalation d’oxygène), si les symptômes persistent, se forcer à diminuer le rythme respiratoire jusqu’à disparition totale des symptômes. On peut s’aider en respirant dans un sac ou en parlant, ce qui réduit le rythme respiratoire."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5.2 - Prévention"
      },
      {
        "type": "text",
        "text": "Un minimum de connaissance du phénomène suffit pour lutter contre l’hyperventilation, en se souvenant qu’il faut ralentir le rythme respiratoire et ne pas s’affoler."
      }
    ]
  },
  {
    "id": "le-mal-de-l-air-et-des-transports",
    "number": "6",
    "title": "Le mal de l'air et des transports",
    "pages": [
      8,
      8
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Souvent créé par des informations différentes entre la vue et l'oreille interne (organe d’équilibration)."
      },
      {
        "type": "text",
        "text": "Il se traduit par des nausées, lourdeur, transpiration, pâleur. Il est atténué et (ou) disparaît avec l'entraînement."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.1 - Les différentes informations utiles à l’équilibre"
      },
      {
        "type": "list",
        "items": [
          "L’oreille interne : elle constitue le principal organe de l’équilibre. Elle est sensible aux accélérations linaires"
        ]
      },
      {
        "type": "text",
        "text": "et angulaires, donnant ainsi des informations sur toute mise en mouvement de la tête. Les capteurs de l’oreille interne ne sont pas sensibles à une vitesse de déplacement uniforme."
      },
      {
        "type": "text",
        "text": "La référence verticale est fournie par l'appareil vestibulaire situé dans l'oreille. Celui-ci comprend des détecteurs d'accélération qui ne de perçoivent que les accélérations qui dépassent un certain seuil."
      },
      {
        "type": "text",
        "text": "Trois canaux semi-circulaires détectent les accélérations angulaires sur les axes de tangage, roulis et lacet par rapport à la tête. Deux autres organes détectent les accélérations linéaires : l’utricule sur l’axe avant/arrière de la tête, et le saccule sur l’axe haut/bas."
      },
      {
        "type": "text",
        "text": "Comme tous les capteurs à inertie, le système ne perçoit pas les mouvements, mais les accélérations (mises en mouvement ou arrêts) et seulement celle qui dépasse un certain seuil. Ceci est à l’origine de nombreuses illusions sensorielles."
      },
      {
        "type": "list",
        "items": [
          "Les yeux : Lorsque le pilote est entouré de références visuelles (horizon), sa vision est capable de recaler"
        ]
      },
      {
        "type": "text",
        "text": "sa position dans l’espace. En cas de vol IFR, cette possibilité de recalage naturel disparaît mais doit prendre appui sur une autre référence : l’horizon artificiel."
      },
      {
        "type": "list",
        "items": [
          "Les récepteurs proprioceptifs : muscles du cou et sole plantaire sont dotés de récepteurs très efficaces. Ils"
        ]
      },
      {
        "type": "text",
        "text": "sont sensibles à la pression et à l’étirement, ils contribuent à l’analyse du mouvement."
      },
      {
        "type": "text",
        "text": "Dans certaines phases de vols, la situation génère un conflit entre tous ces récepteurs et les informations qui parviennent au cerveau ne sont plus concordantes. Cette succession de conflits induit la crise neurovégétative."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.2 - Les symptômes"
      },
      {
        "type": "text",
        "text": "Le mal de l’air évolue dans le temps en trois phases successives : 1) Assoupissement, malaise indéfini, diminution de la vigilance, angoisse, immobilité du regard."
      },
      {
        "type": "text",
        "text": "2) Sueur, pâleur extrême, augmentation de la salivation, le rythme cardiaque ralentit et la tension baisse."
      },
      {
        "type": "text",
        "text": "3) Nausées de plus en plus violentes aboutissant au vomissement libérateur (pour un temps limité à quelques quinze minutes)."
      },
      {
        "type": "text",
        "text": "En effet, le mal de l’air ne s’arrêtera pas tant que sa victime restera dans l’avion. Les vomissements se succèdent et conduisent à un certain degré d’épuisement."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.3 - Les facteurs aggravants"
      },
      {
        "type": "list",
        "items": [
          "Les enfants et les femmes y sont plus sensibles ;",
          "Les mauvaises odeurs, en particulier celles des vomissements, kérosène ;",
          "La chaleur confinée ;",
          "L’alimentation : café au lait, boissons gazeuses, copieuse et alcoolisée."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.4 - Le mal de l’Espace"
      },
      {
        "type": "text",
        "text": "L’expérience de l’homme se trouvant placé en apesanteur est révolutionnaire pour l’ensemble de ses capteurs sensoriels et bien sûr pour le cerveau. Il en résulte un temps d’adaptation d’environ trois jours, au cours desquels l’individu souffre des mêmes symptômes que le classique mal de mer."
      },
      {
        "type": "text",
        "text": "A signaler que parmi les spationautes en entraînement au sol, il est pratiquement impossible de prévoir si l’un de ceux-ci sera victime du mal de l’espace."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.5 - Le mal des simulateurs"
      },
      {
        "type": "text",
        "text": "Avec le développement des simulateurs de vols et de combats aériens, les pilotes ont découvert de nouvelles souffrances liées à une confrontation nouvelle entre informations visuelles et celles données par l’oreille interne."
      },
      {
        "type": "text",
        "text": "Particularité : Les pilotes débutants sont moins sensibles que les pilotes chevronnés car ils n’ont pas acquis les sensations et réactions habituelles relatives à la conduite des avions."
      },
      {
        "type": "text",
        "text": "Le conflit d’intégration se fait en sens inverse, le pilote voit défiler des images sans ressentir les sensations fournies par l’oreille interne. Ce conflit est à l’origine de maux de tête, nausées, vertiges et tension oculaire."
      },
      {
        "type": "text",
        "text": "En cas de séance d’entraînement relativement longue au simulateur, il est recommandé de ne pas effectuer de vol réel aussitôt afin de déshabituer l’organisme aux sensations irréelles des cabines de simulation. Des sensations vertigineuses pourraient effectivement apparaître."
      }
    ]
  },
  {
    "id": "les-effets-des-accelerations-sur-l-organisme",
    "number": "7",
    "title": "Les effets des accélérations sur l’organisme",
    "pages": [
      9,
      10
    ],
    "blocks": [
      {
        "type": "text",
        "text": "On appelle facteur de charge la force qui s’exerce sur le pilote et sur l’avion lorsqu’ils sont soumis à une accélération. L’avion a été construit en fonction de certaines normes garantissant sa solidité et donc la sécurité de ses passagers. Au-delà de ces limites d’emploi, la cellule peut se rompre."
      },
      {
        "type": "text",
        "text": "Pour le pilote, ces accélérations modifient également les paramètres de sa circulation sanguine et peuvent l’amener, s’il n’y prend garde, à différentes altérations de ses capacités et même jusqu’à la perte de connaissance."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.1 - Les différentes accélérations"
      },
      {
        "type": "text",
        "text": "On peut distinguer :"
      },
      {
        "type": "list",
        "items": [
          "Les accélérations linéaires (m/s²) où il n’y a que variation de la vitesse, la direction du"
        ]
      },
      {
        "type": "text",
        "text": "déplacement reste constante (cas de l’atterrissage et du décollage) ;"
      },
      {
        "type": "list",
        "items": [
          "Les accélérations radiales où la vitesse reste constante mais où la direction varie. Elles sont"
        ]
      },
      {
        "type": "text",
        "text": "rencontrées dans les virages et les ressources ;"
      },
      {
        "type": "list",
        "items": [
          "Les accélérations angulaires où la direction et"
        ]
      },
      {
        "type": "text",
        "text": "la vitesse sont variables (cas de la vrille)."
      },
      {
        "type": "text",
        "text": "On peut également classer les accélérations en fonction de leurs effets sur le corps humain :"
      },
      {
        "type": "list",
        "items": [
          "Les accélérations longitudinales + ou – Gz,"
        ]
      },
      {
        "type": "text",
        "text": "appliquées le long de l’axe tête – pieds ;"
      },
      {
        "type": "list",
        "items": [
          "Les accélérations transversales + ou – Gx,"
        ]
      },
      {
        "type": "text",
        "text": "appliquées d’avant en arrière ;"
      },
      {
        "type": "list",
        "items": [
          "Les accélérations latérales, + ou – Gy,"
        ]
      },
      {
        "type": "text",
        "text": "appliquées d’une épaule à l’autre."
      },
      {
        "type": "text",
        "text": "Le poids du corps correspond à une accélération de 1 G, dans l’espace. En apesanteur, un corps subit une accélération nulle de 0 G."
      },
      {
        "type": "text",
        "text": "En vol rectiligne à vitesse constante, le pilote ne ressent rien. Lors d’un virage, il faut, grâce aux gouvernes, exercer une force centripète sur l’avion qui va modifier la direction du vecteur-vitesse en engendrant une accélération centripète."
      },
      {
        "type": "text",
        "text": "L’inertie entraîne la création d’une force égale et de sens opposé appelée centrifuge, c’est elle que nous ressentons en vol."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.2 - Notions d’anatomie et de physiologie"
      },
      {
        "type": "text",
        "text": "L’alimentation sanguine du corps humain comporte d’une part les artères, ces dernières sont entourées de fibres musculaires et sont capables de contenir les à-coups tensionnels (contraction cardiaque) sans se déformer."
      },
      {
        "type": "text",
        "text": "Il comporte d’autre part un réseau veineux qui présente une motricité quasi-nulle et qui peut se déformer dans certaines conditions."
      },
      {
        "type": "text",
        "text": "Pour alimenter correctement les vaisseaux (muscles), une certaine pression doit régner dans les artères."
      },
      {
        "type": "text",
        "text": "Un réseau de capteurs de pression surveille cette pression et régule le rythme cardiaque et la contraction des artères."
      },
      {
        "type": "text",
        "text": "Lorsque l’on passe de la position allongée à la position debout, la pression veineuse augmente brutalement dans les membres inférieurs en déformant les veines, le sang veineux ainsi stocké dans les membres inférieurs manque pour remplir correctement le cœur. La pression artérielle diminue légèrement au niveau du cerveau à cause du gain de hauteur par rapport au cœur. Le cœur doit donc immédiatement s’adapter pour renforcer la pression artérielle et le retour veineux."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.3 - Effets des accélérations positives"
      },
      {
        "type": "text",
        "text": "Lorsque le pilote encaisse une accélération + G, les phénomènes physiologiques sont simplement amplifiés. La pression artérielle dans le cerveau diminue progressivement pour s’annuler vers 5 G."
      },
      {
        "type": "text",
        "text": "La pression veineuse augmente considérablement au niveau des jambes en empêchant le cœur de se remplir."
      },
      {
        "type": "list",
        "items": [
          "à 2 G : sensation de peser sur son siège",
          "à 3 G : douleur intense du corps",
          "à 4 G : apparition du voile gris traduisant une diminution de la luminosité et du champ visuel",
          "à 5 G : C’est le voile noir, le champ visuel s’est rétréci peu à peu, le pilote ne voit plus rien mais il entend"
        ]
      },
      {
        "type": "text",
        "text": "encore bien ;"
      },
      {
        "type": "list",
        "items": [
          "à 6 G : Survient la perte de connaissance faisant suite au voile noir, ce dernier est le signal d’alarme qui"
        ]
      },
      {
        "type": "text",
        "text": "doit inciter le pilote à rendre la main."
      },
      {
        "type": "text",
        "text": "Conséquences sur l’organisme :"
      },
      {
        "type": "list",
        "items": [
          "Déplacement vers le bas des tissus mous : joues, paupières",
          "Diminution du débit cardiaque malgré l’accélération du rythme cardiaque.",
          "Difficulté à bouger ses membres.",
          "Compression des vertèbres et de leurs disques.",
          "Les fonctions mentales sont altérées tant que dure l’accélération"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.4 - Tolérances aux accélérations"
      },
      {
        "type": "text",
        "text": "Chaque individu supporte différemment les facteurs de charge. Toutefois, l’entraînement améliore la capacité des individus à accepter et s’adapter aux facteurs de charge."
      },
      {
        "type": "text",
        "text": "Certains pilotes de voltige à force d’entraînement peuvent « encaisser » des accélérations de +- 8 G."
      },
      {
        "type": "text",
        "text": "Certains facteurs peuvent toutefois engendrer une moindre résistance aux Gz :"
      },
      {
        "type": "list",
        "items": [
          "sujets longilignes (long cou)",
          "hypotension artérielle",
          "hypoglycémie",
          "varices",
          "repas copieux."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.5 - Moyens de protection"
      },
      {
        "type": "text",
        "text": "Manœuvres exécutables par le pilote :"
      },
      {
        "type": "list",
        "items": [
          "Entrer la tête dans les épaules afin de diminuer la distance cœur-cerveau ;",
          "Contracter les muscles du tronc et des membres pour créer une contre-pression sur les veines",
          "Forcer l’expiration ;",
          "Prendre des inspirations rapides et superficielles toutes les 3 à 4 secondes (ces manœuvres ont pour but"
        ]
      },
      {
        "type": "text",
        "text": "de maintenir une pression thoracique élevée pour limiter le retour de sang contenu dans le cerveau)."
      },
      {
        "type": "text",
        "text": "Inclinaison du siège : Intéressante sur les avions de chasse, elle n’est par contre guère possible sur les avions de voltige qui nécessitent l’emploi d’un dossier à angle droit pour une question de repères."
      },
      {
        "type": "text",
        "text": "L’inclinaison du siège permet de diminuer la distance séparant le cerveau du cœur et de mieux supporter les accélérations. A l’extrême pour un pilote couché, cette distance est nulle et les accélérations G se transforment en GX qui sont mieux supportées mais l’éjection de l’avion devient impossible et le pilotage peu pratique. En général, on trouve un compromis avec une inclinaison d’environ 30°."
      },
      {
        "type": "text",
        "text": "Combinaison anti-g Elle se présente sous la forme d’un sur-pantalon équipé de 5 vessies gonflables que l’on retrouve autour des mollets, des cuisses et de l’abdomen. Le système de gonflage est automatique et les différentes vessies se gonflent proportionnellement aux G ressentis."
      },
      {
        "type": "text",
        "text": "Il est à noter qu’un développement musculaire satisfaisant constitue une véritable combinaison anti-G."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.6 - Effets des accélérations négatives"
      },
      {
        "type": "text",
        "text": "Lorsqu’on met la tête vers le bas, la pression artérielle augmente vers la tête et diminue dans les pieds, il en va de même pour la pression veineuse."
      },
      {
        "type": "text",
        "text": "Le cerveau dispose d’une protection partielle contre ces surpressions : il s’agit du liquide céphalo-rachidien qui baigne le cerveau et exerce une contre pression sur les vaisseaux cérébraux. Les capteurs de pression au niveau du cou et du crâne influent sur une diminution du rythme cardiaque pour limiter la pression."
      },
      {
        "type": "text",
        "text": "Le passage alors à une forte accélération peut provoquer des défaillances cardiaques."
      },
      {
        "type": "list",
        "items": [
          "à – 1G :"
        ]
      },
      {
        "type": "text",
        "text": "Sensation du vol dos"
      },
      {
        "type": "list",
        "items": [
          "à – 2G :"
        ]
      },
      {
        "type": "text",
        "text": "Impression de tension dans la tête, la respiration devient difficile"
      },
      {
        "type": "list",
        "items": [
          "à – 3G :"
        ]
      },
      {
        "type": "text",
        "text": "Le crâne devient douloureux, le pilote ressent l’impression désagréable que les yeux vont sortir de leur orbite. Le voile rouge souvent décrit provient simplement de la paupière inférieure qui vient sous l’effet de l’accélération négative, recouvrir le globe oculaire. On peut également rencontrer de véritables lésions aux niveaux des vaisseaux qui touchent la rétine."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.7 - Tolérance"
      },
      {
        "type": "text",
        "text": "Les accélérations négatives sont mal tolérées par le corps humain surtout lorsqu’elles se prolongent."
      },
      {
        "type": "text",
        "text": "Les pilotes d’aéro-club ne les subissent pas, les pilotes de chasses les évitent et les pilotes de voltige semblent les accepter mais elles sont de courte durée et la capacité à endurer ces contraintes tient aussi dans la motivation de ces pilotes."
      },
      {
        "type": "list",
        "items": [
          "-"
        ]
      }
    ]
  },
  {
    "id": "la-vision",
    "number": "8",
    "title": "La vision",
    "pages": [
      11,
      15
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Des cinq sens, c’est bien la vision qui est la plus sollicitée (80%), mais celle-ci connaît aussi des limites et des altérations qui peuvent amener à une mauvaise interprétation de la réalité et donc à des actions inadaptées et dangereuses."
      },
      {
        "type": "text",
        "text": "En vol, la vision est essentielle pour éviter les obstacles, juger des distances, interpréter les informations des signaux et des instruments, évaluer la hauteur. Il semble donc évident qu’une acuité visuelle quasi-parfaite est indispensable pour assurer une bonne sécurité."
      },
      {
        "type": "text",
        "text": "Néanmoins l’âge avançant, des défauts inévitables surviennent, dont beaucoup peuvent être corrigés par le port de lunettes."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.1 - Description de l’œil"
      },
      {
        "type": "text",
        "text": "La partie avant de l’œil s’appelle la cornée. C’est un tissu transparent protégeant le globe oculaire. L’iris est la partie colorée de l’œil. Au centre de l’iris se trouve la pupille qui permet à la lumière de passer dans l’œil. A l’arrière de l’iris et de la pupille se trouve le cristallin qui se déforme sous l’action de muscles situés à la périphérie. La déformation du cristallin permet de faire la mise au point, c’est à dire la formation d’une image nette quelle que soit la distance de l’objet, sur la rétine."
      },
      {
        "type": "text",
        "text": "La rétine contient plusieurs millions de cellules photosensibles de deux sortes :"
      },
      {
        "type": "list",
        "items": [
          "Les cônes, essentiellement dans la partie centrale de la rétine (la fovéa),"
        ]
      },
      {
        "type": "text",
        "text": "qui sont stimulés par les fortes intensités lumineuses et sont sensibles aux couleurs. C’est en vision centrale que les détails les plus fins seront perçus."
      },
      {
        "type": "list",
        "items": [
          "Les bâtonnets, beaucoup plus nombreux et essentiellement répartis en"
        ]
      },
      {
        "type": "text",
        "text": "périphérie, qui sont sensibles aux faibles intensités lumineuses, aux formes et aux mouvements."
      },
      {
        "type": "text",
        "text": "Alors que la vision périphérique ne permet que la détection d’objets fortement contrastés et en mouvement, la vision centrale assure en plus l’identification."
      },
      {
        "type": "text",
        "text": "L’œil compte environ 125 millions de cellules photosensibles (120 millions de bâtonnets, 5 millions de cônes). Les informations en provenance de ces cellules sont acheminées vers le cerveau via le nerf optique."
      },
      {
        "type": "text",
        "text": "Ce nerf optique est constitué d’environ un million de fibres nerveuses. Il y a donc un travail de codage de l’information qui s’effectue avant l’envoi vers le cerveau. Le nerf optique est relié à la rétine. A l’endroit même de la liaison, il n’y a pas de cellule photosensible. Cette zone est appelée la tache aveugle. Elle est centrée, selon les individus, entre 10 et 16° à gauche de l’axe optique pour l’œil gauche et couvre un secteur angulaire de 3° environ. L’œil droit possède par symétrie la même propriété. Dans chacune de ces zones aucune détection n’est possible en vision monoculaire. Pour compenser l’absence de détection au niveau de la tache aveugle d’un œil, le cerveau utilise des informations recueillies par l’autre œil."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.2 - Mouvements de l’œil :"
      },
      {
        "type": "text",
        "text": "L’œil se déplace de deux façons différentes :"
      },
      {
        "type": "list",
        "items": [
          "La poursuite : l’œil suit une cible et se déplace de façon continue avec cette cible.",
          "La saccade : l’œil effectue des mouvements à 200°/s environ et le cerveau inhibe l’analyse visuelle"
        ]
      },
      {
        "type": "text",
        "text": "pendant ce temps. La mise au point s’effectue après l’arrêt du mouvement. Lorsque l’œil recherche une cible éloignée, il utilise la vision centrale. A grande distance les espaces laissés sans détection, situés entre deux saccades, sont très importants. Lorsque la cible est plus proche elle pourra être détectée en vision périphérique."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.3 - La myopie spatiale"
      },
      {
        "type": "text",
        "text": "Lorsque l’œil ne reçoit aucun stimulus, ce qui est le cas en air clair par exemple, il effectue une mise au point à sa position de repos qui se situe entre 1 et 2 mètres, entravant ainsi la détection de cibles potentielles éloignées. Ce phénomène s’appelle la myopie spatiale."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.4 - Le contraste et l’acuité visuelle"
      },
      {
        "type": "text",
        "text": "Le contraste perçu entre un objet et le fond sur lequel il apparaît est lié à la différence entre la luminance de l’objet (ou la quantité de lumière émise par unité de surface de l’objet) et la luminance du fond."
      },
      {
        "type": "text",
        "text": "L’acuité visuelle, qui détermine la qualité d’une image transmise au cerveau par l’œil peut être assimilée au pouvoir de séparation d’un système optique. L’acuité visuelle vaut 10/10 si l’œil peut séparer deux points vus sous un angle d’une minute d’arc, et 1/10 si l’œil ne distingue ce détail que sous un angle de 10 minutes."
      },
      {
        "type": "text",
        "text": "L’acuité visuelle diminue lorsque l’on s’éloigne du centre du champ visuel. Elle est une fonction croissante du contraste. Par exemple un planeur blanc dans un ciel laiteux sera difficile à distinguer."
      },
      {
        "type": "text",
        "text": "Cônes actifs Bâtonnets actifs"
      },
      {
        "type": "text",
        "text": "La tache aveugle, le mouvement saccadé de l’œil, la myopie spatiale et la dégradation des performances en vision périphérique constituent des obstacles à la détection de cibles ou de conflits potentiels. De plus, bien que l’acuité visuelle des pilotes soit contrôlée régulièrement, les capacités de l’œil se dégradent avec l’âge, l’environnement et la fatigue."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.5 - Etapes psycho-visuelles"
      },
      {
        "type": "text",
        "text": "Les mécanismes centraux de la perception et de la mémorisation sont sollicités pour la reconnaissance de forme et de trajectoire d’un aéronef."
      },
      {
        "type": "text",
        "text": "La durée de traitement de l’information visuelle est de l’ordre de la demi-seconde pour la transmission du message visuel aux structures centrales et de deux secondes et demie pour que le cerveau effectue les opérations de reconnaissance. Il en résulte une latence de l’ordre de trois secondes pour qu’un pilote puisse identifier un objet comme étant un aéronef à partir du moment où celui-ci devient perceptible."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.6 - Collisions et vision"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.6.1 - Rapprochement à gisement constant"
      },
      {
        "type": "text",
        "text": "Les pilotes de deux appareils volant à vitesse et altitude constantes et ayant des trajectoires convergentes verront chacun l’autre appareil à gisement constant. En d’autres termes, le trafic convergent sera immobile pour le pilote. Cette immobilité apparente est pénalisante car la détection se fait très souvent en vision périphérique et, on l’a vu, la vision périphérique est surtout stimulée par le mouvement."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.6.2 - Les angles morts"
      },
      {
        "type": "text",
        "text": "La vision binoculaire transmet au cerveau deux images en provenance des deux yeux. Pour un objet placé à l’infini les deux images sont semblables. Pour un objet rapproché (de l’ordre du mètre) il est observé par les deux yeux sous des angles différents. Ce phénomène permet d’appréhender le relief."
      },
      {
        "type": "text",
        "text": "Un angle mort correspond à une zone de l’environnement masquée par un objet et donc non vue. Ainsi pour chacun des deux yeux qui accommodent à l’infini, un objet situé à proximité peut constituer un angle mort différent. La superposition de ces deux zone donne une zone masquée, qui peut selon les cas aller à l’infini."
      },
      {
        "type": "text",
        "text": "Dans un avion un montant de pare-brise peut constituer un angle mort particulièrement gênant."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.6.3 - Grossissement de la cible lors du rapprochement"
      },
      {
        "type": "text",
        "text": "Lorsque deux appareils sont en rapprochement, leurs pilotes verront évidemment l’autre appareil grossir. Cependant ce grossissement ne suit pas une loi de variation linéaire. Le schéma ci-contre illustre ce phénomène. Il représente la vision qu’a le pilote d’un avion volant à 100 kt d’un autre avion en rapprochement volant à différentes vitesses (de 150 à 420 Kt) et de dix mètres d’envergure environ."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.6.4 - Le temps de réaction"
      },
      {
        "type": "text",
        "text": "Le temps de réaction ne peut être considéré comme constant. Il dépend du pilote et de l’appareil."
      },
      {
        "type": "text",
        "text": "Il comprend la reconnaissance de la cible (aéronef), l’analyse d’une collision potentielle, la décision de l’évitement, l’action sur les commandes et le temps de manœuvre de l’appareil. Quelques secondes sont nécessaires pour réaliser cette séquence."
      },
      {
        "type": "text",
        "text": "De plus l’effet de surprise peut retarder ou bloquer les réactions du pilote."
      },
      {
        "type": "text",
        "text": "Outre les limites inhérentes au système visuel, les trajectoires conflictuelles présentent des caractéristiques très particulières :"
      },
      {
        "type": "list",
        "items": [
          "Le rapprochement à gisement constant, caractérisant les trajectoires conflictuelles, et le faible"
        ]
      },
      {
        "type": "text",
        "text": "contraste entre un appareil et son environnement peuvent prendre en défaut la vision périphérique surtout sensible au mouvement d’objets fortement contrastés."
      },
      {
        "type": "list",
        "items": [
          "L’ergonomie du poste de pilotage et les particularités de l’œil humain peuvent masquer certaines"
        ]
      },
      {
        "type": "text",
        "text": "parties d’espace."
      },
      {
        "type": "list",
        "items": [
          "La petite taille de l’autre appareil jusqu’à très peu de temps avant la collision rend difficile la"
        ]
      },
      {
        "type": "text",
        "text": "détection. De plus son grossissement soudain crée un effet de surprise important."
      },
      {
        "type": "list",
        "items": [
          "Enfin la manœuvre d’évitement n’est pas instantanée."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.7 - Illusions d’optique"
      },
      {
        "type": "text",
        "text": "L’œil est très sûr et précis pour ce qui est de l’orientation mais encore faut-il que des références appropriées lui soient fournies. Le problème en vol est que le pilote manque de références stables. L’équilibre est aisément maintenu si le sol et l’horizon distant peuvent être vus clairement car dans ces conditions l’œil peut vérifier les informations données au cerveau en utilisant les autre sens."
      },
      {
        "type": "text",
        "text": "Les problèmes surgissent si la vue du sol ou de l’horizon est perdue en raison des conditions météorologiques ou de l’obscurité. Sans horizon stable et visible, le pilote est fortement trompé et risque de suivre une mauvaise référence telle que la pente d’un front nuageux."
      },
      {
        "type": "text",
        "text": "Plusieurs fausses illusions d’optiques sont susceptibles d’être expérimentées en vol et toutes peuvent conduire à une désorientation spatiale ou à des erreurs en approche. Les illusions d’optique font parties des causes les plus fréquentes d’accidents, en voici quelques-unes qu’il est important de connaître."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.1 - Effet d’hypnose"
      },
      {
        "type": "text",
        "text": "Le fait de fixer une lumière fixe dans l’obscurité donne l’impression au bout de quelques secondes que celle- ci bouge. Ce mouvement apparent devient plus fort si le pilote ne détache pas rapidement ses yeux de l’objet lumineux, ce qui peut provoquer la perte de contrôle de l’avion."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.2 - Illusions d’optique lors de I’atterrissage"
      },
      {
        "type": "text",
        "text": "De nombreuses caractéristiques de surfaces associées à diverses conditions atmosphériques provoquent de faux jugements quant à la hauteur ou la distance. Par exemple rampes ou balisages lumineux. Les rangées lumineuses le long d’une route peuvent conduire à des erreurs d’orientation ou même faire croire qu’il s’agit de la piste. Le balisage lumineux des pistes, lorsqu’il est fort et surtout quand l’environnement du sol est sombre, laisse croire que la piste est plus proche que la réalité ce qui incite à faire des approches trop basses."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.3 - Illusions atmosphériques"
      },
      {
        "type": "text",
        "text": "La pluie sur le pare-brise donne une fausse impression de hauteur et la brume fait croire que la piste est plus loin qu’elle n’est dans la réalité. De plus, le fait de pénétrer dans un banc de brume ou de brouillard peut donner une puissante impression de cabré et engendrer une réaction \"A piquer\" du pilote."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.4 - Pistes et terrains non horizontaux"
      },
      {
        "type": "text",
        "text": "Une piste montante induit le pilote en erreur en lui faisant croire qu’il est trop haut ce qui conduit à des approches basses et plates. Une piste descendante donne exactement l’effet contraire avec des approches trop hautes Vi 420 Vi 450 Vi 250 Vi 150 Temps restant avant croisement (s) Taille apparente (cm)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.5 - Pistes larges ou étroites"
      },
      {
        "type": "text",
        "text": "Lorsqu’une piste est plus étroite que celles dont nous utilisons habituellement, pour un même plan, nous avons la sensation d’être sur une approche plus haute. Donc danger pour récupérer la même sensation de faire une correction de plan à piquer et de percuter des obstacles (arbres, ….)."
      },
      {
        "type": "text",
        "text": "Par contre, les pistes plus larges donnent l’impression d’être trop bas et conduisent donc à des arrondis trop hauts."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.6 - Terrains plats sans aucun relief"
      },
      {
        "type": "text",
        "text": "L’absence de relief ou d’obstacles, comme sur l’eau, les zones très sombres et la neige trompent également en laissant croire à une hauteur plus grande que la hauteur vraie, d’où des approches basses et trop lentes."
      },
      {
        "type": "text",
        "text": "Beaucoup se sont laissé tromper au point de toucher le sol loin avant la piste."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.7 - Pluie"
      },
      {
        "type": "text",
        "text": "En plus de la visibilité horizontale qui est réduite, la pluie, par la présence d’eau sur le pare-brise, crée une altération de visibilité :"
      },
      {
        "type": "list",
        "items": [
          "les objets sont flous;",
          "elle produit un effet de diffraction qui fait croire que les objets se déplacent et en particulier que la"
        ]
      },
      {
        "type": "text",
        "text": "piste est plus basse qu’en réalité;"
      },
      {
        "type": "list",
        "items": [
          "la lumière étant diffuse, l’effet de halo laisse facilement croire que les lumières sont plus éloignées."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8 - Illusions sensorielles et désorientation spatiale"
      },
      {
        "type": "text",
        "text": "L’ensemble du système d’orientation de notre corps reçoit des informations des yeux, des oreilles et de la peau et centralise les données vers le cerveau. Le cerveau, après analyse, en déduit notre position, couché, debout, sur le dos, etc."
      },
      {
        "type": "text",
        "text": "Si les informations qui arrivent au cerveau sont contradictoires, il en résulte un état de confusion et en vol une perception totalement fausse de l’attitude réelle de l’avion."
      },
      {
        "type": "text",
        "text": "Des illusions spécifiques liées à la pesanteur et aux accélérations induisent facilement de fausses sensations puissantes ne pouvant être corrigées que par une référence visuelle stable. Pour cette raison, le vol sans visibilité ne peut s’envisager qu’avec des pilotes bien entraînés ayant une confiance totale dans les indications des instruments."
      },
      {
        "type": "text",
        "text": "En l’absence de références instrumentales dignes de foi, le vol devient vite extrêmement dangereux, même pour des pilotes très expérimentés."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8.1 - Fausse horizontale"
      },
      {
        "type": "text",
        "text": "En vol horizontal et rectiligne, les poils des canaux semi-circulaire; sont au repos, dès que des mouvements de la tête dus à un changement d’assiette ou d’inclinaison interviennent, ceux-ci sont sollicités et envoient des signaux au cerveau permettant de se représenter la nouvelle position du corps dans l’espace."
      },
      {
        "type": "text",
        "text": "Un dysfonctionnement peut être constaté si le mouvement se fait lentement et régulièrement. Dans ce cas, le liquide des canaux peut cesser de se déplacer et les poils reprenant leur position de repos laissent croire que l’avion est de nouveau horizontal. Sans référence instrumentale, le vol dégénère rapidement en spirale engagée."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8.2 - Fausse sensation de virage en sens opposé"
      },
      {
        "type": "text",
        "text": "Cette illusion survient juste après la sortie d’un virage, en vol rectiligne. Durant un virage stable, le liquide cesse de se déplacer. Juste après la sortie du virage, le liquide continue de se déplacer un peu par inertie, faisant croire que l’avion amorce un virage dans le sens opposé au virage initial."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8.3 - Illusion de changement d’axe"
      },
      {
        "type": "text",
        "text": "Un mouvement brusque de la tête lors d’un virage prolongé excite tous les canaux et provoque une forte sensation d’accélération ou de rotation sur un axe différent. Le pilote non entraîné peut alors se trouver sérieusement désorienté avec toutes les conséquences que l’on imagine."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8.4 - Sensation de basculement en arrière"
      },
      {
        "type": "text",
        "text": "Un rétablissement brusque d’une montée vers une trajectoire horizontale peut stimuler outre mesure les organes sensibles à la gravité et l’accélération linéaire. La sensation qui en résulte laisse croire à un basculement du corps en arrière et induire le pilote à baisser le nez de l’avion, aggravant encore la situation."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8.5 - Impression de montée"
      },
      {
        "type": "text",
        "text": "Lors d’un virage équilibré, la force centrifuge plaque le corps contre le siège, tout comme lors d’une ressource. L’impression est trompeuse et en l’absence de références elle fait croire à un début de montée."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.7.8.6 - Impression de descente"
      },
      {
        "type": "text",
        "text": "C’est l’effet opposé à celui décrit ci-dessus et il incite le pilote à piquer en sortie de virage."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.8 - Vertiges"
      },
      {
        "type": "text",
        "text": "C’est le cas extrême de la désorientation spatiale car l’environnement semble tourner de façon incontrôlable, provoquant des nausées ou des vomissements. La perturbation ne dure souvent que quelques secondes mais peut s’avérer très dangereuse."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.9 - Prévention de la désorientation spatiale"
      },
      {
        "type": "text",
        "text": "La désorientation spatiale ne peut jamais être complètement écartée, mais il est possible d’en minimiser les effets. Il faut tenir compte du fait que les illusions sensorielles proviennent de perceptions qui sont normales en vol et qu’elles peuvent et doivent être ignorées par un effort de volonté et d’entraînement. Il faut absolument pour cela croire les instruments et ne jamais se fier aux sensations physiques."
      },
      {
        "type": "text",
        "text": "Répétons-le, l’expérience pratique et la connaissance sont les seuls moyens de surmonter, voire d’éliminer, les fausses sensations."
      },
      {
        "type": "text",
        "text": "Certaines précautions doivent cependant être prises :"
      },
      {
        "type": "list",
        "items": [
          "ne strictement jamais continuer un vol lors de conditions météorologiques détériorant gravement la"
        ]
      },
      {
        "type": "text",
        "text": "visibilité si le pilote n’est pas dûment qualifié et l’avion non équipé ;"
      },
      {
        "type": "list",
        "items": [
          "ne jamais se laisser piéger par l’obscurité ou la nuit si nos compétences et les instruments ne le"
        ]
      },
      {
        "type": "text",
        "text": "permettent pas ;"
      },
      {
        "type": "list",
        "items": [
          "éviter les mouvements brusques de la tête, surtout lors de changements de trajectoire ;",
          "ne jamais voler avec un rhume ou tout autre dérangement ;",
          "ne jamais boire d’alcool dans les 12 heures précédant le vol car ses effets secondaires rendent les"
        ]
      },
      {
        "type": "text",
        "text": "canaux semi-circulaires encore plus sensibles ;"
      },
      {
        "type": "list",
        "items": [
          "ne pas voler en état de fatigue;",
          "s’entraîner régulièrement au vol sans visibilité."
        ]
      },
      {
        "type": "text",
        "text": "Bien que la cause essentielle des illusions sensorielles soit due au manque de références extérieures visibles, l’œil peut dans certaines circonstances être trompé, surtout en visibilité réduite. Les bancs de brouillard, la neige tombant en oblique sous l’effet du vent, une couche nuageuse inclinée, sont des facteurs puissamment trompeurs qui génèrent de fortes désorientations spatiales."
      },
      {
        "type": "text",
        "text": "Une lumière clignotant de 4 à 20 fois par minute ou bien très rapidement risque de donner des réactions désagréables et même dangereuses, allant de la nausée à la crise d’épilepsie."
      },
      {
        "type": "text",
        "text": "Par exemple, l’atterrissage en monomoteur face à un soleil bas, produit avec l’hélice un effet stroboscopique intense avec vertiges graves. Ce phénomène peut être évité en ne regardant pas directement à travers l’hélice ou en changeant le régime du moteur. Il en va de même la nuit dans les nuages, avec les feux de position clignotants et les feux à éclats (strobe) qu’il faut parfois éteindre."
      }
    ]
  },
  {
    "id": "aptitude-physique-et-mentale-du-pilote",
    "number": "9",
    "title": "Aptitude physique et mentale du pilote",
    "pages": [
      15,
      16
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "9.1 - Les types de certificats d’aptitude"
      },
      {
        "type": "text",
        "text": "La détention d’un certificat d’aptitude physique et mentale valide est obligatoire pour exercer la fonction de « Commandant de bord »."
      },
      {
        "type": "text",
        "text": "Trois types de certificats médicaux sont délivrés aux navigants en fonction de leurs licences :"
      },
      {
        "type": "text",
        "text": "Le certificat médical d'aptitude de classe 1 est nécessaire pour l'obtention et le renouvellement de toutes les licences professionnelles (pilote de ligne et pilote commercial)."
      },
      {
        "type": "text",
        "text": "Le certificat médical d'aptitude de classe 2 est destiné à certifier l'aptitude physique et mentale des pilotes privés PPL (licence de pilote privé)."
      },
      {
        "type": "text",
        "text": "Le certificat médical de classe LAPL est destiné à certifier l'aptitude physique et mentale des pilotes privés LAPL (pilote d’avion léger de loisir)."
      },
      {
        "type": "text",
        "text": "Les certificats médicaux d'aptitude de classe 1 sont délivrés uniquement par les Centres d'Expertise Médicale du Personnel Navigant (C.E.M.P.N.). Les certificats médicaux d'aptitude de classe 2 et les certificats de classe LAPL sont délivrés par les médecins agréés par la Direction Générale de l'Aviation Civile. Ces médecins doivent avoir suivi une spécialisation agréée en médecine aéronautique."
      },
      {
        "type": "text",
        "text": "Cet agrément est personnel (le remplaçant d'un médecin ne peut s'en prévaloir) et temporaire."
      },
      {
        "type": "text",
        "text": "La durée de validité du certificat médical de classe 1 est de 1 an jusqu’à 40 ans puis de six mois après 40 ans."
      },
      {
        "type": "text",
        "text": "La durée de validité de la classe 2 est de 5 ans avant 40 ans, 2 ans entre 40 et 50 ans puis un an après 50 ans."
      },
      {
        "type": "text",
        "text": "La durée de validité pour la classe LAPL est de 5 ans avant 40 ans et 2 ans après."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.2 - Les conditions d'obtention de l'aptitude physique et mentale"
      },
      {
        "type": "text",
        "text": "Les exigences médicales pour pratiquer une activité de pilotage sont normalisées et définies par arrêté ministériel. L’aptitude médicale nécessite une condition physique et mentale correcte sans trouble ni pathologie grave."
      },
      {
        "type": "text",
        "text": "Le but de l'examen médical est double :"
      },
      {
        "type": "list",
        "items": [
          "s’assurer que le candidat possède les capacités fonctionnelles requises : sensorielles (vision,"
        ]
      },
      {
        "type": "text",
        "text": "audition), psycho mentales, motrices ;"
      },
      {
        "type": "list",
        "items": [
          "vérifier l'absence d'une pathologie exposant au risque d'incapacité subite en vol (épilepsie, certaines"
        ]
      },
      {
        "type": "text",
        "text": "affections cardiaques, certains diabètes, etc.)."
      },
      {
        "type": "list",
        "items": [
          "Enfin il faut savoir que la grossesse rend la candidate temporairement inapte."
        ]
      },
      {
        "type": "text",
        "text": "  "
      },
      {
        "type": "text",
        "text": "Remerciements à M Jean-Pierre BORTEYRU, Docteur en Ophtalmologie, Président du CDA d’Ille et Vilaine et ... Pilote émérite pour la conception de cette check-list personnelle."
      }
    ]
  }
]
