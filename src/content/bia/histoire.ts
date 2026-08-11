import type { Course, CourseSection } from '@/content/types'

/**
 * CHAPITRE 5 — HISTOIRE ET CULTURE DE L'AÉRONAUTIQUE ET DU SPATIAL.
 *
 * ⚠️ CE CHAPITRE N'A PAS DE FICHE DE L'AUTEUR DU PROJET.
 *
 * Les sept autres chapitres reprennent mot pour mot les cours d'André
 * PARIS, sur lesquels l'auteur du projet a la main. Celui-ci n'existait pas :
 * il est écrit ici, d'après des sources publiques, comme le prévoit
 * docs/ETAT-DU-PROJET.md §5.
 *
 * D'OÙ VIENT QUOI, ET CE QUI EST À MOI
 * — Le PLAN est celui du programme officiel du BIA : quatre parties, de
 *   l'aérostat à la Station spatiale internationale. Il est repris du
 *   manuel officiel publié par Eduscol (Ministère de l'Éducation
 *   nationale), rédigé sous la direction du CIRAS de Toulouse.
 * — Les FAITS et les DATES viennent de ce même manuel et du chapitre 5 du
 *   CIRAS. Un fait n'appartient à personne : une date de premier vol se
 *   vérifie, elle ne se possède pas.
 * — Le TEXTE est écrit pour ce site. Rien n'est recopié de ces documents,
 *   contrairement aux cours d'André PARIS où la reprise littérale est
 *   voulue et autorisée.
 *
 * STATUT : `sourced`. Le chapitre est complet et sourcé, mais il n'a PAS été
 * relu par un instructeur — et il doit le dire à l'élève tant que ce n'est
 * pas fait. C'est la réserve posée par docs/ETAT-DU-PROJET.md §5.
 */

const AVERTISSEMENT = {
  type: 'callout',
  tone: 'warn',
  title: 'Ce chapitre n’a pas été relu par un instructeur',
  text:
    'Les sept autres chapitres reprennent les cours d’André PARIS. Celui-ci n’existait pas : il a été écrit pour ce site à partir du manuel officiel du BIA et du chapitre 5 du CIRAS, dont il suit le plan et les dates. Il reste à faire relire par un instructeur avant d’être présenté comme un cours validé.',
} as const

