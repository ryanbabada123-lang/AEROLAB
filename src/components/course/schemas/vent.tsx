/**
 * SCHÉMAS REDESSINÉS — Cours 1 Météorologie, § 4 « Le vent ».
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 */

/** p. 12 — les trois forces et l'écoulement autour de H et de B. */
export function VentForces() {
  // Isobares : deux familles de courbes en vis-à-vis, H à gauche, B à droite.
  const iso = (cx: number, k: number, dir: 1 | -1) =>
    `M${cx + dir * k * 0.2},40 C${cx + dir * k},120 ${cx + dir * k},200 ${cx + dir * k * 0.2},280`

  return (
    <svg viewBox="0 0 700 320" role="img" aria-label="Forces agissant sur le vent : force de gradient de pression, force de Coriolis, force de frottements, et vitesse du vent, entre un anticyclone H et une dépression B">
      <g fill="none" stroke="#2b333d" strokeWidth="1.1">
        {[40, 80, 120, 160].map((k) => (
          <path key={`h${k}`} d={iso(300, k, -1)} />
        ))}
        {[40, 80, 120, 160].map((k) => (
          <path key={`b${k}`} d={iso(400, k, 1)} />
        ))}
        <line x1="350" y1="30" x2="350" y2="290" />
      </g>

      {/* Vent tangent aux isobares : flèches violettes, comme l'original. */}
      <defs>
        <marker id="v-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="#5b3fd0" strokeWidth="1.6" />
        </marker>
        <marker id="v-black" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#2b333d" />
        </marker>
        <marker id="v-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#b3261e" />
        </marker>
        <marker id="v-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#d98613" />
        </marker>
      </defs>
      <g stroke="#5b3fd0" strokeWidth="1.4" markerEnd="url(#v-purple)" fill="none">
        <path d="M212,74 l24,-22" />
        <path d="M186,132 l14,-28" />
        <path d="M188,198 l-8,-30" />
        <path d="M214,252 l-22,-24" />
        <path d="M486,74 l-24,-22" />
        <path d="M512,132 l-14,-28" />
        <path d="M510,198 l8,-30" />
        <path d="M486,252 l22,-24" />
        <path d="M350,60 l0,-26" />
        <path d="M350,262 l0,26" />
      </g>

      {/* Le triangle des forces, sur l'isobare de gauche. */}
      <g strokeWidth="2.4" fill="none">
        <line x1="243" y1="176" x2="345" y2="176" stroke="#2b333d" markerEnd="url(#v-black)" />
        <line x1="243" y1="176" x2="198" y2="146" stroke="#d98613" markerEnd="url(#v-orange)" />
        <line x1="243" y1="176" x2="212" y2="222" stroke="#b3261e" markerEnd="url(#v-red)" />
        <line x1="243" y1="176" x2="316" y2="232" stroke="#5b3fd0" markerEnd="url(#v-purple)" />
      </g>

      <g fontFamily="var(--f-sans)" fontSize="12">
        <text x="150" y="188" fontSize="30" fontWeight="700" fill="#0b0f14">H</text>
        <text x="548" y="188" fontSize="30" fontWeight="700" fill="#0b0f14">B</text>
        <text x="118" y="140" fill="#d98613">Force de</text>
        <text x="118" y="154" fill="#d98613">frottements</text>
        <text x="252" y="158" fill="#2b333d">Force de gradient</text>
        <text x="252" y="172" fill="#2b333d">de pression</text>
        <text x="126" y="240" fill="#b3261e">Force de</text>
        <text x="126" y="254" fill="#b3261e">CORIOLIS</text>
        <text x="288" y="256" fill="#5b3fd0">Vitesse du</text>
        <text x="288" y="270" fill="#5b3fd0">vent</text>
      </g>
    </svg>
  )
}

