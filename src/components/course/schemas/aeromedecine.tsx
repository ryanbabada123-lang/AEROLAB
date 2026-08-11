import type { ReactElement } from 'react'

/**
 * SCHÉMAS REDESSINÉS — Cours 4C, Aéromédecine.
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 *
 * Ce cours est le premier trié en entier (docs/INVENTAIRE-FIGURES.md) :
 * 8 de ses 16 figures se redessinent, les 5 planches anatomiques demandent
 * des sources libres, et la check-list M.A. F.O.R.M.E. est un tableau.
 *
 * COMMENT LA GÉOMÉTRIE A ÉTÉ ÉTABLIE. Chaque `viewBox` reprend les
 * dimensions exactes de la découpe de `public/verif/aeromedecine/`, et les
 * coordonnées ci-dessous ne sont pas estimées à l'œil : elles ont été
 * relevées sur ces images, colonne par colonne, en cherchant les traits
 * sombres. Le comparatif superpose donc l'original et le redessin au pixel,
 * et un écart se voit au lieu de se deviner.
 */

/**
 * Étiquette dont la largeur est imposée.
 *
 * Les libellés des planches ont été mesurés sur l'original ; `textLength`
 * force le texte à occuper exactement cette largeur. Le redessin garde
 * ainsi l'encombrement du document source quelle que soit la police
 * effectivement chargée par le navigateur — sans quoi la superposition ne
 * voudrait plus rien dire.
 */
function Etiquette({
  x,
  y,
  w,
  taille,
  children,
  gras,
}: {
  x: number
  y: number
  w: number
  taille: number
  children: string
  gras?: boolean
}): ReactElement {
  return (
    <text
      x={x}
      y={y}
      textLength={w}
      lengthAdjust="spacingAndGlyphs"
      fontFamily="var(--f-sans)"
      fontSize={taille}
      fontStyle="italic"
      fontWeight={gras ? 600 : 400}
      fill="#22262b"
    >
      {children}
    </text>
  )
}

/** Courbe lisse passant par tous les points (Catmull-Rom converti en Bézier). */
function courbe(pts: [number, number][]): string {
  let d = `M${pts[0][0]},${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[Math.min(pts.length - 1, i + 2)]
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`
  }
  return d
}

/**
 * p. 6 — saturation en oxygène de l'hémoglobine selon l'altitude.
 *
 * DEUX PARTICULARITÉS DU TRACÉ DE L'AUTEUR, conservées telles quelles.
 * L'axe des altitudes DÉCROÎT vers la droite : le sol est à droite, les
 * 20 000 pieds à gauche. Et il n'est pas linéaire — les 4 500 premiers
 * pieds occupent 95 px quand les 10 000 suivants n'en prennent que 117.
 * Les abscisses des graduations sont donc relevées, pas calculées ; seule
 * l'échelle des pourcentages, elle, est régulière.
 */
export function SaturationOxygene() {
  const AXE_X = 60
  const AXE_Y = 532

  /** Ordonnée d'un pourcentage : 0 % à y = 521, 100 % à y = 49. */
  const cy = (pct: number) => 521 - pct * 4.72

  /** Graduations d'altitude : abscisse du repère, du libellé, et sa largeur. */
  const grad = [
    { label: '20.000', x: 264, pct: 63.6, tx: 271, tw: 83 },
    { label: '10.000', x: 474, pct: 89.4, tx: 485, tw: 68 },
    { label: '4.500', x: 591, pct: 93.9, tx: 608, tw: 67 },
    { label: '0', x: 686, pct: 100, tx: 700, tw: 14 },
  ]

  return (
    <svg
      viewBox="0 0 771 575"
      role="img"
      aria-label="Pourcentage de saturation en oxygène de l’hémoglobine selon l’altitude. L’axe des altitudes décroît vers la droite : la saturation vaut 100 % au sol, 94 % à 4 500 pieds, 89 % à 10 000 pieds et 64 % à 20 000 pieds, puis s’effondre au-delà."
    >
      <rect x="0" y="0" width="771" height="575" fill="#ffffff" />

      <Etiquette x={52} y={28} w={548} taille={24}>
        Pourcentage de saturation en O₂ de l’hémoglobine
      </Etiquette>

      {/* Les deux axes, fléchés comme sur l'original. */}
      <g stroke="#22262b" strokeWidth="3" fill="#22262b">
        <line x1={AXE_X} y1={AXE_Y} x2={AXE_X} y2="52" />
        <path d={`M${AXE_X - 6},54 L${AXE_X},38 L${AXE_X + 6},54 Z`} />
        <line x1={AXE_X - 2} y1={AXE_Y} x2="734" y2={AXE_Y} />
        <path d={`M734,${AXE_Y - 9} L765,${AXE_Y} L734,${AXE_Y + 9} Z`} />
      </g>

      {/* Graduations de saturation, tous les 10 %. */}
      <g fontFamily="var(--f-sans)" fontSize="25" fill="#22262b" textAnchor="end">
        {Array.from({ length: 11 }, (_, i) => i * 10).map((v) => (
          <text key={v} x="52" y={cy(v) + 9}>
            {v}
          </text>
        ))}
      </g>

      {/* Repères pointillés : une horizontale et une verticale par altitude. */}
      <g stroke="#22262b" strokeWidth="2" strokeDasharray="3 5">
        {grad.map((g) => (
          <g key={g.label}>
            <line x1={AXE_X} y1={cy(g.pct)} x2={g.x} y2={cy(g.pct)} />
            <line x1={g.x} y1={cy(g.pct)} x2={g.x} y2={AXE_Y} />
          </g>
        ))}
      </g>

      {/*
        La courbe de dissociation. Les points sont ceux relevés sur
        l'original, une colonne sur vingt : elle part de l'origine, s'incurve
        vers 50 % au-dessus de 20 000 ft, puis s'aplatit jusqu'au sol.
      */}
      <path
        d={courbe([
          [62, 529],
          [100, 496],
          [140, 449],
          [170, 397],
          [200, 329],
          [230, 271],
          [260, 226],
          [290, 193],
          [320, 167],
          [360, 139],
          [400, 119],
          [440, 105],
          [480, 97],
          [520, 90],
          [560, 81],
          [600, 75],
          [640, 66],
          [692, 50],
        ])}
        fill="none"
        stroke="#727272"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Libellés d'altitude, sous l'axe. */}
      <g fontFamily="var(--f-sans)" fontSize="25" fill="#22262b" textAnchor="middle">
        {grad.map((g) => (
          <text
            key={g.label}
            x={g.tx}
            y="563"
            textLength={g.tw}
            lengthAdjust="spacingAndGlyphs"
          >
            {g.label}
          </text>
        ))}
      </g>
      <text
        x="55"
        y="563"
        textLength="133"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="var(--f-sans)"
        fontSize="19"
        fill="#22262b"
      >
        altitude en Ft
      </text>
    </svg>
  )
}

/**
 * p. 6 — les seuils de l'hypoxie d'altitude.
 *
 * L'original n'est pas une série de repères : c'est un ESCALIER. Chaque
 * seuil ouvre un palier horizontal qui court jusqu'au bord droit, et le
 * passage d'un palier au suivant est figuré par un RESSORT — deux montants
 * verticaux entre lesquels s'empilent les spires. Une rampe monte du sol
 * jusqu'au palier des 13 500 ft, gravie par trois personnages.
 *
 * L'échelle des altitudes est linéaire, et se vérifie : le sol relevé à
 * y = 511 et les 20 000 ft à y = 163 replacent 4 500, 11 500 et 13 500 ft
 * à moins d'un pixel de leurs traits mesurés sur l'original.
 */
