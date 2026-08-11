import type { CourseSection } from '@/content/types'

/**
 * COURS 1 — MÉTÉOROLOGIE, sections 9 et 10. Pages 31 à 49 du PDF source.
 * Texte repris mot pour mot — voir l'entête de sections-1-3.ts.
 *
 * La section 10 s'appuie largement sur des documents Météo France et OACI
 * reproduits en pleine page (tableaux de décodage METAR et TAF, cartes
 * TEMSI, coupes verticales, WINTEM, image satellite). Ce ne sont pas des
 * schémas de l'auteur : ils ne peuvent pas être « redessinés » sans
 * fabriquer des données aéronautiques. Ils sont signalés comme tels.
 */

export const section9: CourseSection = {
  id: 'phenomenes-dangereux',
  number: '9',
  title: 'Les phénomènes dangereux pour les aéronefs',
  pages: [31, 36],
  blocks: [
    {
      type: 'text',
      text: 'Certains phénomènes météorologiques présentent des dangers particuliers pour l’aéronautique.',
    },
    {
      type: 'text',
      text: 'Même très bien équipés, les aéronefs ne peuvent pas voler dans n’importe quelles conditions. Il faut toujours que le pilote puisse distinguer la piste avant de se poser. Le givrage reste un phénomène dangereux par ses effets sur la cellule et les moteurs. Des turbulences violentes peuvent endommager les aéronefs,...',
    },

    { type: 'heading', level: 3, text: '9.1- LA BRUME ET LE BROUILLARD' },
    {
      type: 'text',
      text: 'La brume et le brouillard sont des phénomènes météorologiques analogues qui diffèrent essentiellement par leur intensité.',
    },
    {
      type: 'definition',
      term: 'Le brouillard',
      text: 'Le brouillard est une suspension de fines gouttelettes d’eau réduisant la visibilité à moins d’1 Km.',
    },
    {
      type: 'definition',
      term: 'La brume',
      text: 'La brume, moins intense, laisse une visibilité réduite mais supérieure à 1 Km. Elle est indiquée pour une visibilité de 1 à 5 km.',
    },
    {
      type: 'text',
      text: 'Ils se notent par deux ou trois traits horizontaux sur les cartes météo :',
    },
    {
      type: 'keypoints',
      title: 'Les conditions favorables à la formation de brouillard sont :',
      items: [
        'pression élevée',
        'température en rapide diminution le soir',
        'forte humidité',
        'pas ou peu de vent',
      ],
    },

    { type: 'heading', level: 4, text: '9.1.1 - La brume' },
    {
      type: 'text',
      text: 'La brume peut se former en pleine journée s’il fait très chaud et très humide. L’évaporation engendre alors la saturation de la masse d’air. De l’eau se condense en faible quantité sur de grandes étendues et donne une impression de voile. La visibilité est alors réduite, parfois de façon importante. Bien qu’il fasse beau depuis le sol, les conditions en vol ne sont pas très favorables en basse altitude.',
    },
    {
      type: 'text',
      text: 'Il existe un phénomène dit de brume sèche, qui se compose non pas de gouttelettes d’eau mais de poussières en suspension. Souvent due à la pollution, elle est bien visible en été à l’approche des grandes agglomérations.',
    },

    { type: 'heading', level: 4, text: '9.1.2 - Le brouillard de radiation' },
    {
      type: 'text',
      text: 'Ce brouillard apparaît la nuit lorsque l’air est très humide, qu’il n’y a pas de vent et que la température chute rapidement. Si le ciel est dégagé, le sol perd rapidement la chaleur qu’il a emmagasinée dans la journée par radiation (1). Cela entraîne une diminution rapide de la température de l’air humide. On atteint alors le point de rosée et des gouttelettes d’eau se condensent en formant un brouillard au niveau du sol (2). Dans la matinée, le soleil réchauffe le sol et l’air à son contact se réchauffe à son tour. Le brouillard se dissipe (3). S’il est très dense (en hiver) il est possible que le soleil ne suffise pas pour le dissiper. Il faut en plus que le vent se lève (arrivée d’une perturbation). En se dissipant, le brouillard peut donner naissance à des stratus.',
    },
    { type: 'schema', schema: 'brouillard-radiation', page: 31 },

    { type: 'heading', level: 4, text: '9.1.3 - Le brouillard d’advection' },
    {
      type: 'text',
      text: 'C’est un brouillard qui se forme lorsqu’une masse d’air chaud et humide est poussée par un vent faible sur un sol plus froid (1). Dans son déplacement l’air se refroidit et finit par atteindre son point de rosée (2).',
    },
    {
      type: 'text',
      text: 'Il y a alors condensation d’un brouillard qui se déplace avec le vent. Ce type de brouillard apparaît suite à des entrées maritimes en hiver ou au printemps lorsque le vent du sud amène des masses d’air humide sur des sols plus froids au nord.',
    },
    { type: 'schema', schema: 'brouillard-advection', page: 32 },

    { type: 'heading', level: 4, text: '9.1.4 - Le brouillard d’évaporation' },
    {
      type: 'text',
      text: 'C’est un brouillard qui se forme sur les grandes étendues d’eau (lacs ou mers). Un vent faible mais froid souffle depuis la terre vers la mer (1). Cet air froid et sec se charge en humidité par évaporation de l’eau au-dessus de laquelle il passe. Il atteint alors la saturation (point de rosée) et des gouttelettes d’eau se condensent au-dessus de la mer (2). Le même mécanisme peut se produire au-dessus d’un lac ou d’étendues marécageuses.',
    },
    { type: 'schema', schema: 'brouillard-evaporation', page: 32 },

    { type: 'heading', level: 4, text: '9.1.5 - Le brouillard de pente' },
    {
      type: 'text',
      text: 'Dans les régions présentant un relief marqué, il est possible d’observer un brouillard se formant le long des pentes et laissant la vallée dégagée. Cela se produit lorsqu’un vent faible pousse de l’air chaud et humide provenant de la vallée à l’assaut du relief. En s’élevant l’air se refroidit par détente adiabatique et atteint son point de condensation. Un brouillard se condense alors le long de la pente.',
    },
    { type: 'schema', schema: 'brouillard-pente', page: 32 },

    { type: 'heading', level: 4, text: '9.1.6 - Les dangers du brouillard' },
    {
      type: 'text',
      text: 'Le brouillard est un phénomène météorologique très dangereux pour l’aéronautique. La réduction de visibilité qu’il entraîne empêche tout vol à vue. Il est impossible pour un pilote d’assurer la sécurité dans le brouillard. Le sol n’est pas toujours visible et les obstacles de grandes dimensions verticales ne sont aperçus que trop tard pour être évités.',
    },
    {
      type: 'text',
      text: 'Dans le cas de la brume, il est possible que les conditions météo minimales légales pour le vol à vue soient réunies mais la plus grande prudence s’impose et il est préférable de bien connaître la région survolée pour ne pas se perdre et assurer la sécurité.',
    },
    {
      type: 'text',
      text: 'Si le brouillard est très dense, il est possible que les vols aux instruments ne soient pas possibles non plus. En effet, il faut une visibilité minimale au pilote pour s\'assurer que son avion ne va pas quitter la piste au décollage. A l’atterrissage il faut pouvoir apercevoir la piste (ou au moins son balisage) pour poser correctement l’avion. De plus si le brouillard est givrant, on ajoute les risques liés au givre.',
    },

    { type: 'heading', level: 3, text: '9.2 - LE GIVRE' },
    { type: 'heading', level: 4, text: '9.2.1 - Définition du givre' },
    {
      type: 'definition',
      term: 'Le givre',
      text: 'Le givre est un dépôt de glace qui se forme à la surface du sol ou des objets.',
    },
    {
      type: 'text',
      text: 'Selon son épaisseur et les conditions dans lesquelles il s’est formé, le givre peut être transparent ou opaque.',
    },
    {
      type: 'text',
      text: 'Sur les aéronefs il se formera en priorité sur les parties exposées au vent relatif (bords d’attaque, pare-brise,...) et les éléments pointus.',
    },
    {
      type: 'text',
      text: 'Les risques de givrage sont notés sur les cartes météo. Ils sont évalués en fonction de leur intensité (faible, modéré ou fort).',
    },
    {
      type: 'text',
      text: 'Les conditions de givrage faible se rencontrent dans les nuages stables et les brouillards peu denses. Celles de givrage modéré dans les nuages instables et les brouillards denses. Le givrage fort n’apparaît quasiment que dans les nuages très instables et avec les précipitations surfondues.',
    },

    { type: 'heading', level: 4, text: '9.2.2 - Formation du givre' },
    { type: 'text', text: 'Le givre qui peut se former sur un aéronef peut avoir plusieurs origines :' },
    {
      type: 'list',
      items: [
        'il peut provenir de la solidification d’eau présente sur l’aéronef au sol. Lorsque celui-ci monte en altitude, l’eau présente sur la cellule va geler.',
        'il peut se former un dépôt de givre sur les parties froides exposées au vent relatif par condensation solide de la vapeur d’eau contenue dans l’air si la cellule de l’avion est à température négative.',
        'il peut enfin se former par solidification des gouttelettes d’eau formant les nuages. Dans ceux-ci, il est fréquent de rencontrer des gouttelettes d’eau en état de surfusion. Il s’agit d’eau liquide à température négative. La présence d’impuretés (à plus forte raison la cellule d’un aéronef) fait cesser l’état de surfusion et un dépôt de glace apparaît.',
      ],
    },

    { type: 'heading', level: 4, text: '9.2.3 - Classification du givre' },
    {
      type: 'text',
      text: 'Le givre est classé selon deux critères : son intensité et son aspect. Les deux étant souvent liés.',
    },
    { type: 'text', text: 'Les différents types de givre sont :' },
    { type: 'heading', level: 4, text: '9.2.3.1 - La gelée blanche' },
    {
      type: 'text',
      text: 'Elle se forme par condensation directe de l’état gazeux à l’état solide. Elle survient au sol ou en vol hors nuage. Givrage faible mais pouvant gêner la visibilité à travers le pare-brise.',
    },
    { type: 'heading', level: 4, text: '9.2.3.2 - Le givre blanc' },
    {
      type: 'text',
      text: 'Il se forme par solidification rapide de gouttelettes en surfusion. Il survient en milieu nuageux instable et le dépôt peut être rapidement important.',
    },
    { type: 'heading', level: 4, text: '9.2.3.3 - Le givre transparent' },
    {
      type: 'text',
      text: 'Il se forme par solidification lente de gouttelettes en surfusion. Il survient en milieu nuageux généralement instable. Il se forme essentiellement pour des températures entre 0 et -15°C. La formation lente permet un étalement du dépôt qui peut être très important. Il est très dangereux car sa transparence peut rendre sa détection lente.',
    },
    { type: 'heading', level: 4, text: '9.2.3.4 - Le verglas' },
    {
      type: 'text',
      text: 'Il se forme par congélation d’une pluie ou d’une bruine surfondue à l’impact avec le sol ou un obstacle. Le dépôt transparent se forme très rapidement sur toute la surface de l’avion. Son épaisseur peut très vite être importante.',
    },

    { type: 'heading', level: 4, text: '9.2.4 - Les effets du givrage' },
    {
      type: 'text',
      text: 'Les effets du givrage vont avoir des conséquences sur la cellule et sur les moteurs. Dans le cas d’un givrage faible, il n’y a pas de réel danger si on prend les mesures pour éviter qu’il ne s’aggrave. Les effets d’un givrage modéré peuvent être contrôlés par les dispositifs anti-givrage des aéronefs. En revanche, il faut toujours éviter soigneusement les zones de fort givrage.',
    },
    {
      type: 'text',
      text: 'Pour lutter contre le givrage, la meilleure solution est d’essayer de l’éviter en évoluant le moins possible en conditions givrantes. Toutefois pour éviter de givrer l’appareil dans les nuages, il existe des dispositifs permettant de dégivrer les bords d’attaque des ailes, de réchauffer les sondes de mesure ou les antennes et les pare-brises.',
    },

    { type: 'heading', level: 3, text: '9.3 - LES PRÉCIPITATIONS A CARACTERE DANGEREUX' },
    {
      type: 'text',
      text: 'Certaines précipitations présentent un caractère particulièrement dangereux pour les aéronefs qui les traversent. Les risques essentiels qu’ils entraînent sont liés à la forte baisse de visibilité que l’on constate en dessous.',
    },
    {
      type: 'text',
      text: 'Les grains (fortes averses) ne constituent pas de risque majeur du fait de leur nature (pluie) mais ils obligent le pilote à voler très bas s’il veut éviter de pénétrer dans les nuages.',
    },
    {
      type: 'text',
      text: 'La visibilité étant médiocre dans le grain, les risques de collision avec le sol ou des obstacles élevés deviennent importants. Il en est de même sous les averses de neige. Dans ce cas il peut s’ajouter un risque de givrage (accumulation de glace en certains endroits de la cellule ou des moteurs) comme c’est le cas avec le verglas.',
    },

    { type: 'heading', level: 3, text: '9.4 - LES TURBULENCES' },
    {
      type: 'text',
      text: 'Les aéronefs modernes sont calculés et équipés pour résister à de nombreuses contraintes mais la résistance mécanique de la cellule a des limites à ne pas franchir. Celles-ci sont établies par le constructeur au cours de la conception de l’avion et vérifiées par des essais statiques sur une cellule.',
    },
    {
      type: 'text',
      text: 'Un dépassement de ces contraintes peut déformer l’appareil. Ses performances sont alors dégradées. Certains systèmes peuvent être mis hors service, posant de sérieux problèmes de sécurité.',
    },
    {
      type: 'text',
      text: 'Dans certains nuages (cumulonimbus) les courants de convections sont si violents que les aéronefs peuvent être soumis à des contraintes dépassant leurs limites. Il est vital d’éviter de traverser de tels nuages. L’avion peut être gravement endommagé et la sécurité de ses passagers peut être engagée.',
    },
    {
      type: 'text',
      text: 'De violentes turbulences peuvent également être rencontrées lorsqu’un vent fort aborde des reliefs marqués. Il faut éviter de survoler le relief de trop près par grand vent. Dans les rotors derrière un relief les turbulences peuvent engendrer une perte de contrôle.',
    },
    {
      type: 'text',
      text: 'Il est possible de rencontrer des turbulences en air clair : CAT (Clear Air Turbulence). Celles-ci surviennent en haute altitude dans des zones de fort gradient de température et de pression. Il se crée alors de violents mouvements verticaux qui secouent rudement l’avion. Elles peuvent se produire sur des zones assez étendues mais leur développement vertical reste assez limité. Il est donc assez facile de les éviter en changeant d’altitude.',
    },

    { type: 'heading', level: 3, text: '9.5 - L’ORAGE' },
    {
      type: 'text',
      text: 'Les orages se forment au sein des cumulonimbus. Ces nuages à très grand développement vertical résultent de mouvements de convection très puissants. Ils peuvent se développer sous le fait d’un très grand échauffement du sol les journées d’été. Ils sont alors isolés et éclatent en fin d’après-midi la plupart du temps. Ils peuvent également se former dans les fronts froids des perturbations lorsque l’air chaud et humide est fortement soulevé par l’air froid qui le pousse. Ils forment dans ce cas une barrière de cumulonimbus noyée dans la masse. Les orages sont très violents et très fréquents à l’équateur. Leur force et leur fréquence diminuent lorsque l’on se déplace vers les pôles. Ils y sont d’ailleurs inexistants car il n’y a ni la chaleur ni l’humidité nécessaire au développement des cumulonimbus aux pôles. En fin d’orage, le cumulonimbus se désagrège.',
    },
    {
      type: 'text',
      text: 'C’est un système si puissant qu’il est impossible de le régénérer comme dans le cas des autres nuages donnant lieu à des précipitations.',
    },
    {
      type: 'text',
      text: 'Leur durée va de quelques minutes à quelques dizaines de minutes mais les précipitations qui les accompagnent sont très violentes et très dangereuses pour les aéronefs. D’autre part au sein du nuage lui-même, on rencontre non seulement de la pluie mais aussi de la neige et de la grêle. Il est possible de rencontrer des grêlons de plusieurs dizaines voire centaines de grammes. Le record enregistré atteint le kilogramme! De tels météores font autant de dégâts sur un aéronef que des projectiles de DCA de petit calibre...',
    },
    {
      type: 'text',
      text: 'Les mouvements de convection au sein et aux abords des cumulonimbus (y compris au stade de formation) sont d’une très grande violence. Un avion traversant un cumulonimbus y subit des turbulences importantes pouvant mettre en péril l’appareil et ses occupants.',
    },
    {
      type: 'text',
      text: 'Les frottements entre les particules au sein du nuage entraînent une séparation des charges électriques. Le bas du nuage se charge négativement tandis que le haut se charge positivement.',
    },
    {
      type: 'text',
      text: 'Quand les charges sont très importantes, il se produit une décharge violente accompagné d’un phénomène lumineux (éclair ou foudre) et d’un phénomène acoustique (tonnerre).',
    },
    {
      type: 'text',
      text: 'Cette décharge peut avoir lieu entre la base du nuage et le sol (éclair de trait) ou entre la base et le sommet du nuage (éclair de masse). Un avion atteint par la foudre peut voir certaines parties de sa structure endommagées ou certains de ces instruments et circuits électriques mis hors service. De plus la foudre peut aveugler temporairement l’équipage.',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Ne pas voler dans ou sous les cumulonimbus',
      text: 'Il est donc primordial de ne pas voler dans ou sous les cumulonimbus pour éviter tous les risques liés à l’orage.',
    },
  ],
}