/** p. 13 — circulation générale : les trois cellules et les vents dominants. */
export function CellulesHadley() {
  const bands: { y0: number; y1: number; label: string; tint: string }[] = [
    { y0: 40, y1: 78, label: 'vents d’ouest', tint: '#dce8f5' },
    { y0: 78, y1: 118, label: 'anticyclones des déserts', tint: '#c94b4b' },
    { y0: 118, y1: 152, label: 'vents alizés', tint: '#dce8f5' },
    { y0: 152, y1: 188, label: 'front intertropical', tint: '#ffffff' },
    { y0: 188, y1: 222, label: 'vents alizés', tint: '#dce8f5' },
    { y0: 222, y1: 262, label: 'anticyclones des déserts', tint: '#c94b4b' },
    { y0: 262, y1: 300, label: 'vents d’ouest', tint: '#dce8f5' },
  ]
  return (
    <svg viewBox="0 0 560 360" role="img" aria-label="Circulation atmosphérique générale : cellules de Hadley, jet-streams polaires, fronts polaires, vents d'ouest, vents alizés et front intertropical">
      <defs>
        <clipPath id="hd-globe">
          <circle cx="280" cy="170" r="132" />
        </clipPath>
      </defs>
      <circle cx="280" cy="170" r="132" fill="#eaf1f8" stroke="#5a6673" strokeWidth="1" />
      <g clipPath="url(#hd-globe)">
        {bands.map((b, i) => (
          <g key={i}>
            <rect x="148" y={b.y0} width="264" height={b.y1 - b.y0} fill={b.tint} opacity={b.tint === '#c94b4b' ? 0.85 : 0.7} />
            <text
              x="280"
              y={(b.y0 + b.y1) / 2 + 3}
              textAnchor="middle"
              fontFamily="var(--f-sans)"
              fontSize="8"
              fill={b.tint === '#c94b4b' ? '#ffffff' : '#0b0f14'}
            >
              {b.label}
            </text>
          </g>
        ))}
        {/* La moitié droite est plus claire dans l'original : hémisphère éclairé. */}
        <rect x="280" y="38" width="132" height="264" fill="#ffffff" opacity="0.28" />
      </g>

      <g fontFamily="var(--f-sans)" fontSize="9" fill="#0b0f14">
        <text x="280" y="26" textAnchor="middle">stratosphère arctique</text>
        <text x="280" y="348" textAnchor="middle">stratosphère antarctique</text>
        <text x="16" y="52">jet-stream polaire</text>
        <text x="16" y="300">jet-stream polaire</text>
        <text x="404" y="52">front polaire</text>
        <text x="404" y="300">front polaire</text>
        <text x="16" y="128">subsidence</text>
        <text x="16" y="240">subsidence</text>
        <text x="18" y="160">cellule</text>
        <text x="18" y="172">de Hadley</text>
        <text x="18" y="210">cellule</text>
        <text x="18" y="222">de Hadley</text>
        <text x="0" y="150">stratosphère</text>
        <text x="0" y="162">équatoriale</text>
        <text x="452" y="150">stratosphère</text>
        <text x="452" y="162">équatoriale</text>
        <text x="430" y="120">cyclone tropical</text>
        <text x="440" y="176">front</text>
        <text x="440" y="188">intertropical</text>
        <text x="440" y="236">cumulus</text>
        <text x="452" y="268">cirrus</text>
        <text x="410" y="292">stratus</text>
        <text x="8" y="326">····· : troposphère</text>
        <text x="8" y="338">altitude : 18 km à l’équateur</text>
        <text x="8" y="350">10 km aux pôles</text>
      </g>
    </svg>
  )
}

/**
 * p. 16 — représentation du vent sur les cartes : rose et flèches.
 *
 * Lecture d'une barbule, telle que l'énonce le cours : « le fanion est
 * constitué de triangles pleins pour 50 kt de vent, de longues barres pour
 * 10 kt et de demi-barres pour 5 kt ». Les barbes sont portées par
 * l'extrémité du mât tournée vers la direction du vent — 360 pour
 * l'exemple 2, le mât descend donc vers le sud et ses barbes sont en haut.
 *
 * Le côté sur lequel les barbes sont portées est donné exemple par
 * exemple (`side`) et non par une formule : les cinq figures de l'auteur
 * ne le placent pas toutes du même côté, et la règle est de reproduire ce
 * qui est dessiné, pas de le corriger.
 */