export function SeuilsHypoxie() {
  const AXE_X = 135
  const SOL = 511
  const DROITE = 724

  const cy = (ft: number) => SOL - (ft / 20000) * (SOL - 163)

  /**
   * Un palier : son altitude, l'abscisse où le trait plein prend le relais
   * du pointillé, et son étiquette telle que l'auteur l'écrit — point comme
   * séparateur de milliers, unité collée. `lx` et `lw` situent l'étiquette.
   */
  const paliers = [
    { ft: 20000, x: 441, label: '20.000ft', lx: 23, lw: 93 },
    { ft: 13500, x: 343, label: '13.500ft', lx: 31, lw: 86 },
    { ft: 11500, x: 301, label: '11.500ft', lx: 27, lw: 88 },
    { ft: 4500, x: 185, label: '4.500ft', lx: 36, lw: 78 },
  ]

  /**
   * Les libellés du domaine, aux emplacements relevés sur l'original.
   *
   * Deux d'entre eux — « Seuil des troubles… » et « Compensation… » —
   * commencent derrière un personnage de la rampe, ce qui rend leur bord
   * gauche impossible à mesurer directement. Leur bord DROIT, lui, est net :
   * leur abscisse est déduite de là, à la largeur moyenne par signe des
   * libellés isolés (12,5 px).
   */
  const libelles = [
    { x: 502, y: 50, w: 345, t: 'Perte de connaissance', taille: 34 },
    { x: 578, y: 100, w: 172, t: 'Seuil critique', taille: 30 },
    { x: 560, y: 222, w: 192, t: 'Troubles marqués', taille: 30 },
    { x: 383, y: 303, w: 463, t: 'Seuil des troubles. Troubles variables', taille: 30 },
    { x: 374, y: 339, w: 425, t: 'Compensation complète sauf déficit', taille: 30 },
    { x: 325, y: 373, w: 173, t: 'vision de nuit', taille: 30 },
    { x: 383, y: 429, w: 223, t: 'Seuil de réaction', taille: 30 },
    { x: 410, y: 477, w: 155, t: 'Indifférence', taille: 30 },
  ]

  /**
   * Ressort de transition, dessiné en vue de côté comme chez l'auteur :
   * deux montants verticaux, et des spires aplaties empilées entre eux.
   */
  const ressort = (x: number, yBas: number, yHaut: number, r: number, spires: number) => {
    const pas = (yBas - yHaut) / spires
    return (
      <g stroke="#22262b" strokeWidth="2.2" fill="none">
        <line x1={x - r} y1={yBas} x2={x - r} y2={yHaut} />
        <line x1={x + r} y1={yBas} x2={x + r} y2={yHaut} />
        {Array.from({ length: spires }, (_, i) => (
          <ellipse key={i} cx={x} cy={yBas - (i + 0.5) * pas} rx={r} ry={pas * 0.44} />
        ))}
      </g>
    )
  }

  /**
   * Silhouette gravissant la rampe : penchée en avant, bras et jambes
   * écartés, à l'échelle des trois figurines de l'original (≈ 60 px).
   */
  const marcheur = (x: number, y: number) => (
    <g transform={`translate(${x},${y}) rotate(-18) scale(1.6)`} fill="#22262b">
      <circle cx="0" cy="-24" r="4.8" />
      <path d="M-3.8,-19 L3.8,-19 L5.2,-3 L-5.2,-3 Z" />
      <path d="M-1.8,-3 L-7,11 L-3.8,12.2 L1,-0.6 Z M1.8,-3 L6,11 L9.2,9.8 L4.8,-1.6 Z" />
      <path d="M-3.6,-17 L-9.6,-6.6 L-7,-5.2 L-1.5,-14 Z M3.6,-17 L9.6,-7.6 L7,-6.2 L1.5,-14 Z" />
    </g>
  )

  return (
    <svg
      viewBox="0 0 862 579"
      role="img"
      aria-label="Les seuils de l’hypoxie d’altitude, dessinés en escalier : indifférence jusqu’à 4 500 pieds, seuil de réaction à 4 500 pieds, seuil des troubles à 11 500 pieds avec compensation complète sauf déficit de la vision de nuit, troubles marqués à 13 500 pieds, perte de connaissance et seuil critique à 20 000 pieds."
    >
      <rect x="0" y="0" width="862" height="579" fill="#ffffff" />

      {/* Axes. */}
      <g stroke="#22262b" strokeWidth="4" fill="#22262b">
        <line x1={AXE_X} y1={SOL} x2={AXE_X} y2="54" />
        <path d={`M${AXE_X - 6},56 L${AXE_X},38 L${AXE_X + 6},56 Z`} />
        <line x1={AXE_X - 2} y1={SOL} x2="736" y2={SOL} />
        <path d={`M736,${SOL - 9} L768,${SOL} L736,${SOL + 9} Z`} />
      </g>

      <Etiquette x={25} y={47} w={118} taille={32}>
        Altitude
      </Etiquette>
      <Etiquette x={111} y={512} w={21} taille={30}>
        0
      </Etiquette>

      {/* Les paliers : pointillé depuis l'axe, puis trait plein vers la droite. */}
      {paliers.map((p) => (
        <g key={p.ft}>
          <line
            x1={AXE_X}
            y1={cy(p.ft)}
            x2={p.x}
            y2={cy(p.ft)}
            stroke="#22262b"
            strokeWidth="2.4"
            strokeDasharray="4 7"
          />
          <line
            x1={p.x}
            y1={cy(p.ft)}
            x2={DROITE}
            y2={cy(p.ft)}
            stroke="#22262b"
            strokeWidth="3"
          />
          <Etiquette x={p.lx} y={cy(p.ft) - 4} w={p.lw} taille={29}>
            {p.label}
          </Etiquette>
        </g>
      ))}

      {/* Les deux ressorts : 13 500 → 20 000 ft, puis au-delà de 20 000 ft. */}
      {ressort(462, cy(13500) - 4, cy(20000) + 1, 23, 8)}
      {ressort(525, cy(20000) - 5, 48, 24, 9)}

      {/*
        La rampe, et ceux qui la gravissent. Elle est droite, de l'origine au
        palier des 13 500 ft. Le dessin de l'auteur, lui, ne l'est pas tout à
        fait : sa rampe coupe le palier des 4 500 ft vingt pixels à gauche de
        là où une droite le ferait. On garde la droite et l'abscisse relevée
        du palier plutôt que d'inventer une courbure.
      */}
      <g stroke="#22262b" strokeWidth="3" fill="none">
        <path d={`M133,${SOL} L343,${cy(13500)}`} />
        <path d={`M147,${SOL} L357,${cy(13500) + 6}`} />
      </g>
      {marcheur(152, 470)}
      {marcheur(256, 362)}
      {marcheur(352, 276)}

      {/* Les libellés du domaine. */}
      {libelles.map((l) => (
        <Etiquette key={l.t} x={l.x} y={l.y} w={l.w} taille={l.taille} gras>
          {l.t}
        </Etiquette>
      ))}
    </svg>
  )
}

