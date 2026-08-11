import type { CourseSection } from '@/content/types'

/**
 * COURS 1 — MÉTÉOROLOGIE, sections 4 à 6. Pages 12 à 20 du PDF source.
 * Texte repris mot pour mot — voir l'entête de sections-1-3.ts.
 */

export const section4: CourseSection = {
  id: 'vent',
  number: '4',
  title: 'Le vent',
  pages: [12, 16],
  blocks: [
    { type: 'heading', level: 3, text: '4.1 - Origine du vent' },
    {
      type: 'text',
      text: 'Le vent est un déplacement d’air horizontal dû à des différences de pression entre les points de la surface de la terre.',
    },
    { type: 'text', text: 'Le vent résulte de l’action de trois types de forces sur l’air en mouvement :' },

    { type: 'heading', level: 3, text: '4.2 - La force de gradient de pression' },
    {
      type: 'text',
      text: 'Elle est due à la différence de pression entre les points de la surface de la terre. Elle entraîne l’air des hautes vers les basses pressions. Plus les différences de pression sont importantes et plus cette force est importante. En pratique lorsque l’on observe les isobares d’une carte météo, plus elles sont rapprochées et plus le vent est fort.',
    },

    { type: 'heading', level: 3, text: '4.3 - La force de CORIOLIS' },
    {
      type: 'text',
      text: 'Tout objet en mouvement dans l’hémisphère nord est dévié vers sa droite, (c’est le contraire dans l’hémisphère sud). Les particules d’air n’y font pas exception. Lors de son déplacement des hautes vers les basses pressions, l’air est dévié vers la droite dans l’hémisphère nord et vers la gauche dans l’hémisphère sud.',
    },
    {
      type: 'schema',
      schema: 'vent-forces',
      page: 12,
      caption:
        'Force de gradient de pression, force de CORIOLIS, force de frottements : le vent qui en résulte est tangent aux isobares.',
    },

    { type: 'heading', level: 3, text: '4.4 - Les forces de frottements' },
    {
      type: 'text',
      text: 'Lors de son mouvement, l’air frotte contre les autres particules d’air et le sol. Cela entraîne des forces s’opposant à son mouvement. Elles ne le dévient pas mais le freinent.',
    },
    {
      type: 'text',
      text: 'L’action de ces trois forces a pour conséquence de stabiliser la direction du vent : Le vent se stabilise dans une direction tangente aux isobares. En réalité, il les coupe légèrement vers l’intérieur dans les dépressions et vers l’extérieur dans les anticyclones.',
    },
    {
      type: 'callout',
      tone: 'note',
      title: 'Sens de rotation',
      text: 'Dans l’hémisphère nord il tourne dans le sens horaire (sens des aiguilles d’une montre) autour des anticyclones et dans le sens anti-horaire autour des dépressions. Dans l’hémisphère sud c’est le contraire.',
    },

    { type: 'heading', level: 3, text: '4.5 - Les grands systèmes de vent' },
    {
      type: 'text',
      text: 'Nous avons vu que les points situés à l’équateur sont plus chauffés que les points situés aux pôles. Ceci entraîne des différences de température et de pression entre l’air équatorial et l’air polaire.',
    },
    {
      type: 'text',
      text: 'L’air équatorial s’échauffe et monte alors, poussé par de l’air plus froid. En s’élevant, il refroidit et redescend au niveau des pôles. Il en résulte donc une circulation à l’échelle de la planète entre l’air polaire et l’air équatorial. L’air en mouvement forme ce que l’on appelle une cellule convective. Si cette vision des choses n’est pas tout à fait fausse, elle est trop simple et il faut la préciser.',
    },
    {
      type: 'schema',
      schema: 'cellules-hadley',
      page: 13,
      caption: 'Les cellules convectives ainsi représentées sont appelées les cellules de HADLEY.',
    },
    {
      type: 'text',
      text: 'Examinons ce qui se passe à l’échelle d’un quart de planète sur le schéma ci-contre. L’air équatorial n’atteint pas le pôle. Il se refroidit avant et redescend. De même, l’air polaire n’atteint pas l’équateur. Il se réchauffe en chemin et monte plus tôt. Il se forme donc 2 cellules convectives. Une d’air équatorial et une d’air polaire. En pratique, il en existe une troisième d’air tempéré entre les deux. Ce modèle de la circulation atmosphérique générale traduit assez correctement ce qui se passe à l’échelle de la planète. Les cellules convectives ainsi représentées sont appelées les cellules de HADLEY.',
    },
    {
      type: 'keypoints',
      title:
        'En tenant compte de la force de CORIOLIS, on peut en déduire les vents dominants au sol et les zones plutôt anticycloniques ou plutôt dépressionnaires :',
      items: [
        'au niveau des pôles les vents dominants soufflent de l’Est',
        'dans les zones tempérées les vents dominants sont d’Ouest',
        'dans la zone équatoriale, les alizés soufflent de l’Est',
        'les pôles sont sous l’influence de hautes pressions tandis qu’une ceinture de dépressions s’établit à environ 30° de latitude et une ceinture d’anticyclones à environ 60° de latitude.',
      ],
    },
    { type: 'text', text: 'Ces conclusions sont valables dans les deux hémisphères.' },
    {
      type: 'text',
      text: 'Il existe également un vent d’altitude très important : le jet stream. Ce vent souffle d’Ouest en Est sur une bande de quelques centaines de kilomètres de largeur et à une altitude d’environ 10000 m. Sa vitesse atteint fréquemment 200 à 300 km/h. Les pilotes de ligne en tiennent compte pour profiter de sa vitesse s’ils vont d’Ouest en Est ou au contraire pour l’éviter si leur route est en sens inverse.',
    },

    { type: 'heading', level: 3, text: '4.6 - Les vents locaux' },
    {
      type: 'text',
      text: 'Dans certaines régions le relief influence beaucoup les vents. Soit parce qu’il canalise le vent ou parce qu’il engendre des brises de pente ou de vallée. De même en bord de mer les variations de températures diurnes et nocturnes entraînent des brises de terre ou brise de mer.',
    },

    { type: 'heading', level: 4, text: '4.6.1- Les vents de vallée à grande échelle' },
    {
      type: 'text',
      text: 'La présence de reliefs peut canaliser le vent et l’obliger à s’engouffrer dans des vallées. En France, il existe deux cas de vents forts canalisés par le relief sur de grandes distances :',
    },
    {
      type: 'text',
      text: 'dans la vallée du Rhône : lorsque le vent s’engouffre dans la vallée du Rhône en provenance du Nord, il est accéléré par effet venturi. Il en résulte un vent fort et turbulent orienté nord-sud qui souffle jusqu’en Camargue et que l’on appelle le mistral.',
    },
    {
      type: 'text',
      text: 'entre les Pyrénées et le massif central, le vent est canalisé de Toulouse à Carcassonne. Lorsque le mistral souffle dans la vallée du Rhône, le vent souffle alors dans cette région d’Ouest en est (de Toulouse à Carcassonne). On l’appelle la tramontane. Il arrive que le vent vienne de la Méditerranée et s’engouffre alors d’est en Ouest (de Carcassonne à Toulouse). On l’appelle alors le vent d’Autan.',
    },

    { type: 'heading', level: 4, text: '4.6.2 - L’onde' },
    {
      type: 'text',
      text: 'Lorsque le vent aborde un relief perpendiculairement à son flan, il est dévié vers le haut par celui-ci. Si plusieurs reliefs alignés dans la même direction (perpendiculaire au vent) sont régulièrement espacés, le vent “rebondit” sur les reliefs successifs en donnant des ascendances pouvant monter très haut. Les vélivoles recherchent ce type de régime de vent qui leur permet d’atteindre des altitudes très importantes. Sur les contreforts des alpes l’onde est assez fréquente. En revanche, il faut la mériter car avant de parvenir dans ce vent laminaire, il faut traverser des turbulences en amont du relief. Seuls les bons pilotes peuvent se permettre de l’exploiter.',
    },
    {
      type: 'awaiting',
      what: 'Schéma de l’onde de relief (page 14) — redessin en SVG à faire.',
    },

    { type: 'heading', level: 4, text: '4.6.3 - Les brises de pente' },
    {
      type: 'text',
      text: 'En montagne, lorsque le soleil matinal réchauffe les fonds de vallée, leur température augmente plus vite que celle des sommets. Il se crée alors des courants ascendants le long des pentes.',
    },
    {
      type: 'text',
      text: 'Le vent part de la vallée pour monter vers les sommets. Ce vent commence à monter en régime vers le milieu de matinée et forcit jusqu’au début d’après midi. Il faiblit ensuite pour tomber en fin d’après midi. Lorsque le soleil disparaît derrière les reliefs environnants, les pentes à l’ombre se refroidissent et la brise se fait alors descendante. La brise montante s’établit plus vite sur les versants exposés au soleil dès le matin et la brise descendante s’installe plus vite sur les versants à l’ombre plus tôt dans l’après-midi.',
    },

    { type: 'heading', level: 4, text: '4.6.4 - Les brises de bord de mer' },
    {
      type: 'text',
      text: 'En bord de mer, les jours ensoleillés, il existe un phénomène comparable aux brises de pentes, la brise de mer et la brise de terre. Dans la journée, le sol capte mieux les rayonnements solaires que la mer. Il s’échauffe donc plus et plus vite que l’eau. L’air à son contact se chauffe et s’élève. Il est alors remplacé par de l’air plus froid en provenance de la mer. Il s’établit donc un vent qui souffle depuis la mer vers la terre. On l’appelle brise de mer. Elle s’établit dans la matinée et se renforce tant que le sol s’échauffe. Quand le soleil descend sur l’horizon, le vent faiblit.',
    },
    {
      type: 'text',
      text: 'Lorsque le soleil se couche, la mer cède très lentement son énergie alors que le sol, se refroidit très rapidement. L’air au-dessus de la mer est alors réchauffé par rapport à celui au-dessus du sol. Les mouvements de convection s’inversent et la brise s’installe de la terre vers la mer. On l’appelle brise de terre. Elle est plus dangereuse que la brise de mer car elle tend à éloigner du rivage les embarcations ou les aéronefs et il faut lutter contre le vent pour rentrer.',
    },
    {
      type: 'awaiting',
      what: 'Schéma des brises de mer et de terre (page 15) — redessin en SVG à faire.',
    },

    { type: 'heading', level: 3, text: '4.7 - La connaissance du vent en aéronautique' },
    {
      type: 'text',
      text: 'Pour les pilotes d’aéronefs le vent est très important. S’il est trop fort ou trop turbulent il est dangereux au cours du roulage entre la piste et le parking ou au cours de l’atterrissage et du décollage. En l’air un vent très turbulent peut entraîner la perte de contrôle de l’appareil ou le dépassement de résistance structurelle. D’autre part, en navigation, il induit une dérive pouvant amener le pilote à se perdre s’il n’en tient pas compte ou une surconsommation à ne pas négliger dans les branches vent de face. Il est donc primordial de se renseigner sur le vent avant tout vol.',
    },
    {
      type: 'keypoints',
      title: 'Les services de météorologie aéronautique fournissent les informations suivantes sur le vent :',
      items: [
        'la direction d’où il vient',
        'la vitesse du vent en noeud ( 1 kt = 1 noeud = 1 Nm/h = 1,852 km/h)',
        'si nécessaire, la vitesse des rafales',
      ],
    },
    {
      type: 'text',
      text: 'Sur les cartes aéronautiques, il est représenté par un drapeau dont l’extrémité libre du mât indique la direction dans laquelle le vent souffle. Le fanion est constitué de triangles pleins pour 50 kt de vent, de longues barres pour 10 kt et de demi-barres pour 5 kt.',
    },
    { type: 'text', text: 'Les exemples ci-dessous vous représentent des vents explicités en dessous du schéma.' },
    {
      type: 'schema',
      schema: 'fleches-vent',
      page: 16,
      caption: 'La rose des vents et les cinq exemples de l’auteur.',
    },
    {
      type: 'list',
      items: [
        '1: un vent du 230 pour 55 kt',
        '2: un vent du 360 pour 25 kt',
        '3: un vent du 035 pour 15 kt',
        '4: un vent du 270 pour 75 kt',
        '5: un vent du 315 pour 30 kt',
      ],
    },
  ],
}

