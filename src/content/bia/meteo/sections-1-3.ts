import type { CourseSection } from '@/content/types'

/**
 * COURS 1 — MÉTÉOROLOGIE, sections 1 à 3.
 *
 * Texte repris MOT POUR MOT de
 * `assets/cours/bia/BIA-Cours1-Meteorologie-2024-06-06.pdf`, pages 3 à 12.
 * Aucun résumé, aucune coupe, aucune reformulation du fond
 * (assets/RESSOURCES.md §1 « Règles d'intégration »).
 *
 * Les seules interventions autorisées, et effectivement faites :
 * — les paragraphes coupés par la mise en page du PDF sont recollés ;
 * — les listes énumérées deviennent des blocs `list` ;
 * — les sous-titres numérotés de l'auteur deviennent des blocs `heading`,
 *   avec leur numérotation intacte.
 */

export const section1: CourseSection = {
  id: 'atmosphere',
  number: '1',
  title: 'L’atmosphère',
  pages: [3, 4],
  blocks: [
    {
      type: 'lead',
      text: 'Pour le pilote privé comme pour le pilote professionnel, la connaissance de la météorologie est une donnée essentielle dans la préparation des vols, dans sa gestion et dans les décisions qui seront prises en cas d’évolution de la situation météorologique.',
    },

    { type: 'heading', level: 3, text: '1.1 Composition de l’atmosphère terrestre' },
    {
      type: 'text',
      text: 'L’atmosphère terrestre est une couche de gaz entourant la terre. On considère que sa constitution est la suivante :',
    },
    {
      type: 'list',
      items: ['78 % d\'azote (N2)', '21% d\'oxygène (O2)', '1 % de gaz divers ( Ar, CO2, ...)'],
    },
    {
      type: 'schema',
      schema: 'atmosphere-coupe',
      page: 3,
      caption: 'Les couches successives, de la troposphère à l’exosphère.',
    },
    {
      type: 'text',
      text: 'La couche la plus éloignée de l’atmosphère monte jusqu’à 400 km d’altitude. Toutefois la partie la plus importante de l’atmosphère est groupée dans les basses couches. La partie dans laquelle les phénomènes météorologiques sont concentrés évolue entre 7 km d’altitude aux pôles et 15 km à l’équateur. La moitié de la masse de l’atmosphère est concentrée dans les 5 premiers kilomètres d\'altitude et 90 % dans les 20 premiers. Les hautes couches présentent donc une densité très faible.',
    },

    {
      type: 'heading',
      level: 3,
      text: '1.2 Découpage et caractéristiques des couches successives de l\'atmosphère',
    },
    {
      type: 'schema',
      schema: 'atmosphere-temperature',
      page: 3,
      caption:
        'La température décroît dans la troposphère, reste constante puis croît dans la stratosphère.',
    },
    { type: 'heading', level: 4, text: 'La thermosphère' },
    {
      type: 'text',
      text: 'La température y croît fortement jusqu’à 500 °C à la limite de l’atmosphère (environ 400 km).',
    },
    { type: 'heading', level: 4, text: 'La mésosphère' },
    {
      type: 'text',
      text: 'La température y décroît fortement jusqu’à la limite de cette couche (environ 80 km).',
    },
    { type: 'heading', level: 4, text: 'La stratosphère' },
    {
      type: 'text',
      text: 'Cette couche est déjà une couche de faible densité. La température y reste constante jusqu’à environ 25 km puis croît jusqu’aux environs de 0 °C autour de 50 km d’altitude.',
    },
    { type: 'heading', level: 4, text: 'La troposphère' },
    {
      type: 'text',
      text: 'C’est la plus basse couche. Son épaisseur varie de 7 à 15 km des pôles à l’équateur. Elle est de 11 km sous nos latitudes. C’est dans cette couche que se produisent les phénomènes météorologiques. La température diminue avec l’altitude de 6°5 C / 1 000 m (soit - 2° C / 1000 ft) pour descendre jusqu\'à la tropopause jusqu\'à - 56,5° C en moyenne.',
    },
    {
      type: 'text',
      text: 'Les séparations entre les 4 couches s’appellent la tropopause, la stratopause et la mésopause.',
    },

    { type: 'heading', level: 3, text: '1.3 L’atmosphère standard' },
    {
      type: 'text',
      text: 'Afin de baser tous les altimètres sur une même loi de variation de la pression en fonction de l’altitude, l’O.A.C.I. (Organisation de l’Aviation Civile Internationale) a défini une atmosphère standard. Elle correspond aux conditions moyennes de température et de pression que l’on rencontre dans l’atmosphère.',
    },
    {
      type: 'keypoints',
      title: 'Caractéristiques de l’atmosphère standard O.A.C.I. :',
      items: [
        'au niveau de la mer T = +15°C et Patm = 1013,25 hPa',
        'gradient vertical température : - 6,5°C / 1000 m jusqu’à 11000 m, nul entre 11000 et 20000 m puis +10 °C / 1000 m jusqu’à 32000 m',
        'la tropopause se situe à 11000 m',
        'l’air est sec et de composition constante',
        'l’accélération de la pesanteur est g = 9,81 m.s-2',
      ],
    },
    {
      type: 'text',
      text: 'C’est cette référence qui permet d’étalonner les altimètres et autres instruments, d\'organiser les procédures standard, d’assurer la sécurité des aéronefs et d’homologuer des records.',
    },
  ],
}