/**
 * p. 14 — illusions d'approche selon la largeur de la piste.
 *
 * Trois fois la même approche, au même point de la trajectoire : seule la
 * largeur de piste change. Une piste étroite paraît plus lointaine et fait
 * se poser court ; une piste large paraît plus proche et fait arrondir
 * haut. Les intitulés anglais sont ceux de la planche.
 *
 * Les trois panneaux de la découpe originale n'ont pas la même largeur — le
 * premier est rogné — et les chiffres « 36 » gardent la même hauteur en
 * s'élargissant avec la piste. Les deux sont reproduits tels quels.
 */
export function IllusionsPiste() {
  const HORIZON = 88
  const HAUT = 107
  const BAS = 383

  const panneaux = [
    { titre: 'Narrow', x0: 0, x1: 285, cx: 152.5, ht: 4.3, hb: 70.8, bx: 58, d3: [-32, 23], d6: [12, 21] },
    { titre: 'Normal', x0: 299, x1: 586, cx: 465.5, ht: 12.3, hb: 116.9, bx: 336, d3: [-43, 30], d6: [14, 28] },
    { titre: 'Wide', x0: 601, x1: 929, cx: 782, ht: 26.6, hb: 141.4, bx: 645, d3: [-49, 33], d6: [15, 33] },
  ]

  /** Les tirets de l'axe de piste, aux ordonnées relevées sur l'original. */
  const tirets: [number, number][] = [
    [136, 141],
    [159, 182],
    [207, 236],
    [259, 302],
  ]

  /** Un boîtier lumineux : caisse grise en perspective, deux feux. */
  const boitier = (bx: number, y: number, feu: string, dx: [number, number]) => (
    <g>
      <path d={`M${bx - 1},${y + 8} L${bx + 6},${y} L${bx + 34},${y} L${bx + 27},${y + 8} Z`} fill="#6f747a" />
      <rect x={bx - 1} y={y + 8} width="28" height="17" fill="#b4b9be" />
      <rect x={bx + 2} y={y + 25} width="7" height="6" fill="#8d9399" />
      <rect x={bx + 17} y={y + 25} width="7" height="6" fill="#8d9399" />
      <circle cx={bx + dx[0]} cy={y + 15} r="5.6" fill={feu} />
      <circle cx={bx + dx[1]} cy={y + 15} r="5.6" fill={feu} />
    </g>
  )

  return (
    <svg
      viewBox="0 0 930 383"
      role="img"
      aria-label="Illusions d’approche : la même approche vue sur une piste étroite, une piste normale et une piste large. La piste étroite paraît plus éloignée, la piste large plus proche."
    >
      <defs>
        <linearGradient id="ip-ciel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5097cd" />
          <stop offset="0.2" stopColor="#6ea6d7" />
          <stop offset="0.5" stopColor="#a0c4e3" />
          <stop offset="0.82" stopColor="#cfe2eb" />
          <stop offset="1" stopColor="#e3f0fa" />
        </linearGradient>
        <linearGradient id="ip-sol" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#978c37" />
          <stop offset="0.06" stopColor="#8f871f" />
          <stop offset="0.19" stopColor="#9f8f1e" />
          <stop offset="0.4" stopColor="#8f980f" />
          <stop offset="0.62" stopColor="#8fa401" />
          <stop offset="1" stopColor="#91b800" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="930" height={BAS} fill="#ffffff" />

      {panneaux.map((p) => {
        const w = p.x1 - p.x0 + 1
        return (
          <g key={p.titre}>
            <rect x={p.x0} y="0" width={w} height={HORIZON} fill="url(#ip-ciel)" />
            <rect x={p.x0} y={HORIZON} width={w} height={BAS - HORIZON} fill="url(#ip-sol)" />

            <text
              x={(p.x0 + p.x1) / 2}
              y="36"
              textAnchor="middle"
              fontFamily="var(--f-sans)"
              fontSize="33"
              fill="#0b0f14"
            >
              {p.titre}
            </text>

            {/* La piste en fuite : même longueur apparente, largeur différente. */}
            <path
              d={`M${p.cx - p.ht},${HAUT} L${p.cx + p.ht},${HAUT} L${p.cx + p.hb},${BAS} L${p.cx - p.hb},${BAS} Z`}
              fill="#080808"
            />

            {/* Axe de piste : tirets blancs, de plus en plus longs en approchant. */}
            <g stroke="#ffffff" strokeWidth="3">
              {tirets.map(([y0, y1]) => (
                <line key={y0} x1={p.cx} y1={y0} x2={p.cx} y2={y1} />
              ))}
            </g>

            {/* Le numéro de piste, 36, de part et d'autre de l'axe. */}
            <g
              fontFamily="var(--f-display)"
              fontSize="88"
              fontWeight="700"
              fill="#ffffff"
              lengthAdjust="spacingAndGlyphs"
            >
              <text x={p.cx + p.d3[0]} y="368" textLength={p.d3[1]}>
                3
              </text>
              <text x={p.cx + p.d6[0]} y="368" textLength={p.d6[1]}>
                6
              </text>
            </g>

            {/* Les deux boîtiers lumineux posés à gauche du seuil. */}
            {boitier(p.bx, 277, '#d21f22', [6, 18])}
            {boitier(p.bx - 23, 314, '#f4f4f4', [7, 21])}
          </g>
        )
      })}
    </svg>
  )
}

/**
 * p. 4 — principes de pressurisation cabine.
 *
 * Quatre profils partant tous de l'origine, et c'est leur écart qui porte
 * l'information : deux altitudes AVION — 40 000 ft pour le chasseur,
 * 30 000 ft pour l'avion de ligne — et, en dessous, les deux altitudes
 * CABINE correspondantes. Celle du chasseur monte à 4 500 ft, s'y tient,
 * puis rejoint 20 000 ft ; celle de l'avion de ligne reste au niveau de la
 * mer avant de s'établir un peu au-dessus.
 *
 * L'échelle des altitudes n'est pas régulière : l'auteur a remonté le
 * repère des 4 500 ft pour le rendre lisible. Les ordonnées sont donc
 * relevées sur l'original, une par une.
 *
 * Les silhouettes sont volontairement schématiques. Les originaux sont des
 * cliparts en demi-teinte ; les redessiner « en vrai » fabriquerait une
 * autre image. Ce qui compte ici est de savoir quel appareil suit quel
 * profil, et cela une silhouette le dit.
 */
