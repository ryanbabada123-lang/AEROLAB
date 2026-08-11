import type { ReactElement } from 'react'

/**
 * SCHÉMAS REDESSINÉS — Cours 4C, Aéromédecine.
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 *
 * Ce cours est le premier trié en entier (docs/INVENTAIRE-FIGURES.md) :
 * 8 de ses 16 figures se redessinent, les 5 planches anatomiques demandent
 * des sources libres, et la check-list M.A. F.O.R.M.E. est un tableau.
 *
 * COMMENT LA GÉOMÉTRIE A ÉTÉ ÉTABLIE. Les trois `viewBox` reprennent les
 * dimensions exactes des découpes de `public/verif/aeromedecine/`, et les
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