export const section5: CourseSection = {
  id: 'humidite',
  number: '5',
  title: 'L’humidité de l’air',
  pages: [16, 19],
  blocks: [
    {
      type: 'text',
      text: 'L’air atmosphérique contient de la vapeur d’eau. Celle ci provient de l’évaporation au-dessus des mers, des lacs, des sols humides ou elle est produite par l’activité humaine.',
    },

    { type: 'heading', level: 3, text: '5.1 - HUMIDITE RELATIVE DE L’AIR' },
    {
      type: 'text',
      text: 'La quantité de vapeur d’eau qui peut être contenue dans l’air dépend des conditions de température et de pression de ce dernier. Plus la température de l’air est élevée et plus la quantité d’eau qui peut être dissoute est importante.',
    },
    {
      type: 'definition',
      term: 'Humidité relative',
      text: 'L’humidité relative est le rapport entre la masse d’eau dissoute dans l’air et la masse maximale d’eau que l’on peut y dissoudre.',
    },
    {
      type: 'text',
      text: 'Lorsque l’humidité relative atteint 100 %, on dit qu’il y a saturation ou que l’air est saturé en vapeur d’eau. Dans ce cas il va pouvoir se former des nuages ou du brouillard selon les conditions. L’humidité relative permet donc aux météorologues de prévoir les formations de nuages et même le type de nuages et les risques de précipitation.',
    },
    {
      type: 'text',
      text: 'L’humidité relative se mesure avec un hygromètre ou un psychromètre. Elle se note, en général, HR.',
    },

    { type: 'heading', level: 3, text: '5.2 - SATURATION DE L’AIR HUMIDE' },
    {
      type: 'text',
      text: 'Pour une même quantité de vapeur d’eau dissoute, l’humidité relative dépend de la température. Plus il fait froid, et plus elle est importante. Une masse d’air pourra atteindre la saturation de deux façons différentes :',
    },
    {
      type: 'list',
      items: [
        'par une augmentation de la masse de vapeur d’eau dissoute si elle passe au-dessus d’étendues maritimes ou de sols détrempés.',
        'par un abaissement de température qui augmente l’humidité relative jusqu’à 100 %. En effet, à plus faible température la quantité d’eau pouvant être dissous dans l’air est plus faible.',
      ],
    },
    {
      type: 'text',
      text: 'Pour ce dernier mode on définit deux températures auxquelles on peut atteindre la saturation :',
    },
    {
      type: 'definition',
      term: 'La température du point de rosée (dew point)',
      text: 'Correspond à la température à laquelle on atteint la saturation si la pression reste constante au cours du refroidissement. Ce phénomène peut se produire au cours du refroidissement nocturne ou au petit matin et il provoque de la rosée ou des brouillards. Le danger des brouillards en aéronautique rend les pilotes particulièrement sensibles à la température du point de rosée.',
    },
    {
      type: 'definition',
      term: 'La température du point de condensation',
      text: 'Correspond à la température à laquelle on atteint la saturation si le refroidissement est provoqué par une baisse de la pression.',
    },
    {
      type: 'text',
      text: 'Lorsqu’une particule d’air humide s’élève dans l’atmosphère, sa pression diminue. Il en résulte une diminution de température également. Lors de sa montée l’air subit une détente adiabatique (sans échanger de chaleur). Si l’air n’est pas saturé, la température diminue de 1 °C tous les 100 m. On appelle cette diminution, le gradient adiabatique en air sec. Si la température atteint le point de condensation, des gouttelettes d’eau en suspension apparaissent. Il se forme un nuage dont la base se situe au niveau du point de condensation. Lors de la condensation, l’eau cède de la chaleur à l’air dans lequel elle était dissoute. Le gradient de température change alors et le gradient en air humide est de 0,6 °C pour 100 m. L’humidité relative de l’air reste alors de 100 %. A partir du point de condensation, tout au long de sa montée l’air se sépare de la vapeur d’eau qu’il contient.',
    },
    {
      type: 'schema',
      schema: 'gradient-adiabatique',
      page: 18,
      caption:
        'En air sec, 1 °C par 100 m ; en air humide, 0,6 °C par 100 m — de 15 °C au sol à 9 °C et 11,4 °C à 600 m.',
    },

    { type: 'heading', level: 4, text: '5.2.1 - Stabilité d’une masse d’air' },
    {
      type: 'text',
      text: 'Lorsqu’une particule d’air humide s’échauffe au contact du sol, sa masse volumique diminue et elle s’élève. Elle subit alors une détente adiabatique et se refroidit.',
    },
    {
      type: 'list',
      items: [
        'si sa température devient égale à celle de l’air ambiant, sa masse volumique également et elle stoppe sa montée.',
        'si sa température devient inférieure à celle de l’air ambiant, sa masse volumique devient supérieure à celle de l’air ambiant et elle redescend.',
      ],
    },
    { type: 'text', text: 'On dit alors que l’atmosphère est stable.' },
    {
      type: 'text',
      text: 'Lorsque l’atmosphère est stable, les mouvements de convection restent d’ampleur très modeste. L’air est calme et il ne se forme pas de nuages en moyenne et haute altitude. Certaines couches d’atmosphère sont favorables à la stabilité :',
    },
    {
      type: 'list',
      items: [
        'les couches isothermes : ce sont des couches d’air dans lesquelles la température reste constante lorsque l’on monte. On est en présence d’une isothermie.',
        'Les couches d’inversion : ce sont des couches d’air dans lesquelles la température augmente lorsque l’on monte. On est en présence d’une inversion de température.',
      ],
    },
    {
      type: 'text',
      text: 'Lorsque l’air chauffé au contact du sol rencontre de telles couches au cours de son ascension, il se retrouve rapidement plus froid que l’air ambiant et sa montée est stoppée. On dit qu’il y a stabilité absolue.',
    },

    { type: 'heading', level: 4, text: '5.2.2 - Instabilité d’une masse d’air' },
    {
      type: 'text',
      text: 'Lorsqu’une particule d’air humide s’échauffe au contact du sol, sa masse volumique diminue et elle s’élève. Elle subit alors une détente adiabatique et se refroidit. Si sa température reste supérieure à celle de l’air ambiant, sa masse volumique reste inférieure à celle de l’air ambiant et elle continue sa montée.',
    },
    { type: 'text', text: 'On dit alors que l’atmosphère est instable.' },
    {
      type: 'text',
      text: 'Si le gradient de température de l’atmosphère est le même que celui de l’air sec, la bulle qui s’est échauffée sur le sol part avec une température supérieure à celle de l’air ambiant et se refroidit avec le même gradient (1 °C / 100 m). Sa température reste donc supérieure à celle de l’atmosphère et l’ascension se poursuit. Arrivée à son niveau de condensation, la bulle va donner naissance à un nuage. Son gradient va devenir inférieur à celui de l’atmosphère (0,6 °C / 100 m) et la montée continuera de plus belle. Il se forme alors des nuages à très grand développement vertical : les cumulus congestus et les cumulonimbus (nuage d’orage). On dit qu’il y a instabilité absolue.',
    },
    {
      type: 'text',
      text: 'Si au cours de leur ascension les bulles thermiques rencontrent une isothermie ou une inversion de température sur une couche de faible épaisseur, les bulles parties avec les températures les plus importantes parviendront à traverser cette couche et à poursuivre leur ascension. En revanche, celles qui se sont détachées du sol avec une différence de température peu importante seront stoppées par l’isothermie ou l’inversion. On dit qu’il y a instabilité sélective.',
    },
    {
      type: 'schema',
      schema: 'stabilite-instabilite',
      page: 19,
      caption:
        'La bulle partie à 26 °C est arrêtée par la couche de bloquage ; celle partie à 28 °C la traverse.',
    },
  ],
}