export function PressurisationCabine() {
  const AXE_X = 96
  const SOL = 481

  /** Ordonnées relevées des paliers, et abscisse du libellé associé. */
  const paliers = [
    { y: 130, label: '40.000', lx: 10, lw: 68 },
    { y: 223, label: '30.000', lx: 10, lw: 68 },
    { y: 301, label: '20.000', lx: 10, lw: 68 },
    { y: 388, label: '4.500', lx: 10, lw: 56 },
  ]

  /** Les quatre profils, en polylignes. */
  const profils: [number, number][][] = [
    // Altitude avion — chasseur.
    [[98, SOL], [382, 131], [630, 131]],
    // Altitude avion — avion de ligne.
    [[96, SOL], [430, 223], [620, 223]],
    // Altitude cabine du chasseur : 4 500 ft, palier, puis 20 000 ft.
    [[96, SOL], [171, 388], [341, 388], [440, 301], [625, 301]],
    // Altitude cabine de l'avion de ligne : niveau de la mer, puis palier.
    [[96, 477], [378, 477], [432, 442], [614, 442]],
  ]

  /** Silhouette d'un personnage assis, tourné vers la droite. */
  const assis = (x: number, y: number, lit: boolean) => (
    <g transform={`translate(${x},${y})`} fill="#22262b">
      <circle cx="26" cy="-72" r="11" />
      {/* Casque du pilote, planche de lecture du passager. */}
      {lit ? (
        <path d="M40,-62 L64,-70 L66,-64 L42,-56 Z" />
      ) : (
        <path d="M14,-78 Q26,-90 38,-78 L38,-74 L14,-74 Z" />
      )}
      <path d="M18,-60 L40,-60 L44,-26 L16,-26 Z" />
      {/* Cuisses puis tibias : la posture assise. */}
      <path d="M16,-30 L58,-30 L58,-18 L16,-18 Z" />
      <path d="M46,-20 L58,-20 L58,0 L46,0 Z" />
      {/* Bras tendu vers l'avant. */}
      <path d="M34,-58 L58,-50 L56,-42 L32,-50 Z" />
      {/* Siège. */}
      <path d="M6,-66 L18,-66 L18,0 L6,0 Z M6,-28 L20,-28 L20,-18 L6,-18 Z" />
    </g>
  )

  return (
    <svg
      viewBox="0 0 648 500"
      role="img"
      aria-label="Principes de pressurisation cabine. Deux profils d’altitude avion — 40 000 pieds pour un chasseur, 30 000 pieds pour un avion de ligne — et les deux profils d’altitude cabine correspondants : 4 500 pieds puis 20 000 pieds pour le chasseur, niveau de la mer puis palier bas pour l’avion de ligne."
    >
      <rect x="0" y="0" width="648" height="500" fill="#ffffff" />

      <Etiquette x={152} y={26} w={344} taille={20}>
        Principes de pressurisation cabine.
      </Etiquette>
      <Etiquette x={120} y={51} w={408} taille={20}>
        (Les chiffres sont donnés à titre indicatif).
      </Etiquette>

      {/* Axes. */}
      <g stroke="#22262b" strokeWidth="4" fill="#22262b">
        <line x1={AXE_X} y1={SOL} x2={AXE_X} y2="42" />
        <path d={`M${AXE_X - 9},44 L${AXE_X},20 L${AXE_X + 9},44 Z`} />
        <line x1={AXE_X - 2} y1={SOL} x2="612" y2={SOL} />
        <path d={`M612,${SOL - 9} L640,${SOL} L612,${SOL + 9} Z`} />
      </g>

      {/* Les quatre profils. */}
      <g fill="none" stroke="#22262b" strokeWidth="5" strokeLinejoin="miter">
        {profils.map((p, i) => (
          <polyline key={i} points={p.map(([x, y]) => `${x},${y}`).join(' ')} />
        ))}
      </g>

      {/* Repères d'altitude. */}
      {paliers.map((p) => (
        <Etiquette key={p.label} x={p.lx} y={p.y + 13} w={p.lw} taille={22}>
          {p.label}
        </Etiquette>
      ))}

      {/* Le chasseur, posé sur le palier des 40 000 ft. Nez à droite. */}
      <g fill="#ffffff" stroke="#22262b" strokeWidth="2.6" strokeLinejoin="round" transform="translate(422,127)">
        <path d="M6,-7 L18,-15 L98,-18 L134,-15 L161,-7 L148,-2 L38,-1 L10,-1 Z" />
        <path d="M12,-15 L30,-53 L42,-53 L48,-16 Z" />
        <path d="M2,-11 L22,-14 L22,-9 L2,-7 Z" />
        <path d="M46,-7 L100,-7 L114,0 L58,0 Z" />
        <path d="M98,-18 L112,-24 L130,-23 L134,-16 Z" />
      </g>

      {/* L'avion de ligne, sur le palier des 30 000 ft. Empennage en T. */}
      <g fill="#ffffff" stroke="#22262b" strokeWidth="2.6" strokeLinejoin="round" transform="translate(437,212)">
        <path d="M24,-8 L58,-15 L158,-17 L190,-13 L200,-7 L188,-2 L58,-2 L28,-5 Z" />
        <path d="M28,-15 L48,-44 L64,-44 L66,-16 Z" />
        <path d="M34,-45 L78,-50 L80,-44 L36,-40 Z" />
        <path d="M74,-8 L120,-8 L98,2 L54,2 Z" />
      </g>

      {/*
        La navette le long de la rampe des 40 000 ft, l'appareil supersonique
        le long de celle des 30 000 ft : c'est ainsi que l'auteur associe
        chaque machine à son profil de montée. L'un et l'autre sont dessinés
        moins inclinés que leur rampe — c'est le parti pris de la planche, on
        le garde.
      */}
      <g fill="#ffffff" stroke="#22262b" strokeWidth="2.6" strokeLinejoin="round" transform="translate(256,230) rotate(-32)">
        <path d="M-78,-6 L20,-9 L58,-6 L82,0 L58,6 L-78,7 Z" />
        <path d="M-72,5 L-16,5 L-40,19 L-76,19 Z" />
        <path d="M-72,-6 L-58,-25 L-50,-25 L-54,-6 Z" />
      </g>
      <g fill="#ffffff" stroke="#22262b" strokeWidth="2.6" strokeLinejoin="round" transform="translate(339,260) rotate(-28)">
        <path d="M-96,-4 L60,-7 L94,-3 L102,0 L88,4 L-96,5 Z" />
        <path d="M-46,4 L-4,4 L-26,18 L-64,18 Z" />
        <path d="M-92,-4 L-76,-24 L-68,-24 L-72,-4 Z" />
      </g>

      {/* Le pilote à 20 000 ft de cabine, le passager qui lit au palier bas. */}
      {assis(415, 299, false)}
      {assis(435, 441, true)}
    </svg>
  )
}

/**
 * p. 9 — les facteurs de charge Gx, Gy, Gz sur le pilote.
 *
 * Six flèches et trois rotations, rapportées au pilote : Gz suivant l'axe
 * tête-pieds, Gy suivant l'axe des épaules, Gx suivant l'axe du regard. Le
 * signe suit le sens, et c'est tout ce que la planche dit — mais elle le dit
 * avec une géométrie précise, que le redessin conserve.
 *
 * Les quatre flèches obliques sont TRÈS peu inclinées, une dizaine de degrés
 * seulement : c'est mesuré sur l'original, où une coupe horizontale à mi-
 * hauteur les traverse sur près de cent pixels. Les redresser à 45°, comme
 * le réflexe y pousse, changerait la figure.
 *
 * Le pilote est un clipart en couleurs dans le document ; il est ici réduit
 * à une silhouette. Il ne sert qu'à ancrer les axes.
 */