export const section10: CourseSection = {
  id: 'information-meteo',
  number: '10',
  title: 'L’information météo pour l’aéronautique',
  pages: [36, 49],
  blocks: [
    {
      type: 'text',
      text: 'L’arrêté du 3 mars 2006 relatif aux règles de l’air, stipule dans son Annexe 1 relative à l’action préliminaire au vol, qu’avant d’entreprendre un vol, le pilote commandant de bord d’un aéronef prend connaissance de tous les renseignements utiles au vol projeté.',
    },
    {
      type: 'keypoints',
      title: 'Ces renseignements sont traités dans un dossier de vol comportant :',
      items: [
        'une carte de temps significatif (TEMSI) ;',
        'une ou deux cartes de vents et températures en altitude, au niveau proche de celui de croisière',
        'et une feuille d’observations et de prévisions pour les aérodromes de départ, de destination et de dégagement et sur le(s) FIR (Flight Information Region).',
      ],
    },

    { type: 'heading', level: 3, text: '10.1 - LES METAR ET LES SPECI' },
    {
      type: 'text',
      text: 'Les METAR sont des messages destinés à fournir les informations météo observées régulièrement par la station de l’aéroport (METAR = METeorological Airport Report (aide à la mémoire = METéo d’ARrivée).',
    },
    {
      type: 'text',
      text: 'Ces messages sont rédigés selon un modèle type et donnent TOUJOURS DANS LE MËME ORDRE les indications suivantes : type de message, terrain d’observation, heure TU (Zoulou) de l’observation, direction et force du vent (éventuellement des rafales), visibilité, météores, nuages (nébulosité, hauteur de base et genres), température et température du point de rosée, pression (QNH et en général QFE), pistes en service pour les décollages et les atterrissages et les phénomènes significatifs récents (mais pas au moment de l’observation).',
    },
    {
      type: 'awaiting',
      what: 'Tableau de décodage des groupes METAR (page 37) — c’est une planche pleine page de Météo France, reproduite en image dans le cours. Sa transcription intégrale reste à faire.',
    },
    { type: 'heading', level: 4, text: 'Exemple de METAR :' },
    {
      type: 'coded',
      code: 'LFRB 271300Z  34012KT  7000  RA  BKN020  13/10  Q1016  NOSIG =',
      decode: [
        'Message d\'observation Metar le 27 à 13 H 00 UTC à Brest Bretagne',
        'Vent 340, 12 nœuds',
        'Visibilité horizontale 7000 mètres',
        'Pluie',
        'Nuages morcelés, 5 à 7 octas, 2000 pieds',
        'Température sous abri 13° C, température du point de rosée 10° C',
        'Pression QNH 1016 hPa',
        'Pas d\'évolution dans les 2 heures à venir.',
      ],
    },
    {
      type: 'coded',
      code: 'LFMH 062000Z  36020G30KT  3000  VCTS  OVC015CB  10/06 Q1007  RESHRA=',
      decode: [
        'Message d\'observation Metar le 6 à 20 H 00 UTC à Saint-Etienne Bouthéon',
        'Vent 360, vitesse moyenne 20 nœuds, rafales à 30 nœuds',
        'Visibilité horizontale 3000 mètres',
        'Orage à proximité',
        'Couvert, 8 octas, 1500 pieds, cumulonimbus',
        'Température sous abri 10° C, température du point de rosée 6° C',
        'Pression QNH 1007 hPa',
        'Récentes averses de pluie',
      ],
    },
    {
      type: 'coded',
      code: 'LFPO 040500Z VRB3KT 0500SW6500NE  R28/0600V1000U +BCFG  VV008  10/09  Q0992  BECMG  FM0600 TL0645 30015KT  3000 =',
      decode: [
        'Message d\'observation Metar le 4 à 05 H 00 UTC à Paris-Orly',
        'Vent variable en direction, vitesse moyenne 3 nœuds',
        'Visibilité horizontale mini 500 m vers le SW, maxi de 6500 m vers le NE',
        'RVR piste 28 variant entre 600 m et 1000 m, en augmentation',
        'Fort banc de brouillard, visibilité verticale, 800 pieds',
        'Température sous abri 10° C, température du point de rosée 9° C',
        'Pression QNH 992 hPa',
        'Devenant à partir de 6 heures jusqu\'à 6h45: vent 300, 15 nœuds, visibilité 3000 mètres',
      ],
    },

    { type: 'heading', level: 4, text: 'LES SPECI' },
    {
      type: 'text',
      text: 'Les SPECI (SPECIfique) sont émis en cas d’une brusque variation des phénomènes météo entre les observations régulières si Ces changements peuvent jouer sur la sécurité ou la possibilité de se poser pour les avions en route vers le terrain.',
    },
    {
      type: 'definition',
      term: 'Définition',
      text: 'Amendement d\'un METAR si modification de certains de ses paramètres pendant sa période de validité.',
    },
    {
      type: 'coded',
      code: 'SPECI  LFRS  062030Z  36020G30KT  6000  VCTS  OVC015CB 10/06  Q1007  B2=',
      decode: [
        'Message Spéci le 6 à 20 H 30 UTC à Nantes',
        'Vent 360, vitesse moyenne 20 nœuds, rafales à 30 nœuds',
        'Visibilité horizontale 6000 mètres',
        'Orage à proximité',
        'Couvert, 8 octas, 1500 pieds, cumulonimbus',
        'Température sous abri 10° C, température du point de rosée 6° C',
        'Pression QNH 1007 hPa',
        'Critère 2 (visibilité) en amélioration',
      ],
    },

    { type: 'heading', level: 3, text: '10.2 - LES TAF ET LES SIGMET' },
    {
      type: 'text',
      text: 'Les TAF (Terminal Aerodome Forecast = prévisions sur le terrain d’arrivée) sont des messages faisant état des prévisions établies pour une période de 9 heures (TAF court) et 24 ou 30 H (TAF long). Ils indiquent le terrain concerné, l’heure à laquelle la prévision a été établie, la période pour laquelle elle a été établie, le temps observé et son évolution prévue (vent, visibilité, précipitations, nuages).',
    },
    {
      type: 'awaiting',
      what: 'Tableau de décodage des groupes TAF (page 40) — planche pleine page reproduite en image dans le cours. Transcription intégrale à faire.',
    },
    { type: 'heading', level: 4, text: 'Exemple de TAF :' },
    {
      type: 'coded',
      code: 'TAF LFRN 251700Z 2518/2618 28008KT CAVOK BECMG 2600/2602 BKN030 PROB30 TEMPO 2603/2608 BKN010 ...=',
      decode: [
        'TAF long 24 h établi le 25 à 17 h 00 UTC, valable du 25 à 18 h 00 UTC jusqu’au 26 à 18 h 00 UTC. Il est prévu un vent de surface de 280° à 8 kt associé à des conditions CAVOK. Un changement est prévu le 26 entre 00 h 00 UTC et 02 h 00 UTC amenant un plafond nuageux (5 et 7 octas) à 3000 ft, avec une probabilité faible e voir ce plafond s’abaisser temporairement à 1000 ft, le 26 entre 03 h 00 et 08 h 00 UTC.',
      ],
    },
    {
      type: 'coded',
      code: 'LFBZ 180200Z  1803/1903  21010G20KT  5000   PROB40 TEMPO 0610 VCBLSA FM10 9999 TEMPO 1112 22020G40KT =',
      decode: [
        'Message de prévision Taf , pour Biarritz, émis le 18 à 02h UTC, valable du 18 à 3 H jusqu’au 19 à 3 H UTC',
        'Vent 210, vitesse moyenne 10 nœuds, rafales à 20 nœuds',
        'Visibilité 5 km,',
        'Probabilité de 40%, évolution temporaire entre 6 et 10 h: chasse sable à proximité.',
        'Évolution prévue à partir de 10h : visibilité > 10 km',
        'Temporairement de 11 à 12 h : vent du 220, 20 à 40 nœuds en rafales',
      ],
    },
    {
      type: 'text',
      text: 'Les SIGMET (SIGnificatif METéo) sont des messages rédigés par un centre de veille météorologique et émis par les services de la navigation aérienne. Ils signalent des phénomènes météorologiques dangereux hors des zones d’approche des terrains pour attirer la vigilance des équipages au cours de leur vol de croisière.',
    },
    {
      type: 'coded',
      code: 'LFFF SIGMET 6  VALABLE  021235/021635  LFMM – FIR MARSEILLE : SEV TURB OBS ON LFMM FIR  ON SOUTH France,  GND TO FL070,  INTSF',
      decode: [
        'Message Sigmet 6 valable le 2 de 12 h 35 à 16 h 35 concernant la FIR Marseille : turbulence sévère observée dans le sud de la France, du sol au niveau de vol 70, s\'intensifiant.',
      ],
    },
    {
      type: 'coded',
      code: 'LFFF SIGMET 1 VALABLE 031200/031600 LFPO - ISOL CB OBS UIR FRANCE MAINLY E PART BLW FL400 MOV TO E INTSF =',
      decode: [
        'Message Sigmet 1 pour les vols subsoniques et supersoniques, valable le 3 de 12h à 16h émis par Paris Orly: Cb observés dans l\'UIR France, principalement dans l\'est, au-dessous du niveau de vol 400, se déplaçant vers l\'est en s\'intensifiant.',
      ],
    },

    { type: 'heading', level: 3, text: '10.3 - PRÉCISIONS SUR LA NOTION DE VISIBILITÉ DOMINANTE' },
    {
      type: 'definition',
      term: 'La visibilité dominante',
      text: 'La visibilité dominante correspond à la valeur de la visibilité (maximale) qui est atteinte ou dépassée dans au moins la moitié du Cercle d’horizon ou au moins la moitié de la surface de l’aérodrome',
    },
    { type: 'heading', level: 4, text: 'Particularités dans les messages METAR ou SPECI :' },
    {
      type: 'list',
      items: [
        'WW = visibilité dominante 9999 : visi > à 10 km',
        'NDV (No directional visibility): Concerne les Metar Auto si les capteurs ne permettent pas de déterminer plusieurs mesures de direction. En général, la mesure est réalisée dans la direction de la piste ; ex.: 7000 NDV',
        'Indication supplémentaire de visibilité : si Visi mini dans un secteur est inférieure à 1 500 mètres ou si Visi mini est inférieure à 50% de la visi dominante et inférieure à 5000 m ==> dans ces cas, indication de la direction de la visi minimale ex : Metar LFRN 241400Z 18005kt 9999 4000SE BR',
      ],
    },
    {
      type: 'schema',
      schema: 'visibilite-secteurs',
      page: 42,
      caption: 'Codage de la visibilité : 6000',
    },
    {
      type: 'text',
      text: 'Secteur 1 : visi de 6 km sur 45°, Secteur 2 : visi de 6 km sur 60° Secteur 3 : visi de 6 km sur 90 °',
    },
    {
      type: 'list',
      items: [
        '6 km sur plus de 180° en totalisant les 3 secteurs et',
        '8 km au moins ailleurs ; la visibilité dominante de 6 km sera donc transmise.',
      ],
    },
    {
      type: 'schema',
      schema: 'visibilite-brume',
      page: 42,
      caption: 'Codage de la visibilité : 8000 3000SW BR',
    },
    {
      type: 'text',
      text: 'La visibilité est de 8 km sur largement plus de 180°, mais réduite à 3 km dans le SW du fait de la présence de brume.',
    },
    {
      type: 'text',
      text: 'La visibilité dominante est donc de 8 km et la visibilité minimale est de 3km. La visibilité minimale étant inférieure de plus de 50% de la visibilité dominante, elle est alors publiée.',
    },
    {
      type: 'table',
      caption: 'Exemples de codage',
      page: 42,
      headers: ['Situation', 'Codage sur Métar et Spéci'],
      rows: [
        ['1) Visi dominante = 10 km, visi mini = 6 km dans l’ouest ;', 'CAVOK.'],
        ['2) Visi dominante = 10 km, visi mini = 5 km dans le sud ;', 'CAVOK.'],
        ['3) Visi dominante = 10 km, visi mini = 4900 m dans l’est ;', '9999 4900E.'],
        ['4) Visi dominante = 9000 m, visi mini = 4000 m dans le sud-est ;', '9000 4000SE.'],
        ['5) Visi dominante = 8000 m, visi mini = 4000 m dans l’ouest ;', '8000. (rapport des 2 visis pas inférieures à 2 donc pas d’indication).'],
        ['6) Visi dominante = 3000 m, visi mini = 1500 m dans le nord ;', '3000. (rapport des 2 visis pas inférieures à 2 donc pas d’indication)'],
        ['7) Visi dominante = 3500 m, visi mini = 1500 m dans le sud-ouest ;', '3500 1500SW.'],
        ['8) Visi dominante = 1800 m, visi mini = 1000 m dans l’est ;', '1800 1000 E.'],
      ],
    },

    { type: 'heading', level: 3, text: '10.4 - LES CARTES TEMSI ET LA COUPE VERTICALE' },
    {
      type: 'text',
      text: 'Pour que les équipages se fassent une idée des masses nuageuses qu’ils rencontreront en vol, les organismes météo établissent des cartes TEMSI (TEMps SIgnificatif) montrant les principales formations nuageuses et les précipitations qu’elles engendrent. On y porte également les risques de givrage, d’orage et de turbulences avec leurs intensités prévues. Deux types de carte TEMSI sont établis pour application toutes les trois heures et sont disponibles trois heures avant la période de validité.',
    },
    {
      type: 'text',
      text: 'La carte TEMSI EUROC est destinée aux vols en altitudes moyennes (FL100 à 250) mais présentent en général aussi la météo en dessous pour les phases de montée et de descente. Tous les symboles portés sur les cartes font l’objet d’une standardisation internationale au niveau de l’O.A.C.I. A noter que les indications verticales sont en niveaux de vol',
    },
    {
      type: 'text',
      text: 'La carte TEMSI France est élaborée pour les vols à basse altitude, sur ces cartes les indications verticales sont en altitude au-dessus du niveau moyen des mers (QNH).',
    },
    {
      type: 'text',
      text: 'A partir des cartes TEMSI, on peut établir, à la demande des équipages, des coupes verticales sur un trajet déterminé. Elles permettent à un équipage de préparer leur vol et de faire des choix de trajectoire et d’altitude pour éviter les phénomènes dangereux.',
    },
    {
      type: 'text',
      text: 'Elles ont une validité limitée dans la durée et les équipages doivent continuer à s’informer sur la météo et son évolution pendant leur vol pour s’assurer qu’ils peuvent poursuivre conformément à la route prévue. L’exemple présenté à la page précédente est établi sur une route Bordeaux (LFBD), Marignane (LFML), Nice (LFMN).',
    },
    {
      type: 'text',
      text: 'Un pilote (y compris un pilote privé) doit demander auprès de la station météo de son aérodrome (ou consulter le site de Météo France par internet) afin de disposer d’un dossier appelé “protection météo” qui rassemblera toutes les données météo sur le trajet qu’il va suivre (messages d’observation METAR, messages de prévision TAF, carte TEMSI, coupe verticale, carte des vents, SIGMET,...) et les aérodromes qui vont tangenter sa route en plus du terrain de départ et d’arrivée',
    },
    {
      type: 'callout',
      tone: 'model',
      title: 'Documents Météo France, non redessinables',
      text: 'Les cartes TEMSI EUROC et France, les coupes verticales, les cartes WINTEM et l’image satellite des pages 43 à 48 sont des documents Météo France reproduits tels quels dans le cours. Les redessiner reviendrait à fabriquer des données aéronautiques, ce que le cahier des charges interdit : leur intégration demande une autorisation de reproduction, ou des relevés authentiques.',
    },

    { type: 'heading', level: 4, text: 'LA COUPE VERTICALE' },
    {
      type: 'text',
      text: 'Destinée à visualiser en verticale les données météorologiques de la carte TEMSI, ces cartes peuvent être demandées à METEO France mais sont généralement établies ou intégrées intellectuellement par le pilote lorsqu’il analyse son dossier météo.',
    },

    { type: 'heading', level: 3, text: '10.5 - LA CARTE DES FRONTS ET LES ISOBARES' },
    {
      type: 'awaiting',
      what: 'Carte des fronts et isobares (page 46) — document Météo France reproduit en image, sans texte d’accompagnement dans le cours.',
    },

    {
      type: 'heading',
      level: 3,
      text: '10.6 LA CARTE DE PRÉVISION MAILLE FINE, LES COUPES TRAJET ET TERRAIN',
    },
    {
      type: 'text',
      text: 'Afin de préciser la météo pour les VFR, Météo France met à disposition des pilotes une carte de prévision maille fine permettant de sélectionner des éléments pertinents pour la réalisation du vol (visibilité, base des nuages, vents, …).',
    },
    {
      type: 'text',
      text: 'Autre carte favorisant la connaissance des conditions en route : la coupe Trajet. Celle-ci indique le profil du terrain et la hauteur des nuages, des précipitations et des vents.',
    },
    {
      type: 'text',
      text: 'Enfin dans les autres produits complémentaires de Météo France pour les pilotes (Aéroweb), on trouve également une carte « Coupe Terrain » qui donne sur une période allant de 6 à 12h, la hauteur des nuages, de l’humidité et du vent sur un aérodrome.',
    },

    { type: 'heading', level: 3, text: '10.7 - LES CARTES DE VENT ET TEMPÉRATURE (WINTEM)' },
    {
      type: 'text',
      text: 'Il existe également des cartes des vents à différentes altitudes (FL 20 -50 - 100 et 180 - 300) permettant de calculer en vue de définir plus précisément la dérive que l’on rencontrera (donc le cap qu’il faut prendre pour arriver à destination) et la consommation à envisager pour la navigation. Les chiffres indiquent la température à cette altitude',
    },
    {
      type: 'list',
      items: [
        'Carte WinTem des vents et températures au niveau de vol 20 (600 m ou 2000 ft au calage 1013 hPa).',
        'WinTem des vents et températures au niveau de vol 50 (1500 m ou 5000 ft au calage 1013 hPa).',
        'WinTem des vents et températures au niveau de vol 100 (3000 m ou10000 ft au calage 1013 hPa).',
      ],
    },

    { type: 'heading', level: 3, text: "10.8 - L'utilisation de l'image satellite" },
    { type: 'text', text: 'Image composition colorée le 12-01-2010 à 12 UTC.' },
    {
      type: 'text',
      text: 'Les précautions d’usage sont les mêmes que pour les images radar : ces images ne servent que comme aide à la mémorisation de la situation dans son ensemble à l’heure de leur validité (ici 12 UTC), et ne constituent pas une prévision !',
    },
    {
      type: 'text',
      text: 'L’imagerie satellite (ici la composition colorée) ne donne un aperçu que du dessus de la couche nuageuse, ici le voile de cirrus du dessus de l’ensemble du système perturbé.',
    },
    {
      type: 'text',
      text: 'On note les Alpes enneigées, à ne pas confondre avec une masse nuageuse. On note bien la nébulosité déjà visible à 12 UTC sur notre trajet. On observe également une traîne active, avec présence de beaux gros Cb, sur le proche Atlantique à l’arrière du système.',
    },

    {
      type: 'heading',
      level: 3,
      text: "10.9 - Recueil de l'information - Analyse des éléments essentiels du vol.",
    },
    { type: 'heading', level: 4, text: "LES SOURCES D'INFORMATION MÉTÉOROLOGIQUES EN VOL" },
    {
      type: 'list',
      items: [
        'Tous les organismes de la Circulation Aérienne : CIV, SIV, APP,TWR, ATIS',
        'Tous les aérodromes avec statut AFIS (agent présent) : AFIS',
        'Emissions VOLMET VHF (Fréquences VHF sur cartouche des cartes 1/1000000ème).',
      ],
    },
    {
      type: 'table',
      caption: 'Émissions VOLMET VHF',
      page: 49,
      headers: ['Centre', 'Fréquences', 'METARs diffusés'],
      rows: [
        [
          'PARIS',
          '125.15 (F) - 126.0 (E)',
          'Bâle, Beauvais, Brest, Lille, Lyon St Exupéry, Nantes, Paris CDG, Paris Orly, Reims, Strasbourg, Tours.',
        ],
        [
          'MARSEILLE',
          '128.6 (F) - 127.4 (E)',
          'Ajaccio, Bastia, Lille, Lyon- St Ex, Marseille, Montpellier, Nice, Nîmes, Paris CDG, Paris Orly, Toulouse.',
        ],
        [
          'BORDEAUX',
          '127.0 (F) - 126.4 (E)',
          'Biarritz, Bordeaux, Lille, Marseille, Nice, Pau, Paris CDG, Paris Orly, Tarbes, Toulouse, Tours.',
        ],
      ],
    },
    {
      type: 'heading',
      level: 4,
      text: "DOSSIER DE VOL : ÉLÉMENTS DÉCISIONNELS SUR LA FAISABILITÉ D'UN VOL",
    },
    {
      type: 'table',
      caption: 'Collecte de l’information, puis exploitation',
      page: 49,
      headers: ['TEMSI', 'VENT', 'METAR', 'TAF'],
      rows: [
        [
          'Validité / Tracée route / Situation générale / Visi, nuages / Précipitations / Phénomènes dangereux / ISO 0°',
          'Validité / Tracé route / Vent moyen (dérive, carburant) / Dif ISA (performances)',
          'Validité / QNH régional et variation / Point de rosée (brouillard) / Vent sur les pistes (limitations)',
          'Validité / Évolutions défavorables / Évolutions favorables',
        ],
      ],
    },
    { type: 'heading', level: 4, text: 'SCHÉMA DE CONSTRUCTION DE LA PRISE DE DÉCISION' },
    { type: 'schema', schema: 'prise-de-decision', page: 49 },
    {
      type: 'text',
      text: 'DECISION : VOL POSSIBLE — VOL RETARDÉ — VOL ANNULÉ',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Dans tous les cas',
      text: 'AUCUNE IMPASSE concernant LA MÉTÉO avant de monter dans un avion.',
    },
    {
      type: 'text',
      text: 'Remerciements à Mrs Frédéric WILLOT et Didier VANDERPERRE (CIRAS de Lille) et à Météo France pour leur contribution à l’élaboration de ce document.',
    },
  ],
}