const partie1: CourseSection = {
  id: 'les-debuts',
  number: '1',
  title: 'Les débuts',
  blocks: [
    AVERTISSEMENT,
    {
      type: 'lead',
      text: 'Voler n’a pas commencé par une machine mais par une envie, et l’envie a précédé la compréhension de plusieurs siècles. Entre le moment où l’on a voulu voler et celui où l’on a su pourquoi une aile porte, il s’est écoulé plus de temps qu’entre le premier vol des frères Wright et le premier pas sur la Lune.',
    },

    { type: 'heading', level: 3, text: 'I. Du mythe à la réalité' },
    {
      type: 'text',
      text: 'Toutes les cultures ont raconté le vol avant de l’obtenir. Le récit d’Icare, qui s’approche trop du soleil et voit fondre la cire de ses ailes, dit déjà l’essentiel : le vol est un équilibre, et il se paie. Il faudra attendre la Renaissance pour que l’envie devienne observation.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: 'Années 1500',
          fait: 'Léonard de Vinci observe les oiseaux.',
          text: 'Il dessine des machines volantes — vis aérienne, ornithoptère, parachute — et laisse les premières études méthodiques du vol des oiseaux. Aucune de ses machines ne vole : la puissance musculaire humaine ne suffit pas, et il n’existe alors aucun moteur.',
        },
        {
          date: 'Années 1600',
          fait: 'Le doute des savants.',
          text: 'Descartes tient le vol humain pour hors d’atteinte. Le siècle cherche encore à imiter l’oiseau battant des ailes, voie qui restera stérile pendant deux cents ans.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'II. Les aérostats' },
    {
      type: 'text',
      text: 'La première réussite ne vient pas de l’aile mais du ballon. Deux principes vont s’opposer et coexister pendant plus d’un siècle : le « plus léger que l’air », qui flotte par la poussée d’Archimède, et le « plus lourd que l’air », qui doit créer sa portance en se déplaçant. C’est le premier qui décolle d’abord.',
    },
    { type: 'heading', level: 4, text: 'A. Les ballons' },
    {
      type: 'timeline',
      entries: [
        {
          date: '4 juin 1783',
          fait: 'Les frères Montgolfier font voler un ballon à air chaud.',
          text: 'L’expérience est répétée le 19 septembre à Versailles, devant le roi. Les premiers passagers sont un mouton, un coq et un canard : on ignore encore si l’altitude est respirable.',
        },
        {
          date: '21 novembre 1783',
          fait: 'Premier vol humain libre.',
          text: 'Pilâtre de Rozier et le marquis d’Arlandes s’élèvent au-dessus de Paris. C’est la première fois que des hommes quittent le sol et se posent ailleurs.',
        },
        {
          date: '1785',
          fait: 'La Manche est franchie.',
          text: 'Jean-Pierre Blanchard et son passager John Jeffries relient l’Angleterre à la France en ballon.',
        },
        {
          date: '1794',
          fait: 'Le ballon devient militaire.',
          text: 'Il sert à l’observation du champ de bataille — le premier usage opérationnel de l’aéronautique est le renseignement, et ce sera durablement le cas.',
        },
        {
          date: '1797',
          fait: 'Premier saut en parachute.',
          text: 'André-Jacques Garnerin saute depuis un ballon. La sécurité naît en même temps que l’activité.',
        },
        {
          date: '1870',
          fait: 'Le courrier par ballon.',
          text: 'Pendant le siège de Paris, les ballons emportent le courrier hors de la ville encerclée. Première application postale du vol, quarante ans avant l’Aéropostale.',
        },
      ],
    },
    { type: 'heading', level: 4, text: 'B. Les ballons dirigeables' },
    {
      type: 'text',
      text: 'Un ballon subit le vent : il flotte mais ne va pas où l’on veut. Le dirigeable ajoute au ballon un moteur et un gouvernail, donc une trajectoire choisie.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1898',
          fait: 'Santos-Dumont motorise le ballon.',
          text: 'Il adapte un moteur à essence sur un dirigeable, rendant le vol enfin dirigeable au sens propre.',
        },
        {
          date: '1901',
          fait: 'Le tour de la Tour Eiffel.',
          text: 'Santos-Dumont contourne la Tour Eiffel avec son dirigeable n° 6 et remporte le prix Deutsch de la Meurthe. L’exploit est public, et il rend l’aéronautique populaire.',
        },
        {
          date: '1906',
          fait: 'Les grands dirigeables allemands.',
          text: 'L’Allemagne développe des dirigeables rigides de grande taille, qui seront les premiers appareils de transport aérien de passagers.',
        },
        {
          date: '1910',
          fait: 'La Manche en dirigeable.',
          text: 'Première traversée du détroit par un plus léger que l’air motorisé.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'III. Les pionniers de l’aviation (1809-1907)' },
    {
      type: 'text',
      text: 'Le plus lourd que l’air demande de comprendre trois choses en même temps : une surface qui porte, une puissance qui tracte, et une commande qui garde l’équilibre. Les pionniers en trouvent une, parfois deux. Les frères Wright sont les premiers à tenir les trois.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1809',
          fait: 'Cayley pose le problème correctement.',
          text: 'Le baron anglais George Cayley publie un ouvrage qui sépare pour la première fois la sustentation de la propulsion. C’est l’acte de naissance de l’aérodynamique : cesser d’imiter le battement d’aile, et traiter l’aile comme une surface fixe qui porte.',
        },
        {
          date: 'Décembre 1856',
          fait: 'Jean-Marie Le Bris et l’Albatros.',
          text: 'Le marin breton fait décoller un planeur tracté, inspiré de l’albatros qu’il avait observé en mer. Premier signe qu’un plus lourd que l’air peut s’élever.',
        },
        {
          date: '1890',
          fait: 'Clément Ader et l’Éole.',
          text: 'L’Éole quitte le sol sur une cinquantaine de mètres. Le décollage par ses propres moyens est réel, mais l’appareil n’est pas pilotable : il ne s’agit pas encore d’un vol contrôlé.',
        },
        {
          date: '1890-1896',
          fait: 'Otto Lilienthal, plus de 2 500 vols.',
          text: 'L’Allemand vole en planeur et, surtout, il mesure. Ses relevés de portance nourriront directement le travail des Wright. Il meurt en 1896 d’une chute en vol.',
        },
        {
          date: '1897',
          fait: 'L’Avion III d’Ader.',
          text: 'Évolution de l’Éole à deux moteurs. C’est à Ader que la langue française doit le mot « avion ».',
        },
        {
          date: '1898-1903',
          fait: 'Octave Chanute, passeur entre deux mondes.',
          text: 'Ingénieur américain d’origine française, il fait circuler les résultats européens vers les États-Unis et conseille les Wright. Le premier vol doit autant à cette circulation d’informations qu’aux essais eux-mêmes.',
        },
        {
          date: '17 décembre 1903',
          fait: 'Le premier vol contrôlé, Wilbur et Orville Wright.',
          text: 'Le Flyer décolle par ses propres moyens et, surtout, il est piloté sur ses trois axes grâce au gauchissement de l’aile. C’est ce contrôle, plus que le décollage, qui fait la date.',
        },
        {
          date: '1905',
          fait: 'Le vol devient une durée.',
          text: 'Le Flyer III tient 38 minutes sur 39 km à environ 61,5 km/h. L’avion cesse d’être une expérience pour devenir une machine.',
        },
        {
          date: '1906',
          fait: 'Le « manche à balai ».',
          text: 'Le Français Robert Esnault-Pelterie invente la commande de vol qui réunit tangage et roulis dans une seule main. Elle est toujours dans tous les cockpits.',
        },
        {
          date: '1907',
          fait: 'Paul Cornu décolle à la verticale.',
          text: 'Premier décollage d’un appareil à voilure tournante emportant un homme. L’hélicoptère mettra encore trente ans à devenir utilisable.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'IV. Les premiers records (1908-1913)' },
    {
      type: 'text',
      text: 'En cinq ans, l’avion passe du prototype au moyen de transport et à l’objet de compétition. Chaque record est aussi une démonstration publique : c’est ce qui attire l’argent et les ingénieurs.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1908',
          fait: 'Le premier kilomètre en circuit fermé.',
          text: 'Henri Farman, sur un appareil de Gabriel Voisin, boucle un kilomètre et revient à son point de départ. Voler droit ne suffisait plus : il fallait savoir revenir.',
        },
        {
          date: '25 juillet 1909',
          fait: 'Blériot traverse la Manche.',
          text: 'Louis Blériot relie Calais à Douvres sur son Blériot XI. Le vol dure environ 37 minutes et rend une évidence publique : la mer n’est plus une frontière, et l’Angleterre n’est plus une île.',
        },
        {
          date: '1910',
          fait: 'Le premier hydravion.',
          text: 'Henri Fabre fait décoller de l’eau son appareil, « Le Canard ». L’eau devient une piste, ce qui compte à une époque où les aérodromes sont rares.',
        },
        {
          date: '1910',
          fait: 'Naissance de l’aviation militaire française.',
          text: 'Le général Roques regroupe les services de l’aérostation et de l’aviation. L’arme aérienne devient une institution.',
        },
        {
          date: '1913',
          fait: 'Garros franchit la Méditerranée.',
          text: 'Roland Garros traverse sur un Morane-Saulnier type H, sans possibilité de se poser en cas de panne.',
        },
        {
          date: '1913',
          fait: 'Pégoud et le vol sur le dos.',
          text: 'Adolphe Pégoud exécute les premières figures de voltige et montre qu’un avion peut être rattrapé dans des positions inhabituelles. La voltige naît comme technique de survie avant d’être un spectacle.',
        },
      ],
    },
  ],
}

const partie2: CourseSection = {
  id: 'd-une-guerre-a-l-autre',
  number: '2',
  title: 'D’une guerre à l’autre',
  blocks: [
    {
      type: 'lead',
      text: 'En 1914, l’avion est un objet de curiosité que l’on emploie pour observer. En 1945, c’est une industrie, une arme décisive et un moyen de transport intercontinental. Les deux guerres ont accéléré la technique autant qu’elles l’ont brutalisée, et l’entre-deux-guerres a transformé cette technique en métier.',
    },

    { type: 'heading', level: 3, text: 'I. La Première Guerre mondiale (1914-1918)' },
    { type: 'heading', level: 4, text: 'A. Les missions aériennes' },
    {
      type: 'text',
      text: 'La guerre spécialise les appareils. En quatre ans, on passe d’un avion unique employé à tout à trois familles distinctes, dont la logique n’a pas changé depuis :',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'La reconnaissance — Farman et Caudron. La première mission de l’avion est de voir ce qu’il y a derrière la ligne de front, et de régler le tir de l’artillerie.',
        'La chasse — Morane, Nieuport et SPAD. Elle naît d’un besoin second : empêcher l’adversaire de voir.',
        'Le bombardement — Voisin et Breguet. Porter une charge loin, ce qui impose des appareils plus gros et des moteurs plus puissants.',
      ],
    },
    { type: 'heading', level: 4, text: 'B. Les principaux événements' },
    {
      type: 'timeline',
      entries: [
        {
          date: '1915',
          fait: 'Tirer à travers l’hélice.',
          text: 'Roland Garros fixe des déflecteurs d’acier sur les pales pour tirer dans l’axe. La solution est brutale mais elle marche ; les Allemands répliqueront avec un vrai synchroniseur, qui interrompt le tir au passage de la pale.',
        },
        {
          date: 'Février-décembre 1916',
          fait: 'Verdun.',
          text: 'La bataille dure dix mois. Au-dessus, la maîtrise du ciel devient une condition de la bataille au sol : on se bat pour empêcher l’autre d’observer.',
        },
        {
          date: '1916',
          fait: 'Marcel Bloch conçoit l’hélice Éclair.',
          text: 'Marcel Bloch, qui prendra plus tard le nom de Marcel Dassault, entre dans l’aéronautique par une hélice qui équipera de nombreux appareils français.',
        },
        {
          date: '1917',
          fait: 'Décollage depuis un navire.',
          text: 'Un chasseur britannique décolle du pont du HMS Furious. L’aéronavale commence là.',
        },
        {
          date: '1917',
          fait: 'Les Cigognes.',
          text: 'L’armée française regroupe ses meilleurs pilotes dans une même unité — le groupe de combat 12, dit « des Cigognes ».',
        },
      ],
    },
    { type: 'heading', level: 4, text: 'C. Les As' },
    {
      type: 'text',
      text: 'Est appelé « as » le pilote crédité d’au moins cinq victoires aériennes homologuées. Georges Guynemer et René Fonck côté français, Manfred von Richthofen — le « Baron rouge » — côté allemand, deviennent des figures publiques. La notion sert autant à la propagande qu’à la reconnaissance : elle donne des visages à une guerre qui n’en avait plus.',
    },
    { type: 'heading', level: 4, text: 'D. Le bilan' },
    {
      type: 'text',
      text: 'L’aviation sort de la guerre transformée : moteurs fiabilisés, structures éprouvées, industrie capable de produire en série, et des milliers de pilotes formés. Ce sont eux, et les appareils devenus disponibles, qui vont faire l’aviation civile des années 1920.',
    },

    { type: 'heading', level: 3, text: 'II. L’Entre-deux-guerres (1919-1939)' },
    { type: 'heading', level: 4, text: 'A. Les grands raids' },
    {
      type: 'text',
      text: 'La question n’est plus de voler mais d’aller loin, avec ce que cela suppose de navigation, d’autonomie et de fiabilité. Chaque raid recule une limite.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1919',
          fait: 'La première traversée de l’Atlantique nord sans escale.',
          text: 'Alcock et Brown relient Terre-Neuve à l’Irlande sur un Vickers Vimy.',
        },
        {
          date: '1923',
          fait: 'La traversée des États-Unis sans escale.',
          text: 'Kelly et Macready relient les deux côtes américaines d’une traite.',
        },
        {
          date: '1923',
          fait: 'Le premier ravitaillement en vol réussi.',
          text: 'Il lève la contrainte de l’autonomie : la distance franchissable cesse d’être fixée par la taille des réservoirs.',
        },
        {
          date: '1927',
          fait: 'Lindbergh, New York-Paris en solitaire.',
          text: 'Charles Lindbergh relie New York au Bourget seul et sans escale sur le Spirit of St. Louis, en un peu plus de 33 heures.',
        },
        {
          date: '1930',
          fait: 'Costes et Bellonte dans le sens difficile.',
          text: 'Ils franchissent l’Atlantique nord d’est en ouest — contre les vents dominants, donc plus long et plus consommateur.',
        },
        {
          date: '1938',
          fait: 'Le tour du monde en moins de quatre jours.',
          text: 'Howard Hughes boucle le tour du monde en 3 jours et 19 heures.',
        },
      ],
    },
    { type: 'heading', level: 4, text: 'B. L’Aéropostale' },
    {
      type: 'text',
      text: 'L’Aéropostale est le moment où le vol devient un service régulier plutôt qu’un exploit. Il s’agit d’acheminer le courrier de Toulouse à l’Amérique du Sud, par étapes, quel que soit le temps. Cela impose des horaires, des relais, des mécaniciens, et une acceptation du risque que les pilotes paieront cher.',
    },
    {
      type: 'text',
      text: 'Jean Mermoz, Henri Guillaumet et Antoine de Saint-Exupéry en sont les figures. Saint-Exupéry en tirera une œuvre littéraire — « Courrier Sud », « Vol de nuit », « Terre des hommes » — qui a durablement formé l’image que la France se fait de ses pilotes.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1933',
          fait: 'Naissance d’Air France.',
          text: 'L’Aéropostale est intégrée à la nouvelle compagnie, née du regroupement de cinq compagnies existantes.',
        },
        {
          date: '1936',
          fait: 'Disparition de Mermoz.',
          text: 'Il disparaît en Atlantique sud aux commandes de la Croix du Sud.',
        },
      ],
    },
    { type: 'heading', level: 4, text: 'C. Les débuts de l’aviation commerciale' },
    {
      type: 'text',
      text: 'Transporter des passagers demande autre chose que transporter du courrier : du confort, de la régularité, et une sécurité démontrable. Les appareils changent en conséquence — structure métallique, cabine fermée, puis pressurisée.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1938',
          fait: 'La première cabine pressurisée.',
          text: 'Le Boeing 307 Stratoliner permet de voler plus haut, donc au-dessus d’une partie du mauvais temps, sans que les passagers en souffrent. C’est la condition du transport aérien moderne.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'III. La Seconde Guerre mondiale (1939-1945)' },
    { type: 'heading', level: 4, text: 'A. L’avant-guerre' },
    {
      type: 'text',
      text: 'La guerre civile d’Espagne sert de banc d’essai. En 1937, la légion Condor allemande y expérimente le bombardement de zones habitées ; Guernica en restera le nom. L’aviation démontre là une capacité qui déterminera la doctrine des années suivantes.',
    },
    { type: 'heading', level: 4, text: 'B. Les principaux événements' },
    {
      type: 'timeline',
      entries: [
        {
          date: '1940',
          fait: 'La Blitzkrieg, puis la bataille d’Angleterre.',
          text: 'L’Allemagne envahit la France, la Belgique et les Pays-Bas en s’appuyant sur la coordination entre l’aviation et les blindés. À l’été, la Royal Air Force lui refuse le ciel britannique — c’est le premier échec majeur allemand, et il est aérien. Le radar y joue un rôle décisif.',
        },
        {
          date: '1942',
          fait: 'Les grandes offensives de bombardement.',
          text: 'La guerre aérienne prend une échelle industrielle, de jour comme de nuit, sur les capacités de production adverses.',
        },
        {
          date: '6 juin 1944',
          fait: 'Le débarquement de Normandie.',
          text: 'L’opération repose sur une supériorité aérienne acquise au préalable, et sur l’emploi massif de planeurs et de parachutistes.',
        },
        {
          date: '31 juillet 1944',
          fait: 'Disparition de Saint-Exupéry.',
          text: 'Il disparaît en mission de reconnaissance au large de Marseille, aux commandes d’un Lightning P-38.',
        },
        {
          date: '1944',
          fait: 'Création de l’OACI.',
          text: 'La convention de Chicago fonde l’Organisation de l’aviation civile internationale, qui donnera à l’aviation civile ses règles communes. Toute la réglementation étudiée au chapitre 4 en découle.',
        },
        {
          date: '6 août 1945',
          fait: 'Hiroshima.',
          text: 'Un bombardier B-29 largue la première arme nucléaire employée en opération. L’aviation atteint là une capacité de destruction sans commune mesure avec tout ce qui précède.',
        },
      ],
    },
    { type: 'heading', level: 4, text: 'C. Les As et D. Le bilan' },
    {
      type: 'text',
      text: 'Côté français, René Mouchotte, mort en 1943 à la tête d’une escadrille de la RAF, et les pilotes du groupe de chasse Normandie-Niemen engagés sur le front de l’Est, restent les figures les plus citées.',
    },
    {
      type: 'text',
      text: 'Le bilan technique est considérable : le radar, la pressurisation, le turboréacteur, les premières fusées à longue portée et le siège éjectable sont tous opérationnels ou à portée en 1945. Ces techniques sortiront de la guerre pour équiper l’aviation civile, et pour ouvrir la conquête de l’espace.',
    },
  ],
}