export function FacteursDeCharge() {
  const CX = 320

  /**
   * Une flèche : de la base vers la pointe, largeur du fût, largeur et
   * longueur de la tête. Les extrémités sont celles relevées sur l'original.
   */
  const fleche = (
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    fut = 14,
    demiTete = 19,
    longTete = 32,
  ) => {
    const dx = x1 - x0
    const dy = y1 - y0
    const l = Math.hypot(dx, dy)
    const ux = dx / l
    const uy = dy / l
    const nx = -uy
    const ny = ux
    const bx = x1 - ux * longTete
    const by = y1 - uy * longTete
    const f = fut / 2
    const p = (px: number, py: number) => `${px.toFixed(1)},${py.toFixed(1)}`
    return (
      <polygon
        points={[
          p(x0 + nx * f, y0 + ny * f),
          p(bx + nx * f, by + ny * f),
          p(bx + nx * demiTete, by + ny * demiTete),
          p(x1, y1),
          p(bx - nx * demiTete, by - ny * demiTete),
          p(bx - nx * f, by - ny * f),
          p(x0 - nx * f, y0 - ny * f),
        ].join(' ')}
        fill="#ffffff"
        stroke="#101418"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    )
  }

  /**
   * Rotation autour d'un axe : un arc noir à deux pointes, comme sur la
   * planche. `ouvert` oriente l'ouverture de l'arc.
   */
  const rotation = (cx: number, cy: number, rx: number, ry: number, angle: number) => (
    <g transform={`translate(${cx},${cy}) rotate(${angle})`} fill="#101418">
      <path
        d={`M${-rx},0 A${rx},${ry} 0 0 1 ${rx},0`}
        fill="none"
        stroke="#101418"
        strokeWidth="5"
      />
      <path d={`M${-rx - 7},-11 L${-rx + 9},-7 L${-rx - 2},3 Z`} />
      <path d={`M${rx + 7},-11 L${rx - 9},-7 L${rx + 2},3 Z`} />
    </g>
  )

  /** Les six libellés, à leur place sur l'original. */
  const libelles = [
    { t: '+ Gz', x: 295, y: 68, w: 43 },
    { t: '- Gz', x: 299, y: 490, w: 43 },
    { t: '+ Gy', x: 48, y: 246, w: 47 },
    { t: '+ Gx', x: 51, y: 376, w: 47 },
    { t: '- Gx', x: 533, y: 262, w: 47 },
    { t: '- Gy', x: 537, y: 366, w: 47 },
  ]

  return (
    <svg
      viewBox="0 0 631 548"
      role="img"
      aria-label="Les facteurs de charge rapportés au pilote : plus Gz vers le haut et moins Gz vers le bas suivant l’axe tête-pieds, plus Gy et moins Gy suivant l’axe des épaules, plus Gx et moins Gx suivant l’axe du regard, avec les trois rotations correspondantes."
    >
      <rect x="0" y="0" width="631" height="548" fill="#ffffff" />
      <rect x="48" y="49" width="546" height="462" fill="#dedede" />
      <rect
        x="43"
        y="44"
        width="546"
        height="462"
        fill="#facc08"
        stroke="#101418"
        strokeWidth="4"
      />

      {/* Les deux flèches verticales : l'axe tête-pieds. */}
      {fleche(CX, 196, 320, 76, 16, 13, 30)}
      {fleche(CX - 4, 372, 317, 474, 16, 13, 30)}

      {/* Les quatre obliques : axes des épaules et du regard. */}
      {fleche(CX - 24, 292, 100, 264)}
      {fleche(CX - 24, 310, 106, 348)}
      {fleche(CX + 24, 292, 528, 266)}
      {fleche(CX + 24, 310, 524, 352)}

      {/* Les trois rotations. */}
      {rotation(316, 152, 42, 20, 0)}
      {rotation(132, 275, 60, 22, 92)}
      {rotation(176, 295, 40, 16, 92)}

      {/*
        Le pilote, réduit à une silhouette : buste, épaules, casque et
        casque-micro. Il n'a d'autre rôle que de porter les trois axes.
      */}
      <g transform="translate(320,300)">
        <path d="M-46,56 L-44,-30 Q-40,-46 -16,-50 L16,-50 Q40,-46 44,-30 L46,56 Z" fill="#f4f4f4" stroke="#101418" strokeWidth="3" />
        <path d="M-3,-50 L3,-50 L8,-6 L0,8 L-8,-6 Z" fill="#101418" />
        <ellipse cx="0" cy="-78" rx="20" ry="25" fill="#7b8188" stroke="#101418" strokeWidth="3" />
        <path d="M-22,-92 Q0,-108 22,-92 L22,-85 Q0,-98 -22,-85 Z" fill="#101418" />
        <path d="M-20,-78 L-26,-78 L-26,-64 L-20,-64 Z M-26,-71 L-10,-61 L-8,-65 Z" fill="#101418" />
        <rect x="-48" y="56" width="96" height="12" fill="#2b3ea8" />
      </g>

      {/* Les libellés. */}
      <g fontFamily="var(--f-sans)" fontSize="24" fontWeight="700" fill="#101418">
        {libelles.map((l) => (
          <text key={l.t} x={l.x} y={l.y} textLength={l.w} lengthAdjust="spacingAndGlyphs">
            {l.t}
          </text>
        ))}
      </g>
    </svg>
  )
}

/**
 * p. 4 — surpression pulmonaire au cours d'une décompression.
 *
 * Le titre reprend l'orthographe de l'auteur, « Supression », qui n'est pas
 * corrigée ici : le comparatif doit rendre le document tel qu'il est.
 *
 * Les deux contours pulmonaires ne sont pas dessinés d'après l'idée qu'on se
 * fait d'un poumon. Ils sont RELEVÉS : l'intérieur de chaque poumon a été
 * isolé sur l'original par remplissage depuis le bord de l'image, puis son
 * bord externe et son bord médial lus ligne à ligne. Les points ci-dessous
 * sont ces relevés, une ligne sur huit.
 *
 * L'arbre bronchique, lui, est schématisé. L'original en donne un dessin
 * très découpé, dont le détail n'enseigne rien de plus que la ramification
 * elle-même.
 */
