/**
 * SCHÉMAS REDESSINÉS — Cours 3, Étude des aéronefs.
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 *
 * RÉSERVE SUR CE COURS : une grande partie de ses 527 figures sont des
 * rendus 3D en écorché (intérieur de l'altimètre, du compas, du moteur) ou
 * des photographies de planches de bord. Elles ne relèvent pas du redessin
 * au trait — pas plus que les photographies de nuages du cours de météo.
 * Seules les figures réellement schématiques sont reprises ici.
 */

/** Cadran d'instrument : le cercle noir commun à tous les schémas de bord. */
function Dial({
  x,
  y,
  r,
  label,
  children,
}: {
  x: number
  y: number
  r: number
  label?: string
  children?: React.ReactNode
}) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle r={r} fill="#12161c" stroke="#3a444f" strokeWidth={r * 0.09} />
      <circle r={r * 0.86} fill="none" stroke="#5b6874" strokeWidth="0.6" />
      {/* Graduations toutes les 30°. */}
      <g stroke="#e6ecf2" strokeWidth={r * 0.05}>
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 * Math.PI) / 180
          return (
            <line
              key={i}
              x1={Math.sin(a) * r * 0.74}
              y1={-Math.cos(a) * r * 0.74}
              x2={Math.sin(a) * r * 0.86}
              y2={-Math.cos(a) * r * 0.86}
            />
          )
        })}
      </g>
      {children}
      {label && (
        <text
          y={r * 0.42}
          textAnchor="middle"
          fontFamily="var(--f-mono)"
          fontSize={r * 0.3}
          fill="#cfd8e2"
        >
          {label}
        </text>
      )}
    </g>
  )
}

/**
 * p. 59 — la chaîne barométrique.
 *
 * Trois instruments sur deux prises : le tube de Pitot donne la pression
 * totale, la prise statique la pression statique. L'anémomètre lit la
 * différence, l'altimètre et le variomètre lisent la statique seule. Les
 * libellés sont ceux de la planche d'origine, en anglais.
 */
