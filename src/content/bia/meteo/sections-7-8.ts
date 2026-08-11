import type { CourseSection } from '@/content/types'

/**
 * COURS 1 — MÉTÉOROLOGIE, sections 7 et 8. Pages 20 à 30 du PDF source.
 * Texte repris mot pour mot — voir l'entête de sections-1-3.ts.
 *
 * Les dix genres de nuages sont illustrés dans l'original par des
 * PHOTOGRAPHIES, pas par des schémas : elles ne relèvent donc pas de la
 * règle de redessin en SVG et sont signalées comme telles.
 */

export const section7: CourseSection = {
  id: 'nuages',
  number: '7',
  title: 'Les nuages',
  pages: [20, 25],
  blocks: [
    { type: 'heading', level: 3, text: '7.1 - QUELQUES GÉNÉRALITES SUR LES NUAGES' },
    {
      type: 'text',
      text: 'Les nuages se forment par condensation d’une partie de la vapeur d’eau qu’ils contiennent au cours du refroidissement que subit l’air humide pendant la détente adiabatique qu’il subit lors de son ascension (cf. 4.2). La condensation peut se faire sous forme de petites gouttelettes d’eau ou de petits cristaux de glace. La présence d’impuretés servant de noyaux de condensation facilite la formation des nuages (poussières, pollens, sel marin,...).',
    },
    {
      type: 'text',
      text: 'A l’intérieur du nuage les gouttelettes d’eau ou les cristaux de glace peuvent se vaporiser et se recondenser en fonction de leurs mouvements dans la masse nuageuse et des évolutions de température et de pression.',
    },
    {
      type: 'keypoints',
      title: 'L’aspect des nuages dépend de trois critères essentiellement :',
      items: [
        'l’éclairage du soleil',
        'la stabilité de l’atmosphère (développement vertical plus ou moins important)',
        'la nature de ses constituants (gouttelettes d’eau ou cristaux de glace) et leur densité.',
      ],
    },
    {
      type: 'text',
      text: 'Cela dépend du type de la masse d’air dans laquelle ils se forment et de l’altitude à laquelle ils se forment.',
    },

    { type: 'heading', level: 3, text: '7.2 - NUAGES ET PRÉCIPITATION' },
    {
      type: 'text',
      text: 'Tous les nuages ne sont pas susceptibles de donner des précipitations. Seuls quelques-uns uns en produisent (les stratus, les nimbostratus, les cumulus et les cumulonimbus essentiellement).',
    },
    {
      type: 'text',
      text: 'Lorsque des courants ascendants apportent de la vapeur d’eau au cœur de ces nuages déjà saturés, les gouttelettes d’eau ou les cristaux de glace se soudent pour donner naissances à des météores (particules en suspension dans l’air) trop grosses pour être maintenue dans le nuage par les courants ascendants. Ces météores tombent alors vers le sol.',
    },
    {
      type: 'text',
      text: 'Pendant qu’il produit de la pluie ou de la neige le nuage ne se vide pas (sauf les cumulonimbus). C’est l’apport continu de vapeur par des courants ascendants qui alimente le nuage. Dans son air déjà saturé elle se condense et augmente la taille de météores.',
    },
    {
      type: 'keypoints',
      title:
        'Selon les nuages et les périodes de l’année, les précipitations peuvent être de différentes natures :',
      items: [
        'bruine (stratus)',
        'pluie ou neige continue (nimbostratus)',
        'averses de pluie ou de neige (gros cumulus et cumulonimbus)',
      ],
    },

    { type: 'heading', level: 3, text: '7.3 - CLASSIFICATION DES NUAGES' },
    { type: 'heading', level: 4, text: '7.3.1 - Les critères de classification' },
    {
      type: 'text',
      text: 'Il existe de nombreux critères pour classer les nuages. Les classifications les plus précises comprennent un nombre impressionnant de critères. Nous nous limiterons aux principes de base qui divisent les nuages en 10 genres se répartissant selon leur aspect général et leur altitude.',
    },
    {
      type: 'keypoints',
      title: 'La troposphère est divisée en trois étages :',
      items: [
        'l’étage inférieur : du sol à 2000 m',
        'l’étage moyen : de 2000 à 6000 m',
        'l’étage supérieur : au-dessus de 6000 m',
      ],
    },
    {
      type: 'text',
      text: 'Les nuages de l’étage supérieur sont constitués de cristaux de glace. Les nuages de l’étage moyen sont en général constitués de gouttelettes d’eau.',
    },
    {
      type: 'text',
      text: 'Toutefois on peut y trouver des cristaux de glace si la température est très basse. Les nuages de l’étage inférieur sont constitués de gouttelettes d’eau. Il existe des nuages à grand développement vertical qui débordent sur les trois étages. Leur constitution peut varier selon la partie du nuage.',
    },
    {
      type: 'text',
      text: 'Le tableau ci-dessous rassemble les 10 genres de nuages et les étages dans lesquels on les trouve :',
    },
    {
      type: 'table',
      caption: 'Les dix genres de nuages et leur étage',
      page: 22,
      headers: ['Étage', 'Genres'],
      rows: [
        ['Etage supérieur', 'Cirrus / Cirrostratus / Cirrocumulus'],
        ['Etage moyen', 'Altostratus / Altocumulus'],
        ['Etage inférieur', 'Stratus / Stratocumulus'],
        ['Sur les trois étages', 'Nimbostratus (coeur dans l’étage moyen) / Cumulus / Cumulonimbus'],
      ],
    },
    {
      type: 'callout',
      tone: 'note',
      title: 'Remarque',
      text: 'Les nuages à grand développement vertical ne débordent pas toujours sur les trois étages. Par exemple, les cumulus prennent toujours naissance dans l’étage inférieur mais ne dépassent pas toujours ce niveau de la troposphère. Toutefois il est fréquent qu’ils se développent dans l’étage moyen et si les conditions d’instabilité sont suffisantes, qu’ils atteignent l’étage supérieur.',
    },

    { type: 'heading', level: 4, text: '7.3.2 - Description des 10 genres de nuages' },
    {
      type: 'text',
      text: 'Pour les reconnaître, voici une description sommaire des différents genres de nuages avec un exemple. Les espèces et les variétés étant nombreuses à l’intérieur des genres, les exemples pourraient être multipliés. Ceux présentés sont assez représentatifs du genre.',
    },
    {
      type: 'callout',
      tone: 'model',
      title: 'Les illustrations de ce paragraphe sont des photographies',
      text: 'Les dix genres sont illustrés dans le cours par des photographies de ciel, non par des schémas. Elles ne relèvent donc pas de la règle de redessin en SVG : elles demandent une source photographique libre, qui n’est pas encore réunie.',
    },

    { type: 'heading', level: 4, text: '7.3.2.1 - Les cumulus (Cu)' },
    {
      type: 'text',
      text: 'Les cumulus sont le plus souvent séparés et ils sont de forme arrondis et bourgeonnants. Leur base est plate et sombre alors que leur partie supérieure, très blanche, fait penser à un chou-fleur. Ils sont bien détachés les uns des autres et peuvent se présenter isolés ou en banc dans la traîne d’une perturbation notamment. Leur base se situe toujours dans l’espace inférieur et leur extension verticale varie de quelques dizaines de mètres jusqu’à plusieurs kilomètres. Ils ont une extension verticale modérée et sont généralement d\'un blanc éclatant.',
    },
    {
      type: 'text',
      text: 'Les cumulus se forment dans des ascendances thermiques et sont souvent synonymes de beau temps, excepté les cumulus congestus quand ils sont épais. Alors ils peuvent annoncer une dégradation orageuse et ils peuvent donner de la pluie ou de la neige sous forme d\'averses.',
    },

    { type: 'heading', level: 4, text: '7.3.2.2 - Les cumulonimbus (Cb)' },
    {
      type: 'text',
      text: 'Stade ultime du développement d’un cumulus ayant débordé jusqu’à l’étage supérieur dans une grande instabilité, le cumulonimbus est un nuage de très grande extension verticale. Ces nuages denses et puissants à extension verticale souvent importante dont la partie supérieure est lisse ou fibreuse s\'étale en forme d\'enclume ou de vaste panache. Leurs régions les plus élevées atteignent très fréquemment l\'étage supérieur. La partie inférieure apparaît très sombre du fait de la grande extension verticale du nuage et sont généralement situées dans l\'étage inférieur (à une altitude moyenne de 1000 mètres). Ce nuage a une épaisseur très importante, atteignant en moyenne 7 km et pouvant aller jusqu\'à 12 km.',
    },
    {
      type: 'text',
      text: 'Des Précipitations sont associées : averses de pluie, neige, grêle. Les orages et tornades sont toujours provoqués par ce genre de nuage.',
    },
    {
      type: 'text',
      text: 'Lorsque le nuage en arrive au stade des précipitations, contrairement aux autres, il se vide. Le système est tellement développé qu’il ne peut pas se régénérer. En phase finale d’un orage, le cumulonimbus se désagrège. Il est parfois possible d’observer la tête d’enclume d’un cumulonimbus désagrégé se déplaçant seule dans l’étage supérieur après avoir été séparée du corps du nuage. Leur traversée est particulièrement dangereuse pour les aéronefs en raison des très violentes turbulences que l’on y rencontre et des météores de grandes dimensions qui existent dans la partie supérieure. Les cumulonimbus peuvent se rencontrer de manière isolée (les après-midi d’été) ou en lignes de grain dans les fronts froids des perturbations hivernales.',
    },

    { type: 'heading', level: 4, text: '7.3.2.3 - Les nimbostratus (Ns)' },
    {
      type: 'text',
      text: 'Les nimbostratus sont des nuages de grandes dimensions verticales et horizontales et représentent une couche nuageuse épaisse grise et sombre d’une épaisseur importante, en moyenne de 3 km, le soleil est complètement masqué.',
    },
    {
      type: 'text',
      text: 'Ces nuages sont constitué de gouttelettes d\'eau, de cristaux de glace ou de flocons de neige. Ils sont situés dans la partie active d\'une perturbation. Des précipitations importantes de pluie ou de neige ou granules de glace sont associées et peuvent durer toute la journée. Ils sont si vastes qu’ils peuvent dissimuler des cumulonimbus. Sous ses nuages les pluies sont souvent abondantes et continues.',
    },

    { type: 'heading', level: 4, text: '7.3.2.4 - Les stratus (St)' },
    {
      type: 'text',
      text: 'Les stratus sont des nuages bas et gris qui se présentent en banc plus ou moins compacts et plus ou moins épais. Leur base peut être très près du sol (30 m) et leur sommet ne dépasse pas 300 m d’altitude. Ils peuvent accompagner une perturbation ou résulter de l’évolution d’un brouillard en conditions anticycloniques. Ils sont dangereux pour l’aéronautique en raison de leur proximité du sol. Ils peuvent donner lieu à de la bruine ou du brouillard ou de la neige en grains. Ils sont constitués de gouttelettes d\'eau (parfois de particules de glace).',
    },

    { type: 'heading', level: 4, text: '7.3.2.5 - Les strato-cumulus (Sc)' },
    {
      type: 'text',
      text: 'Ce sont des nuages blancs étalés en nappe composée d\'éléments en forme de dalles, galets ou rouleaux. Les strato-cumulus ont souvent une épaisseur avoisinant les 600 mètres (de 300 à 1 800). Ils sont constitués de gouttelettes d\'eau (parfois accompagnées de neige roulée ou de flocons de neige).',
    },
    {
      type: 'text',
      text: 'Lorsque la couche de strato-cumulus est mince on observe une couronne ou une irisation. Lorsqu\'ils envahissent le ciel, ils peuvent être liés à une perturbation ou à des entrées maritimes (arrivée d\'air humide en provenance de la mer ou de l\'océan). Ils peuvent donner de faibles précipitations de pluie ou de neige.',
    },

    { type: 'heading', level: 4, text: '7.3.2.6 - Les altostratus (As)' },
    {
      type: 'text',
      text: 'Les altostratus se présentent sous forme d’une couche grisâtre ou bleuâtre dont l’aspect peut être strié ou uniforme qui couvre partiellement ou totalement le ciel, en laissant légèrement voir le soleil. Avec une épaisseur moyenne de 2 km leur sommet se situe généralement dans l\'étage supérieur. Ils sont composés de gouttelettes d\'eau parfois surfondues, de cristaux de glace ou de neige. Ils se trouvent généralement à l\'avant de la partie active d\'une perturbation et donc sont à l\'origine des chutes de pluie, de neige ou de granules de glace. Ils sont souvent suivis de nimbostratus.',
    },

    { type: 'heading', level: 4, text: '7.3.2.7 - Les altocumulus (Ac)' },
    {
      type: 'text',
      text: 'Les altocumulus se présentent en banc ou nappe plus ou moins uniforme et sont blancs ou gris, étalés en nappe et composés d\'éléments réguliers plutôt petits. Ils sont assez similaires aux strato-cumulus mais leur base est plus élevée. Ils donnent assez souvent de faibles précipitations glacées n\'atteignant pas le sol.',
    },

    { type: 'heading', level: 4, text: '7.3.2.8 - Les cirrus (Ci)' },
    {
      type: 'text',
      text: 'Ces nuages situés à l\'étage supérieur (6000 à 12000 m) sont composés de cristaux de glace. Ils se présentent sous forme de filaments blancs, de bandes étroites, ressemblant à des mèches de cheveux.',
    },
    {
      type: 'text',
      text: 'Ces nuages ne sont pas associés à des précipitations mais quand ils envahissent rapidement le ciel ils peuvent être annonciateurs d\'une tempête ou de l\'approche d\'un front chaud.',
    },

    { type: 'heading', level: 4, text: '7.3.2.9 - Les cirrostratus (Cs)' },
    {
      type: 'text',
      text: 'Ce sont des voiles nuageux élevés très étendu constitués de cristaux de glace et donnent lieu généralement à des phénomènes de halo. Transparents et blanchâtres, ils couvrent partiellement le ciel. Ils apparaissent souvent à l\'approche d\'un front chaud à la suite des cirrus et ne sont pas associés aux précipitations.',
    },
    {
      type: 'text',
      text: 'Ils présentent souvent une couleur blanchâtre et au travers de la couche le soleil est souvent entouré d’un halo.',
    },

    { type: 'heading', level: 4, text: '7.3.2.10 - Les cirrocumulus (Cc)' },
    {
      type: 'text',
      text: 'Ils composent une nappe de petits nuages blancs floconneux, d\'aspect ondulé ou moutonné et constitués de cristaux de glace. Ils sont de couleur blanche et restent dans le bas de l’étage supérieur (vers 6000 - 7000 m).',
    },
    {
      type: 'text',
      text: 'Ces nuages ne sont pas associés à des précipitations, ils précèdent en général l\'approche d\'un front, ce qui est annonciateur d\'un changement de temps.',
    },

    { type: 'heading', level: 4, text: 'Nuages particuliers associés aux reliefs' },
    { type: 'heading', level: 4, text: 'Cirocumulus lenticulaire :' },
    {
      type: 'text',
      text: 'Ils prennent la forme d\'un plissement géologique en strate, lorsque plusieurs couches d\'air d\'humidité différentes se superposent et font penser à une soucoupe volante mais ils restent immobiles au sommet. Ils peuvent atteindre plusieurs milliers de mètres d\'épaisseur et 100 kilomètres de diamètre.',
    },
    { type: 'heading', level: 4, text: 'Les altocumulus lenticulaires :' },
    {
      type: 'text',
      text: 'Ils sont formés de grandes nappes grises ou blanches prenant de belles couleurs au lever ou au coucher du soleil.',
    },
    {
      type: 'text',
      text: 'Ces nuages sont de forme étirée ou stratifiée et donnent l\'impression d\'un empilement d\'assiettes ou de "soucoupes volantes". Ils ont une épaisseur comprise entre 500 et 1 500 mètres. Ils indiquent la présence de vents forts en altitude',
    },

    { type: 'heading', level: 4, text: 'Aide à l’identification des nuages' },
    {
      type: 'text',
      text: 'Il n’est pas toujours aisé de reconnaître les différents genres de nuages simplement en les observant. La distinction entre les alto et les cirro est loin d’être toujours évidente. Les sondages verticaux effectués par lâchés de ballon sonde permettent d’établir une cartographie des nuages rencontrés dans les systèmes nuageux denses des perturbations. Ces indications sont précieuses pour les pilotes qui peuvent alors prendre les précautions nécessaires pour éviter les orages ou les risques de givrage dans les couches où il est impossible de distinguer les genres de nuages présents.',
    },
    {
      type: 'text',
      text: 'Les cartes météorologiques fournies aux équipages pour la préparation des vols les font figurer. Il existe des codes pour les représenter selon les genres, les espèces et les variétés.',
    },
    {
      type: 'text',
      text: 'Comme nous allons le voir dans le paragraphe suivant, certains genres de nuages sont souvent associés au passage des perturbations et sont caractéristiques du front chaud, du corps de la perturbation, du front froid ou de la traîne.',
    },
    {
      type: 'text',
      text: 'La couverture nuageuse s’évalue en octats (8ème de ciel). Pour une couverture de 1 à 2 octats on qualifie la nébulosité de « FEW » (rares en français), pour 3 à 4 octats on la dénomme « SCATTERED » (épars en français) ; pour 5 à 7 octats le ciel est dit « BROKEN » (morcellé en français, présence de “trous” de ciel bleu); pour une couverture de 8 octats, le ciel est qualifié de « OVERCAST » (couvert).',
    },
  ],
}

