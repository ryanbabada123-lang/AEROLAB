import type { CourseSection } from '@/content/types'

/**
 * ⚠️ FICHIER PRODUIT PAR `scripts/cours-extraire.py`. NE PAS ÉDITER À LA MAIN :
 * toute retouche serait écrasée à la prochaine extraction, et surtout elle
 * romprait la garantie qui fait la valeur de ce fichier — son texte est
 * exactement celui de la couche texte du PDF, au signe près.
 *
 * Source : assets/cours/bia/BIA-Cours2-Aerodynamique-MecaVol-2024-06-15.pdf
 * 64 pages, 123316 signes.
 *
 * Pour corriger une coupe de paragraphe ou un titre mal reconnu, corrigez
 * les heuristiques du script et relancez-le, pour que la correction profite
 * aux sept autres cours.
 */
export const aerodynamiqueSections: CourseSection[] = [
  {
    "id": "ouverture",
    "number": "",
    "title": "Ouverture",
    "pages": [
      3,
      3
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "3"
        ]
      }
    ]
  },
  {
    "id": "unites-de-physique-et-d-aerodynamique",
    "number": "",
    "title": "Unités de physique et d’aérodynamique",
    "pages": [
      3,
      4
    ],
    "blocks": [
      {
        "type": "text",
        "text": "  "
      },
      {
        "type": "text",
        "text": "Quantité de mouvement : Produit de la masse d’un corps par sa vitesse de déplacement unité : le Kilogrammètre par seconde = 1 Kg x 1 m/s Puissance : Travail effectué par unité de temps unité : le Watt (SI) = 1 J / 1 s Symbole : W = E / t Inertie : Qualité des corps à conserver leur état de mouvement ou de repos (1ère loi de Newton) unité : le Kilogramme (SI) Pesanteur : Accélération dirigée vers le centre de la terre due à la gravité terrestre (pesanteur) Symbole : g (en troposphère g = 9,81 m/s/s) Travail : Mesure du déplacement d’un poids unité : le Joule (SI) = 1 N x 1 m Symbole : E = P . L Énergie : Masse animée d’une vitesse unité : le Joule (SI) = ½ x 1 Kg x (1 m/s)² Symbole : E = ½ m . V2 Force : Mesure de la modification de l’état d’inertie d’un corps (2ème loi de Newton) unité : le Newton (SI) = 1 Kg x 1 m/s/s. Symbole : F Puissance : Rythme de production de travail soit déplacement d’un poids par unité de temps unité : le Watt = (1 N x 1 m) / 1s. symb : W = F x V Masse : Quantité de matière dans un corps unité : le Kilogramme (SI) symbole unité : Kg symbole : m Poids : Masse d’un corps soumis à une accélération unité : le Newton (SI) = 1 Kg x 1 m/s/s Symbole : P = m . g Viscosité dynamique :"
      },
      {
        "type": "text",
        "text": "unité : le Pascal / seconde = 1 Pa / 1 s symbole :  = P / t Chaleur spécifique à volume constant :"
      },
      {
        "type": "text",
        "text": "unité : le Joule par Kg par degré Masse volumique : Quantité de matière dans un corps par unité de volume unité : le Kilogramme / mètre cube. Symbole :  Pression dynamique: Mesure d’une force créée par déplacement dans un fluide par unité de surface unité : le Pascal (SI) = ½  V². symbole : Ps ou Pd Viscosité cinématique :"
      },
      {
        "type": "text",
        "text": "unité : le mètre carré par seconde (SI) = 1 m2/s symbole :  = L2 / t Chaleur spécifique à pression constante :"
      },
      {
        "type": "text",
        "text": "unité : le Joule par Kg par degré"
      },
      {
        "type": "text",
        "text": "Température : En aérodynamique, on utilise pour la facilité des calculs le degré Kelvin unité : le degré Kelvin = - 273° C, symbole : T Densité relative : Rapport de la masse volumi- que de l’air à une altitude donnée à la masse volumique à l’altitude o. symbole :  =  / 0 Densité de l’air dans la troposphère :"
      },
      {
        "type": "text",
        "text": "Formule empirique :  = (20 – Z) / (20 + Z) (Z exprimé en kilomètres) Relation de Mayer : constante des gaz parfaits Symbole r : 287. r = Chaleur spécif à pression constante – chaleur spécif à température constte."
      },
      {
        "type": "text",
        "text": "Pression : Mesure d’une force également répartie sur une aire par unité de surface unité : le Pascal (SI) = 1 N / 1 m². symb : Ps ou Pd"
      },
      {
        "type": "list",
        "items": [
          "4"
        ]
      },
      {
        "type": "text",
        "text": "Autres unités et correspondances pratiques"
      }
    ]
  },
  {
    "id": "definitions",
    "number": "",
    "title": "Définitions",
    "pages": [
      4,
      5
    ],
    "blocks": [
      {
        "type": "text",
        "text": "AÉRODYNAMIQUE : branche de la dynamique des fluides qui porte sur la compréhension et l'analyse des écoulements d'air, ainsi que sur leurs effets sur des éléments solides qu’ils environnent. Ces effets peuvent naturellement être provoqués par un corps immobile soumis à un flux d’air animé d’une vitesse ou par un corps se déplaçant dans l’atmosphère ou encore par la combinaison des deux propositions précédentes."
      },
      {
        "type": "text",
        "text": "Le champ d’études peut se subdiviser en aérodynamique incompressible et compressible en fonction du nombre de Mach :"
      },
      {
        "type": "list",
        "items": [
          "L’aérodynamique incompressible concerne les écoulements pour lesquels le nombre"
        ]
      },
      {
        "type": "text",
        "text": "de Mach est inférieur à 0.2 environ (250 km/h), et se placer dans cette classe d'écoulements permet de prendre certaines hypothèses simplificatrices lors de l'étude des ces écoulements."
      },
      {
        "type": "list",
        "items": [
          "L’aérodynamique compressible quant à elle se subdivise en aérodynamique"
        ]
      },
      {
        "type": "text",
        "text": "subsonique à Mach compris entre 0.2 (250 km/h) et le Mach critique (environ 1200 km/h), transsonique, supersonique de Mach 1 à 5 et hypersonique au-delà de Mach 5."
      },
      {
        "type": "text",
        "text": "MÉCANIQUE DU VOL : étude du mouvement d'un véhicule en environnement aérien ou spatial et des forces engendrées par des changements de trajectoires, des modifications de forme, des variations de vitesse."
      },
      {
        "type": "text",
        "text": "  "
      },
      {
        "type": "text",
        "text": "Masse Le kilogramme = 2,2 lb La livre (lb) = 0,453 kg L’once (oz) = 0,028 kg Le slug (sg) = 1 ft / s2 = 14,6 kg"
      },
      {
        "type": "text",
        "text": "Pression Température Capacité liquide Poids Le Newton Le Newton = 1 kg . 1 m/s/s La livre (lb) = 4,45 N Distance Le mètre = 3,29 ft Le pied (ft) = 0,304 m Le pouce (in) = 0,0254 m Le mile nautique (Nm) = 1852 m = 6092 ft Le mile terrestre (Sm) = 1609 m Vitesse Le kilomètre / heure (km/h) Le mètre / seconde (m/s) Le pied / minute (ft/mn) = 0,005 m/s Le knot (Kt) = 1,852 km/h Le Statute mile/ heure (MPH) = 1,6 km/h Le litre (l) Le gallon US (US.Gal) Le gallon impérial (Imp Gal) Le degré Celsius (°C) 0° Kelvin (K°) = - 273° C Le degré Farenheit (°F) Le Pascal (Pa) L’hectopascal (hPa) = 100 Pa Le millibar (mb) = 1 hPa Le pouce de mercure (In Hg) 1013 hPa = 29,92 In Hg T°C = T° K - 273 = (T°F – 32) x 5/9 1 US Gal = 3,785 l ; 1 Imp Gal = 4,546 l Conversion des vitesses 1 m/s = 197,36 ft/mn # 200 ft/mn 1 km/h = 0,54 Kt 1 Kt # 100 ft/mn # 0,5 m/s Puissance Le watt (W) Le kilowatt (kW) = 1000 W Le cheval vapeur (Cv) = 736 W Le horse power (HP) = 745 W Le livre.pied/minute (ft.lb/mn) = 0,03 HP"
      },
      {
        "type": "list",
        "items": [
          "5"
        ]
      }
    ]
  },
  {
    "id": "principales-proprietes-de-l-air",
    "number": "1",
    "title": "Principales propriétés de l’air",
    "pages": [
      5,
      7
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "1.1 - Caractéristiques de l’air"
      },
      {
        "type": "text",
        "text": "L'air est constitué d'un ensemble de gaz (78% d’azote, 21% d’oxygène et 1% de gaz rares). L’air est pesant, un peu plus de 10 tonnes au m² au sol (masse volumique = 1,225 kg/m3), invisible, a un indice de viscosité (résistance à l’avancement et création de tourbillons), perd 2° C tous les 1000 ft dans la troposphère(6,5°C / 1000m), se détend avec la pression donc perte d’1 hPa / 28 ft dans les basses couches."
      },
      {
        "type": "text",
        "text": "L’air se dilate, se compresse, est expansible (propriété de tous les gaz tendant à occuper tout l’espace disponible (loi de Mariotte : Pression x Volume = Constante) et masse volumique / Pression = Constante."
      },
      {
        "type": "text",
        "text": "L’atmosphère standard : une pression 1013 hPa et une température + 15° C."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1.2 - Les écoulements de l’air"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1.3 - Causes de la résistance de l’air"
      },
      {
        "type": "text",
        "text": "Ces gaz pesants sont constitués d'un ensemble de particules élémentaires que l’on doit déplacer lorsque l’on avance. A basse vitesse et compte tenu que notre surface opposée aux molécules est petite, les forces engendrées pour ce déplacement sont de faible valeur et la difficulté de déplacement n’apparaît presque pas."
      },
      {
        "type": "text",
        "text": "Par contre, l’augmentation de vitesse ou de (et) de surface engendre un effet de résistance de l'air non négligeable. Cette résistance de l'air est le principal problème des ingénieurs aérodynamiciens, que ce soit pour les véhicules automobiles, les trains ou les avions."
      },
      {
        "type": "list",
        "items": [
          "6"
        ]
      },
      {
        "type": "text",
        "text": "LE PROFIL AÉRODYNAMIQUE H"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1.4 - Résistance sur une plaque inclinée"
      },
      {
        "type": "text",
        "text": "La plaque en mouvement pousse l'air, qui s'oppose à ce déplacement avec la force F. Pour que la plaque puisse continuer à avancer, il faut lui appliquer la force M de sens opposé."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1.5 - Composantes de la résistance de l’air"
      },
      {
        "type": "text",
        "text": "Déplacement"
      },
      {
        "type": "text",
        "text": "du corps LES COMPOSANTES DE LA RÉSISTANCE La surface frontale du corps doit pousser l’air traversé et crée une zone de surpression (air comprimé)."
      },
      {
        "type": "text",
        "text": "La surface arrière du corps aspire l’air pour combler le vide et provoque donc une zone de dépression (détente)."
      },
      {
        "type": "text",
        "text": "La résultante de ces deux forces est la résultante aérodynamique. SURPRESSION"
      },
      {
        "type": "text",
        "text": "DÉPRESSION LE MAÎTRE COUPLE et LA SURFACE Vent"
      },
      {
        "type": "text",
        "text": "relatif Surface du corps en opposition avec le vent relatif."
      },
      {
        "type": "text",
        "text": "A noter, hauteur variable (H) en fonction de l’angle d’incidence donc de la direction du vent relatif par rapport au profil du corps."
      },
      {
        "type": "text",
        "text": "H H Mesures expérimentales :"
      },
      {
        "type": "list",
        "items": [
          "Trois corps de forme différente",
          "Même surface frontale (maître couple identique)",
          "Même vitesse de vent relatif opposée aux corps"
        ]
      },
      {
        "type": "text",
        "text": "Constatations :"
      },
      {
        "type": "list",
        "items": [
          "Force mesurée à la plaque :  100 N",
          "Force mesurée  sur la boule :   50 N",
          "Force mesurée sur l’ogive :    12 N"
        ]
      },
      {
        "type": "text",
        "text": "CONCLUSION : La résistance à l’avancement d’un corps dans un fluide peut être optimisée par l’adoption d’un profil fuselé ainsi que par la recherche aérodynamique."
      },
      {
        "type": "text",
        "text": "Dans le cas présent, la force motrice nécessaire au déplacement d’une même surface a été réduite de 88%."
      },
      {
        "type": "list",
        "items": [
          "7"
        ]
      }
    ]
  },
  {
    "id": "forces-appliquees-a-un-aeronef-en-vol",
    "number": "2",
    "title": "Forces appliquées a un aéronef en vol",
    "pages": [
      7,
      11
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Un aéronef en vol subit un ensemble de forces imbriquées mais décomposables donc exploitables pour une meilleure compréhension des phénomènes de vol."
      },
      {
        "type": "text",
        "text": "Certaines œuvrent utilement, d’autres sont nuisibles. L’essentiel est de les connaître afin d’optimiser la logique de vol et de limiter les dangers et altérations."
      },
      {
        "type": "text",
        "text": "Afin qu'un véhicule de tout type puisse se déplacer, il est nécessaire de lui appliquer un ensemble de forces, lesquelles vont créer un référentiel d'équilibre."
      },
      {
        "type": "text",
        "text": "Lorsque le mouvement ne varie pas au cours du temps, c'est-à-dire lorsque la direction et la vitesse de déplacement ne varient pas, l'objet est en équilibre."
      },
      {
        "type": "text",
        "text": "Si la direction du déplacement, ou sa vitesse, ou les deux à la fois varient, l'objet est en déséquilibre."
      },
      {
        "type": "text",
        "text": "Pour initier, accroître ou diminuer un déplacement, la résultante des forces en présence ne doit pas être nulle."
      },
      {
        "type": "text",
        "text": "En résumé :"
      },
      {
        "type": "list",
        "items": [
          "le maintien d'un mouvement est un équilibre;",
          "une mise en mouvement est un déséquilibre;",
          "l'arrêt d'un mouvement est un déséquilibre.",
          "un changement de trajectoire est un déséquilibre."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.1 - Rappel sur les Forces"
      },
      {
        "type": "text",
        "text": "Une force se caractérise par trois éléments :"
      },
      {
        "type": "list",
        "items": [
          "le point de l'objet où elle s'exerce (son point d'application)",
          "la direction suivant laquelle elle s'exerce (sens)",
          "la grandeur de la force appelée : « intensité »"
        ]
      },
      {
        "type": "text",
        "text": "Le symbole indique qu'il s'agit d'une force. L’utilisation de la lettre F, sans la flèche au-dessus de la lettre, indique seulement l'intensité de la force, elle s'exprime en newton (N), c'est l'unité officielle du système international de mesures (SI). Un Newton est la force capable de communiquer à une masse de 1 Kg une accélération de 1 m/s/s (1 m/s²)."
      },
      {
        "type": "text",
        "text": "Deux forces qui s'appliquent au même point d'un objet ont, sur l'équilibre de l'objet, le même effet qu'une force unique s'appliquant sur ce point et que l'on appelle résultante des deux forces. La direction et l'intensité de la résultante peuvent se déterminer graphiquement en représentant les forces sur un dessin."
      },
      {
        "type": "text",
        "text": "La résultante sera représentée par la flèche se confondant avec la diagonale du parallélogramme construit à partir des flèches représentant les deux forces."
      },
      {
        "type": "text",
        "text": "Inversement, une force a, sur l'équilibre d'un objet, le même effet que deux forces s'appliquant au même point et que l'on appelle ses composantes. Les composantes d'une force ont une direction et une intensité que l'on peut déterminer graphiquement."
      },
      {
        "type": "text",
        "text": "On trace la force . On choisit deux directions suivant lesquelles on veut décomposer . Les flèches représentant les composantes doivent se confondre avec les côtés du parallélogramme construit à partir des deux directions choisies et ayant la flèche représentant pour diagonale."
      },
      {
        "type": "list",
        "items": [
          "8"
        ]
      },
      {
        "type": "text",
        "text": "La force unique est la résultante des deux forces et . Inversement, et sont les composantes de . Cela peut s'écrire par convention :"
      },
      {
        "type": "text",
        "text": "= +"
      },
      {
        "type": "text",
        "text": "Lorsque l'on décide de décomposer une force unique en deux composantes, on choisit le plus souvent de le faire suivant deux directions perpendiculaires. En application du théorème de Pythagore, on peut écrire : F² = f1² + f2²."
      },
      {
        "type": "text",
        "text": "Lorsqu'un objet est en équilibre, c'est parce que toutes les forces qui s'exercent sur lui s'équilibrent entre elles. On dit que leur résultante est nulle."
      },
      {
        "type": "text",
        "text": "Inversement, lorsqu'un objet est en déséquilibre, c'est parce que toutes les forces qui s'exercent sur lui ne s'équilibrent pas entre elles. On dit que leur résultante n'est pas nulle."
      },
      {
        "type": "text",
        "text": "Pour l’avion, nous parlerons ainsi d'équilibre et de déséquilibre dans l’espace. Par analogie, nous serons ainsi amenés à parler de stabilité et d'instabilité de l’avion."
      },
      {
        "type": "text",
        "text": "La notion de stabilité ou d'instabilité n'existe que pour des objets en équilibre. Un objet en dit en équilibre si son mouvement est constant. Par une perturbation extérieure, le mouvement de cet objet n’est plus constant. Si l'objet reprend un mouvement proche de son mouvement d'origine, on dit qu'il est en équilibre stable."
      },
      {
        "type": "text",
        "text": "Dans le cas contraire il est en équilibre instable."
      },
      {
        "type": "text",
        "text": "Un avion en vol sera le plus souvent en équilibre, puisqu’il vole en ligne droite et à puissance constante, sans accélérer ni décélérer. Mais certaines phases de vol ou l’introduction d’impondérables ou de conditions météorologiques peuvent très rapidement rompre cet équilibre. Il est donc impératif de connaître les limites du pilotage en conditions d’instabilité."
      },
      {
        "type": "text",
        "text": "Les forces qui s'exercent sur votre avion sont au nombre de trois : La force due à la gravité terrestre : c'est le poids (masse x gravité) La force due à la propulsion : c'est la traction ou la poussée du moteur La force due aux effets de l'air : c'est la résultante aérodynamique."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.2 - Le poids"
      },
      {
        "type": "list",
        "items": [
          "9"
        ]
      },
      {
        "type": "text",
        "text": "Il est dépendant de la masse du corps (notion de quantité de matières) qui est affecté par la gravitation terrestre (tout corps lâché dans l’atmosphère tombe vers la terre ou le sol). Cette force est donc dirigée \"du haut vers le bas\", dans la direction indiquée par un fil à plomb. Son intensité est principalement fonction de la masse de l'objet, et plus un objet contient de matière, plus il est lourd."
      },
      {
        "type": "text",
        "text": "Avant tout vol, le pilote doit faire un devis de masse afin de connaître le poids de l’avion au décollage et d’intervenir, en fonction des directives du constructeur, sur le choix des éléments transportés (passagers, bagages, essence,…)."
      },
      {
        "type": "text",
        "text": "Par ce contrôle, il vérifie que l'intensité et le point d'application du poids total sont conformes aux possibilités de pilotage de son avion (devis de poids et graphique de centrage)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.3 - La traction GMP (ou la poussée)"
      },
      {
        "type": "text",
        "text": "C'est la force générée par le système de propulsion de l'avion. Pour un avion à hélice, cette force s'exerce suivant l'axe de l'hélice, donc approximativement suivant l'axe longitudinal de l'avion. Plus le moteur est puissant, plus cette force est susceptible d'être grande."
      },
      {
        "type": "text",
        "text": "L'intensité de la traction est dépendante de l’action sur la commande de puissance, de zéro à l'intensité maximale obtenue par variation de puissance jusqu’au maxi."
      },
      {
        "type": "text",
        "text": "Exemple de force : sur le TB 10, l'intensité maximale de la traction est de l'ordre de 300 Newtons (sa masse approchant 1 150 Kg soit 11500 N environ)."
      },
      {
        "type": "text",
        "text": "La traction s'exerce suivant l'axe longitudinal de l'avion donc en simplifiant elle s’exerce parallèlement à la trajectoire."
      },
      {
        "type": "text",
        "text": "En toute rigueur, il existe une petite différence entre la direction de la traction et la trajectoire suivie, c’est l’angle \"d'incidence\" qui sera étudié plus loin. Cet angle, dans le cas général, est assez faible, et nous négligerons la composante de la traction perpendiculaire à la trajectoire."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.4 - La résultante aérodynamique"
      },
      {
        "type": "text",
        "text": "C'est la force générée par l'ensemble des pressions locales dues à la vitesse de l'air autour de l’avion en déplacement."
      },
      {
        "type": "text",
        "text": "La résultante aérodynamique peut être décomposée en une force de traînée et une force de portance."
      },
      {
        "type": "text",
        "text": "D'une manière générale en aérodynamique les actions de l'air se décomposeront en deux forces :"
      },
      {
        "type": "list",
        "items": [
          "une parallèle à la vitesse de l'air et de même sens, la traînée  Rx",
          "une perpendiculaire à la vitesse, la portance  Rz"
        ]
      },
      {
        "type": "text",
        "text": "La somme vectorielle de ces deux forces constitue la résultante des forces aérodynamiques Ra"
      },
      {
        "type": "text",
        "text": "La résultante aérodynamique « RA » se décompose en Rz + Rx, avec z comme axe perpendiculaire à l'avion et x comme axe de l'avion."
      },
      {
        "type": "text",
        "text": "Pour que l’avion vole en palier à vitesse constante, il faut que la portance (Rz) annule le poids (P) et que la traction annule la traînée (Rx)."
      },
      {
        "type": "list",
        "items": [
          "10"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.5 - Equations du vol"
      },
      {
        "type": "text",
        "text": "L'équilibre en vol horizontal (vitesse horizontale constante) est obtenu lorsque la somme des forces appliquées à l'aéronef est nulle."
      },
      {
        "type": "text",
        "text": "Portance = Poids Rz = P Traînée = Traction (ou Propulsion) Rx = Traction (GMP)"
      },
      {
        "type": "text",
        "text": "D’où les formules de base de la mécanique du vol en équilibre :"
      },
      {
        "type": "list",
        "items": [
          "le poids  est équilibré par la portance (portance minimale nécessaire) ;",
          "la traînée est équilibrée par la traction (force nécessaire du GMP pour"
        ]
      },
      {
        "type": "text",
        "text": "la compenser)."
      },
      {
        "type": "text",
        "text": "m en newton ; g en m/s² ;  en kg/m , V en m/s ; S en m² ; Cz et Cx pas d'unité."
      },
      {
        "type": "text",
        "text": "En utilisant les éléments de masse, de gravité, de vitesse et de surface alaire (indiquées dans le manuel de vol) et de densité d’air, il est possible de calculer Cx et Cz (coefficient de portance et de traînée)."
      },
      {
        "type": "list",
        "items": [
          "11"
        ]
      }
    ]
  },
  {
    "id": "les-principes-de-la-sustentation",
    "number": "3",
    "title": "Les principes de la sustentation",
    "pages": [
      11,
      22
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Lorsque l'air s'écoule autour d'un objet, ou qu'un objet se déplace dans l'air, des forces aérodynamiques se créent sur l'objet. Pour s'en rendre compte il suffit de réaliser les trois petites expériences décrites ci-dessous avec des demi-feuilles A4 :"
      },
      {
        "type": "text",
        "text": "La première expérience met en évidence la capacité de l'air à pousser un obstacle qu'il rencontre par augmentation de la pression sur une des faces de celui-ci."
      },
      {
        "type": "text",
        "text": "La deuxième expérience montre l’effet d'aspiration lorsque l'air est mis en mouvement sur la surface supérieure de la feuille, la pression diminue par accélération de l'écoulement."
      },
      {
        "type": "text",
        "text": "La troisième expérience confirme l'analyse de la seconde : l'air soufflé entre les feuilles provocant une dépression par rapport à l’ai ambiant, les feuilles se rapprochent."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.1 - La portance"
      },
      {
        "type": "text",
        "text": "L’ingénieur Bernoulli a mis en évidence que toute augmentation de la vitesse d’un fluide induit une diminution de la pression statique (dépression) :"
      },
      {
        "type": "text",
        "text": "Pression totale = Pression statique + Pression dynamique = constante"
      },
      {
        "type": "text",
        "text": "Le filet d'air de l'extrados parcourt, du fait de la forme du profil, une distance supérieure à celle qu'il aurait parcourue en atmosphère non perturbée (hors de la présence de l'aile). Comme il ne peut y avoir accumulation ou disparition de l'air, le filet d'air sur l'extrados est accéléré ce qui entraîne une dépression (-)."
      },
      {
        "type": "text",
        "text": "Le phénomène inverse se produit sur l'intrados, (chemin plus court, ralentissement de l'air, compression), ce qui entraîne une surpression (+)."
      },
      {
        "type": "text",
        "text": "Surpression intrados + Dépression extrados = Forces de Portance"
      },
      {
        "type": "text",
        "text": "Ordre de grandeur Force de portance = 25% dus à la surpression et 75 % dus la dépression L'aile est à la fois poussée (intrados de l’aile) et aspirée vers le haut (extrados)."
      },
      {
        "type": "list",
        "items": [
          "12"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.2 - La traînée"
      },
      {
        "type": "text",
        "text": "Le profil de l’aile présentant une certaine surface au vent relatif (maitre-couple) est freiné, on appelle ce freinage : la traînée."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.3 - Les facteurs qui influent sur la résultante aérodynamique"
      },
      {
        "type": "text",
        "text": "De nombreux paramètres possèdent une influence sur la résultante aérodynamique (RA), parmi les paramètres les plus influents, nous trouvons :"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.1 - La surface alaire et charge alaire"
      },
      {
        "type": "text",
        "text": "L'un des premiers paramètres qui influe sur la RA est la surface totale sur laquelle les forces sont appliquées, plus la surface offerte au courant d'air est grande, plus la RA est importante."
      },
      {
        "type": "text",
        "text": "La surface alaire d'un avion est la surface totale de la voilure, y compris celle qui traverse le fuselage par exemple un avion TB10 possède une surface de référence de 11,90 m2 Des essais en soufflerie montrent que la RA est directement proportionnelle à la surface alaire."
      },
      {
        "type": "text",
        "text": "La charge alaire est le rapport entre le poids de l'aéronef et la surface portante de la voilure ou de l'aile. La valeur de la charge alaire influe fortement sur les vitesses de décollage et d'atterrissage. Ordre d’idée : 60 à 120 kg/m² pour les avions légers, ces valeurs montent jusqu’à 350 à 520 kg/m² pour les longs courriers (B747)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.2 - La vitesse de déplacement"
      },
      {
        "type": "text",
        "text": "L'intensité de la résultante aérodynamique (RA) augmente avec le carré de la vitesse de l'avion. La vitesse d'un avion léger est de l'ordre de 60 m / s (environ 120 nœuds.)."
      },
      {
        "type": "list",
        "items": [
          "13"
        ]
      },
      {
        "type": "text",
        "text": "Vitesse x par : Résultante x par :"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.3 - La masse volumique de l'air"
      },
      {
        "type": "text",
        "text": "L'air dans lequel évolue l'avion est pesant et possède une masse volumique (masse par unité de volume). Son symbole est  (rhô) Plus l'air est dense, plus la résultante est grande. La masse volumique de l'air est de 1,225 kg / m3 au niveau de la mer et diminue avec l'altitude."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.4 - La forme de l'aile (profil et allongement)"
      },
      {
        "type": "text",
        "text": "La forme de l'aile selon son profil (en coupe) et son allongement (rapport entre sa longueur et sa largeur moyenne) influe sur la résultante aérodynamique."
      },
      {
        "type": "text",
        "text": "Un profil fortement cambré possède un bon rendement aux vitesses faibles (60 à 100 Km/h), alors qu'un profil peu cambré convient mieux aux vitesses élevées."
      },
      {
        "type": "text",
        "text": "Sur un grand nombre d'avions modernes, il est possible de modifier la courbure du profil en vol grâce à un système dénommé volets de courbure."
      },
      {
        "type": "text",
        "text": "Un grand allongement est plus favorable aux faibles vitesses alors qu'un faible allongement convient aux vitesses fortes. Par ailleurs, un autre avantage du grand allongement est de diminuer les tourbillons en bout d'aile (en effet à cette extrémité, la surpression de l'intrados tend à compenser la dépression de l'extrados et crée des tourbillons dénommés vortex ou tourbillons marginaux)."
      },
      {
        "type": "text",
        "text": "Afin de déterminer le meilleur compromis entre la forme de l'aile et l'allongement, il existe trois méthodes de travail :"
      },
      {
        "type": "list",
        "items": [
          "Méthode de construction de maquette avec essais de performances ;",
          "Méthode d'essais en soufflerie de l'aile seule (l'aile est fixe et le courant d'air est créé"
        ]
      },
      {
        "type": "text",
        "text": "par des ventilateurs, notion de vent relatif) ;"
      },
      {
        "type": "list",
        "items": [
          "Méthode de calcul et de simulation de l'aile par ordinateur."
        ]
      },
      {
        "type": "text",
        "text": "Les différents profils d'aile sont répertoriés et dénommés NACA entre autres."
      },
      {
        "type": "list",
        "items": [
          "14"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.5 - Les angles particuliers et la position de l'aile par rapport au vent relatif"
      },
      {
        "type": "text",
        "text": "La relativité d’une vitesse sur trajectoire par rapport à une référence fixe (air ou avion) est appelée : VENT RELATIF."
      },
      {
        "type": "text",
        "text": "PENTE = Angle compris entre la trajectoire et l’horizontale ASSIETTE = Angle compris entre l’axe longitudinal et l’horizontale INCIDENCE = Angle compris entre l’axe longitudinal de l'avion et la trajectoire (approximation pour une meilleure clarté. En toute rigueur, c’est l’angle entre la corde de profil de l’aile et la trajectoire)."
      },
      {
        "type": "text",
        "text": "Un autre paramètre important dans l'intensité de la résultante aérodynamique est l'orientation de l'aile par rapport au vent relatif."
      },
      {
        "type": "text",
        "text": "Le vent relatif est la vitesse d’un mobile dans une atmosphère stable ou la vitesse de l’air sur un corps. Le vent relatif souffle donc toujours en sens opposé de la trajectoire de l'avion)."
      },
      {
        "type": "text",
        "text": "L'orientation de l'avion (axe longitudinal) par rapport au vent relatif (trajectoire) compose un angle caractéristique appelé : incidence. (symbole :  lettre grecque alpha)."
      },
      {
        "type": "text",
        "text": "Par ailleurs, il existe par construction un petit angle entre l'axe longitudinal de l'avion et la corde de profil de l'aile, cet angle s'appelle \"angle de calage de l'aile\". Il est très faible, de l'ordre de 1 à 2°, de manière à favoriser une force portante dès le décollage ou l'avion est en vol horizontal par création d'un angle d'incidence. Ce calage étant très faible, il est admis que la définition de l'incidence  (alpha ) soit donc l’angle déterminé par l’axe longitudinal de l’avion et la direction du vent relatif (trajectoire suivie par l’avion)"
      },
      {
        "type": "text",
        "text": "Lorsque l'incidence de l'aile (angle entre la corde de profil et la trajectoire) augmente, l'intensité de la résultante augmente, passe par un maximum pour un angle d'incidence de l'ordre de 15° à 18° puis décroît brusquement."
      },
      {
        "type": "text",
        "text": "On dit alors que l'aile décroche. C'est donc essentiellement au travers cet angle d'incidence que le pilote peut agir sur la résultante aérodynamique et donc piloter son avion."
      },
      {
        "type": "text",
        "text": "Trajectoire Axe longitudinal Horizontale VENT RELATIF PENTE ASSIETTE () () INCIDENCE ()"
      },
      {
        "type": "list",
        "items": [
          "15"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.6 - L'état de surface"
      },
      {
        "type": "text",
        "text": "Un autre paramètre important de la résultante aérodynamique est l'état des surfaces des ailes, en effet les salissures de tous types provoquent un décollement des filets d'air pouvant entraîner un angle d'incidence de décrochage plus faible et induisent une traînée supplémentaire dénommée : traînée de profil ou traînée parasite."
      },
      {
        "type": "text",
        "text": "4. – Etude des éléments aérodynamiques de l’aile La résultante aérodynamique due aux effets de pression et de dépression est un ensemble de forces qui s'exercent sur la surface de l'aile, et qui peuvent être représentés par une force unique appliquée en un point particulier dénommé le Centre de Poussée."
      },
      {
        "type": "text",
        "text": "Cette force est presque perpendiculaire à la trajectoire. On peut la décomposer en deux forces perpendiculaires (deux composantes orthonormées)."
      },
      {
        "type": "text",
        "text": "La première, qui est perpendiculaire à la trajectoire (ou au vent relatif), est la plus importante et se nomme la PORTANCE (Rz)."
      },
      {
        "type": "text",
        "text": "C'est la composante qui porte l'avion."
      },
      {
        "type": "text",
        "text": "La seconde, la plus faible, suit un axe parallèle à la trajectoire (donc au vent relatif). On l’appelle la TRAÎNÉE (Rx)."
      },
      {
        "type": "text",
        "text": "C'est la composante qui freine l'avion."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.1 - Les coefficients :"
      },
      {
        "type": "text",
        "text": "Le premier coefficient qui caractérise une aile est le coefficient de résultante dénommé Cr."
      },
      {
        "type": "text",
        "text": "Cr est l'intensité de la résultante aérodynamique sur une aile de même profil que l'aile considérée, de surface 1 mètre carré et placée dans une veine d'air de pression dynamique de 1 Pascal soit donc de 1 N / m²."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.2 - Coefficients de portance et de traînée"
      },
      {
        "type": "text",
        "text": "La résultante aérodynamique varie selon de nombreux paramètres (surface, vitesse du vent relatif, densité de l'air, etc. .)."
      },
      {
        "type": "text",
        "text": "La résultante varie également en fonction de la forme en plan de l'aile, de son profil, de son état de surface et de son incidence. On a coutume de regrouper ces derniers paramètres et de les représenter par des coefficients uniques dit coefficients aérodynamiques."
      },
      {
        "type": "text",
        "text": "Cz coefficient de portance est l'intensité de la portance sur une aile de même profil que l'aile considérée, de surface 1 mètre carré et placée dans une veine d'air de pression dynamique de 1 Pascal soit donc de 1 N / m²."
      },
      {
        "type": "list",
        "items": [
          "16"
        ]
      },
      {
        "type": "text",
        "text": "Cx coefficient de traînée est l'intensité de la traînée sur une aile de même profil que l'aile considérée, de surface 1 mètre carré et placée dans une veine d'air de pression dynamique de 1 Pascal soit donc de 1 N / m²."
      },
      {
        "type": "text",
        "text": "Cz est en quelque sorte l'aptitude à transformer le courant d'air en portance. Cx est la caractérisation d'un défaut qui est de fabriquer de la traînée avec le même courant d'air."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.3 - Coefficient de moment"
      },
      {
        "type": "text",
        "text": "Afin de déterminer la position de la résultante aérodynamique sur la corde de l'aile, nous pouvons calculer (grâce au banc de soufflerie), le moment de cette force par rapport au bord d'attaque de l'aile (le bord d'attaque est la partie de l'aile qui rencontre le vent relatif en premier), puis en construire un abaque soit en fonction de l'incidence soit en fonction du coefficient de portance."
      },
      {
        "type": "text",
        "text": "Rappel : un moment en un point est égal au produit de l'intensité d'une force par la longueur du bras de levier mesuré du point d'application de cette force au point considéré."
      },
      {
        "type": "text",
        "text": "Le moment de la résultante aérodynamique par rapport au bord d'attaque (bras de levier) sera donc caractérisé par un coefficient appelé Cm."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.4 - Polaire d'un profil"
      },
      {
        "type": "text",
        "text": "Les expériences effectuées en soufflerie pour un profil donné, permettent de connaître les différentes valeurs des coefficients Cx, Cz et Cm."
      },
      {
        "type": "text",
        "text": "La représentation graphique de Cz fonction de Cx se nomme polaire. (Cz = f (Cx ))"
      },
      {
        "type": "text",
        "text": "En possession de ces valeurs, il est alors possible d'établir des représentations graphiques des caractéristiques d'une aile construite avec le profil étudié."
      },
      {
        "type": "text",
        "text": "La plus complète et la plus utilisée de ces caractéristiques est dénommée la polaire de l'aile."
      },
      {
        "type": "text",
        "text": "Les coefficients Cx, Cz et Cm sont toujours des nombres de faible valeur numérique et comportent une valeur décimale. Pour supprimer les risques d'erreur, il est d'usage de multiplier par 100 les valeurs de ces coefficients (aucune influence sur les diagrammes mais une meilleure lisibilité et une compréhension accrue)."
      },
      {
        "type": "list",
        "items": [
          "17"
        ]
      },
      {
        "type": "text",
        "text": "De même, Cx étant toujours plus faible que Cz (de l'ordre de 10 pour les avions légers à 60 pour les planeurs de compétition), les représentations conservant la même échelle pour Cx et Cz sont illisibles."
      },
      {
        "type": "text",
        "text": "Afin de remédier à cet inconvénient, on a pris l'habitude de multiplier par 10 l'échelle des Cx, ce qui a pour effet de coucher les courbes vers la droite et d'améliorer les calculs graphiques."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.5 - Etablissement de la polaire"
      },
      {
        "type": "text",
        "text": "La polaire suivante est issue de valeurs réelles mesurées en soufflerie sur un profil d’aile déterminé."
      },
      {
        "type": "text",
        "text": "Incidence Cz Cx m 12 ° 62,5 37,5 9° 6° 3°"
      },
      {
        "type": "list",
        "items": [
          "18"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.6 - Points caractéristiques d'une polaire"
      },
      {
        "type": "text",
        "text": "Portance mini Traînée mini Finesse maxi Taux de chute mini Portance maxi Décrochage aile A C D E B F"
      },
      {
        "type": "list",
        "items": [
          "19"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.7 - Influence de l'allongement"
      },
      {
        "type": "text",
        "text": "L'allongement d'une aile rectangulaire, représenté par la lettre grecque  (lambda) ou A est égal au quotient de l'envergure B par la corde moyenne de l'aile l."
      },
      {
        "type": "text",
        "text": "A = B mètres / l mètres (Pour une aile non rectangulaire, la corde moyenne lm est égale au quotient de la surface par l'envergure. lm = S / B)."
      },
      {
        "type": "text",
        "text": "C’est aussi le quotient de l’envergure au carré par la surface de l’aile. A = B² / S"
      },
      {
        "type": "text",
        "text": "Pour les avions rapides, l’allongement est de l’ordre de 4 à 6, pour les avions classiques de 6 à 10 et pour les planeurs de 10 à 14."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.8 - Traînée totale"
      },
      {
        "type": "text",
        "text": "Si l'air ne possédait pas de viscosité, il n'y aurait pas de frottement entre l'aile et l'air, il n'y aurait que les forces de pression et de dépression. La résultante aérodynamique serait alors perpendiculaire au vent relatif dans le cas d'une aile d'allongement infini."
      },
      {
        "type": "text",
        "text": "La traînée Rx est l’addition géométrique de deux types de traînée distincts :"
      },
      {
        "type": "text",
        "text": "Traînée totale = traînée de profil + traînée induite Rx = Rxp + Rxi (pour information) A Le point de portance nulle A. Il est situé à l'intersection de la polaire et de l'axe des 100Cx et donne la valeur de l'angle d'incidence pour lequel 100Cz = 0 Cet angle est presque toujours négatif mais peut cependant pour certains profils atteindre des valeurs positives."
      },
      {
        "type": "text",
        "text": "B Le point de traînée minimum B. C’est le point pour lequel la tangente à la polaire est perpendiculaire à l'axe des 100 Cx. Une aile calée à cette incidence permet d'obtenir la plus grande vitesse en trajectoire horizontale (utilisé pour obtenir la vitesse maximum)."
      },
      {
        "type": "text",
        "text": "C Le point de finesse maximum C. C’est le point de tangence à la polaire qui passe par l'origine. Il correspond à l'incidence ou le rapport Cz / Cx (finesse max) est maximum. L'angle d'incidence à ce point est dénommé angle optimum."
      },
      {
        "type": "text",
        "text": "Cet angle d'incidence correspond à la vitesse que l’avion doit adopter par vent nul afin d'obtenir le maximum de rayon d'action (en cas de panne moteur par exemple)."
      },
      {
        "type": "text",
        "text": "Distance de plané = Hauteur x Finesse ou Finesse = Distance / Hauteur. D Le point de consommation mini ou de taux de chute mini D. Placé près de C mais entre C et E, ce point détermine l'angle pour lequel le rapport Cx 2 / Cz3 est minimal. Il se détermine par calcul ou par graphique et permet de connaître la vitesse à adopter pour avoir le temps maximum de vol appelé également endurance maximum ou autonomie maximale. C’est aussi la vitesse a adopté en configuration « Attente »."
      },
      {
        "type": "text",
        "text": "E Le point de portance maximum E. C’est le point ou la tangente à la polaire est parallèle à l'axe des 100 Cx. Ce point détermine la valeur de l'angle d'incidence et donc une vitesse déterminée permettant une portance maximum d’où son application pour les possibilités d'emport de charge maximum (ce point représente un intérêt pratique lorsque l'avion est lourdement chargé)."
      },
      {
        "type": "text",
        "text": "ATTENTION au-delà de ce point, il y a risque de décrochage aérodynamique 'point F)."
      },
      {
        "type": "list",
        "items": [
          "20"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.8.1 - La traînée de profil et parasite"
      },
      {
        "type": "text",
        "text": "La traînée de profil Rxp est due à la viscosité de l'air qui fait naître des forces de frottement dues à la pénétration de l'avion (donc de l'aile) dans l'air et des forces de dépression situées en arrière de l'aile par suite du léger décollement des filets d'air. S'y ajoute la qualité de surface de l'aile dénommée \"Traînée parasite\"."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.8.2 - La traînée induite due aux tourbillons marginaux"
      },
      {
        "type": "text",
        "text": "Pour une aile d'un allongement quelconque, l'extrados est soumis à des forces de dépression et l'intrados à des forces de pression."
      },
      {
        "type": "text",
        "text": "La traînée induite Rxi provient du fait qu'une aile ne possède pas un allongement infini. La surpression d’intrados tendant à compenser la dépression d’intrados, il s’ensuit un courant d’air du bas vers le haut initialement, puis par inertie, le mouvement étant déclenché, ce courant d’air effectue une rotation vers l'arrière d’où création des tourbillons situés en arrière du bout des ailes, ils s'appellent tourbillons marginaux."
      },
      {
        "type": "text",
        "text": "Autonomie maxi"
      },
      {
        "type": "list",
        "items": [
          "21"
        ]
      },
      {
        "type": "text",
        "text": "Ces tourbillons marginaux soumis également au courant d'air principal dû à la vitesse de déplacement de l'avion provoquent une déviation des filets d'air :"
      },
      {
        "type": "text",
        "text": "Sur l'extrados, ceux-ci convergent vers le plan de symétrie alors que sur l'intrados ils divergent vers les bords marginaux."
      },
      {
        "type": "text",
        "text": "Leur rencontre donne naissance, tout le long du bord de fuite, à une nappe de tourbillons appelés tourbillons libres."
      },
      {
        "type": "text",
        "text": "L'ensemble de ces tourbillons libres s'enroulent sur eux même dans un sens bien déterminé et donnent alors naissance aux tourbillons marginaux"
      },
      {
        "type": "text",
        "text": "Ces tourbillons marginaux sont extrêmement dangereux pour les avions qui les traversent, pouvant aller jusqu'à retourner un avion léger."
      },
      {
        "type": "text",
        "text": "Il est à noter qu'ils sont d'autant plus développés que la portance est importante (gros porteur à faible vitesse, par exemple au décollage ou à l'atterrissage)."
      },
      {
        "type": "text",
        "text": "Pour communiquer un mouvement à une masse d'air, il faut fournir une énergie dont la valeur est en rapport direct avec la masse et l'ampleur du mouvement."
      },
      {
        "type": "text",
        "text": "Ces tourbillons marginaux générés par l'avion consomment donc une partie de l'énergie de l'avion ce qui le ralentit.. Cette énergie ainsi utilisée et perdue est considérée comme une traînée dite traînée induite par le vol (Rxi) dont le coefficient de traînée induite peut s'exprimer par la formule :"
      },
      {
        "type": "text",
        "text": "Cxi = Cz 2 / (pi . A) = Cz² / 3,14 . (B²/S) (pour information complémentaire, non essentielle pour le BIA)"
      },
      {
        "type": "text",
        "text": "Cette formule n'est pas à connaître mais on voit tout de suite que le coefficient B²/S est présent au dénominateur, donc plus l'allongement est important, plus la traînée induite est petite."
      },
      {
        "type": "text",
        "text": "d'ou l'expression de la traînée induite : Rxi = ½. .S.V².Cxi"
      },
      {
        "type": "list",
        "items": [
          "22"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.9 - Déflexion et angle induit"
      },
      {
        "type": "text",
        "text": "Les expériences en soufflerie montrent qu'en arrière du bord de fuite et entre les tourbillons marginaux, la direction des filets d'air n'est plus parallèle au vent relatif (déflexion). Cet écoulement est d'autant plus infléchi que l'allongement est réduit et l'angle d'incidence grand."
      },
      {
        "type": "text",
        "text": "Les tourbillons marginaux donnent une masse d'air en rotation qui influe sur les tourbillons libres et les dirigent plus vers le bas qu'ils ne les entraînent."
      },
      {
        "type": "text",
        "text": "La direction des deux mouvements est d'autant plus vers le bas que les tourbillons marginaux sont rapprochés (faible allongement)."
      },
      {
        "type": "text",
        "text": "D'autre part, plus la portance est grande (100 Cz) plus la différence de pressions intrados / extrados est grande et donc les filets d'air déviés vers le bas en arrière du bord de fuite."
      },
      {
        "type": "text",
        "text": "Il existe alors un angle compris entre la direction des filets d'air en entrée (bord d'attaque) et la direction des filets en sortie (bord de fuite) ou la direction du vent relatif et celle du courant défléchi."
      },
      {
        "type": "text",
        "text": "Cet angle se nomme angle d’attaque (Aa)."
      },
      {
        "type": "text",
        "text": "La figure montre que l'air attaque l'aile avec une incidence diminuée, l'angle d'incidence est diminué par la compression de l’air qui dévie le vent relatif."
      },
      {
        "type": "text",
        "text": "L'angle d'incidence étant réduit, la portance Cz l'est également."
      },
      {
        "type": "text",
        "text": "Par ailleurs, en augmentant l'allongement, les tourbillons marginaux s'écartent entraînant ainsi trois conséquences :"
      },
      {
        "type": "list",
        "items": [
          "L'angle induit diminue",
          "La valeur de l'angle d'incidence est augmentée",
          "La valeur de la portance 100 Cz croît, ce qui signifie par exemple que la portance"
        ]
      },
      {
        "type": "text",
        "text": "100Cz = 80 pour un allongement de 8 est assurée avec une incidence légèrement inférieure à celle qui serait nécessaire pour un allongement de 5."
      }
    ]
  },
  {
    "id": "centre-de-poussee",
    "number": "5",
    "title": "Centre de poussee",
    "pages": [
      22,
      24
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "5.1 - Définition"
      },
      {
        "type": "text",
        "text": "Assimilable au Centre de gravité qui regroupe l’ensemble des masses d’un corps en un seul point, LE CENTRE DE POUSSÉE représente le point d’application de la résultante de toutes les forces de portance."
      },
      {
        "type": "text",
        "text": "Il est également le point d’application de la résultante aérodynamique et a pour particularité qu’il se déplace en fonction de l’incidence."
      },
      {
        "type": "text",
        "text": "Le centre de poussée est en général placé sur la corde de profil entre 30 % et 50% de la partie avant du profil pour les angles d'incidence courants."
      },
      {
        "type": "list",
        "items": [
          "23"
        ]
      },
      {
        "type": "text",
        "text": "La position du centre de poussée varie selon les éléments suivants :"
      },
      {
        "type": "list",
        "items": [
          "En palier, le Centre de poussée se situe à environ 40% du bord d‘attaque sur la"
        ]
      },
      {
        "type": "text",
        "text": "corde de profil."
      },
      {
        "type": "list",
        "items": [
          "Avec l’augmentation de l’angle d’incidence, déplacement du Centre de Poussée"
        ]
      },
      {
        "type": "text",
        "text": "vers l’avant jusqu’à l’angle de portance max (de 12 à 15°) où il se situe vers 30%."
      },
      {
        "type": "list",
        "items": [
          "Au-delà, déplacement rapide du Centre de Poussée vers l’arrière tendant à contrer"
        ]
      },
      {
        "type": "text",
        "text": "l’attitude du décrochage."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "5.2 - Profils particuliers"
      },
      {
        "type": "list",
        "items": [
          "Le type du profil",
          "L'angle d'incidence et le coefficient de moment"
        ]
      },
      {
        "type": "text",
        "text": "Cm > 0, il avance lorsque l'angle d'incidence augmente Cm = 0, il est invariant Cm < 0, il s'éloigne du bord d'attaque lorsque l'angle d'incidence augmente au-delà d’une certaine valeur"
      },
      {
        "type": "list",
        "items": [
          "L'allongement : quel que soit l'incidence, si l'allongement augmente, le"
        ]
      },
      {
        "type": "text",
        "text": "centre de poussée se rapproche du bord d'attaque Profil biconvexe symétrique La position du Centre de Poussée reste fixe en dessous de l’incidence de décrochage"
      },
      {
        "type": "list",
        "items": [
          "24"
        ]
      }
    ]
  },
  {
    "id": "foyer-d-un-profil",
    "number": "6",
    "title": "Foyer d’un profil",
    "pages": [
      24,
      25
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Le foyer d'un profil correspond à ce que nous pouvons définir comme '' le centre de gravité aérodynamique d'un profil '' ou le point de ce profil correspondant à un équilibre indifférent dans une veine d'air. (Voir schéma)"
      },
      {
        "type": "text",
        "text": "Si nous prenons un profil que nous perçons suivant les axes de A à H. Dans ces axes, les uns après les autres, nous introduisons une tige métallique et présentons le profil à un courant d'air (vent relatif)."
      },
      {
        "type": "text",
        "text": "De A jusqu'à C le profil dans le courant d'air prend l'état d'équilibre du cas 1 avec un amortissement relativement rapide des oscillations."
      },
      {
        "type": "text",
        "text": "De F à H le profil se retourne et prend l'état d'équilibre du cas 2 avec un amortissement relativement rapide des oscillations."
      },
      {
        "type": "text",
        "text": "En D le profil prend l'état d'équilibre du cas 1 avec des oscillations très lentes."
      },
      {
        "type": "text",
        "text": "En E le profil prend l'état d'équilibre du cas 2 avec des oscillations très lentes."
      },
      {
        "type": "text",
        "text": "Il existe un point situé sur l'axe X Y, point pour lequel l'état d'équilibre aérodynamique serait indifféremment le cas 1 ou le cas 2."
      },
      {
        "type": "text",
        "text": "Ce point est le foyer. Profil à double courbure La position du Centre de Poussée recule lorsque l’incidence augmente (autostable)."
      },
      {
        "type": "list",
        "items": [
          "25"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.1 - Position relative du centre de poussée et du foyer"
      },
      {
        "type": "text",
        "text": "Pour un profil à Cm positif, le foyer est toujours situé en avant du centre de poussée. Pour un profil à Cm positif, le moment du à la portance est toujours cabreur."
      },
      {
        "type": "text",
        "text": "Pour un profil à Cm nul, le foyer et le centre de poussée sont confondus. Pour un profil à Cm nul, le moment du à la portance est nul."
      },
      {
        "type": "text",
        "text": "Pour un profil à Cm négatif, le foyer est toujours situé en arrière du centre de poussée, d'ou effet piqueur."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "6.2 - Le foyer : un point de fixité des variations de portance"
      },
      {
        "type": "text",
        "text": "Les variations de portance dues aux turbulences, ascendances, … ont un point d’application FIXE situé au FOYER."
      },
      {
        "type": "text",
        "text": "Ces variations de portance doivent compenser les modifications du couple Portance dues aux changements d’incidence."
      }
    ]
  },
  {
    "id": "centrage-stabilite-maniabilite",
    "number": "7",
    "title": "Centrage – stabilité - maniabilité",
    "pages": [
      25,
      26
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "7.1 - Stabilité longitudinale"
      },
      {
        "type": "text",
        "text": "Le foyer est le point d'application des variations de portance et ne dépend que de la forme extérieure de l'aéronef. Il s'agit d'une donnée aérodynamique dont la position est pratiquement fixe."
      },
      {
        "type": "text",
        "text": "Pour que l'avion soit facilement pilotable, il faut qu'il soit stable c'est à dire qu'à un écart d'incidence, l’avion doit répondre par une action tendant à contrer cet écart (équilibre stable)."
      },
      {
        "type": "text",
        "text": "A l'incidence I1 correspond la portance Fz (équilibre de mg). Une augmentation d'incidence provoque une augmentation de portance Fz située en arrière du centre Rafales de vent Effet cabreur dû à l’action de la rafale sur l’aile (augmentation de l’incidence) Poids Variations de Portance équilibrantes Possibilité de réaction complémentaire avec la gouverne de profondeur, effet redresseur, (condition de maniabilité)."
      },
      {
        "type": "text",
        "text": "Marge statique (condition de stabilité) Portance"
      },
      {
        "type": "list",
        "items": [
          "26"
        ]
      },
      {
        "type": "text",
        "text": "de gravité (le foyer F) qui provoque un moment de tangage piqueur (couple piqueur) tendant à diminuer l'incidence."
      },
      {
        "type": "text",
        "text": "Si le centre de gravité est très en arrière, la même variation d'incidence provoque la même variation de portance mais sans équilibrage efficace du au très petit bras de levier entre ce centre de gravité et le foyer. L'avion n'est plus stable car il répond à une variation par une action tendant à augmenter cette variation."
      },
      {
        "type": "text",
        "text": "Plus la distance entre le centre de gravité et le foyer est importante, plus le moment résultant est important et mieux l'écart en incidence sera amorti. La distance du centre de gravité au foyer se nomme marge statique."
      },
      {
        "type": "text",
        "text": "Le centre de gravité d'un avion n'est pas fixe, il dépend notamment du plan de chargement et de la consommation d’essence durant le vol, il faut donc établir un calcul de chargement pour équilibrer l’avion en vol."
      },
      {
        "type": "text",
        "text": "Le centre de poussée, point d’application de la portance, avance (pour la majorité des profils) avec l’augmentation de l’incidence (jusqu’à un maxi, le décrochage ou il recule)."
      },
      {
        "type": "text",
        "text": "ÉQUILIBRAGE Possibilité de réaction avec la gouverne de profondeur, effet redresseur, (condition de maniabilité)."
      }
    ]
  },
  {
    "id": "a-l-equilibre",
    "number": "",
    "title": "A l’équilibre",
    "pages": [
      26,
      27
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Portance = Poids Traction = Traînée"
      },
      {
        "type": "text",
        "text": "Le foyer, point d’application des variations de portance, est fixe et doit être situé en arrière du centre de gravité."
      },
      {
        "type": "text",
        "text": "Poids Variations de Portance FOYER CENTRE DE GRAVITÉ Portance Marge statique (condition de stabilité) Traction Traînée"
      },
      {
        "type": "list",
        "items": [
          "27"
        ]
      },
      {
        "type": "text",
        "text": "Pour contrer les variations de couple et affiner le pilotage de l’avion, on utilise la gouverne de profondeur pour contrer ces variations de couple mais il existe une limite qui correspond aux butées de cette gouverne, et de ce fait une limite aux déplacements du centre de gravité."
      },
      {
        "type": "text",
        "text": "Ces limites sont impératives et nécessite de la part du pilote une action préventive de vérification avant le vol en utilisant les informations du manuel de vol (poids de l’équipage, bagages, carburant, place de l'équipage, place des bagages)."
      },
      {
        "type": "text",
        "text": "La position du centre de gravité est donnée en distance ou en pourcentage par rapport à une référence choisie par le constructeur de l'avion (en général la cloison pare-feu ou le bord d’attaque de l’aile)."
      },
      {
        "type": "text",
        "text": "Aspect opérationnel du centrage"
      },
      {
        "type": "text",
        "text": "Zone avant de la plage Zone arrière de la plage Stabilité augmente diminue Manœuvrabilité diminue augmente Braquage de la gouverne de profondeur plus important moins important Traînée augmente diminue Consommation augmente diminue"
      },
      {
        "type": "text",
        "text": "Poids = mg Portance"
      }
    ]
  },
  {
    "id": "centrage-arriere",
    "number": "",
    "title": "Centrage arrière",
    "pages": [
      27,
      27
    ],
    "blocks": [
      {
        "type": "text",
        "text": "d D Re Rz Poids = mg Portance"
      }
    ]
  },
  {
    "id": "centrage-avant",
    "number": "",
    "title": "Centrage avant",
    "pages": [
      27,
      27
    ],
    "blocks": [
      {
        "type": "text",
        "text": "d D Re Rz Si ascendance,"
      },
      {
        "type": "list",
        "items": [
          "augmentation d’incidence ;",
          "avancée du centre de poussée ;",
          "effet cabreur et augmentation du"
        ]
      },
      {
        "type": "text",
        "text": "moment (variation portance – d) ;"
      },
      {
        "type": "list",
        "items": [
          "effet compensateur important, d’ou :"
        ]
      },
      {
        "type": "text",
        "text": "STABILITÉ RENFORCÉE"
      },
      {
        "type": "list",
        "items": [
          "effort important sur empennage"
        ]
      },
      {
        "type": "text",
        "text": "donc limitation de l’amplitude du manche vers l’arrière d’où :"
      },
      {
        "type": "text",
        "text": "MANIABILITÉ LIMITÉE Si ascendance,"
      },
      {
        "type": "list",
        "items": [
          "augmentation d’incidence ;",
          "avancée du centre de poussée ;",
          "effet cabreur et variation portance"
        ]
      },
      {
        "type": "text",
        "text": "sans effet compensateur (d trop petit) ; d’où :"
      },
      {
        "type": "text",
        "text": "INSTABILITÉ"
      },
      {
        "type": "list",
        "items": [
          "pas d’appui sur empennage horizontal"
        ]
      },
      {
        "type": "text",
        "text": "moindre mouvement du manche se traduit par variation d’assiette important"
      },
      {
        "type": "text",
        "text": "MANIABILITÉ DÉCUPLÉE"
      }
    ]
  },
  {
    "id": "avion-incontrolable",
    "number": "",
    "title": "Avion incontrôlable",
    "pages": [
      27,
      29
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "28"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.2 - Stabilité latérale"
      },
      {
        "type": "text",
        "text": "Cette stabilité a pour effet de conserver la voilure dans un plan horizontal parallèle à la ligne d'horizon."
      },
      {
        "type": "text",
        "text": "Les oscillations d'un appareil, par rapport à ce plan, s'effectuent autour de l'axe de roulis et se traduisent par le balancement d'une aile sur l'autre. Le pilote, par l'intermédiaire des commandes de vol (ailerons) peut agir sur ce balancement."
      },
      {
        "type": "text",
        "text": "Le dièdre de la voilure intervient sur la stabilité latérale propre de l’appareil."
      },
      {
        "type": "text",
        "text": "SOUMIS A UNE ATTAQUE OBLIQUE OU A UNE PERTURBATION LATÉRALE, L’AVION DOIT ANNULER AUTOMATIQUEMENT L’INCLINAISON."
      },
      {
        "type": "text",
        "text": "Deux effets redresseurs améliorent la stabilité sur l’axe de ROULIS : Le système du dièdre permet de décomposer les portances de chaque demi-aile en 2 forces,."
      },
      {
        "type": "list",
        "items": [
          "29"
        ]
      },
      {
        "type": "text",
        "text": "Lorsque l'avion est parallèle à la ligne d'horizon, les portances sont identiques sur les lorsqu'une aile s'incline vers le bas, la portance de cette aile tend à augmenter, alors que la portance de l'autre demi aile tend à diminuer ce qui créer un couple de redressement."
      },
      {
        "type": "text",
        "text": "Selon le type de dièdre employé, les avions obtiennent des caractéristiques différentes."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.3 - Stabilité transversale (stabilité de route)"
      },
      {
        "type": "text",
        "text": "Un appareil est stable autour de l'axe de lacet ou de giration lorsqu'à la suite d'une perturbation l'écartant de sa trajectoire, il revient de lui-même à celle-ci. La stabilité transversale est assurée par une bonne répartition des surfaces verticales situées en avant du centre de gravité et des surfaces verticales situées en arrière du centre de gravité."
      },
      {
        "type": "text",
        "text": "Ces surfaces comprennent :"
      },
      {
        "type": "list",
        "items": [
          "La ou les surfaces de la"
        ]
      },
      {
        "type": "text",
        "text": "ou des dérives ;"
      },
      {
        "type": "list",
        "items": [
          "La projection verticale"
        ]
      },
      {
        "type": "text",
        "text": "du fuselage ;"
      },
      {
        "type": "list",
        "items": [
          "La projection verticale de"
        ]
      },
      {
        "type": "text",
        "text": "la surface portante (cas de dièdre prononcé)."
      }
    ]
  },
  {
    "id": "maniable",
    "number": "",
    "title": "Maniable",
    "pages": [
      29,
      31
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "30"
        ]
      },
      {
        "type": "text",
        "text": "L'ensemble de ses surfaces soumises à un vent relatif possède un point (foyer latéral) CPL auquel on peut appliquer la résultante générale de toutes les forces de poussée latérale."
      },
      {
        "type": "text",
        "text": "Le CPL peut occuper 4 positions par rapport au centre de gravité, en avant, en arrière, au- dessus ou au-dessous."
      },
      {
        "type": "text",
        "text": "Dans le cas du CPL en arrière du centre de gravité et d'un virage à droite, la Résultante des forces de poussée latérale appliquée au centre de poussée latérale, engendre un moment dont l'action redresse l'appareil. Il en serait de même .pour un virage à gauche."
      },
      {
        "type": "text",
        "text": "Par contre dans les autres cas, CPL en avant du centre de gravité, la même résultante engendrerait un moment dont l'action aurait tendance à renforcer le mouvement entamé, l'appareil se retournerait à 180°."
      },
      {
        "type": "text",
        "text": "Le Centre de Poussée Latérale doit toujours être situé en arrière du centre de gravité, plus la distance est grande plus le moment de retour sera important."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "7.3.1 - Influence de la flèche"
      },
      {
        "type": "text",
        "text": "La flèche contribue également à assurer la stabilité latérale"
      },
      {
        "type": "text",
        "text": "Lorsque l'appareil amorce un changement d'axe à droite, la demi-aile gauche parcourt plus de distance que la demi-aile droite donc sa vitesse est supérieure. La traînée de l'aile extérieure est donc plus forte qu’à l’intérieur d'ou création d'un couple redresseur tendant à remettre l'avion en ligne droite."
      },
      {
        "type": "text",
        "text": "Ce phénomène se retrouve lorsque le pilote incline l'avion pour virer, dans ce cas, cet effet indésirable se nomme le lacet inverse."
      },
      {
        "type": "list",
        "items": [
          "31"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "7.3.2 - Applications géométriques de l’aile"
      },
      {
        "type": "text",
        "text": "Qualités déduites de la forme de l'aile"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "7.4 - Stabilité spirale"
      },
      {
        "type": "text",
        "text": "La stabilité spirale est la caractéristique que possède un avion en virage de tendre à se redresser automatiquement. Cas également d’une rafale arrivant sur le côté d’un avion en vol."
      },
      {
        "type": "text",
        "text": "Les effets qui amplifient :"
      },
      {
        "type": "list",
        "items": [
          "Engagement en lacet dû à la qualité de stabilité de route (effet de girouette de"
        ]
      },
      {
        "type": "text",
        "text": "l’empennage vertical)."
      },
      {
        "type": "list",
        "items": [
          "Engagement en roulis dû à la rotation de l’avion autour de l’axe de lacet et donc"
        ]
      },
      {
        "type": "text",
        "text": "création d'un roulis induit par augmentation de vitesse de l’aile extérieure."
      },
      {
        "type": "text",
        "text": "Les effets qui redressent :"
      },
      {
        "type": "list",
        "items": [
          "Redressement en roulis dû à l’effet dièdre (aile intérieure a un angle d’incidence"
        ]
      },
      {
        "type": "text",
        "text": "plus grand que l’aile extérieure."
      },
      {
        "type": "list",
        "items": [
          "Amortissement du lacet dû au fait que l’aile extérieure va plus vite donc traîne plus"
        ]
      },
      {
        "type": "text",
        "text": "et limite en fin de compte la rotation de l'avion. Si les effets qui engagent sont prépondérants, l’avion est instable spirale, à l’inverse il est stable spirale."
      },
      {
        "type": "text",
        "text": "Trop de stabilité de route nuit à la stabilité spirale."
      }
    ]
  },
  {
    "id": "les-differentes-phases-de-vol",
    "number": "8",
    "title": "Les différentes phases de vol",
    "pages": [
      31,
      31
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "8.1 - Montée à angle constant"
      },
      {
        "type": "text",
        "text": "Le principe d’équilibre selon lequel il faut que le poids, la portance, la traînée et la traction aient une résultante nulle est valable en palier, mais aussi en montée ou en descente si l'avion vole à vitesse constante et en ligne droite."
      },
      {
        "type": "text",
        "text": "Pour que l'équilibre des forces soit visible, il faut décomposer le poids en deux composantes, l'une parallèle à la trajectoire Px et l'autre perpendiculaire à la trajectoire Pz."
      },
      {
        "type": "text",
        "text": "La composante Pz s'oppose à la portance Fz. La traction T s'oppose seule à la traînée Fx et à la composante du poids Fx. Le poids joue alors un rôle de frein (Px)"
      }
    ]
  },
  {
    "id": "supersoniques",
    "number": "",
    "title": "Supersoniques",
    "pages": [
      31,
      35
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "32"
        ]
      },
      {
        "type": "text",
        "text": "L'angle  (gamma) entre la trajectoire et l'horizontale se nomme pente de montée. Plus cet angle augmente, plus la composante Px s'accroît alors que Pz aura tendance à décroître."
      },
      {
        "type": "text",
        "text": "Ce phénomène peut se traduire par les mises en équations suivantes : Px = P sin  T = Fx + P sin  Fz = P cos "
      },
      {
        "type": "text",
        "text": "Il est à noter que lorsque l'angle  atteint 90°, la composante Pz est réduite à 0 et la traction doit s'opposer au poids et à la traînée (on dit que l'avion est accroché à son hélice)."
      },
      {
        "type": "text",
        "text": "A vitesse identique, une montée à angle constant demande plus de traction qu'un vol horizontal, il faut donc augmenter la puissance."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.2 - Montées particulières (Vz max et Pente max)"
      },
      {
        "type": "text",
        "text": "La vitesse d'un avion qui évolue dans trois dimensions peut se décomposer selon l'axe horizontal, on parle alors de vitesse horizontale Vx dans l'air et selon l'axe perpendiculaire au sol, on parle alors de vitesse verticale de montée ou de descente (Vz)."
      },
      {
        "type": "text",
        "text": "La notion de vitesse verticale de montée est importante lors de la phase qui suit un décollage (risque de collision avec un obstacle élevé), trois types de stratégies coexistent :"
      },
      {
        "type": "text",
        "text": "Montée normale à Vz normale préconisée par le constructeur et qui donne le meilleur compromis puissance du moteur, vitesse ascensionnelle, et refroidissement correct du moteur."
      },
      {
        "type": "list",
        "items": [
          "33"
        ]
      },
      {
        "type": "text",
        "text": "Montée au meilleur taux de montée appelée également Vy ou à vitesse optimum de montée (VOM). C’est une montée stabilisée à la Vz max qui permet d'atteindre une altitude donnée le plus rapidement possible (la notion de temps est prépondérante pour une altitude donnée)."
      },
      {
        "type": "text",
        "text": "Montée à pente max appelée également Vx ou à angle de montée optimale. C’est un décollage qui permet l'angle de montée le plus important (franchissement d'obstacle au décollage) à vitesse faible, incidence forte et trajectoire de montée forte (VZ forte)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.3 - Descente à angle constant"
      },
      {
        "type": "text",
        "text": "Dans ce cas, ou la trajectoire est dirigée vers le sol, deux cas peuvent se présenter:"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.3.1 - Descente avec traction"
      },
      {
        "type": "text",
        "text": "La composante du poids Px s’ajoute à la traction , les équations deviennent alors :"
      },
      {
        "type": "text",
        "text": "Px = P sin "
      },
      {
        "type": "text",
        "text": "Pz = P cos  T = Rx – P sin "
      },
      {
        "type": "text",
        "text": "La composante Px s’ajoute à la traction T, ce qui augmente la vitesse et entraîne en moulinet l’hélice. De plus le moteur n’a plus à fournir une puissance de même valeur, il est nécessaire de diminuer la Traction T afin d’éviter une vitesse de rotation excessive."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "8.3.2 - Descente sans traction (planée)"
      },
      {
        "type": "text",
        "text": "Dans ce cas, ou la traction n'existe plus (cas du planeur ou du moteur coupé), la direction du mouvement est une trajectoire rectiligne inclinée vers le bas que l'appareil suit en utilisant la composante du poids sur une trajectoire (Px) comme seule force motrice."
      },
      {
        "type": "text",
        "text": "A noter que dans le cas de l'avion avec moteur coupé, l'hélice en ''moulinet'' augmente considérablement la traînée."
      },
      {
        "type": "list",
        "items": [
          "34"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "8.4 - Réglages de croisière."
      },
      {
        "type": "text",
        "text": "Pour une meilleure fiabilité, l’avionneur recommande d’utiliser le moteur entre 55 et 75% de la puissance max."
      },
      {
        "type": "text",
        "text": "Pratiquement, les voyages s’effectuent suivant les réglages du type"
      },
      {
        "type": "list",
        "items": [
          "Croisière économique correspondant à 65% ou",
          "Croisière rapide se rapportant à 75% de la puissance max."
        ]
      },
      {
        "type": "text",
        "text": "Naturellement les deux facteurs décisifs du choix sont"
      },
      {
        "type": "list",
        "items": [
          "La consommation et donc l’autonomie pour l’un (65%) et",
          "La vitesse donc le temps de vol pour l’autre (75%)."
        ]
      },
      {
        "type": "text",
        "text": "Moteur 200 Cv – 242 litres – Même niveau FL 75 – Même réglage mixture (-100°F) 65% 75% 1485 km 1363 km 150 Kt 143 Kt 5 H 40 mn 4 H 54 mn"
      },
      {
        "type": "list",
        "items": [
          "35"
        ]
      }
    ]
  },
  {
    "id": "man-uvres-et-pilotage",
    "number": "9",
    "title": "Manœuvres et pilotage",
    "pages": [
      35,
      58
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Ce chapitre particulier, va permettre d'aborder les phases transitoires permettant de changer de trajectoire durant le vol."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.1 - Mise en montée"
      },
      {
        "type": "text",
        "text": "Passer du vol rectiligne horizontal à la montée exige la création d’un déséquilibre momentané engendré par une force dirigée vers le haut (celle-ci n’intervenant que pendant un temps très court, le temps de la modification de trajectoire). Ce couple cabreur devra disparaître ensuite lorsque l’avion sera sur sa nouvelle trajectoire de montée en état d’équilibre (vitesse et taux de montée stables)."
      },
      {
        "type": "text",
        "text": "Cette force déviatrice sera réalisée en augmentant temporairement la portance de l'avion par augmentation de l'incidence (action sur manche vers arrière, gouverne profondeur lève)."
      },
      {
        "type": "text",
        "text": "Pendant cette courte période de transition (appelée ressource), la portance est supérieure au poids, on nomme alors facteur de charge (n) le quotient de la portance sur le poids (RZ / P)."
      },
      {
        "type": "text",
        "text": "Dans le cas du vol horizontal, le poids est égal à la portance et le facteur de charge est égal à 1. Durant la phase de modification de trajectoire, la portance va être légèrement supérieure au poids, et le facteur de charge sera légèrement supérieur à 1, ce que le pilote sentira sous la forme d'un léger écrasement sur son siège (il subit son poids augmenté de l’effet de facteur de charge. Si n = 2 et le poids du pilote = 75 kg, son poids apparent dans le siège sera 75 x 2 = 150 kg)."
      },
      {
        "type": "text",
        "text": "On démontre que le facteur de charge est égal durant la ressource à :"
      },
      {
        "type": "text",
        "text": "n = 1 + (V2 / r x g) (pour information complémentaire)"
      },
      {
        "type": "text",
        "text": "ou V est la vitesse en m / s, g la pesanteur terrestre (9,81 m/s²) et r en mètres le rayon de courbure de la trajectoire. Le facteur de charge ainsi défini n'est que sa composante dirigée sur un axe perpendiculaire à la trajectoire et contenu dans le plan de symétrie de l'avion."
      },
      {
        "type": "list",
        "items": [
          "36"
        ]
      },
      {
        "type": "text",
        "text": "Comme l'assiette est maintenue et la trajectoire montante, l'angle d'incidence diminue progressivement pour retrouver une valeur proche de sa valeur initiale (mais plus grande car la vitesse de montée est inférieure à la vitesse de croisière, composante du poids s'est maintenant ajoutée à la traînée)."
      },
      {
        "type": "text",
        "text": "Pour rester sur cette trajectoire montante, il faut assurer l'équilibre des forces, en particulier il faut augmenter la traction afin de contrer la composante verticale du poids qui est apparue."
      },
      {
        "type": "text",
        "text": "En montée, la composante verticale vers le haut de la traction vient en appui de la portance donc la portance aérodynamique est inférieure à la portance en palier et donc au poids ; en conséquence dans cette phase de vol, le facteur de charge est inférieur à 1."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.2 - Mise en descente"
      },
      {
        "type": "text",
        "text": "Pour passer du vol rectiligne horizontal au vol en descente rectiligne, la méthode et les enchaînements sont similaires mais opposés, à savoir :"
      },
      {
        "type": "text",
        "text": "Diminution de la portance en diminuant l'incidence (couple piqueur par l'incrément de portance de la gouverne de profondeur), assiette à piquer, facteur de charge inverse (plus léger), puis nouvel équilibre des forces en réduisant la traction (phénomène de l'ajout de Px)."
      },
      {
        "type": "text",
        "text": "NOTA : En montée et en descente Rz = Pz = P Cos , donc Pz est toujours plus petit que P, il diminue lorsque  augmente. On a Rz < P alors qu'en vol rectiligne on a Rz = P."
      },
      {
        "type": "text",
        "text": "En descente, le facteur de charge est donc inférieure à 1. En pratique on vole moins vite en montée qu'en palier ou en descente et l'incidence doit être plus importante en montée pour créer une portance suffisante."
      },
      {
        "type": "text",
        "text": "Si l'avion pouvait monter à la verticale, il faudrait que la traction soit égale au poids plus la traînée. Ceci exigerait une puissance incompatible avec les possibilités offertes en aviation de loisir ou commerciale. Par ailleurs, pour éviter de conserver une portance qui serait alors nuisible, (puisque nous voudrions rester à la verticale), il faudrait que l'incidence soit négative afin de l’annuler."
      },
      {
        "type": "list",
        "items": [
          "37"
        ]
      },
      {
        "type": "text",
        "text": "De même si l'avion est en descente verticale, il faudrait que la traînée équilibre le poids ce qui n'est pas le cas des avions légers (peut-être de certains parachutes) et que l’incidence soit négative (respect de la trajectoire verticale)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.3 - Mise en virage"
      },
      {
        "type": "text",
        "text": "Le virage stabilisé horizontal est une incurvation permanente de la trajectoire dans le plan horizontal."
      },
      {
        "type": "text",
        "text": "Pour faire virer un avion, il faut lui appliquer une force déviatrice vers l'intérieur du virage."
      },
      {
        "type": "text",
        "text": "La force déviatrice (Fd) est obtenue en inclinant l'avion vers l'intérieur du virage, la portance, perpendiculaire au plan des ailes, va s'incliner vers l'intérieur du virage."
      },
      {
        "type": "text",
        "text": "Le poids de l'avion (P) en virage est augmentée du facteur de charge et prend une valeur appelée Poids apparent. Afin de rester en palier (donc en équilibre), il faut augmenter la portance soit par une augmentation d’incidence (manche légèrement en arrière) soit par une augmentation de vitesse (puissance moteur)."
      },
      {
        "type": "text",
        "text": "Le plan de symétrie de l’avion doit être tangent à la trajectoire (symétrie du vol donnée par les palonniers qui agissent sur la gouverne de direction)."
      },
      {
        "type": "text",
        "text": "Les filets d'air attaquent les demi-ailes de manière perpendiculaire et symétrique. La portance est ainsi répartie symétriquement sur les deux demi ailes, le virage est stable et symétrique."
      },
      {
        "type": "text",
        "text": "La valeur de la vitesse de décrochage augmente en fonction de l’inclinaison du virage et donc du facteur de charge."
      },
      {
        "type": "text",
        "text": "Vs en virage = Vs n Inclinaison N N Vs 0 ° 100 par exemple 30° 1,15 1.07 45° 1,4 1,18 60° 1,4 75°"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.4 - Le dérapage"
      },
      {
        "type": "text",
        "text": "CAS DE VIRAGE EXTRÊMEMENT DANGEREUX surtout à basse vitesse et basse altitude (dernier virage avant atterrissage par exemple)."
      },
      {
        "type": "text",
        "text": "La composante Pa du poids est décalée vers l'extérieur du virage, il s'agit alors d'un dérapage (action sur le palonnier trop importante du coté du virage), le virage est dit DÉRAPÉ ou EXTÉRIEUR."
      },
      {
        "type": "text",
        "text": "Le poids apparent n'est plus contenu dans le plan de symétrie, il est à l'extérieur du virage (comme la bille, indicateur de direction du poids apparent), de plus il a augmenté par rapport au virage symétrique (fig 2)."
      },
      {
        "type": "list",
        "items": [
          "38"
        ]
      },
      {
        "type": "text",
        "text": "Le plan de symétrie n'est plus tangent à la trajectoire air (sans vent), le nez de l'avion est nettement à l'intérieur de celle-ci, ce qui entraîne une attaque oblique des filets d'air sur l'aile extérieure en premier."
      },
      {
        "type": "text",
        "text": "La demi aile extérieure au virage subit une portance plus importante ce qui entraîne une augmentation de l'inclinaison et une forte tendance à piquer."
      },
      {
        "type": "text",
        "text": "D'autre part, l'avion étant en attaque oblique, il présente une traînée plus importante ce qui diminue la vitesse et la portance. L'avion a tendance à chuter et le rayon de virage se réduit de plus en plus."
      },
      {
        "type": "text",
        "text": "Si le pilote tend à limiter seulement la descente, la vitesse décroit et le mouvement ayant tendance à s'accroître (si aucune action n'est rapidement engagée) un décrochage dissymétrique brutal de la demi-aile intérieure et un départ en vrille (tout aussi brutal) dans le sens du virage."
      },
      {
        "type": "text",
        "text": "Les actions à entreprendre : PIED POUSSE LA BILLE (bille à l’extérieur du virage donc pied extérieur) MANCHE au Neutre"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.5 - Le dérapage intérieur"
      },
      {
        "type": "text",
        "text": "La composante Pa du poids est décalée vers l'intérieur du virage, il s'agit alors d'un dérapage intérieur (action sur le palonnier insuffisante du coté du virage), le virage est dit DÉRAPÉ INTERIEUR ou GLISSÉ."
      },
      {
        "type": "text",
        "text": "Le poids apparent Pa n'est pas contenu dans le plan de symétrie, il est à l'intérieur du virage comme la bille et est moins important qu'en virage symétrique à même inclinaison (bille au milieu)."
      },
      {
        "type": "text",
        "text": "Le plan de symétrie n'est plus tangent à la trajectoire air (sans vent), le nez de l'avion est nettement à l'extérieur de celle-ci."
      },
      {
        "type": "text",
        "text": "Les filets d'air attaquent obliquement les demi-ailes, l'aile intérieure en premier. De ce fait, la demi-aile intérieure subit une portance plus importante que la demi-aile extérieure masquée par le fuselage, et tend à faire revenir l'avion à l'inclinaison nulle."
      },
      {
        "type": "text",
        "text": "D'autre part, l'avion étant en attaque oblique il offre une traînée plus importante qui tend à le faire chuter (cette possibilité de chute est exploitée dans une figure particulière dénommée glissade contrôlée, mais très inconfortable pour les passagers)."
      },
      {
        "type": "text",
        "text": "La vitesse de décrochage est inférieure à celle qui aurait été rencontrée lors d'un virage symétrique à même inclinaison, par contre le décrochage, s'il intervient sera dissymétrique avec départ en vrille sur la demi aile extérieure (aile haute, le départ en vrille s'effectue toujours du coté ou le palonnier domine)."
      },
      {
        "type": "text",
        "text": "Il s'agit d'un équilibre instable, mais d’un danger moindre. Très inconfortable, l'avion tend de lui même à revenir à l'inclinaison nulle."
      },
      {
        "type": "text",
        "text": "Les actions à entreprendre : PIED POUSSE LA BILLE (bille à l’intérieur du virage donc pied intérieur) MANCHE DANS l'AUTRE SENS légèrement (vers l'extérieur du virage."
      },
      {
        "type": "list",
        "items": [
          "39"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.6 - Attente, Approche et Atterrissage"
      },
      {
        "type": "text",
        "text": "Ces trois phases cruciales permettent :"
      },
      {
        "type": "list",
        "items": [
          "de passer de la vitesse de croisière à la vitesse permettant de tenir en palier avec"
        ]
      },
      {
        "type": "text",
        "text": "la puissance minimum, c’est l’attente (utilisé en début de vent arrière);"
      },
      {
        "type": "list",
        "items": [
          "de préparer l’avion à l’atterrissage en sortant un cran de volets tout en maintenant"
        ]
      },
      {
        "type": "text",
        "text": "une trajectoire rectiligne en fin de vent arrière et en descente en étape de base, c’est l’approche (du milieu de la vent arrière à la finale);"
      },
      {
        "type": "list",
        "items": [
          "d’adopter une vitesse d’atterrissage avec volets sortis sur une trajectoire"
        ]
      },
      {
        "type": "text",
        "text": "descendante de 3° en général et d’amener l'avion au sol avec la meilleure sécurité possible, c'est en finale avant l'atterrissage."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.6.1 - Attente, Approche initiale et finale"
      },
      {
        "type": "text",
        "text": "La configuration attente s’effectue en début de vent arrière et permet de ralentir l’avion en palier à la hauteur du tour de piste (V = 1,45 de Vs)."
      },
      {
        "type": "text",
        "text": "L’approche initiale est une phase de préparation de l’avion à la phase d'atterrissage. Elle permet de limiter la vitesse afin de sortir les éléments de traînée (volets et train d'atterrissage) dans le cadre des limitations structurelles de l’avion. Néanmoins, cette vitesse doit être compatible avec la sécurité afin d’autoriser certaines évolutions nécessaires à l’atterrissage (virages, arrondi, …)."
      },
      {
        "type": "text",
        "text": "L'approche finale permet de maintenir l'avion dans l'axe de la piste sur un plan de descente de 5 % (l'avion descend de 5 m par tranche de 100 m), l'angle de ce plan étant alors de 3°. Ce choix a été dicté par des motifs de sécurité."
      },
      {
        "type": "text",
        "text": "En effet, compte tenu des différentes solutions adoptées pour sustenter l’avion (ailes hautes, médianes ou basses), la visibilité extérieure, au-dessus ou au- dessous, n’est pas toujours assurée et il existe un risque de collision en vol en se posant l’un sur l’autre en cas de pentes différentes."
      },
      {
        "type": "text",
        "text": "La vitesse à adopter en phase d’atterrissage doit être stabilisée, au plus bas vers 200 ft à 1,3 de la vitesse de décrochage. L’approche s’exécute à une vitesse de sécurité la plus faible possible, 30 % au-dessus de la vitesse de décrochage dans la configuration adoptée (volets 40°, 30°, 20°, …) donc à 1,3 de VSO si tous volets sortis, car risque de rafale et facteur de charge à l’arrondi donc vitesse de décrochage plus important."
      },
      {
        "type": "text",
        "text": "Cette vitesse doit permettre d’éviter un décrochage souvent mortel à cette altitude et de limiter la distance d’atterrissage et de roulage au cas ou la piste serait courte ou si le freinage se révélait inefficace. Dans cette phase de vol plus que dans toute autre, la règle d’or reste :"
      },
      {
        "type": "text",
        "text": "EN APPROCHE, LE CONTRÔLE DE LA VITESSE, C'EST LA VIE"
      },
      {
        "type": "list",
        "items": [
          "40"
        ]
      },
      {
        "type": "text",
        "text": "En conclusion, un avion en approche finale devra avoir :"
      },
      {
        "type": "list",
        "items": [
          "une vitesse constante (jamais moins de 1,3 de la vitesse de décrochage dans     la"
        ]
      },
      {
        "type": "text",
        "text": "configuration adoptée) ;"
      },
      {
        "type": "list",
        "items": [
          "un plan de 5 % (sauf conditions particulières indiquées sur la carte d’aérodrome) ;",
          "une puissance moyenne qui permet d'agir sur la vitesse si celle-ci vient à varier",
          "un taux de chute qui permette de maintenir le plan (Vz = Vsol x 5)."
        ]
      },
      {
        "type": "text",
        "text": "Lors de l'approche finale, beaucoup de paramètres sont à surveiller. Afin d'aider le pilote, des dispositifs techniques au sol existent pour vérifier la pente d'approche, il s'agit des systèmes dit PAPI et VASI, dispositifs lumineux situés en bout de piste et indiquant la position relative de l'avion par rapport à un plan de descente de 5 %."
      },
      {
        "type": "text",
        "text": "Les deux modèles les plus répandus fonctionnent comme suit."
      },
      {
        "type": "text",
        "text": "Ces deux modèles ne donnent qu'une indication sur le plan de descente, il existe d'autres systèmes (ILS, GCA, markers, etc.) qui donnent par ailleurs des indications sur la position, l'altitude, l’axe de piste."
      },
      {
        "type": "text",
        "text": "Le tableau suivant donne les altitudes à respecter en fonction de la distance à la piste. distance de 3,2 nautiques altitude de 1000 ft distance de 2 nautiques altitude de 600 ft distance de 1,6 nautique altitude de 500 ft distance de 1 nautique altitude de 300 ft distance de 0.5 nautique altitude de 150 ft"
      },
      {
        "type": "text",
        "text": "Ce tableau n’est pas très exploitable en vol car ne tenant pas compte du vent. Par contre, il existe un contrôle du taux de descente par rapport à la vitesse sol qui donne toute satisfaction (évaluation sans vent donc correction à apporter à la vitesse sol)."
      },
      {
        "type": "text",
        "text": "Vsol en Kt = V indiquée en Kt - Vitesse effectif du vent en Kt, et Vz en ft/mn = Vs en Kt X 5 (si descente sur plan de 5% = pente standard de 3°"
      },
      {
        "type": "text",
        "text": "Taux de chute en pieds / minute = vitesse sol en Kt x Plan en %"
      },
      {
        "type": "text",
        "text": "Par exemple, sans vent avec une vitesse de 60 Kt et un plan de 5%, le taux de chute doit avoir pour valeur : 60 x 5 soit 300 ft / mn."
      },
      {
        "type": "list",
        "items": [
          "41"
        ]
      },
      {
        "type": "text",
        "text": "Pour un vent de face de 20 Kt, la vitesse sol serait alors de 60 - 20 soit 40 Kt et le taux de chute devient 40 x 5 soit 200 ft /mn."
      },
      {
        "type": "text",
        "text": "Pour convertir les Kt en Km /h multiplier les Kt par 2 et enlever 10%. Exemple : 45 Kt donne 90 - 9 soit 81 Km /h."
      },
      {
        "type": "text",
        "text": "Pour convertir les Km/h en Kt, ajouter 10% et diviser par 2 exemple 68 Km /h donne (68 + 6) / 2 soit 37 Kt."
      },
      {
        "type": "text",
        "text": "Pour convertir les ft / mn en m / s, diviser les ft / mn par 200, inversement pour convertir les m/s en ft/mn, multiplier les m / s par 200."
      },
      {
        "type": "text",
        "text": "Précaution : lors d'une approche finale, si l'atmosphère est agitée (vent et rafales), on majore la vitesse de la moitié de la vitesse max du vent : pour 10 Kt, on ajoute 5 Kt, pour 20 Kt , 10 Kt et pour 30 Kt, 15 Kt ( majoration maximum de 20 Kt)."
      },
      {
        "type": "text",
        "text": "Par exemple, si le vent au sol est de 18 Kt avec rafales à 25 Kt, il faut majorer la vitesse de : 25 / 2 soit 12 Kt."
      },
      {
        "type": "text",
        "text": "PRATIQUEMENT : La méthode générale suivante permet de définir dans le tour de piste, le point de virage en fin de vent arrière et d’arriver sur une pente correcte en finale."
      },
      {
        "type": "text",
        "text": "En configuration approche, prendre le top lorsque l’on passe travers seuil de piste, compter une minute d’éloignement à 70 kt (vitesse sol supérieure car vent arrière) et virer à 90 ° vers l’étape de base."
      },
      {
        "type": "text",
        "text": "En étape de base, réduction de la puissance (déséquilibre des puissances utiles et nécessaire) avec deux objectifs : arrivée dans l’axe de la finale à 500 Ft/sol donc descente à 500 ft / mn environ (donc réduction de 500 t/mn au moteur)."
      },
      {
        "type": "text",
        "text": "Dernier virage à 500 ft dans l’axe, comme nous nous sommes éloignés en vent arrière de une minute du seuil, la descente en finale durera une minute (sans vent) avec un vario de 500 ft / mn."
      },
      {
        "type": "text",
        "text": "LES ÉLOIGNEMENTS ACADÉMIQUES EN FIN DE VENT ARRIÈRE"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.6.2 - Atterrissage"
      },
      {
        "type": "list",
        "items": [
          "42"
        ]
      },
      {
        "type": "text",
        "text": "L'atterrissage est la méthode employée afin d'amener l'avion, à partir d'une faible hauteur, en contact avec le sol avec une vitesse verticale la plus faible possible, puis de l'arrêter sur une distance minimum compatible avec la sécurité."
      },
      {
        "type": "text",
        "text": "Deux procédures d’atterrissage existent en fonction du type d’avion utilisé, soit avec un train classique (roulette de queue) ou avec un train tricycle."
      },
      {
        "type": "text",
        "text": "Quelque soit le type d'avion, l'atterrissage s'effectue toujours vent de face ou au maximum à 90° sur le travers."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.6.2.1 - Atterrissage train tricycle"
      },
      {
        "type": "text",
        "text": "L'atterrissage se déroule en cinq étapes principales : L'approche finale ou la vitesse doit être maintenue à 1,3 de la vitesse de décrochage."
      },
      {
        "type": "text",
        "text": "L'arrondi qui consiste à transformer la descente en une trajectoire parallèle au sol à environ 30 cm de hauteur. La vitesse d'approche 1,3 VSO est importante pour cette phase, car, trop rapide le palier de décélération risque d'être trop long (limite de longueur de piste), trop lente le palier sera trop court et la variation d'assiette trop rapide (risque de décrochage)."
      },
      {
        "type": "text",
        "text": "Le palier de décélération à 30 cm du sol, la puissance est totalement réduite. La diminution de puissance exige une transformation de la vitesse en une augmentation de l’incidence afin de rester sur une trajectoire quasi horizontale (le regard du pilote est loin en avant afin de rester sur l’axe de piste et de ne pas dépasser, par estimation du repère pare-brise, l’angle d’incidence de portance maxi)."
      },
      {
        "type": "text",
        "text": "Enfoncement et posé A la fin de la décélération, l'attitude de l'avion ne pouvant être augmenté sans risque de décrochage, la trajectoire va s’incurver vers le bas lentement jusqu’au toucher du train principal."
      },
      {
        "type": "text",
        "text": "Durant l'enfoncement, l'avion est à grande incidence, phase qui précède le décrochage, mais avec une bonne marge de sécurité puisque l'incidence d'atterrissage est rarement supérieure à 10°."
      },
      {
        "type": "text",
        "text": "Le train principal va se poser (problème de structure et de résistance, encaissement du choc garanti jusqu’à 600 ft / mn), les forces de frottement vont ralentir l’avion et le pilote devra continuer d’avoir une action sur le manche vers l’arrière afin de maintenir le nez de l’avion levé, la vitesse étant en décroissance. Le manche étant en position arrière maximum, la vitesse continuant à décroître, la roulette avant prend contact avec le sol."
      },
      {
        "type": "text",
        "text": "La décélération sol et roulage d'abord sur le train principal (freinage aérodynamique) puis sur la roulette de nez. Une fois la roulette posée, le système de freinage sol est utilisable si la longueur de piste l’exige, le contrôle d'axe s'effectue aux palonniers. Suite du roulage avec manche au neutre."
      },
      {
        "type": "text",
        "text": "Durant la phase de décélération, ne pas trop utiliser les palonniers car l'avion reste instable (portance faible mais présente) et risque de sortir de la piste."
      },
      {
        "type": "list",
        "items": [
          "43"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.6.2.2 - Atterrissage train classique"
      },
      {
        "type": "text",
        "text": "La technique d'atterrissage d'un avion à train classique ne diffère pas de celle d'un avion à train tricycle jusqu'au contact sol. Le posé se fait en principe sur ce type d'avion sur '' trois points '', c'est à dire que le train principal et la roulette de queue soient posés en même temps pour éviter de rebondir. De plus, après le posé, le manche doit être amené en arrière afin de limiter le passage en pylône lors d’une rafale (n'ayant pas de roulette de nez, l'avion peut passer sur le nez puis sur le dos."
      },
      {
        "type": "text",
        "text": "De plus, ce genre d'appareil présente la particularité d'être extrêmement sensible lors du roulage et toute action sur les freins doit être progressive, donc maintenir une vitesse faible."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.6.2.3 - L'influence des volets lors de l'atterrissage"
      },
      {
        "type": "text",
        "text": "La décélération depuis la vitesse de croisière jusqu'à la vitesse de sortie des traînées (vitesse d'attente) permet de sortir entre autres les volets. Ceux ci possèdent en général plusieurs positions, il est alors intéressant de ne sortir que la première partie de ceux-ci afin de privilégier la portance sur la traînée."
      },
      {
        "type": "text",
        "text": "La sortie des pleins volets n’interviendra qu’en finale afin de garder une bonne manœuvrabilité avant cette phase de vol et en vue de diminuer encore la vitesse de posé."
      },
      {
        "type": "text",
        "text": "Par ailleurs, une traînée est toujours facile à sortir mais beaucoup plus difficile à rentrer car on assiste à un décollement des filets d’air sur l’extrados et donc à un risque de décrochage."
      },
      {
        "type": "text",
        "text": "La seconde influence des volets est la modification de l'équilibre de l'avion par création d'un couple qui peut être cabreur ou piqueur selon le type d'avion."
      },
      {
        "type": "text",
        "text": "Le taux de chute volets plein sortis sera toujours plus grand que volets sortis 10°."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.6.2.4 - La décision d'atterrissage"
      },
      {
        "type": "text",
        "text": "En approche finale, juste avant l'atterrissage (aux alentours de 300 ft), l'avion doit avoir la bonne vitesse (1,3 VSO), être aligné sur l'axe de la piste, être sur le bon plan de descente (3° soit 5%). La piste doit être libre (radio) et avoir reçu l'autorisation d'atterrir si terrain contrôlé. Les paramètres de l'avion bien établis, stabilisés et contrôlés en permanence."
      },
      {
        "type": "list",
        "items": [
          "44"
        ]
      },
      {
        "type": "text",
        "text": "En résumé : Volet braqués à la demande en fonction du vent Train sorti Vitesse à 1,3 Vitesse de décrochage dans la configuration choisie (volets, 10° , 20° , 30° ou plus) + 5 Kt (si vent de 10 à 20 Kt) ou 10 Kt si vent de 20 à 30 Kt) Axe de la piste maintenu Plan de descente à 3° par rapport au point d’impact (sans vent Vz = Vsol x 5)"
      },
      {
        "type": "text",
        "text": "Le passage de l'approche finale à la phase d'arrondi dépend de la capacité du pilote à poursuivre en toute sécurité l’atterrissage (maintien des paramètres , de la trajectoire et du décrabage de l’avion sur l’axe de la piste)."
      },
      {
        "type": "text",
        "text": "Suit la prise de décision :"
      },
      {
        "type": "text",
        "text": "ATTERRISSAGE ou APPROCHE INTERROMPUE (REMISE DE GAZ)"
      },
      {
        "type": "text",
        "text": "L'atterrissage consiste à poursuivre la finale jusqu’au touché final. L’aide des volets sera fonction des conditions météorologiques du moment et notamment du vent, de sa force et de sa direction. Attention aux manœuvres avec pleins volets, plus délicates, avion moins maniable et vitesse plus faible donc plus proche du décrochage."
      },
      {
        "type": "text",
        "text": "L’approche interrompue, improprement appelée remise de gaz, consiste à rompre la descente, si un danger imminent se présente, ou si les paramètres : Vitesse, Axe, Pente, ne sont pas établis, en prenant une assiette de montée, puis en mettant la pleine puissance (éliminer le réchauffage du carburateur) et enfin rentrer cran par cran les volets dès que (et pas avant) le variomètre soit devenu positif."
      },
      {
        "type": "text",
        "text": "La trajectoire de montée peut s’effectuer par une \"Baïonnette\" sur le côté de la piste afin de libérer l’axe de piste (obligation réglementaire pour tout atterrissage donc si urgence déclarée derrière par un autre avion ou finale très proche d'un autre avion, ce sera une bonne solution)."
      },
      {
        "type": "list",
        "items": [
          "45"
        ]
      },
      {
        "type": "text",
        "text": "LES VOLETS PLEIN SORTIS = REMISE DE GAZ DIFFICILE."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.7 - Décollage et montée initiale"
      },
      {
        "type": "text",
        "text": "Le décollage et la montée initiale consistent à mettre l'avion en vol, après avoir acquis une certaine vitesse appelée vitesse de rotation."
      },
      {
        "type": "text",
        "text": "Un palier d’accélération permet ensuite à un mètre du sol d’accélérer et d’acquérir la vitesse de montée initiale recommandée par le constructeur."
      },
      {
        "type": "text",
        "text": "Les processus d’exécution diffèrent légèrement selon qu'il s'agit d'un appareil à train classique ou d'un appareil à train tricycle."
      },
      {
        "type": "text",
        "text": "Différents types de décollage : suivant longueur de piste ou clairance de Vz max."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.7.1 - Décollage et montée initiale tricycle"
      },
      {
        "type": "text",
        "text": "Après avoir effectué les vérifications et assuré la sécurité, les phases sont les suivantes:"
      },
      {
        "type": "text",
        "text": "Alignement de l'avion sur l'axe de la piste, roulette de nez bien droite, manche dans le vent et palonnier inverse pour limiter l’effet de girouette (vent de travers). La vérification du compas intervient également sur la piste compte tenu de la connaissance de la direction magnétique de la piste."
      },
      {
        "type": "text",
        "text": "Mise en puissance (roulage) progressive et à fond afin de prendre de la vitesse. Manche au neutre dans le vent. La traction doit vaincre l'inertie de l'appareil, le frottement des roues et la traînée qui s'accroît en fonction de la vitesse."
      },
      {
        "type": "text",
        "text": "Décollage ou Rotation Elle s'effectue dès que la vitesse permet une portance légèrement supérieure au poids de l'avion, l'angle d'incidence augmente, la traînée également, la vitesse diminue d’où petite action sur le manche vers l’avant pour accélérer jusqu’à la vitesse de montée initiale."
      },
      {
        "type": "text",
        "text": "Montée initiale, durant cette phase, l'assiette de montée initiale est légèrement supérieure à celle de la montée stabilisée, la vitesse étant légèrement inférieure."
      },
      {
        "type": "text",
        "text": "Montée normale est effectuée à partir de 300 ft lorsque l'altitude de sécurité est atteinte."
      },
      {
        "type": "list",
        "items": [
          "46"
        ]
      },
      {
        "type": "text",
        "text": "La Distance de roulage est définie comme la distance entre le début de l’accélération sur la piste jusqu’à la rotation."
      },
      {
        "type": "text",
        "text": "La Distance de décollage est définie comme étant la distance entre le début de l’accélération jusqu’au passage des 15 m au-dessus du sol."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.7.2 - Décollage et montée initiale classique"
      },
      {
        "type": "text",
        "text": "Sur un appareil de ce type, le processus de base reste identique, il diffère après la mise en puissance car il faut assurer la mise en ligne de vol (diminution de traînée par action du manche vers l’avant et donc de la longueur de roulement)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.7.3 - Les paramètres influant sur le décollage"
      },
      {
        "type": "text",
        "text": "Tous les décollages s’effectuent en priorité face au vent ou tout au moins avec un vent ne dépassant pas 90°."
      },
      {
        "type": "text",
        "text": "Plusieurs facteurs vont influencer les distances de décollage, naturellement s’il s’agit de pistes en herbe ou en dur, montante ou descendante."
      },
      {
        "type": "text",
        "text": "Le poids, la température, l’altitude du terrain, les volets, la qualité de roulement sont autant d’éléments qu’il faudra prendre en compte afin de décider, en toute sécurité et en tenant compte des impondérables associé, si la faisabilité de cette phase de vol est réalisable ou si elle rentre dans les conditions limitatives d’emploi."
      },
      {
        "type": "list",
        "items": [
          "47"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.8 - Facteur de charge"
      },
      {
        "type": "text",
        "text": "Dans certaines configurations de vol, un avion peut subir des augmentations de charge et donc des augmentations de contrainte au niveau de sa résistance structurale."
      },
      {
        "type": "text",
        "text": "Le poids P est toujours dirigé vers le bas, alors que la portance est toujours perpendiculaire à l'aile. En virage s'ajoute alors la force centrifuge Fc qui permet de composer les forces (Fc et P) pour donner le poids apparent Pa."
      },
      {
        "type": "text",
        "text": "Ce poids apparent, opposé à la portance est plus grand que le poids réel P. En virage la portance doit donc augmenter. Le poids apparent Pa est d'autant plus grand que le virage est incliné"
      },
      {
        "type": "text",
        "text": "Le facteur de charge étant lié à l'inclinaison, il augmente avec celle ci et est donné par la formule :"
      },
      {
        "type": "text",
        "text": "La relation entre le poids de l'avion et le poids apparent se nomme FACTEUR DE CHARGE Facteur de charge = n = 1/ (cosinus de l’inclinaison)"
      },
      {
        "type": "list",
        "items": [
          "48"
        ]
      },
      {
        "type": "text",
        "text": "L’inclinaison est l'angle entre P et Pa. Approche mentale par la formule empirique sinus angle = (angle x 0,01 + 0,2) et cosinus angle = sinus angle complémentaire donc = sinus de (90 - angle)."
      },
      {
        "type": "text",
        "text": "Exemple : Sin 30 ° = (30 x 0,01) + 0,2 = 0,3 + 0,2 = 0,5"
      },
      {
        "type": "text",
        "text": "Cos 30° = sin (90° - 30°) = sin 60° = 0.6 + 0.2 = 0,8"
      },
      {
        "type": "list",
        "items": [
          "49"
        ]
      },
      {
        "type": "text",
        "text": "A partir de cette formule, il est possible de connaître le poids apparent d'un avion ou de son pilote. Ainsi un pilote de 60 Kg aura un poids apparent de 69 Kg à 30° d'inclinaison et de 120 Kg à 60°."
      },
      {
        "type": "text",
        "text": "A 60°, le Pa double, et l'aile devra le porter. Le Pa ne peut augmenter indéfiniment car il met en cause la résistance structurelle de l'avion. Les avions sont classés en trois catégories :"
      },
      {
        "type": "text",
        "text": "Catégorie normale N facteur de charge limite + 3,8 - 1,52 Catégorie utilitaire U facteur de charge limite + 4,4 - 1,76 Catégorie acrobatique A facteur de charge limite + 6 - 3"
      },
      {
        "type": "text",
        "text": "Le même avion peut appartenir à deux catégories, exemple catégorie N lorsqu'il est chargé avec réservoir plein et devenir catégorie U avec moins de passagers et réservoirs demi plein."
      },
      {
        "type": "text",
        "text": "Remarques importantes : Pour un avion catégorie N, l'inclinaison limite en virage continu est d'environ 75°, au-delà l'aile risque de casser. Pratiquement, il est rare de dépasser 60° d'inclinaison avec les avions de voyage de l’aviation légère."
      },
      {
        "type": "text",
        "text": "On peut obtenir des facteurs de charge importants en effectuant une ressource. Dans ce cas il est difficile de connaître le facteur de charge subi, sauf à utiliser un accéléromètre, appareil spécialisé et présent dans les avions de voltige."
      },
      {
        "type": "text",
        "text": "Par temps turbulent une rafale verticale peut également augmenter le facteur de charge. Les recommandations portent donc sur l’utilisation de vitesses pas trop faibles afin d’éviter le décrochage mais pas trop forte pour ne pas dépasser la vitesse maxi en atmosphère perturbée (VNO)."
      },
      {
        "type": "text",
        "text": "Les facteurs de charge peuvent être négatifs lorsque l'avion évolue sur le dos ou si le pilote pousse fortement sur le manche. Prudence, car la résistance structurelle est moins importante en vol inversé."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.9 - Influence du facteur de charge sur le décrochage"
      },
      {
        "type": "text",
        "text": "Dès que le facteur de charge devient supérieur à 1, lors d'une ressource ou d'un virage, la portance a augmenté. Du point de vue de la vitesse de décrochage, tout se passe comme si votre avion était resté à l'horizontale mais avec un poids qui aurait augmenté."
      },
      {
        "type": "text",
        "text": "La vitesse de décrochage augmente avec le facteur de charge. Sous facteur de charge n, l'équation de sustentation peut s'écrire :"
      },
      {
        "type": "text",
        "text": "n P = Rz, ou encore n mg = 1/2 r V2 S Cz, ce qui peut s'exprimer comme : V = ((2 n mg) / (r S Cz)) 1/2"
      },
      {
        "type": "list",
        "items": [
          "50"
        ]
      },
      {
        "type": "text",
        "text": "La vitesse de décrochage est donc fonction de :"
      },
      {
        "type": "text",
        "text": "n facteur de charge augmente avec la racine carrée du facteur de charge mg poids de l'appareil augmente avec la racine carrée du poids r masse volumique de l'air diminue avec la racine carrée de la masse volumique de l'air S surface de l'aile diminue avec la racine carrée de la surface de l'aile Cz coefficient de portance diminue avec la racine carrée du coefficient de portance"
      },
      {
        "type": "text",
        "text": "Un avion décrochant en lisse et en vol horizontal à 90 Km/h par exemple verra sa vitesse de décrochage portée à 127 Km/h à 60° d’inclinaison, ce qui est le cas des avions de voyage courants."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.10 - Le rayon du virage"
      },
      {
        "type": "text",
        "text": "Le rayon d’un virage symétrique mais non standard effectué par l'avion est fonction de l'inclinaison, et également fonction de la vitesse de l'avion, on calcule qu'il est égal à :"
      },
      {
        "type": "text",
        "text": "r = (Ctg  . V2) / g r = (V2 / g) . tg "
      },
      {
        "type": "text",
        "text": "avec  angle d'inclinaison, V vitesse de l'avion en m/s et g = 9,81 m/s². Ainsi un avion à 45° d'inclinaison aura un rayon de virage de 140 m à 72 Kt et de 390 m à 120 Kt."
      },
      {
        "type": "text",
        "text": "En virage symétrique mais non standard R en m = (0,5V)² / 10 + 10% avec V en Kt."
      },
      {
        "type": "text",
        "text": "Si le virage est standard (360° / 2 mn), la valeur du rayon est approximativement : Rayon de virage en Mètres = V Kt x 10 ou Rayon de virage en Nm = V Kt /200."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.11 - Accélération et décélération"
      },
      {
        "type": "text",
        "text": "Nous avons étudié le cas du vol en ligne droite, en virage en montée et en descente mais avec, à chaque fois, une vitesse constante."
      },
      {
        "type": "text",
        "text": "Que va- t il se passer si l'on désire faire varier la vitesse de l'avion, c'est à dire accélérer ou décélérer ?"
      },
      {
        "type": "text",
        "text": "Pour simplifier, nous n'envisagerons que les cas en vol rectiligne horizontal. Dans ce cas précis, il faut noter que l'incidence est égale à l'assiette car il n'existe pas de composante angulaire entre l'horizontale et la trajectoire. Le raisonnement resterait le même en cas de montée ou de descente."
      },
      {
        "type": "text",
        "text": "En palier, l'équilibre des forces lors du vol est tel que : Rx = T et Rz = P, pour accélérer il suffit alors d'augmenter T (plus de gaz) afin de rompre l'équilibre et d'obtenir une résultante des forces dirigée vers l'avant."
      },
      {
        "type": "text",
        "text": "La vitesse va augmenter, mais la traînée également jusqu'à trouver un nouvel équilibre avec une nouvelle vitesse supérieure et constante."
      },
      {
        "type": "text",
        "text": "La portance va augmenter également et provoquer une déviation de trajectoire vers le haut, déviation qu'il faudra contrer par une diminution de l'incidence obtenue par une légère action sur le manche vers l'avant (assiette à piquer)."
      },
      {
        "type": "list",
        "items": [
          "51"
        ]
      },
      {
        "type": "text",
        "text": "Pour décélérer, il faudra procéder de la même manière, les effets étant alors inversés (diminution de puissance et diminution de traînée jusqu'à l'équilibre; diminution de portance contrée par une augmentation d’incidence, assiette à cabrer)."
      },
      {
        "type": "text",
        "text": "La vitesse maximum en palier sera alors obtenue lorsque la puissance maxi sera affichée et la vitesse minimale lorsque l'incidence de Cz maximal sera atteinte."
      },
      {
        "type": "text",
        "text": "Toutes les actions d'accélération et de décélération sont effectuées par préaffichage (affichage de la puissance moteur permettant d'obtenir la vitesse et l'équilibre désiré)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.12 - Hypersustentation"
      },
      {
        "type": "text",
        "text": "Le degré de sécurité d'un avion se mesure généralement par son aptitude à voler à basse vitesse (atterrissage et décollage court). Le principe d'abaissement de la vitesse de décrochage est relativement simple, il suffit d'augmenter la surface de l'aile ou sa courbure."
      },
      {
        "type": "text",
        "text": "(formule de la portance V, S, , Cz ). En agrandissant la surface de l'aile on accroît la portance de manière évidente, par contre en cambrant l'aile par des dispositifs hypersustentateurs, on modifie l'écoulement du flux d'air en le déportant vers le bas et ainsi on accroît le Cz et également le Cx."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.13 - Différents types de systèmes hypersustentateurs de bord de fuite"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.13.1 - Les volets normaux"
      },
      {
        "type": "text",
        "text": "Les plus simples et également les plus efficaces, une portion complète du bord de fuite est déployée vers le bas augmentant ainsi la courbure de l'aile."
      },
      {
        "type": "text",
        "text": "(Avions légers de type DR400, Piper Warrior, Beech Bonanza)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.13.2 - Les volets d'intrados"
      },
      {
        "type": "text",
        "text": "Le volet d'intrados consiste en une plaque plate se déployant de l'intrados au niveau du bord de fuite. Il génère un peu plus de portance qu'un volet standard."
      },
      {
        "type": "text",
        "text": "L'un des ses défauts majeur est qu'il génère également une forte traînée même pour de faibles déplacements, en effet seul le flux d'air de l'intrados est dévié alors que le flux d'air sur l'extrados reste stable. Cette perturbation entraîne une divergence de flux au niveau du bord de fuite et la création d'une turbulence de sillage. Cependant ces types de volets sont idéaux pour des ailes fines hautes performances disposant de peu de places pour loger les mécanismes liés aux manoeuvres des volets (Spitfire, Cessna 310). Avec un appareil équipé de ce genre de volets, l’apport d’une puissance est nécessaire pendant la phase atterrissage."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.13.3 - Les volets à simple fente"
      },
      {
        "type": "text",
        "text": "Similaires aux volets standard, lors de leur sortie, une fente de largeur calculée, se crée entre le bord de fuite de l'aile et le bord d'attaque du volet."
      },
      {
        "type": "text",
        "text": "Cette fente permet à l'air sous haute pression de l'intrados de s'engouffrer pour accroître le flux passant sur l'extrados du volet. Cette technique permet d'augmenter considérablement la portance aux grandes incidences. Les effets cumulés de fente, de l'accroissement de la"
      },
      {
        "type": "list",
        "items": [
          "52"
        ]
      },
      {
        "type": "text",
        "text": "courbure de l'aile, et de l'augmentation de surface de l'aile permettent à ces volets de générer une portance plus importante que pour des volets standards ou d'intrados."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.13.4 - Le volet à fentes multiples"
      },
      {
        "type": "text",
        "text": "Ce volet est une amélioration du volet à fente unique. A mesure que le volet se déploie, une sorte de petite aile, ou déflecteur vient se positionner entre le bord de fuite de l'aile et le bord d'attaque du volet."
      },
      {
        "type": "text",
        "text": "Le déflecteur possède deux fonctions, il crée une seconde fente et de part sa forme il dirige le flux d'air avec une grande efficacité."
      },
      {
        "type": "text",
        "text": "Ce type de volet à double fente est une méthode exceptionnelle pour augmenter la portance à cause de la complexité mécanique liée à sa cinématique. Il est cependant utilisé sur les gros porteurs de type Boeing 707 et dans sa version à double déflecteur soit triple fente sur les Boeing 727."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.13.5 - Les volets de type Fowler"
      },
      {
        "type": "text",
        "text": "Les volets Fowler sont les dispositifs hypersustentateurs de bord de fuite les plus efficace mais sont complexes et chers."
      },
      {
        "type": "text",
        "text": "Lorsque le volet est rétracté il fait partie intégrante de l'aile et se déploie en deux étapes."
      },
      {
        "type": "text",
        "text": "Lors de l'étape une, il commence par reculer exactement dans le prolongement de l'aile pour en augmenter la corde et la surface, ce qui permet l'accroissement de portance maximal par rapport à l'accroissement de traînée (cette première étape suffit en général pour les phases de décollage)."
      },
      {
        "type": "text",
        "text": "Lors de la seconde étape, le volet est dévié vers le bas ce qui a pour effet d'accroître la courbure de l'aile et donc la portance."
      },
      {
        "type": "text",
        "text": "En position totalement sortie, le volet Fowler génère plus de portance et moins de traînée qu'un volet à fente de taille similaire. Du fait de son coût et de sa complexité, ce type de volets est peu utilisé sur les avions légers."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.14 - Différents types de systèmes hypersustentateurs de bord d'attaque"
      },
      {
        "type": "text",
        "text": "Bien que plus récents que les dispositifs de bords de fuite, les dispositifs de bord d'attaque initialement montés sur les gros porteurs, sont apparus sur les avions légers."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.14.1 - Les volets Krüger"
      },
      {
        "type": "text",
        "text": "Les volets Krüger consistent en une plaque placée au raz du bord d'attaque à l'intrados. Lorsque cette plaque est déployée, la cambrure de l'aile augmente repoussant ainsi une partie de l'air passant sous l'intrados vers l'extrados Cette déviation de l'air a pour conséquence d'augmenter la portance et donc de diminuer la vitesse de décrochage."
      },
      {
        "type": "text",
        "text": "Ce bec de bord d'attaque est pratiquement toujours déployé simultanément avec les volets de bord de fuite et ne possède pas de position intermédiaire (sorti ou rentré) Il peut s'étendre sur toute la longueur de l'aile ou être limité à une partie de l'aile, généralement l'emplanture de l'aile."
      },
      {
        "type": "list",
        "items": [
          "53"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.14.2 - Les becs de bord d'attaque basculant"
      },
      {
        "type": "text",
        "text": "Ces becs peuvent pivoter vers le bas devant le bord d'attaque et augmentent ainsi la courbure de l'aile. Ce dispositif est mis en action aux grands angles."
      },
      {
        "type": "text",
        "text": "Cette augmentation de courbure permet aux flux d'air en amont d'infléchir progressivement leur trajectoire afin de s'écouler plus près de l'extrados, réduisant ainsi le décrochage des filets d’air et limitant la couche limite."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.14.3 - Le bec de bord d'attaque"
      },
      {
        "type": "text",
        "text": "Le bec de bord d'attaque est une petite aile auxiliaire placée en avant du bord d'attaque."
      },
      {
        "type": "text",
        "text": "Lorsqu'il est déployé (à basse vitesse donc forte incidence, le bec ouvre une fente ayant essentiellement les mêmes fonctions que les fentes du bord de fuite, canaliser l'air sous pression de l'intrados vers l'extrados pour reculer le décrochage et augmenter la portance."
      },
      {
        "type": "text",
        "text": "Cependant, étant donné que le bec est une surface portante, il vient s'ajouter à la surface de l'aile donnant une meilleure portance aux grands angles. Les becs de l’Hélio-Courier sont si efficaces, qu'ils génèrent à eux seuls la majeure partie de la portance aux faibles vitesses."
      },
      {
        "type": "text",
        "text": "Le Rallye profite également de cette technique et possède un décrochage extrêmement doux."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "9.14.4 - Les fentes fixes"
      },
      {
        "type": "text",
        "text": "La notion d'aile à fente n'est pas nouvelle, c'est seulement la fente de bord d'attaque qui est une innovation récente."
      },
      {
        "type": "text",
        "text": "Un avion de type Stinson-Voyager ou Globe Swift possède une fente fixe d'environ 60 cm de long sur la partie extérieure du bord d'attaque de chaque aile"
      },
      {
        "type": "text",
        "text": "Les fentes fixes retardent le décrochage et du fait de leur position en avant des ailerons augmentent la manœuvrabilité en roulis aux faibles vitesses. Elles ne sont cependant pas adaptées aux avions modernes car elles deviennent pénalisantes dès que la vitesse s'élève."
      },
      {
        "type": "text",
        "text": "QUELQUES PRÉCAUTIONS :"
      },
      {
        "type": "list",
        "items": [
          "Roulage et essais moteur volets rentrés (projection de boue et de gravier) et Réchauffage"
        ]
      },
      {
        "type": "text",
        "text": "carburateur fermé afin d'aspirer l'air pour le carburateur à travers un filtre."
      },
      {
        "type": "list",
        "items": [
          "Eviter le roulage dans les flaques d'eau par temps de gel (givrage des commandes de"
        ]
      },
      {
        "type": "text",
        "text": "volet)."
      },
      {
        "type": "list",
        "items": [
          "Après décollage, ne rentrer les volets qu'une fois l'effet de sol inactif et la vitesse supérieure"
        ]
      },
      {
        "type": "text",
        "text": "à la vitesse de décrochage volets rentrés (bas de l'arc vert)."
      },
      {
        "type": "list",
        "items": [
          "Attention au couple piqueur lors de la rentrée et de la sortie des volets.",
          "En cas de fort vent, ne pas utiliser les volets tous sortis.",
          "Facteur de charge autorisé plus faible avec volets sortis.",
          "Ne sortir complètement les volets que lorsque l'atterrissage est certain (PB de remise de"
        ]
      },
      {
        "type": "text",
        "text": "gaz)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.15 - Tour de piste"
      },
      {
        "type": "text",
        "text": "L'une des manœuvres importante en apprentissage aérien est le tour de piste, ou entraînement au décollage et atterrissage. Cette manipulation comporte de plus tous les"
      },
      {
        "type": "list",
        "items": [
          "54"
        ]
      },
      {
        "type": "text",
        "text": "éléments étudiés, le décollage, la montée initiale, atteindre l'altitude de croisière, la décélération, l’attente, l’approche en palier, la mise en descente, l'approche finale et l'atterrissage ainsi que les mises en virage de l'aéronef. Un tour de piste se décompose comme suit :"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.16 - Définition des vitesses importantes"
      },
      {
        "type": "text",
        "text": "VI Vitesse Indiquée Vitesse lue sur l'indicateur de vitesse de l'avion VP Vitesse Propre Vitesse réelle par rapport au sol sans vent VS Vitesse Stall Vitesse de décrochage en configuration lisse VNO Vitesse Normal Opérating Vitesse limite en atmosphère agitée VNE Vitesse Never Exced Vitesse à ne jamais dépasser VSO Vitesse Stall Out Vitesse de décrochage tous volets sortis VFE Vitesse Flap Extend Vitesse max d'utilisation des volets 1,2 VSO"
      },
      {
        "type": "text",
        "text": "Vitesse d'atterrissage de précaution tous volets sortis 1,3 VSO"
      },
      {
        "type": "text",
        "text": "Vitesse d’atterrissage normale tous volets sortis 1,3 VS1"
      },
      {
        "type": "text",
        "text": "Vitesse de configuration approche volets 10° 1,45 VS"
      },
      {
        "type": "text",
        "text": "Vitesse de configuration Attente, Vitesse de sécurité pour virage à 30°"
      },
      {
        "type": "list",
        "items": [
          "55"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "9.17 - Puissances utile et nécessaire au vol"
      },
      {
        "type": "text",
        "text": "La puissance nécessaire doit équilibrer la traînée en fonction d’une vitesse. Equation de propulsion : Pn = 1/2 r V2 S Cx . V = 1/2 r V3 S Cx La puissance utile est celle délivrée par le groupe motopropulseur (moteur-hélice)."
      },
      {
        "type": "text",
        "text": "Equation de sustentation : Pu = 1/2 r V2 S Cz . V = 1/2 r V3 S Cz"
      },
      {
        "type": "text",
        "text": "Pour un poids donné, la traction minimale (pour maintenir un vol constant) sera obtenue lorsque la finesse sera maximale. La finesse maximale étant obtenue à l'incidence ou le rapport Cz / Cx est maximal, cette incidence est lue sur la polaire au point de contact de la droite issue de l'origine et tangente à la polaire."
      },
      {
        "type": "text",
        "text": "Comme en vol rectiligne stabilisé, à une incidence donnée correspond une vitesse précise, il suffit de voler à cette vitesse pour trouver la bonne incidence (cette vitesse est indiquée dans le manuel de vol)."
      },
      {
        "type": "text",
        "text": "Pour des vitesses de vol usuelles, la puissance fournie par le moteur peut facilement être déterminée à partir du régime moteur pour un avion à calage fixe et à partir de la pression d'admission et l'angle de calage pour une hélice à pas variable (voir hélice), la puissance sera exprimée en pourcentage de la puissance maximale."
      },
      {
        "type": "text",
        "text": "La puissance utilisable (Pu) doit compenser la traînée, elle est donnée par l’équation de propulsion : Pu = ne varie que légèrement avec la vitesse, mais varie de manière importante avec l'altitude (sans turbo compresseur, elle diminue lorsque l'altitude augmente)."
      },
      {
        "type": "text",
        "text": "On démontre que la puissance nécessaire au vol varie avec le cube de la vitesse suivant la formule et la courbe suivante :"
      },
      {
        "type": "text",
        "text": "Pn = Rx . V = 1/2 r V3 S Cx."
      },
      {
        "type": "text",
        "text": "Le vol en palier à une altitude donnée n'est possible que si la puissance utile disponible Pu est égale à la puissance nécessaire au vol à cette altitude Pn."
      },
      {
        "type": "text",
        "text": "En considérant la courbe, le vol n'est possible qu'entre V min (40) et V max (110). Considérons le point de vol à la puissance minimale, au-dessus le vol est dit au premier régime, et en dessous le vol est au second régime."
      },
      {
        "type": "list",
        "items": [
          "56"
        ]
      },
      {
        "type": "text",
        "text": "Au premier régime, la vitesse est stable, en effet si pour une raison quelconque elle diminue momentanément la puissance disponible devient supérieure à la puissance nécessaire au vol et l'avion va reprendre sa vitesse si le palier est maintenu."
      },
      {
        "type": "text",
        "text": "Au second régime, la vitesse est instable, en effet dans un cas de diminution de vitesse, la puissance disponible devient insuffisante et l'avion va continuer à ralentir. Très vite il faut augmenter la puissance (mise de gaz) jusqu'à la butée puis ensuite la seule solution pour éviter la chute de vitesse (décrochage) va être la perte d'altitude et le danger d'évoluer à basse altitude."
      },
      {
        "type": "text",
        "text": "Le vol à puissance minimale est déterminé par le point bas de la courbe de puissance nécessaire et correspond à la consommation horaire minimale (autonomie maximale). La tangente à la courbe de puissance nécessaire représente la consommation kilométrique minimale (rayon d'action maximal)."
      },
      {
        "type": "list",
        "items": [
          "57"
        ]
      },
      {
        "type": "text",
        "text": "Avec l’altitude, la diminution de la densité de l’air entraîne une diminution de la puissance utile du moteur et lorsque cette courbe de puissance utile devient tangente à la courbe de puissance nécessaire, on obtient un point qui correspond au plafond de l'avion et à une seule vitesse qui permet de l'atteindre."
      },
      {
        "type": "text",
        "text": "La consommation kilométrique minimale est la plus faible valeur du rapport (puissance / vitesse) qui est précisément égal à la traction et sera donc obtenue à la vitesse de finesse maximale donc de distance franchissable maxi (Cz/Cx ou Vit en m/s / Taux de descente en m/s)."
      },
      {
        "type": "text",
        "text": "Ce point correspond à la tangente à la courbe, tangente issue de l'origine, c'est également le point de rayon d’action maximale."
      },
      {
        "type": "text",
        "text": "Enfin la différence Pu - Pn correspond à la marge de puissance. A la vitesse ou cette différence est maximale, sera obtenue la vitesse ascensionnelle maximale (Vz max)."
      },
      {
        "type": "text",
        "text": "En pratique, les vitesses spécifiques par rapport à la puissance utile sont : V décollage 100 % de la puissance moteur V croisière rapide 75 % de la puissance moteur V croisière économique 65 % de la puissance moteur V autonomie maximale 55 % de la puissance environ"
      },
      {
        "type": "text",
        "text": "Note : Les avions ne disposant pas d’indicateur de puissance, un abaque du manuel de vol permet de rechercher le nombre de tours moteur qu’il faut afficher pour obtenir la puissance choisie en fonction de l’altitude et de la température."
      },
      {
        "type": "text",
        "text": "(2500 t/mn à 2000 ft peuvent donner 65 % de la puissance, à 6000 ft et +3° C, il faudra peut-être 2600 tr/mn pour obtenir ces mêmes 65 % de puissance."
      },
      {
        "type": "text",
        "text": "FINESSE MAX DISTANCE FRANCHISSABLE MAXI (MAXI RANGE - Rayon d’action max) (Consommation kilométrique mini) Par vent de face, Vitesse légèrement supérieure Par vent arrière, Vitesse légèrement inférieure"
      },
      {
        "type": "text",
        "text": "AUTONOMIE MAX TEMPS DE VOL MAXIMUM ENDURANCE MAX PUISSANCE MINI EN VOL (Consommation horaire mini) Config ATTENTE (Cx² / Cz3 mini) Vitesse de l’ordre de 1,45 Vs Optimisation en basse altitude 0° 15° 7° 10°"
      },
      {
        "type": "list",
        "items": [
          "58"
        ]
      }
    ]
  },
  {
    "id": "rappel-des-unites-du-systeme-international",
    "number": "10",
    "title": "Rappel des unités du système international",
    "pages": [
      58,
      59
    ],
    "blocks": [
      {
        "type": "text",
        "text": "   Autres unités et correspondances pratiques"
      },
      {
        "type": "text",
        "text": "Type de mesure Symbole Unité S Unit Observations Longueur l mètre m"
      },
      {
        "type": "text",
        "text": "Masse m kilogramme kg"
      },
      {
        "type": "text",
        "text": "Temps t seconde s"
      },
      {
        "type": "text",
        "text": "Vitesse V mètre par seconde m.s-1 (1 Kt = 0,5 m/s) Accélération g mètre par seconde par seconde m.s-² Gravité : g = 9,81 m.s- ² Vitesse angulaire r/s radian par seconde rd/s"
      },
      {
        "type": "text",
        "text": "Aire - Surface S mètre carré m²"
      },
      {
        "type": "text",
        "text": "Volume V mètre cube m3"
      },
      {
        "type": "text",
        "text": "Angle α radian rad"
      },
      {
        "type": "text",
        "text": "Masse volumique ρ Kilogramme par m3 Kg/m3"
      },
      {
        "type": "text",
        "text": "Force, Poids F newton N"
      },
      {
        "type": "text",
        "text": "Puissance P watt W"
      },
      {
        "type": "text",
        "text": "Pression p pascal Pa"
      },
      {
        "type": "text",
        "text": "Travail, Energie W joule J"
      },
      {
        "type": "text",
        "text": "  Masse Le kilogramme = 2,2 lb La livre (lb) = 0,453 kg L’once (oz) = 0,028 kg Le slug (sg) = 1 ft / s2 = 14,6 kg Pression Température Capacité liquide Poids Le Newton Le Newton = 1 kg . 1m/s/s La livre force (lbf) = 4,45 N"
      },
      {
        "type": "text",
        "text": "Distance Le mètre = 3,29 ft Le pied (ft) = 0,304 m Le pouce (in) = 0,0254 m Le mile nautique (Nm) = 1852 m = 6092 ft Le mile terrestre (Sm) = 1609 m Vitesse Le kilomètre / heure (km/h) Le mètre / seconde (m/s) Le pied / minute (ft/mn) = 0,005 m/s Le knot (Kt) = 1,852 km/h Le Statute mile/ heure (MPH) = 1,6 km/h Le litre (l) Le gallon US (US.Gal) Le gallon impérial (Imp Gal) Le degré Celsius (°C) 0°Kelvin (K°) = - 273°C Le degré Fahrenheit (°F) Le Pascal (Pa) L’hectopascal (hPa) = 100 Pa Le millibar (mb) = 1 hPa Le pouce de mercure (In Hg) 1013 hPa = 29,92 In Hg T°C = T° K + 273 = (T°F – 32) x 5/9 1 US Gal = 3,785 l ; 1 Imp Gal = 4,546 l Conversion des vitesses 1 m/s = 197,36 ft/mn # 200 ft/mn 1 km/h = 0,54 Kt 1 Kt # 100 ft/mn # 0,5 m/s Puissance Le watt (W) Le kilowatt (kW) = 1000 W Le cheval vapeur (Cv) = 736 W Le horse power (HP) = 745 W Le livre.pied/minute (ft.lb/mn) = 0,03 HP"
      },
      {
        "type": "list",
        "items": [
          "59"
        ]
      }
    ]
  },
  {
    "id": "memo-des-principales-formules-d-aerodynamique",
    "number": "11",
    "title": "Mémo des principales formules d’aérodynamique",
    "pages": [
      59,
      59
    ],
    "blocks": [
      {
        "type": "text",
        "text": "11 - 1.- En vol rectiligne uniforme Poids (en N) = m (en Kg) . g (en m/s/s)"
      },
      {
        "type": "text",
        "text": "Portance :"
      },
      {
        "type": "text",
        "text": "Rz = 1/2  S V² Cz Traînée :"
      },
      {
        "type": "text",
        "text": "Rx = 1/2  S V² Cx Portance et Traînée en Newtons ;  (en Kg / m3) = masse volumique de l’air = 1,225 kg/m3 au sol ; S en m² ; V² en m/s ; Cz et Cx sont des coefficients donc pas d'unité."
      },
      {
        "type": "text",
        "text": "Equation de sustentation :"
      },
      {
        "type": "text",
        "text": "Rz = mg = ½  S V² Cz"
      },
      {
        "type": "text",
        "text": "Equation de propulsion :"
      },
      {
        "type": "text",
        "text": "T = Rx = ½  S V² Cx"
      },
      {
        "type": "text",
        "text": "Finesse max : Plus grande distance parcourue sans moteur (10 : avions légers ; planeurs de 40 à 60)"
      },
      {
        "type": "text",
        "text": "Fmax = Rz / Rx = Cz / Cx = D / H = mg / T"
      },
      {
        "type": "text",
        "text": "Fmax = V sol / Vz (mêmes unités)"
      },
      {
        "type": "text",
        "text": "Traction nécessaire :"
      },
      {
        "type": "text",
        "text": "T = mg.(Cx / Cz) = mg / Fmax"
      },
      {
        "type": "text",
        "text": "Puissance nécessaire en watt : (T en newton ; V en m/s ; m en Kg ; S en m² ; g en Kg/m3)"
      },
      {
        "type": "text",
        "text": "Vitesse minimum de sustentation en m/s :"
      },
      {
        "type": "text",
        "text": "V = 2 mg"
      },
      {
        "type": "text",
        "text": " S Cz max"
      },
      {
        "type": "text",
        "text": "Le centre de poussée, point d’application de la portance, avance (pour la majorité des profils) avec l’augmentation de l’incidence (jusqu’à un maxi, le décrochage ou il recule)."
      },
      {
        "type": "text",
        "text": "ÉQUILIBRAGE Possibilité de réaction avec la gouverne de profondeur, effet redresseur, (condition de maniabilité)."
      }
    ]
  },
  {
    "id": "a-l-equilibre",
    "number": "",
    "title": "A l’équilibre",
    "pages": [
      59,
      63
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Portance = Poids Traction = Traînée"
      },
      {
        "type": "text",
        "text": "Le foyer, point d’application des variations de portance, est fixe et doit être situé en arrière du centre de gravité."
      },
      {
        "type": "text",
        "text": "Poids Variations de Portance FOYER CENTRE DE GRAVITÉ Portance Marge statique (condition de stabilité) Traction Traînée "
      },
      {
        "type": "list",
        "items": [
          "60"
        ]
      },
      {
        "type": "text",
        "text": "11 - 2 – Influence des puissances utile et nécessaire sur la trajectoire Pu = Pn d’où vol rectiligne Vz = (Pu - Pn) / mg Pu > Pn Vz > 0 Si Pu > Pn vol en montée (ou accélération) Pu < Pn vol en descente"
      },
      {
        "type": "text",
        "text": "Vz = (Pu - Pn) / mg"
      },
      {
        "type": "text",
        "text": "11 - 3 – Montée rectiligne à vitesse constante"
      },
      {
        "type": "text",
        "text": "Rz = mg.cos  T = Rx + mg.sin  Les pentes sont des angles de petite valeur donc on peut admettre que :"
      },
      {
        "type": "text",
        "text": "sin  = tg  =  en radians"
      },
      {
        "type": "text",
        "text": "soit T = Rx + (mg . tan ) d'ou tan  = (T - Rx) / mg"
      },
      {
        "type": "text",
        "text": "Donc : Pente de montée en % :  % = (T – Rx) / mg) . 100"
      },
      {
        "type": "text",
        "text": "si Vz recherché Vz = (V .  en %) / 100 (mêmes unités)"
      },
      {
        "type": "text",
        "text": "11 - 4 – Descente rectiligne à vitesse constante"
      },
      {
        "type": "text",
        "text": "Rz = mg . cos  Rx = T + mg. sin "
      },
      {
        "type": "text",
        "text": " rad = (Rx – T) / mg"
      },
      {
        "type": "text",
        "text": "Vz = Vi.  rad"
      },
      {
        "type": "text",
        "text": "11 - 5 – Pente de descente en pourcent"
      },
      {
        "type": "text",
        "text": "Pente % = [(Rx – T) / mg] . 100"
      },
      {
        "type": "text",
        "text": "11 - 6 – Taux de descente en ft / mn"
      },
      {
        "type": "text",
        "text": "Vz (ft/mn) = pente en % . Vsol (Kt)"
      },
      {
        "type": "text",
        "text": "en pratique, sur un plan standard de 5% à une vitesse de 100 Kt : Vz (ft/mn) = (5 en % . 100 en Kt) = 500 ft/mn"
      },
      {
        "type": "list",
        "items": [
          "61"
        ]
      },
      {
        "type": "text",
        "text": "11 - 7 – Pré-affichage Puissance en fonction du Taux de descente recherché A vitesse constante déterminée, du second régime à 1,45 Vs, une diminution de puissance de 100 t/mn occasionne une descente de l’avion au taux de 100 ft/mn."
      },
      {
        "type": "text",
        "text": "Donc si le plan de descente est de 400 ft/mn, la puissance sera de – 400 t/mn."
      },
      {
        "type": "text",
        "text": "11 - 8 – Virage standard à trajectoire et vitesse constantes Pour exécuter 360° en 2 mn soit 360° en 120 s, le taux de virage = 3° / s"
      },
      {
        "type": "text",
        "text": "Réalisation si vitesse en Kt : Inclinaison de l’avion = Vi en Kt . 15% ou si vitesse en km/h :"
      },
      {
        "type": "text",
        "text": "Inclinaison de l’avion = Vi en Km/h . 8%"
      },
      {
        "type": "text",
        "text": "11 - 9 – Rayon de virage à vitesse constante Si le virage est standard (360° / 2 mn), la valeur du rayon est approximativement :"
      },
      {
        "type": "text",
        "text": "Rayon de virage en Mètres = V Kt x 10 ou Rayon de virage en Nm = V Kt /200."
      },
      {
        "type": "text",
        "text": "r = (Ctg  . V2) / g r = (V2 / g) . tg "
      },
      {
        "type": "text",
        "text": "11-10 – Facteur de charge en virage (Force déviatrice - Force centrifuge)"
      },
      {
        "type": "text",
        "text": "11-11– Influence du Facteur de charge (n) sur la Vitesse de décrochage (Vs sous n)"
      },
      {
        "type": "text",
        "text": "Vitesse de décrochage sous facteur de charge : Vs (sous n) = Vs (en lisse) n (formule issue de : n . mg = 1/2  V²s (décro) S Cz max)."
      },
      {
        "type": "list",
        "items": [
          "62"
        ]
      },
      {
        "type": "text",
        "text": "Applications pratiques des coefficients de vitesse en tour de piste pour sécurité des vols (inclinaison de l'avion à basse altitude)"
      },
      {
        "type": "text",
        "text": "V x 1,2 V x 1,3 V x 1,45 APPLICATIONS DES COEFFICIENTS 10° 20° 37° Si Inclinaison maxi 19% 25% 30% Coefficient Sécurité en virage"
      },
      {
        "type": "text",
        "text": "11-12 - Force déviatrice (centrifuge et centripète) :"
      },
      {
        "type": "text",
        "text": "Fd newtons = P newtons . [V² m/s / (R m . g m/s/s)] = mV² / R = P tg "
      },
      {
        "type": "text",
        "text": "11- 13 – Facteurs de charge conventionnels d’un aéronef"
      },
      {
        "type": "text",
        "text": "Catégorie normale N facteur de charge limite + 3,8 - 1,52 Catégorie utilitaire U facteur de charge limite + 4,4 - 1,76 Catégorie acrobatique A facteur de charge limite + 6 - 3"
      },
      {
        "type": "text",
        "text": "Vs (sous facteur de charge) = Vs  n"
      },
      {
        "type": "text",
        "text": "14 - Lois fondamentales de la mécanique des fluides"
      },
      {
        "type": "text",
        "text": "Loi de conservation du débit dite : Equation de continuité S1 . V1 = S2 . V2 = S3 . V3 En incompressibilité, la quantité d'air entrant dans un conduit de section S1 est rigoureusement identique à celle parcourant les tubes de section S2 et S3."
      },
      {
        "type": "text",
        "text": "Loi de conservation de l'énergie dite : Equation de Bernoulli Pression totale = Pression dynamique + Pression statique = CONSTANTE Si l'on augmente la vitesse d'un fluide, on constate une diminution de pression dans la veine du fluide."
      },
      {
        "type": "text",
        "text": " + (½  V2) + (g Z) = constante"
      },
      {
        "type": "text",
        "text": ""
      },
      {
        "type": "list",
        "items": [
          "63"
        ]
      }
    ]
  },
  {
    "id": "conversions-d-unites",
    "number": "",
    "title": "Conversions d’unités",
    "pages": [
      63,
      64
    ],
    "blocks": [
      {
        "type": "text",
        "text": "(Approximations pour la pratique)"
      },
      {
        "type": "text",
        "text": "DISTANCES Equivalences Pour convertir des Applications pour résultat approché"
      },
      {
        "type": "text",
        "text": "1 ft = 0,3048 m"
      },
      {
        "type": "text",
        "text": "ft en m"
      },
      {
        "type": "text",
        "text": "x 3 et /10"
      },
      {
        "type": "text",
        "text": "1 m = 3,2808 ft"
      },
      {
        "type": "text",
        "text": "m en ft"
      },
      {
        "type": "text",
        "text": "x 3 + 10% du résultat"
      },
      {
        "type": "text",
        "text": "1 Nm = 1,852 km"
      },
      {
        "type": "text",
        "text": "Nm en km"
      },
      {
        "type": "text",
        "text": "x 2 - 8% du résultat"
      },
      {
        "type": "text",
        "text": "1 km = 0,5399 Nm"
      },
      {
        "type": "text",
        "text": "km en Nm"
      },
      {
        "type": "text",
        "text": "/ 2 + 8% du résultat"
      },
      {
        "type": "text",
        "text": "1 inch = 0,0254 m"
      },
      {
        "type": "text",
        "text": "inch en m"
      },
      {
        "type": "text",
        "text": "x 2 + 1/10 (inchs) et / 100"
      },
      {
        "type": "text",
        "text": "1 m = 39,37 inch"
      },
      {
        "type": "text",
        "text": "m en inch"
      },
      {
        "type": "text",
        "text": "x 40 - 2% du résultat"
      },
      {
        "type": "text",
        "text": "1 cm = 0,3937 inch"
      },
      {
        "type": "text",
        "text": "cm en inch"
      },
      {
        "type": "text",
        "text": "x 4 et/ 10"
      },
      {
        "type": "text",
        "text": "1 inch = 2,54 cm"
      },
      {
        "type": "text",
        "text": "inch en cm"
      },
      {
        "type": "text",
        "text": "x 2 + 1/2 (inchs)"
      },
      {
        "type": "text",
        "text": "VITESSES Equivalences Pour convertir des Applications pour résultat approché"
      },
      {
        "type": "text",
        "text": "1 km/h = 0,54 Kt"
      },
      {
        "type": "text",
        "text": "km/h en Kt"
      },
      {
        "type": "text",
        "text": "/ 2 + 10% du résultat"
      },
      {
        "type": "text",
        "text": "1 Kt = 1,852 km/h"
      },
      {
        "type": "text",
        "text": "Kt en km/h"
      },
      {
        "type": "text",
        "text": "x 2 - 10% du résultat"
      },
      {
        "type": "text",
        "text": "1 m/s = 196,8 ft/mn"
      },
      {
        "type": "text",
        "text": "m/s en ft/mn"
      },
      {
        "type": "text",
        "text": "x 200 - 2% du résultat"
      },
      {
        "type": "text",
        "text": "1 ft/mn = 5,08 10-3 m/s"
      },
      {
        "type": "text",
        "text": "ft/mn en m/s"
      },
      {
        "type": "text",
        "text": "/ 200 + 2% du résultat"
      },
      {
        "type": "text",
        "text": "1 Kt = 0,515 m/s"
      },
      {
        "type": "text",
        "text": "Kt en m/s"
      },
      {
        "type": "text",
        "text": "/ 2 + 3% du résultat"
      },
      {
        "type": "text",
        "text": "1 m/s = 1,94 Kt"
      },
      {
        "type": "text",
        "text": "m/s en Kt"
      },
      {
        "type": "text",
        "text": "x 2 - 3% du résultat"
      },
      {
        "type": "text",
        "text": "1 mph = 1,609 km/h"
      },
      {
        "type": "text",
        "text": "mph en km/h"
      },
      {
        "type": "text",
        "text": "x 2 - 20% du résultat"
      },
      {
        "type": "text",
        "text": "TEMPÉRATURES Equivalences Pour convertir des Applications pour résultat approché"
      },
      {
        "type": "text",
        "text": "°C = degré Celsius"
      },
      {
        "type": "text",
        "text": "°C en °F"
      },
      {
        "type": "text",
        "text": "(°C x 9/5) + 32"
      },
      {
        "type": "text",
        "text": "°F = degré Fahrenheit"
      },
      {
        "type": "text",
        "text": "°F en °C"
      },
      {
        "type": "text",
        "text": "(°F - 32) x 5/9"
      },
      {
        "type": "text",
        "text": "°K = degré Kelvin"
      },
      {
        "type": "text",
        "text": "°C en °K"
      },
      {
        "type": "text",
        "text": "(°C) + 273 Remarques ; 0° C = 32° F ; -10° C = 14° F ; + 10° C = 50° F"
      },
      {
        "type": "text",
        "text": "PRESSIONS Equivalences Pour convertir des Applications pour résultat approché"
      },
      {
        "type": "text",
        "text": "1 inch Hg = 33,86 hPa"
      },
      {
        "type": "text",
        "text": "Inch Hg en hPa"
      },
      {
        "type": "text",
        "text": "x 30 + 1 / 10"
      },
      {
        "type": "text",
        "text": "1 hpa = 0,0295 inch"
      },
      {
        "type": "text",
        "text": "hPa en inch"
      },
      {
        "type": "text",
        "text": "x 3 / 100"
      },
      {
        "type": "text",
        "text": "1 mb = 1 hPa"
      },
      {
        "type": "text",
        "text": "mb en hPa"
      },
      {
        "type": "text",
        "text": "x 1"
      },
      {
        "type": "text",
        "text": "1 Pa = 0,01 mb"
      },
      {
        "type": "text",
        "text": "Pa en mb"
      },
      {
        "type": "text",
        "text": "x 1 / 100"
      },
      {
        "type": "text",
        "text": "1 bar = 14,5 psi"
      },
      {
        "type": "text",
        "text": "bar en psi"
      },
      {
        "type": "text",
        "text": "x 10 + ½ du résultat"
      },
      {
        "type": "text",
        "text": "1 psi = 0,0689 bar"
      },
      {
        "type": "text",
        "text": "psi en bar"
      },
      {
        "type": "text",
        "text": "x 7 et / 100"
      },
      {
        "type": "text",
        "text": "1 psi = 70,28 g/cm2"
      },
      {
        "type": "text",
        "text": "psi en g/cm2"
      },
      {
        "type": "text",
        "text": "x 70"
      },
      {
        "type": "text",
        "text": "André PARIS LFRN - LFRD - LFDP GSM : 06 75 33 45 15      "
      },
      {
        "type": "list",
        "items": [
          "64"
        ]
      }
    ]
  }
]