export const section2: CourseSection = {
  id: 'pression',
  number: '2',
  title: 'La pression atmosphérique',
  pages: [4, 6],
  blocks: [
    { type: 'heading', level: 3, text: '2.1 - L’origine de la pression atmosphérique' },
    {
      type: 'text',
      text: 'La pression atmosphérique résulte du poids des molécules d’air qui sont empilées dans l’atmosphère. C’est, avec la température, un des paramètres fondamentaux qui permettra d’évaluer les prévisions et les évolutions de la météo.',
    },
    {
      type: 'text',
      text: 'Historiquement, les premières mesures de la pression atmosphérique ont été effectuées par TORRICELLI dans les canaux de VENISE. De là fut mis au point un instrument pour la mesurer, le baromètre.',
    },
    {
      type: 'text',
      text: 'Celui-ci utilise du mercure (Hg) pour mesurer la pression atmosphérique.',
    },
    {
      type: 'text',
      text: 'La première unité de mesure de la pression atmosphérique fut le millimètre de mercure (mm Hg) ou le pouce de mercure (InHg) pour les Anglo-Saxons.',
    },
    {
      type: 'text',
      text: 'Dans le système international d’unités, la pression s’évalue en Pascal. En météo il est plus pratique d’utiliser l’hectopascal (1 hPa = 100 Pa). On utilise également le millibar (1 mbar = 1 hPa). La valeur moyenne au niveau de la mer est de 1013 hPa soit 760 mm Hg.',
    },
    {
      type: 'callout',
      tone: 'note',
      title: 'En moyenne à 0 m',
      text: 'Patm = 1013 hPa = 1013 mbar = 760 mmHg = 29,92 InHg et 1 hPa = 1 mbar = 100 Pa',
    },

    { type: 'heading', level: 3, text: '2.2 - Les variations de pression avec l’altitude' },
    {
      type: 'text',
      text: 'La pression atmosphérique diminue lorsque l’on gagne de l’altitude. Cette variation n’est pas linéaire mais logarithmique. Pour la déterminer, il existe des calculs tenant compte de la variation d’altitude et de température.',
    },
    {
      type: 'schema',
      schema: 'colonne-air',
      page: 5,
      caption:
        'Le nombre de molécules par unité de volume tombe de 1 million au sol à 532 000 vers 6 000 m.',
    },
    {
      type: 'text',
      text: 'Du fait de la différence de poids de la colonne d’air en fonction de l’altitude, la pression diminue avec l’altitude et les molécules d’air sont moins compressées donc prennent plus de volume, c’est pourquoi la diminution de pression n’est pas linéaire.',
    },
    {
      type: 'text',
      text: 'En basse altitude chaque fois que l’on monte de 8,5 mètres (28 feet), on observe une diminution de 1 hectopascal. Vers 3000 m, il faudra monter de 12 mètres (40 ft) pour perdre le même hectopascal et vers 10 000 m, il faudra 28 m (95 ft).',
    },

    { type: 'heading', level: 3, text: '2.3 - Les variations de pression au niveau de la mer' },
    {
      type: 'text',
      text: 'La pression ne varie pas seulement en fonction de l’altitude mais aussi selon le lieu et les perturbations. Selon la nature du sol et divers autres paramètres, la température n’est pas uniforme au niveau de la mer et de ce fait la pression ne l’est pas non plus. On trace alors des cartes sur lesquelles figurent des courbes joignant les points de même pression au niveau de la mer, celles-ci s’appellent : des isobares. La carte ci-contre montre les éléments caractéristiques de ces isobares qui mettent en évidence le type de temps que l’on peut estimer :',
    },
    { type: 'heading', level: 4, text: '2.3.1 - Les ANTICYCLONES' },
    {
      type: 'text',
      text: 'Ce sont des zones de haute pression que l’on note A ou H (H pour high sur les documents anglosaxons). Dans ces zones le vent est faible et le temps est beau avec un ciel souvent bien dégagé.',
    },
    { type: 'heading', level: 4, text: '2.3.2 - Les DÉPRESSIONS' },
    {
      type: 'text',
      text: 'Ce sont des zones de basse pression que l’on note D ou L (L pour low sur les documents anglosaxons). Dans ces zones le vent est plutôt fort et le temps est mauvais avec un ciel souvent fort encombré et des précipitations fréquentes.',
    },
    { type: 'heading', level: 4, text: '2.3.3 - Les COLS' },
    {
      type: 'text',
      text: 'Zone située entre des dépressions ou anticyclones et marquant une inversion de sens d’évolution de la pression. Dans cette zone les vents sont relativement calmes et de direction variable. Le temps est également variable.',
    },
    { type: 'heading', level: 4, text: '2.3.4 - Les MARAIS BAROMETRIQUES' },
    {
      type: 'text',
      text: 'Ce sont de vastes zones ou la pression évolue très peu. Les vents y sont faibles et de direction très variable. Il s’agit d’une zone de mauvais temps stagnant.',
    },
    { type: 'heading', level: 4, text: '2.3.5 - Les DORSALES' },
    {
      type: 'text',
      text: 'Il s’agit d’une avancée d’un anticyclone dans les zones de pression plus basse. Le temps dans cette région est en général beau.',
    },
    { type: 'heading', level: 4, text: '2.3.6 - Les TALWEGS ou THALWEGS' },
    {
      type: 'text',
      text: 'C’est une avancée des zones de basse pression. Il s’agit souvent de l’effet d’un front froid. On y rencontre des vents assez forts et du mauvais temps.',
    },
    {
      type: 'awaiting',
      what: 'Carte mondiale des isobares (page 6) — la planche de l’auteur est une image bitmap portant une carte du monde ; son redessin en SVG reste à faire.',
    },
  ],
}

