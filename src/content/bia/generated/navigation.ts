import type { CourseSection } from '@/content/types'

/**
 * ⚠️ FICHIER PRODUIT PAR `scripts/cours-extraire.py`. NE PAS ÉDITER À LA MAIN :
 * toute retouche serait écrasée à la prochaine extraction, et surtout elle
 * romprait la garantie qui fait la valeur de ce fichier — son texte est
 * exactement celui de la couche texte du PDF, au signe près.
 *
 * Source : assets/cours/bia/BIA-Cours4B-Navigation-2024-06-15.pdf
 * 32 pages, 71561 signes.
 *
 * Pour corriger une coupe de paragraphe ou un titre mal reconnu, corrigez
 * les heuristiques du script et relancez-le, pour que la correction profite
 * aux sept autres cours.
 */
export const navigationSections: CourseSection[] = [
  {
    "id": "la-navigation",
    "number": "",
    "title": "La navigation",
    "pages": [
      1,
      1
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Programme conforme à l'Arrêté fixant le programme des examens théoriques pour la délivrance de l’examen du BIA, des licences de pilote d’avion léger LAPL( A) et de pilote privé avion PPL(A) AU SOMMAIRE"
      },
      {
        "type": "list",
        "items": [
          "Présentation générale",
          "Les principes de la navigation",
          "Les cartes 1/500000ème et  1/1000000ème et cartes VAC",
          "L'estime",
          "Le cheminement",
          "La radionavigation programme simplifié VOR & ADF",
          "Les outils nécessaires à la réalisation d'une Navigation",
          "Construction et calcul d'une navigation de jour",
          "Compléments pour info",
          "Rappels des unités et de leurs conversions."
        ]
      }
    ]
  },
  {
    "id": "presentation-generale-de-la-navigation",
    "number": "",
    "title": "Présentation générale de la navigation",
    "pages": [
      1,
      1
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Le terme “navigation”, utilisé pour la première fois en français par Jean MEUNG en 1265, vient du latin “navigatio” ou art de diriger un navire. Les premiers grands navigateurs furent les Phéniciens qui devaient naviguer afin de pratiquer leurs échanges commerciaux dans le bassin méditerranéen."
      },
      {
        "type": "text",
        "text": "On peut considérer la navigation comme une des plus anciennes sciences à caractère mathématique (avec la géométrie). Si aujourd’hui la pratique de la navigation à la surface du globe terrestre est automatisée ou assistée par des moyens puissants (satellites, ordinateurs...) elle prend une nouvelle dimension avec la navigation stellaire, c’est à dire avec les calculs et conceptions de trajectoires de satellites."
      },
      {
        "type": "text",
        "text": "Le principe de la navigation consiste à partir d’un point A pour aller vers un point B, en connaissant toujours sa position sur la terre. Le navigateur devra donc bien connaître la terre sur laquelle il va devoir se déplacer à tout moment."
      },
      {
        "type": "text",
        "text": "La navigation existe sous trois types différents : 1 - l’estime est basée, compte tenu du déplacement de l’avion dans une masse d’air mobile, sur le calcul du cap à suivre pour atteindre un aérodrome de destination et définir le temps de trajet en fonction du vent. Ce voyage sera jalonné par l’observation de points de repère caractéristiques (lacs, forêts, autoroute, villes, …) qui seront identifiés lors de la préparation du vol sur une carte au 1/500000ème. L’analyse d’un dossier météo complètera cette préparation du vol et déterminera sa faisabilité."
      },
      {
        "type": "text",
        "text": "2 - le cheminement consiste à suivre à vue des repères naturels comme les cours d’eau, les forets ou des ouvrages d’art comme les routes et autoroutes, voies ferrées etc. Cette navigation s’applique principalement par conditions dégradées de la météo rencontrées quelquefois lors d’un voyage (plafond bas)."
      },
      {
        "type": "text",
        "text": "3 - la radionavigation permet de se déplacer en prenant appui sur des informations transmises ou reçues à l’aide de balises radioélectriques (VOR, ADF ou GPS). Elle s’applique en général pour confirmer une position lors d’ une navigation à l’estime ou pour les vols à moyenne et haute altitude."
      },
      {
        "type": "text",
        "text": "Lors d’une navigation, le pilote peut être amené à utiliser alternativement ou simultanément ces trois types de navigation en fonction des éléments météo, du relief naturel, de la réception des radio balises VOR ou NDB."
      },
      {
        "type": "text",
        "text": "La navigation ne veut pas dire pas simplement se repérer dans l'espace à un instant précis par l'utilisation de cartes, mais c'est aussi et principalement piloter un avion d'un point à un autre en prévoyant la trajectoire future, en appliquant des corrections d'altitude, altération de cap, modification de la vitesse, gestion d’une dérive en fonction du vent rencontré. Et en permanence, s’assurer à chaque point caractéristique, que la quantité d’essence est conforme aux prévisions et permet de rejoindre un site d’atterrissage."
      },
      {
        "type": "text",
        "text": ""
      }
    ]
  },
  {
    "id": "les-principes-de-la-navigation",
    "number": "",
    "title": "Les principes de la navigation",
    "pages": [
      2,
      5
    ],
    "blocks": [
      {
        "type": "text",
        "text": "La terre : Toute position sur la terre peut être définie par un point composé du croisement d’un méridien et d’une parallèle. Vu du pôle, ce globe comporte donc 360° dont chaque degré est identifié comme étant un méridien (demi-arc de cercle allant du pôle nord au pôle sud. Par ailleurs, par rapport à l’équateur, on définit des lignes parallèles partant de l’équateur vers les pôles nord et sud (de 0 à 90° N et de 0à 90° S)."
      },
      {
        "type": "text",
        "text": "La terre est sphérique bien qu'étant légèrement aplatie au niveau des deux pôles, le rayon de la terre est de 6370 kilomètres. Son périmètre est de de 40 000 km à l’équateur soit en milles Nautiques 21600 Nm)."
      },
      {
        "type": "text",
        "text": "La terre tourne autour du soleil suivant une trajectoire elliptique en 365,25 jours, d’où un jour de plus au calendrier tous les quatre ans, le 29 février (année bissextile), et simultanément elle tourne sur elle- même d’un tour en 24 heures."
      },
      {
        "type": "text",
        "text": "L’axe de rotation de la terre est nommé axe des pôles. Cet axe est incliné de 23°27’ par rapport au plan de l’écliptique (plan de l’orbite de la terre autour du soleil)."
      },
      {
        "type": "text",
        "text": "Définitions : Pôles de la terre : intersection de l'axe de rotation de la terre sur elle-même avec sa surface :"
      },
      {
        "type": "list",
        "items": [
          "pôle nord ou pôle boréal.",
          "pôle sud ou pôle austral."
        ]
      },
      {
        "type": "text",
        "text": "Équateur : C’est le grand cercle de la sphère terrestre dont le plan est perpendiculaire à la ligne des pôles."
      },
      {
        "type": "text",
        "text": "Petit cercle : C'est l'intersection de la sphère avec un plan ne contenant pas le centre de la terre."
      },
      {
        "type": "text",
        "text": "Grand cercle : C'est l'intersection de la sphère avec un plan passant par le centre (noté que l'équateur est un grand cercle particulier)."
      },
      {
        "type": "text",
        "text": "Parallèle terrestre : Petit cercle parallèle à l'équateur"
      },
      {
        "type": "text",
        "text": "Méridien terrestre : Demi grand cercle perpendiculaire à l'équateur, le méridien de référence est celui de GREENWICH (GB) Pour simplifier nous allons définir que la terre est animée par 2 mouvements :"
      },
      {
        "type": "list",
        "items": [
          "Un autour de l'axe des pôles qui est la cause des jours et des nuits, soit un tour de 360° en 24 heures ;",
          "Un autour du soleil qui lui est la cause des saisons tout au long d'une année de 365,25 jours."
        ]
      },
      {
        "type": "text",
        "text": "Les Coordonnées Géographiques : Par tout point à la surface de la terre passent une parallèle et un méridien. Celles-ci définissent les coordonnées géographiques du point, on les dénomme : la latitude (l) pour la parallèle et la longitude (L) pour le méridien."
      },
      {
        "type": "text",
        "text": "La latitude comme la longitude sont des longueurs d'arc qui se mesurent en degrés et minutes d'arc."
      },
      {
        "type": "text",
        "text": "Latitude (l) : C’est la longueur de l'arc du méridien compris entre l'équateur et le point considéré."
      },
      {
        "type": "text",
        "text": "La Latitude d'un point est soit Nord si le point est dans l'hémisphère nord, soit Sud si le point est dans l'hémisphère sud."
      },
      {
        "type": "text",
        "text": "La Latitude d'un point est comprise en 0° si le point se trouve à l'équateur et 90° N si le point est au pôle Nord et 90° S s’il est au pôle Sud."
      },
      {
        "type": "text",
        "text": "La longitude (L) : C'est la longueur du plus petit arc de l'équateur compris entre le méridien origine (Greenwich) et le méridien passant par le point considéré."
      },
      {
        "type": "text",
        "text": "La longitude d'un point est soit OUEST si le point est à l'ouest du méridien de Greenwich soit EST si le point est à l'est du méridien de Greenwich."
      },
      {
        "type": "text",
        "text": "La longitude d'un point est comprise entre 0° si le point se trouve sur le méridien de Greenwich et 180° si le point se trouve sur l'antiméridien de Greenwich. On compte de 0° à 180° W si le point est situé à l’ouest du méridien de Greenwich et de 0° à 180° Est si le point est situé à l’Est de Greenwich."
      },
      {
        "type": "text",
        "text": "Exemple :"
      },
      {
        "type": "text",
        "text": "Brest : Latitude 48° 26’ 50’’ N Longitude 004° 25’ 18 ‘’ W Rennes : Latitude 48° 04’ 19 N"
      },
      {
        "type": "text",
        "text": "Longitude 001° 43’ 56’’ W"
      },
      {
        "type": "text",
        "text": "Le Nord vrai (Nv) Tout point à la surface de la terre passe un méridien et un parallèle. La direction de tout méridien est le pôle nord. Ce nord est le point de rencontre des longitudes et représente la référence pour toutes les cartes. Cette référence porte le nom de NORD VRAI (Nv), il est aussi appelé nord géographique (Ng)."
      },
      {
        "type": "text",
        "text": "Le nord vrai est situé sur l'axe de rotation de la terre et il indique la direction de l'étoile polaire."
      },
      {
        "type": "text",
        "text": "Le Nord magnétique (Nm) La terre baigne dans un champ magnétique dont toutes les lignes de champ convergent en un seul point appelé le PÔLE MAGNETIQUE ou NORD MAGNETIQUE (Nm). Ce pôle magnétique n’est pas au même endroit que le pôle Nord géographique."
      },
      {
        "type": "text",
        "text": "La direction en un point quelconque de la terre de ce nord magnétique est donnée par la pointe de l'aiguille d'une boussole. La position du nord magnétique varie avec le temps."
      },
      {
        "type": "text",
        "text": "La déclinaison magnétique (Dm) : C'est l'angle compris entre le nord vrai et le nord magnétique, la Dm est OUEST ou négative si le Nm est à gauche du Nv, inversement la Dm est EST ou positive lorsque le Nm est à droite du Nv. Sur une carte les lignes joignant les points d'égale déclinaison magnétique ont pour nom des isogones."
      },
      {
        "type": "text",
        "text": "La déclinaison magnétique est positive lorsqu'elle est \"Est\", elle devient négative lorsqu'elle est \"Ouest\"."
      },
      {
        "type": "text",
        "text": "Avec une déclinaison magnétique Est (E) Route vraie (Rv) = Route magnétique (Rm) + Déclinaison magnétique (Dm) Route magnétique(Rm) = Route vraie (Rv) – Déclinaison magnétique (Dm) Avec une déclinaison magnétique Ouest (W) :"
      },
      {
        "type": "text",
        "text": "Route vraie (Rv) = Route magnétique (Rm) - Déclinaison magnétique (Dm)"
      },
      {
        "type": "text",
        "text": "Route magnétique(Rm) = Route vraie (Rv) + Déclinaison magnétique (Dm)"
      },
      {
        "type": "text",
        "text": "Le Nord compas ( Nc) Problème : tout appareil de mesure comme la boussole a une erreur instrumentale, de plus dans un avion, l’indication de l’instrument subit les altérations magnétiques des circuits électriques internes plus les constantes turbulences du voyage. La boussole a été remplacée par un compas plus fiable mais on devra tenir compte néanmoins des erreurs de cet instrument qui devra indiquer un Nord compas (Nc) le plus proche du Nord magnétique (Nm) de référence."
      },
      {
        "type": "text",
        "text": "Magnétisme de l'avion : Lorsque le compas magnétique est installé dans le poste de pilotage, la structure métallique de l'avion, les parties mobiles du moteur, les radios, le réchauffage du tube Pitot, et toutes masses métalliques perturbent les informations de cap et affectent le compas par leur propre champ magnétique qu'ils développent."
      },
      {
        "type": "text",
        "text": "La déviation (d) : C’est la valeur de l’erreur instrumentale du compas, c’est donc l’angle compris entre le Nm et le Nc -d est dite OUEST si le Nc est à gauche du Nm -d est dite EST si le Nc est à droite du Nm"
      },
      {
        "type": "text",
        "text": "Route magnétique Rm : c’est la route vraie corrigée de la déclinaison magnétique seulement."
      },
      {
        "type": "text",
        "text": "Elle est très déterminante pour le choix des niveaux de vol en altitude. En France, la déclinaison magnétique est faible (1° E à Strasbourg et 2° W à Brest)."
      },
      {
        "type": "text",
        "text": "Par contre en Islande sa valeur est 42° E. Donc pour une route vraie allant au 050°, la route magnétique sera = 050° - (Dm + 42°) = 008°"
      },
      {
        "type": "text",
        "text": "Si la valeur de la Dm est de 15° W, pour une même route au 050°, la Rm serait = 050° - (Dm -15°) = 065°"
      },
      {
        "type": "text",
        "text": "LES CAPS Si l’avion conserve la route calculée suivant les procédures décrites ci-dessus, il y a de grandes chances qu’il n’arrive pas à destination prévue car il se déplace dans un milieu en mouvement (vent)."
      },
      {
        "type": "text",
        "text": "On doit donc prendre en compte cette nouvelle donne et définir la direction de l’axe longitudinal de l’avion que l’on appelle le CAP par rapport aux mêmes références vues ci-dessus : Nv, Nm, et Nc."
      },
      {
        "type": "text",
        "text": "La différence entre un CAP et une route s’appelle la DÉRIVE"
      },
      {
        "type": "text",
        "text": "Cap vrai Cv : correspond au cap suivi par l’avion, position de l’axe longitudinal de l’avion par rapport au nord vrai. S’il n’y a aucun déplacement de la masse d’air à l’altitude du voyage (pas de vent), le cap vrai et la route vraie sont identiques (même valeur angulaire, dérive = 0)."
      },
      {
        "type": "text",
        "text": "Cap magnétique Cm : correspond au cap de l’avion par rapport au nord magnétique corrigé de la dérive éventuelle (position du nez de l’avion par rapport au nord magnétique)."
      },
      {
        "type": "text",
        "text": "Cap compas Cc : indication suivie par le pilote. C’est le cap que le pilote s’efforce de maintenir pour suivre sa route. Il est corrigé de la dérive éventuelle, de la déclinaison magnétique et de la déviation compas éventuelle"
      }
    ]
  },
  {
    "id": "la-mesure-des-distances-en-aeronautique",
    "number": "",
    "title": "La mesure des distances en aéronautique",
    "pages": [
      5,
      5
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Les navigateurs utilisent de préférence le mile nautique (Nm) comme unité de distance. Le Nm est la longueur de l’arc d’un grand cercle à la surface du globe, engendré par un angle au centre d’une minute."
      },
      {
        "type": "text",
        "text": "La circonférence de la terre étant de 40 000 km, la longueur de cet arc de cercle sera : 40 000 1 NM= ------------- =1,852 km 360 x 60"
      },
      {
        "type": "text",
        "text": "Pour mesure une distance entre deux points à la surface du globe, à partir d’une carte :"
      },
      {
        "type": "list",
        "items": [
          "on mesure la longueur entre les deux points sur la carte (avec un compas à pointes sèches par"
        ]
      },
      {
        "type": "text",
        "text": "exemple)."
      },
      {
        "type": "list",
        "items": [
          "on reporte cette longueur sur le graticule des latitudes (méridien), ce qui nous donne l’écart de"
        ]
      },
      {
        "type": "text",
        "text": "latitude correspondant. On trouve la distance en appliquant la valeur d’une minute d’arc = I Nm. Sachant que le mile nautique (Nm) est une unité de mesure correspondant à la longueur d'une minute d'arc de méridien :"
      },
      {
        "type": "text",
        "text": "1 Nm = 1852 m Le méridien étant gradué en minutes et degrés de latitude vous pouvez connaître la distance réelle sachant que :"
      },
      {
        "type": "text",
        "text": "1° = 60 minutes = 60 Nm, attention la référence doit toujours être le méridien et jamais un parallèle."
      },
      {
        "type": "text",
        "text": "En calcul mental, on prendra :1 Nm = 6000 ft et si distance en mètres pour obtenir la valeur en Nm :"
      },
      {
        "type": "text",
        "text": "multiplier par 2 puis soustraire 1/10 du résultat. Ex : 50 Nm = (50 x 2) - (50 x 2) / 10 = 90 km"
      }
    ]
  },
  {
    "id": "la-mesure-des-vitesses-en-aeronautique",
    "number": "",
    "title": "La mesure des vitesses en aéronautique",
    "pages": [
      5,
      5
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Le Knot ( Kt ) appelé également nœud correspond à un Nm parcouru en une heure, si on le converti en valeur du système international, on obtient ::"
      },
      {
        "type": "text",
        "text": "1 Kt = 1852 m/h ou 1kt = 1,852 km/h Pour les vitesses verticales, on parlera le plus souvent de m/s ou de ft/mm ;"
      }
    ]
  },
  {
    "id": "les-routes-a-la-surface-de-la-terre",
    "number": "",
    "title": "Les routes a la surface de la terre",
    "pages": [
      6,
      6
    ],
    "blocks": [
      {
        "type": "text",
        "text": "La loxodromie est une courbe qui coupe les méridiens sous un angle constant. (Grand cercle) Entre deux points de la surface du globe passe une infinité de loxodromie. Mais sur de petites distances, on peut considérer la déviation du compas et de Dm peuvent être assimilées comme constantes, la route suivie par un avion volant au cap compas constant peut être assimilée à une loxodromie. Le long d'une loxodromie l'angle de route reste constant."
      },
      {
        "type": "text",
        "text": "L'orthodromie est le plus petit arc de grand cercle passant par deux points de la sphère terrestre."
      },
      {
        "type": "text",
        "text": "Comparaison entre Loxodromie et Orthodromie : La distance orthodromique est la plus courte des deux points de la surface de la terre, elle est par ce fait plus courte que la distance loxodromique. Sur de très courtes distances la différence est négligeable. Les ondes électromagnétiques empruntent les routes orthodromiques."
      },
      {
        "type": "text",
        "text": "1 - Greenwich Mean Time (GMT)"
      }
    ]
  },
  {
    "id": "la-mesure-du-temps",
    "number": "",
    "title": "La mesure du temps",
    "pages": [
      6,
      6
    ],
    "blocks": [
      {
        "type": "text",
        "text": "GMT est un acronyme anglophone signifiant heure solaire moyenne de Greenwich (Greenwich est une commune située à quelques kilomètres de Londres - Angleterre), Le système horaire GMT a été adopté au niveau international en 1884."
      },
      {
        "type": "text",
        "text": "2 - Temps Atomique International (TAI) Le Temps Atomique International est calculé par le Bureau International des Poids et Mesures (BIPM) à partir des données de plus de 200 horloges atomiques situées dans des instituts de météorologie ou des observatoires de plus de 30 pays."
      },
      {
        "type": "text",
        "text": "Le BIPM estime que le Temps Atomique International ne diffère pas d'une horloge idéale imaginaire (pas plus d'un dixième de microseconde (0.0000001 seconde) par an, La norme UTC en est un dérivé."
      },
      {
        "type": "text",
        "text": "3 - Universal Time Coordinated (UTC) UTC est un acronyme anglais signifiant Temps universel coordonné. La norme UTC est la base légale de l'heure dans le monde. Cette norme est dérivée du Temps Atomique International dont elle diffère seulement par un nombre entier de secondes, actuellement 32. Ces secondes intercalaires sont insérées à l'initiative du Service International de la Rotation de la Terre (SIRT) pour garantir que, en moyenne au cours des ans, le soleil est au méridien de Greenwich à 12 h 00mn 00sec UTC à 0.9 seconde près."
      },
      {
        "type": "text",
        "text": "4 - Heure locale L’heure locale d’un méridien est fonction de sa longitude. La terre effectuant une rotation en 24 heures, soit 24 x 60 1440 mn, la durée entre chaque degré de longitude est : 1440 mn / 360° = 4 mn par degré."
      },
      {
        "type": "text",
        "text": "1°de longitude = 4 minutes de différence, donc Heure locale = UTC ± long x 4"
      },
      {
        "type": "text",
        "text": "Lorsque l’on se déplace vers l’Est, l’heure avance et lorsque l’on se déplace vers l’ouest, l’heure retarde."
      },
      {
        "type": "text",
        "text": "5 - Heure légale : La terre est divisée en 24 fuseaux appelés fuseaux horaires et numérotés de 0 à 12 positivement à l’ouest du méridien de Greenwich, et négativement à l’est."
      },
      {
        "type": "text",
        "text": "L’heure locale légale sera l’heure du méridien central du fuseau horaire (heure du fuseau) plus ou moins un nombre entier fixé par la loi d’état."
      },
      {
        "type": "text",
        "text": "En France : en hiver, l’heure locale légale = UTC+1 h ; en été, l’heure locale légale = UTC+2 h"
      },
      {
        "type": "text",
        "text": "La nuit aéronautique commence 30 minutes après le coucher du soleil et se termine 30 minutes avant le lever du soleil."
      }
    ]
  },
  {
    "id": "les-cartes",
    "number": "",
    "title": "Les cartes",
    "pages": [
      7,
      12
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Les cartes ont pour but de représenter de façon plane la surface de la terre, la difficulté consiste à projeter une sphère sur un plan."
      },
      {
        "type": "text",
        "text": "Le cartographe utilise différentes méthodes de projection (suivant l’usage de cette carte), afin d’obtenir le respect :"
      },
      {
        "type": "list",
        "items": [
          "des rapports des angles ;",
          "des rapports des distances ;",
          "des rapports des aires."
        ]
      },
      {
        "type": "text",
        "text": "L’une des méthodes de projection employée consiste à utiliser un cylindre tangent à l’équateur que l’on développera ensuite (projection de MERCATOR)."
      },
      {
        "type": "text",
        "text": "La représentation des méridiens et des parallèles s’appelle le canevas. Cartes conformes utilisées en aéronautique car elles conservent les angles."
      },
      {
        "type": "text",
        "text": "L’échelle L’échelle d’une carte, pour autant qu’elle existe, est rapport entre les distances lues sur cette carte et les distances correspondantes sur la sphère terrestre."
      },
      {
        "type": "text",
        "text": "Sur une carte conforme, l’échelle est différente en chaque point. Cependant elle varie peu pour une même carte car nous considérons que les cartes aéronautiques sont équidistantes, c’est-à-dire que les distances lues sur les cartes et les distances sur la sphère sont proportionnelles."
      },
      {
        "type": "text",
        "text": "Pour des calculs approchés, on peut considérer que l’échelle est la même sur toute une zone importante."
      },
      {
        "type": "text",
        "text": "L’échelle vaut donc Distance lue sur la carte Echelle = ----------------------------------------------------- Distance sur la sphère terrestre"
      },
      {
        "type": "text",
        "text": "Il est bien entendu important que les deux termes de cette fraction soient exprimés avec la même unité."
      },
      {
        "type": "text",
        "text": "Les méthodes de construction des Cartes : Pour construire une carte, il faut établir une correspondance point par point avec la sphère terrestre."
      },
      {
        "type": "text",
        "text": "Il existe trois types de « correspondance «, chacun étant plutôt adapté à certaines latitudes."
      },
      {
        "type": "list",
        "items": [
          "la représentation de Mercator, qui est adaptée aux latitudes faibles, proches de l’équateur,",
          "la projection Lambert, pour les régions situées entre 30° et 60° de latitude ;",
          "la projection stéréographique, adaptée aux régions polaires."
        ]
      },
      {
        "type": "text",
        "text": "Ces trois types de représentations sont conformes (conservation des angles). Chacune est caractérisée par sa « parallèle d’échelle minimale », qui est le lieu où la surface de projection, ou de représentation, touche la sphère terrestre."
      },
      {
        "type": "text",
        "text": "Le centre des projections Lambert est le centre de la sphère. Ces cartes Lambert sont celles qui sont utilisées dans nos régions."
      },
      {
        "type": "text",
        "text": "Le centre des projections stéréographiques est le point diamétralement opposé au point de tangence de la surface de projection. Dans le cas d’une carte stéréographique polaire, c’est le pôle opposé au pôle de tangence qui est le centre de projection."
      },
      {
        "type": "text",
        "text": "Les cartes aéronautiques utilisées en France sont les CARTES AERONAUTIQUES AU 1/500 000 ème (normalisées OACI) établies suivant le canevas LAMBERT"
      },
      {
        "type": "text",
        "text": "Echelle 1/500 000 : soit 1 cm = 5 km = 2.7 Nm La couverture de l’espace aérien français est réalisée par 4 cartes."
      },
      {
        "type": "list",
        "items": [
          "FRANCE NORD-OUEST",
          "FRANCE SUD-OUEST",
          "FRANCE NORD-EST",
          "FRANCE SUD-EST"
        ]
      },
      {
        "type": "text",
        "text": "Elles donnent une information détaillée valable du sol au niveau de vol 115 soit 11 500 ft (environ 4 000 m)."
      },
      {
        "type": "text",
        "text": "Représentation conventionnelle La topographie : le relief est représenté par différentes couleurs appelées ‘’teintes hypsométriques” L’hydrographie : les canaux, les fleuves, les lacs, les étangs, etc., sont représentés en couleur bleue claire."
      },
      {
        "type": "text",
        "text": "Les espaces aériens : les limites horizontales sont représentées en surimpression en rouge (zones interdites, réglementées ou dangereuses plus le Réseau Très basse Altitude (RTBA) ou bleu foncé pour les espaces aériens contrôlés.."
      },
      {
        "type": "text",
        "text": "Les constructions : les routes sont représentées en rouge, les voies ferrées en noir, les agglomérations en jaune ou orange suivant leur importance (3 valeurs suivant la largeur de l’agglomération)."
      },
      {
        "type": "text",
        "text": "LES CARTES DE RADIONAVIGATION A VUE du S.l.A Canevas LAMBERT Echelle 1/1 000 000 (sauf région parisienne) Soit 1 cm = 10 km = 5.4 Nm"
      },
      {
        "type": "text",
        "text": "Couverture de l’espace aérien français par 2 cartes plus une pour la région parisienne au 1/250 000 ème."
      },
      {
        "type": "list",
        "items": [
          "FRANCE NORD",
          "FRANCE SUD"
        ]
      },
      {
        "type": "text",
        "text": "Représentation conventionnelle : le fond topographique est peu chargé au profit de la représentation des espaces aériens, des zones à statut particulier et des balises radioélectriques."
      },
      {
        "type": "text",
        "text": "Les cartes VAC Les cartes VAC sont des cartes d’atterrissages à vue concernant chaque aérodrome. Elles sont éditées par le SIA et ont pour but de renseigner le pilote sur les particularités de chaque aérodromes ( AD ), par exemple, leur statut (ouvert à la Circulation Aérienne Publique ou à Usage restreint ou réservé aux administrations d’Etat) mais également sur l’orientation des pistes, leurs longueurs spécifiques, les points d’entrée et de départ, les fréquences utilisées, les conditions d'approche pour les aéroports et aérodromes importants , la possibilité d’avitaillement, les stationnements et parkings, ..."
      },
      {
        "type": "text",
        "text": "Aérodrome ouvert à la Circulation Publique (CAP), tout aéronef indiqué peut utiliser cet aérodrome."
      },
      {
        "type": "text",
        "text": "Aérodrome à Usage Restreint comme celui d’Avranches LFRW (voir page suivante) signifie que seuls les aéronefs autorisés ou ayant demandé une autorisation peuvent s’y poser. Cette autorisation doit être à bord de l'avion au moment de vous y rendre, ces autorisations ne sont jamais définitives mais temporaires de date à date bien précises."
      },
      {
        "type": "text",
        "text": "Exemple de restriction d’emploi : Réservé aux aéronefs basés et à ceux basés sur les AD voisins, les AD voisins sont mentionnés sur la VAC."
      },
      {
        "type": "text",
        "text": "Encore pour les AD à usage restreint, une autre variante existe pour les terrains potentiellement dangereux ou difficiles d'accès comme celui de LA MOLE LFTZ, la qualification pour ce de terrain précis est obligatoire, les restrictions sont clairement données dans les consignes particulières. Si vous ne respectez pas les critères vous ne pouvez pas vous y poser."
      },
      {
        "type": "text",
        "text": "Concernant les fréquences à utiliser, on stipule les fréquences de radiocommunication (à gauche et en haut de la carte VAC) et de radionavigation (en haut et à droite de la carte VAC. Si pas de fréquence attribuée (cas des aérodromes non contrôlés, on indique A/A 123,5, ce qui signifie que les messages sont passés en l’air sans attendre de réponse mais simplement pour signaler aux autres aéronefs sa position et ses intentions et donc favoriser la sécurité de tous."
      },
      {
        "type": "text",
        "text": "La VAC de Rennes ci-contre servira d'exemple :"
      },
      {
        "type": "text",
        "text": "LFRN code OACI Alt 124 altitude du terrain en ft DEC 2°W (00) déclinaison magnétique Symboles de l’avion, de l’hélicoptère et de la voltige FIS : 134,0 et 126,95 App : Rennes Approche 134.00 Aéronefs et activités autorisés sur ce terrain Organisme d’information de vol (Secteurs d’information de vol sur Rennes Nord et sur Rennes Sud Organisme de contrôle et fréquence d'approche TWR 120,5 Fréquence de contrôle de la Zone de contrôle d’aérodrome ATIS 136,4 Fréquence du service automatisé d’envoi des paramètres (piste en service, procédures, conditions MTO, ...) VDF :"
      },
      {
        "type": "text",
        "text": "La tour est équipée d'un système Gonio pouvant donner un QDM au pilote pour rejoindre le terrain ILS / DME: RWY 28 RS 110.10 Fréquence de l’ILS pour atterrissage aux instruments piste 28, fréquence de l'ILS 110.10 indicatif morse RS CAP AD ouvert à la circulation aérienne publique RWY, QFU Dimensions, Nature, force N° de la piste 28, QFU 284° piste en dur revêtue, résistance à la charge de la piste LDA distance disponible à l'atterrissage (complète ou plus courte par seuil décalé) TODA distance disponible au décollage ASDA accelerate stop distance available"
      },
      {
        "type": "text",
        "text": ""
      },
      {
        "type": "text",
        "text": "L'ESTIME (Généralités )"
      },
      {
        "type": "text",
        "text": "Le principe consiste à définir, à l'aide d'une carte aéronautique à jour au 1/500000ème OACI, une position de départ, puis définir plusieurs points caractéristiques facilement identifiables sans confusion possible ou ambiguïté en cours de route, jusqu'à votre aérodrome de destination."
      },
      {
        "type": "text",
        "text": "Cette navigation permet de vous déplacer en ligne droite ou quasi ligne droite suivant vos repères sol choisis."
      },
      {
        "type": "text",
        "text": "C’est celle qui vous permettra de voyager le plus rapidement et le plus directement par rapport aux 2 autres types proposés."
      },
      {
        "type": "text",
        "text": "La navigation à l'estime demande de la rigueur dans le pilotage, dans la tenue du cap, choix et tenue de l'altitude, de la puissance moteur appliquée, du sérieux à bien noter les temps entre chaque point repères."
      },
      {
        "type": "text",
        "text": "Il faut savoir que l'avion est lié à la masse d'air qui elle est généralement en mouvement, le pilote à la charge de calculer sa dérive et sa Vitesse sol (Vs) par rapport à au vecteur vent (Vw) et la vitesse propre (Vp)"
      },
      {
        "type": "text",
        "text": "Pour mieux se représenter le principe des différentes vitesses d'un avion, voici une explication imagée tout à fait transposable à la réalité en vol :"
      },
      {
        "type": "text",
        "text": "Prenez un piéton qui marche sur le sol à 5 km/h, il aura une vitesse propre de 5 km/h, faites marcher ce piéton sur un tapis roulant en position arrêt, sa vitesse propre est toujours de 5 km/h et sa vitesse par rapport au sol également de 5 km/h."
      },
      {
        "type": "text",
        "text": "C'est ce qui se passe avec votre avion en vol, dans une masse d'air sans mouvement de vent, la VP est égale à la vitesse sol et la durée du vol sera celle du vol avec un temps sans vent (TSV)"
      },
      {
        "type": "text",
        "text": "Maintenant le tapis roulant se met en marche dans le sens de la marche du piéton à une vitesse de 2 km/h, le piéton marche toujours sur ce tapis à 5km/h, la vitesse propre du piéton est donc toujours de 5 km/h mais sa vitesse par rapport au sol est de 5 km/h + 2 km/h soit 7 km/h de Vs"
      },
      {
        "type": "text",
        "text": "Si te tapis fonctionne en sens inverse de la marche du piéton à 2 km/h, le piéton lui conserve sa vitesse propre de 5 km/h, mais la vitesse de déplacement par rapport au sol est de : 5 km/h moins 2 km/h soit 3 km/h."
      },
      {
        "type": "text",
        "text": "Ce constat s’applique également avec un avion qui se déplace dans une masse d'air en mouvement avec le vent. Cet avion conserve sa Vp mais est tributaire de la vitesse et du sens de déplacement de la masse d'air dans laquelle il évolue, tout comme le piéton marchant sur un tapis roulant."
      },
      {
        "type": "text",
        "text": "Vw est en général représenté sur les cartes par deux nombres 270/20 signifiant que le vent souffle du 270° par rapport au Nord vrai avec une force de 20kt. Sur certaines cartes Météo, nous pouvons également trouver une flèche orientée par rapport à la provenance du vent --------->>> sans en donner la vitesse."
      },
      {
        "type": "text",
        "text": "Sur les cartes des vents de Météo France, on ne figure que l’empennage de la flèche qui indique la force du vent (un triangle noir = 50 Kt, une grande barbule = 10 Kt et une petite barbule = 5 Kt."
      },
      {
        "type": "text",
        "text": "Exemple : \\\\\\ vent du 270° vitesse 30 Kt , direction donnée par l’angle de la droite avec le nord"
      },
      {
        "type": "text",
        "text": "Votre temps estimé en plus du vecteur vent (Vw) est dépendant de la puissance appliquée à votre moteur, votre vitesse propre (Vp) est directement liée à cette puissance, elle se contrôle par le nombre de tours moteur sur lu le compte tours. La puissance à utiliser est dépendante de l’altitude et du type de croisière choisi, soit croisière rapide (75% de la puissance nominale du moteur), croisière économique (65%) ou tout autre puissance de votre choix, ceci impactant votre temps estimé mais également votre consommation d’essence."
      },
      {
        "type": "text",
        "text": "L'importance à connaître en quasi permanence votre vitesse sol permet de gérer le temps de vol restant, la quantité d'essence nécessaire pour arriver à destination. Ce sont ces informations capitales qui vous feront prendre la décision de poursuivre le vol jusqu'à destination ou de prévoir un déroutement escale pour avitailler en cours de route."
      },
      {
        "type": "text",
        "text": "Il faut savoir que les pannes d'essence en vol sont à 75% à l’origine des accidents graves ou posé en campagne. Nous verrons dans un autre chapitre comment faire un bilan carburant avant de partir en navigation."
      },
      {
        "type": "text",
        "text": "Le principe de l'estime consiste avant le départ de votre AD (aérodrome) d’être en possession des informations météo, connaître le vent prévu à l'altitude de votre vol pendant le trajet."
      },
      {
        "type": "text",
        "text": "Calcul de l'éventuelle dérive. C’est au premier point de report que vous pourrez faire un rapprochement entre votre prévision et le temps et cap constatés, ce premier relevé conditionnera le pilotage à adopter pour la poursuite du vol."
      },
      {
        "type": "text",
        "text": "Pour vous permettre de réaliser ces calculs nous allons voir ensemble ci-dessous quelles sont les formules à appliquer."
      },
      {
        "type": "text",
        "text": "Les vitesses : Vp ou TAS = vitesse propre de l'avion par rapport à l'air (True Air Speed) en vol horizontal."
      },
      {
        "type": "text",
        "text": "Vs ou GS = vitesse sol, cette vitesse indique l’effet du vent par comparaison avec la vitesse propre."
      },
      {
        "type": "text",
        "text": "Vi ou IAS = vitesse lue sur le badin (indicateur de vitesse). Elle est égale à la vitesse propre lorsque la pression statique est égale à 1013 mb ou proche du sol en vol horizontal."
      },
      {
        "type": "text",
        "text": "Vc ou CAS = vitesse corrigée de la densité de l’air (+ 1% / 600 ft et +1% / 5°C)."
      },
      {
        "type": "text",
        "text": "La pression atmosphérique (statique) diminue avec l'altitude de 1% par 600ft, votre vitesse indiquée sera donc inférieure à la Vp, d’où en altitude, augmenter celle-ci de cette valeur. Exemple : pour une vitesse propre Vp de 100 Kt et à 6000 ft d’altitude, le badin affichera 90kts (100 -10% = 90 kts). Appliquer la correction."
      },
      {
        "type": "text",
        "text": "Calcul du temps sans vent Le principe : Connaître le temps pour parcourir un Nm (ou un Km si unité choisie). Avec une vitesse de 100 Kt, on parcourt 100 Nm en 1 heure (60 mn). Le temps mis pour parcourir 1 Nm s’appelle le facteur de base, il se calcule comme ci-dessous :"
      },
      {
        "type": "text",
        "text": "Fb = 60 / Vp"
      },
      {
        "type": "text",
        "text": "Exemple :"
      },
      {
        "type": "list",
        "items": [
          "Vitesse propre de l'avion : Vp = 100 Kt"
        ]
      },
      {
        "type": "text",
        "text": "Facteur de base : Fb = 60 / 100 = 0.6 (temps mis pour effectuer 1 Nm = 0,6 mn)."
      },
      {
        "type": "text",
        "text": "Temps sans vent TSV"
      },
      {
        "type": "text",
        "text": "Ce temps correspond au temps que l'avion mettra pour aller d'un point à un autre en l'absence totale de vent."
      },
      {
        "type": "text",
        "text": "Pour effectuer un Nm, on a mis 60 /Vp soit Fb, pour connaître le temps du voyage, il suffit donc de multiplier ce temps mis pour couvrir 1 Nm par le nombre de nautiques donc par la distance."
      },
      {
        "type": "text",
        "text": "La formule de calcul est : TSV = Distance x Fb"
      },
      {
        "type": "text",
        "text": "Exemple :"
      },
      {
        "type": "text",
        "text": "Vitesse propre Vp = 100 Kt Facteur de base 0,6 Distance : D = 100 Nm TSV : Temps sans vent = 100 x 0,6 = 60 minutes."
      },
      {
        "type": "text",
        "text": "Attention à ne pas mélangez pas les Kt avec les km, ou les km/h avec des Nm. Si vous utilisez les unités aéronautiques anglaises appliquez les jusqu'au bout, si vous prenez la vitesse en Kt, les distances devront être en Nm, si vous prenez une vitesse en km/h votre distance doit être en km."
      },
      {
        "type": "text",
        "text": "Par principe, en aéronautique les valeurs sont anglo-saxonnes, essayez de vous y tenir, cela vous aidera dans le futur."
      }
    ]
  },
  {
    "id": "effet-du-vent-effectif-et-du-vent-traversier",
    "number": "",
    "title": "Effet du vent  effectif et du vent traversier",
    "pages": [
      13,
      14
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Vent effectif est le vent parallèle au trajet suivi, il augmente ou diminue la vitesse de déplacement de l'avion par rapport au sol en fonction de la direction du vent s’il est de secteur arrière ou de face."
      },
      {
        "type": "list",
        "items": [
          "La vitesse sol Vs correspond à la Vp plus la vitesse du vent rencontré, voici un exemple simple également :",
          "Votre Vp est 100 Kt, vous volez au cap 270 ° et vous avez un vent effectif arrière de 40 Kt, votre Vs est"
        ]
      },
      {
        "type": "text",
        "text": "donc de 100 Kt + 40 Kt = 140 Kt par rapport au sol."
      },
      {
        "type": "list",
        "items": [
          "Si le vent effectif vient de face à une vitesse de 40 Kt votre Vs sera de 100 Kt - 40 Kt = 60 Kt par"
        ]
      },
      {
        "type": "text",
        "text": "rapport au sol."
      },
      {
        "type": "list",
        "items": [
          "Vent traversier provoque une dérive de l'avion. Dans ce cas on applique une correction de cap égale à"
        ]
      },
      {
        "type": "text",
        "text": "la valeur de la dérive. On oriente le nez de l'avion toujours du côté d’où vient le vent."
      },
      {
        "type": "list",
        "items": [
          "La dérive est l'écart entre la route suivie et le cap."
        ]
      },
      {
        "type": "text",
        "text": "Calcul de la dérive max (X) : Vitesse du vent (Kt) x par le facteur de base Fb, Par exemple : Si vitesse avion = 100 Kt, Fb = 60 / 100 = 0,6 et si vent de 20 Kt La dérive max = 20 Kt x 0,6 = 12 ° Si vent traversier perpendiculaire de la route, le cap à prendre sera donc inférieur de 12° si vent venant de la gauche ou supérieur de 12° si vent venant de la droite."
      },
      {
        "type": "text",
        "text": "ANGLE AU VENT L'angle au vent Alpha représente l'angle en degré formé entre la direction du vent (V) et la route magnétique (Rm) à suivre. Il doit toujours être inférieur à 90°. Si supérieur, retrancher 180°."
      },
      {
        "type": "text",
        "text": "Le sinus de cet angle sera utilisé pour le calcul de la dérive"
      },
      {
        "type": "list",
        "items": [
          "Alpha (en degrés) = direction du vent (Vw) -/+ route magnétique à suivre (Rm)"
        ]
      },
      {
        "type": "text",
        "text": "Alpha = V -/+ Rm Exemples : Vent vient du 220°, Rm à suivre = 150° Angle au vent Alpha = 220 - 150 = 70° Vent vient du 310°, Rm à suivre = 080° Angle au vent Alpha = 310 - 080 = 230 - 180 = 50°"
      },
      {
        "type": "text",
        "text": "DÉRIVE (x) La dérive (x) est l'écart entre la route suivie et le cap. La valeur de la dérive est dépendante de la vitesse du vent traversier et de sa direction. Plus l’avion se déplace rapidement, plus la dérive diminue."
      },
      {
        "type": "text",
        "text": "x (en degrés) = dérive maximum (X) x sin alpha (angle entre route et vent) x = X . sin alpha o Exemples :"
      },
      {
        "type": "text",
        "text": "Vp = 100 Kt Vent = 270° / 20 Kt Rm = 050° Fb = 60 / 100 = 0,6 Alpha = 270 -50 = 220 - 180 = 40° X = 20 x 0,6 = 12° (dérive max) sin 50 = 0,7 x = 12 x 0,7 = 8.4° (dérive réelle)"
      },
      {
        "type": "text",
        "text": "Nous reverrons ces symboles et formules au cours de la préparation d'une navigation à l'estime de façon à ce que vous puissiez exactement savoir où et comment les appliquer."
      }
    ]
  },
  {
    "id": "le-cheminement",
    "number": "",
    "title": "Le cheminement",
    "pages": [
      15,
      15
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Ce type de Navigation est le plus long en temps et en route de tous, c'est le moyen qui permet de voler à la verticale d'un point en portée visuelle. Il consiste à suivre les repères naturels comme les rivières ou les ouvrages autoroutiers."
      },
      {
        "type": "text",
        "text": "Pourquoi et quand le pratiquer. Chaque fois que pendant la navigation en cours les conditions météo se dégradent, le plafond devient bas et ne vous permet plus de voler suffisamment haut hors des nuages."
      },
      {
        "type": "text",
        "text": "Le fait de voler bas entraînera une perte totale ou partielle de la réception des aides à la radionavigation comme les balises VOR ou NDB. La visibilité ne permettra plus de visualiser correctement et avec certitude l'environnement de vos points de reports."
      },
      {
        "type": "text",
        "text": "Il faut savoir que les changements brutaux des conditions météo risquent de vous obliger à changer radicalement de cap par rapport à ceux prévus dans votre navigation à l'estime ou votre radionavigation. On applique donc volontairement soit le suivi de repères identifiables ou soit on réalise une erreur systématique pour aller rejoindre un repère naturel qui vous conduira surement sur votre AD de destination ou sur un AD de déroutement suivant la dégradation météo rencontrée."
      },
      {
        "type": "text",
        "text": "Comment se pratique le cheminement :"
      },
      {
        "type": "text",
        "text": "Placez votre avion toujours à la droite du repère que vous avez choisi de suivre, cette méthode vous permet de garder le contact visuel permanent sans être obligé de faire des contorsions pour le voir si vous volez à la gauche du dit repère ou à sa verticale."
      },
      {
        "type": "text",
        "text": "Les bons repères sont : les fleuves et rivières, les lacs, les routes, les autoroutes, les forêts, les voies ferrées, les grandes villes et certaines fois les lignes EDF haute tension surtout lorsqu’elles traversent les forêts."
      },
      {
        "type": "text",
        "text": "  "
      }
    ]
  },
  {
    "id": "consignes-donnees-par-exemple-aux-pilotes-d-avio",
    "number": "",
    "title": "Consignes données par exemple aux pilotes d’avion léger",
    "pages": [
      15,
      15
    ],
    "blocks": [
      {
        "type": "text",
        "text": "IMPORTANT : Si la météo s'est dégradée, il en va de même pour les autres avions qui évoluent dans cette région, donc en plus de suivre visuellement le repère choisi, OUVREZ GRANDS LES YEUX à l'extérieur, soyez hyper vigilant pour ne pas risquer un abordage avec un autre avion cheminant tout comme vous sur le même repère, n'hésitez pas à faire de l'auto information pour signaler votre position et votre présence aux autres éventuels aéronefs."
      },
      {
        "type": "text",
        "text": "IMPORTANT : veillez également à ce que, lorsque vous prenez la décision de naviguer par cheminement, le repère naturel que vous voulez suivre ne vous amène pas dans un espace aérien interdit comme une Z.I.T par exemple, veillez également à respecter les hauteurs de survol minimum autorisées, ainsi que les distances horizontales minimales autorisées des obstacles rencontrés en cours du cheminement."
      },
      {
        "type": "text",
        "text": "IMPORTANT : si vraiment les conditions météo sont médiocres et à risques, interrompez votre vol, ne serait- ce que provisoirement, soit en faisant demi-tour avant de vous retrouver dans une galère, soit en prenant l'option d'un déroutement sur un AD proche pouvant vous accueillir, soit d’appliquer la procédure d’interruption volontaire du vol dans une aire appropriée. Le jusqu'au boutisme se termine à 99,99 % par un crash et vous ne serez plus de ce monde pour raconter l'aventure."
      },
      {
        "type": "text",
        "text": "Volez prudent"
      },
      {
        "type": "text",
        "text": "  "
      }
    ]
  },
  {
    "id": "la-radionavigation",
    "number": "",
    "title": "La radionavigation",
    "pages": [
      16,
      16
    ],
    "blocks": [
      {
        "type": "text",
        "text": "La radionavigation est basée sur l’utilisation de la radiogoniométrie et des moyens radioélectriques."
      },
      {
        "type": "text",
        "text": "Mesure des angles et des distances par détermination de la direction d'une onde électromagnétique ou du temps de réflexion d’un signal (système d’antennes directives et par une mesure d'amplitude ou de phase."
      }
    ]
  },
  {
    "id": "la-gonio-vdf",
    "number": "",
    "title": "La gonio ( vdf )",
    "pages": [
      16,
      16
    ],
    "blocks": [
      {
        "type": "text",
        "text": "La Gonio dans une TWR Antenne Gonio"
      },
      {
        "type": "text",
        "text": "La goniométrie permet de donner un cap permettant à un avion de revenir vers l’aérodrome en cas d’égarement (QDM). Il est possible en donnant plusieurs QDM émanant de plusieurs contacts de positionner un avion dans l’espace."
      },
      {
        "type": "text",
        "text": "Le VDF fonctionne dans la gamme des 118 MHz à 136 MHz. Il est généralement installé dans la tour de contrôle."
      },
      {
        "type": "text",
        "text": "Ses avantages : Bonne précision Insensible aux perturbations météo"
      },
      {
        "type": "text",
        "text": "Inconvénients : Nécessite un opérateur dans la tour Information non continue au pilote Onde VHF à portée optique, sensible aux masses environnantes."
      },
      {
        "type": "text",
        "text": "Principe Son principe de fonctionnement est simple, la Gonio utilisée en aéronautique est un système de guidage Sol/Air géré depuis le sol par un opérateur, lorsque l'avion émet avec sa VHF, l'émission hertzienne est analysée par l’appareil : Gonio, qui instantanément allume une diode sur la rose des vents de la console en donnant le cap d'où vient l'émission. Sur la photo, la diode rouge est allumée vers le 350° sur la console de droite, l’opérateur Gonio indiquera au pilote par radio le cap à suivre (QDM) pour qu'il puisse se diriger vers la station."
      },
      {
        "type": "text",
        "text": "Exemple : Si vous êtes dans le sud du terrain et que vous vous annoncez comme étant au nord, le contrôleur verra votre position et pourra vous donner directement la route à suivre pour revenir au terrain. Ce guidage pourra être confirmé à chacun de vos appels."
      },
      {
        "type": "text",
        "text": "  "
      }
    ]
  },
  {
    "id": "balises-ndb-radiophares-moyennes-frequences-mf",
    "number": "",
    "title": "Balises ndb radiophares moyennes frequences (mf)",
    "pages": [
      17,
      19
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Radiobalises non directionelles"
      },
      {
        "type": "text",
        "text": "Ces radiobalises sont implantées au sol, ce sont des émetteurs omnidirectionnels utilisant la gamme de fréquences de 200 kHz à 1750 kHz. L'émission provient de l'antenne comme sur la photo ci-dessus en haut ; à bord de l'avion se trouve le récepteur radiocompas ADF (photo au centre) ainsi que l'indicateur du radiocompas ADF (photo au centre bas ci-dessus) indiquant la direction ou se trouve l'émetteur au sol."
      },
      {
        "type": "text",
        "text": "Chaque balise NDB à sa fréquence propre. Exemple la balise NDB de Rennes servant de balise pour la piste 28 de Rennes sera calé sur 349 kHz. Sur la photo la fréquence du récepteur est 368 kHz."
      },
      {
        "type": "text",
        "text": "En vol, l’affichage de la fréquence de la NDB permet d’avoir directement la direction de la balise par rapport à l’axe longitudinale de l’avion. Il ne reste plus qu'à suivre la direction indiquée par l'aiguille pour rejoindre la balise (flèche dans l’axe de l’avion)."
      },
      {
        "type": "text",
        "text": "La puissance des balises NDB varie entre 50 watts et 5 kilowatts avec des portées d'au moins 50 Nm pouvant aller jusqu'à 300 Nm."
      },
      {
        "type": "text",
        "text": "Les balises NDB à faible puissance sont utilisées proches des AD et servent souvent de point d'entrée d'un circuit et également au circuit d'attente pour les arrivées IFR."
      },
      {
        "type": "text",
        "text": "Les balises NDB puissantes sont placées sur les airways et servent à la radionavigation."
      },
      {
        "type": "text",
        "text": "Avantages :"
      },
      {
        "type": "text",
        "text": "Portée puissante même à basse altitude selon la puissance rayonnée (PAR)"
      },
      {
        "type": "text",
        "text": "Elles sont utilisables par un nombre illimité d'avions en route, en procédure et en approche."
      },
      {
        "type": "text",
        "text": "Ses Inconvénients :"
      },
      {
        "type": "text",
        "text": "Imprécision à la verticale due à un cône de silence en réception"
      },
      {
        "type": "text",
        "text": "Très sensibles aux charges électrostatiques et difficilement utilisables dans un système orageux, tout nuage chargé en électricité statique perturbe la réception."
      },
      {
        "type": "text",
        "text": "Déviation de l'onde au voisinage des côtes et montagnes"
      },
      {
        "type": "text",
        "text": "Soumis à la propagation ionosphérique des ondes, principalement la nuit, ce qui peut provoquer des erreurs avec d'autres NDB lointaines ayant la même fréquence."
      },
      {
        "type": "text",
        "text": "Emplacement des NDB et L"
      },
      {
        "type": "text",
        "text": "Les informations sur leur emplacement figurent sur les cartes aériennes de radionavigation, les cartes d'arrivée et d'approche"
      },
      {
        "type": "text",
        "text": "Leur indicatif est à 3 lettres alors que les balises NDB type L placées en approche et arrivée sont à deux lettres. Identifiable par écoute et signaux sonores morse."
      },
      {
        "type": "text",
        "text": "Cadran de lecture du radiocompas ou ADF ( ci contre )"
      },
      {
        "type": "text",
        "text": "Comprend une aiguille qui pointe vers la station et en donne le gisement par rapport à l'axe de l'avion."
      },
      {
        "type": "text",
        "text": "Une rose des vents graduée mobile permet la lecture de la valeur du gisement Gt, si elle est alignée sur l'axe de l'avion"
      },
      {
        "type": "text",
        "text": "Si elle est calée sur le cap magnétique Cm elle fournit par contre le QDM."
      },
      {
        "type": "text",
        "text": "L’axe de l'avion est matérialisé par une maquette représentant l'avion au centre du cadran."
      },
      {
        "type": "text",
        "text": "Dans tous les cas le QDM se calcule par relation : QDM=Cm+Gt ou QDM= Cm+Gt-360. Exemple : Cm = 065° Gt = 030° QDM = 095 ou bien Cm= 330° Gt= 170° = 140° ( 330+170=500 - 360 = 140°)"
      },
      {
        "type": "text",
        "text": "Utilisation du radiocompas :"
      },
      {
        "type": "text",
        "text": "Se mettre sur ADF Afficher la fréquence de la NDB Écouter le signal morse pour l'identifier Attendre que l'aiguille soit stabilisée sur un gisement Gt Régler le récepteur ADF sur REC/TEST, laisser l'aiguille tourner et revenir en mode ADF Vérifier qu'elle est bien revenue sur la position du gisement trouvé avant le test Ne reste plus qu'à exploiter le gisement lu."
      },
      {
        "type": "text",
        "text": "Les lectures doivent être faites en vol rectiligne et horizontale pour être juste"
      },
      {
        "type": "text",
        "text": "Attention n'oubliez pas que l'instrument donne le gisement par rapport à l'axe de l'avion et non par rapport à sa trajectoire."
      },
      {
        "type": "text",
        "text": "Pour avoir un Gt par rapport à la trajectoire il faut tenir compte de la dérive et de la déclinaison."
      },
      {
        "type": "text",
        "text": "IMPORTANT :"
      },
      {
        "type": "text",
        "text": "Danger, car le QDM se déduit de l'information du compas magnétique et du conservateur de cap."
      },
      {
        "type": "text",
        "text": "Veillez à recaler régulièrement et systématiquement le conservateur de cap, ne jamais faire de lecture rapide du compas magnétique après en virage."
      },
      {
        "type": "text",
        "text": "Un mauvais calage peut être catastrophique et dangereux lors d'une approche au radiocompas. (Ceci uniquement pour les percées NDB réalisées en IFR) La position de la flèche rouge nous donne l'angle que fait la direction de la station avec l'axe de l'avion."
      }
    ]
  },
  {
    "id": "le-vor",
    "number": "",
    "title": "Le vor",
    "pages": [
      20,
      20
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Balise VOR au sol Recepteur VOR à Bord Cadran du VOR"
      },
      {
        "type": "text",
        "text": "Le radiophare VHF omnidirectionnel dont le nom Anglais VHF Omni Range, est un type de balise dont les signaux sont exploités par l'appareil de bord que nous avons l'habitude d'appeler VOR."
      },
      {
        "type": "text",
        "text": "Ce système fournit un QDM ou un QDR. la gamme de fréquence est de 108 Mhz à 117.95 Mhz"
      },
      {
        "type": "text",
        "text": "il existe 2 types de VOR :"
      },
      {
        "type": "text",
        "text": "Le T-VOR ou Terminal VOR de courte portée de +/- 40 nm servant aux atterrissages et aux arrivées, sa fréquence va de 108 à 112 Mhz, le T-VOR a un indicatif à 2 lettres"
      },
      {
        "type": "text",
        "text": "Le VOR-NAV pour la navigation à moyenne distance a une portée est +/- 100 nm dans la gamme de fréquence de 112 à 117.95. Le VOR-NAV a un indicatif à 3 lettres"
      },
      {
        "type": "text",
        "text": "Les avantages : Bonne précision Bonne stabilité Insensible aux perturbations électriques Indications permanentes Utilisables par un nombre d'avion illimité simultanément Possibilité de le coupler à un pilote automatique."
      },
      {
        "type": "text",
        "text": "Les inconvénients : Portée visuelle donc inefficace à basse altitude et en relief. Imprécision à la verticale due au cône de silence Imprécision lors d'un passage travers, 10° de part et d'autre du radial travers."
      },
      {
        "type": "text",
        "text": "Sensible au relief montagneux et obstacles dû à la fréquence VHF qui est à portée optique."
      },
      {
        "type": "text",
        "text": "Le cadran de lecture :"
      }
    ]
  },
  {
    "id": "soit",
    "number": "",
    "title": "Soit",
    "pages": [
      20,
      23
    ],
    "blocks": [
      {
        "type": "text",
        "text": "La lecture se fait avec un CDI (course déviation indicator) qui comporte une rose des vents mobile, commandée par un bouton appelé OBS, ce bouton sert à afficher le QDM ou le QDR ou le radiale."
      },
      {
        "type": "text",
        "text": "Le CDI est celui que nous trouvons le plus souvent dans nos avions légers."
      },
      {
        "type": "text",
        "text": "La lecture se fait avec HSI (Horizontal Situation Indicator) qui comprend une rose mobile asservie au compas, un pointeur nommé poignard que l'on positionne sur l'axe choisi à l'aide de l'OBS, mais qui tourne avec la rose. Une aiguille d’écart et une maquette d'avion au centre du cadran qui représente l'axe de l'avion. Tout est intégré ce qui permet de visualiser l'évolution de la trajectoire."
      },
      {
        "type": "text",
        "text": "la lecture se fait avec le RMI (Radio Magnetic Indicator) comme avec le radiocompas l'aiguille pointe sur la station et donne le QDM ou QDR actuel en permanence."
      },
      {
        "type": "text",
        "text": "L'utilisation facile du VOR sur CDI (cas des avions d’aéroclub)"
      },
      {
        "type": "text",
        "text": "Principes fondamentaux : Une fois la fréquence du VOR affichée sur le récepteur, identifier le VOR par son indicatif morse, ceci est très important car il se peut que par très bonne propagation des ondes, vous receviez un autre VOR distant de + 200 NM ayant une fréquence identique, cela peut arriver en zones frontalières."
      },
      {
        "type": "text",
        "text": "Il se peut également que vous vous soyez trompés de fréquence ou tout simplement vous avez oublié d'afficher la fréquence du nouveau VOR que vous souhaitez utiliser."
      },
      {
        "type": "text",
        "text": "Alphabet Morse utile à l'identification des balises VOR, NDB et ILS"
      },
      {
        "type": "text",
        "text": "A N B O C P D Q E R F S G T H U I V J W K X L Y M Z"
      },
      {
        "type": "text",
        "text": "Lorsque le VOR est identifié avec certitude, n'oubliez pas de baisser le volume du récepteur audio du VOR, sinon vous aurez un bruit de fond désagréable et gênant dans votre casque pour suivre le trafic radio VHF, et vous risquez de croire à un problème radio ou une panne sur votre VHF"
      },
      {
        "type": "text",
        "text": "UTILISATION DU VOR 1 - Positionner par la pensée l'avion au cap correspondant à l'axe sélectionné à l'aide du bouton OBS ;"
      },
      {
        "type": "text",
        "text": "2 - Ne pas oublier que l'indication de l'aiguille est indépendante du cap de l'avion ;"
      },
      {
        "type": "text",
        "text": "3 - Travailler en TO pour aller sur la station (QDM) ;"
      },
      {
        "type": "text",
        "text": "4 - Travailler en FR pour s'éloigner de la station (QDR) ou pour un recoupement en flanquement ;"
      },
      {
        "type": "text",
        "text": "5 - Évitez de travailler avec des aiguilles anti directionnelles c'est à dire recaler la route avec l'OBS, mais piloter de façon à ce que ce soit l'avion qui aille chercher l'aiguille. (voir l'exemple photo N°2 VOR ci-contre.)"
      },
      {
        "type": "text",
        "text": "6 - Si l'indicateur TO est apparent, les indications données par l'instrument seront relatives à un QDM ;"
      },
      {
        "type": "text",
        "text": "7 - Si l'indicateur FR est apparent les indications données par l'instrument seront relatives à un QDR ;"
      },
      {
        "type": "text",
        "text": "8 - Si l'indicateur est sur OFF, c'est que vous ne recevez pas le VOR (mauvaise fréquence, hors de portée, VOR en panne ou récepteur VOR avion en panne)."
      },
      {
        "type": "text",
        "text": "1/-le rond central représente l'avion et de chaque côté cinq points de 2° de déviation. La précision de l'information est donc de 10° de chaque côté."
      },
      {
        "type": "text",
        "text": "2/- Une aiguille mobile qui représente la route sélectionnée"
      },
      {
        "type": "text",
        "text": "3/- Le bouton OBS (Omni Bearing Selector) fait tourner la couronne (4) de sélection du radial."
      },
      {
        "type": "text",
        "text": "4/- Une couronne de routes magnétiques en dizaine de degrés."
      },
      {
        "type": "text",
        "text": "5/- Aiguille de déviation, index d'affichage de route"
      },
      {
        "type": "text",
        "text": "6/- Flèches TO (Allez vers) et FROM(Venir de ) d'orientation de la route affichée devant l'index (5) To=QDM / From=QDR, En drapeau (Flag) rouge ou Off est le signal de non fonctionnement ou de non réception du VOR"
      },
      {
        "type": "text",
        "text": "7/- écart de route, déplacement horizontal pour indiquer si l'avion est à gauche ou à droite de la radiale affichée, gradué tous les 2° , déviation maxi de 10°. En version ILS mode LOC la graduation est de 0.5° avec une déviation max de 2.5°"
      },
      {
        "type": "text",
        "text": "Exemple : Sur la photo 2 ci-contre, vous êtes en éloignement du VOR sur la radiale 358, la station se trouve sur la gauche de la position de l'avion, vous avez un écart de 7°, pour reprendre correctement votre radiale il vous faut tourner à gauche car vous avez subit une dérive à droite."
      },
      {
        "type": "text",
        "text": "Détermination et correction de la dérive"
      },
      {
        "type": "text",
        "text": "Le but est de mesurer la correction de dérive à appliquer pour rester sur l'axe de la radiale, voici comment faire de manière simple :"
      },
      {
        "type": "text",
        "text": "Exemple : vous suivez la radiale 080° avec un vent venant du nord, vous avez subi une dérive de 5° Estimer la dérive par le calcul si possible ( 5° ) Le cap à suivre sera le : (80° - 5° = 075°)"
      },
      {
        "type": "text",
        "text": "Avec un radiocompas ou ADF si le gisement reste constant c'est que la dérive est correctement corrigée égale au gisement. Si le gisement varie il y a soit sur-correction, soit sous correction, qu'il va falloir retoucher."
      },
      {
        "type": "text",
        "text": "Avec un, VOR, la dérive est corrigée si l'aiguille reste au milieu sinon il faudra fignoler la correction."
      },
      {
        "type": "text",
        "text": "Lorsque l'aiguille est au milieu la dérive est égale à la différence entre la radiale et le cap."
      },
      {
        "type": "text",
        "text": "Pour pouvoir revenir sur l'axe après s'être fait surprendre par un petit écart, voici une petite astuce :"
      },
      {
        "type": "text",
        "text": "à moins de 3 minutes de la station on corrige du double l'écart, à plus de 3 minutes on corrige du triple, en suite une fois revenu sur l'axe on peaufine pour y rester."
      },
      {
        "type": "text",
        "text": "QDM = Radiale pour rejoindre la station"
      },
      {
        "type": "text",
        "text": "QDR= Radiale d'éloignement de la station"
      }
    ]
  },
  {
    "id": "les-radars",
    "number": "",
    "title": "Les radars",
    "pages": [
      24,
      24
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Radar :"
      }
    ]
  },
  {
    "id": "les-fir",
    "number": "",
    "title": "Les fir",
    "pages": [
      24,
      27
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Radio Dectection And Ranging, detection radioélectrique et évaluation de la distance, le Radar fonctionne en UHF à très forte puissance, il envoie des impulsions directives avec un faisceau très fin et mesure le temps de retour de l'écho pour le convertir en distance."
      },
      {
        "type": "text",
        "text": "La position de l'avion en site et azimut est visualisée sur un écran dans la salle radar."
      },
      {
        "type": "text",
        "text": "Lorsque le pilote émet un message en phonie, le spot correspondant à l'avion est repéré parmi les autres."
      },
      {
        "type": "text",
        "text": "Radar panoramique : ASR (Air Surveillance Radar)"
      },
      {
        "type": "text",
        "text": "Ce type de radar est du type primaire, c'est à dire basé sur la réflexion d'un signal sur une cible L'avion doit être de dimension suffisante pour donner un écho exploitable."
      },
      {
        "type": "text",
        "text": "1/-Avant d'arriver à la balise VOR, le récepteur affiche la mention TO. Nous sommes en rapprochement de la balise"
      },
      {
        "type": "text",
        "text": "2/- Au passage de la verticale, le récepteur passe en OFF, ne pas chercher à modifier l'OBS, nous sommes dans le cône de silence de la balise"
      },
      {
        "type": "text",
        "text": "3/- Quelques NM plus loin, le récepteur affiche la mention FROM, nous sommes en éloignement du VOR"
      },
      {
        "type": "text",
        "text": "Radar Secondaire, Transpondeur"
      },
      {
        "type": "text",
        "text": "SSR (Seconder Surveillance Radar) Le radar secondaire ne détecte pas le retour d'un écho mais reçoit une réponse radioélectrique de l'avion, qui doit de ce fait être équipé d'un répondeur de bord appelé Transpondeur."
      },
      {
        "type": "text",
        "text": "L'installation au sol est couplée à un radar panoramique"
      },
      {
        "type": "text",
        "text": "Lorsque le transpondeur reçoit une impulsion, il envoie une réponse codée donnant un symbole caractéristique sur l'écran de l'opérateur Les confusions d'écho sont par ce fait éliminées."
      },
      {
        "type": "text",
        "text": "Le code transpondeur est donné par l'opérateur puis sélectionné à bord de l'avion par le pilote."
      },
      {
        "type": "text",
        "text": "Il existe 3 types de transpondeur :"
      },
      {
        "type": "list",
        "items": [
          "Mode A : Identification de l'avion.",
          "Mode C : Identification de l'avion et report d'altitude grâce à un alticodeur embarqué avec"
        ]
      },
      {
        "type": "text",
        "text": "une précision de ± 50 ft."
      },
      {
        "type": "list",
        "items": [
          "Mode S : Compatible avec les modes A et C et répondant aux futures nécessités"
        ]
      },
      {
        "type": "text",
        "text": "d'automatisation et d'amélioration des radars de contrôle de la circulation aérienne."
      },
      {
        "type": "text",
        "text": "Quelques précisions sur l’utilisation, des codes transpondeurs"
      },
      {
        "type": "text",
        "text": "Le système SSR Mode A utilisable à partir des décodeurs au sol et des transpondeurs de bord est basé sur l’allocation de 4096 codes numériques possibles."
      },
      {
        "type": "list",
        "items": [
          "les 2 premiers digits définissent une série de codes,",
          "les 3 premiers digits définissent un bloc de codes,",
          "les 4 digits définissent un code",
          "le code 0000 n’est pas utilisé"
        ]
      },
      {
        "type": "text",
        "text": "La répartition de ces différents codes est la suivante :"
      },
      {
        "type": "list",
        "items": [
          "codes à usage militaire",
          "codes à usage civil/militaire utilisés à des fins de circulation aérienne."
        ]
      },
      {
        "type": "text",
        "text": "Vous comprendrez que les codes qui peuvent vous être alloués par tel ou tel organisme lors de votre vol répondent à une logique. Soyez attentifs à afficher le bon code pour éviter quelques surprises."
      },
      {
        "type": "text",
        "text": "En effet certains codes sont dits « particuliers » puisqu’ils sont destinés à préciser la nature d’un vol ou d’une situation ponctuelle."
      },
      {
        "type": "text",
        "text": "Par exemple : Appareil en vol VFR en espace aérien non contrôlé 7000 Appareil en mission de sûreté aérienne 7400 Appareil en panne radio 7600 Appareil en détresse 7700 Intervention illicite à bord 7500"
      },
      {
        "type": "list",
        "items": [
          "Les codes transpondeurs sont fournis et transmis en téléphonie via radio VHF au pilote"
        ]
      },
      {
        "type": "text",
        "text": "par le contrôleur aérien."
      },
      {
        "type": "text",
        "text": "Obligations d'emport a) Obligations Tout aéronef est équipé d'un transpondeur mode A+C avec alticodeur ou d'un transpondeur mode S niveau 2 au moins avec alticodeur:"
      },
      {
        "type": "list",
        "items": [
          "En espace aérien de classe B, C et D",
          "Pour suivre certains itinéraires ou pour pénétrer dans certains espaces aériens portés à la"
        ]
      },
      {
        "type": "text",
        "text": "connaissance des usages par la voie de l'information aéronautique."
      },
      {
        "type": "list",
        "items": [
          "Pour effectuer un vol de nuit autre que local."
        ]
      },
      {
        "type": "text",
        "text": "Calcul Mental"
      },
      {
        "type": "text",
        "text": "1) Facteur de base Fb = 6O / Vp"
      },
      {
        "type": "text",
        "text": "Vp peut être en Km/h, Kt ou SM (statute mile)"
      },
      {
        "type": "text",
        "text": "2) Dérive max X = Vw . Fb"
      },
      {
        "type": "text",
        "text": "Attention à Ia concordance des unités"
      },
      {
        "type": "text",
        "text": "si Vp en Km/h, prendre Vw en Km/h"
      },
      {
        "type": "text",
        "text": "3) Angle au vent α"
      },
      {
        "type": "text",
        "text": "plus petit angle (< 90°) entre RV et Vw"
      },
      {
        "type": "text",
        "text": "4) Recherche des sin α et cos α"
      },
      {
        "type": "text",
        "text": "α compris entre 0 et 20°, sin α= α / 100 + 0.1 ;"
      },
      {
        "type": "text",
        "text": "α compris entre 20° et 70°, sin α= α / 100 + 0,2"
      },
      {
        "type": "text",
        "text": "ex : sin 30° = 30 / 100 + 0,2 = 0,5"
      },
      {
        "type": "text",
        "text": "α supérieur à 70°, sin α = 1"
      },
      {
        "type": "text",
        "text": "Pour les cosinus : Cos α = sin (90 - α)"
      },
      {
        "type": "text",
        "text": "ex : cos 50° = sin (90° - 50°) = sin 40° = 0,6"
      },
      {
        "type": "text",
        "text": "5) Dérive sur axe x = X . sin α"
      },
      {
        "type": "text",
        "text": "6) Temps de vol sans vent Tsv = D. Fb"
      },
      {
        "type": "text",
        "text": "7) Effet vent sur vitesse sol Ve = Vw . cos α"
      },
      {
        "type": "text",
        "text": "8) Vitesse sol Vs = Vp ± Ve"
      },
      {
        "type": "text",
        "text": "9) Temps de vol réel"
      },
      {
        "type": "text",
        "text": "Calcul au sol par méthode des “t” :"
      },
      {
        "type": "list",
        "items": [
          "Effet du vent sur le temps de vol"
        ]
      },
      {
        "type": "text",
        "text": "correction en secondes par minute de vol t = X . cos α"
      },
      {
        "type": "text",
        "text": "d’ou l’on tire “tc” le temps corrigé suivant le tableau du bas de page."
      },
      {
        "type": "list",
        "items": [
          "Temps de vol réel (méthode des “t”)"
        ]
      },
      {
        "type": "text",
        "text": "Tr = Tsv ± (Tsv.tc) / 60"
      },
      {
        "type": "text",
        "text": "Méthode en vol : Tr = D . (60 / Vs)"
      },
      {
        "type": "text",
        "text": "(60 / Vs est le facteur de base réel : Fbr)"
      },
      {
        "type": "text",
        "text": "10) Calculs complémentaires (pour info)"
      },
      {
        "type": "list",
        "items": [
          "Vent traversier (équivalent Vit Vent plein travers)"
        ]
      },
      {
        "type": "text",
        "text": "Vt = Vw. sin α (utile pour l’atterrissage)"
      },
      {
        "type": "text",
        "text": "Vt = x / Fb (en voyage Rm - Cm / Fb)"
      },
      {
        "type": "list",
        "items": [
          "Connaissance du vent en voyage"
        ]
      },
      {
        "type": "text",
        "text": "Direction tg α = x / t"
      },
      {
        "type": "text",
        "text": "Force Vw = X / Fb"
      },
      {
        "type": "text",
        "text": "Une méthode de résolution des calculs de navigation Retrancher votre Dérive, Cela vous Donne maintenant Chaque mesure du Cap compas Rv – X = Cv ; Cv – Dm = Cm ; Cm – d = Cc."
      },
      {
        "type": "text",
        "text": "Calcul des éléments de navigation La vitesse du vent peut être décomposée en deux vitesses orthogonales,"
      },
      {
        "type": "list",
        "items": [
          "un équivalent vitesse VENT TRAVERSIER (Vt)"
        ]
      },
      {
        "type": "text",
        "text": "perpendiculaire à la Rv ;"
      },
      {
        "type": "list",
        "items": [
          "un équivalent vitesse VENT EFFECTIF (Ve)"
        ]
      },
      {
        "type": "text",
        "text": "parallèle à la Rv mais de sens opposé."
      },
      {
        "type": "text",
        "text": "Vent traversier (Vt) Vt = Vw . sin a mais aussi Vt = Vp. sin x d’où l’on tire le calcul de la DÉRIVE SUR AXE x° = X° .sin a"
      },
      {
        "type": "text",
        "text": "Effets du vent sur la navigation A retenir pour les sinus donc pour le calcul de la dérive :"
      },
      {
        "type": "text",
        "text": "Sinus d’un angle = angle/100 + 0,2 entre 20 et 70 °. Entre 0 et 20, sinus = angle/100 + 0,1."
      },
      {
        "type": "text",
        "text": "Angle sup à 70° : sinus = 1 Exemple :Si le vent à un angle de :"
      },
      {
        "type": "list",
        "items": [
          "30° = prenez le multiplicateur   de 0,5",
          "45° = prenez le multiplicateur   de 0,7",
          "60° = prenez le multiplicateur   de 0,8",
          "Si le vent a un angle de 40° prenez le multiplicateur de 45° soit 0.7 qui est le plus proche"
        ]
      },
      {
        "type": "text",
        "text": "A retenir pour les cosinus donc pour le calcul de la correction de temps: Ils sont égaux aux sinus de l’angle complémentaire soit = (90° - a °)"
      },
      {
        "type": "list",
        "items": [
          "Cos a ° = Sin 90° - a °"
        ]
      },
      {
        "type": "text",
        "text": "Cos 20° = sin 90° - 20° = sin 70° = 0,9"
      },
      {
        "type": "list",
        "items": [
          "Cos 0° = sin 90° = 1"
        ]
      },
      {
        "type": "text",
        "text": "Cos 30° = sin 90° - 30° = sin 60° = 0,8"
      },
      {
        "type": "list",
        "items": [
          "Cos 90° = sin 0° = 0"
        ]
      },
      {
        "type": "text",
        "text": "Cos 50° = sin 90° - 40° = sin 50° = 0,7"
      },
      {
        "type": "text",
        "text": "Exemple de navigation : Nav Brest – Quimper RV = 160°, Vp = 100 Kt, Vw = 300°/20Kt"
      },
      {
        "type": "text",
        "text": "Fb = 60 / 100 = 0,6 X° = Fb . Vw = 0,6 . 20 = 12°"
      },
      {
        "type": "text",
        "text": "a ° = 160° – (300° – 180°) = 040° x° = X° . sin a ° = 12° . sin 40° = 7° Dérive vers la gauche donc négative : x° = - 7° Cv = Rv – x° = 160° - (-7°) = 167°."
      },
      {
        "type": "text",
        "text": "Exemple pour décision d’Atterrissage en piste 28 : En finale TWR annonce Vw = 310°/25 Kt Vent de travers démontré pour Cessna 172 = 15 Kt"
      },
      {
        "type": "text",
        "text": "Angle au vent à l’atterrissage, a ° = 310° - 280° = 30° Vent traversier = Vw . sin a ° = 25Kt . sin 30° = 25 . 0,5 = 12,5 Kt Vent démontré non franchie donc atterrissage dans les normes"
      },
      {
        "type": "text",
        "text": ""
      },
      {
        "type": "text",
        "text": "Vent effectif (Ve) Ve = Vw . cos a et Vs = Vp - Ve (si vent secteur avant)"
      },
      {
        "type": "text",
        "text": "ou Vs = Vp + Ve (si vent secteur arrière)."
      }
    ]
  },
  {
    "id": "memento-de-preparation-du-voyage",
    "number": "",
    "title": "Mémento de préparation du voyage",
    "pages": [
      28,
      28
    ],
    "blocks": [
      {
        "type": "text",
        "text": "1) Tracer la route sur carte au 1/500 000, (attention renseignements fournis sur carte jusqu’au FL 115) ou (et) sur carte de radionavigation au 1/1 000 000 si altitude voyage > FL115."
      },
      {
        "type": "text",
        "text": "2) Repérer les zones à statut particulier (P - D - R), les zones temporaires (ZIT, ZDT, ZRT et TRA), les RTBA, les zones spécialisées (TSA et CBA ), et les espaces aériens contrôlés (classes A, B, C, D et E), établir un diagramme de traversée de zones et d’espaces aériens contrôlés (choix des altitudes de voyage)."
      },
      {
        "type": "text",
        "text": "3) Étalonner le parcours en fonction de points caractéristiques distants de 12 à 20 minutes de vol environ et noter ces repères, les points tournants et les points culminants critiques et définir les altitudes de sécurité (+ 500 ft AGL ou + 500 ft au-dessus des obstacles)."
      },
      {
        "type": "text",
        "text": "4) Calculer les éléments primaires de navigation (RV, RM, D, Fb, Tsv., ..)."
      },
      {
        "type": "text",
        "text": "5) Repérer les fréquences COM de route (SIV, INFO, ...) et NAV (VOR, DME, ADF) et mesurer les flanquements VOR des repères caractéristiques choisis si possible."
      },
      {
        "type": "text",
        "text": "6) Consulter les cartes VAC des aérodromes de destination ou cotoyés (déroutement éventuels), repérer les conditions particulières et noter éventuellement sur votre log de nav dans colonne observations :"
      },
      {
        "type": "list",
        "items": [
          "les points d’entrée et de sortie",
          "l’altitude du terrain, les sens et hauteurs des tours de piste ; le QFU et la longueur des pistes (pistes"
        ]
      },
      {
        "type": "text",
        "text": "limitatives en fonction de l’avion utilisé et des conditions du vol : masses, température, QNH, ...) ;"
      },
      {
        "type": "list",
        "items": [
          "les fréquences : ATIS, SOL, TWR, INFO, GONIO, AFIS ou A/A (terrains non contrôlés) et les fréquences"
        ]
      },
      {
        "type": "text",
        "text": "VOR, ILS, ADF ;"
      },
      {
        "type": "list",
        "items": [
          "le schéma de circulation de la piste aux parkings."
        ]
      },
      {
        "type": "text",
        "text": "7) Faire un bilan prévisionnel du carburant [Temps de vol sans vent, (attention l’effet du vent connu devra être pris en compte le jour du vol en complément)] + 5 mn pour chaque procédure départ et arrivée + les marges acceptables de sé-curité (météo, ATC, Plan de repli) + la réserve réglementaire de vol (30 mn de jour) sans oublier les fonds de réservoirs."
      },
      {
        "type": "text",
        "text": "8) A partir de la charge utile de l’aéronef (Masse max - Masse à vide), définir en fonction de la masse des personnes transportées, les possibilités d’emport de carburant (Charge utile - Masse des PAX)."
      }
    ]
  },
  {
    "id": "avant-depart",
    "number": "",
    "title": "Avant départ",
    "pages": [
      28,
      29
    ],
    "blocks": [
      {
        "type": "text",
        "text": "1) Prendre connaissance des Notams (Olivia), des RTBA (0800 24 54 66), des informations diverses (heure coucher de soleil, possibilités d’avitaillement en route, ...) et dépôt de plan de vol si traversée maritime, départ à l’étranger ou volonté de bénéficier du service d’alerte., ...)."
      },
      {
        "type": "text",
        "text": "2) Vérifier le devis de poids et le centrage avec les éléments constatés (essence, passagers, bagages)."
      },
      {
        "type": "text",
        "text": "3) Se constituer un dossier de protection météo (TAFS - METARS - carte TEMSI - carte des vents 850 hPa ou plus si niveau de vol envisagé) via Internet sur le site MétéoFrance.fr ou orbifly.com ; wettercentrale.de.."
      },
      {
        "type": "text",
        "text": "4) Calculer les dérives, les caps magnétiques, les “t”, “tc” et les temps de vol estimés en fonction du vent."
      },
      {
        "type": "text",
        "text": "5) Vérifier l’emport des documents à emporter et la validité du CEN."
      },
      {
        "type": "text",
        "text": "Les outils indispensables pour la préparation d’une NAV"
      },
      {
        "type": "text",
        "text": "Pour la préparation d'une navigation ainsi que son application en vol nous avons besoin d'outils indispensables dont voici une liste non exhaustive :"
      },
      {
        "type": "list",
        "items": [
          "Une carte à jour au 1/500000ème IGN OACI (qui nous permettra de choisir notre route et point de"
        ]
      },
      {
        "type": "text",
        "text": "report)"
      },
      {
        "type": "list",
        "items": [
          "La pochette VFR du SIA à jour (cette pochette contient, 2 cartes 1/1000000eme nord et sud, 1 carte"
        ]
      },
      {
        "type": "text",
        "text": "1/250000 Région Parisienne, 1 carte RTBA, et un livret complément de carte et un livret guide VFR."
      },
      {
        "type": "list",
        "items": [
          "Une carte à jour (pochette) au 1/1000000ème (qui nous permettra de relever les espaces aériens"
        ]
      },
      {
        "type": "text",
        "text": "traversés sur notre route) -Le livret complément de carte (pochette) (qui lui nous donnera avec précisions les consignes obligatoires, les organismes de contrôles, les fréquences à contacter pour chaque espace aérien transité)"
      },
      {
        "type": "list",
        "items": [
          "Un crayon de papier gras de préférence (pour tracer notre route sur la carte)",
          "Une gomme papier (pour effacer les anciens traits de route des nav antérieures qui sont source d'erreur"
        ]
      },
      {
        "type": "text",
        "text": "en vol ou les erreurs de traçage)"
      },
      {
        "type": "list",
        "items": [
          "Une règle ou double décimètre (pour tirer les traits et mesurer les distances)",
          "Un rapporteur carré transparent de déroutement avec ficelle (pour calculer un cap, une distance, un"
        ]
      },
      {
        "type": "text",
        "text": "temps pour rejoindre un terrain de déroutement)"
      },
      {
        "type": "list",
        "items": [
          "Le « Guide Météo France pour l’Aviation 2020-2021 » (gratuit) qui vous apportera la connaissance des"
        ]
      },
      {
        "type": "text",
        "text": "symboles et des renseignements à votre disposition (Temsi, TAF, METAR, )"
      },
      {
        "type": "list",
        "items": [
          "Le « Mémo du pilote FFA 2020 » édité par la FFA qui contient l’essentiel de la réglementation et des"
        ]
      },
      {
        "type": "text",
        "text": "possibilités offertes au pilote pour préparer et gérer une bonne navigation dans les meilleures conditions de sécurité"
      },
      {
        "type": "list",
        "items": [
          "Une planchette de vol avec support crayon (prenez le modèle qui se fixe à la cuisse et de préférence"
        ]
      },
      {
        "type": "text",
        "text": "avec plusieurs feuillets)"
      },
      {
        "type": "list",
        "items": [
          "Les cartes VAC à jour (des terrains choisis pour la nav et déroutement, le mieux par la suite et d'acheter"
        ]
      },
      {
        "type": "text",
        "text": "et emmener le classeur complet VAC)"
      },
      {
        "type": "list",
        "items": [
          "Prendre et imprimer les NOTAM, SUP AIP et cartes AZBA,  AD et EN ROUTE disponible sur OLIVIA",
          "Prendre et imprimer la Météo, TAF, METAR, les cartes TEMSI EUROC et TEMSI FRANCE et carte"
        ]
      },
      {
        "type": "text",
        "text": "WINTEM (direction et vitesse des vents à 200 ft, 5000 ft et 10 000 ft) disponible sur AEROWEB Météo France."
      },
      {
        "type": "list",
        "items": [
          "Une montre (poignet ou de bord pour noter vos temps de vol."
        ]
      },
      {
        "type": "text",
        "text": "Le Rapporteur & comment l'utiliser"
      },
      {
        "type": "text",
        "text": "MODE D’EMPLOI"
      },
      {
        "type": "list",
        "items": [
          "Placer le rapport sur un méridien (Nord vrai Nv)"
        ]
      },
      {
        "type": "text",
        "text": "ou sur un parallèle ;"
      },
      {
        "type": "list",
        "items": [
          "Placer également le centre du rapporteur sur votre AD de"
        ]
      },
      {
        "type": "text",
        "text": "départ ou votre point de départ de navigation ;"
      },
      {
        "type": "list",
        "items": [
          "Tender la ficelle et placer-la sur votre prochain point de"
        ]
      },
      {
        "type": "text",
        "text": "report ou votre AD de destination ;"
      },
      {
        "type": "list",
        "items": [
          "Liser sur le rapporteur la valeur de l'angle du Nord vrai Nv et"
        ]
      },
      {
        "type": "text",
        "text": "de la route vraie Rv ;"
      },
      {
        "type": "list",
        "items": [
          "Mesurer la distance avec le haut du rapporteur"
        ]
      },
      {
        "type": "text",
        "text": "(coté sans couleur)"
      },
      {
        "type": "list",
        "items": [
          "Estimer le temps avec le coté du rapporteur , prendre la"
        ]
      },
      {
        "type": "text",
        "text": "vitesse qui correspond à la vitesse de votre avion, bleu Vp 120 Kt, vert Vp 100 Kt, rouge 86 Kt."
      },
      {
        "type": "list",
        "items": [
          "Les formules placées au centre sont là à titre de rappel."
        ]
      },
      {
        "type": "text",
        "text": "Entraînez-vous à son utilisation, car le rapporteur est un outil qui vous servira dans l'application des déroutements."
      },
      {
        "type": "text",
        "text": "Pour ces types de vol, le stress diminue les facultés mentales et donc celles-ci ne vous permettrait pas de l’utiliser si emploi non intégré."
      }
    ]
  },
  {
    "id": "les-cartes-2",
    "number": "",
    "title": "Les cartes",
    "pages": [
      30,
      30
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Définitions : représentation sur un plan d'une surface sphérique"
      }
    ]
  },
  {
    "id": "rappel-des-unites-du-systeme-international",
    "number": "",
    "title": "Rappel des unités du système international",
    "pages": [
      31,
      31
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
        "text": "Vitesse V mètre par seconde m.s-1 (1 Kt = 0,5 m/s) Accélération g mètre par seconde par seconde m.s-² Gravité : g = 9,81 m.s-² Vitesse angulaire r/s radian par seconde rd/s"
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
        "text": "Masse Le kilogramme = 2,2 lb La livre (lb) = 0,453 kg L’once (oz) = 0,028 kg Le slug (sg) = 1 ft / s2 = 14,6 kg Pression Température Capacité liquide Poids Le Newton Le Newton = 1 kg . 1m/s/s La livre force (lbf) = 4,45 N"
      },
      {
        "type": "text",
        "text": "Distance Le mètre = 3,29 ft Le pied (ft) = 0,304 m Le pouce (in) = 0,0254 m Le mile nautique (Nm) = 1852 m = 6092 ft Le mile terrestre (Sm) = 1609 m Vitesse Le kilomètre / heure (km/h) Le mètre / seconde (m/s) Le pied / minute (ft/mn) = 0,005 m/s Le knot (Kt) = 1,852 km/h Le Statute mile/ heure (MPH) = 1,6 km/h Le litre (l) Le gallon US (US.Gal) Le gallon impérial (Imp Gal) Le degré Celsius (°C) 0°Kelvin (K°) = - 273°C Le degré Fahrenheit (°F) Le Pascal (Pa) L’hectopascal (hPa) = 100 Pa Le millibar (mb) = 1 hPa Le pouce de mercure (In Hg) 1013 hPa = 29,92 In Hg T°C = T° K + 273 = (T°F – 32) x 5/9 1 US Gal = 3,785 l ; 1 Imp Gal = 4,546 l Conversion des vitesses 1 m/s = 197,36 ft/mn # 200 ft/mn 1 km/h = 0,54 Kt 1 Kt # 100 ft/mn # 0,5 m/s Puissance Le watt (W) Le kilowatt (kW) = 1000 W Le cheval vapeur (Cv) = 736 W Le horse power (HP) = 745 W Le livre.pied/minute (ft.lb/mn) = 0,03 HP  "
      }
    ]
  },
  {
    "id": "conversions-d-unites",
    "number": "",
    "title": "Conversions d’unités",
    "pages": [
      32,
      32
    ],
    "blocks": [
      {
        "type": "text",
        "text": "(Approximations pour la pratique)"
      }
    ]
  },
  {
    "id": "distances",
    "number": "",
    "title": "Distances",
    "pages": [
      32,
      32
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Equivalences Pour convertir des Applications pour résultat approché"
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
      }
    ]
  },
  {
    "id": "vitesses",
    "number": "",
    "title": "Vitesses",
    "pages": [
      32,
      32
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Equivalences Pour convertir des Applications pour résultat approché"
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
      }
    ]
  },
  {
    "id": "temperatures",
    "number": "",
    "title": "Températures",
    "pages": [
      32,
      32
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Equivalences Pour convertir des Applications pour résultat approché"
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
      }
    ]
  },
  {
    "id": "pressions",
    "number": "",
    "title": "Pressions",
    "pages": [
      32,
      32
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Equivalences Pour convertir des Applications pour résultat approché"
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
        "text": "André PARIS LFRN - LFRD - LFDP GSM : 06 75 33 45 15"
      }
    ]
  }
]
