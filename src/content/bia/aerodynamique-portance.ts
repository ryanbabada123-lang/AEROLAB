import type { Course } from '../types'

/**
 * PORTANCE — première fiche construite (§27 / §45 étape 8 / §47).
 *
 * STATUT : `demo`.
 * Les SIMULATIONS et l'architecture sont définitives. Le TEXTE est un
 * squelette de démonstration destiné à être remplacé par la fiche de
 * l'auteur (§25 / §52) : il ne contient que de la physique de manuel,
 * aucune donnée d'aéronef, aucune valeur inventée. L'interface l'annonce
 * explicitement — rien ne se fait passer pour le cours final.
 */

export const portance: Course = {
  id: 'bia-aero-portance',
  track: 'bia',
  subject: 'aerodynamique',
  title: 'La portance',
  claim: "Pourquoi une aile soulève un avion",
  status: 'demo',
  minutes: 18,

  sections: [
    {
      id: 'intro',
      title: 'Le problème',
      blocks: [
        {
          type: 'lead',
          text: "Un avion pèse. Rien, dans l'air qui l'entoure, ne semble pouvoir le tenir. Et pourtant il monte — parce qu'une aile en mouvement force l'air à changer de direction, et que l'air le lui rend.",
        },
        {
          type: 'concept',
          title: "La portance est une force, pas une propriété",
          text: "Une aile immobile ne porte rien. La portance n'existe que s'il y a un mouvement relatif entre l'aile et l'air. C'est ce mouvement, et la façon dont l'aile dévie l'écoulement, qui crée la force.",
        },
        {
          type: 'definition',
          term: 'Portance',
          text: "Composante de la force aérodynamique perpendiculaire à la direction du vent relatif. La composante parallèle, elle, est la traînée.",
        },
      ],
    },

    {
      id: 'profil',
      title: "Le profil et l'incidence",
      blocks: [
        {
          type: 'concept',
          title: "L'incidence est l'angle qui commande tout",
          text: "L'incidence (ou angle d'attaque) est l'angle entre la corde du profil et le vent relatif. Ce n'est pas l'assiette de l'avion, ni l'angle de montée : c'est l'angle vu par l'air. Tant que l'écoulement reste collé, augmenter l'incidence augmente la portance.",
        },
        {
          type: 'simulation',
          sim: 'lift-airfoil',
          title: "Profil, écoulement, incidence",
          brief: "Fais varier l'incidence et observe l'écoulement, la répartition des pressions et la force résultante.",
        },
        {
          type: 'callout',
          tone: 'model',
          title: 'Ce que montre — et ne montre pas — cette simulation',
          text: "La géométrie du profil suit la définition analytique NACA à 4 chiffres. L'écoulement et les pressions sont une représentation qualitative destinée à faire comprendre le mécanisme : ils ne résultent pas d'un calcul de mécanique des fluides. Les valeurs affichées ne sont donc pas celles d'un profil réel.",
        },
      ],
    },

    {
      id: 'mecanisme',
      title: 'Le mécanisme',
      blocks: [
        {
          type: 'concept',
          title: "Dévier l'air vers le bas",
          text: "En traversant l'air, le profil dévie l'écoulement vers le bas. Dévier une masse d'air vers le bas suppose de lui appliquer une force vers le bas ; l'air applique en retour une force égale et opposée sur l'aile, dirigée vers le haut. C'est cette réaction qui porte l'avion.",
        },
        {
          type: 'concept',
          title: 'Vu autrement : une différence de pression',
          text: "La même réalité se lit sur la surface de l'aile. L'écoulement est accéléré sur l'extrados, où la pression devient plus faible, et relativement ralenti sur l'intrados, où elle reste plus élevée. La somme de ces pressions sur toute la surface donne la portance. Les deux descriptions — déviation de l'écoulement et champ de pression — décrivent le même phénomène.",
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Attention à une explication répandue mais fausse',
          text: "L'idée selon laquelle deux filets d'air séparés au bord d'attaque devraient se retrouver en même temps au bord de fuite — et que l'air de l'extrados irait donc plus vite parce qu'il a « plus de chemin » — est incorrecte. Rien n'impose ce rendez-vous, et l'air de l'extrados arrive en réalité en avance. Une aile symétrique, ou un avion en vol dos, porte d'ailleurs très bien.",
        },
        {
          type: 'diagram',
          diagram: 'pressure-field',
          caption: "Répartition schématique des pressions autour d'un profil porteur.",
        },
      ],
    },

    {
      id: 'equation',
      title: "L'équation",
      blocks: [
        {
          type: 'text',
          text: "Tous les paramètres qui influencent la portance se rassemblent dans une seule relation.",
        },
        {
          type: 'formula',
          latex: 'L = \\tfrac{1}{2}\\,\\rho\\,V^{2}\\,S\\,C_L',
          caption: "Équation de la portance.",
          where: [
            { sym: 'L', desc: 'portance, en newtons (N)' },
            { sym: '\\rho', desc: "masse volumique de l'air (kg·m⁻³) — elle diminue avec l'altitude et la température" },
            { sym: 'V', desc: "vitesse de l'aile par rapport à l'air (m·s⁻¹)" },
            { sym: 'S', desc: "surface alaire de référence (m²)" },
            { sym: 'C_L', desc: "coefficient de portance, sans dimension — il dépend du profil et de l'incidence" },
          ],
        },
        {
          type: 'keypoints',
          title: 'Ce que l’équation dit vraiment',
          items: [
            "La vitesse intervient au carré : doubler la vitesse quadruple la portance, à incidence constante.",
            "Le pilote n'agit pas directement sur L. Il agit sur V et sur l'incidence, donc sur C_L.",
            "En altitude, ρ diminue : à même vitesse indiquée et même incidence, l'aile doit être menée plus vite en vitesse vraie.",
            "S est fixée par la construction — sauf lorsque les volets modifient la géométrie du profil.",
          ],
        },
        {
          type: 'simulation',
          sim: 'lift-curve',
          title: 'Courbe Cz = f(α)',
          brief: "Suis le coefficient de portance en fonction de l'incidence, jusqu'au décrochage.",
        },
      ],
    },

    {
      id: 'decrochage',
      title: 'La limite',
      blocks: [
        {
          type: 'concept',
          title: "Au-delà d'une certaine incidence, l'écoulement lâche",
          text: "L'écoulement ne peut pas suivre indéfiniment la courbure de l'extrados. Passé une incidence critique, il décolle de la surface : la portance chute brutalement et la traînée augmente. C'est le décrochage.",
        },
        {
          type: 'keypoints',
          items: [
            "Le décrochage est lié à l'INCIDENCE, pas à la vitesse.",
            "Une aile peut décrocher à n'importe quelle vitesse et dans n'importe quelle assiette.",
            "La vitesse de décrochage publiée correspond à une masse et une configuration données : elle n'est qu'une conséquence de l'incidence critique dans ces conditions précises.",
          ],
        },
        {
          type: 'awaiting',
          what: "Procédures de reconnaissance et de récupération du décrochage — à intégrer depuis la fiche de l'auteur, et à recouper avec le manuel de vol de l'appareil concerné.",
        },
      ],
    },

    {
      id: 'bilan',
      title: 'Bilan',
      blocks: [
        {
          type: 'keypoints',
          title: 'À retenir',
          items: [
            "La portance naît d'un mouvement relatif entre l'aile et l'air.",
            "Elle est perpendiculaire au vent relatif, par définition.",
            "Déviation de l'écoulement et différence de pression décrivent le même phénomène.",
            "L = ½ρV²S·C_L rassemble tous les paramètres.",
            "Le décrochage est affaire d'incidence, pas de vitesse.",
          ],
        },
        { type: 'quiz', quizId: 'bia-aero-portance-q1' },
      ],
    },
  ],

  sources: [
    {
      label: 'NASA Glenn Research Center — Beginner’s Guide to Aeronautics',
      kind: 'pédagogique',
      url: 'https://www.grc.nasa.gov/www/k-12/airplane/',
      detail:
        "Référence pour la formulation de l'équation de la portance et la réfutation de l'argument des « temps de parcours égaux ».",
    },
    {
      label:
        'Ira H. Abbott & Albert E. von Doenhoff — Theory of Wing Sections, Dover, 1959',
      kind: 'ouvrage',
      detail:
        'Définition analytique des profils NACA à 4 chiffres, utilisée pour tracer le profil des simulations.',
    },
    {
      label: "Fiche de cours de l'auteur",
      kind: 'fiche auteur',
      detail:
        "À intégrer. Elle remplacera le texte de démonstration et fixera le niveau, le vocabulaire et les priorités de la matière.",
    },
  ],
}