export const section3: CourseSection = {
  id: 'temperature',
  number: '3',
  title: 'La température',
  pages: [6, 12],
  blocks: [
    {
      type: 'text',
      text: 'Les variations de température influent beaucoup sur les phénomènes météorologiques. Ces variations peuvent être regroupées en deux catégories. Les variations lentes, qui rythment les saisons. Les variations locales qui interviennent sur une échelle de temps beaucoup plus restreinte. L’influence combinée de ces variations entraîne des changements de temps selon les lieux et les saisons.',
    },

    { type: 'heading', level: 3, text: '3.1 Notions de thermodynamique' },
    {
      type: 'text',
      text: 'La notion de température est liée à l’agitation des molécules d’air, plus elle est active, plus la température est élevée. Si l’agitation cesse, la température est minimale et se situe à – 273° C (0° Kelvin).',
    },
    {
      type: 'text',
      text: 'Pour élever la température d’un corps, il faut lui fournir une certaine quantité de chaleur, c’est à dire lui apporter de l’énergie nécessaire pour créer cette agitation moléculaire. Les quantités de chaleur s’expriment donc en Joules. Si ces quantités de chaleur sont échangées par unité de temps, il s’agit alors d’une puissance calorifique exprimée en Watts.',
    },

    { type: 'heading', level: 4, text: '3.1.1 - Le rayonnement' },
    {
      type: 'text',
      text: 'Tous les corps chauds rayonnent dans le domaine du visible ou de l\'invisible, sans support matériel, par exemple dans le vide. Selon la longueur d\'onde du rayonnement et selon la nature des corps qui y sont soumis, l\'action du rayonnement est différente. Tous les matériaux émettent et absorbent de l\'énergie, ils ne sont en équilibre que s\'ils émettent autant qu\'ils reçoivent.',
    },
    {
      type: 'text',
      text: 'Les phénomènes de rayonnement sont très complexes car les caractéristiques dépendent de la longueur d\'onde des radiations et de la température. Ainsi, le même corps peut être totalement transparent ou au contraire totalement opaque selon le rayonnement. De plus, le rayonnement obéit aux lois de la réflexion, de la réfraction et de l\'absorption.',
    },
    {
      type: 'text',
      text: 'Le jour, le soleil apporte son énergie par rayonnement et la terre l’absorbe jusqu’à l’équilibre thermique. Elle emmagasine cette chaleur tout au long de la journée. La nuit, le soleil ne fournit plus d’énergie, la terre plus chaude que l’atmosphère rayonne à son tour l’énergie absorbée et se refroidit jusqu’à l’équilibre thermique avec l’atmosphère.',
    },
    {
      type: 'keypoints',
      title: 'Dans le vide, le rayonnement thermique se propage à la vitesse de 300 000 km/s :',
      items: ['sans perte d’énergie', 'en ligne droite,', 'et presque instantanément.'],
    },
    {
      type: 'text',
      text: 'Dans l’air et à la traversée de certains matériaux transparents : la vitesse de propagation est modifiée en grandeur et parfois en direction. L’énergie est diminuée par absorption et par diffusion.',
    },

    { type: 'heading', level: 4, text: '3.1.2 - La conduction' },
    {
      type: 'text',
      text: 'La conduction thermique consiste en un échange de chaleur entre deux milieux ; pouvant être chacun solide, liquide ou gazeux ; , ou entre deux zones d\'un même milieu, par l\'intermédiaire de la surface de contact séparant ces milieux ou ces zones.',
    },
    {
      type: 'text',
      text: 'Plus la différence de température (positive ou négative) est forte entre les basses couches d\'air d\'une part, le sol ou l\'étendue d\'eau sous-jacents d\'autre part, plus important est le développement du processus de conduction transférant l\'énergie du milieu le plus chaud vers le milieu le plus froid : c\'est là une des circonstances susceptibles d\'expliquer que ce processus joue un rôle certes mineur, mais néanmoins non négligeable dans le bilan des échanges d\'énergie entre la Terre et son atmosphère.',
    },
    {
      type: 'text',
      text: 'Les corps bons conducteurs de la chaleur s\'échauffent en profondeur alors que ceux qui sont mauvais conducteurs s\'échauffent surtout en surface.',
    },
    {
      type: 'text',
      text: 'L’air étant mauvais conducteur, il ne s’échauffe que sur une mince couche (couche limite thermique) par contact avec la terre mais cette conduction joue quand même un rôle essentiel dans l’évolution des températures.',
    },

    { type: 'heading', level: 4, text: '3.1.3 - La convection' },
    {
      type: 'text',
      text: 'La convection désigne l\'ensemble des mouvements internes qui animent un fluide et qui impliquent par conséquent le transport des propriétés des parcelles de ce fluide au cours de son déplacement vertical, principalement dans toute l’étendue de la troposphère.',
    },
    {
      type: 'text',
      text: 'Il est très usuel en météorologie de ne recourir à ce terme de convection que pour désigner les mouvements verticaux ayant pour seule origine un profil vertical de température générateur d\'instabilité (du fait de ce genre de profil, la poussée d\'Archimède, qui tire la parcelle d\'air vers le haut, excède le poids de la parcelle, qui l\'entraîne vers le bas). Cette catégorie d\'instabilité est appelée instabilité convective.',
    },
    {
      type: 'text',
      text: 'C’est la convection qui est à l’origine principalement des échanges thermiques.',
    },

    {
      type: 'heading',
      level: 4,
      text: '3.1.4 – Déplacement des Masses d’air et conséquences : L’advection',
    },
    {
      type: 'text',
      text: 'L’advection est un important mouvement horizontal de l’air qui peut amener une masse d’air à changer de température et de propriété (humidité, densité, pression). Dans les régions côtières, elle est souvent la cause d’entrée d’air maritimes ou de création de brouillard qui peut pénétrer assez loin dans les terres.',
    },

    { type: 'heading', level: 3, text: '3.2 - Variations saisonnières de la température' },
    {
      type: 'text',
      text: 'La position de la terre par rapport au soleil induit des changements dans la quantité d’énergie solaire reçue par les points de la surface du globe. Le soleil émet des rayonnements électromagnétiques (dont la lumière fait partie) qui se propagent dans le vide sans être absorbés.',
    },
    {
      type: 'text',
      text: 'En revanche dans l’atmosphère les rayonnements les plus énergétiques sont absorbés en totalité ou partie. Plus la couche d’atmosphère à traverser est épaisse et moins il y a d’énergie qui parvient à la surface par rayonnement.',
    },
    {
      type: 'text',
      text: 'La terre tourne autour d’elle-même selon l’axe de ses pôles (1). Elle tourne également autour du soleil dans un plan incliné de 23,5° par rapport à l’équateur que l’on appelle plan de l’écliptique (5). Les rayonnements solaires (6) parviennent à la terre. L’épaisseur d’atmosphère qu’ils doivent traverser pour parvenir à la surface du globe (7) n’est donc pas la même selon la latitude.',
    },
    {
      type: 'text',
      text: 'Les pôles reçoivent une quantité d\'énergie bien plus faible que l’équateur. La direction de l’axe des pôles restant fixe dans l’espace au cours de la rotation de la terre autour du soleil, cette épaisseur dépend également de la position de la terre par rapport au soleil, c’est à dire de la saison (voir schéma ci-contre). Les saisons sont alors inversées entre l’hémisphère nord et l’hémisphère sud. Les schémas ci-contre représentent les solstices d’hiver et d’été pour l’hémisphère nord. La durée pendant laquelle un point de la surface de la terre est éclairé par le soleil (donc pendant lequel le sol se réchauffe) dépend également de la latitude et de la saison.',
    },
    {
      type: 'text',
      text: 'Le schéma fait apparaître les zones de nuit (2) et de jour (3). Seuls les points de l’équateur (4) ne sont pas soumis aux saisons et aux variations de durée des jours et nuits (12 h / 12 h). Inversement les pôles sont soumis à une alternance de 6 mois de jour et 6 mois de nuit.',
    },
    {
      type: 'awaiting',
      what: 'Schéma des solstices et de l’épaisseur d’atmosphère traversée (page 10) — redessin en SVG à faire.',
    },

    { type: 'heading', level: 3, text: '3.3 - Variations locales de la température' },
    {
      type: 'text',
      text: 'Selon la nature du sol (rocher, champs cultivés, forêts, bitume, eau,...) une même énergie arrivant du soleil par rayonnement ne produira pas le même échauffement. En effet, une part plus ou moins importante de ce rayonnement sera réfléchie par le sol. Il n’y en a donc qu’une partie qui est absorbée. La température du sol n’est pas uniforme. Au contact des zones chaudes, l’air se réchauffe par convection. Sa masse volumique diminue alors et il s’élève pour laisser la place à de l’air plus froid. Au-dessus des zones les plus chaudes il y a donc des mouvements ascendants de la masse d’air et au-dessus des plus froides des mouvements descendants. De plus la formation de nuages peut bloquer l’arrivée des rayonnements jusqu’au sol. La nébulosité de l’atmosphère (présence de nuage) engendre donc aussi des différences de température locales au sol.',
    },
    {
      type: 'text',
      text: 'Ces variations locales ont une très grande influence sur l’évolution de la météo sur des durées faibles (quelques heures). Elles sont donc prises en compte par les météorologistes pour pouvoir prévoir le temps et son évolution sur une durée de quelques heures.',
    },

    { type: 'heading', level: 3, text: '3.4 - Variations physiques des états de l’eau' },
    {
      type: 'table',
      caption: 'Les changements d’état de l’eau',
      page: 11,
      headers: ['Transformation', 'Définition'],
      rows: [
        ['VAPORISATION', 'Passage de l’état liquide à l’état gazeux par élévation de température ou baisse de pression.'],
        ['CONDENSATION', 'Passage de l’état gazeux à l’état liquide par baisse de la température ou élévation de pression.'],
        ['CONGÉLATION', 'Passage de l’état liquide à l’état solide par abaissement de sa température.'],
        ['FUSION', 'Passage de l’état solide à l’état liquide par élévation de température.'],
        ['SUBLIMATION', 'Passage de l’état solide à l’état gazeux sans passer par l’état liquide (cas particulier).'],
        ['SURFUSION', 'Passage de l’état liquide à l’état solide avec retard par rapport à la température conventionnelle (eau à - 4 °C par exemple).'],
      ],
    },
    {
      type: 'text',
      text: 'Les quatre transformations ci-dessus s’effectuent progressivement.',
    },
    {
      type: 'callout',
      tone: 'note',
      title: 'Exemple de transformation par seul changement de pression',
      text: 'Exemple de transformation de l\'état gazeux à l\'état liquide et inversement par seul changement de pression : Compression d\'un gaz (butane, propane,...) dans une bouteille liquéfie ce gaz ; Ouverture de cette bouteille, le liquide se retransforme en gaz.',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'La surfusion',
      text: 'Le phénomène de surfusion présente un réel danger en aviation et peut très rapidement entraîner un givrage sévère. Ceci provoque prise de poids par épaisseur de la glace et modification des qualités aérodynamiques (profil d\'aile déformé).',
    },

    { type: 'heading', level: 3, text: '3.5 - Evolution de la température avec l’altitude' },
    {
      type: 'text',
      text: 'Nous avons vu lorsque nous avons parlé de l’atmosphère standard que la température évolue avec l’altitude. Le gradient de température retenu n’est pas celui que l’on rencontre tous les jours. Pour la troposphère, couche des phénomènes météorologiques, le gradient de - 6,5 °C / 1000 m est un gradient moyen. Il se peut que la température évolue de façon différente. Il se peut également que le gradient ne soit pas constant de 0 à 11000 m.',
    },
  ],
}