export const section8: CourseSection = {
  id: 'perturbations',
  number: '8',
  title: 'Les perturbations et leurs fronts',
  pages: [26, 30],
  blocks: [
    {
      type: 'heading',
      level: 3,
      text: '8.1 - FORMATION DES PERTURBATIONS ET DIFFERENTS TYPES DE FRONTS',
    },
    {
      type: 'text',
      text: 'D’une manière simple mais relativement correcte nous pouvons considérer que l’atmosphère contient deux types de masses d’air très différentes du point de vue de la température et de la densité : les masses d’air polaires (sec et très dense) et les masses d’air tropicales (humides et peu denses). La zone de contact entre les deux types se situe aux latitudes moyennes (dans nos régions pour l’hémisphère nord).',
    },
    {
      type: 'text',
      text: 'Ces masses d’air sont de natures trop différentes pour se mélanger : elles glissent simplement les unes sur les autres. Les mouvements de convection à l’échelle de l’atmosphère font qu’aux régions de contact, il y a des frottements entre elles. Il en résulte des oscillations plus ou moins importantes selon les saisons et les jours. Il arrive qu’une ondulation engendre l’avancée d’une masse d’air tropical au sein de l’air polaire. Il existe alors une dépression au sein de l’air tropical entouré d’air polaire. Poussée par les vents dominants (d’Ouest chez nous), la perturbation ainsi crée va se déplacer.',
    },
    {
      type: 'text',
      text: 'La masse d’air tropical ainsi introduite dans l’air polaire est délimitée par deux zones de contact entre l’air tropical et l’air polaire. Ces zones sont appelées des fronts. Celui en avant de la perturbation est appelé front chaud et celui en arrière est appelé front froid. Il arrive que les deux fronts se rejoignent. On dit alors qu’il y a une occlusion.',
    },

    { type: 'heading', level: 4, text: '8.1.1 - Le front chaud' },
    {
      type: 'definition',
      term: 'Le front chaud',
      text: 'Le front chaud est la surface de séparation entre une masse d’air froid et une masse d’air chaud le repoussant.',
    },
    {
      type: 'text',
      text: 'Il y a donc un front chaud à l’arrivée d’une perturbation : l’air tropical repoussant l’air polaire le précédant. L’air chaud étant moins dense que l’air froid qu’il repousse, il a tendance à monter dessus. Le front est donc incliné vers l’avant dans le sens de déplacement de la perturbation.',
    },
    {
      type: 'text',
      text: 'Le haut du front peut se trouver à plusieurs centaines de kilomètres en avant de sa trace au sol (500 à 600 km quelques fois plus).',
    },
    {
      type: 'text',
      text: 'Sur les cartes météo il est représenté par un trait sur lequel sont dessinés des demi-disques dans le sens de progression du front. Si la carte est en couleur, le trait et les demi-disques sont rouges.',
    },
    { type: 'schema', schema: 'symbole-front-chaud', page: 27 },
    {
      type: 'text',
      text: 'L’arrivée du front chaud est signalée par l’apparition en altitude d’un voile de cirrus précédant le corps de la perturbation de plusieurs heures. Au fur et à mesure que le front avance, on voit apparaître des cirrostratus puis des altocumulus. Le ciel se bouche et la convection est stoppée.',
    },
    {
      type: 'text',
      text: 'Les altostratus et les nimbostratus encombrent alors le ciel amenant les précipitations si le front est actif. Des stratocumulus peuvent compléter les nuages du corps par le bas. Lorsque la trace au sol passe la partie la plus active est déjà passée et la pluie se calme.',
    },
    { type: 'text', text: 'Le schéma ci-dessous résume l’arrivée d’un front chaud :' },
    {
      type: 'schema',
      schema: 'front-chaud-coupe',
      page: 27,
      caption: 'Le haut du front précède sa trace au sol de 600 km.',
    },
    {
      type: 'text',
      text: 'Derrière le front chaud, dans l’air tropical, le temps est relativement calme avec une nébulosité constituée essentiellement de nuages bas (stratus et stratocumulus) et de cumulus donnant parfois des averses locales.',
    },
    {
      type: 'text',
      text: 'Le tableau ci-dessous résume l’évolution des paramètres météo au passage d’un front chaud :',
    },
    {
      type: 'table',
      caption: 'Front chaud — évolution des paramètres météo',
      page: 27,
      headers: ['Paramètre', 'Avant', 'Pendant', 'Après'],
      rows: [
        ['Vent', 'Sud ou sud-ouest forcissant', 'Sud-ouest stable ou forcissant', 'Direction changeant un peu. Reste fort'],
        ['Température', 'En augmentation', 'En augmentation', 'Stationnaire'],
        ['Pression', 'Baisse rapide', 'Stationnaire', 'Baisse possible'],
        ['Nébulosité', 'Ci, Cs, As, Ns', 'As, Ns, Sc', 'St, Sc'],
        ['Précipitations', 'Pluie continue', 'Pluie', 'Bruine, averses possibles'],
        ['Visibilité', 'Mauvaise', 'En amélioration', 'Assez mauvaise'],
      ],
    },

    { type: 'heading', level: 4, text: '8.1.2 - Le front froid' },
    {
      type: 'definition',
      term: 'Le front froid',
      text: 'Le front froid est la surface de séparation entre une masse d’air chaud et une masse d’air froid le repoussant.',
    },
    {
      type: 'text',
      text: 'Il y a donc un front froid à la fin d’une perturbation : l’air polaire repoussant l’air tropical le précédant. L’air chaud étant moins dense que l’air froid qui le pousse, il a tendance à monter dessus.',
    },
    {
      type: 'text',
      text: 'Le front est donc incliné vers l’arrière dans le sens de déplacement de la perturbation : l’air froid se glisse sous l’air chaud en le repoussant. Le front froid avance rapidement et son étalement horizontal est donc assez limité.',
    },
    {
      type: 'text',
      text: 'Sur les cartes météo il est représenté par un trait sur lequel sont dessinés des triangles pointant dans le sens de progression du front. Si la carte est en couleur, le trait et les triangles sont bleus.',
    },
    { type: 'schema', schema: 'symbole-front-froid', page: 28 },
    {
      type: 'text',
      text: 'L’arrivée du front froid est marquée par une reprise de la convection lorsque l’air froid soulève l’air chaud. Au fur et à mesure que le front avance, on voit se développer des nuages d’étage moyen et supérieur cirrostratus, altocumulus, altostratus et surtout des cumulus congestus ou des cumulonimbus si le front est très actif. De nouvelles précipitations peuvent apparaître avec parfois des orages.',
    },
    {
      type: 'text',
      text: 'Des stratocumulus et des stratus complètent les nuages dans l’étage inférieur. Lorsque la trace au sol est passée, nous sommes dans la traîne de la perturbation. La nébulosité est essentiellement constituée de cumulus résultant de la reprise de la convection sur le sol humide. Les précipitations peuvent alors cesser ou se présenter sous formes d’averses locales.',
    },
    { type: 'text', text: 'Le schéma ci-dessous résume l’arrivée d’un front froid :' },
    {
      type: 'schema',
      schema: 'front-froid-coupe',
      page: 28,
      caption: 'Le front froid avance vite : son étalement horizontal se limite à 300 km.',
    },
    { type: 'text', text: 'Ci-dessous, l’évolution des paramètres météo au passage d’un front froid :' },
    {
      type: 'callout',
      tone: 'note',
      title: 'Ce tableau était invisible dans le document source',
      text: 'Dans le PDF de l’auteur, ce tableau est bien présent page 28, mais la coupe du front froid est dessinée par-dessus et le masque entièrement. Il a été récupéré depuis l’image d’origine du document et est restitué ici tel quel.',
    },
    {
      type: 'table',
      caption: 'Front froid — évolution des paramètres météo',
      page: 28,
      headers: ['Paramètre', 'Pendant', 'Après'],
      rows: [
        ['Vent', 'Passe Ouest ou Nord-Ouest en rafales', 'Passe au Nord en faiblissant'],
        ['Température', 'Baisse rapide', 'Stationnaire ou baisse'],
        ['Pression', 'Augmente rapidement', 'Augmente lentement'],
        ['Nébulosité', 'St, Cu, Sc, Cb', 'Cu'],
        ['Précipitations', 'Averses et orages', 'Averses'],
        ['Visibilité', 'Assez bonne', 'Bonne'],
      ],
    },
    {
      type: 'awaiting',
      what: 'Évolution des fronts et nuages associés en air stable puis en air instable, et les secteurs d’une perturbation vue de dessus (page 29) — redessins en SVG à faire.',
    },
    {
      type: 'awaiting',
      what: 'Entre les fronts, le secteur chaud (page 30) — redessin en SVG à faire.',
    },

    { type: 'heading', level: 3, text: '8.2 - L’OCCLUSION' },
    {
      type: 'definition',
      term: 'L’occlusion',
      text: 'L’occlusion est une zone où le front froid rejoint le front chaud.',
    },
    {
      type: 'text',
      text: 'Elle marque le début de la désagrégation de la perturbation car la dépression se comble alors. L’occlusion donne un temps perturbé à plus longue échéance qu’un front chaud ou un front froid.',
    },
    {
      type: 'text',
      text: 'Il existe des occlusions à caractère froid ou à caractère chaud (le front froid passe sous le front chaud et inversement',
    },
    { type: 'text', text: 'Elles se représentent comme indiqué ci-dessous sur les cartes météo :' },
    {
      type: 'schema',
      schema: 'symboles-occlusion',
      page: 30,
      caption:
        'En noir, puis à caractère de front froid, puis à caractère de front chaud.',
    },
    {
      type: 'awaiting',
      what: 'Occlusion à caractère de front froid et à caractère de front chaud, et la coupe d’une occlusion sur 1 000 km (page 30) — redessins en SVG à faire.',
    },
  ],
}
