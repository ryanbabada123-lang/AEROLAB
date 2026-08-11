import type { CourseSection } from '@/content/types'

/**
 * ⚠️ FICHIER PRODUIT PAR `scripts/cours-extraire.py`. NE PAS ÉDITER À LA MAIN :
 * toute retouche serait écrasée à la prochaine extraction, et surtout elle
 * romprait la garantie qui fait la valeur de ce fichier — son texte est
 * exactement celui de la couche texte du PDF, au signe près.
 *
 * Source : assets/cours/bia/BIA-Cours3-Connaissance-Aeronefs-2024-06-15.pdf
 * 83 pages, 173123 signes.
 *
 * Pour corriger une coupe de paragraphe ou un titre mal reconnu, corrigez
 * les heuristiques du script et relancez-le, pour que la correction profite
 * aux sept autres cours.
 */
export const aeronefsSections: CourseSection[] = [
  {
    "id": "les-aeronefs",
    "number": "1",
    "title": "Les aéronefs",
    "pages": [
      3,
      14
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Ce terme désigne un appareil capable de se soutenir dans l’atmosphère grâce à des réactions de l’air autres que les réactions de l’air sur la surface de la terre."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1.1 - CLASSIFICATION DES AÉRONEFS"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "1.2 - DESCRIPTION DES PRINCIPAUX TYPES D’AÉRONEF"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.1 - Les ballons"
      },
      {
        "type": "text",
        "text": "A volume égal, l’air chaud est plus léger que l’air froid (masse volumique plus faible). Si l’on chauffe l’air contenu dans un ballon, on crée donc une force verticale dirigée vers le haut vers le haut et le ballon monte."
      },
      {
        "type": "text",
        "text": "Fa : force ascendante Si Fa > P , le ballon monte. Si Fa = P , le ballon reste stable à l’altitude atteinte."
      },
      {
        "type": "text",
        "text": "Si Pa < P , le ballon descend."
      },
      {
        "type": "text",
        "text": "La force résultante (Force ascendante – Poids en charge) est proportionnelle à l’écart de température entre l’air chaud du ballon et l’air extérieur."
      },
      {
        "type": "text",
        "text": "ÉLEMENTS DU BALLON : L'enveloppe Elle a pour rôle de conserver l'air chauffé par le brûleur à l'intérieur du ballon. Sa structure est constituée de sangles horizontales et verticales formant un globe, sur lequel sont cousus des panneaux de nylon traité."
      },
      {
        "type": "text",
        "text": "Toutes les sangles verticales sont rassemblées au sommet sur un anneau de « couronne » et reprises à la base par des câbles d'acier qui viennent se fixer sur le « cadre de charge. »"
      },
      {
        "type": "text",
        "text": "Le sommet de l'enveloppe, qui est ouvert, est obturé de l'intérieur par un panneau circulaire amovible, appelé « parachute. » Ce dernier, sous la poussée de l'air chaud, se plaque sur la bordure du sommet de l'enveloppe, assurant ainsi son étanchéité. Il peut aussi faire office de soupape."
      },
      {
        "type": "text",
        "text": "Le volume des montgolfières actuelles varie entre 600 et 10 000 mètres cubes, le plus courant étant de 2 200 mètres cubes. Lors de l'atterrissage, le pilote ouvre en grand la partie supérieure du ballon (le panneau-parachute faisant office de soupape), et libère ainsi l'air chaud contenu dans l'enveloppe. Le ballon se dégonfle et se couche doucement sur le sol."
      },
      {
        "type": "text",
        "text": "Le brûleur Il permet de gonfler le ballon grâce aux bouteilles de propane, on en trouve généralement un à deux par ballon. Il délivre une flamme dirigée avec précision de 3 à 6 mètres de haut rentrant à l'intérieur de l'enveloppe par la partie inférieure ouverte, la « bouche. » Placé sur le cadre de charge, le brûleur est orientable."
      },
      {
        "type": "text",
        "text": "La nacelle Sa construction en osier et en rotin tressés lui confère robustesse, souplesse et légèreté protégeant ainsi l'équipage des chocs à l'atterrissage."
      },
      {
        "type": "text",
        "text": "Actuellement, Météo-France utilise plusieurs fois par jour des ballons sondes lâchés de sept points du territoire français pour l’étude de l’atmosphère et l’astronomie. Ils emportent notamment des instruments de mesure du vent, de la température, des pressions, … et ce à différentes altitudes. Ces données sont transmises en temps réel vers les centres météo en vue de déterminer les conditions actuelles et les prévisions."
      },
      {
        "type": "text",
        "text": "Le principe est celui d'un ballon à gaz (enveloppe remplie d'un gaz plus léger que l'air) extensible dont le volume grossit au fur et à mesure que l'aérostat prend de l'altitude et ce jusqu’à éclatement vers 30 km d’altitude."
      },
      {
        "type": "text",
        "text": "Force ascendante Fa P Poids du ballon"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.2 - Les parachutes"
      },
      {
        "type": "text",
        "text": "C’est un ensemble qui comporte un sac-harnais, une voilure principale, une voilure de secours et un déclencheur de sécurité. Un parachute pour débutant pèse environ une douzaine de kilos. On le saisit par les sangles principales du harnais, pas par les poignées. La voilure principale est située en bas et la voilure de secours en haut"
      },
      {
        "type": "text",
        "text": "Les parachutes individuels Parachute de sauvetage : parachute dorsal utilisé en vol à voile et voltige"
      },
      {
        "type": "list",
        "items": [
          "Le harnais : permet l’attache du parachute sur le corps du"
        ]
      },
      {
        "type": "text",
        "text": "parachutiste ;"
      },
      {
        "type": "list",
        "items": [
          "Le parachute extracteur : équipé ou non d’un ressort, il sort la"
        ]
      },
      {
        "type": "text",
        "text": "voilure de son sac et l’accompagne jusqu’à l’ouverture du parachute ;"
      },
      {
        "type": "list",
        "items": [
          "La voilure : de type sphérique (calotte) composée de 16 à 28"
        ]
      },
      {
        "type": "text",
        "text": "fuseaux qui se remplissent et les gonflent ;"
      },
      {
        "type": "list",
        "items": [
          "Les suspentes : regroupées sur 2 ou 4 étriers constituant le"
        ]
      },
      {
        "type": "text",
        "text": "système de liaison avec le harnais ;"
      },
      {
        "type": "list",
        "items": [
          "Le système d’ouverture : constitué d’une poignée sur la partie"
        ]
      },
      {
        "type": "text",
        "text": "gauche de la sangle principale. Cette poignée commande l’ouverture par un câble souple ou par l’intermédiaire d’un boîtier chrono-barométrique qui déclenche l’ouverture en-dessous d’une altitude."
      },
      {
        "type": "text",
        "text": "Parachute de saut : parachute principal dorsal de type alvéolaire à trajectoire et vitesse de chute contrôlée et parachute ventral de secours. Ils sont utilisés par les parachutistes militaires, sportifs et professionnels."
      },
      {
        "type": "text",
        "text": "Les parachutes liés au matériel"
      },
      {
        "type": "list",
        "items": [
          "Parachute de secours : pour avion, planeur, ULM, et son pilote ;",
          "Parachutes freins : pour ralentir un avion lors de l’atterrissage ;",
          "Parachute de largage de matériel tels que vivres, médicaments,"
        ]
      },
      {
        "type": "text",
        "text": "véhicules... La surface de voile dépend du matériel largué ;"
      },
      {
        "type": "list",
        "items": [
          "Parachutes de sièges éjectables ;",
          "Parachute anti-vrilles…"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.3 - Les ailes Delta à voilure souple"
      },
      {
        "type": "text",
        "text": "La constitution du deltaplane met l’utilisateur dans une position proche de celle de l’oiseau. Il est installé dans un harnais en position allongée, face au sol, les bras tendus sur la barre de pilotage."
      },
      {
        "type": "text",
        "text": "En manœuvrant la barre de contrôle, le pilote dirige d’une part, la direction de l’aéronef de gauche à droite et, d’autre part, l’inclinaison de l’aile (donc sa vitesse) d’avant en arrière."
      },
      {
        "type": "text",
        "text": "Pour un biplace, les deux personnes sont côte à côte."
      },
      {
        "type": "text",
        "text": "Description d’un Deltaplane"
      },
      {
        "type": "text",
        "text": "Mât Hauban Ficelle de rappel Fourreau de bord d’attaque Barre transversale Ancrage Poche de quille"
      },
      {
        "type": "text",
        "text": "Quille Barre de contrôle 1 – vol rectiligne horizontal 2 - inclinaison 3 – changement de trajectoire"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.4 - Les planeurs"
      },
      {
        "type": "text",
        "text": "Un planeur est un aérodyne dépourvu de moteur, généralement de fort allongement, optimisé pour le vol plané et le vol à voile (utilisation des courants aériens ascendants en guise de propulsion)."
      },
      {
        "type": "text",
        "text": "Les qualités principales d'un planeur de performance sont son taux de chute minimum (moins de 0,5 m/s), sa finesse maximale (rapport entre distance parcourue et altitude perdue, qui peut dépasser 60 km pour 1000m), sa charge alaire, qui conditionne sa finesse à vitesse plus élevée, et sa vitesse à ne pas dépasser (jusqu'à près de 300 km/h)."
      },
      {
        "type": "text",
        "text": "Envol d’un planeur : Soit derrière un avion remorqueur, soit par treuil, motoplaneur, planeur à dispositif d’envol incorporé."
      },
      {
        "type": "text",
        "text": "Accord entre pilote remorqueur et planeur lorsqu’il est arrivé à l’altitude souhaité :"
      },
      {
        "type": "list",
        "items": [
          "L’avion bat des ailes signifie : \"LARGUE-TOI !!!\", le pilote du planeur tire sur la commande de"
        ]
      },
      {
        "type": "text",
        "text": "largage du cable, l’avion qui dispose d’un rétroviseur se met alors en virage en descente avec le cable et le largue à son tour lors d’un passage sur la piste à basse altitude puis se pose ;"
      },
      {
        "type": "list",
        "items": [
          "Si cable coincé, le planeur bat des ailes ; l’avion alors bat de la queue pour dire OK! Le"
        ]
      },
      {
        "type": "text",
        "text": "planeur passe alors en dessous et on fait un retour au sol.avec atterrissage des deux appareils simultanément."
      },
      {
        "type": "text",
        "text": "Description d’un planeur"
      },
      {
        "type": "text",
        "text": "Description du poste de pilotage"
      },
      {
        "type": "text",
        "text": "Les commandes 1. Le manche Il permet de diriger le planeur en tangage et en roulis."
      },
      {
        "type": "text",
        "text": "2. Le palonnier Il permet de contrôler le planeur en lacet dans les virages."
      },
      {
        "type": "text",
        "text": "3. Les aérofreins Ils sont surtout utilisés pour l'atterrissage pour contrôler la perte d'altitude du planeur."
      },
      {
        "type": "text",
        "text": "Ils sont très efficaces et permettent de se poser très précisément."
      },
      {
        "type": "text",
        "text": "4. La commande de largage du câble Pour larguer le planeur de l'avion remorqueur ou du treuil."
      },
      {
        "type": "text",
        "text": "5. Le compensateur de profondeur Il permet de diminuer, voir d'annuler l'effort à fournir sur le manche. Pour le confort, et aussi pour la sécurité."
      },
      {
        "type": "text",
        "text": "Autres commandes Certains planeurs peuvent aussi être équipés :"
      },
      {
        "type": "list",
        "items": [
          "d'une commande pour rentrer le"
        ]
      },
      {
        "type": "text",
        "text": "train d'atterrissage"
      },
      {
        "type": "list",
        "items": [
          "de volets de courbure",
          "d'une commande de vidange des"
        ]
      },
      {
        "type": "text",
        "text": "réservoirs d'eau Les instruments 6. L'anémomètre ou \"badin\" Il indique la vitesse du planeur dans la masse d'air, en km/h."
      },
      {
        "type": "text",
        "text": "7. Le variomètre Il indique la vitesse verticale du planeur, en m/s."
      },
      {
        "type": "text",
        "text": "8. L'altimètre Il indique l'altitude du planeur, en mètres."
      },
      {
        "type": "text",
        "text": "9. Le fil de laine Ce fil de laine attaché à la verrière indique la direction du vent relatif. Il aide le pilote à exécuter les virages de façon parfaitement symétrique."
      },
      {
        "type": "text",
        "text": "10. Le Flarm Cet instrument de sécurité alerte le pilote lorsqu'un autre aéronef équipé d'un Flarm se trouve sur une trajectoire convergente. Il est équipé d'un GPS et communique par radio avec les autres Flarm à proximité."
      },
      {
        "type": "text",
        "text": "11. La radio Elle permet de communiquer avec les aérodromes et les autres pilotes."
      },
      {
        "type": "text",
        "text": "12. Le compas Il indique le cap du planeur."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.5 - Les hélicoptères"
      },
      {
        "type": "text",
        "text": "Selon la définition officielle, un hélicoptère est un aéronef à voilure tournante dont le ou les rotors procurent à eux seuls la propulsion et la sustentation pendant toutes les phases du vol."
      },
      {
        "type": "text",
        "text": "Chaque rotor dit de sustentation, dont l'axe est sensiblement vertical, est une sorte de grande hélice à pas variable, et comporte de deux à huit surfaces aérodynamiques appelées pales, qui servent à déplacer l'appareil à la fois dans le plan vertical et horizontal."
      },
      {
        "type": "text",
        "text": "Comparé aux aéronefs classiques à ailes fixes, l'hélicoptère est d'une conception plus complexe, il est plus onéreux à l'achat et à l'usage, reste relativement lent, possède un rayon d'action réduit et ne peut pas emporter de très lourdes charges."
      },
      {
        "type": "text",
        "text": "Cependant, il possède un avantage considérable sur l'avion : son aptitude à effectuer des vols stationnaires (maintenir une position fixe en vol) qui lui permet d'atteindre des endroits inaccessibles à son homologue à voilure fixe qui doit presque toujours utiliser une piste."
      },
      {
        "type": "text",
        "text": "En contrepartie, l'hélicoptère a besoin d'un moteur bien plus puissant afin de se soulever du sol, limitant en cela sa capacité d'emport."
      },
      {
        "type": "text",
        "text": "Description d’un hélicoptère :"
      },
      {
        "type": "text",
        "text": "LE GMP Le groupe moteur (à pistons ou à turbine) entraîne le rotor principal en rotation ainsi que le rotor anti-couple. La sustentation de l’appareil est alors assurée par la traction T qui est la somme des forces de portance générées par chacune des pales qui sont en fait des voilures aérodynamiques tournantes."
      },
      {
        "type": "text",
        "text": "LE ROTOR ANTI-COUPLE Par réaction à la rotation du rotor principal apparaît un couple tendant à faire tourner le fuselage en sens inverse. Le rotor anti-couple permet la stabilisation et le contrôle des mouvements de l’appareil autour de l’axe de lacet."
      },
      {
        "type": "text",
        "text": "T P LES BIELLES DE COMMANDE DE PAS Modifient, sur commande du pilote, l’angle d’incidence de chacune des pales, ce qui modifie la force de traction."
      },
      {
        "type": "text",
        "text": "LE PLATEAU CYCLIQUE Modifie, sur commande du pilote, l’inclinaison du plan de rotation du rotor par variation cyclique sur un tour du calage des pales ; il permet donc le contrôle des évolutions de l’appareil autour de l’axe de tangage, et par conséquent la vitesse horizontale de déplacement de l’appareil."
      },
      {
        "type": "text",
        "text": "1 - Vol vertical en montée 3 - Vol stationnaire T > P Traction T T = P"
      },
      {
        "type": "text",
        "text": "Poids P"
      },
      {
        "type": "text",
        "text": "2 - Vol vertical en descente"
      },
      {
        "type": "text",
        "text": "4 - Vol horizontal"
      },
      {
        "type": "text",
        "text": "T < P"
      },
      {
        "type": "text",
        "text": "Fz = P"
      },
      {
        "type": "text",
        "text": "Classification des hélicoptères Hélicoptères légers : charge offerte de 3 à 12 passagers ou 300 à 1 200 kg ;"
      },
      {
        "type": "text",
        "text": "Hélicoptères moyens : charge offerte 13 à 35 passagers ou 1 300 à 5 000 kg ; Hélicoptères lourds : charge offerte supérieure à 35 passagers ou 5 000 kg mais pouvant atteindre 30 tonnes (Sikorsky S.64, CH.53 pour les Etats-Unis, Mi 6, Mi 8, Mi 12 pour l'U.R .S .S"
      },
      {
        "type": "text",
        "text": "Quelques utilisations spécifiques Transport Personnel"
      },
      {
        "type": "text",
        "text": "Transport Matériel Secours, Évacuation des blessés"
      },
      {
        "type": "text",
        "text": "Défense transport militaire Missions d'observation Attaque directe sur le feu"
      },
      {
        "type": "text",
        "text": "Fz T Tr P P T"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.6 - Les ULM"
      },
      {
        "type": "text",
        "text": "L’U.L.M est un aéronef Ultra Léger Motorisé ne pouvant emporter plus de 2 personnes et disposant d’une masse et d’une puissance ne pouvant dépasser :"
      },
      {
        "type": "list",
        "items": [
          "300 kg maximum pour les monoplaces - 450 kg pour les biplaces,",
          "Puissance 45 kW maxi pour les monoplaces - 60 kW pour les biplaces,"
        ]
      },
      {
        "type": "text",
        "text": "Par ailleurs, * Il doit être capable d'atterrir avec une vitesse minimum de 65 Km/h."
      },
      {
        "type": "text",
        "text": "Un ULM peut décoller et atterrir occasionnellement sur un terrain ayant les caractéristiques suffisantes (terrain dégagé, de 200 à 300 m de long et 20 de large) à condition d'avoir l'autorisation de son propriétaire ou ayant droit, et d'avertir le maire de la commune. Un tel terrain est appelé ''plate-forme occasionnelle''."
      },
      {
        "type": "text",
        "text": "Le pilote doit être détenteur d’un brevet de pilote spécifique à la classe d’ULM utilisée ULM délivré par le Ministère des Transports à l'issue d'un examen qui comporte un examen théorique, une épreuve pratique au sol et une épreuve pratique en vol."
      },
      {
        "type": "text",
        "text": "L'âge minimum requis est de 15 ans pour piloter, 18 ans pour être instructeur."
      },
      {
        "type": "text",
        "text": "Initialement conçus artisanalement, les U.L.M. ont beaucoup évolués et disposent actuellement d’une classification en six grandes familles."
      },
      {
        "type": "text",
        "text": "Classe 1 : Les paramoteurs Le paramoteur, apparu en 1980, est le plus petit aéronef autonome du monde et le moins cher."
      },
      {
        "type": "text",
        "text": "Le pilote est suspendu sous une aile de type \"parapente\" et propulsé par un moteur léger qu'il porte sur le dos."
      },
      {
        "type": "text",
        "text": "Le pilotage s'effectue par action sur les suspentes du parachute"
      },
      {
        "type": "text",
        "text": "Classe 2 : Les pendulaires Le \"Pendulaire\" c'est l'U.L.M. tout- terrain car adapté aux pistes courtes."
      },
      {
        "type": "text",
        "text": "Il est constitué d'un chariot est suspendu sous une aile delta. Il se pilote par déplacement du centre de gravité en agissant sur la barre de contrôle du trapèze. Vitesse de croisière, de 60 à 130 km/h"
      },
      {
        "type": "text",
        "text": "Classe 3 : Les multiaxes Véritable petit avion, avec un pilotage identique et désormais des performances dépassant certains avions légers."
      },
      {
        "type": "text",
        "text": "Classe 4 : Les autogires L'autogire, inventé par De la Cierva dès 1929, est le précurseur de l'hélicoptère. Classé U.L.M. en 1998, il se caractérise par une voilure tournante entrainée uniquement par le vent relatif (vitesse de déplacement de cet appareil)."
      },
      {
        "type": "text",
        "text": "Son moteur n'actionne qu'une hélice propulsive. Il se pilote, comme un avion, par des gouvernes aérodynamiques et il est exceptionnellement maniable. Il peut voler lentement (25 km/h) mais aussi effectuer de courts voyages avec une vitesse de l’ordre de 130 km/h."
      },
      {
        "type": "text",
        "text": "Peu encombrant il est facile à transporter dans une remorque."
      },
      {
        "type": "text",
        "text": "Classe 5 : Les aérostats dirigeables ultra légers L'aérostat ultra-léger comporte une enveloppe de sustentation et un système de propulsion qui le rend dirigeable."
      },
      {
        "type": "text",
        "text": "La sustentation est assurée par une enveloppe contenant un gaz plus léger que l'air ambiant."
      },
      {
        "type": "text",
        "text": "Cela peut être un gaz inerte tel que l'hélium (type ballon), ou de l'air chauffé (montgolfière)."
      },
      {
        "type": "text",
        "text": "Classe 6 : Les hélicoptères ultra légers L’arrêté modificatif créant la « Classe 6 dite hélicoptère ultraléger» a été publié le 29 Février 2012."
      },
      {
        "type": "text",
        "text": "Un hélicoptère ultraléger répond aux conditions techniques suivantes :"
      },
      {
        "type": "list",
        "items": [
          "monomoteur dont la puissance maximale est"
        ]
      },
      {
        "type": "text",
        "text": "inférieure ou égale à 80 kW pour un monoplace et à 100 kW pour un biplace ;"
      },
      {
        "type": "list",
        "items": [
          "la masse maximale est inférieure ou égale à 300"
        ]
      },
      {
        "type": "text",
        "text": "kg pour un monoplace et à 450 kg pour un biplace. Ces masses peuvent être augmentées de 10 % dans le cas d'un ULM à flotteurs ;"
      },
      {
        "type": "list",
        "items": [
          "la charge rotorique à la masse maximale est comprise"
        ]
      },
      {
        "type": "text",
        "text": "entre 8 et 20 kg au m2."
      },
      {
        "type": "text",
        "text": "L’activité ULM en France"
      },
      {
        "type": "list",
        "items": [
          "90 000 H de vol déclarées,",
          "16 500 adhérents, 700 Instructeurs ;",
          "1027 structures dont 761 clubs, 266 sociétés et 128 Labellisées ;",
          "16 331 ULM (CI valides), 9422 ULM club ; 800 bases ULM."
        ]
      },
      {
        "type": "text",
        "text": ""
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.7 - Les Avions"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.7.1 - Classification par secteur d’activité"
      },
      {
        "type": "text",
        "text": "L’espace est partagé par nombre d’utilisateurs :"
      },
      {
        "type": "text",
        "text": "Les avions légers Ce secteur regroupe principalement les avions d’école, de tourisme, de voltige dont le poids est inférieur à 2,7 tonnes. Il est intégré à la classe des avions de poids inférieur à 5,7 tonnes qui regroupe en plus certains avions d’affaires ou de transport."
      },
      {
        "type": "text",
        "text": "Les avions de travail aérien Utilisés aussi bien pour le remorquage de banderoles, l’épandage agricole, le taxi, les affaires, la sécurité civile, la surveillance des côtes, le largage des parachutistes, la lutte contre les incendies, …"
      },
      {
        "type": "text",
        "text": "L’aviation commerciale pour les passagers ou le fret en trafic national (compagnie de troisième niveau), continental (deuxième niveau) et international transocéanique (compagnie de premier niveau)."
      },
      {
        "type": "text",
        "text": "L’aviation de défense Elle regroupe aussi bien les avions de chasse (très rapides et maniables), d’observation, mais aussi le transport de troupes et de matériels de défense."
      },
      {
        "type": "text",
        "text": "Les avions de moyen tonnage occupent le créneau des 7 t à 136 tonnes. La troisième catégorie d’avions en classification par poids regroupe tous les avions dont le poids est supérieur à 136 tonnes."
      },
      {
        "type": "text",
        "text": "Les Ancêtres L’Aviation légère Le Travail aérien L’Aviation commerciale L’Aviation militaire"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.7.2 - Description d’un avion"
      },
      {
        "type": "text",
        "text": "La voilure est constituée de deux demi-ailes qui assurent la sustentation, la distance séparant les extrémités des deux demi-ailes se nomme envergure."
      },
      {
        "type": "text",
        "text": "La structure générale des avions est, quel que soit le type ou la taille, généralement la même, à savoir :"
      }
    ]
  },
  {
    "id": "principaux-elements",
    "number": "",
    "title": "Principaux éléments",
    "pages": [
      14,
      14
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Cône d’hélice Poste de pilotage Fuselage arrière Capot moteur Dérive"
      },
      {
        "type": "text",
        "text": "Gouverne de direction"
      },
      {
        "type": "text",
        "text": "Gouverne de profondeur Plan fixe Aileron Volets Saumon Aile (Intrados)"
      }
    ]
  },
  {
    "id": "constitution",
    "number": "",
    "title": "Constitution",
    "pages": [
      14,
      17
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "La voilure (ailes) et les dispositifs d’hypersustentation (volets, becs,)",
          "Le fuselage (partie centrale de l’avion, habitacle, compartiment moteur),",
          "L’empennage (plan fixe et dérive),",
          "Les gouvernes (profondeur, direction et ailerons),",
          "Le train d’atterrissage, fixe ou rentrant, classique ou tricycle."
        ]
      },
      {
        "type": "text",
        "text": "Train tricycle Aile (Extrados) CESSNA 177"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "1.2.7.3 - Réalisations et caractéristiques géométriques"
      },
      {
        "type": "text",
        "text": "Les ailes des avions peuvent prendre des formes très différentes en fonction des performances demandées à l'aéronef. Leur dessin est fonction de la vitesse de vol en croisière, de l'altitude de vol, de la masse de l'appareil et des conditions d'utilisation de celui-ci. Leur rôle reste toujours le même :"
      },
      {
        "type": "text",
        "text": "ASSURER LA SUSTENTATION DE L'APPAREIL. On peut les classer par :"
      },
      {
        "type": "text",
        "text": "Pour pouvoir s'adapter à des plages de vitesse très larges d'environ 200 à plus de 2000 Km/h, certains avions de combat sont munis d'une voilure à géométrie variable."
      },
      {
        "type": "text",
        "text": "Caractéristiques de la géométrie des ailes"
      },
      {
        "type": "text",
        "text": "Non seulement les formes d'ailes peuvent être différentes, mais elles peuvent aussi être calées différemment par rapport au plan horizontal."
      },
      {
        "type": "text",
        "text": "Aile basse Cantilever Aile médiane Aile haute haubanée Canard P O S I T I O N Monoplan Triplan Biplan N O M B R E Plan repliable M A T I E R E S Bois et Toile Tôle ondulée Tôle d’aluminium Stratifié Géométrie variable Ailes en flèche"
      },
      {
        "type": "text",
        "text": "Ailes droites Ailes trapézoïdales Ailes elliptiques Ailes delta Biplan"
      },
      {
        "type": "text",
        "text": "On parle du dièdre des ailes. Il s'agit de l'angle entre le plan horizontal et le plan d'une aile."
      },
      {
        "type": "text",
        "text": "Il est positif si le plan de l'aile est au-dessus de l'horizontale et négatif dans le cas contraire."
      },
      {
        "type": "text",
        "text": "ALLONGEMENT (A) (grandeur relative) : c’est le rapport de l’envergure sur la longueur de la corde moyenne ou du carré de l’envergure sur la surface de l’aile."
      },
      {
        "type": "text",
        "text": "Les planeurs ont des voilures à fort allongement environ 20 à 25, les avions classiques de 6 à 12 en moyenne et les avions rapides de l’ordre de 3 à 5."
      },
      {
        "type": "text",
        "text": "Allongement : A = B² / S ou A = B / l (l est la longueur de la corde moyenne de l’aile). Dièdre positif Dièdre négatif Le dièdre d’une voilure peut être exprimée en degrés ou en mètres mesurés en bout d’aile."
      },
      {
        "type": "text",
        "text": "Le dièdre est un élément de la stabilité latérale de l’avion. Angle formé par l’horizontale et le plan de l’aile (jonction des cordes de profil de la voilure)."
      },
      {
        "type": "text",
        "text": "La flèche est un élément de la stabilité de route de l’avion. Angle formé par la perpendiculaire horizontale de l’axe longitudinal de l’avion et le bord d’attaque de l’aile."
      },
      {
        "type": "text",
        "text": "Flèche La flèche d’une voilure est exprimée en degrés. Elle peut être positive (vers l’arrière), négative ou nulle."
      },
      {
        "type": "text",
        "text": "Flèche L’envergure (B) (grandeur absolue)"
      },
      {
        "type": "text",
        "text": "SURFACE PORTANTE (S) appelée également SURFACE ALAIRE Corde de profil de l’aile appelée également Profondeur de l’aile (L) Ligne moyenne d’égale distance entre l’extrados et l’intrados (corde moyenne) Epaisseur maximum (Épaisseur relative = rapport de l’épaisseur maximale à la corde de profil) Flèche maxi"
      },
      {
        "type": "text",
        "text": "EFFILEMENT DE L’AILE : Rapport de la profondeur à l’emplanture sur la profondeur marginale (à l’extrémité)."
      },
      {
        "type": "text",
        "text": "CHARGE ALAIRE (kg / m²) Rapport de la masse de l’avion sur la surface alaire (surface portante)."
      },
      {
        "type": "text",
        "text": "De l’ordre de :"
      },
      {
        "type": "list",
        "items": [
          "60 à 120 kg/m² pour les monomoteurs ;",
          "120 à 180 pour les bimoteurs légers ;",
          "180 à 250 pour les commuters et petits"
        ]
      },
      {
        "type": "text",
        "text": "biréacteurs ;"
      },
      {
        "type": "list",
        "items": [
          "250 à 350 pour les moyens courriers ;",
          "350 à 520 pour les gros longs courriers."
        ]
      }
    ]
  },
  {
    "id": "la-cellule-d-un-avion",
    "number": "2",
    "title": "La cellule d’un avion",
    "pages": [
      17,
      20
    ],
    "blocks": [
      {
        "type": "heading",
        "level": 3,
        "text": "2.1 - CONSTITUTION DES ÉLÉMENTS"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.1.1 - Description d’une aile"
      },
      {
        "type": "text",
        "text": "La rigidité de l'aile est assurée par des longerons et sa forme par des nervures."
      },
      {
        "type": "text",
        "text": "Le revêtement de la voilure peut être en bois, en métal, en composite ou en toile. L'extrémité de chaque aile se termine généralement par une partie profilée dénommée saumon. Ce saumon supporte les feux de navigation."
      },
      {
        "type": "text",
        "text": "L'espace laissé libre entre les nervures permet de loger des réservoirs de carburant. Les parties avant et arrière de l'aile se nomment respectivement le bord d'attaque et le bord de fuite. Le dessus de l’aile s’appelle Extrados, le dessous : Intrados."
      },
      {
        "type": "text",
        "text": "Près du fuselage, sur le bord de fuite de l’aile, des surfaces sont articulés : les volets. A noter que ces deux surfaces se déplacent dans le même sens."
      },
      {
        "type": "text",
        "text": "Sur certains avions, sur le bord d'attaque de l’aile, on peut trouver des surfaces mobiles appelées : becs."
      },
      {
        "type": "text",
        "text": "Vers l'extrémité de l'aile et au bord de fuite se trouvent des éléments mobiles : les ailerons."
      },
      {
        "type": "text",
        "text": "Ces deux surfaces se braquent en sens inverse (aileron droit bas = aileron gauche haut) et permettent en vol d'incliner l'avion à droite ou à gauche (l'aileron baissé génère de la portance qui permet à la demi-aile associée de se lever, aileron haut génère de la déportance et donc produit une force dirigée en sens opposé de la direction de l’aileron)."
      },
      {
        "type": "text",
        "text": "La partie de l'aile qui assure la jonction avec le fuselage se nomme l'emplanture, le profilage aérodynamique de l'emplanture porte le nom d’un ingénieur aérodynamicien : le Karman."
      },
      {
        "type": "text",
        "text": "L'implantation de l'aile sur le fuselage peut se faire à différents niveaux, basse, médiane ou haute."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.1.2 - Exemples de formule adaptés à l’utilisation"
      },
      {
        "type": "text",
        "text": "Dans de très nombreux cas, l'expérience a amené les constructeurs à opter pour des formules aérodynamiques typiques liées à l'utilisation de l'appareil :"
      },
      {
        "type": "list",
        "items": [
          "Les avions de tourisme présent des voilures droites et des fuselages à section carrée ou"
        ]
      },
      {
        "type": "text",
        "text": "rectangulaire. L'empennage est classique ou en T."
      },
      {
        "type": "list",
        "items": [
          "Les avions de voltige modernes présentent des ailes médianes trapézoïdales associées"
        ]
      },
      {
        "type": "text",
        "text": "à empennage classique dont le plan horizontal présente en général la même géométrie que la voilure. Le fuselage est souvent à base cylindrique."
      },
      {
        "type": "list",
        "items": [
          "Les avions de ligne longs et moyens courriers présentent en majorité une voilure basse à"
        ]
      },
      {
        "type": "text",
        "text": "flèche moyenne qui supporte de 2 à 4 réacteurs placés en nacelles. Leur empennage est classique ou en T. Le fuselage est cylindrique ou elliptique. (ex : les avions de la famille AIRBUS et la grande majorité des BOEING)."
      },
      {
        "type": "list",
        "items": [
          "Les avions de transport régional sont souvent des bi-turbopropulseurs à aile haute et"
        ]
      },
      {
        "type": "text",
        "text": "empennage en T. (avions de la famille ATR). On trouve également beaucoup de biréacteurs à aile basse et empennage en T (famille des ERJ et BAe 146)."
      },
      {
        "type": "list",
        "items": [
          "Les avions de chasse modernes présentent une voilure trapézoïdale et un empennage"
        ]
      },
      {
        "type": "text",
        "text": "classique ou une voilure delta sans empennage horizontal ou avec empennage canard. Les formules sont en fait plus variées dans le domaine de l'aviation de combat que dans les autres."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.1.3 - Les différents fuselages"
      },
      {
        "type": "text",
        "text": "Les fuselages des avions peuvent avoir des formes très différentes en fonction de leur utilisation. Le fuselage doit permettre d'emporter l'équipage, le carburant, la charge utile (s'il y en a) et doit également permettre de fixer les différentes parties de l'appareil pour assurer la cohésion de l'ensemble."
      },
      {
        "type": "text",
        "text": "Les formes les plus courantes présentent des sections circulaires, elliptiques, rectangulaires ou carrées."
      },
      {
        "type": "text",
        "text": "Le fuselage est un caisson dont la rigidité est assurée par des couples et des raidisseurs, de même que pour l'aile, son revêtement peut être du bois, du métal, du composite ou de la toile."
      },
      {
        "type": "text",
        "text": "Sa forme dépend de la mission de l'aéronef et se calque sur les cadres ou couples choisis."
      },
      {
        "type": "text",
        "text": "L'utilisation de plus en plus courante des matériaux composites fait apparaître de plus en plus souvent des fuselages aux formes compliquées."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.1.4 - Les différents empennages"
      },
      {
        "type": "text",
        "text": "A l'arrière du fuselage se trouvent les empennages. La partie verticale comprend une partie fixe dénommé dérive à l'arrière de laquelle est articulée la gouverne de direction."
      },
      {
        "type": "text",
        "text": "La partie horizontale est constituée par un plan fixe sur lequel s'articule la gouverne de profondeur."
      },
      {
        "type": "text",
        "text": "Sur certains avions, l'empennage horizontal est constitué par une seule surface entièrement mobile."
      },
      {
        "type": "text",
        "text": "Il s'agit dans ce cas d'un empennage monobloc."
      },
      {
        "type": "text",
        "text": "Il existe différentes géométries possibles qui sont similaires à celles des ailes. L'implantation de l'empennage est également différente selon les avions."
      },
      {
        "type": "text",
        "text": "L’empennage vertical constitué :"
      },
      {
        "type": "list",
        "items": [
          "d’une partie fixe :"
        ]
      }
    ]
  },
  {
    "id": "la-derive",
    "number": "",
    "title": "La dérive ;",
    "pages": [
      20,
      20
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "d’une partie mobile :"
        ]
      }
    ]
  },
  {
    "id": "la-gouverne-de-direction",
    "number": "",
    "title": "La gouverne de direction.",
    "pages": [
      20,
      20
    ],
    "blocks": [
      {
        "type": "text",
        "text": "L’empennage horizontal peut être constitué :"
      },
      {
        "type": "list",
        "items": [
          "d’une partie généralement fixe :"
        ]
      }
    ]
  },
  {
    "id": "le-plan-fixe",
    "number": "",
    "title": "Le plan fixe ;",
    "pages": [
      20,
      20
    ],
    "blocks": [
      {
        "type": "list",
        "items": [
          "d’une partie mobile :"
        ]
      }
    ]
  },
  {
    "id": "la-gouverne-de-profondeur",
    "number": "",
    "title": "La gouverne de profondeur.",
    "pages": [
      20,
      23
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Principaux types d'empennages :"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.2 - LES DISPOSITIFS HYPERSUSTENTATEURS"
      },
      {
        "type": "text",
        "text": "Lors des phases d'approche et de décollage un avion doit disposer d'une portance optimale. Dans le cas d'un décollage il faut pouvoir quitter le sol et s'élever rapidement avec une vitesse pas trop importante afin que la distance de décollage ne soit pas trop longue et que l'on puisse survoler les obstacles entourant les terrains sans problèmes."
      },
      {
        "type": "text",
        "text": "Pour l'atterrissage, il s'agit de se poser avec la vitesse la plus faible possible. Cela facilite le posé de l'avion. Plus la machine se pose vite et moins le pilote a de temps pour réagir en cas de mauvaise présentation. De plus avec une vitesse élevée les risques d'éclatement de pneus augmentent et la longueur de piste nécessaire augmente."
      },
      {
        "type": "text",
        "text": "Les ingénieurs ont donc développé des dispositifs hypersustentateurs (augmentant la portance) qui ne servent que dans ces phases de vol. Ces dispositifs augmentent également la résistance de l'air sur l'avion et il est donc préférable de les escamoter pour les autres phases de vol."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.2.1 - Les volets de bord de fuite"
      },
      {
        "type": "text",
        "text": "Les volets de bord de fuite sont des surfaces mobiles vers le bas situé sur le bord arrière de l'aile de chaque côté du fuselage. Leur longueur est comprise entre 1/3 et la moitié de la longueur de chaque demi-aile. Les deux volets sortent ou rentrent en même temps, partiellement ou totalement suivant les besoins ou les circonstances."
      },
      {
        "type": "text",
        "text": "La plupart des avions en est munie. Ils sont généralement entièrement déployés pour l'atterrissage et au tiers pour le décollage."
      },
      {
        "type": "text",
        "text": "Il en existe de divers types, les principaux sont présentés ci-dessous :"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.2.2 - Les becs de bord d'attaque"
      },
      {
        "type": "text",
        "text": "On trouve également des dispositifs sur le bord avant de l'aile ayant la même fonction : Les dispositifs de bord d'attaque amovibles ne sont utilisés, en général, que pour l'atterrissage."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.3 - LE TRAIN D'ATTERRISSAGE (à roues, à skis ou à flotteurs)"
      },
      {
        "type": "list",
        "items": [
          "Il doit supporter l’ensemble des efforts dus au poids de l’avion ;",
          "Il doit permettre les manœuvres au sol (roulage et décollage au poids max),",
          "Il doit être capable d’absorber l’énergie relative à l’atterrissage de l’avion et d’amortir les"
        ]
      },
      {
        "type": "text",
        "text": "efforts subis lors de la prise de contact de l'avion avec le sol."
      },
      {
        "type": "text",
        "text": "Une fois en vol, le train d'atterrissage constitue une gêne car il augmente la traînée de l'appareil (résistance dans l'air). Sur les avions rapides le train peut s'escamoter dans le fuselage ou dans les ailes. On parle de train rentrant ou escamotable. Dans le cas contraire, il est qualifié de train fixe."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.3.1 - Les différents types de trains d'atterrissage"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.3.1.1 - Les trains classiques"
      },
      {
        "type": "text",
        "text": "Composé d’un train principal et d’une roulette ou d’un patin situé à l’arrière. Ils sont simples et robustes mais désuets. Lorsqu'il est au sol l'avion est incliné en arrière. Les avions possédant ce type d'atterrisseurs sont plus difficiles à poser."
      },
      {
        "type": "text",
        "text": "INCONVÉNIENTS DE CE DISPOSITIF :"
      },
      {
        "type": "list",
        "items": [
          "Risque de passer en pylône (freinage ou blocage de roue)",
          "Forte traînée au décollage (ligne de vol à acquérir)",
          "Mauvaise visibilité devant (pilote plus bas que le capot)…"
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.3.1.2 - Les trains tricycles"
      },
      {
        "type": "text",
        "text": "Ils sont constitués de deux jambes de train principales et d’une roulette de nez. Ils équipent la plupart des avions modernes (gros et petits) et présentent toutes les solutions aux inconvénients du train classique."
      },
      {
        "type": "text",
        "text": "Lorsqu'il est au sol, un avion possédant ce type de train est à l'horizontale. Cela facilite nettement les manœuvres car la visibilité vers l'avant est dégagée."
      },
      {
        "type": "text",
        "text": "Pour certaines applications particulières, le train d'atterrissage peut être muni de flotteurs ou de skis."
      },
      {
        "type": "text",
        "text": "INCONVÉNIENTS DE CE DISPOSITIF :"
      },
      {
        "type": "list",
        "items": [
          "Poids plus élevé ;",
          "Construction plus difficile donc plus onéreux;",
          "Fragilité relative de la roulette avant, sujette au shimmy."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.3.1.3 - Les trains monotraces"
      },
      {
        "type": "text",
        "text": "Utilisés surtout sur les avions légers et les planeurs. La stabilité latérale au roulement est assurée sur certaines machines par des balancines (sorte de tube léger assorti d’une roulette et fixé à l’extrémité de chaque aile. Principal avantage : le poids."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.3.2 - Constitution d'un atterrisseur"
      },
      {
        "type": "text",
        "text": "D'une manière générale, un train d'atterrissage est constitué d'un train auxiliaire (roulette de queue pour les modèles classiques ou train avant pour les modèles tricycles) et d'un train principal (gauche et droit)."
      },
      {
        "type": "text",
        "text": "La distance entre le train principal et le train auxiliaire est appelée empattement et celle entre les deux jambes du train principal est appelée voie."
      },
      {
        "type": "text",
        "text": "Lorsque le train avant ne possède qu'une seule roue, on parle de train simple ; s'il en comprend 2, on parle de diabolo et s'il en comprend 4 ou 6 on parle de boggie."
      },
      {
        "type": "text",
        "text": "Le nombre de roues maximum actuellement sur un avion est de 32 roues, il s’agit de l’Antonov AN 225, avion ukrainien permettant de transporter une charge de 250 tonnes avec une autonomie de 4 à 14500 km."
      }
    ]
  },
  {
    "id": "empattement",
    "number": "",
    "title": "Empattement",
    "pages": [
      23,
      35
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Autres composantes géométriques du train d’atterrissage :"
      },
      {
        "type": "text",
        "text": "L’ANGLE DE GARDE Cet angle est composé par la verticale du centre de gravité et l’axe du train principal."
      },
      {
        "type": "text",
        "text": "L’angle de garde définit la stabilité de l’avion au sol (roulage, freinage, …)."
      },
      {
        "type": "text",
        "text": "Plus il est important, plus l’avion est stable au sol donc le risque de passer en pylône est moindre."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.4 - LES COMMANDES DE VOL"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.1 - Les axes du mouvement"
      },
      {
        "type": "text",
        "text": "Un avion se déplaçant dans l'espace, sa capacité de mouvement autour de son centre de gravité se décrit autour de 3 axes :"
      },
      {
        "type": "list",
        "items": [
          "l'axe de tangage (axe passant par le plan"
        ]
      },
      {
        "type": "text",
        "text": "horizontal des ailes)"
      },
      {
        "type": "list",
        "items": [
          "l'axe de roulis (axe longitudinal de l'avion)",
          "l'axe de lacet (axe perpendiculaire au plan des"
        ]
      },
      {
        "type": "text",
        "text": "ailes)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.2 - Le contrôle en tangage"
      },
      {
        "type": "text",
        "text": "Une rotation autour de l'axe de tangage permet de monter ou de descendre le nez de l'appareil et va ainsi orienter la trajectoire de l’avion vers le haut ou le bas."
      },
      {
        "type": "text",
        "text": "Le mouvement de rotation est obtenu en tirant ou poussant le manche (ou volant)."
      },
      {
        "type": "text",
        "text": "Cette commande active une surface mobile située sur l'empennage horizontal, que l'on appelle gouverne de profondeur."
      },
      {
        "type": "text",
        "text": "Pour les empennages monoblocs, c’est évidemment toute la partie horizontale qui oscille vers le haut ou vers le bas afin de modifier la trajectoire."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.3 - Le contrôle en roulis"
      },
      {
        "type": "text",
        "text": "Une rotation autour de l'axe de roulis permet d'incliner les ailes à droite ou à gauche. Cette manœuvre contribue à la mise en virage de l'avion. La commande de roulis est actionnée par l'intermédiaire du manche ou du volant en l’inclinant à droite ou à gauche."
      },
      {
        "type": "text",
        "text": "Le roulis est obtenu en braquant dissymétriquement des surfaces mobiles, appelées ailerons, situées à l’extrémité des ailes et au bord de fuite (manche à droite, l’aileron droit monte, l’aileron gauche descend)."
      },
      {
        "type": "text",
        "text": "Centre de gravité Angle de garde"
      },
      {
        "type": "text",
        "text": "Il arrive que ce contrôle soit assuré par des spoilers situés sur l’extrados des ailes."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.4 - Le contrôle en lacet"
      },
      {
        "type": "text",
        "text": "La rotation autour de l'axe de lacet est assurée par une commande située au pied et appelée palonnier."
      },
      {
        "type": "text",
        "text": "Le palonnier permet d'actionner, en le poussant à droite ou à gauche, une surface mobile verticale située sur la dérive, la commande de direction."
      },
      {
        "type": "text",
        "text": "La rotation autour de cet axe permet de contrôler l'avion lors de sa course au décollage ou à l'atterrissage et de maintenir un vol symétrique en croisière et en virage."
      },
      {
        "type": "text",
        "text": "La commande de direction contribue avec les ailerons à la réalisation des virages."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.5 - Les commandes hybrides"
      },
      {
        "type": "text",
        "text": "Il existe des gouvernes dont le système de commande permet une utilisation multiple. On trouve par exemple des élevons qui font office d'élévateurs et d'ailerons. Il existe également des flaprons qui servent de volet de courbure et d'aileron. En dehors de ces exemples relativement courants, il en existe d'autres."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.6 - Les effets secondaires des commandes et des gouvernes"
      },
      {
        "type": "text",
        "text": "Nous avons décrit l'effet principal des différentes commandes (effets primaires) mais leur action entraîne également des mouvements parasites de l'avion appelés effets secondaires des commandes."
      },
      {
        "type": "text",
        "text": "On trouve parmi ceux-ci :"
      },
      {
        "type": "list",
        "items": [
          "la commande de roulis entraîne un lacet inverse accompagné d’une chute légère du"
        ]
      },
      {
        "type": "text",
        "text": "nez de l'appareil (à droite) ou à cabrer à gauche (effet gyroscopique) dans l'intérieur du virage."
      },
      {
        "type": "list",
        "items": [
          "la commande de lacet entraîne un roulis induit dans le même sens.",
          "la commande de profondeur est sans effet secondaire (mis à par l’effet gyroscopique)."
        ]
      },
      {
        "type": "text",
        "text": "Ces effets secondaires nécessitent donc une coordination des mouvements des commandes pour obtenir de l'appareil un mouvement précis."
      },
      {
        "type": "text",
        "text": "LE LACET INDUIT En virage, l’aile extérieure au virage décrit, dans le même temps, une trajectoire PLUS LONGUE que celle de l’aile intérieure."
      },
      {
        "type": "text",
        "text": "Vitesse plus importante de l’aile extérieure entraîne :"
      },
      {
        "type": "list",
        "items": [
          "une sustentation plus forte sur l’aile extérieure qui tend à se soulever et donc"
        ]
      },
      {
        "type": "text",
        "text": "augmente l’inclinaison, c’est d’une part le roulis induit, mais"
      },
      {
        "type": "list",
        "items": [
          "cette aile va traîner plus, donc l’aile extérieure sera plus freinée par rapport à l’aile"
        ]
      },
      {
        "type": "text",
        "text": "intérieure d’où Mise en glissade de l’avion par mouvement de lacet : C’EST LE LACET INDUIT."
      },
      {
        "type": "text",
        "text": "LE ROULIS INDUIT L’action sur les palonniers provoque une rotation autour de l’AXE de LACET."
      },
      {
        "type": "text",
        "text": "Lors de la rotation, l’aile extérieure parcourt une distance supérieure à l’aile intérieure pendant le même temps."
      },
      {
        "type": "text",
        "text": "La vitesse est donc supérieure sur l’aile extérieure, sa portance également. L’avion, sans intervention sur le volant s’incline du côté de l’action sur le palonnier."
      },
      {
        "type": "text",
        "text": "Phase particulièrement concernée : A l’atterrissage lors du décrabage, contrer le roulis induit par une action de correction au manche (manche dans le vent) en vue de maintenir une inclinaison nulle."
      },
      {
        "type": "text",
        "text": "LE LACET INVERSE La mise en virage implique deux actions :"
      },
      {
        "type": "list",
        "items": [
          "l’action latérale sur le manche d’ou aileron baissé sur aile extérieure et aileron haut"
        ]
      },
      {
        "type": "text",
        "text": "sur aile intérieure ;"
      },
      {
        "type": "list",
        "items": [
          "le palonnier intérieur au virage sollicité."
        ]
      },
      {
        "type": "text",
        "text": "Or différence de traînées entre aileron baissé et levé d’où freinage de l’aile extérieure tendant à contrer la mise en virage souhaitée, d’où obligation d’une action plus soutenue sur palonniers en virage."
      },
      {
        "type": "text",
        "text": "L’EFFET DE GIROUETTE Au roulage, avec vent de travers :"
      },
      {
        "type": "list",
        "items": [
          "Le fuselage avant de"
        ]
      },
      {
        "type": "text",
        "text": "petite surface est soumis à la force du vent avec un bras de levier de petite dimension"
      },
      {
        "type": "list",
        "items": [
          "Le fuselage arrière et"
        ]
      },
      {
        "type": "text",
        "text": "l’empennage vertical de grande surface est soumis à la même force du vent avec un grand bras de levier."
      },
      {
        "type": "text",
        "text": "L’AVION, SANS ACTION DU PILOTE, S’ORIENTE COMME UNE GIROUETTE FACE AU VENT"
      },
      {
        "type": "text",
        "text": "ACTIONS PILOTE"
      },
      {
        "type": "list",
        "items": [
          "Freiner"
        ]
      },
      {
        "type": "text",
        "text": "aérodynamiquement l’aile extérieure par inclinaison vers le bas de l’aileron (manche du côté du vent)."
      },
      {
        "type": "list",
        "items": [
          "Créer une force"
        ]
      },
      {
        "type": "text",
        "text": "aérodynamique contrant l’effet du vent sur l’empennage vertical par déplacement de la gouverne de direction vers l’extérieur (palonnier à l’inverse du côté du vent)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.7 - Le contrôle de la vitesse"
      },
      {
        "type": "text",
        "text": "Un avion est calculé pour obtenir de bonnes performances de vitesse. Mais il doit également pouvoir évoluer à différentes vitesses, ne serait-ce que pour décoller ou atterrir."
      },
      {
        "type": "text",
        "text": "Par ailleurs les limitations structurelles de l’avion ne doivent pas être dépassées afin de ne pas provoquer de déformations permanentes aux ailes ou au fuselage. Ces efforts aérodynamiques sont dépendants prioritairement de la vitesse"
      },
      {
        "type": "text",
        "text": "Enfin, pour optimiser le trafic aérien, les aiguilleurs du ciel peuvent imposer des vitesses aux avions afin d’assurer l’espacement entre eux."
      },
      {
        "type": "text",
        "text": "Pour contrôler cette vitesse, le pilote dispose de deux possibilités :"
      },
      {
        "type": "list",
        "items": [
          "le moteur : la commande de gaz permet au pilote de réguler la puissance fournie par le"
        ]
      },
      {
        "type": "text",
        "text": "moteur. Il peut ainsi contrôler la vitesse de l'avion pour éviter de dépasser les limites autorisées."
      },
      {
        "type": "list",
        "items": [
          "l’attitude de l’avion : le contrôle de la vitesse est proportionnel à l’angle d’incidence de"
        ]
      },
      {
        "type": "text",
        "text": "l’avion (incidence = angle entre l’axe longitudinal de l’avion et sa trajectoire)."
      },
      {
        "type": "text",
        "text": "Pour contribuer à cette réalisation, les avions sont munis de volets de courbure (augmentation de la surface de l’aile et de sa courbure moyenne) et de freins aérodynamiques :"
      },
      {
        "type": "list",
        "items": [
          "les aérofreins (sortes de plaques que l'on déploie perpendiculairement à l'avion pour"
        ]
      },
      {
        "type": "text",
        "text": "offrir une plus grande traînée et ainsi réduire la vitesse), et L l V E N T"
      },
      {
        "type": "text",
        "text": "R E L A T I F S S"
      },
      {
        "type": "list",
        "items": [
          "les spoilers qui ont pour effet de diminuer la portance, ceci permet donc d’augmenter"
        ]
      },
      {
        "type": "text",
        "text": "l’incidence pour maintenir un palier (horizontal) et de diminuer la vitesse, de plus ceci augmente la trainée de l’avion. A l’atterrissage, la force de frottement est augmentée rendant le freinage plus efficace."
      },
      {
        "type": "text",
        "text": "Spoilers de Boeing 747 Effets aérodynamiques du spoiler : diminution de la portance et freinage accentué"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.8 - La compensation statique des commandes"
      },
      {
        "type": "text",
        "text": "Les surfaces mobiles permettant le contrôle de la trajectoire de l'avion sont soumises aux mêmes efforts aérodynamiques que le reste de la structure. Lorsqu'on les bouge pour modifier la trajectoire de l'avion, les écoulements autour des gouvernes sont perturbés et peuvent induire des oscillations de celle-ci."
      },
      {
        "type": "text",
        "text": "Ces oscillations sont dangereuses car l'avion peut devenir incontrôlable. Pour éviter que cela puisse se produire, les commandes sont équilibrées statiquement (on dispose des masses d’équilibrage amortissant par leur inertie la mise en vibrations de la gouverne) ou (et) elles sont munies d'une petite surface appelée TAB qui permet d'amortir très fortement les oscillations des gouvernes."
      },
      {
        "type": "text",
        "text": "Les tabs des avions de tourisme lents sont des petites plaques métalliques disposées sur le bord de fuite des gouvernes qui sont calées en atelier et réajustées finement après vol de contrôle."
      },
      {
        "type": "text",
        "text": "Si les avions sont plus rapides il est nécessaire de permettre la modification du calage des tabs en vol, ils portent alors le nom de compensateurs."
      },
      {
        "type": "text",
        "text": "Il existe aussi divers systèmes qui permettent de régler automatiquement la position des tabs en fonction de la vitesse et de la position des gouvernes."
      },
      {
        "type": "text",
        "text": "Le pilote ne contrôle pas la position des tabs, par contre il existe en général un contrôle de la position des compensateurs à bord du cockpit."
      },
      {
        "type": "text",
        "text": "Le dessin suivant vous montre comment peuvent se présenter ces surfaces."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.4.9 - Les dispositifs de transmission"
      },
      {
        "type": "text",
        "text": "Pour commander les gouvernes le pilote dispose d'un manche ou d'un volant et d'un palonnier. Le manche (ou le volant) permet de commander :"
      },
      {
        "type": "list",
        "items": [
          "La gouverne de profondeur par un mouvement en avant ou en arrière et",
          "Les ailerons (gauchissement) par un mouvement à droite ou à gauche."
        ]
      },
      {
        "type": "text",
        "text": "Pour envoyer l'ordre donné aux commandes par le pilote vers les gouvernes, on utilise divers systèmes de transmission."
      },
      {
        "type": "text",
        "text": "Le plus ancien (mais encore très utilisé en aviation générale) consiste à transmettre le mouvement du manche vers les commandes par l'intermédiaire de câbles métalliques et de poulies."
      },
      {
        "type": "text",
        "text": "1 - L’action du manche (ou volant) vers l’arrière entraîne le câble du bas vers l’avant et tire la gouverne de profondeur vers le haut d’où changement de trajectoire de l’avion vers la montée si vitesse suffisante et inversement pour descendre"
      },
      {
        "type": "text",
        "text": "2 - Les mouvements du gauchissement permettent de créer un mouvement opposé des deux ailerons."
      },
      {
        "type": "text",
        "text": "L’inclinaison du manche à gauche, entraîne la montée de l’aileron gauche et la descente de l’aileron droit par transmission câblées ou tubulaires."
      },
      {
        "type": "text",
        "text": "L’aile gauche s’enfonce alors tandis que l’aile droite remonte. Un mouvement du manche vers la droite provoque les effets inverses."
      },
      {
        "type": "text",
        "text": "3 - La commande de direction est assurée par action sur les palonniers."
      },
      {
        "type": "text",
        "text": "Le déplacement du palonnier droit vers l’avant entraîne par câble la gouverne verticale de direction vers la droite. Le nez de l’avion tourne alors vers la droite."
      },
      {
        "type": "text",
        "text": "Inversement, si on enfonce le pied gauche, le pied droit revient et la gouverne de direction tourne autour de son axe dans le même sens que le palonnier. Le nez de l’avion tourne alors vers la gauche."
      },
      {
        "type": "text",
        "text": "Le principe de ce type de transmission est donné sur le schéma ci-dessous."
      },
      {
        "type": "text",
        "text": "Ce type de transmission est encore très utilisé pour les avions légers. Il est simple à fabriquer et à entretenir et s'avère très fiable. Son inconvénient principal est que les efforts aérodynamiques sur les gouvernes sont transmis par les câbles. Le pilote doit donc exercer un effort d'autant plus important que la vitesse de vol est grande."
      },
      {
        "type": "text",
        "text": "Il n'est donc pas envisageable d'utiliser ce type de transmission pour des avions très rapides ou de trop grande taille (les gouvernes sont alors de grande dimension également et les efforts à fournir pour les manœuvrer sont trop importants)."
      },
      {
        "type": "text",
        "text": "Il est possible de rencontrer des transmissions sur le même principe mais utilisant de tubes métalliques (appelés bielles) à la place des câbles."
      },
      {
        "type": "text",
        "text": "Avec l'augmentation de la taille et de la vitesse de vol des avions, il a fallu mettre au point des dispositifs de transmission permettant de réduire les efforts fournis par le pilote pour actionner les gouvernes. La solution adoptée consiste à utiliser l'énergie hydraulique ou électrique."
      },
      {
        "type": "text",
        "text": "Lorsque le pilote actionne le manche ou le palonnier pour commander un mouvement de l'avion, le mouvement est transmis à une timonerie en tubes métalliques (comme dans le dispositif précédent), ceux-ci mettent en œuvre un dispositif de servocommande hydraulique ou électrique."
      },
      {
        "type": "text",
        "text": "Cette servocommande démultiplie l’effort musculaire et le régule en fonction des paramètres opérationnelles de l’avion qui ont été démontrés et configurés par le constructeur."
      },
      {
        "type": "text",
        "text": "En cas de circuit hydraulique, le niveau de l’hydraulique doit être vérifié et la pression maintenue et contrôlée en permanence."
      },
      {
        "type": "text",
        "text": "Par ailleurs, les servocommandes altèrent la sensibilité du pilote aux efforts pour manœuvrer les commandes, il est donc nécessaire d’adjoindre dans ce cas un système de sensibilité artificielle (sorte de retour de force en quelque sorte). En raison de la complexité et du coût de ces systèmes, ce type de dispositif est très peu employé sur les avions légers."
      },
      {
        "type": "text",
        "text": "Sur les avions commerciaux de nouvelle génération, la transmission des ordres aux servocommandes est effectuée non plus par bielles et tubes métalliques mais uniquement par transmission électrique."
      },
      {
        "type": "text",
        "text": "Les ordres donnés par le pilote sur les commandes sont analysés par un ordinateur qui les traduits en signaux électriques qui mettent en œuvre des petits moteurs électriques appropriés aux servocommandes hydrauliques chargés d’orienter les gouvernes. Ce type de commandes est appelé commandes de vol électriques (en anglais, Fly By Wire (FBW))."
      },
      {
        "type": "text",
        "text": "L’avantage de ce système est l’analyse permanente via l’ordinateur de la conformité de l’ordre du pilote avec l’effet souhaité et en accord avec les préconisations d’emploi de l’aéronef. De plus ce dispositif de contrôle de l’effort et du mouvement régule et interdit toute manœuvre dangereuse, brusque ou irréfléchie du pilote."
      },
      {
        "type": "text",
        "text": "Ce type de transmission est longtemps resté dans le domaine militaire et compte tenu de sa fiabilité et du contrôle permanent des écarts permis par le constructeur, de nombreux avions de lignes récents en sont équipés."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "2.5 - Types d’effort, les matériaux et conception d'un avion"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.1 - Efforts appliqués sur un avion et matériaux de construction utilisés"
      },
      {
        "type": "text",
        "text": "Lors de ses évolutions dans l'air un avion subit des forces d'origine aérodynamique et supporte les effets des accélérations engendrées par les changements de trajectoire. Les différentes parties de la structure et notamment les ailes sont soumises à des contraintes de nature variées. Le schéma ci-dessous présente les différents cas se présentant au cours d'un vol :"
      },
      {
        "type": "text",
        "text": "Une aile, du fait de la portance, subit une contrainte en flexion. Lors des évolutions en virage, une contrainte en torsion va s'ajouter. Si on observe les ailes d'un planeur en virage serré, on se rend compte que l'extrados subit une contrainte en compression et que l'intrados une contrainte en traction."
      },
      {
        "type": "text",
        "text": "Les différents rivets subissent des contraintes en cisaillement. Il est très important de calculer au préalable les efforts que les différentes parties de l'avion vont devoir subir au cours du vol afin de choisir un matériau adapté et de dimensionner correctement la taille et l'épaisseur des pièces de la structure. Les contraintes sont très différentes selon la partie de l'avion que l'on considère. Il est donc possible que les matériaux retenus ne soient pas les mêmes pour le fuselage et la voilure, par exemple. Selon la taille et le domaine de vitesses de vol de l'avion, l'intensité des contraintes varie beaucoup et amène à choisir des matériaux différents et des géométries variées."
      },
      {
        "type": "text",
        "text": "Historiquement le premier matériau de construction utilisé en aéronautique a été le bois. Il est à la fois souple et résistant et des espèces telles que l'épicéa, l'acajou, le frêne ou le sapin permettent de construire des structures solides. Le bois est utilisé sous forme de bois plein ou de contre-plaqué."
      },
      {
        "type": "text",
        "text": "Les pièces sont assemblées par collage. La structure est recouverte de toile (lin, coton, dacron) tendue dont le rôle est de donner la forme aux profils des différents éléments. Pour des avions rapides il faut remplacer le revêtement en toile par des plaques de contre-plaqué."
      },
      {
        "type": "text",
        "text": "Les structures en bois nécessitent un entretien régulier et sont sensibles aux conditions météorologiques. De plus l'entoilage demande à être régulièrement refait. Pour obtenir une rigidité suffisante pour supporter les contraintes liées aux avions rapides et de grande taille, il est devenu nécessaire d'utiliser des alliages métalliques. Les essais ont porté sur la mise au point d'alliages à la fois légers, résistants et peu sensibles à la corrosion."
      },
      {
        "type": "text",
        "text": "En pratique, on utilise surtout le Duralumin (alliage à base d'Aluminium et de cuivre). Le Duralumin de qualité aéronautique est appelé AU4G dans la nomenclature des alliages d'Aluminium. Les avions à structure métallique sont plus lourds que ceux en bois. Cela nécessite donc des moteurs plus puissants. Il arrive que dans un souci de gain de poids on utilise une structure mixte (fuselage métallique et ailes en bois) ou que certaines parties de la structure soient en bois (gouvernes)."
      },
      {
        "type": "text",
        "text": "L'avantage du revêtement métallique réside dans le fait qu’il participe à la rigidité de l'avion si les tôles utilisées sont assez épaisses."
      },
      {
        "type": "text",
        "text": "Les progrès effectués ces quinze dernières années sur les matériaux composites à base de fibres de carbone et de polymères ont permis la mise au point de matériaux très légers qui présentent la particularité d'être assez souples (donc déformables) mais supportant de très grosses contraintes sans rupture ni déformations résiduelles. Les matériaux composites peuvent prendre n'importe"
      },
      {
        "type": "text",
        "text": "quelle forme. Le principe de fabrication des pièces en composite consiste à réaliser un moule dans lequel on creuse la forme de la pièce. On peut ainsi donner à la structure des formes très complexes que l'on ne peut pas réaliser avec une structure métallique ou en bois. Les derniers progrès permettent même de réaliser des pièces demandant une forte rigidité."
      },
      {
        "type": "text",
        "text": "La réalisation d'un avion exige donc un choix de matériaux adapté à l’utilisation choisie (transport, voyage, voltige,) et aux contraintes en découlant. En règle générale, sur les avions modernes la construction fait appel au Duralumin pour l'ossature de l'avion et à des alliages légers ou des matériaux composites pour le revêtement de l'ossature."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.2 - Construction en bois coffré ou bois entoilé"
      },
      {
        "type": "text",
        "text": "Cette technique, la plus ancienne, utilise des bois résineux de type Hemlock, Spruce ou Pin d'Orégon, des bois durs de type Frêne ou Hêtre et des feuilles de contreplaqué d'okoumé ou de bouleau."
      },
      {
        "type": "text",
        "text": "La structure réalisée est ensuite entoilée avec des tissus de lin, de coton ou des tissus synthétiques de type dacron, ou coffrée. Certains appareils réalisés ainsi il y a plus de 50 ans et ayant été ré- entoilés tous les 15 ans volent toujours de façon admirable."
      },
      {
        "type": "text",
        "text": "Avantages Inconvénients Facilité de réalisation Conditions de température et d'humidité Facilité de rattrapage des erreurs Formes courbes difficiles à réaliser Légèreté Formes évolutives difficiles à réaliser Bon vieillissement Manque de respect du profil entre nervures Très bonne résistance aux efforts Déformation à grande vitesse"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.3 - Construction en tubes d'acier"
      },
      {
        "type": "text",
        "text": "Cette technique utilise des tubes d'acier spéciaux (25CD4S, 15CDV6) assemblés en treillis et soudés en atmosphère neutre. L'entoilage est ensuite réalisé directement sur le treillis ou sur une structure secondaire en bois ou aluminium."
      },
      {
        "type": "text",
        "text": "Ce type de construction est principalement rencontré pour les gouvernes et fuselages d'appareils de voltige, ces parties travaillant peu."
      },
      {
        "type": "text",
        "text": "Avantages Inconvénients Très grande rigidité Soudure en atmosphère neutre Treillis initial très simple Demande un banc d'assemblage Facilité de reproduction du treillis Nécessite un habillage conséquent"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.4 - Construction en aluminium"
      },
      {
        "type": "text",
        "text": "Cette technique consiste à utiliser des tôles d'alliage d'aluminium (AU4G 2017/2024) assemblées par rivetage entre elles et sur des profils d'aluminium extrudés."
      },
      {
        "type": "text",
        "text": "De nombreux appareils construits selon cette technique et ayant plus de 30 ans volent encore sans avoir subi de réfection notoire. Cette technique utilisée dans l'industrie est apparue au début des années 70 chez les constructeurs amateurs."
      },
      {
        "type": "text",
        "text": "Avantages Inconvénients Pas de conditions de réalisation Outillage spécifique Nombre de pièces réduit Sensibilité à la corrosion Rapidité de construction Difficulté de réalisation de formes évolutives Pas d'attente entre assemblages Accumulation de fatigue suite aux efforts Bon respect des formes et profils"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.5 - Construction composite"
      },
      {
        "type": "text",
        "text": "Cette technique, la plus récente, utilise des tissus résistants et travaillants comme la fibre de verre, de carbone ou de kevlar, et imprégnés de résine thermodurcissable de type polyester ou époxy."
      },
      {
        "type": "text",
        "text": "Les surfaces sont élaborées sur des pains de mousse mis en forme ou par mise en place du complexe composite dans un moule en creux."
      },
      {
        "type": "text",
        "text": "Avantages Inconvénients Possibilité infinie de formes Lourd Respect absolu des profils Sensible à la chaleur Nombre réduit de pièces Allergie humaine aux produits utilisés"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.6 - Structure d’un fuselage"
      },
      {
        "type": "text",
        "text": "Pour concevoir un fuselage, il existe trois solutions classiques. La première, et la plus ancienne, consiste à fabriquer un squelette du fuselage à l'aide de poutres en bois ou en métal."
      },
      {
        "type": "text",
        "text": "Les poutres situées dans le sens de la longueur de l'avion sont appelées longerons et les autres sont appelées traverses. Ce type de structure est appelé treillis. Initialement les fuselages étaient constitués d'un treillis en bois qui n'était même pas recouvert."
      },
      {
        "type": "text",
        "text": "Les progrès des études d'aérodynamique ont amené à recouvrir le treillis de toile."
      },
      {
        "type": "text",
        "text": "Aujourd'hui ce type de structure est parfois utilisé avec un treillis en tubes de Duralumin soudés. Ce type de structure est représenté sur la photo ci-contre."
      },
      {
        "type": "text",
        "text": "Une deuxième solution consiste à fabriquer des éléments transversaux appelés cadres et à fixer dessus le revêtement."
      },
      {
        "type": "text",
        "text": "Le revêtement participe alors de façon très importante à la rigidité de l'ensemble et doit supporter une part conséquente des contraintes exercées sur le fuselage."
      },
      {
        "type": "text",
        "text": "On le qualifie alors de travaillant. Ce type de structure est appelé structure monocoque."
      },
      {
        "type": "text",
        "text": "Une troisième solution consiste à appuyer des longerons sur les cadres. Ceux-ci assurent alors la rigidité de la structure à la place du revêtement qui n'est plus travaillant et peut donc être plus léger."
      },
      {
        "type": "text",
        "text": "Toutefois les longerons alourdissent la structure. Pour gagner du poids, on minimise le nombre de longerons et on les assiste dans leur rôle par des lisses, encore appelées raidisseurs. Ce sont des barres transversales qui relient les cadres également mais elles sont plus petites que les longerons. Ce type de structure est appelé semi- monocoque. Il est très courant."
      },
      {
        "type": "text",
        "text": "Il est également fréquent que le fuselage d’un avion soit construit en plusieurs tronçons dont la structure est différente. Cela permet d’optimiser le poids de l’appareil en choisissant la structure en fonction des contraintes appliquées sur telle ou telle partie de fuselage."
      },
      {
        "type": "text",
        "text": "La photo ci-dessus présente un tronçon de fuselage d'Airbus. Les cadres et les lisses de la partie avant du fuselage de l’A300-600ST Béluga sont ici bien visibles."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "2.5.7 - Structure d'une aile"
      },
      {
        "type": "text",
        "text": "Pour les ailes on distingue également trois structures classiques. La première est dite mono longeron. Elle est surtout employée dans la construction en bois et toile ou bois et contre-plaqué."
      },
      {
        "type": "text",
        "text": "Toutefois il arrive qu'elle soit retenue pour les autres types de construction. Un longeron traverse toute l'envergure de l'aile sur la partie avant et permet de la fixer au fuselage."
      },
      {
        "type": "text",
        "text": "Un faux longeron traverse l'aile dans sa partie arrière sans être fixé au fuselage. Des éléments transversaux relient les deux."
      },
      {
        "type": "text",
        "text": "Ces éléments peuvent être de simples traverses ou des nervures. Les nervures jouent le rôle des cadres du fuselage et ont la forme précise du profil de l'aile."
      },
      {
        "type": "text",
        "text": "Il est plus fréquent d'observer une structure multi longerons. Dans ce type d'architecture, l'aile présente au moins deux longerons et un certain nombre de faux longerons qui augmentent la rigidité."
      },
      {
        "type": "text",
        "text": "Sur les éléments longitudinaux s'appuient de nombreuses nervures. Cela permet d'obtenir des structures assez rigides pour construire des ailes de très grande envergure ou des ailes supportant les grandes contraintes des très grandes vitesses. La photo ci- dessous présente ce type de structure."
      },
      {
        "type": "text",
        "text": "Une autre structure classique est celle de l'aile dite en caissons. L'aile comporte alors deux longerons, un en avant et un en arrière de la structure. Les deux longerons sont reliés par des nervures et la rigidité de l'ensemble est assurée en partie par le revêtement de l'aile. La partie extérieure des ailes d'Airbus en est un bon exemple."
      },
      {
        "type": "text",
        "text": "Les empennages présentent exactement les mêmes structures que les ailes. Toutefois leur petite taille, comparée à celle des ailes, autorise une large utilisation de la structure mono longeron ou en caisson."
      }
    ]
  },
  {
    "id": "les-groupes-motopropulseurs",
    "number": "3",
    "title": "Les groupes motopropulseurs",
    "pages": [
      35,
      58
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Le Groupe Moto Propulseur comprend le moteur et son dispositif d’avancement de l’avion (hélice, propulseur, réaction, …). Il est fixé à la cellule de l'avion par le bâti moteur (avion léger) et isolé de la cabine par la cloison pare-feu ou sur un mât de liaison (avion à réaction)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.1 - LE MOTEUR A PISTONS"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.1 - Type de moteurs"
      },
      {
        "type": "text",
        "text": "Le type le plus courant de moteur en aéronautique est le même que pour la propulsion des engins terrestres : le moteur à explosion. Certains moteurs de voiture (notamment des moteurs Volkswagen) sont montés sur des avions."
      },
      {
        "type": "text",
        "text": "Plusieurs types de moteurs ont été utilisés, que ce soit en disposition de cylindres (en ligne, en V, à plat ou en étoile) ou en nombre de cylindres (de 1 à 36)."
      },
      {
        "type": "text",
        "text": "Les configurations les plus courantes sont les suivantes :"
      },
      {
        "type": "text",
        "text": "L’évolution de ces moteurs dont le mode de fonctionnement est identique a été basée sur la recherche d'un gain de poids qui demande l'utilisation de matériaux spécifiques, sur la fiabilité, sur sa consommation, sur la facilité des maintenances et naturellement sur son coût."
      },
      {
        "type": "text",
        "text": "En général ils utilisent un carburant spécial (l'essence aviation 100 LL) à faible teneur en plomb et à indice d’octane plus élevé que celle que des carburants classiques. Il existe des moteurs aviation qui fonctionnent au \"supercarburant\" et même depuis peu des moteurs diesel."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.2 - Principe de fonctionnement d’un moteur à explosion"
      },
      {
        "type": "text",
        "text": "Le fonctionnement de ces moteurs se décompose en 4 temps (4 phases) caractéristiques qui utilise une détente (explosion d’un mélange air-essence comprimé) pour pousser un piston relié à un dispositif chargé de transformer un mouvement linéaire en un mouvement circulaire entrainant une roue pour la voiture ou une hélice pour un avion."
      },
      {
        "type": "text",
        "text": "Sur les quatre temps, la détente ou explosion est le seul temps qui engendre de la puissance."
      },
      {
        "type": "text",
        "text": "1) la phase d'admission : Le cylindre est initialement vide et le piston est en position haute. Ce dernier est descendu vers le bas du cylindre. Il crée, lors de son mouvement, une aspiration. On ouvre la soupape d'admission et le mélange air-carburant est aspiré dans le cylindre."
      },
      {
        "type": "text",
        "text": "2) la phase de compression : La soupape d’admission se ferme, le piston remonte vers le haut du cylindre en comprimant fortement les gaz. Lors de la compression, la pression et la température des gaz augmentent fortement (plusieurs centaines de degrés)."
      },
      {
        "type": "text",
        "text": "3) la phase de combustion : Lorsque les gaz sont comprimés, on déclenche une étincelle en haut du cylindre (par l'intermédiaire de la bougie). Le mélange air-carburant s'enflamme et se détend (explosion du mélange), il pousse violemment sur le piston qui est alors envoyé vers le bas en faisant tourner le vilebrequin. C'est dans cette phase que le piston est moteur."
      },
      {
        "type": "text",
        "text": "4) la phase d'échappement : Entraîné par l’inertie du moteur en rotation, le piston remonte et la soupape d'échappement s’ouvre."
      },
      {
        "type": "text",
        "text": "Les gaz brûlés sont poussés par le piston vers le tuyau d’échappement et l’atmosphère."
      },
      {
        "type": "text",
        "text": "Le cycle du moteur peut ainsi recommencer. Dans les phases d'admission, de compression et d'échappement, le piston est entraîné par la rotation du vilebrequin. La géométrie de celui-ci permet de décaler les cylindres entre eux dans le cycle afin d'assurer un fonctionnement le plus régulier possible."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.3 - Description d’un moteur à explosion"
      },
      {
        "type": "text",
        "text": "Le schéma ci-dessous vous montre la constitution d'un moteur à explosion à 4 cylindres."
      },
      {
        "type": "text",
        "text": "Le carter est l’enveloppe de tous les organes en mouvement comme les pistons, les bielles, le vilebrequin, …"
      },
      {
        "type": "text",
        "text": "Pour réduire le poids, pas de liquide de refroidissement mais utilisation du vent de la vitesse. Les quatre cylindres sont dotés de nombreuses ailettes de refroidissement."
      },
      {
        "type": "text",
        "text": "A l’intérieur de ceux-ci un piston mobile se déplace sous l’effet de l’explosion des gaz. Il est relié au vilebrequin par une bielle."
      },
      {
        "type": "text",
        "text": "Le vilebrequin permet de transmettre le mouvement du piston à l’arbre moteur, mais aussi de faire remonter le piston dans le cylindre pour comprimer les gaz avant la combustion. Le carter en bas du moteur contient l’huile qui assure la lubrification des parties mobiles."
      },
      {
        "type": "text",
        "text": "La tête du cylindre comprend des soupapes reliées aux pipes d’admission pour faire entrer le mélange air-carburant et aux pipes d’échappement pour évacuer les gaz brûlés."
      },
      {
        "type": "text",
        "text": "Une bougie permet de réaliser l’étincelle qui active la combustion."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.4 - La distribution"
      },
      {
        "type": "text",
        "text": "Afin d’ouvrir et fermer les soupapes d’admission et d’échappement aux moments opportuns, on a relié par engrenage un arbre à cames qui va pousser une tige de culbuteur, un culbuteur et une soupape, l’ensemble de système s’appelle la distribution. bon moment, on utilise"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.5 - La carburation"
      },
      {
        "type": "text",
        "text": "Rôle : - Choix du réglage de puissance du moteur ;"
      },
      {
        "type": "list",
        "items": [
          "Réguler l’essence nécessaire au fonctionnement ;",
          "Élaborer le mélange adapté à la puissance demandée ;",
          "Alimenter les cylindres dans toute la gamme de régimes."
        ]
      },
      {
        "type": "text",
        "text": "Deux systèmes de gestion de l’alimentation air-essence sont utilisés. Le mélange Air-Essence est créé soit :"
      },
      {
        "type": "list",
        "items": [
          "En amont des cylindres"
        ]
      },
      {
        "type": "text",
        "text": "C’est le moteur à carburateur"
      },
      {
        "type": "list",
        "items": [
          "Au cœur des cylindres"
        ]
      },
      {
        "type": "text",
        "text": "C’est le moteur à injection."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.5.1 - Le moteur à carburateur"
      },
      {
        "type": "text",
        "text": "Rôle du carburateur : Il consiste à réaliser un mélange entre de l'air et du carburant vaporisé (mélange air-carburant) et à le diriger vers les pipes d'admission des cylindres."
      },
      {
        "type": "text",
        "text": "Le schéma ci-dessous décrit le \"circuit carburant\" type d'un avion équipé d’un carburateur :"
      },
      {
        "type": "text",
        "text": "Ce carburateur assure l'élaboration et la diffusion du mélange air essence avant son introduction dans les cylindres."
      },
      {
        "type": "text",
        "text": "Lors de la rotation du moteur, une dépression est créée par déplacement d’un piston dans un cylindre qui aspire dans les cylindres le mélange carburé. La puissance délivrée par le moteur est fonction du volume de mélange aspiré. On peut modifier ce volume et donc la puissance en changeant la position du papillon des gaz grâce à la manette de gaz (accélérateur, couleur normalisée « NOIRE »)."
      },
      {
        "type": "text",
        "text": "Soupape"
      },
      {
        "type": "text",
        "text": "Le schéma ci-contre représente la position du papillon des gaz à pleine puissance."
      },
      {
        "type": "text",
        "text": "Le flotteur et le pointeau maintiennent un débit correct en provenance des réservoirs via les canalisations et évitent ainsi une suralimentation du moteur (moteur noyé)"
      },
      {
        "type": "text",
        "text": "Le mélange idéal devant parvenir au cylindre est sensiblement égal à 1 gramme d'essence pour 15 grammes d'air (Mélange 1/15e)."
      },
      {
        "type": "text",
        "text": "La densité de l'air variant avec la température et l'altitude, sur la plupart des moteurs on peut régler en vol les proportions du mélange air / essence grâce à la commande de richesse encore dénommée correcteur altimétrique ou mixture ou commande de mélange (couleur normalisée « ROUGE »)."
      },
      {
        "type": "text",
        "text": "Un mélange trop riche en carburant va laisser du carburant imbrûlé lors de la combustion, cela augmente inutilement la consommation et ne permet pas au moteur d’atteindre sa température normale de fonctionnement. Un mélange trop pauvre en carburant peut entraîner l'extinction du moteur et provoque un échauffement du moteur."
      },
      {
        "type": "text",
        "text": "Sur certains moteurs (à partir de 200 Cv environ) on peut rétablir cette diminution de pression et donc de puissance en utilisant un turbocompresseur qui comprime l’air ambiant et l’injecte à la pression optimum permettant un maintien des performances du moteur comme s’il fonctionnait à basse altitude."
      },
      {
        "type": "text",
        "text": "Inconvénient du moteur à carburateur : le givrage Il s'agit d'un phénomène dangereux en aviation légère, en effet le givrage de l'intérieur du carburateur arrête l'arrivée de carburant au moteur."
      },
      {
        "type": "text",
        "text": "Le mélange air / essence s'effectue dans une zone de dépression, le gicleur étant placé dans un étranglement de l'arrivée d'air. La vaporisation de l'essence et la détente du mélange sont génératrices d’un refroidissement (de l’ordre de 20 à 25 °) qui occasionne le givrage de la vapeur d'eau contenue dans l'air. La glace ainsi formée obture plus ou moins l'admission de carburant."
      },
      {
        "type": "text",
        "text": "Sur un avion à calage fixe, le givrage se détecte par une chute lente (au début) du régime moteur, alors que sur un avion à calage variable et vitesse constante, il est annoncé par une chute de la pression d'admission."
      },
      {
        "type": "text",
        "text": "Les conditions propices au givrage carburateur sont : 1 - Une température carburateur comprise entre - 15 et 0 degré, la température la plus défavorable étant de - 5. Avec une chute de l’ordre de 20° par rapport à l'air extérieur, si 15° à l’extérieur, on mesure - 5° au carburateur. Cette température carburateur peut être surveillée par un indicateur de température carburateur."
      },
      {
        "type": "text",
        "text": "2 - En atmosphère humide, le risque de givrage est naturellement plus grand au niveau des basses couches"
      },
      {
        "type": "text",
        "text": "Pour éviter le givrage carburateur, un dispositif dénommé réchauffe carbu permet le réchauffage de l'air admis (en général de l’ordre de 50°). Ce dispositif permet de prendre l'air, non plus directement à l'extérieur, mais via un manchon situé autour du pot d’échappement du moteur (gaz brulés évacués vers l’extérieur avoisinent une température d’environ 850° C)."
      },
      {
        "type": "text",
        "text": "3 - Une température carburateur comprise entre - 15 et 0 degré, la température la plus défavorable étant de - 5. Avec une chute de l’ordre de 20° par rapport à l'air extérieur, si 15° à l’extérieur, on mesure - 5° au carburateur. Cette température carburateur peut être surveillée par un indicateur de température carburateur."
      },
      {
        "type": "text",
        "text": "4 - En atmosphère humide, le risque de givrage est naturellement plus grand au niveau des basses couches"
      },
      {
        "type": "text",
        "text": "Pour éviter le givrage carburateur, un dispositif dénommé réchauffe carbu permet le réchauffage de l'air admis (en général de l’ordre de 50°). Ce dispositif permet de prendre l'air, non plus directement à l'extérieur, mais via un manchon situé autour du pot d’échappement du moteur (gaz brulés évacués vers l’extérieur avoisinent une température d’environ 850° C)."
      },
      {
        "type": "text",
        "text": "Le réchauffage carburateur contre le givrage"
      },
      {
        "type": "text",
        "text": "Ce dispositif de réchauffage possède toutefois un inconvénient. L’air réchauffé ainsi admis est moins dense ce qui entraîne une augmentation de la richesse du mélange (le rapport 1/15 n'est plus respecté) et une diminution de puissance."
      },
      {
        "type": "text",
        "text": "Une autre solution permettant de s’affranchir presque totalement du risque de givrage carburateur est fournie par l’adoption des moteurs à injection."
      },
      {
        "type": "text",
        "text": "En conclusion, le moteur à carburateur possède de nombreux inconvénients dus à sa conception :"
      },
      {
        "type": "list",
        "items": [
          "Alimentation en mélange carburé et répartition par cylindre inégaux ;",
          "Quantité d’essence injectée en fonction des différences de puissance peu précise ;",
          "Risques de givrage importants dus au passage du mélange air/essence dans le papillon du"
        ]
      },
      {
        "type": "text",
        "text": "carburateur."
      },
      {
        "type": "text",
        "text": "TOUTES CES IMPERFECTIONS ONT MOTIVÉ LA RECHERCHE DE SOLUTIONS TECHNIQUES APPLIQUÉES DANS LE MOTEUR A INJECTION"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.5.2 - Le moteur à injection"
      },
      {
        "type": "text",
        "text": "Les avantages"
      },
      {
        "type": "list",
        "items": [
          "Meilleur rendement (puissance massique accrue avec"
        ]
      },
      {
        "type": "text",
        "text": "consommation spécifique réduite)."
      },
      {
        "type": "list",
        "items": [
          "Meilleure répartition du combustible dans les cylindres (pompe"
        ]
      },
      {
        "type": "text",
        "text": "d’injection et injecteurs calibrés)."
      },
      {
        "type": "list",
        "items": [
          "Réduction importante des risques de givrage (effet venturi du"
        ]
      },
      {
        "type": "text",
        "text": "papillon du bloc injection agissant uniquement sur l’air)."
      },
      {
        "type": "text",
        "text": "Mais également quelques défauts ..."
      },
      {
        "type": "list",
        "items": [
          "Coût plus important à l’achat et en entretien ;",
          "Difficultés de démarrage, notamment à chaud ;",
          "Moteur plus sensible aux variations du mélange carburé."
        ]
      },
      {
        "type": "text",
        "text": "Principaux organes du moteur à injection"
      },
      {
        "type": "text",
        "text": "DEUX TYPES D’INJECTION"
      },
      {
        "type": "text",
        "text": "INDIRECTE"
      },
      {
        "type": "text",
        "text": "DIRECTE"
      },
      {
        "type": "text",
        "text": "Avec ces moteurs à injection, plus de souci de givrage et consommation plus précise."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.6 - L’alimentation en carburant"
      },
      {
        "type": "text",
        "text": "L'alimentation en carburant est assurée soit par gravité (ailes hautes) ou par mécanique (ailes basses). Pour les situations à risques ou en cas de panne d’une pompe mécanique, une seconde pompe peut être disponible par commande électrique."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.7 - L’Allumage du moteur à explosion"
      },
      {
        "type": "text",
        "text": "Son rôle est de fournir l'étincelle qui déclenche la combustion du mélange air essence. L'allumage est effectué par un circuit à magnéto. La magnéto est un organe autonome entraîné par le moteur qui fournit de l'électricité donc ne jamais manipuler une hélice si les magnétos ne sont pas désactivées, (circuit d’amorçage à la masse par clé sur off ou enlevée)"
      },
      {
        "type": "text",
        "text": "Le circuit d'allumage est doublé, chaque circuit est indépendant de l'autre. Chaque magnéto fourni le courant à une bougie par cylindre, il y a donc deux bougies par cylindres."
      },
      {
        "type": "text",
        "text": "Ce système entraîne une commande de circuit magnéto à quatre positions soit : ARRET, GAUCHE, DROITE, GAUCHE + DROITE"
      },
      {
        "type": "text",
        "text": "Et se présente sous la forme : Arrêt Gauche Droite Gauche + Droite Off Left Right Both 1+2"
      },
      {
        "type": "text",
        "text": "Ce système doublé permet d'améliorer la sécurité et la combustion du mélange."
      },
      {
        "type": "text",
        "text": "Lors de la préparation du vol, au sol il est nécessaire, moteur en route, de contrôler le fonctionnement des circuits magnétos en sélectionnant alternativement chacune des rampes d'allumage."
      },
      {
        "type": "text",
        "text": "Au démarrage, la batterie fournit l'électricité nécessaire pour faire tourner le démarreur (moteur électrique) qui entraîne lui-même le moteur et donc les magnétos. Celles-ci fournissent l’étincelle aux bougies et le moteur démarre. Une fois le moteur démarré, le circuit de batterie ne sert qu’à l’alimentation électrique des radios, feux, accessoires et périphériques divers (jauges, appareillages, gyros électriques, …)."
      },
      {
        "type": "text",
        "text": "Le moteur d’avion est donc indépendant de la batterie et devient autonome dès sa mise en marche."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.8 - La lubrification du moteur à explosion"
      },
      {
        "type": "text",
        "text": "Pour réduire l’usure du moteur (frottement des pistons sur cylindres, organes tournants, …), le moteur dispose d’un système de lubrification par huile spécifique."
      },
      {
        "type": "text",
        "text": "De plus, cette circulation d’huile participe au refroidissement de toutes les parties du moteur."
      },
      {
        "type": "text",
        "text": "c'est une huile sous pression, filtrée et refroidie (si nécessaire) qui est délivrée aux différents orifices, stratégiquement placés dans le moteur, afin de lubrifier des éléments comme les paliers, les axes des culbuteurs, l'arbre à cames, le vilebrequin, les parois des cylindres et beaucoup d'autres composants encore."
      },
      {
        "type": "text",
        "text": "Cette huile, bien évidemment, doit être changé (vidange) assez souvent (toutes les 50 heures)."
      },
      {
        "type": "text",
        "text": "PARTICULARITÉS : Pompe aspiration / refoulement à engrenages Dispositif de limitation de la pression d’huile Robinet thermostatique automatique."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.9 - Le refroidissement par air"
      },
      {
        "type": "text",
        "text": "La combustion du carburant produit une chaleur intense qu'il faut évacuer vers l'extérieur. Sur la plupart des moteurs d'avion léger, ce refroidissement est assuré par la circulation de l'air extérieur (refroidissement à air) autour des éléments du moteur."
      },
      {
        "type": "text",
        "text": "Les capots moteur et la casserole d'hélice permettent d'assurer un écoulement aérodynamique ainsi qu'un bon refroidissement du moteur. Dans le capot moteur sont aménagées des prises d'air de refroidissement sur des ailettes de diffusion de la chaleur qui appartiennent par construction aux éléments à refroidir (cylindres) et d'alimentation en air du carburateur. Certains appareils possèdent en plus des volets de capot, petites surfaces mobiles destinées à améliorer la circulation de l'air autour des cylindres."
      },
      {
        "type": "text",
        "text": "Ce système de refroidissement est limité lors du roulage au sol à faible vitesse et des montées à faible vitesse (précautions spécifiques). La température des cylindres peut être indiquée sur le tableau de bord par l'intermédiaire d'un indicateur de température cylindre."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.10 - La gestion de l’énergie électrique"
      },
      {
        "type": "text",
        "text": "Bien que le moteur soit totalement autonome pour fonctionner et n’ait aucun besoin d’une batterie ou d’une génération électrique, de nombreux appareils périphériques utilisent de l’électricité fournie par une BATTERIE DE 12 OU 24 VOLTS."
      },
      {
        "type": "text",
        "text": "Grâce à cet apport, désormais la mise en marche du moteur est sécurisée car plus besoin de prendre l’hélice en main et de la faire tourner jusqu’au démarrage du moteur. Ceci a occasionné de nombreux accidents dans le passé."
      },
      {
        "type": "text",
        "text": "On dispose d’un petit moteur électrique (le démarreur) qui enclenche la rotation du moteur et donc des magnétos couplés par engrenage qui fourniront l’étincelle de mise en marche du moteur."
      },
      {
        "type": "text",
        "text": "Le circuit électrique de bord est constitué de la batterie, du câblage et des protections électriques (fusibles, disjoncteurs, breakers, …), et de l’appareillage de bord (feux de navigation, feu d’anticollision, phare d'atterrissage, appareils de radiocommunication et de navigation, jaugeurs et autres appareils de contrôle, interrupteurs de commande divers, …)."
      },
      {
        "type": "text",
        "text": "Cette batterie est rechargée par un alternateur couplé mécaniquement au moteur. Celui-ci permet d'assurer la génération électrique pour tous les systèmes nécessitant de l'énergie électrique."
      },
      {
        "type": "text",
        "text": "Sur certains avions, il est possible au sol de brancher ce circuit électrique sur un circuit extérieur dénommé groupe auxiliaire de démarrage (batterie faible par exemple ou essais de matériels)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.11 - Contrôle du moteur"
      },
      {
        "type": "text",
        "text": "L’une des conditions de fiabilité du moteur en vol est le respect des paramètres transmis par son constructeur. Pour ce faire le pilote dispose donc de plusieurs instruments :"
      },
      {
        "type": "list",
        "items": [
          "Un tachymètre (compte-tours) qui lui indique le régime de rotation du moteur. Celui-ci est"
        ]
      },
      {
        "type": "text",
        "text": "gradué en tr/min (tours par minute) ou en RPM (Rotations Per Minute) ;"
      },
      {
        "type": "list",
        "items": [
          "Un indicateur de pression d'admission et de débit de carburant ;",
          "Un indicateur de température et de pression de l'huile moteur ;",
          "Un indicateur de pression d’essence ;",
          "Un indicateur de charge de la batterie et",
          "Des jaugeurs de quantité de carburant."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.12 - Performances et utilisations actuelles"
      },
      {
        "type": "text",
        "text": "En 80 ans de développement continu, les moteurs à pistons ont fait des progrès énormes. Les puissances sont passées de 10 à plus de 3500 ch, permettant de propulser les chasseurs de la fin de la seconde guerre mondiale à des vitesses de près de 800 Km/h en palier ou de faire voler des appareils de plus de 150 tonnes."
      },
      {
        "type": "text",
        "text": "Ce type de moteurs à pistons n'est plus employé pour les fortes puissances car les turboréacteurs et les turbopropulseurs offrent des performances plus avantageuses pour des coûts d’exploitation très inférieurs. En revanche, ils restent pour l’instant la seule solution intéressante pour les petites puissances (600 ch maximum)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.13 - L’essence Aviation"
      },
      {
        "type": "text",
        "text": "Le carburant utilisé pour le moteur est une essence aviation. Les essences sont classées selon leur indice d'octane, caractéristique de leur pouvoir antidétonant."
      },
      {
        "type": "text",
        "text": "Le carburant à utiliser est spécifié par le constructeur du moteur, il est indiqué dans le manuel de vol et généralement sur une plaque située à côté de l'orifice de remplissage des réservoirs."
      },
      {
        "type": "text",
        "text": "La contamination de l'essence par de l'eau ou de la poussière est dangereuse. Il est conseillé d'effectuer le plein après le dernier vol de la journée afin d'éviter la condensation due au refroidissement de l’air humide dans les réservoirs durant la nuit (Obligation de purger l’eau des réservoirs le matin avant le premier vol)."
      },
      {
        "type": "text",
        "text": "L'essence est colorée de manière à pouvoir être reconnue immédiatement selon le code : 80 / 87 couleur rose 100 LL couleur bleue 100 / 130 couleur verte"
      },
      {
        "type": "text",
        "text": "L'utilisation de carburant automobile est possible pour certains avions, sous réserve de l'acceptation de ces carburants plombés par le moteur (dans tous les cas, grande méfiance surtout pour vol en altitude)."
      },
      {
        "type": "text",
        "text": "La densité moyenne de l'essence est de 0,72, une approximation correcte dans les calculs de centrage est 0,7 (un litre de carburant pèse 700 grammes)."
      },
      {
        "type": "text",
        "text": "Pratiquement, l’utilisation du mélange essence / air est de 1g d’essence pour 15 g d’air et permet d’effectuer les réglages recommandés par le motoriste en voyage aux puissances ci-après :"
      },
      {
        "type": "list",
        "items": [
          "Croisière économique correspondant à 65% ou",
          "Croisière rapide se rapportant à 75% de la puissance max.",
          "Autonomie max (plus grande durée de vol), environ 55 %."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.1.14 - Les huiles Aviation"
      },
      {
        "type": "text",
        "text": "Il existe deux catégories d'huiles : TYPE D’HUILE Composition Caractéristiques Utilisation Minérale Naphte et paraffine Neutralité chimique Viscosité constante Point éclair élevé"
      },
      {
        "type": "text",
        "text": "Rodage moteur Dispersante Huile minérale"
      },
      {
        "type": "text",
        "text": "+ additifs Pas de résidu de combustion"
      },
      {
        "type": "list",
        "items": [
          "Grands écarts de température"
        ]
      },
      {
        "type": "text",
        "text": "du milieu ambiant"
      },
      {
        "type": "list",
        "items": [
          "Faible viscosité à basse"
        ]
      },
      {
        "type": "text",
        "text": "température"
      },
      {
        "type": "list",
        "items": [
          "Bon démarrage à froid",
          "Bonne lubrification à froid",
          "Grande plage de température"
        ]
      },
      {
        "type": "text",
        "text": "de fonctionnement"
      },
      {
        "type": "list",
        "items": [
          "Propriétés anti-friction"
        ]
      },
      {
        "type": "text",
        "text": "De manière générale toutes les huiles sont miscibles, cependant il; faut éviter de mélanger de l'huile minérale pure et de l'huile dispersante, cette dernière n'étant pas neutre chimiquement"
      },
      {
        "type": "text",
        "text": "Le grade d'une huile correspond à ses qualités de viscosité. Le grade de l'huile à utiliser augmente avec la température ambiante."
      },
      {
        "type": "text",
        "text": "entre -20° et +20 grade 65 commercialement SAE30 entre 0° et 30° grade 80 commercialement SAE40 au-dessus de 15° grade 100 commercialement SAE35"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.2 - L'HÉLICE"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.2.1 - Principe de l'hélice"
      },
      {
        "type": "text",
        "text": "Le premier problème à résoudre pour faire voler un avion fut celui de la propulsion. Pendant longtemps les pionniers de l'aviation ont pensé pouvoir imiter les oiseaux et assurer une propulsion (ainsi que la sustentation) par un battement des ailes."
      },
      {
        "type": "text",
        "text": "Ce n'est que lorsque les hommes sont sortis de cette impasse qu'ils ont pu réussir l'envol d'un plus lourd que l'air."
      },
      {
        "type": "text",
        "text": "L'hélice était déjà connue en propulsion nautique. L'idée est alors venue de l'appliquer à la propulsion aéronautique."
      },
      {
        "type": "text",
        "text": "L'hélice est constituée de pales reliées autour d'un arbre qui définit l'axe de rotation. Les hélices comprennent couramment 2 ou 3 pales Elles sont dites bi ou tripales. Il en existe toutefois qui possèdent 4 ou 5 pales et dans les développements récents de l'aérodynamique des hélices on en conçoit qui en possèderaient plus d'une douzaine."
      },
      {
        "type": "text",
        "text": "Les pales présentent un profil identique aux ailes avec une corde aérodynamique choisie."
      },
      {
        "type": "text",
        "text": "Si on considère un profil de pale situé à une distance r donnée de l'axe, l'angle Cr que fait la corde de la pale avec le plan perpendiculaire à l'axe de rotation est appelé angle de calage de l'hélice."
      },
      {
        "type": "text",
        "text": "Lorsque l'avion est en mouvement à la vitesse V, chaque profil de l'hélice est en rotation autour de l'arbre à la même vitesse angulaire."
      },
      {
        "type": "text",
        "text": "Pendant un tour d'hélice le profil situé à la distance r parcourt la distance : D = 2 x 3,14 x r et la vitesse de ce point en m/h est V m/h = D en m x nombre de t /mn x 60 En bout de pale, la vitesse est de l’ordre de 850 km/h."
      },
      {
        "type": "text",
        "text": "La vitesse en chaque point de l’hélice est différente, il est donc nécessaire de modifier le calage tout au long de la pale. La vitesse circulaire diminuant lorsque l'on se rapproche de l'axe, il faut donc vriller l’hélice pour obtenir la même traction de chaque section de la pale quelle que soit la distance de la section de pale par rapport à l’axe"
      },
      {
        "type": "text",
        "text": "Pour donner une référence de calage, les constructeurs français précisent l'angle pour le profil situé à 70% du rayon maximum de l'hélice."
      },
      {
        "type": "text",
        "text": "L'hélice étant dessinée comme une aile, elle est soumise aux mêmes forces aérodynamiques lorsqu'elle est en rotation."
      },
      {
        "type": "text",
        "text": "La résultante des forces aérodynamiques sur la pale peut se décomposer en une force parallèle à l'axe de rotation de l'hélice et une force perpendiculaire à celui-ci."
      },
      {
        "type": "text",
        "text": "La force parallèle à l'axe de rotation tire l'avion dans son sens. On l'appelle la traction. Elle dépend du calage de l'hélice et du régime de rotation du moteur. La force perpendiculaire à l'axe de rotation est appelée traînée."
      },
      {
        "type": "text",
        "text": "Comme la traînée d'une aile, elle représente la résistance de l'air à l'avancement de la pale."
      },
      {
        "type": "text",
        "text": "Un moteur peu puissant sera souvent muni d'une hélice bipale pour limiter la traînée. Celle-ci dépend en fait de nombreux facteurs :"
      },
      {
        "type": "text",
        "text": "profil des pales, longueur, calage, ..."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.2.2 - Hélice à pas fixe"
      },
      {
        "type": "text",
        "text": "Les premières hélices avaient un calage fixe. La vitesse de rotation de l'hélice est alors directement liée à celle du moteur. L'inconvénient de ce type d'hélice est que le rendement (l'efficacité) varie beaucoup en fonction de la vitesse. Cela revient à utiliser une voiture sans boîte de vitesses."
      },
      {
        "type": "text",
        "text": "On effectue donc un compromis en choisissant un calage qui assure un rendement moyen de l'hélice."
      },
      {
        "type": "text",
        "text": "La conséquence est que l'hélice manque d'efficacité à basse vitesse pour optimiser les performances au décollage ainsi qu'à haute vitesse pour minimiser la consommation en croisière."
      },
      {
        "type": "text",
        "text": "Hélice à pas fixe Avantages : Économique, légère et d’un emploi simple."
      },
      {
        "type": "text",
        "text": "Inconvénients : Rendement moyen, utilisation limitée :"
      },
      {
        "type": "list",
        "items": [
          "soit pour la croisière mais décollage et montée poussifs ;",
          "soit pour décollages et traction efficaces mais croisière lente."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.2.3 - Hélice à pas variable"
      },
      {
        "type": "text",
        "text": "Pour remédier à ces inconvénients, des ingénieurs ont mis au point des hélices à pas variable (calage modifiable en vol). C'est un peu l'équivalent de la boîte de vitesse des voitures."
      },
      {
        "type": "text",
        "text": "R e n d e m e n t Vitesse Rendement moyen de l’ordre de 85% max Plage de vitesses réduite"
      },
      {
        "type": "text",
        "text": "Sens de rotation de l’hélice Portance Traînée Traction Vent relatif"
      },
      {
        "type": "text",
        "text": "En phase de décollage on désire obtenir un maximum de puissance de l'hélice pour des vitesses relativement faibles. On utilise alors un petit calage (petit pas) et le maximum de puissance moteur (régime maximum)."
      },
      {
        "type": "text",
        "text": "En croisière, le but est d'obtenir un maximum d'efficacité de l'hélice pour voler à une vitesse élevée en consommant peu de carburant. Le pilote augmente alors le pas de l'hélice et réduit le régime du moteur."
      },
      {
        "type": "text",
        "text": "Avec ce type d'hélice, on fixe le régime du moteur à une valeur déterminée par le constructeur en fonction du type de croisière désirée (économique, rapide, autonomie max) pour assurer une rotation de l'hélice à vitesse constante et on joue sur le calage de l'hélice pour faire varier la vitesse."
      },
      {
        "type": "text",
        "text": "Tout cela est assuré par des systèmes de régulation basé sur l’équilibrage des forces de trainée des pales. Ceci rend l'ensemble plus complexe qu'avec une hélice à calage fixe."
      },
      {
        "type": "text",
        "text": "Avantages"
      },
      {
        "type": "list",
        "items": [
          "Rendement important sur une large plage de vitesses :",
          "Décollage, traction et montée améliorés ;",
          "Vitesse de croisière supérieure ;",
          "Protection des surrégimes moteur ;",
          "Facilité d’emploi."
        ]
      },
      {
        "type": "text",
        "text": "Inconvénients"
      },
      {
        "type": "list",
        "items": [
          "Coût élevé de l’ensemble"
        ]
      },
      {
        "type": "text",
        "text": "hélice – régulateur ;"
      },
      {
        "type": "list",
        "items": [
          "Maintenance onéreuse ;",
          "Poids plus élevé."
        ]
      },
      {
        "type": "text",
        "text": "Rendement Le rendement est optimal sur une très large plage de vitesses."
      },
      {
        "type": "text",
        "text": "Il est conditionné par l’utilisation d’une puissance comprise entre 70 et 100 % du régime max."
      },
      {
        "type": "text",
        "text": "R e n d e m e n t Vitesse Rendement de l’ordre de 85% max Plage de vitesses importante par adaptation du calage de l’hélice à chaque vitesse."
      },
      {
        "type": "text",
        "text": "Processus de commande"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.2.4 - Hélice tractrice ou propulsive"
      },
      {
        "type": "text",
        "text": "Lorsqu'on modifie le calage de l'hélice, sans changer la vitesse de rotation, on change la direction de la résultante des forces aérodynamiques sur l'hélice."
      },
      {
        "type": "text",
        "text": "En changeant le calage de cette hélice, on se rend compte que la traction change de sens. Elle entraînerait alors l'avion dans l'autre sens."
      },
      {
        "type": "text",
        "text": "Cette idée trouve deux applications pratiques :"
      },
      {
        "type": "list",
        "items": [
          "les hélices propulsives : elles sont placées à l'arrière de l'appareil et leur calage permet de"
        ]
      },
      {
        "type": "text",
        "text": "pousser l'avion en avant."
      },
      {
        "type": "list",
        "items": [
          "L'inversion de poussée comme moyen de freinage sur la piste pour réduire la distance"
        ]
      },
      {
        "type": "text",
        "text": "d'atterrissage des avions lourds. Le couple résistant doit rester inférieur à la limite de résistance des matériaux, d’où l’obligation du respect de l’ordre d’utilisation des manettes de Pression Toujours réduire le couple résistant avant d’augmenter le couple moteur Mise en montée Croisière palier"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "3.3 - LES TURBOMACHINES"
      },
      {
        "type": "text",
        "text": "Le principe du moteur repose sur la loi de Newton concernant l’action et la réaction, on projette vers l’arrière une grande quantité de gaz à très haute vitesse."
      },
      {
        "type": "text",
        "text": "Cette éjection à grande vitesse soit"
      },
      {
        "type": "list",
        "items": [
          "provoque par réaction l’avancement de l’aéronef, cas du statoréacteur ;",
          "entraîne des turbines qui en récupère l’énergie et la transmets à une hélice qui lui est"
        ]
      },
      {
        "type": "text",
        "text": "accouplée, il s’agit du turbopropulseur ;"
      },
      {
        "type": "list",
        "items": [
          "par réaction, l’avion est propulsé vers l’avant. il s’agit du turboréacteur."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.1 - Le statoréacteur - Principe de fonctionnement."
      },
      {
        "type": "text",
        "text": "Le statoréacteur est un système de propulsion par réaction des aéronefs, dont la poussée est produite par éjection de gaz issus de la combustion d'un carburant, généralement le kérosène. Il n'est constitué que d'un tube et ne comporte aucune pièce mobile, d'où le terme « stato » pour statique."
      },
      {
        "type": "text",
        "text": "Premier moteur à réaction de l'histoire, inventé par René Lorin en 1913, il est mécaniquement le plus simple, n'ayant aucune pièce mobile. Le Leduc 010 devient, lors d’un vol d’essai en 1949, le premier avion propulsé par un statoréacteur. Le premier missile opérationnel, le SNCASE SE-4200, s'élance en 1955. L'industrie aéronautique française s'est particulièrement illustrée en établissant un grand nombre de « premières » dans le domaine des statoréacteurs."
      },
      {
        "type": "text",
        "text": "Bien qu'entre Mach 3 et Mach 5, le statoréacteur soit le moteur à réaction le plus efficace, son impossibilité d'assurer la propulsion à vitesse nulle le contraint à céder sa place aux turboréacteurs dans beaucoup d'applications. Par la suite, des statoréacteurs à combustion supersonique, ou superstatoréacteurs, ont été développés pour dépasser les vitesses maximales admissibles du statoréacteur, comprises entre Mach 5 et 6."
      },
      {
        "type": "text",
        "text": "Inconvénient majeur : Il ne peut être utilisé à faible vitesse donc ne peut assurer le déplacement au sol et le décollage. Par contre dans le domaine spatial, des applications majeures sont réalisées grâce à son très grand rendement à grande vitesse."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.2 - Le pulsoréacteur - Principe de fonctionnement."
      },
      {
        "type": "text",
        "text": "Le pulsoréacteur est un moteur à réaction cyclique, breveté indépendamment en Allemagne et en France en 1930, et développé particulièrement pour la bombe volante allemande V1 durant la Deuxième Guerre mondiale."
      },
      {
        "type": "text",
        "text": "Fonctionnement Admission Le vent relatif fait entrer l'air dans la chambre de combustion à travers les clapets."
      },
      {
        "type": "text",
        "text": "En avant de la chambre, du carburant est pulvérisé dans le flux d'air."
      },
      {
        "type": "text",
        "text": "Explosion Les bougies provoquent l'explosion du mélange avant qu'il sorte de la chambre (quand celle-ci est toujours froide)."
      },
      {
        "type": "text",
        "text": "Quand la chambre de combustion est chaude, les bougies ne sont plus nécessaires et le cycle de combustion s'entretient. La pression générée étant supérieure à la pression exercée par l'air extérieur sur les clapets, ceux- ci se ferment. Les gaz de combustion s'échappent dans ce cas par la tuyère, où leur détente provoque la poussée."
      },
      {
        "type": "text",
        "text": "Lorsque la pression dans la chambre de combustion retombe en dessous de la pression exercée par l'air sur les clapets, ceux-ci se rouvrent pour commencer un nouveau cycle."
      },
      {
        "type": "text",
        "text": "Un cycle a une durée d'autant plus courte que la vitesse est élevée, fréquemment inférieure au dixième de seconde."
      },
      {
        "type": "text",
        "text": "Avantages et inconvénients Il peut, contrairement au statoréacteur, fonctionner à faible vitesse."
      },
      {
        "type": "text",
        "text": "Il a l'avantage d'être de construction assez simple et peu coûteuse. Il est particulièrement bruyant."
      },
      {
        "type": "text",
        "text": "Son rendement est médiocre. Il ne supporte pas bien les rapides changement d'injection."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.3 - Le turbopropulseur - Principe de fonctionnement."
      },
      {
        "type": "text",
        "text": "Pour pallier le manque de puissance des moteurs à pistons et à la grande consommation en carburant des réacteurs, des ingénieurs ont développé un concept hybride : le turbopropulseur."
      },
      {
        "type": "text",
        "text": "Il s'agit en fait d'un réacteur que l'on utilise pour faire tourner une hélice."
      },
      {
        "type": "text",
        "text": "La puissance motrice de l'engin résidant dans la traction de cette dernière. La poussée des gaz brûlés par le réacteur s'y ajoute mais ne constitue pas une part importante."
      },
      {
        "type": "text",
        "text": "Les progrès aérodynamiques réalisés sur les hélices ont rendu le concept très intéressant pour les avions de transport régional."
      },
      {
        "type": "text",
        "text": "Les réacteurs utilisés sont mono ou double corps et peuvent comporter plusieurs étages par corps de turbine ou de compresseur."
      },
      {
        "type": "text",
        "text": "On distingue deux types de turbines : les turbines liées (ou à prise directe) et les turbines libres :"
      },
      {
        "type": "list",
        "items": [
          "dans les turbines à prise directe l'hélice est reliée au corps basse pression (ensemble"
        ]
      },
      {
        "type": "text",
        "text": "compresseur + turbine liés) du moteur par l'intermédiaire d'un boîtier de réduction qui assure une vitesse de rotation de l'hélice constante (hélice à pas variable)."
      },
      {
        "type": "list",
        "items": [
          "dans une turbine libre, l'hélice est indépendante des corps du moteur. Elle est reliée, par un"
        ]
      },
      {
        "type": "text",
        "text": "boîtier de réduction, à une turbine dont la seule fonction est de l'entraîner pour fournir la traction."
      },
      {
        "type": "text",
        "text": "Les turbopropulseurs ont trouvé un domaine d'application privilégié entre autres avec les hélicoptères. Ceux-ci souffraient du manque de puissance des moteurs à pistons."
      },
      {
        "type": "text",
        "text": "La turbine du second étage est conçue pour récupérer le maximum de l’énergie des gaz de combustion sous forme de couple."
      },
      {
        "type": "text",
        "text": "Ce couple est transmis à une hélice au moyen d’un réducteur permettant la réduction de la vitesse de rotation"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.4 - Le turboréacteur - Principes de carburation et d’injection."
      },
      {
        "type": "text",
        "text": "Simple flux : Un, deux ou trois corps ou étages. Avec ou sans Post-combustion Double flux :"
      },
      {
        "type": "text",
        "text": "Le flux d’air primaire entre dans le moteur et traverse les compresseurs. Le fait de comprimer l’air le réchauffe fortement et c’est au niveau des compresseurs que se font les prélèvements d’air chaud qui alimenteront les dispositifs de Climatisation et Pressurisation."
      },
      {
        "type": "text",
        "text": "En sortie de compresseur HP, l’air très chaud et violemment comprimé est dirigé dans les chambres de combustion où il est mis à feu après mélange avec du carburant. Au démarrage, la combustion est amorcée par des bougies (éclateurs) puis s’auto-entretient. Elle provoque une expansion des gaz et donc une violente accélération de ces derniers en sortie du moteur dans la tuyère."
      },
      {
        "type": "text",
        "text": "Avant de sortir à l’extérieur dans la tuyère, les gaz traversent les turbines qui sont alors entrainées en rotation par ce flux. Les turbines solidaires de leurs attelages respectifs, font tourner les compresseurs et le fan."
      },
      {
        "type": "text",
        "text": "Le flux secondaire traverse le fan et est éjecté à l’arrière. Le fan se comportant comme une grande hélice assure environ 70% de la poussée que fournit le réacteur."
      },
      {
        "type": "text",
        "text": "A l’arrière du réacteur, des déflecteurs (reverses) actionnés par des vérins dévient les gaz qui sont alors dirigés vers l’avant (inversion de poussée)."
      },
      {
        "type": "text",
        "text": "Post-combustion : pour éviter la détérioration de la turbine, on admet plus d’air frais qu’il en faut pour la combustion. En sortie de turbine, l’oxygène disponible est mélangé à du carburant générant une poussée supplémentaire."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.5 - Les moteurs-fusées et lanceurs spatiaux."
      },
      {
        "type": "text",
        "text": "Les moteurs fusées Le but d'une fusée est de transporter une masse donnée (charge utile) à une altitude donnée (orbite) à une vitesse donnée (7,9 km/s). Pour y parvenir, elle doit s’appuyer sur la puissance dégagée par son système de propulsion. C’est l’un des facteurs essentiels pour déterminer les performances d’une fusée."
      },
      {
        "type": "text",
        "text": "Ce n'est que dans les années qui suivirent la Seconde guerre mondiale que les moteurs à poudre et à ergols liquides prirent une énorme importance pour la propulsion de missiles et de fusées spatiales. Depuis, on n'a cessé de les perfectionner et aujourd'hui leur emploi reste primordial pour la propulsion spatiale."
      },
      {
        "type": "text",
        "text": "Principe de fonctionnement des moteurs-fusées Le moteur-fusée à ergols liquides ou solides transforme en force propulsive l’énergie dégagée par la réaction chimique entre un combustible et un comburant."
      },
      {
        "type": "text",
        "text": "Ces deux corps sont injectés sous forte pression dans la chambre de combustion. Leur combustion très vive produit une grande quantité de gaz à haute température. Accélérés par leur passage au travers de la tuyère, leur éjection à grande vitesse produit la poussée nécessaire au décollage, à la montée et à la mise en orbite."
      },
      {
        "type": "text",
        "text": "Les vitesses d’éjection peuvent être très élevées : 2000 à 3000 m/s."
      },
      {
        "type": "text",
        "text": "Actuellement, on utilise principalement deux types de moteurs ; à savoir : les moteurs à ergols liquides (hydrogène et oxygène sous pression) et les moteurs à propergols solides. Mais la technique évoluant rapidement, trois autres voies sont développées pour un avenir proche : les propulseurs ionique/plasmatique, nucléaires et solaires."
      },
      {
        "type": "text",
        "text": "Les moteurs-fusées à ergols solides S’il existe un système de propulsion simple d’utilisation, c’est bien le moteur à propergol solide. Il est constitué d’une carcasse servant de réservoir unique contenant le propergol solide, plus communément appelé « poudre ». En fait, il ne s’agit pas réellement de poudre, mais d’une pâte qui se durcit avec en son centre un conduit d’évacuation des gaz."
      },
      {
        "type": "text",
        "text": "Le moteur est allumé par le sommet et la chaleur se propage jusqu’en bas en une fraction de seconde. La cheminée se remplit de gaz qui sont évacués par la tuyère. La combustion du propergol dans ce type de moteur se fait de l’intérieur vers l’extérieur. Il y a quelques avantages à ce moteur."
      },
      {
        "type": "text",
        "text": "Simple d’utilisation, stockage pendant de longues périodes pouvant atteindre plusieurs années, forte poussée durant tout le temps de combustion et fiabilité importante. Mais il présente également des inconvénients. Une fois allumé, il est impossible de l’éteindre, s’il"
      },
      {
        "type": "text",
        "text": "est puissant, il n’est pas forcément performant puisque son impulsion spécifique est relativement faible. En général, on utilise ce type de propulsion pour les petits lanceurs, pour certains étages propulsifs mais essentiellement comme boosters durant la première phase de vol d’une fusée."
      },
      {
        "type": "text",
        "text": "Les moteurs-fusées à ergols liquides Le principe de fonctionnement d’un moteur à ergols liquides est le même que celui d’un avion."
      },
      {
        "type": "text",
        "text": "On mélange du carburant avec du comburant dans une chambre à combustion. Là, ils sont enflammés, produisant des gaz qui sont éjectés par la tuyère. Contrairement à un avion qui puise son comburant dans l’atmosphère, une fusée doit emporter ses réserves. D’où la présence de deux réservoirs distincts pour les étages utilisant des moteurs à ergols liquides."
      },
      {
        "type": "text",
        "text": "On parle d’ergols cryogéniques lorsqu’on est en présence de carburant et comburant qui ne peuvent rester à l’état liquide à température ambiante. C’est le cas par exemple du couple hydrogène et oxygène liquide où le premier doit être refroidi par -270°C et l’autre par -180°C."
      },
      {
        "type": "text",
        "text": "Parmi les lanceurs les plus connus utilisant ce mode de propulsion sont Ariane 5 et la navette spatiale américaine."
      },
      {
        "type": "text",
        "text": "On parle d’ergols stockables lorsque le carburant et le comburant sont stockés à température ambiante. Dans le monde du transport spatial, ces ergols sont souvent des ergols hypergolites. C'est- à-dire que le carburant et le comburant s’enflamment spontanément au contact l’un de l’autre sans présence d’un système d’ignition. Le couple le plus répandu est celui d’UDMH et N2O4 utilisé par les Ariane 1 à 4, les fusées chinoises Chang-Zheng et russes Proton entre autres."
      },
      {
        "type": "text",
        "text": "Avantages : Les propergols donnent généralement la vitesse d’éjection car leur poussé est plus élevée et ils sont plus performants. De plus leur combustion peut être ralentie ou accélérée à tous moments grâce à des dispositifs de télécommandes."
      },
      {
        "type": "text",
        "text": "Il existe un type de propergol dont la réaction est mise en jeu par la décomposition catalytique du propergol. Ce type de propulsion développe de faibles impulsions spécifiques mais a l’avantage de supporter de très nombreux cycle d’allumage et d’arrêt."
      },
      {
        "type": "text",
        "text": "Inconvénients : Les propulseurs utilisés sont plus complexes que ceux des propergols solides, car les propergols liquides posent des problèmes de stockage et de mise en œuvre beaucoup plus difficiles."
      },
      {
        "type": "text",
        "text": "Ils sont généralement utilisés deux par deux : l’oxydant étant stocké dans un réservoir, le réducteur dans un autre, ces deux liquides étant mis à réagir dans la chambre de combustion. Il faut dans la plupart des cas amorcer la réaction, mais il existe des propergols réagissant spontanément au contact l’un de l’autre : ils sont dits hypergoliques."
      },
      {
        "type": "text",
        "text": "La proximité d'un comburant et d'un carburant présente de très grands risques d'explosion, l'accident le plus fréquent sur ce type de moteur est la rupture des réservoirs entraînant rapidement une explosion (c’est ce qui a causé l'accident de la navette spatiale Challenger en 1987 )."
      },
      {
        "type": "text",
        "text": "    "
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.6 - Les moteurs à propulsion électrique."
      },
      {
        "type": "text",
        "text": "La propulsion électrique est un type de propulsion à réaction à applications spatiales. Le principe est similaire à la propulsion chimique dans le sens où les produits éjectés sont accélérés comme les gaz brûlés dans une tuyère."
      },
      {
        "type": "text",
        "text": "On distingue 3 modes : thermique (on chauffe un gaz, vu précédemment) ; électromagnétique (comme le type plasma), et électrostatique (comme pour le moteur ionique)."
      },
      {
        "type": "list",
        "items": [
          "LE MOTEUR A PLASMA"
        ]
      },
      {
        "type": "text",
        "text": "Le concept théorique date des années 70 et la réalisation des années 90. Les recherches continuent et de nouveaux prototypes ont été testés au sol (VS 200) et lors de vols effectués dans l'ISS."
      },
      {
        "type": "text",
        "text": ". Les études de propulseur spatial à plasma les plus abouties concernent le projet VASIMR, (acronyme de Variable specific impulse magnetoplasma rocket) : « Fusée magnétoplasma à impulsion spécifique variable ». Il utilise des champs et des rayonnements électromagnétiques variables (sans électrodes) pour chauffer, ioniser et accélérer un propergol vaporisé (hydrogène argon ou hélium)."
      },
      {
        "type": "text",
        "text": "1. Le gaz neutre (hydrogène ou hélium) est injecté en entrée du dispositif. 2. Un tube en quartz recueille et confine ce gaz neutre avant son ionisation."
      },
      {
        "type": "text",
        "text": "3. Une « antenne hélicon » spéciale pré-ionise le gaz (chauffage à 30 000 kelvins) à l'aide de radiofréquences émises dans un champ magnétique axial (rayonnement hélicon excitant les électrons)."
      },
      {
        "type": "text",
        "text": "4. Le plasma est confiné à distance de la paroi par des solénoïdes entourant la chambre cylindrique, créant un champ magnétique axial dans l'enceinte."
      },
      {
        "type": "text",
        "text": "5. Une « antenne ICRH » (Ion Cyclotron Resonant Heating) ionise totalement le plasma en le portant à très haute température (10 megakelvins) et génère un champ électrique induit qui accélère les ions en une trajectoire hélicoïdale vers la sortie. C'est le booster principal."
      },
      {
        "type": "text",
        "text": "6. Une « tuyère magnétique » en sortie contrôle le jet de plasma en modelant axialement la trajectoire des ions."
      },
      {
        "type": "text",
        "text": "VASIMR est une solution polyvalente, alternative aux deux systèmes spécialisés existants que sont les propulseurs à haute poussée et à faible impulsion spécifique (comme les moteurs-fusées à propulsion chimique) d'un côté, et les propulseurs à faible poussée et à haute impulsion spécifique (comme les moteurs ioniques) de l'autre, car il est capable de fonctionner dans les deux modes en ajustant à tout moment ses paramètres de fonctionnement"
      },
      {
        "type": "list",
        "items": [
          "LE MOTEUR IONIQUE"
        ]
      },
      {
        "type": "text",
        "text": "Un moteur ionique est un moteur qui produit sa force de propulsion en projetant des ions à très haute vitesse. Son principe a déjà été pensé au début du XXe siècle et il est employé au début du XXIe siècle pour le vol spatial."
      },
      {
        "type": "text",
        "text": "Par comparaison avec les moteurs fusée conventionnels, dans lesquels il faut embarquer la masse à éjecter et l’énergie pour l’éjecter, les moteurs ioniques ne transportent que la masse à éjecter."
      },
      {
        "type": "text",
        "text": "L’énergie nécessaire pour l’éjection peut être générée sur place avec des panneaux solaires."
      },
      {
        "type": "text",
        "text": "Les moteurs ioniques, qui produisent une force de propulsion faible mais sur une très longue durée, sont particulièrement économes. Ils produisent, par kilogramme de carburant embarqué, une quantité de travail très supérieure à celui des moteurs fusée conventionnels. Ils peuvent donc, après un temps, certes, non négligeable, conférer la même vitesse au véhicule spatial au prix d'une consommation de carburant bien moindre. Ce véhicule peut alors emporter moins de carburant. Les moteurs ioniques sont également beaucoup plus légers (une dizaine de Kg), permettant ainsi une économie supplémentaire de carburant."
      },
      {
        "type": "text",
        "text": "Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Basés sur le principe du canon à électrons. Ils sont obtenus en mettant une aiguille métallique sous très haute tension. L’accumulation de charges sur la pointe va pousser des électrons à s’en échapper à très haute vitesse. On obtient alors un faisceau d’électrons."
      },
      {
        "type": "text",
        "text": "Ces électrons sont bombardés sur du xénon, un gaz, dans le but d’en arracher leurs électrons. Le gaz, ionisé sous la forme d’ions, est ensuite envoyé entre une grille positivement chargée et une grille négativement chargée."
      },
      {
        "type": "text",
        "text": "L’ion étant chargée positivement (ayant perdu une charge négative), il est repoussé par la grille positive et est attiré par la grille négative et est donc accéléré en direction de la grille négative. C’est cette accélération qui constitue la poussée du moteur à propulsion ionique"
      },
      {
        "type": "text",
        "text": "Avantages et utilisation Avec la propulsion ionique, il n’y a ni combustion, ni réaction chimique. Il n’y a pas non plus de pièces mobiles, ni besoin de palier à des contraintes thermique et mécanique comme un moteur de fusée classique. Un moteur ionique est donc très efficace et rentable."
      },
      {
        "type": "text",
        "text": "En revanche, la quantité d’ions expulsé est très faible, et la force obtenue également : pas plus d’une centaine de grammes de poussée, soit environ autant qu’un souffle sur votre main tendue. En revanche, cette poussée est constante, très étalée dans le temps et très précisément dirigée."
      },
      {
        "type": "text",
        "text": "Dans l’espace, où il n’y a pas d’air pour nous freiner, cette faible force suffit pour accélérer la sonde."
      },
      {
        "type": "text",
        "text": "L’accélération est lente, mais constante et très longue. Après plusieurs mois, la sonde permet d’augmenter sa vitesse de 5 à 10 km par secondes, ce qui est loin d’être négligeable sur des voyages interplanétaires."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "3.3.7 - Les moteurs à propulsion nucléaire."
      },
      {
        "type": "text",
        "text": "Le domaine de la propulsion nucléaire électrique (NEP), dans lequel un réacteur nucléaire ne sert que de source d'énergie pour alimenter des propulseurs ioniques, ne relève techniquement que de la propulsion électrique."
      },
      {
        "type": "text",
        "text": "Cette propulsion bimodale dans les forts champs de gravité (à proximité des planètes) requiert un rapport poussée / poids important et se réalise principalement à l'aide d'une propulsion nucléaire thermique. Sorti du puits de gravité, dans les transits interplanétaires, le réacteur nucléaire fonctionne à un régime plus faible, en cycle fermé avec radiateur et turbine produisant la puissance destinée au fonctionnement d'un propulseur électrique de meilleure ISP (* impulsion spécifique)."
      },
      {
        "type": "text",
        "text": "Ce type d'hybridation peut combiner toutes sortes de propulsions nucléaires et électriques."
      },
      {
        "type": "text",
        "text": "L'approche la plus commune est d'apparier un réacteur à cœur solide de type NERVA avec une propulsion ionique. Le gain apporté dépend fortement de la nature de la mission du véhicule car il est basé sur un compromis entre la forte poussée / faible impulsion et la faible poussée / forte impulsion de 2000 à 5000 s)"
      },
      {
        "type": "list",
        "items": [
          "L'impulsion spécifique, généralement notée, est une grandeur utilisée pour mesurer l'efficacité"
        ]
      },
      {
        "type": "text",
        "text": "de moteurs à réaction et des moteurs-fusées. Elle mesure la force exercée par l'engin en fonction de la quantité de carburant consommé par unité de temps."
      },
      {
        "type": "text",
        "text": "Dans le domaine de l'astronautique, elle est le quotient de deux grandeurs, dont l'une est la poussée d'un propulseur, et l'autre le produit du débit massique de propergol par la valeur normale de l'accélération de la pesanteur (ou débit-poids du propergol éjecté)."
      },
      {
        "type": "text",
        "text": "L'impulsion spécifique permet de comparer l'efficacité d'un système de propulsion : plus elle est grande, plus le système est efficace. Elle est exprimée en secondes."
      },
      {
        "type": "text",
        "text": "  "
      }
    ]
  },
  {
    "id": "les-instruments-de-bord",
    "number": "4",
    "title": "Les instruments de bord",
    "pages": [
      59,
      83
    ],
    "blocks": [
      {
        "type": "text",
        "text": "Le poste de pilotage est constitué d'un tableau de bord divisé en trois parties pour optimiser et améliorer la réactivité du pilote. La partie gauche devant le commandant de bord comprend l’ensemble des indicateurs de contrôle du pilotage (altitude, vitesse, cap, …). Au centre se trouvent les postes de radiocommunication et de radionavigation ainsi que leurs contrôles."
      },
      {
        "type": "text",
        "text": "A droite, on trouve les indicateurs de contrôle du moteur."
      },
      {
        "type": "text",
        "text": "La partie inférieure du tableau de bord comporte les interrupteurs et les protections électriques. Au niveau des commandes on trouve un manche ou volant et deux palonniers. Si l’avion peut emporter deux personnes, toutes les commandes sont doublées."
      },
      {
        "type": "text",
        "text": "Principes de mesure des instruments de pilotage Six instruments basiques permettent de contrôler la tenue des paramètres de pilotage :"
      },
      {
        "type": "list",
        "items": [
          "Trois basés sur les pressions :",
          "Altimètre (altitude),",
          "Variomètre (taux de montée) et",
          "Badin (vitesse)"
        ]
      },
      {
        "type": "text",
        "text": "C’est la chaîne barométrique Prise en compte du facteur humain et de la relation homme-machine :"
      },
      {
        "type": "list",
        "items": [
          "Organisation similaire sur tous les avions",
          "Reconnaissance de son domaine",
          "Réconfort moral et efficacité accrue",
          "Actions et réactions amplifiées",
          "Emplacement des indicateurs identique",
          "Fonds d’indicateur colorés",
          "Trois basés sur les propriétés du"
        ]
      },
      {
        "type": "text",
        "text": "gyroscope"
      },
      {
        "type": "list",
        "items": [
          "Horizon artificiel (attitude de l’avion) ;",
          "Conservateur de cap (direction) ;",
          "Coordinateur de virage (taux de virage)."
        ]
      },
      {
        "type": "text",
        "text": "C’est la chaine gyroscopique pneumatique"
      },
      {
        "type": "text",
        "text": "Certains instruments de pilotage permettent de contrôler les paramètres avion par rapport à la masse d'air ."
      },
      {
        "type": "text",
        "text": "Ils utilisent un instrument de base dénommé capsule anéroïde qui permet de mesurer une différence de pression."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.1 - L'ALTIMETRE"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.1.1 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "L'altimètre fournit une information de distance verticale par rapport à une référence choisie par le pilote (niveau de la mer, de l'aérodrome, de référence standard, etc.). Il faut interpréter ses indications, car ce n'est qu'un baromètre qui indique la pression extérieure sur un cadran gradué en pieds ou en mètres."
      },
      {
        "type": "text",
        "text": "L'altimètre est un baromètre constitué d'une capsule anéroïde. La pression diminuant avec l'altitude, cette capsule se déforme plus ou moins selon l'altitude de l'avion."
      },
      {
        "type": "text",
        "text": "Cette déformation est transmise à une aiguille qui se déplace devant un cadran gradué."
      },
      {
        "type": "text",
        "text": "Tous les altimètres sont munis d'une fenêtre ou apparaît une échelle de pression graduée en hectopascals (hPa)."
      },
      {
        "type": "text",
        "text": "Le cadran est généralement gradué en pieds (ft), 1ft = 0,30 m (ft vers m : règle des 3 / 10) Il s'agit d'un ensemble fermé et scellé en usine sous atmosphère standard (1013,25 hPa à 15° C)."
      },
      {
        "type": "text",
        "text": "Le gaz contenu exerce une pression P int à laquelle s'oppose la pression à mesurer P ext. Si P ext est différent de P int, une déformation mécanique est engendrée et récupérée sur la partie haute"
      },
      {
        "type": "text",
        "text": "1 m = 3,3 ft (m vers ft : règle des 3 fois + 1/10)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.1.2 - Etalonnage de l'altimètre"
      },
      {
        "type": "text",
        "text": "Les constructeurs et les services internationaux de réglementation ont adopté une valeur de référence égale à la pression atmosphérique au niveau moyen des mers (1013,25 hPa) et à la température moyenne de +15°C pour étalonner chaque instrument."
      },
      {
        "type": "text",
        "text": "La mesure de l’altimètre ne serait exploitable que si la pression atmosphérique était de 1013,25 hPa."
      },
      {
        "type": "text",
        "text": "Ceci n’est pas acceptable, c’est donc pourquoi l’altimètre dispose d’un réglage pouvant prendre comme référence une pression comprise entre 950 et 1050 hPa au niveau de la mer."
      },
      {
        "type": "text",
        "text": "Pour afficher une distance entre l’avion et le niveau de la mer, le pilote doit afficher la pression atmosphérique qui corrige automatiquement l’indication d’altitude fournie par l’appareil."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.1.3 - Les calages altimétriques"
      },
      {
        "type": "text",
        "text": "En fonction des besoins, il est souhaitable de connaître la distance de l’avion par rapport à plusieurs références différentes, elles sont identifiées par :"
      },
      {
        "type": "text",
        "text": "QNH Altitude par rapport au niveau de la mer QFE Hauteur par rapport au sol donc référence variable QNE Niveau de vol par rapport à la référence normalisée 1013,25 hPa"
      },
      {
        "type": "text",
        "text": "La hauteur s'exprime par rapport à un point donc en ft (QFE). Le calage QFE est utilisé en vol local au-dessus d'un aéroport (hauteur par rapport au sol). La pression au niveau du terrain est appelée QFE (Québec Fox Echo). On dit que l'altimètre est calé au Fox Echo."
      },
      {
        "type": "text",
        "text": "L'altitude s'exprime par rapport à la pression atmosphérique au niveau de la mer donc en ft (QNH). Ce calage est utilisé lors des navigations à vue en basse altitude. Il permet de savoir quelle est la hauteur de l'avion par rapport aux reliefs et obstacles indiqués sur les cartes en retranchant l’altitude indiquée par l’altimètre de l’altitude des points culminants indiquée sur les cartes (aux erreurs de l'instrument près). Ce calage est appelé le QNH (Québec Novembre Hôtel)."
      },
      {
        "type": "text",
        "text": "La pression au niveau de la mer s'obtient auprès des services de prévision météorologique ou par l'information diffusée par les services de l'aviation civile."
      },
      {
        "type": "text",
        "text": "On peut aussi la calculer à partir du QFE du terrain de départ sachant que l’on perd un hectopascal en montant de 8, 5 m ou 28 ft. La carte VAC du terrain indique son altitude, il suffit donc de diviser cette altitude par 8,5 m ou 28 ft.."
      },
      {
        "type": "text",
        "text": "Régler l’altimètre à 0, relever la pression affichée dans la fenêtre de l’altimètre (QFE) et rajouter celle-ci à la pression lue au sol, cela vous donne le QNH.en hPa."
      },
      {
        "type": "text",
        "text": "Les niveaux de vol s'expriment par rapport au QNE. Le calage QNE est utilisé en niveau de vol (flight level) au-dessus du niveau de transition. On dit que l'altimètre est calé au 1013. Ce calage de référence permet aux contrôleurs du ciel d'espacer verticalement tous les avions au-dessus d’un certain niveau. Tous ces appareils ayant la même référence de calage, leur sécurité peut être assurée."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.1.4 - Variations des pressions"
      },
      {
        "type": "text",
        "text": "La pression atmosphérique varie continuellement en fonction de la situation météorologique et en fonction de l’altitude."
      },
      {
        "type": "text",
        "text": "Les surfaces isobares se décalent. (avion au parking, altimètre réglé à 0 Ft vers midi, l’indication lue en soirée sera sans doute différente car la pression aura évolué dans un sens ou dans l’autre)."
      },
      {
        "type": "text",
        "text": "Les surfaces isobares ne sont ni planes ni parallèles, un avion suivant une surface isobare (volant à altitude indiquée constante) aura une trajectoire présentant des variations par rapport au sol."
      },
      {
        "type": "text",
        "text": "Le calage de l'altimètre est effectué au moyen d'une molette situé sur la face avant de l'appareil."
      },
      {
        "type": "text",
        "text": "Elle fait tourner une couronne graduée en hPa. En fonction du calage choisi, l’avion étant au même endroit, on lira des valeurs différentes."
      },
      {
        "type": "text",
        "text": "Altitude et pression La pression de l'air décroît avec l'altitude et la vitesse de décroissance augmente avec l'altitude."
      },
      {
        "type": "text",
        "text": "L'altimètre mesure cette pression. Problèmes liés aux pressions non standards Recommandations :"
      },
      {
        "type": "list",
        "items": [
          "Indication altimètre approximative",
          "Si QNH < 1013 les FL sont plus bas, le vol est bas qu’indiqué (attention au relief) ;",
          "Si QNH > 1013 les FL sont plus hauts, le vol est plus haut qu’indiqué ;",
          "Si T° < T° Standard à l'altitude, le vol est plus bas qu'indiqué (attention au relief) ;",
          "Si T° > T° Standard à l'altitude, le vol est plus haut qu'indiqué ;",
          "Isotherme 0° en milliers de mètres = T ° / 6,5 (perte théorique de 6,5° par 1000 m)",
          "Isotherme 0° en milliers de pieds = T ° / 2 (perte théorique de 2° par 1000 ft )."
        ]
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.1.5 - Utilisation des calages en fonction des vols"
      },
      {
        "type": "text",
        "text": "Niveaux de vol (FL, chiffres des milliers en fonction de la route de l’avion et centaines de pieds en fonction du type de vol."
      },
      {
        "type": "text",
        "text": "Si vol IFR chiffre des centaines = 0, si vol VFR centaines = 5)"
      },
      {
        "type": "text",
        "text": "Route magnétique IFR VFR Vols IFR Vols VFR de 0° à 179 Impair Impair + 5 30, 50, 70, 90,110 35, 55, 75, 95, 115 de 180° à 359 Pair Pair + 5 40, 60, 80, 100, 120 45, 65, 85, 105, 125 Problème Conséquence Pression varie avec le temps Le zéro altimètre n'est pas fixe La variation de P dépend de T Conversion P altitude dépend de T"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.2 - LE VARIOMETRE"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.2.1 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Le but de cet appareil est d'indiquer la vitesse verticale de l'avion afin de permettre au pilote d'effectuer des montées ou des descentes à taux constant (vitesse verticale par mn)."
      },
      {
        "type": "text",
        "text": "Pour les pilotes de planeur il permet de repérer les zones d'ascendance dans lesquelles l'appareil peut gagner de l'altitude. Le principe est basé sur une mesure de pression différentielle."
      },
      {
        "type": "text",
        "text": "A un instant t donné l'avion est à une altitude z(t) repérée par la pression statique Ps(t)."
      },
      {
        "type": "text",
        "text": "A l'instant t1, il est à l'altitude z(t1) repérée par Ps(t1). La vitesse verticale Vz est calculée à partir de la vitesse de variation de la pression. Le variomètre est sujet à de nombreuses erreurs."
      },
      {
        "type": "text",
        "text": "Si la température du boîtier varie dans le temps, l'indication du variomètre est erronée. Pour une variation de la température du boîtier de 1°/min, l'erreur est de 100 ft/min. Le temps de réponse de l'appareil en cas de variation brusque de Vz est de 3 à 5 s."
      },
      {
        "type": "text",
        "text": "Cela peut amener le pilote à corriger de façon erronée s'il ne se fie qu'au variomètre. L'évolution de la viscosité de l'air change le retard de transmission de la pression dans l'enceinte entourant la capsule. En pratique, le variomètre surestime la Vz en altitude (surestimation de l'ordre de 30 % à 11000 m)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.2.2 - Présentation de l'instrument"
      },
      {
        "type": "text",
        "text": "Les variomètres se présentent tous selon le même modèle. En fonction de l'appareil pour lequel ils ont été conçus, l'échelle des graduations est différente."
      },
      {
        "type": "text",
        "text": "Ses indications sont fiables à faible altitude mais elles sont peu précises à haute altitude. Ils sont toutefois indispensables pour des approches de précision aux instruments sur de nombreux types d’avions."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.3 - L'ANÉMOMETRE (OU BADIN)"
      },
      {
        "type": "text",
        "text": "L'anémomètre dénommé également badin (du nom de son inventeur) est l'indicateur de vitesse relative de l'avion par rapport à la masse d'air qui l'entoure (Vp vitesse propre). Il peut être gradué en noeuds (Kt), en MPH ou en Km/h."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.3.1 - Les vitesses d'un avion"
      },
      {
        "type": "text",
        "text": "L'anémomètre a pour fonction d'indiquer au pilote la vitesse l'avion. La vitesse lue sur l'instrument est appelée vitesse indiquée (Vi). En supprimant l’erreur due à la position de l’antenne anémométrique, on obtient la vitesse conventionnelle (Vc) ou CAS (Calibrated Air Speed). Pour les avions peu rapides, on ne tient pas compte de la compressibilité de l’air (Vitesse < 250 Kt – 450 km/h), et si l’altitude n’est pas très élevée on peut considérer que l’on obtient sans correction la vitesse vraie (Vv) ou True Air Speed (TAS)."
      },
      {
        "type": "text",
        "text": "Dans le cas des avions rapides, il faut tenir compte de la compressibilité de l'air et l’on obtient l’Equivalent Vitesse (Ev) ou Equivalent Air Speed (EAS). Si l’on veut corriger l’effet de l’altitude et de la température sur l’indication de vitesse, il faut apporter une correction par rapport à la pression extérieure et à la température extérieure (+ 1% par 600 ft d’altitude et + ou – 1% par rapport à la température standard à l’altitude considérée), on obtient la vitesse vraie (Vv) ou True Air Speed."
      },
      {
        "type": "text",
        "text": "Enfin si l'avion est en montée ou en descente, pour la navigation on calcule la composante horizontale de la vitesse vraie : la vitesse propre : Vp."
      },
      {
        "type": "text",
        "text": "Naturellement, s’’il y a du vent, la vitesse propre de l’avion est différente de la vitesse par rapport au sol ( ou vitesse sol : Vs)."
      },
      {
        "type": "text",
        "text": "Sur les avions rapides volant à haute altitude, on trouve également un Machmètre qui donne la vitesse de l'avion par rapport à celle du son. Cet appareil remplace alors le badin pour les grandes vitesses et les hautes altitudes. Sa lecture renseigne le pilote sur la vitesse de l'avion par rapport à l'air. Les deux appareils peuvent être combinés en un seul."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.3.2 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Il mesure l’écart de pression entre la pression totale de l'air (pression dynamique + pression atmosphérique) soumise en avant de l'avion au tube de pitot (ou antenne anémométrique) et la pression statique mesurée sur les prises de pression statique situées en général sur les côtés du fuselage."
      },
      {
        "type": "text",
        "text": "Pour déterminer la vitesse de l'avion on utilise une sonde de type Pitot. Elle est constituée d'un tube creux placé parallèlement à l'écoulement dans une zone où il est le moins perturbé par le reste de l'avion."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.3.3 - Présentation de l'instrument"
      },
      {
        "type": "text",
        "text": "On remarque que l'échelle du badin présente 3 zones colorées et un trait rouge :"
      },
      {
        "type": "list",
        "items": [
          "l’arc blanc représente la zone de vitesse dans laquelle on peut sortir les éléments mobiles"
        ]
      },
      {
        "type": "text",
        "text": "sans risque de les endommager. De l’information lue à l’information réelle… MÉMO = ICE Tea"
      },
      {
        "type": "text",
        "text": "VI Vitesse indiquée IAS Indicated Air Speed VC Vitesse conventionnelle CAS Calibrated Air Speed EV Equivalent de vitesse EAS Equivalent Air Speed Vv Vitesse vraie TAS True Air Speed Vp Vitesse propre Correction d’installation (1 à 2 Kt) Correction de compressibilité (V > 250 Kt) Correction de pente (Vp =Vv.cos ) Correction de densité (1% par 600 ft 1% par 5°C) Pression dynamique = Pression totale – Pression statique"
      },
      {
        "type": "text",
        "text": "La limite supérieure est la vitesse maxi avec les volets sortis (VFE). La limite inférieure de cet arc représente la vitesse de décrochage en configuration d’atterrissage (VSO)."
      },
      {
        "type": "list",
        "items": [
          "la zone verte représente la plage de vitesse d'utilisation normale de l'avion. La vitesse"
        ]
      },
      {
        "type": "text",
        "text": "inférieure de l'arc vert représente la vitesse de décrochage en configuration lisse (tout rentré : train et volets) : VS (velocity stall)."
      },
      {
        "type": "list",
        "items": [
          "la zone jaune est une plage de vitesse utilisable mais à éviter en atmosphère turbulente.",
          "le trait rouge représente la vitesse à ne jamais dépasser (VNE) never exceed."
        ]
      },
      {
        "type": "text",
        "text": "Sur l’anémomètre ci-dessous, nous distinguons la VNE à 163 Kt. Ce trait indique au pilote une vitesse limite à ne jamais dépasser."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.4 - LE COMPAS MAGNETIQUE"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.4.1 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Le compas magnétique permet au pilote de connaître le cap magnétique (Cm) de l'avion (à l’erreur instrumentale près, la déviation en l’occurrence). En réalité, on devrait parler de cap compas (Cc). Il s'agit en fait d'une boussole."
      },
      {
        "type": "text",
        "text": "Cm = route sans vent suivie par l’avion Cc = angle entre la direction du Nord magnétique et l'axe de l'avion (ligne de foi)."
      },
      {
        "type": "text",
        "text": "En tenant compte de la déclinaison magnétique on peut déterminer le cap vrai (orientation par rapport au Nord géographique). La déclinaison magnétique est l'angle entre le Nord vrai et le Nord magnétique (voir cours de navigation)."
      },
      {
        "type": "text",
        "text": "C'est un instrument qui est très sujet aux perturbations électromagnétiques engendrées par les systèmes de bord de l'avion."
      },
      {
        "type": "text",
        "text": "Cela nécessite d'employer des dispositifs correcteurs (comme des aimants judicieusement positionnés) et d'étalonner l'instrument pour fournir avec une courbe donnant la déviation en fonction du cap lu. Il s'agit en fait de la valeur dont il faut corriger le cap lu pour obtenir le véritable cap magnétique."
      },
      {
        "type": "text",
        "text": "VSO"
      },
      {
        "type": "text",
        "text": "VS VFE"
      },
      {
        "type": "text",
        "text": "VNO"
      },
      {
        "type": "text",
        "text": "VNE Réglage de la compensation d’erreur température / pression"
      },
      {
        "type": "text",
        "text": "Vitesse vraie (TAS)"
      },
      {
        "type": "text",
        "text": "Vitesse indiquée (IAS)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.5 - LES INSTRUMENTS GYROSCOPIQUES"
      },
      {
        "type": "text",
        "text": "La propriété d’un gyroscope en rotation (la toupie) est de garder une fixité dans l’espace."
      },
      {
        "type": "text",
        "text": "Autre propriété, la précession qui est un effet secondaire du gyroscope lorsque l’on exerce une force sur l’axe de rotation perpendiculaire à cette force et dans le sens de la rotation."
      },
      {
        "type": "text",
        "text": "Mais celle-ci est utilisé dans les trois instruments qui vont suivre :"
      },
      {
        "type": "list",
        "items": [
          "Conservateur de cap (fixité par rapport à une direction) ;",
          "Horizon artificiel (fixité par rapport à une attitude) ;",
          "Coordinateur de virage (fixité par rapport à un changement"
        ]
      },
      {
        "type": "text",
        "text": "de direction"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.6 - LE CONSERVATEUR DE CAP"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.6.1 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Les erreurs du compas magnétique en évolution le rendent inutilisable pour effectuer des virages avec une sortie à un cap précis et encore moins lorsque le pilote n'a pas de référence visuelle extérieure."
      },
      {
        "type": "text",
        "text": "Pour pallier ce problème, on utilise un gyroscope à 2 degrés de liberté dont l'axe de rotation maintient une position fixe dans le plan horizontal. Une échelle des caps est solidaire du gyroscope et se maintient dans une direction fixe dans l'espace."
      },
      {
        "type": "text",
        "text": "Lors de la mise en route de l'instrument, il faut recaler le cap indiqué par celui-ci sur celui du compas magnétique. Par la suite le compas gyroscopique maintiendra sa position fixe (c'est pour cette raison que l'instrument est également appelé conservateur de cap)."
      },
      {
        "type": "text",
        "text": "Lorsque l'avion a un mouvement de roulis ou de lacet, le gyroscope tourne autour de ses 2 axes pour maintenir sa position dans l’espace et l'observateur voit défiler les caps devant son repère."
      },
      {
        "type": "text",
        "text": "Comme avec tout appareil gyroscopique, l'indication du conservateur de cap comporte des erreurs lors des changements d’attitude (inclinaison, ...)."
      },
      {
        "type": "text",
        "text": "Pour les limiter, on recale fréquemment conservateur de cap avec le compas magnétique. Cela limite sa dérive."
      },
      {
        "type": "text",
        "text": "Le pilote la compense à la sortie du virage en ajustant son cap sur celui désiré. Certains systèmes sont couplés à une boule (horizon artificiel) pour permettre au pilote d'avoir un maximum d'informations sur un seul instrument."
      },
      {
        "type": "text",
        "text": "Aussi performants que les systèmes puissent être, il faut régulièrement se mettre en vol horizontal en palier et recaler l'instrument sur l'indication du compas magnétique pour compenser la dérive dans le temps de l'appareil et les décalages qui apparaissent après des évolutions brusques."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.6.2 - Présentation de l'instrument"
      },
      {
        "type": "text",
        "text": "Comme pour tout appareil utilisant les propriétés d’un gyroscope, on utilise un mécanisme qui permet de représenter les caps sur un cercle vertical."
      },
      {
        "type": "text",
        "text": "Un index ou représentation de l'avion permet de lire le cap magnétique de celui-ci. En général 1 ou 2 index mobiles permettent de visualiser des caps de référence pour la navigation."
      },
      {
        "type": "text",
        "text": "L'appareil présente également un ou deux boutons de réglage :"
      },
      {
        "type": "list",
        "items": [
          "le premier permet de positionner l'index de référence de"
        ]
      },
      {
        "type": "text",
        "text": "navigation."
      },
      {
        "type": "list",
        "items": [
          "le second permet de recaler la rose des caps sur le compas"
        ]
      },
      {
        "type": "text",
        "text": "magnétique au sol ou en vol."
      },
      {
        "type": "text",
        "text": "Certains gyrocompas sont équipés d'un bouton qui permet de les utiliser soit en gyrocompas (GM), soit en directionnel (D), soit en compas magnétique (Cm)."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.7 - L’HORIZON ARTIFICIEL"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.7.1 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Cet appareil permet de piloter l'avion sans voir l'horizon à l'extérieur donc d’être capable de maintenir l’horizontalité de l’avion."
      },
      {
        "type": "text",
        "text": "Il remplace cette référence visuelle naturelle qui permet à notre cerveau de déceler l’horizontalité et donc de percevoir l'attitude de l'avion (c'est à dire son orientation dans l'espace)."
      },
      {
        "type": "text",
        "text": "Le pilote peut donc identifier si l'avion monte, descend, s’incline à gauche ou à droite. C'est l'instrument essentiel du pilotage sans visibilité."
      },
      {
        "type": "text",
        "text": "Il s'agit d'un instrument gyroscopique basé sur un gyroscope à deux degrés de liberté. Lorsque l'avion tourne, le gyroscope tend à garder la même orientation dans l'espace."
      },
      {
        "type": "text",
        "text": "Dans ce type d'instrument, la rotation du gyroscope est assurée par un moteur électrique ou par entraînement pneumatique."
      },
      {
        "type": "text",
        "text": "Les vitesses de rotation sont de l'ordre de 12 000 tr/min à 20 000 tr/mn."
      },
      {
        "type": "text",
        "text": "Si l'avion monte, le maintien de la position du gyroscope dans l'espace entraîne un abaissement de l’horizon par rapport à la maquette figurant l’avion et inversement si l'avion descend."
      },
      {
        "type": "text",
        "text": "Si l'avion s'incline à gauche, la partie gauche de la maquette (la plus près du sol (gris) indique le sens du virage et le centre de la maquette figurant dans le ciel (bleu) indique que l’avion est en montée (image de gauche ci-dessous."
      },
      {
        "type": "text",
        "text": "Dans le cas d'une maquette ayant la partie droite la plus dans le sol indique un virage à droite avec le centre de la maquette étant en-dessous de la ligne d’horizon, ceci indique que l’avion est en virage à droite et en descente (image de droite ci-dessous.."
      },
      {
        "type": "text",
        "text": "Les instruments les plus perfectionnés sont basés sur des systèmes à trois degrés de liberté asservis à un gyroscope. Ils permettent de figurer en plus les mouvements en lacet et ne sont pas limités dans leurs déplacements. La plaque indicatrice est alors en fait une boule."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.7.2 - Présentation de l'instrument"
      },
      {
        "type": "text",
        "text": "La représentation de l’horizon est en général une plaque coloriée en bleu dans sa partie supérieure pour figurer le ciel et en marron ou noir dans sa partie inférieure pour figurer la terre. Un index, fixe par rapport à l'avion, figure celui-ci sur l'instrument."
      },
      {
        "type": "text",
        "text": "L’horizon ci-contre est un modèle de base et il en existe de bien plus perfectionnés. Aujourd’hui il s’agit souvent de représentations graphiques sur des écrans cathodiques ou LCD (ci-dessous)."
      },
      {
        "type": "text",
        "text": "L’horizon artificiel est l’instrument de base du vol sans visibilité. Il est quasiment irremplaçable pour ce type d’exercice et il est fréquent que les avions destinés à voler souvent par mauvais temps en possèdent deux."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.8 - LE COORDONNATEUR DE VIRAGE (OU BILLE-AIGUILLE)"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.8.1 - Principe de fonctionnement"
      },
      {
        "type": "text",
        "text": "Le coordonnateur de virage, ou aiguille (appellation des premiers instruments), est un instrument gyroscopique qui permet d'indiquer le taux de virage (en degrés par seconde) et le sens du changement de cap. Il est basé sur l'utilisation d'un gyroscope à 1 degré de liberté."
      },
      {
        "type": "text",
        "text": "Le gyroscope est une pièce métallique mise en rotation rapide (environ 10 à 12 000 tours par minute) autour d’un axe."
      },
      {
        "type": "text",
        "text": "Elle est montée sur un cadre possédant de 1 à 3 axes de rotation (degrés de liberté). Lorsque l'avion tourne, le gyroscope tend à garder sa position initiale (comme une toupie)."
      },
      {
        "type": "text",
        "text": "Celui d’un coordonnateur de virage tourne autour d’un axe horizontal. Un ressort de rappel permet d'obtenir une position d'équilibre qui dépend de la vitesse de changement de direction (ou cap) de l’avion."
      },
      {
        "type": "text",
        "text": "Si l’aiguille ou la maquette s’incline vers R comme sur la vue ci-contre, cela signifie que l’avion exécute un virage à droite avec un changement de cap de 3° par seconde."
      },
      {
        "type": "text",
        "text": "C’est la valeur du taux standard pour tous les avions."
      },
      {
        "type": "text",
        "text": "Il correspond à l’exécution d’un 360° en deux minutes soit 360 / 120 secondes = 3°/sec."
      },
      {
        "type": "text",
        "text": "Attention : Ne pas interpréter l’inclinaison de la maquette de l’avion comme l’inclinaison réelle de l’avion. Au roulage, l’avion reste horizontal dans les virages, la maquette de l’instrument s’incline car changement de cap en un temps (temps du virage sur taxiway)."
      },
      {
        "type": "text",
        "text": "Le cadre du gyroscope entraîne dans son mouvement une aiguille (ou une maquette représentant l'avion) dont la position indique le sens et le taux du changement de direction."
      },
      {
        "type": "text",
        "text": "Cela permet de réaliser des virages avec une vitesse de rotation constante et précise. Lors des procédures de vol aux instruments il est souvent demandé aux pilotes de respecter un taux de virage standard :"
      },
      {
        "type": "text",
        "text": "Taux standard = taux 1 = 360 ° en 2 min et Taux 1/2 standard = taux 1/2 = 360 ° en 4 min. LA BILLE La bille indique la direction du poids apparent en virage et sert à contrôler la symétrie de vol. Elle est presque toujours intégrée dans le boitier du coordinateur de virage."
      },
      {
        "type": "text",
        "text": "La bille est constituée d'un tube légèrement courbé contenant une goutte de mercure immergée dans un liquide visqueux. L'ensemble est disposé perpendiculairement à l'axe longitudinal de l'avion et la courbure du tube orientée vers le bas."
      },
      {
        "type": "text",
        "text": "En l'absence de dérapage, la bille est en bas du tube (2 repères matérialisent cette position)."
      },
      {
        "type": "text",
        "text": "Lorsque l'avion est en dérapage, la bille est soumise à son poids et à une accélération transversale qui déplace la bille latéralement. Elle indique le côté par lequel le vent relatif arrive."
      },
      {
        "type": "text",
        "text": "Afin d'assurer un vol symétrique, le pilote doit mettre un peu de pied du côté de la bille pour la ramener au centre. Les pilotes ont coutume de dire que « Le pied chasse la bille »."
      },
      {
        "type": "text",
        "text": "Maintenir le vol symétrique permet de consommer moins d'essence et donc de s'assurer une meilleure autonomie. Par ailleurs, du point de vue de la sécurité des vols, si la bille n’est pas au milieu l’avion est en dérapage donc la vitesse de décrochage augmente et cela peut engendrer une vrille à basse vitesse."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.8.2 - Présentation de l'instrument"
      },
      {
        "type": "text",
        "text": "Sa représentation peut être du type bille-aiguille ou bille – maquette avec une indication de taux de virage standard (3° / seconde)."
      },
      {
        "type": "text",
        "text": "C’est l’indicateur classique le plus employée également en aviation générale pour la mesure des dérapages ou glissades en virage"
      },
      {
        "type": "text",
        "text": "L’indication de l’avion s’incline dans le sens du virage et se cale sur le repère lorsque le taux de virage est standard (taux 1)."
      },
      {
        "type": "text",
        "text": "ATTENTION : CET INSTRUMENT NE MESURE NI L’INCLINAISON NI LE CAP."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "4.9 - LES INSTRUMENTS DE RADIONAVIGATION"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.1 - Le radiocompas (ou ADF : Automatic Direction Finder)"
      },
      {
        "type": "text",
        "text": "Le radio compas est constitué d'un ensemble antenne, boîtier et indicateur qui permet de mesurer l'angle (gisement) que fait l'axe de l'avion avec la direction de la station."
      },
      {
        "type": "text",
        "text": "Cet instrument est destiné à indiquer au pilote la direction à suivre pour rejoindre la position d'une balise située au sol. L'équipement est donc constitué d'une balise sol (émetteur) que l'on appelle NDB (Non Directional Beacon) et d'un équipement à bord (récepteur) que l'on appelle radiocompas ou ADF (Automatic Direction Finder)."
      },
      {
        "type": "text",
        "text": "L'instrument se présente sous la forme d'une rose des caps munie d'une aiguille mobile. Cette aiguille pointe en permanence la direction de la balise sol."
      },
      {
        "type": "text",
        "text": "Pour survoler la balise, il suffit donc de prendre un cap tel que l'aiguille soit verticale et orientée vers le haut. En général la rose des caps est fixe. L'angle entre la direction dans laquelle vole l'avion et la direction dans laquelle se situe la balise est appelée Gisement."
      },
      {
        "type": "text",
        "text": "Sur les avions ayant vocation à voler aux instruments, il est fréquent que l'aiguille du radiocompas soit placée sur le même cadran que le conservateur de cap (appelé également directionnel)."
      },
      {
        "type": "text",
        "text": "L'appareil est alors appelé RMI (Radio Magnetic Indicator). L'aiguille indique alors le cap à suivre pour atteindre la balise (on appelle cela le QDM)."
      },
      {
        "type": "text",
        "text": "Pour obtenir le QDM à partir du gisement, il faut additionner le CAP et le GISEMENT QDM = CAP + GISEMENT"
      },
      {
        "type": "text",
        "text": "Ce moyen de navigation est très répandu à bord des avions, même ceux d'aéroclub. Les balises NDB sont en général utilisées pour marquer l'emplacement des points d'entrée dans les circuits de procédure d'approche aux instruments des aéroports. Elles sont alors de faible puissance émettrice (donc de faible portée) et on les appelle des locators (L)."
      },
      {
        "type": "text",
        "text": "Les principales caractéristiques techniques du radiocompas sont les suivantes : Les avantages du radiocompas sont une bonne portée et une information permanente pour le pilote."
      },
      {
        "type": "text",
        "text": "Contrairement au VOR, deux avions sur le même QDM mais ayant des caps différents n'ont pas la même indication instrumentale."
      },
      {
        "type": "text",
        "text": "Il est robuste, répandu et l'équipement sol est simple et bon marché. Toutefois, sa précision est moyenne et les orages le rendent inutilisable : l'aiguille pointe alors les cumulonimbus au lieu des balises. De plus de nuit la réflexion des moyennes ondes sur les hautes couches de l'atmosphère peut engendrer des surprises désagréables."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.2 - Le VOR (VHF Omni Range)"
      },
      {
        "type": "text",
        "text": "Le VOR est un moyen de radionavigation fiable et précis. Il est insensible aux perturbations météo et donne une information continue utile dans toutes les phases du vol. Sa portée reste toutefois limitée et sa précision insuffisante pour assurer un atterrissage sans visibilité."
      },
      {
        "type": "text",
        "text": "Cet équipement a la même vocation que le radiocompas mais travaille dans une gamme de fréquences différente. La présentation de l’appareil peut prendre plusieurs formes. Sur les avions conçus pour le vol aux instruments, il est souvent présenté sur un RMI, une aiguille indiquant alors le cap à prendre pour survoler la balise. Sur les systèmes les plus anciens, il est présenté sur un OBS (cadran circulaire présentant une barre verticale mobile) appelé aussi indicateur de route."
      },
      {
        "type": "text",
        "text": "Le VOR est un moyen de navigation parfois implanté sur un aérodrome, parfois implanté en campagne."
      },
      {
        "type": "text",
        "text": "Son indicatif comporte 3 lettres en morse et sa portée est optique (Réception à vue sans obstacle, plus l'avion est haut, meilleure est la réception)."
      },
      {
        "type": "text",
        "text": "L'émission VOR s'effectue dans la plage de fréquence VHF de 108 à 117,95 MHz. Pour chaque émetteur, sont indiqués sur les cartes au 1/500 000ème OACI et de radionavigation au 1/1 000 000ème :"
      },
      {
        "type": "text",
        "text": "Son emplacement Son indicatif (en clair, transmis en morse) Sa fréquence Une rose orientée NORD Magnétique permettant la lecture directe d'un QDR."
      },
      {
        "type": "text",
        "text": "La réception VOR utilise trois éléments : l'antenne généralement en forme de V, le boîtier de commande comparable à un boîtier radio (ne pas confondre, les fréquences ne sont pas les mêmes)."
      },
      {
        "type": "text",
        "text": "L'indicateur comporte : Une couronne graduée afin de choisir une orientation magnétique grâce à une molette (OBS)."
      },
      {
        "type": "text",
        "text": "Un rond central qui représente l'avion Une aiguille mobile qui représente la route. Un voyant TO et un voyant FROM L'aiguille verticale peut varier de la gauche vers la droite (de - 10° à + 10° par rapport à l'orientation magnétique choisie)."
      },
      {
        "type": "text",
        "text": "L'INDICATION EST INDEPENDANTE DU CAP DE L'AVION. UTILISATION : Afficher avec l’OBS, le radial de la route à suivre (QDM), ici le 327°."
      },
      {
        "type": "text",
        "text": "Si l'avion se trouve sur cette route avec la destination devant, la barre verticale est centrée sur le cadran. Si l'avion est décalé par rapport à cette route la barre est décalée à droite ou à gauche. Pour un décalage inférieur à 10°, la position de la barre permet de le connaître précisément."
      },
      {
        "type": "text",
        "text": "L'indicateur comporte également une indication TO ou FROM qui permet de savoir si on se situe dans le secteur de \"rapprochement\" ou \"d'éloignement\" de la balise."
      },
      {
        "type": "text",
        "text": "Le schéma suivant nous montre comment se répartissent les secteurs TO et FROM (frontière définit par une ligne perpendiculaire au radial choisi (QDM ou QDR). Il nous montre également ce qu’indique la barre de tendance selon la position de l’avion par rapport à la balise lorsque le QDM 327 est sélectionné."
      },
      {
        "type": "text",
        "text": "L’indication de l’OBS ne dépend pas du cap de l’avion mais uniquement de sa position par rapport à la balise."
      },
      {
        "type": "text",
        "text": "Dans le cas des avions dans le secteur TO, le cap est vers la balise. On dira que le VOR agit en directionnel car le cap de l’avion et le radial choisi sont du même ordre de grandeur."
      },
      {
        "type": "text",
        "text": "La barre de tendance lui indique alors de quel côté se trouve la route qu’il a sélectionnée, il suffit de suivre la barre de tendance."
      },
      {
        "type": "text",
        "text": "Pour les avions en secteur FROM, leurs caps les éloignent de la balise. La barre de l’OBS leur indique toujours de quel côté se trouve la route qu’ils avaient choisi. L’OBS est toujours directionnel lorsque cap et route sont du même ordre de grandeur."
      },
      {
        "type": "text",
        "text": "Si l’un des avions s’égare, par exemple pour cause météo et qu’il a modifié plusieurs fois son cap pour éviter des masses nuageuses par exemple, si son cap (070°) est très différent du radial choisi (327°), le VOR indiquera qu’il est dans le secteur FROM alors qu’il se rapproche de la balise. La barre de tendance indiquera également l’inverse de la correction à appliquer. Ne jamais se laisser berner par cette utilisation."
      },
      {
        "type": "text",
        "text": "Comme pour le radiocompas, il existe deux types de VOR. Les VOR de navigation (NAV) à grande portée et les VOR d'arrivée (T : terrain) à faible portée. Les principales caractéristiques des VOR sont données ci-dessous :"
      },
      {
        "type": "text",
        "text": "Le QDM et le QDR n'indique jamais le cap de l'avion mais la direction qu'il faudrait prendre sans vent pour rejoindre la balise."
      },
      {
        "type": "text",
        "text": "Utilisation du VOR en alignement"
      },
      {
        "type": "text",
        "text": "A l'approche de la station, vous entrez dans le cône d'incertitude et l'appareil n'arrive plus à distinguer les routes, en général les deux voyant TO et FROM sont inactifs et parfois le voyant OFF est allumé."
      },
      {
        "type": "text",
        "text": "Utilisation du VOR en butée de navigation (flanquement) Le vor peut également être utilisé afin d'effectuer un point de navigation ou d'indiquer une butée de navigation (point particulier de la navigation)."
      },
      {
        "type": "text",
        "text": "Votre navigation vous fait parcourir le trajet de A vers B, au point A il vous est possible de contrôler votre position car vous devez être à la fois sur le QDM 60 de la station 2 et le QDR 120 de la station 1."
      },
      {
        "type": "text",
        "text": "Au point B, le QDR 180 de la station 1 peut vous indiquer le moment auquel il faut contacter un contrôle, ou bien vous signalez que vous avez manqué votre destination (elle est derrière) ou toute autre décision préprogrammée de la navigation."
      },
      {
        "type": "text",
        "text": "L’utilisation du VOR en flanquement permet également de s’assurer de notre position par rapport à un VOR situé sur le côté de notre voyage."
      },
      {
        "type": "text",
        "text": "Dans certains secteurs comprenant des zones ou lorsque les conditions météo ne sont pas optimales, il est toujours intéressant de savoir si l’on a franchi un radial indiquant le début d’une zone ou pour confirmer notre position si l’on ne distingue pas le point repère caractéristique attendu (erreur de cap, vent différent de la prévision, …)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.3 - Le DME (Distance Measurement Equipment)"
      },
      {
        "type": "text",
        "text": "Les indications d'un VOR ou d'un radiocompas permettent de déterminer la direction d'une balise mais pas de la localiser précisément. Il manque l’'information de distance. Le DME apporte cette information."
      },
      {
        "type": "text",
        "text": "Cet appareil mesure la distance oblique entre l'appareil et une station au sol en analysant le signal émis par l'avion et retransmis par la station. En outre il fournit la vitesse sol de l’avion et le temps pour rejoindre la station."
      },
      {
        "type": "text",
        "text": "A la verticale de la station, il indique l’altitude de l’avion."
      },
      {
        "type": "text",
        "text": "Le DME"
      },
      {
        "type": "text",
        "text": "(Distance Measuring Equipement) est en général associé à un VOR, mais toutes les stations VOR ne disposent pas du retransmetteur de vitesse."
      },
      {
        "type": "text",
        "text": "Les DME sont constitués d'un équipement au sol et d'un équipement embarqué. Le dispositif à bord de l'avion interroge l'équipement au sol qui lui répond. En pratique les DME sont appariés aux VOR et lorsque le pilote sélectionne la fréquence d'un VOR, s'il est couplé à un DME, la fréquence de ce dernier est automatiquement sélectionnée."
      },
      {
        "type": "text",
        "text": "Les caractéristiques techniques des DME sont les suivantes :"
      },
      {
        "type": "text",
        "text": "L'appareil possède une bonne portée. Il est capable de répondre aux interrogations simultanées d’une centaine d'avions, sa précision est correcte et il n'est pas perturbé par la météo. Le seul inconvénient qu'il présente est que la distance affichée est une distance oblique et non une distance horizontale (un avion volant à 10 000 m d'altitude à la verticale de la balise à une indication de 5,5 Nm soit 10 Km)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.4 - l'ILS (Instrument Landing System)"
      },
      {
        "type": "text",
        "text": "Les moyens de radionavigation vus jusqu'à présent permettent à un avion de se déplacer d'un terrain à un autre en assurant le maintien d'une trajectoire et d'un horaire précis. Ils sont suffisants du décollage jusqu'au début de l'approche finale. Pour cette dernière phase de vol, ils manquent de précision pour assurer un atterrissage en toute sécurité en cas de mauvaise visibilité. Pour cela les ingénieurs ont développé l'ILS."
      },
      {
        "type": "text",
        "text": "Cet appareil est constitué de deux balises permettant au pilote de savoir s'il est à droite ou à gauche de l'axe de la piste et s'il est au-dessus ou en dessous du plan de descente qui doit l'amener à se poser sur la piste."
      },
      {
        "type": "text",
        "text": "La première balise est appelée LOCALIZER (LOC) et la seconde est appelée GLIDE. L'information des deux balises est centralisée sur un seul cadran de visualisation afin de faciliter le travail du pilote qui est assez délicat dans cette phase."
      },
      {
        "type": "text",
        "text": "L'information du localizer est donnée comme celle d'un VOR sur un OBS. L'écart latéral maximal dans lequel on reçoit une information est de 10° de chaque côté de l'axe de piste. Le cadran présente une butée à 2,5° de chaque côté (4 fois plus sensible que le VOR). Le LOC est directionnel : si la barre est à gauche du centre du cadran, l'axe de piste est à gauche de l'appareil."
      },
      {
        "type": "text",
        "text": "Afin de se trouver dans une direction proche de l'axe de piste le pilote utilise un VOR ou un radiocompas. Il n'utilise l'information du LOC que lorsque l'indicateur n'est plus en butée."
      },
      {
        "type": "text",
        "text": "L'information du glide est donnée suivant le même principe mais en utilisant une barre verticale. Si la barre est en dessous du centre du cadran, le bon plan de descente est en dessous de la position actuelle de l'avion. Le glide possède une butée à 0,5° au-dessus et en dessous du plan de descente idéal (incliné de 2,5° par rapport à l'horizontale)."
      },
      {
        "type": "text",
        "text": "Les schémas ci-contre montrent la visualisation classique d’un ILS :"
      },
      {
        "type": "text",
        "text": "Dans le premier cas l’avion est à droite du LOC et en dessous du GLIDE."
      },
      {
        "type": "text",
        "text": "Dans le deuxième cas il est idéalement positionné."
      },
      {
        "type": "text",
        "text": "Dans le troisième cas, il est à gauche du LOC et au-dessus du GLIDE."
      },
      {
        "type": "text",
        "text": "TOUJOURS SUIVRE L'AIGUILLE"
      },
      {
        "type": "text",
        "text": "Sur les avions modernes, la représentation de l'ILS est couplée à celle de l'horizon artificiel, de la vitesse et de l'altitude sur un seul écran afin que le pilote puisse acquérir toutes les informations dont il a besoin en observant un seul instrument."
      },
      {
        "type": "text",
        "text": "Les caractéristiques techniques des ILS sont les suivantes :"
      },
      {
        "type": "text",
        "text": "L'ILS est un instrument fiable et précis qui autorise des débits de circulation importants. Il peut être couplé à un pilote automatique. L'infrastructure nécessaire est peu coûteuse mais nécessite d'être calibrée régulièrement et n'est utilisable que pour une seule piste et dans un seul sens."
      },
      {
        "type": "text",
        "text": "Les aéroports importants doivent donc s'équiper de 2 ILS par piste (un dans chaque sens)."
      },
      {
        "type": "text",
        "text": "Attention, l’OBS (réglage du radial) est désactivée en fonction ILS. Le radial de référence qui est l’axe de la piste est réglé automatiquement quand vous passez sur une fréquence ILS."
      },
      {
        "type": "text",
        "text": "Parfois ce système est associé à des marqueurs permettant d'indiquer en plus la distance à la piste."
      },
      {
        "type": "text",
        "text": "Ces marqueurs sont des faisceaux d'onde très fin qui, captés par l'avion lorsqu'il passe à leur verticale allument des voyants de distance (il y en a trois) et déclenchent des alarmes sonores différentes suivant le marker passé."
      },
      {
        "type": "text",
        "text": "On trouve :"
      },
      {
        "type": "list",
        "items": [
          "les Outer-Markers, en général à"
        ]
      },
      {
        "type": "text",
        "text": "6,5 Nm du seuil de piste, l’avion est à 2 000 ft s’il est sur le plan de 5 %, signalisation sonore et lumineuse : trait – trait – trait –"
      },
      {
        "type": "list",
        "items": [
          "les Middle-Markers, en général"
        ]
      },
      {
        "type": "text",
        "text": "à 3 Nm du seuil de piste, l’avion est à 1 000 ft s’il est sur le plan de 5 %, signalisation sonore et lumineuse : trait – point – trait"
      },
      {
        "type": "list",
        "items": [
          "et les Inner-Markers, en général"
        ]
      },
      {
        "type": "text",
        "text": "à 1 Nm du seuil de piste, l’avion est à 300 ft s’il est sur le plan de 5 %, signalisation sonore et lumineuse : point – point – point - ……"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.5 - Le transpondeur (ou IFF : Identification Friend or Foe)"
      },
      {
        "type": "text",
        "text": "Lors de la seconde guerre mondiale les Anglais avaient développé la détection des aéronefs par le système RADAR (Radio Détection And Ranging). Cela leur permettait de détecter l'arrivée d'avions ennemis."
      },
      {
        "type": "text",
        "text": "Rapidement ils se sont rendu compte qu’ils déclenchaient parfois l'alerte en détectant le retour d’avions amis. Ils ont alors développé un système qui permet aux opérateurs radar d'identifier les avions qu'ils détectent : l'IFF."
      },
      {
        "type": "text",
        "text": "Désormais, ce principe de signal codé affecté à un avion à été transposé dans la gestion des avions civils sous le nom de transpondeur."
      },
      {
        "type": "text",
        "text": "Ainsi, les opérateurs radar attribuent un code à l’avion et peuvent suivre sur leur écran le code affiché par le pilote à côté du spot de l'avion. Ce dispositif permet aux aiguilleurs du ciel de reconnaître avec certitude les avions qu'ils contrôlent. Le signal affiché par le pilote est en fait une succession de 4 chiffres allant de 0 à 7."
      },
      {
        "type": "text",
        "text": "En général les deux premiers sont associés à l'organisme de contrôle qui s'occupe de l'appareil, le troisième au contrôleur qui gère l'avion et le dernier permet au contrôleur de distinguer ses avions."
      },
      {
        "type": "text",
        "text": "Certains codes sont associés à des situations particulières :"
      },
      {
        "type": "text",
        "text": "7700 : Emergency (détresse) 7600 : Panne radio 7500 : Détournement d'avion 7000 : Ce code est utilisé par les avions circulant en vol non contrôlé."
      },
      {
        "type": "text",
        "text": "A bord de l'appareil, le transpondeur se présente comme un boîtier avec 4 chiffres affichés et une molette de réglage par chiffre. Un interrupteur permet de le mettre en route. Il possède également un bouton de test. Son bon fonctionnement est obligatoire pour pouvoir voler dans des espaces aériens contrôlés."
      },
      {
        "type": "text",
        "text": "Les transpondeurs simples sont dits mode A, ils n’indiquent que leur position et leur indicatif chiffré. Certains transpondeurs dits mode C indiquent de plus le niveau de vol de l'avion, sa vitesse, et l’évolution de sa trajectoire. D’autres transpondeurs plus évolués dits mode S transmettent en plus des données numériques."
      },
      {
        "type": "text",
        "text": "Tous ces transpondeurs participent à la sécurité des vols car ils sont détectés par les dispositifs anticollision présents à bord des vols commerciaux."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.6 - Le GPS (Global Positioning System)"
      },
      {
        "type": "text",
        "text": "Le développement des méthodes de communication par satellites a amené les experts militaires à imaginer un système de repérage basé sur la réception d'un signal émis par des satellites en orbite basse autour de la terre. La position des satellites peut être connue avec une grande précision."
      },
      {
        "type": "text",
        "text": "Si le récepteur reçoit les signaux de 4 satellites simultanément, en considérant la direction depuis laquelle proviennent ces signaux, il est capable de calculer sa position avec une très grande précision. Ce système s'appelle GPS-NAVSTAR. Il est constitué de 24 satellites assurant une couverture complète du globe terrestre."
      },
      {
        "type": "text",
        "text": "Il n'est plus réservé au domaine militaire et il trouve aujourd'hui une très large application dans le domaine civil. Il permet de repérer une position sur le globe avec une précision de l'ordre de 10 m."
      },
      {
        "type": "text",
        "text": "Il permet également de calculer la vitesse de déplacement, la route réellement suivie, le temps de vol restant jusqu'à un point donné, ..."
      },
      {
        "type": "text",
        "text": "S'il est couplé à un ordinateur de bord et une centrale de navigation, il peut même donner la force et la direction du vent et informer le pilote automatique de l'appareil des corrections à apporter pour maintenir la trajectoire."
      },
      {
        "type": "text",
        "text": "La présentation des GPS est très variée. Elle peut être limitée à une information de cap à suivre et de vitesse, ou aller jusqu'à présenter une carte de navigation."
      },
      {
        "type": "text",
        "text": "Elle évolue avec le prix du récepteur (de 300 à 15 000 €). Ce système est désormais homologué par l'OACI (Organisation de l'Aviation Civile Internationale) pour être utilisé officiellement comme moyen d'approche. Il permet une précision comparable à l'ILS et présente l'avantage de ne nécessiter aucune infrastructure au sol."
      },
      {
        "type": "text",
        "text": "Dans cette optique il serait obligatoirement couplé à une centrale de navigation pour renvoyer les informations sur un afficheur standard d'ILS."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.7 - La radiocommunication"
      },
      {
        "type": "text",
        "text": "Elle permet un contact permanent avec les organismes de l’aviation civile et les avions. Au sol comme en l’air, c’est un instrument contribuant à la sécurité des vols (prévention des abordages, anticollision, information de trafic, positionnement dans l’espace, etc.)."
      },
      {
        "type": "text",
        "text": "Les fréquences utilisées pour les communications air / sol sont dans la gamme VHF (Very High Fréquency) de 118 à 136,995 Mhz. par pas de 0.025 MHz (et bientôt par pas de 8,33 kHz), soit déjà 760 fréquences ou canaux disponibles pour la communication et la navigation)."
      },
      {
        "type": "text",
        "text": "La face avant du système radio possède un bouton de marche/arrêt, un bouton de réglage des fréquences associé à un cadran de visualisation de la fréquence en cours et de la fréquence en attente. Un système permet de s’assurer du réglage de la réception par élimination des filtres et de pouvoir écouter les bruits inter-stations (souffle), on l’appelle le squelch (SQL). Une fois activé, il suffit de régler le volume d’écoute, ainsi a-t-on l’assurance du bon fonctionnement et du niveau d’écoute souhaité."
      },
      {
        "type": "text",
        "text": "Pour ne pas encombrer la fréquence, l’emploi d’une phraséologie standardisée, simple, claire, précise et concise est nécessaire. Le contact avec un organisme de contrôle déclenche la copie des informations de suivi sur un formulaire dénommé strip. On doit y trouver les renseignements tels que : immatriculation, type d’appareil, provenance, destination, altitude, heure estimée, nombre de personnes à bord et autonomie."
      },
      {
        "type": "text",
        "text": "Afin d'éviter des recherches qui seraient lancées sans nouvelle d’un avion, le contrôleur aérien doit être informé avant tout changement de fréquence ou toute demande de quitter la fréquence. Une clairance (autorisation) est donnée pour accord de clôture."
      },
      {
        "type": "text",
        "text": "Deux alphabets sont utilisés : l'alphabet radio et l'alphabet morse utilisé par les balises."
      },
      {
        "type": "text",
        "text": "ALPHABET INTERNATIONAL"
      },
      {
        "type": "text",
        "text": "A Alpha J Juliet S Sierra B Bravo K Kilo T Tango C Charlie L Lima U Uniform D Delta M Mike V Victor E Echo N November W Whiskey F Fox-trot O Oscar X X-Ray G Golf P Papa Y Yankee H Hôtel Q Québec Z Zoulou I India R Roméo"
      },
      {
        "type": "text",
        "text": "Une exception à la règle de l’alphabet international radio intervient pour la dénomination des routes aériennes. La conversion des lettres prend appui sur les couleurs comme A se dit Ambre, B Blue, G Green, R Rouge et W White."
      },
      {
        "type": "text",
        "text": "Les nombres d'un seul chiffre s'énoncent comme ils se prononcent à l'exception de 1 qui se dit unité."
      },
      {
        "type": "text",
        "text": "Les nombres à plusieurs chiffres s'énoncent comme une série de chiffres séparés."
      },
      {
        "type": "text",
        "text": "ALPHABET ET CODE MORSE"
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.8 - La gonio"
      },
      {
        "type": "text",
        "text": "La gonio ou VDF (VHF Direction Finding) est une aide à la navigation qui nécessite un équipement spécifique au sol et un opérateur."
      },
      {
        "type": "text",
        "text": "Cet équipement permet à l'opérateur au sol de relever votre relèvement par rapport à lui, et en retour il peut vous transmettre le QDM pour le rejoindre."
      },
      {
        "type": "text",
        "text": "L'avantage de cette méthode est que vous n'avez besoin que d'une VHF, mais l'inconvénient réside dans le fait que toutes les stations sol n'en sont pas équipées et qu’il faut également un opérateur au sol (liste et fréquences dans les compléments aux cartes de radionavigation)."
      },
      {
        "type": "heading",
        "level": 4,
        "text": "4.9.10 - Les équipements Glass Cockpit"
      },
      {
        "type": "text",
        "text": "Les appareils mécaniques et électromécaniques de contrôle du pilotage, de la navigation et du moteur seront à terme remplacés par un équipement tout écran comportant toutes les anciennes fonctions regroupées sur un seul (ou deux écrans)."
      },
      {
        "type": "text",
        "text": "Déjà homologués par l’OACI à bord des avions commerciaux et d’affaires, on voit désormais ces équipements sur certains avions légers."
      },
      {
        "type": "text",
        "text": "En cas de situation perturbée, quatre instruments conventionnels sont toutefois conservés : le compas, l’Horizon artificiel, le badin et le conservateur de cap."
      },
      {
        "type": "text",
        "text": "ALPHABET A ▄ ▄▄▄ J ▄ ▄▄▄ ▄▄▄ ▄▄▄ S ▄ ▄ ▄ B ▄▄▄ ▄ ▄ ▄ K ▄▄▄ ▄ ▄▄▄ T ▄▄▄ C ▄▄▄ ▄ ▄▄▄ ▄ L ▄ ▄▄▄ ▄ ▄ U ▄ ▄ ▄▄▄ D ▄▄▄ ▄ ▄ M ▄▄▄ ▄▄▄ V ▄ ▄ ▄ ▄▄▄ E ▄ N ▄▄▄ ▄ W ▄ ▄▄▄ ▄▄▄ F ▄ ▄ ▄▄▄ ▄ O ▄▄▄ ▄▄▄ ▄▄▄ X ▄▄▄ ▄ ▄ ▄▄▄ G ▄▄▄ ▄▄▄ ▄ P ▄ ▄▄▄ ▄▄▄ ▄ Y ▄▄▄ ▄ ▄▄▄ ▄▄▄ H ▄ ▄ ▄ ▄ Q ▄▄▄ ▄▄▄ ▄ ▄▄▄ Z ▄▄▄ ▄▄▄ ▄ ▄ I ▄ ▄ R ▄ ▄▄▄ ▄"
      },
      {
        "type": "text",
        "text": "NOMBRES ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄ ▄ ▄▄▄ ▄ ▄ ▄ ▄ ▄ ▄▄▄ ▄ ▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄ ▄▄▄"
      }
    ]
  }
]