export function FlechesVent() {
  const barb = (
    /** Extrémité barbée, du côté d'où vient le vent. */
    bx: number,
    by: number,
    /** Direction d'où vient le vent, en degrés (0 = nord, sens horaire). */
    bearing: number,
    side: 1 | -1,
    pennants: number,
    fulls: number,
    halves: number,
    label: string,
  ) => {
    const L = 74
    // Le mât court de l'extrémité barbée vers l'extrémité libre, donc
    // dans la direction opposée au cap.
    const rad = ((bearing + 180 - 90) * Math.PI) / 180
    const ux = Math.cos(rad)
    const uy = Math.sin(rad)
    const nx = -uy * side
    const ny = ux * side

    const tx = bx + ux * L
    const ty = by + uy * L
    const parts: React.ReactNode[] = []
    let d = 0

    for (let i = 0; i < pennants; i++) {
      const a = { x: bx + ux * d, y: by + uy * d }
      const b = { x: bx + ux * (d + 15), y: by + uy * (d + 15) }
      const t = { x: a.x + nx * 20, y: a.y + ny * 20 }
      parts.push(
        <path key={`p${i}`} d={`M${a.x},${a.y} L${t.x},${t.y} L${b.x},${b.y} Z`} fill="#0b0f14" />,
      )
      d += 18
    }
    for (let i = 0; i < fulls; i++) {
      const a = { x: bx + ux * d, y: by + uy * d }
      parts.push(
        <line
          key={`f${i}`}
          x1={a.x}
          y1={a.y}
          x2={a.x + nx * 20}
          y2={a.y + ny * 20}
          stroke="#0b0f14"
          strokeWidth="1.7"
        />,
      )
      d += 11
    }
    for (let i = 0; i < halves; i++) {
      const a = { x: bx + ux * d, y: by + uy * d }
      parts.push(
        <line
          key={`h${i}`}
          x1={a.x}
          y1={a.y}
          x2={a.x + nx * 10}
          y2={a.y + ny * 10}
          stroke="#0b0f14"
          strokeWidth="1.7"
        />,
      )
      d += 11
    }

    return (
      <g>
        <line x1={bx} y1={by} x2={tx} y2={ty} stroke="#0b0f14" strokeWidth="1.7" />
        {parts}
        <text
          x={tx + ux * 10 + 6}
          y={ty + uy * 10 + 6}
          fontFamily="var(--f-sans)"
          fontSize="14"
          fill="#0b0f14"
        >
          {label}
        </text>
      </g>
    )
  }

  const rose = ['360', '045', '090', '135', '180', '225', '270', '315']

  return (
    <svg viewBox="0 0 820 210" role="img" aria-label="Rose des vents et cinq exemples de flèches de vent : 1 vent du 230 pour 55 kt, 2 vent du 360 pour 25 kt, 3 vent du 035 pour 15 kt, 4 vent du 270 pour 75 kt, 5 vent du 315 pour 30 kt">
      {/* Rose des vents. */}
      <g transform="translate(90,100)">
        <circle r="52" fill="none" stroke="#2b333d" strokeWidth="1.1" />
        {[0, 45, 90, 135].map((a) => (
          <line
            key={a}
            x1={-58 * Math.cos((a * Math.PI) / 180)}
            y1={-58 * Math.sin((a * Math.PI) / 180)}
            x2={58 * Math.cos((a * Math.PI) / 180)}
            y2={58 * Math.sin((a * Math.PI) / 180)}
            stroke="#2b333d"
            strokeWidth="1"
          />
        ))}
        <g fontFamily="var(--f-sans)" fontSize="13" fill="#2b333d" textAnchor="middle">
          {rose.map((label, i) => {
            const a = (i * 45 - 90) * (Math.PI / 180)
            return (
              <text key={label} x={70 * Math.cos(a)} y={70 * Math.sin(a) + 4}>
                {label}
              </text>
            )
          })}
        </g>
      </g>

      {/* 1 — 230 / 55 kt : un fanion (50) et une demi-barre (5). */}
      {barb(238, 152, 230, 1, 1, 0, 1, '1')}
      {/* 2 — 360 / 25 kt : deux barres (20) et une demi-barre (5). */}
      {barb(388, 58, 360, -1, 0, 2, 1, '2')}
      {/* 3 — 035 / 15 kt : une barre (10) et une demi-barre (5). */}
      {barb(524, 60, 35, -1, 0, 1, 1, '3')}
      {/* 4 — 270 / 75 kt : un fanion (50), deux barres (20), une demi (5). */}
      {barb(586, 142, 270, -1, 1, 2, 1, '4')}
      {/* 5 — 315 / 30 kt : trois barres (30). */}
      {barb(742, 58, 315, -1, 0, 3, 0, '5')}
    </svg>
  )
}