export function SurpressionPulmonaire() {
  /** Bord externe du poumon gauche, du sommet vers la base. */
  const gaucheExterne: [number, number][] = [
    [216, 38], [205, 42], [188, 52], [176, 62], [166, 72], [157, 82], [150, 92],
    [144, 102], [139, 112], [134, 122], [130, 132], [126, 142], [123, 152],
    [121, 162], [118, 172], [116, 182], [112, 192], [106, 202], [103, 212],
    [101, 222], [100, 232], [101, 242], [102, 252], [104, 262], [106, 272],
    [109, 282], [111, 292], [115, 302], [126, 308], [144, 306],
  ]
  /** Bord médial du poumon gauche, de la base vers le sommet. */
  const gaucheMedial: [number, number][] = [
    [160, 296], [186, 288], [204, 280], [215, 272], [223, 264], [229, 256],
    [233, 248], [237, 240], [239, 232], [241, 224], [242, 216], [243, 208],
    [242, 200], [241, 192], [241, 184], [240, 176], [239, 168], [237, 160],
    [236, 152], [234, 144], [229, 128], [226, 112], [228, 104], [231, 96],
    [232, 88], [233, 80], [233, 72], [233, 64], [232, 56], [231, 48], [225, 41],
  ]
  /** Bord médial du poumon droit, du sommet vers la base. */
  const droitMedial: [number, number][] = [
    [286, 42], [277, 48], [278, 56], [277, 64], [277, 72], [277, 80], [278, 88],
    [280, 96], [282, 104], [284, 112], [283, 120], [278, 132], [275, 144],
    [273, 152], [272, 160], [271, 168], [270, 176], [269, 184], [269, 192],
    [268, 200], [268, 208], [269, 216], [270, 224], [271, 232], [273, 240],
    [277, 248], [281, 256], [287, 264], [296, 272], [310, 282], [332, 292],
    [356, 302], [376, 308],
  ]
  /** Bord externe du poumon droit, de la base vers le sommet. */
  const droitExterne: [number, number][] = [
    [392, 304], [399, 294], [401, 284], [404, 274], [407, 264], [408, 254],
    [410, 244], [411, 234], [411, 224], [409, 214], [406, 204], [401, 194],
    [396, 184], [393, 174], [391, 164], [388, 154], [385, 144], [382, 134],
    [378, 124], [374, 114], [368, 104], [362, 94], [355, 84], [347, 74],
    [337, 64], [324, 54], [310, 46], [298, 42],
  ]

  const poumon = (a: [number, number][], b: [number, number][]) =>
    `${courbe(a)} ${courbe(b).replace(/^M[\d.,-]+/, 'L' + b[0].join(','))} Z`

  /** Petite flèche fine : la dilatation du gaz vers la paroi. */
  const pousse = (x0: number, y0: number, x1: number, y1: number) => {
    const l = Math.hypot(x1 - x0, y1 - y0)
    const ux = (x1 - x0) / l
    const uy = (y1 - y0) / l
    const nx = -uy
    const ny = ux
    const bx = x1 - ux * 9
    const by = y1 - uy * 9
    return (
      <g key={`${x0},${y0}`} stroke="#5a6068" strokeWidth="2" fill="none">
        <line x1={x0} y1={y0} x2={x1} y2={y1} />
        <path d={`M${bx + nx * 4},${by + ny * 4} L${x1},${y1} L${bx - nx * 4},${by - ny * 4}`} />
      </g>
    )
  }

  return (
    <svg
      viewBox="0 0 638 325"
      role="img"
      aria-label="Surpression pulmonaire au cours d’une décompression : les deux poumons, l’arbre bronchique et la trachée. Des flèches montrent le gaz qui se dilate et pousse sur la paroi, le volume pulmonaire d’un côté, la surface d’ouverture de la trachée de l’autre."
    >
      <rect x="0" y="0" width="638" height="325" fill="#ffffff" />

      <Etiquette x={44} y={28} w={583} taille={24}>
        Supression pulmonaire au cours d’une décompression
      </Etiquette>

      {/* Les deux poumons. */}
      <g fill="#ffffff" stroke="#101418" strokeWidth="4" strokeLinejoin="round">
        <path d={poumon(gaucheExterne, gaucheMedial)} />
        <path d={poumon(droitMedial, droitExterne)} />
      </g>

      {/*
        Trachée et arbre bronchique. La bifurcation est relevée à y = 108 —
        au tiers supérieur, et non à mi-hauteur — et les branches partent
        vers le bas ET vers l'extérieur, en s'amincissant. Le détail des
        ramifications de l'original, lui, est schématisé : il n'enseigne rien
        de plus que la ramification elle-même.
      */}
      <g fill="none" stroke="#101418" strokeLinecap="round" strokeLinejoin="round">
        <path d="M255,40 L255,100" strokeWidth="18" />
        <path d="M252,100 L228,124 L212,146" strokeWidth="13" />
        <path d="M258,100 L282,124 L298,146" strokeWidth="13" />
        <path d="M212,146 L206,178 L200,214" strokeWidth="10" />
        <path d="M298,146 L304,178 L310,214" strokeWidth="10" />
        <path d="M222,134 L198,138 L176,134" strokeWidth="8" />
        <path d="M288,134 L312,138 L334,134" strokeWidth="8" />
        <path d="M208,164 L186,172 L170,170" strokeWidth="7" />
        <path d="M302,164 L324,172 L340,170" strokeWidth="7" />
        <path d="M204,190 L182,198 L168,198" strokeWidth="6" />
        <path d="M306,190 L328,198 L342,198" strokeWidth="6" />
        <path d="M200,214 L184,222 L172,220" strokeWidth="5" />
        <path d="M310,214 L326,222 L338,220" strokeWidth="5" />
        <path d="M200,214 L196,228" strokeWidth="7" />
        <path d="M310,214 L314,228" strokeWidth="7" />
      </g>

      {/* La poussée du gaz sur la paroi, en huit points. */}
      {[
        [190, 92, 166, 72],
        [172, 124, 148, 110],
        [160, 158, 136, 150],
        [154, 196, 128, 192],
        [150, 234, 126, 240],
        [158, 268, 136, 280],
        [190, 288, 178, 300],
        [318, 96, 342, 78],
        [332, 128, 356, 116],
        [344, 160, 368, 154],
        [352, 198, 378, 196],
        [354, 236, 380, 240],
        [344, 268, 364, 278],
        [308, 288, 318, 300],
      ].map(([a, b, c, e]) => pousse(a, b, c, e))}

      {/* Les deux amorces et leurs libellés. */}
      <g stroke="#101418" strokeWidth="3">
        <line x1="258" y1="54" x2="352" y2="50" />
        <line x1="222" y1="253" x2="432" y2="247" />
      </g>
      <Etiquette x={355} y={60} w={255} taille={22}>
        Surface ouverture trachée
      </Etiquette>
      <Etiquette x={435} y={256} w={188} taille={22}>
        Volume pulmonaire
      </Etiquette>
    </svg>
  )
}

/**
 * p. 1 — décroissance de la température avec l'altitude, jusqu'à la
 * tropopause.
 *
 * CE QUI N'EST PAS REPRODUIT : le fond. L'auteur a posé son graphique sur
 * une PHOTOGRAPHIE de mer de nuages. Une photographie ne se redessine pas —
 * on en fabriquerait une autre. Le fond est donc un aplat neutre, et tout le
 * reste — axes, graduations, grille, droite verte, bulles et leur texte —
 * est relevé sur l'original.
 *
 * LA GÉOMÉTRIE, ELLE, EST EXACTE ET SE VÉRIFIE. Les quatre altitudes
 * graduées tombent précisément sur les quatre températures graduées :
 * 11 km ↔ −56,5 °C, 6,9 ↔ −30, 4,6 ↔ −15, 2,3 ↔ 0, et le sol ↔ +15. C'est
 * la droite de −6,5 °C par 1 000 m, et les abscisses des graduations sont
 * donc simplement les points où la droite verte coupe chaque niveau.
 */