export function ChaineBarometrique() {
  const TUBE = '#4aa3df'
  /** Le circuit de pression totale est rouge dans la planche d'origine. */
  const TOTAL = '#c0392b'
  const box = (
    x: number,
    y: number,
    w: number,
    t: string,
    fill = '#e8eef4',
  ) => (
    <g>
      <rect x={x} y={y} width={w} height="17" fill={fill} stroke="#5a6673" strokeWidth="0.8" />
      <text
        x={x + w / 2}
        y={y + 11.5}
        textAnchor="middle"
        fontFamily="var(--f-sans)"
        fontSize="8"
        fill="#0b0f14"
      >
        {t}
      </text>
    </g>
  )

  return (
    <svg viewBox="0 0 700 400" role="img" aria-label="La chaîne barométrique : le tube de Pitot fournit la pression totale et la prise statique la pression statique ; l'anémomètre lit la différence, l'altimètre et le variomètre lisent la statique seule">
      <rect x="0" y="0" width="700" height="400" fill="#f7f2e4" stroke="#2f4b8a" strokeWidth="1.5" />

      {/* Les trois instruments. */}
      <Dial x={252} y={92} r={38} label="ASI">
        <path d="M0,0 L20,-24" stroke="#e6ecf2" strokeWidth="3" strokeLinecap="round" />
      </Dial>
      <Dial x={366} y={92} r={38} label="VSI">
        <path d="M0,0 L26,-6" stroke="#e6ecf2" strokeWidth="3" strokeLinecap="round" />
      </Dial>
      <Dial x={480} y={92} r={38} label="ALT">
        <path d="M0,0 L6,-27" stroke="#e6ecf2" strokeWidth="3" strokeLinecap="round" />
        <path d="M0,0 L18,12" stroke="#e6ecf2" strokeWidth="2" strokeLinecap="round" />
      </Dial>

      {box(206, 22, 94, 'Airspeed indicator (ASI)')}
      {box(316, 22, 100, 'Vertical speed indicator (VSI)')}
      {box(444, 22, 72, 'Altimeter')}

      {/* La tuyauterie. Deux circuits, et c'est tout le propos du schéma :
          la pression TOTALE, en rouge, ne va qu'à l'anémomètre ; la pression
          STATIQUE, en bleu, alimente les trois instruments. L'anémomètre lit
          la différence entre les deux, l'altimètre et le variomètre lisent
          la statique seule. */}
      <g fill="none" strokeWidth="9" strokeLinecap="round">
        <path d="M150,286 L150,196 L252,196 L252,132" stroke={TOTAL} />
        <path d="M600,250 L600,232 L480,232 L366,232 L300,232" stroke={TUBE} />
        <path d="M366,232 L366,132" stroke={TUBE} />
        <path d="M480,232 L480,132" stroke={TUBE} />
      </g>

      {/* Le tube de Pitot, en coupe. */}
      <g>
        <path d="M64,292 L200,292 L200,312 L64,312 Z" fill="#c9d3dd" stroke="#5a6673" strokeWidth="1" />
        <path d="M40,296 L64,292 L64,312 L40,308 Z" fill="#e8623c" stroke="#5a6673" strokeWidth="1" />
        <rect x="140" y="286" width="6" height="26" fill="#8a939d" />
        <circle cx="176" cy="316" r="3.4" fill="#0b0f14" />
      </g>

      {/* La prise statique. */}
      <g>
        <rect x="576" y="250" width="48" height="40" fill="#c9d3dd" stroke="#5a6673" strokeWidth="1" />
        <circle cx="600" cy="270" r="8" fill="#0b0f14" />
        <circle cx="600" cy="270" r="3" fill="#c9d3dd" />
      </g>

      {/* Le réservoir de mise à l'air de secours. */}
      <circle cx="470" cy="330" r="30" fill="#5fb4e8" stroke="#2f4b8a" strokeWidth="1.2" />
      <line x1="470" y1="300" x2="470" y2="232" stroke={TUBE} strokeWidth="9" strokeLinecap="round" />
      <rect x="404" y="288" width="20" height="26" fill="#e8eef4" stroke="#5a6673" strokeWidth="0.8" />
      <text x="414" y="298" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="6" fill="#0b0f14">ON</text>
      <text x="414" y="309" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="6" fill="#0b0f14">OFF</text>

      {/* Les libellés de la planche, avec leurs traits de rappel. */}
      <g stroke="#5a6673" strokeWidth="0.7">
        <line x1="176" y1="196" x2="176" y2="292" />
        <line x1="152" y1="242" x2="118" y2="242" />
        <line x1="576" y1="270" x2="642" y2="270" />
        <line x1="176" y1="316" x2="176" y2="346" />
      </g>

      {box(120, 182, 78, 'Pressure chamber')}
      {box(120, 210, 70, 'Static chamber')}
      {box(120, 238, 62, 'Baffle plate')}
      {box(120, 266, 56, 'Pitot tube')}
      {box(14, 322, 54, 'Ram air')}
      {box(96, 322, 62, 'Static hole')}
      {box(150, 346, 60, 'Drain hole')}
      {box(636, 258, 58, 'Static port')}
      {box(84, 368, 90, 'Heater (100 watts)')}
      {box(220, 368, 84, 'Heater (35 watts)')}
      {box(330, 368, 96, 'Pitot heater switch')}
      {box(452, 368, 112, 'Alternate static source')}
    </svg>
  )
}

/**
 * p. 75 — les secteurs TO et FROM du VOR.
 *
 * Le radial choisi (ici QDM 327) et sa perpendiculaire découpent le plan en
 * deux : au-delà de la perpendiculaire, l'indicateur affiche FROM ; en deçà,
 * TO. L'indication ne dépend PAS du cap de l'avion, seulement de sa position
 * par rapport à la balise — c'est tout le propos du schéma.
 */