const partie3: CourseSection = {
  id: 'de-1945-a-nos-jours',
  number: '3',
  title: 'De 1945 à nos jours',
  blocks: [
    {
      type: 'lead',
      text: 'L’après-guerre est le moment où l’aviation change de moteur. L’hélice cède au réacteur, ce qui déplace d’un coup les altitudes, les vitesses et les distances — et rend le transport aérien accessible.',
    },

    { type: 'heading', level: 3, text: 'I. Le « mur » du son' },
    {
      type: 'text',
      text: 'À l’approche de la vitesse du son, l’air cesse de s’écouler comme un fluide incompressible : des ondes de choc apparaissent, la traînée grimpe et les commandes deviennent inefficaces. On a longtemps cru à une barrière physique. C’était un problème de forme et de commandes, pas une limite de la nature.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '14 octobre 1947',
          fait: 'Chuck Yeager passe Mach 1.',
          text: 'Le Bell X-1, largué depuis un bombardier, franchit la vitesse du son en vol horizontal.',
        },
        {
          date: '1953',
          fait: 'Le premier avion français supersonique.',
          text: 'Développement des appareils qui mèneront à la génération Mystère puis Mirage.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'II. L’aviation militaire' },
    {
      type: 'timeline',
      entries: [
        {
          date: '1949',
          fait: 'Le premier chasseur à réaction français de série.',
          text: 'La France reconstitue une industrie aéronautique de premier plan en une dizaine d’années.',
        },
        {
          date: '1949',
          fait: 'René Leduc et le statoréacteur.',
          text: 'L’ingénieur français fait voler le premier avion à statoréacteur — un moteur sans pièce tournante, qui ne fonctionne qu’à grande vitesse.',
        },
        {
          date: '1978',
          fait: 'Premier vol du Mirage 2000.',
          text: 'Dassault installe durablement l’aile delta dans l’aviation de combat française.',
        },
        {
          date: '1981',
          fait: 'Le premier avion furtif.',
          text: 'Le Lockheed F-117 vole. La discrétion radar devient un paramètre de conception à part entière.',
        },
        {
          date: '1986',
          fait: 'Premier vol du Rafale.',
          text: 'Appareil polyvalent, conçu pour remplacer plusieurs types spécialisés à lui seul.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'III. L’aviation commerciale' },
    {
      type: 'timeline',
      entries: [
        {
          date: '1946',
          fait: 'Les premiers vols transatlantiques réguliers.',
          text: 'Le Lockheed Constellation, pressurisé et à long rayon d’action, rend la liaison commercialement viable.',
        },
        {
          date: '1949',
          fait: 'Le de Havilland Comet.',
          text: 'Premier avion de ligne à réaction. Une série d’accidents en vol révélera la fatigue des structures autour des hublots : l’enquête qui suit fonde les méthodes modernes de certification en fatigue. C’est un échec qui a fait progresser la sécurité de toute l’aviation.',
        },
        {
          date: '1955',
          fait: 'La Caravelle.',
          text: 'La France place ses réacteurs à l’arrière du fuselage, une solution qui allège l’aile et réduit le bruit en cabine.',
        },
        {
          date: '1957',
          fait: 'Le Boeing 707.',
          text: 'Il installe le transport à réaction dans la durée et impose l’architecture — réacteurs sous voilure en nacelles — encore dominante aujourd’hui.',
        },
        {
          date: '1969',
          fait: 'Deux premiers vols la même année.',
          text: 'Concorde vole en mars, le Boeing 747 en février. Deux paris opposés : la vitesse d’un côté, la capacité de l’autre. C’est le second qui a fait le transport aérien de masse.',
        },
        {
          date: '1970',
          fait: 'Naissance d’Airbus.',
          text: 'Les Européens s’associent pour opposer un constructeur commun à la concurrence américaine.',
        },
        {
          date: '2005',
          fait: 'Premier vol de l’A380.',
          text: 'Le plus gros avion de ligne jamais construit, rival direct du 747.',
        },
        {
          date: '2013',
          fait: 'Premier vol de l’A350.',
          text: 'Structure très largement en matériaux composites, au service de la consommation et de la masse.',
        },
      ],
    },
    {
      type: 'callout',
      tone: 'note',
      title: 'Concorde, et pourquoi la vitesse a perdu',
      text: 'Concorde volait à Mach 2 environ, soit Paris-New York en trois heures et demie. Il a été retiré en 2003. Ce n’est pas la technique qui l’a arrêté mais l’économie et l’environnement : consommation par passager très élevée, bang supersonique interdisant le survol des terres, donc un marché limité à quelques liaisons transocéaniques.',
    },

    { type: 'heading', level: 3, text: 'IV. Les hélicoptères et les avions expérimentaux' },
    { type: 'heading', level: 4, text: 'A. Les hélicoptères' },
    {
      type: 'timeline',
      entries: [
        {
          date: '1923',
          fait: 'L’autogire de Juan de la Cierva.',
          text: 'Son rotor n’est pas motorisé : il tourne sous l’effet du vent relatif. L’appareil ne peut pas faire de vol stationnaire, mais il est très sûr en cas de panne moteur.',
        },
        {
          date: '1939',
          fait: 'Le premier hélicoptère moderne.',
          text: 'Igor Sikorsky fait voler le VS-300 et fixe l’architecture qui domine encore : un rotor principal, et un rotor de queue pour compenser le couple.',
        },
      ],
    },
    { type: 'heading', level: 4, text: 'B. Les avions expérimentaux' },
    {
      type: 'timeline',
      entries: [
        {
          date: '1963',
          fait: 'Le X-15 à la frontière de l’espace.',
          text: 'L’avion-fusée atteint 107 960 mètres et Mach 6,7. Certains de ses pilotes seront reconnus astronautes.',
        },
        {
          date: '1979',
          fait: 'Le Gossamer Albatross.',
          text: 'La Manche est traversée à la force des jambes. Le vol musculaire, refusé à Léonard de Vinci, devient possible avec les matériaux modernes.',
        },
        {
          date: '1986',
          fait: 'Le tour du monde sans escale ni ravitaillement.',
          text: 'Dick Rutan et Jeana Yeager bouclent la Terre d’une traite à bord du Voyager.',
        },
        {
          date: '2004',
          fait: 'Le X-43 à Mach 10.',
          text: 'Le superstatoréacteur atteint une vitesse hypersonique en vol atmosphérique.',
        },
        {
          date: '2015-2016',
          fait: 'L’électrique et le solaire.',
          text: 'L’E-Fan d’Airbus et le Cri-Cri électrique traversent la Manche ; Solar Impulse II boucle le tour du monde à l’énergie solaire, piloté par Bertrand Piccard et André Borschberg. La question du vol se déplace vers son empreinte.',
        },
      ],
    },
  ],
}

const partie4: CourseSection = {
  id: 'la-conquete-de-l-espace',
  number: '4',
  title: 'La conquête de l’espace',
  blocks: [
    {
      type: 'lead',
      text: 'L’espace prolonge l’aéronautique et la contredit. Il n’y a plus d’air : ni portance, ni respiration, ni refroidissement, et plus rien contre quoi pousser. Seul le moteur-fusée, qui emporte son comburant, fonctionne encore.',
    },

    { type: 'heading', level: 3, text: 'I. Les précurseurs' },
    {
      type: 'timeline',
      entries: [
        {
          date: 'Fin XIXᵉ siècle',
          fait: 'Constantin Tsiolkovski pose les équations.',
          text: 'Le Russe établit la théorie du vol par réaction et l’intérêt des fusées à étages, des décennies avant que la technique ne suive.',
        },
        {
          date: '1926',
          fait: 'La première fusée à ergols liquides.',
          text: 'L’Américain Robert Goddard la fait voler. Le vol dure quelques secondes, et il ouvre tout le reste.',
        },
        {
          date: '1942',
          fait: 'Le V2.',
          text: 'Développé sous la direction de Wernher von Braun, c’est le premier engin à atteindre l’espace — une arme, construite au prix du travail forcé. Ses ingénieurs, récupérés par les deux camps après 1945, feront les programmes spatiaux américain et soviétique.',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'II. De Spoutnik à Apollo (1957-1972)' },
    {
      type: 'timeline',
      entries: [
        {
          date: '4 octobre 1957',
          fait: 'Spoutnik 1.',
          text: 'L’URSS place le premier satellite artificiel en orbite. Le choc politique est considérable et lance la course à l’espace.',
        },
        {
          date: '3 novembre 1957',
          fait: 'Spoutnik 2 et la chienne Laïka.',
          text: 'Premier être vivant en orbite. Elle ne survivra pas au vol.',
        },
        {
          date: '12 avril 1961',
          fait: 'Youri Gagarine, premier homme dans l’espace.',
          text: 'Un tour de Terre à bord de Vostok 1.',
        },
        {
          date: '1961',
          fait: 'Alan Shepard, premier Américain.',
          text: 'Vol suborbital, quelques semaines après Gagarine.',
        },
        {
          date: '16 juin 1963',
          fait: 'Valentina Terechkova, première femme.',
          text: 'Il faudra attendre vingt ans pour qu’une autre femme vole.',
        },
        {
          date: '1965',
          fait: 'La première sortie extravéhiculaire.',
          text: 'Alexeï Leonov quitte son vaisseau et manque de ne pas pouvoir y rentrer, sa combinaison s’étant rigidifiée sous la pression.',
        },
        {
          date: '1965',
          fait: 'Diamant A.',
          text: 'La France devient la troisième puissance à placer un satellite en orbite avec un lanceur national.',
        },
        {
          date: '21 juillet 1969',
          fait: 'Apollo 11 — le premier pas.',
          text: 'Neil Armstrong pose le pied sur la Lune, suivi de Buzz Aldrin, pendant que Michael Collins reste en orbite lunaire. « C’est un petit pas pour l’homme, mais un pas de géant pour l’humanité. »',
        },
      ],
    },

    { type: 'heading', level: 3, text: 'III. De Skylab à l’ISS (1971 à aujourd’hui)' },
    {
      type: 'text',
      text: 'Après la Lune, l’objectif change : il ne s’agit plus d’aller loin une fois, mais de rester en orbite et d’y travailler. La station remplace l’exploit.',
    },
    {
      type: 'timeline',
      entries: [
        {
          date: '1971',
          fait: 'Saliout 1, première station spatiale.',
          text: 'L’URSS ouvre l’ère du séjour prolongé en orbite.',
        },
        {
          date: '24 décembre 1979',
          fait: 'Le premier vol d’Ariane.',
          text: 'L’Europe se dote d’un accès autonome à l’espace depuis Kourou, en Guyane — dont la proximité de l’équateur augmente la charge utile.',
        },
        {
          date: 'Avril 1981',
          fait: 'La navette Columbia.',
          text: 'Premier vol d’un engin spatial réutilisable. Le programme sera arrêté en 2011, après les pertes de Challenger (1986) et de Columbia (2003).',
        },
        {
          date: 'Juin 1982',
          fait: 'Jean-Loup Chrétien, premier spationaute français.',
          text: 'Il vole à bord d’un vaisseau soviétique Soyouz.',
        },
        {
          date: '1996',
          fait: 'Claudie Haigneré, première Française dans l’espace.',
          text: 'Elle rejoint la station Mir.',
        },
        {
          date: '1998',
          fait: 'Premiers éléments de la Station spatiale internationale.',
          text: 'L’ISS est le plus grand programme de coopération scientifique jamais mené, entre les États-Unis, la Russie, l’Europe, le Japon et le Canada. Elle est habitée en permanence depuis 2000.',
        },
        {
          date: '2003',
          fait: 'Yang Liwei, premier taïkonaute.',
          text: 'La Chine devient la troisième nation capable d’envoyer un homme dans l’espace par ses propres moyens.',
        },
        {
          date: '2015',
          fait: 'Un premier étage qui revient se poser.',
          text: 'Le premier étage d’un Falcon 9 de SpaceX se pose intact. La réutilisation fait chuter le coût de l’accès à l’orbite et rouvre toute l’économie du spatial.',
        },
        {
          date: '2015-2017 et 2021',
          fait: 'Thomas Pesquet à bord de l’ISS.',
          text: 'Deux missions de longue durée, la seconde comme commandant de bord de la station.',
        },
      ],
    },
    {
      type: 'callout',
      tone: 'model',
      title: 'Ce que cette frise laisse de côté',
      text: 'Une chronologie fait des choix. Celle-ci suit le programme officiel du BIA, donc l’histoire vue de France et d’Occident. Elle dit peu des programmes soviétique et chinois hors de leurs premières, rien de l’aviation civile hors d’Europe et des États-Unis, et elle passe vite sur le coût humain — les essais en vol, le travail forcé qui a produit le V2, les victimes des bombardements. Un cours d’histoire doit dire ce qu’il ne raconte pas.',
    },
  ],
}

export const histoire: Course = {
  id: 'bia-histoire',
  track: 'bia',
  subject: 'histoire',
  title: 'Histoire et culture de l’aéronautique et du spatial',
  claim: 'D’où vient ce que l’on pilote aujourd’hui.',
  status: 'sourced',
  minutes: 45,
  sections: [partie1, partie2, partie3, partie4],
  sources: [
    {
      label: 'Manuel du Brevet d’Initiation Aéronautique — version 4.0, édition 2021',
      kind: 'officiel',
      url: 'https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/ressources/pedagogiques/11283/11283-bia-2021-vf1-copie.pdf',
      detail:
        'Publié par Eduscol (Ministère de l’Éducation nationale), rédigé sous la direction du CIRAS de Toulouse avec l’ENAC, l’armée de l’Air et l’association Un Morceau de Ciel Bleu. 274 pages. Le plan de ce chapitre et ses dates en sont issus ; le texte est écrit pour ce site.',
    },
    {
      label: 'Histoire et culture de l’aéronautique — chapitre 5 du manuel CIRAS',
      kind: 'pédagogique',
      url: 'https://www.aclorient.fr/images/img-aeroclub/DocBIA/Cours_CIRAS/Histoire-manuel-bia-chapitre-5.pdf',
      detail:
        '65 pages, diffusé par l’aéro-club de Lorient. Sert de recoupement pour les dates et les figures citées.',
    },
    {
      label: 'Programme officiel du BIA (2015)',
      kind: 'officiel',
      detail:
        'Le découpage en quatre parties — les débuts, d’une guerre à l’autre, de 1945 à nos jours, la conquête de l’espace — est celui du programme, non un choix éditorial.',
    },
  ],
}