export const section6: CourseSection = {
  id: 'masses-air',
  number: '6',
  title: 'Les masses d’air',
  pages: [19, 20],
  blocks: [
    { type: 'heading', level: 3, text: '6.1 - NOTION DE MASSE D’AIR EN METEOROLOGIE' },
    {
      type: 'definition',
      term: 'Masse d’air',
      text: 'Une masse d’air, en météorologie est un volume important (quelques dizaines ou centaines de milliers de km3) d’air de la troposphère dont la température et l’humidité sont pratiquement uniformes dans un plan horizontal.',
    },
    {
      type: 'text',
      text: 'A l’intérieur d’une masse d’air il existe donc des surfaces horizontales de plusieurs centaines de km² sur lesquelles la température et l’humidité sont relativement constantes. Ces masses d’air se déplacent dans l’atmosphère en glissant les unes sur les autres sans se mélanger. Au cours de leur déplacement leurs caractéristiques (température et humidité) évoluent en fonction des surfaces au-dessus desquelles elles transitent (océans, sols humides, déserts,...). La rencontre de deux masses de caractéristiques très différentes influence beaucoup la météorologie dans la région de leur contact.',
    },
    {
      type: 'text',
      text: 'Les caractéristiques des masses d’air dépendent au départ de leur mouvement, de la zone audessus de laquelle elles se sont formées.',
    },

    { type: 'heading', level: 3, text: '6.2 - LES DIFFERENTS TYPES DE MASSES D’AIR' },
    { type: 'text', text: 'Pour classer les masses d’air on utilise 2 critères.' },
    { type: 'heading', level: 4, text: 'leur humidité :' },
    {
      type: 'text',
      text: 'Si elles se forment au-dessus des océans elles seront très humides. On les qualifie alors de maritimes. Alors que si elles se forment au-dessus de régions plutôt désertiques, elles seront peu humides. On les qualifie alors de continentales.',
    },
    { type: 'heading', level: 4, text: 'leur température :' },
    {
      type: 'text',
      text: 'Pour celles qui se forment dans les régions de grande latitude, l’air les constituant est froid, alors que pour celles qui se forment aux latitudes proches de l’équateur, l’air est chaud. On en distingue trois types : les masses d’air Polaires, Arctiques ou Tropicales.',
    },
    {
      type: 'text',
      text: 'Il y en a donc en tout 6 types de masses d’air dont les principales caractéristiques sont dans le tableau ci-dessous :',
    },
    {
      type: 'table',
      caption: 'Les six types de masses d’air',
      page: 20,
      headers: ['Type de masse d’air', 'Caractéristiques', 'Saison'],
      rows: [
        [
          'continentale Polaire cP',
          'Air sec et stable',
          'Eté : au fur et à mesure de son déplacement cette masse d’air s’humidifie au contact des sols survolés et devient instable. Des orages peuvent s’y développer. Hiver : l’air reste très froid et très sec. La visibilité est excellente et il n’y a pas de précipitations.',
        ],
        [
          'continentale Arctique cA',
          'Air très froid et très sec',
          'Eté : elles ne se développent pas en été. Hiver : l’air reste très froid et très sec.',
        ],
        [
          'continentale Tropicale cT',
          'Air chaud, sec et instable (mais peu de formations nuageuses)',
          'Eté : l’air est chaud et sec. Il n’y a pas de précipitations mais la visibilité n\'excède pas 7 à 8 Km. Hiver : mêmes caractéristiques.',
        ],
        [
          'maritime Polaire mP',
          'Air initialement froid se réchauffant et s’humidifiant au cours de sa descente vers le sud. Instable et nuageux apportant une pluie froide.',
          'Eté : Le temps est pluvieux, des orages et des averses peuvent s’y développer. Hors précipitations la visibilité est bonne. Hiver : Le temps est froid et des averses de neige y sont fréquentes. Hors précipitations la visibilité est bonne.',
        ],
        [
          'maritime Arctique mA',
          'Air froid se réchauffant et s’humidifiant beaucoup au cours de son déplacement. Apporte humidité et instabilité.',
          'Eté : temps froid avec de nombreuses averses. Grande instabilité et beaucoup de nuages instables dans la journée. Hiver : temps très froid avec de nombreuses averses de neige. Présence de nombreux nuages bas.',
        ],
        [
          'maritime Tropicale mT',
          'Air très chaud et très humide. Il apporte de nombreuses précipitations (orages et averse), du brouillard ou de la brume sèche.',
          'Eté : Le temps est chaud et humide : très pluvieux. La visibilité est médiocre. Hiver : Le temps est chaud et humide. Il se forme des brouillards et des nuages bas. La visibilité est médiocre.',
        ],
      ],
    },
  ],
}