export function VorToFrom() {
  const C = 250
  const R = 190
  const pt = (deg: number, r: number) => {
    const a = ((deg - 90) * Math.PI) / 180
    return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) }
  }
  const wedge = (from: number, to: number, r: number) => {
    const a = pt(from, r)
    const b = pt(to, r)
    const large = ((to - from + 360) % 360) > 180 ? 1 : 0
    return `M${C},${C} L${a.x},${a.y} A${r},${r} 0 ${large} 1 ${b.x},${b.y} Z`
  }

  /** Petit avion vu de dessus, avec son indicateur OBS. */
  const plane = (x: number, y: number, rot: number, mode: 'TO' | 'FROM') => (
    <g>
      {/* Silhouette en plan : fuselage, aile, empennage. Le nez pointe vers
          le cap de l'appareil — qui, justement, ne détermine PAS l'indication. */}
      <g transform={`translate(${x},${y}) rotate(${rot})`} stroke="#5f7a1e" strokeWidth="0.8">
        <path d="M0,-17 L2.6,-11 L2.6,13 L-2.6,13 L-2.6,-11 Z" fill="#e8d44a" />
        <path d="M-19,-3 L19,-3 L16,3 L-16,3 Z" fill="#7ec242" />
        <path d="M-8,11 L8,11 L6.5,15 L-6.5,15 Z" fill="#7ec242" />
      </g>
      <g transform={`translate(${x + 34},${y - 30})`}>
        <circle r="21" fill="#12161c" stroke="#3a444f" strokeWidth="2" />
        <text y="-10" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="7" fill="#e6ecf2">
          327
        </text>
        <line x1="0" y1="-4" x2="0" y2="10" stroke="#e6ecf2" strokeWidth="2" />
        <text y="17" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="7" fill="#e6ecf2">
          {mode}
        </text>
      </g>
    </g>
  )

  return (
    <svg viewBox="0 0 640 520" role="img" aria-label="Secteurs TO et FROM d'un VOR : le radial 327 et sa perpendiculaire 057-237 découpent le plan ; l'indication TO ou FROM dépend de la position de l'avion par rapport à la balise, jamais de son cap">
      <rect x="0" y="0" width="640" height="520" fill="#ffffff" stroke="#8d99a6" strokeWidth="1" />

      {/* Les deux demi-plans, de part et d'autre de la perpendiculaire. */}
      <path d={wedge(57, 237, R)} fill="#c8e8d8" opacity="0.55" />
      <path d={wedge(237, 57, R)} fill="#f4c9c2" opacity="0.6" />

      {/* Les radiaux, tous les 10°. */}
      <g stroke="#8d99a6" strokeWidth="0.6" strokeDasharray="3 3">
        {Array.from({ length: 36 }, (_, i) => i * 10).map((d) => {
          const p = pt(d, R)
          return <line key={d} x1={C} y1={C} x2={p.x} y2={p.y} />
        })}
      </g>

      {/* Graduations de la rose. */}
      <g fontFamily="var(--f-sans)" fontSize="8" fill="#5a6673" textAnchor="middle">
        {Array.from({ length: 36 }, (_, i) => i * 10).map((d) => {
          const p = pt(d, R + 13)
          return (
            <text key={d} x={p.x} y={p.y + 3}>
              {String(d === 0 ? 360 : d).padStart(3, '0')}
            </text>
          )
        })}
      </g>

      {/* Le radial choisi, 327 / 147, et sa perpendiculaire 057 / 237. */}
      <line
        x1={pt(327, R).x}
        y1={pt(327, R).y}
        x2={pt(147, R).x}
        y2={pt(147, R).y}
        stroke="#1633c8"
        strokeWidth="3"
      />
      <line
        x1={pt(57, R).x}
        y1={pt(57, R).y}
        x2={pt(237, R).x}
        y2={pt(237, R).y}
        stroke="#e8272b"
        strokeWidth="3"
      />

      {/* La balise. */}
      <circle cx={C} cy={C} r="7" fill="#0b0f14" />

      <g fontFamily="var(--f-display)" fontSize="26" fontWeight="700" textAnchor="middle">
        <text x={C - 6} y={C - 118} fill="#1633c8">FROM</text>
        <text x={C - 128} y={C - 32} fill="#1633c8">FROM</text>
        <text x={C + 94} y={C + 44} fill="#e8272b">TO</text>
        <text x={C - 22} y={C + 122} fill="#e8272b">TO</text>
      </g>

      <g fontFamily="var(--f-sans)" fontSize="13" fontWeight="700">
        <text x="392" y="34" fill="#1633c8">
          Rose des QDR <tspan fontSize="10">(secteur FROM)</tspan>
        </text>
        <text x="18" y="500" fill="#e8272b">
          Rose des QDM <tspan fontSize="10">(secteur TO)</tspan>
        </text>
        <text x={pt(57, R + 40).x} y={pt(57, R + 40).y} fill="#0b0f14">057</text>
        <text x={pt(237, R + 40).x - 22} y={pt(237, R + 40).y} fill="#0b0f14">237</text>
      </g>

      {/* Quatre avions : deux en secteur FROM, deux en secteur TO. Leurs caps
          diffèrent, leur indication ne dépend que de leur position. */}
      {plane(150, 128, 118, 'FROM')}
      {plane(126, 268, 96, 'FROM')}
      {plane(392, 244, 250, 'TO')}
      {plane(330, 386, 268, 'TO')}
    </svg>
  )
}