export function TemperatureTropopause() {
  const AXE_X = 122
  const SOL = 561

  /** Les quatre niveaux gradués : altitude, ordonnée, température, abscisse. */
  const niveaux = [
    { km: '11', y: 112, deg: '- 56,5°', x: 161 },
    { km: '6,9', y: 282, deg: '- 30° C', x: 362 },
    { km: '4,6', y: 382, deg: '- 15° C', x: 480 },
    { km: '2,3', y: 471, deg: '0° C', x: 585 },
  ]

  /** Une bulle : ellipse à dégradé, pointe vers ce qu'elle commente. */
  const bulle = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    remplissage: string,
    queue: string,
  ) => (
    <g stroke="#101418" strokeWidth="2" strokeLinejoin="round">
      <path d={queue} fill={`url(#${remplissage})`} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${remplissage})`} />
    </g>
  )

  return (
    <svg
      viewBox="0 0 803 635"
      role="img"
      aria-label="Décroissance de la température avec l’altitude jusqu’à la tropopause. La droite passe de plus 15 degrés au sol à moins 56,5 degrés à 11 kilomètres, soit moins 2 degrés par 1 000 pieds ou moins 6,5 degrés par 1 000 mètres. Au-dessus de la tropopause la température ne varie plus."
    >
      <defs>
        <linearGradient id="tt-orange" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e4632c" />
          <stop offset="0.55" stopColor="#f0a06a" />
          <stop offset="1" stopColor="#fdf3c8" />
        </linearGradient>
        <linearGradient id="tt-jaune" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b8b800" />
          <stop offset="0.45" stopColor="#e8e800" />
          <stop offset="1" stopColor="#fbfb3a" />
        </linearGradient>
        <linearGradient id="tt-vert" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fae68" />
          <stop offset="0.55" stopColor="#cfe0bd" />
          <stop offset="1" stopColor="#eef5e6" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="803" height="635" fill="#ffffff" />
      <rect x="48" y="4" width="749" height="623" fill="#f3f7fb" stroke="#1b2b6b" strokeWidth="2" />

      {/* Grille : une horizontale de l'axe à la droite, une verticale jusqu'au sol. */}
      <g stroke="#3a3f45" strokeWidth="1.6">
        {niveaux.map((n) => (
          <g key={n.km}>
            <line x1={AXE_X} y1={n.y} x2={n.x} y2={n.y} />
            <line x1={n.x} y1={n.y} x2={n.x} y2={SOL} />
          </g>
        ))}
      </g>

      {/* L'axe des altitudes, en bleu. */}
      <g stroke="#0c328c" strokeWidth="5" fill="#0c328c">
        <line x1={AXE_X} y1={SOL} x2={AXE_X} y2="34" />
        <path d={`M${AXE_X - 10},36 L${AXE_X},14 L${AXE_X + 10},36 Z`} />
      </g>
      <g fontFamily="var(--f-sans)" fontSize="21" fontWeight="700" fill="#0c328c">
        <text x="66" y="52">Alti</text>
        <text x="52" y="76">en Km</text>
      </g>

      {/* L'axe des températures, en rouge. */}
      <g stroke="#cf0f17" strokeWidth="5" fill="#cf0f17">
        <line x1={AXE_X} y1={SOL} x2="758" y2={SOL} />
        <path d={`M758,${SOL - 11} L788,${SOL} L758,${SOL + 11} Z`} />
      </g>

      {/*
        La droite. Verticale au-dessus de la tropopause — la température n'y
        varie plus — puis −6,5 °C par 1 000 m jusqu'au sol.
      */}
      <path
        d={`M159,25 L159,114 L692,${SOL}`}
        fill="none"
        stroke="#0d7a12"
        strokeWidth="9"
        strokeLinejoin="miter"
      />

      {/* Les graduations d'altitude, surlignées de jaune comme sur la planche. */}
      {niveaux.map((n) => (
        <g key={`km-${n.km}`}>
          <rect x={72} y={n.y - 15} width={44} height={26} fill="#fbe94a" />
          <text
            x={114}
            y={n.y + 6}
            textAnchor="end"
            fontFamily="var(--f-sans)"
            fontSize="22"
            fontWeight="700"
            fill="#101418"
          >
            {n.km}
          </text>
        </g>
      ))}

      {/* Les graduations de température, inclinées comme sur la planche. */}
      <g fontFamily="var(--f-sans)" fontSize="22" fontWeight="700" fill="#cf0f17">
        {niveaux.map((n) => (
          <text key={`deg-${n.km}`} transform={`translate(${n.x - 20},${SOL + 14}) rotate(31)`}>
            {n.deg}
          </text>
        ))}
        <text transform={`translate(672,${SOL + 14}) rotate(31)`}>+ 15° C</text>
      </g>
      <rect x="726" y="546" width="68" height="26" fill="#fbe94a" />
      <text x="730" y="567" fontFamily="var(--f-sans)" fontSize="22" fontWeight="700" fill="#cf0f17">
        Degré
      </text>

      {/* Les trois bulles. */}
      {bulle(373, 93, 171, 41, 'tt-orange', 'M212,107 L219,129 L161,115 Z')}
      <g fontFamily="var(--f-sans)" fontSize="22" fontWeight="700" fill="#3b3a94" textAnchor="middle">
        <text x="373" y="95" textLength="290" lengthAdjust="spacingAndGlyphs">
          A la tropopause, la température
        </text>
        <text x="373" y="122" textLength="218" lengthAdjust="spacingAndGlyphs">
          de - 56,5° ne varie plus
        </text>
      </g>

      {bulle(594, 247, 171, 42, 'tt-jaune', 'M470,278 L540,290 L447,330 Z')}
      <g fontFamily="var(--f-sans)" fontSize="22" fontWeight="700" fill="#8a1a0d" textAnchor="middle">
        <text x="594" y="237" textLength="202" lengthAdjust="spacingAndGlyphs">
          Décroissance  linéaire
        </text>
        <text x="594" y="266" textLength="310" lengthAdjust="spacingAndGlyphs">
          - 2° C / 1 000 Ft ou – 6,5° C / 1 000 M
        </text>
      </g>

      {bulle(668, 414, 101, 44, 'tt-vert', 'M646,446 L690,444 L686,550 Z')}
      <g fontFamily="var(--f-sans)" fontSize="21" fontWeight="700" fill="#d4231a" textAnchor="middle">
        <text x="668" y="400" textLength="170" lengthAdjust="spacingAndGlyphs">
          Au sol, la moyenne
        </text>
        <text x="668" y="425" textLength="165" lengthAdjust="spacingAndGlyphs">
          annuelle  terrestre
        </text>
        <text x="668" y="450" textLength="113" lengthAdjust="spacingAndGlyphs">
          est de + 15°
        </text>
      </g>
    </svg>
  )
}

/**
 * p. 2 — la trompe d'Eustache, bouchée puis perméable.
 *
 * Deux fois le même croquis, et c'est le point : à gauche la trompe est
 * complètement bouchée — l'auteur la barre d'une croix — et la pression
 * extérieure pousse seule sur le tympan ; à droite elle est perméable, et
 * l'air passe. Les deux panneaux sont donc dessinés une fois et translatés,
 * ce que l'original fait aussi : le relevé montre que le second panneau
 * reprend le premier à 318 px près, à moins de cinq pixels d'écart partout.
 *
 * CE QUI EST RELEVÉ, ET CE QUI NE L'EST PAS. Le contour du conduit et de la
 * trompe vient d'un remplissage de la lumière blanche sur l'original, lu
 * ligne à ligne — il est exact. Le contour du massif osseux, sa découpe et
 * la position des flèches, de la croix et des amorces sont relevés eux aussi.
 * En revanche la TRAME du fond — le pointillé fin qui figure l'os — est
 * rendue par un aplat gris : c'est une matière d'illustration, pas une
 * géométrie, et la reproduire point par point n'apprendrait rien.
 */
/**
 * Lentille : une membrane vue de profil, tendue entre deux pointes.
 *
 * Deux cubiques symétriques, dont les poignées sont placées au tiers de la
 * longueur et à 1,35 fois la demi-largeur — le facteur qui fait passer une
 * Bézier au plus près de l'arc de cercle. La forme reste donc pleine sur sa
 * partie centrale et se ferme franchement aux extrémités, comme le dessin de
 * l'auteur.
 */
function lentille(x0: number, y0: number, x1: number, y1: number, largeur: number): string {
  const l = Math.hypot(x1 - x0, y1 - y0)
  const ux = (x1 - x0) / l
  const uy = (y1 - y0) / l
  const nx = -uy
  const ny = ux
  const t = l / 3
  const w = (largeur / 2) * 1.35
  const p = (a: number, b: number) => `${a.toFixed(1)},${b.toFixed(1)}`
  return (
    `M${p(x0, y0)}` +
    ` C${p(x0 + ux * t + nx * w, y0 + uy * t + ny * w)}` +
    ` ${p(x1 - ux * t + nx * w, y1 - uy * t + ny * w)} ${p(x1, y1)}` +
    ` C${p(x1 - ux * t - nx * w, y1 - uy * t - ny * w)}` +
    ` ${p(x0 + ux * t - nx * w, y0 + uy * t - ny * w)} ${p(x0, y0)} Z`
  )
}

export function TrompeEustache() {
  /** Contour extérieur du massif, sommet puis bord droit. */
  const massifHaut: [number, number][] = [
    [150, 22], [156, 26], [177, 38], [195, 52], [217, 66], [280, 75],
    [366, 80], [386, 94], [425, 108], [438, 122],
  ]
  /** Découpe blanche du milieu : la paroi inférieure du conduit. */
  const decoupe: [number, number][] = [
    [150, 152], [199, 164], [223, 178], [244, 192], [273, 206], [283, 234],
    [289, 248], [289, 258], [150, 258],
  ]
  /** Lumière : bord gauche du haut vers le bas. */
  const lumenGauche: [number, number][] = [
    [205, 116], [197, 124], [229, 132], [266, 140], [285, 148], [291, 156],
    [290, 164], [294, 172], [300, 180], [304, 188], [308, 196], [311, 204],
    [313, 212], [317, 220], [320, 228], [323, 236], [326, 244], [328, 252],
    [330, 260], [330, 268], [330, 276], [338, 284], [348, 292], [356, 300],
    [361, 308], [366, 316], [372, 326], [388, 360], [404, 396],
  ]
  /** Lumière : bord droit du bas vers le haut. */
  const lumenDroit: [number, number][] = [
    [424, 392], [408, 358], [390, 326], [388, 316], [386, 308], [383, 300],
    [382, 292], [384, 284], [389, 276], [392, 268], [394, 260], [396, 252],
    [396, 244], [395, 236], [394, 228], [393, 220], [391, 212], [389, 204],
    [386, 196], [381, 188], [375, 180], [373, 172], [371, 164], [369, 156],
    [367, 148], [364, 140], [357, 132], [347, 124], [326, 116], [265, 107],
  ]

  const poly = (p: [number, number][]) => p.map(([x, y]) => `${x},${y}`).join(' ')

  /** Flèche fine de pression. `sens` vaut −1 vers la gauche, +1 vers la droite. */
  const pression = (x: number, y: number, l: number, sens: number) => (
    <g key={`${x},${y}`} stroke="#101418" strokeWidth="2.4" fill="none">
      <line x1={x} y1={y} x2={x + l * sens} y2={y} />
      <path
        d={`M${x + (l - 11) * sens},${y - 6} L${x + l * sens},${y} L${x + (l - 11) * sens},${y + 6}`}
      />
    </g>
  )

  /** Un panneau complet. `bouchee` barre la trompe, sinon elle est ouverte. */
  const panneau = (dx: number, bouchee: boolean) => (
    <g transform={`translate(${dx},0)`}>
      <rect x="148" y="22" width="292" height="433" fill="#ffffff" stroke="#101418" strokeWidth="3" />

      {/* Le massif, moins la découpe du milieu. */}
      <path
        d={`${courbe(massifHaut)} L438,453 L150,453 Z M${poly(decoupe).replace(/ /g, ' L').replace(/^/, '')} Z`}
        fill="#d8dade"
        fillRule="evenodd"
        stroke="#101418"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* La lumière du conduit et de la trompe. */}
      <path
        d={`${courbe(lumenGauche)} ${courbe(lumenDroit).replace(/^M[\d.,-]+/, `L${lumenDroit[0].join(',')}`)} Z`}
        fill="#ffffff"
        stroke="#101418"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/*
        Le tympan. Ce n'est pas l'ovale gras qu'on imagine : le relevé donne
        une LENTILLE étroite et longue — 20 px de large pour 113 de long —
        inclinée de 20° sur la verticale, tendue de la pointe du conduit
        (277, 170) au fond de la caisse (317, 276). Sa largeur est
        pratiquement constante sur toute la partie centrale, et ne se ferme
        qu'aux deux extrémités.
      */}
      <path
        d={lentille(277, 170, 317, 276, 20)}
        fill="#c8cace"
        stroke="#101418"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* L'orifice de la trompe, ouvert ou obstrué. */}
      <ellipse cx="414" cy="401" rx="14" ry="9" transform="rotate(-58 414 401)" fill="#ffffff" stroke="#101418" strokeWidth="3" />
      {!bouchee && <path d="M352,300 L392,314 L414,392 L398,398 Z" fill="#101418" />}
      {bouchee && (
        <g stroke="#101418" strokeWidth="9" strokeLinecap="round">
          <line x1="345" y1="308" x2="437" y2="368" />
          <line x1="437" y1="306" x2="347" y2="370" />
          <line x1="392" y1="294" x2="392" y2="382" />
        </g>
      )}

      {/* La pression sur le tympan. À gauche elle ne vient que du dehors. */}
      {bouchee
        ? [
            pression(400, 160, 70, -1),
            pression(400, 202, 70, -1),
            pression(410, 254, 75, -1),
          ]
        : [pression(210, 190, 70, 1), pression(206, 230, 70, 1)]}
    </g>
  )

  return (
    <svg
      viewBox="0 0 796 484"
      role="img"
      aria-label="La trompe d’Eustache. À gauche elle est complètement bouchée : la pression extérieure pousse seule sur le tympan. À droite elle est perméable et l’air passe, ce qui égalise les pressions de part et d’autre du tympan."
    >
      <rect x="0" y="0" width="796" height="484" fill="#ffffff" />
      {panneau(0, true)}
      {panneau(318, false)}

      {/* Les trois libellés du panneau de gauche, et leurs amorces. */}
      <g stroke="#101418" strokeWidth="3" fill="none">
        <line x1="150" y1="122" x2="286" y2="188" />
        <line x1="125" y1="216" x2="236" y2="216" />
        <line x1="277" y1="336" x2="340" y2="306" />
      </g>
      <g fontFamily="var(--f-sans)" fontSize="27" fill="#101418">
        <text x="18" y="132">Tympan</text>
        <text x="18" y="182">Conduit</text>
        <text x="18" y="220">auditif</text>
        <text x="18" y="258">externe</text>
        <text x="166" y="362">Trompe</text>
        <text x="150" y="400">d’Eustache</text>
      </g>
    </svg>
  )
}
