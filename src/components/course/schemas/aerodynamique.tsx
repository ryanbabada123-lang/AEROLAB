/**
 * SCHÉMAS REDESSINÉS — Cours 2 Aérodynamique et mécanique du vol.
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée :
 * géométrie, proportions et étiquettes identiques à l'original.
 */

/**
 * p. 17 — polaire d'une aile d'avion, avec ses points caractéristiques.
 *
 * Les deux échelles sont celles de l'auteur : traînée en 100·Cx de 0 à 20,
 * portance en 100·Cz de −20 à 180. L'échelle des Cx est multipliée par dix
 * par rapport à celle des Cz, ce que le texte explique juste avant — sans
 * quoi « les représentations sont illisibles ».
 */
export function PolaireAile() {
  // Repères du cadre traçant.
  const X0 = 92
  const Y0 = 372
  const W = 430
  const H = 330
  const cx = (v: number) => X0 + (v / 20) * W
  const cz = (v: number) => Y0 - ((v + 20) / 200) * H

  // Points relevés sur la courbe de l'original, en (100Cx, 100Cz).
  const P = {
    portanceMini: [2.9, 0],
    traineeMini: [2.2, 35],
    finesseMaxi: [3.3, 82],
    tauxChuteMini: [5.5, 120],
    portanceMaxi: [13.4, 155],
  } as const

  return (
    <svg viewBox="0 0 600 440" role="img" aria-label="Polaire d'une aile d'avion : coefficient de portance 100 Cz en fonction du coefficient de traînée 100 Cx, avec portance mini, traînée mini, finesse maxi, taux de chute mini, portance maxi et décrochage entre 15 et 18 degrés">
      <rect x="0" y="0" width="600" height="440" fill="#eef2f8" />
      <text
        x="300"
        y="26"
        textAnchor="middle"
        fontFamily="var(--f-display)"
        fontSize="17"
        fontWeight="700"
        fill="#1633c8"
      >
        POLAIRE D’UNE AILE D’AVION
      </text>

      {/* Grille. */}
      <g stroke="#b9c4d4" strokeWidth="0.8">
        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((v) => (
          <line key={`v${v}`} x1={cx(v)} y1={cz(180)} x2={cx(v)} y2={cz(-20)} />
        ))}
        {[-20, 0, 20, 40, 60, 80, 100, 120, 140, 160, 180].map((v) => (
          <line key={`h${v}`} x1={cx(0)} y1={cz(v)} x2={cx(20)} y2={cz(v)} />
        ))}
      </g>

      {/* Axes. */}
      <g stroke="#0b0f14" strokeWidth="1.4">
        <line x1={cx(0)} y1={cz(-20)} x2={cx(0)} y2={cz(180)} />
        <line x1={cx(0)} y1={cz(0)} x2={cx(20)} y2={cz(0)} />
      </g>
      <g fontFamily="var(--f-sans)" fontSize="9" fill="#0b0f14">
        {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((v) => (
          <text key={v} x={cx(v)} y={cz(0) + 12} textAnchor="middle">
            {v}
          </text>
        ))}
        {[-20, 0, 20, 40, 60, 80, 100, 120, 140, 160, 180].map((v) => (
          <text key={v} x={cx(0) - 8} y={cz(v) + 3} textAnchor="end">
            {v}
          </text>
        ))}
      </g>

      {/* La polaire. */}
      <path
        d={`M${cx(3.3)},${cz(-15)}
            C${cx(2.4)},${cz(4)} ${cx(2.15)},${cz(20)} ${cx(2.3)},${cz(40)}
            C${cx(2.5)},${cz(62)} ${cx(3.6)},${cz(92)} ${cx(5.5)},${cz(120)}
            C${cx(7.6)},${cz(142)} ${cx(10.4)},${cz(153)} ${cx(13.4)},${cz(155)}
            C${cx(16.0)},${cz(154)} ${cx(17.8)},${cz(147)} ${cx(19.3)},${cz(133)}`}
        fill="none"
        stroke="#1633c8"
        strokeWidth="3.4"
      />

      {/* Tangente à l'origine : la finesse maximale. */}
      <line x1={cx(0)} y1={cz(0)} x2={cx(4.9)} y2={cz(122)} stroke="#f2c744" strokeWidth="2.2" />
      {/* Horizontale de la portance maximale. */}
      <line x1={cx(0)} y1={cz(155)} x2={cx(14)} y2={cz(155)} stroke="#e8272b" strokeWidth="1.6" />
      {/* Verticale de la traînée minimale. */}
      <line x1={cx(2.2)} y1={cz(0)} x2={cx(2.2)} y2={cz(35)} stroke="#e8272b" strokeWidth="1.6" />

      {/* Points caractéristiques. */}
      <g>
        {Object.entries(P).map(([k, [x, y]]) => (
          <circle key={k} cx={cx(x)} cy={cz(y)} r="4.5" fill="#0e7c5a" stroke="#ffffff" strokeWidth="1.2" />
        ))}
      </g>

      {/* Étiquettes rouges de l'original. */}
      <g fontFamily="var(--f-sans)" fontSize="10.5" fontWeight="700" fill="#e8272b" textAnchor="middle">
        <text x={cx(13.4)} y={cz(170)}>Portance</text>
        <text x={cx(13.4)} y={cz(162)}>MAXI</text>
        <text x={cx(5.2)} y={cz(133)}>Taux de chute</text>
        <text x={cx(5.2)} y={cz(125)}>mini</text>
        <text x={cx(2.3)} y={cz(103)}>Finesse</text>
        <text x={cx(2.3)} y={cz(95)}>MAXI</text>
        <text x={cx(4.3)} y={cz(33)}>Traînée</text>
        <text x={cx(4.3)} y={cz(25)}>MINI</text>
        <text x={cx(4.7)} y={cz(4)}>Portance</text>
        <text x={cx(4.7)} y={cz(-4)}>MINI</text>
        <text x={cx(18.1)} y={cz(122)}>Angle de</text>
        <text x={cx(18.1)} y={cz(114)}>15 à 18°</text>
        <text x={cx(18.1)} y={cz(104)} fontSize="12">Décrochage</text>
      </g>

      {/* Incidences portées le long de la courbe, dans le brun de l'original. */}
      <g fontFamily="var(--f-sans)" fontSize="10" fontWeight="700" fill="#8a3a1f" textAnchor="middle">
        <text x={cx(12.6)} y={cz(147)}>Angle de</text>
        <text x={cx(12.6)} y={cz(139)}>14 à 15°</text>
        <text x={cx(7.7)} y={cz(107)}>Angle de 8°</text>
        <text x={cx(9.5)} y={cz(65)}>Angle de 6°</text>
        <text x={cx(10.5)} y={cz(32)}>Angle de 0°</text>
        <text x={cx(12.7)} y={cz(4)}>Angle de - 2°</text>
      </g>

      {/* Les flèches vertes qui désignent les points caractéristiques. */}
      <defs>
        <marker id="pol-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#0e7c5a" />
        </marker>
      </defs>
      <g stroke="#0e7c5a" strokeWidth="2.2" markerEnd="url(#pol-green)">
        <line x1={cx(6.6)} y1={cz(114)} x2={cx(5.8)} y2={cz(119)} />
        <line x1={cx(7.4)} y1={cz(74)} x2={cx(3.7)} y2={cz(81)} />
        <line x1={cx(7.8)} y1={cz(30)} x2={cx(5.6)} y2={cz(33)} />
        <line x1={cx(9.4)} y1={cz(6)} x2={cx(6.2)} y2={cz(1)} />
      </g>

      {/* La flèche rouge du décrochage : elle descend, comme dans l'original. */}
      <path
        d={`M${cx(18.1) - 9},${cz(98)}
            h18 v26 h9 l-18,24 -18,-24 h9 Z`}
        fill="#e8272b"
      />

      <text
        x="300"
        y="416"
        textAnchor="middle"
        fontFamily="var(--f-sans)"
        fontSize="11"
        fontWeight="700"
        fill="#1633c8"
      >
        Coefficient de Traînée (100 Cx)
      </text>
      <text
        x="22"
        y="210"
        textAnchor="middle"
        fontFamily="var(--f-sans)"
        fontSize="11"
        fontWeight="700"
        fill="#1633c8"
        transform="rotate(-90 22 210)"
      >
        Coefficient de Portance (100 Cz)
      </text>
    </svg>
  )
}

/**
 * p. 18 — établissement de la polaire à partir de valeurs mesurées en
 * soufflerie. Les quatre incidences relevées par l'auteur, 3°, 6°, 9° et
 * 12°, sont portées avec leurs projections sur les deux axes.
 */
export function PolaireEtablissement() {
  const X0 = 70
  const Y0 = 330
  const W = 430
  const H = 280
  const cx = (v: number) => X0 + (v / 100) * W
  const cz = (v: number) => Y0 - (v / 100) * H

  // Incidence → (100 Cx, 100 Cz), valeurs du tableau de l'auteur.
  const pts: [string, number, number][] = [
    ['3°', 31, 15],
    ['6°', 30, 30],
    ['9°', 38, 60],
    ['12°', 62.5, 90],
  ]

  return (
    <svg viewBox="0 0 560 380" role="img" aria-label="Établissement de la polaire à partir de mesures en soufflerie : incidence 3° Cz 15 Cx 31, 6° Cz 30 Cx 30, 9° Cz 60 Cx 38, 12° Cz 90 Cx 62,5">
      <rect x="0" y="0" width="560" height="380" fill="#ffffff" />

      {/* Axes et graduations. */}
      <g stroke="#0b0f14" strokeWidth="1.4">
        <line x1={cx(0)} y1={cz(-8)} x2={cx(0)} y2={cz(108)} />
        <line x1={cx(-4)} y1={cz(0)} x2={cx(105)} y2={cz(0)} />
      </g>
      <g stroke="#0b0f14" strokeWidth="1">
        {Array.from({ length: 21 }, (_, i) => i * 5).map((v) => (
          <line key={v} x1={cx(v)} y1={cz(0)} x2={cx(v)} y2={cz(0) + (v % 25 === 0 ? 9 : 5)} />
        ))}
      </g>

      <g fontFamily="var(--f-display)" fontSize="14" fontStyle="italic" fill="#0b0f14">
        <text x={cx(0) - 62} y={cz(100) + 5}>100Cz</text>
        <text x={cx(0) - 56} y={cz(50) + 5}>50Cz</text>
        <text x={cx(50) - 4} y={cz(0) + 24}>50Cx</text>
        <text x={cx(100) - 6} y={cz(0) + 24}>100Cx</text>
        <text x={cx(0) - 16} y={cz(0) + 34}>0</text>
      </g>

      {/* La polaire mesurée. */}
      <path
        d={`M${cx(33)},${cz(-6)}
            C${cx(29)},${cz(6)} ${cx(29.5)},${cz(22)} ${cx(31)},${cz(34)}
            C${cx(33)},${cz(52)} ${cx(38)},${cz(66)} ${cx(46)},${cz(78)}
            C${cx(56)},${cz(92)} ${cx(72)},${cz(103)} ${cx(92)},${cz(112)}`}
        fill="none"
        stroke="#1633c8"
        strokeWidth="3"
      />

      {/* Projections de chaque incidence sur les deux axes. */}
      <g stroke="#0b0f14" strokeWidth="0.9">
        {pts.map(([label, x, y]) => (
          <g key={label}>
            <line x1={cx(0)} y1={cz(y)} x2={cx(x)} y2={cz(y)} />
            <line x1={cx(x)} y1={cz(y)} x2={cx(x)} y2={cz(0)} />
            <circle cx={cx(x)} cy={cz(y)} r="3.2" fill="#0b0f14" />
            <text
              x={cx(x) - 6}
              y={cz(y) - 5}
              textAnchor="end"
              fontFamily="var(--f-display)"
              fontSize="13"
              fontWeight="700"
              fill="#0b0f14"
              stroke="none"
            >
              {label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}

/**
 * p. 8 — composition de deux forces perpendiculaires.
 * « F = f1 + f2 » vectoriellement, et F² = f1² + f2² par Pythagore.
 */
export function CompositionForces() {
  return (
    <svg viewBox="0 0 420 220" role="img" aria-label="Composition de deux forces perpendiculaires f1 et f2 dont la résultante est F, avec la relation de Pythagore F carré égale f1 carré plus f2 carré">
      <rect x="0" y="0" width="420" height="220" fill="#0a1a6b" />
      <g stroke="#3350c8" strokeWidth="0.5" opacity="0.6">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 32} y1="0" x2={i * 32} y2="220" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 32} x2="420" y2={i * 32} />
        ))}
      </g>

      <text
        x="210"
        y="30"
        textAnchor="middle"
        fontFamily="var(--f-sans)"
        fontSize="17"
        fontWeight="700"
        fill="#4dff86"
      >
        F² = f1² + f2²
      </text>

      {/* L'angle droit, en jaune, entre F et f1. */}
      <path d="M36,182 L74,182 L74,166 Z" fill="#f2e34a" opacity="0.9" />

      <defs>
        <marker id="ad-pink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#ff4fb0" />
        </marker>
        <marker id="ad-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#4dff86" />
        </marker>
        <marker id="ad-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#ff3b30" />
        </marker>
      </defs>

      <line x1="36" y1="182" x2="266" y2="54" stroke="#ff4fb0" strokeWidth="2.6" markerEnd="url(#ad-pink)" />
      <line x1="266" y1="54" x2="352" y2="182" stroke="#4dff86" strokeWidth="2.6" markerEnd="url(#ad-green)" />
      <line x1="36" y1="182" x2="352" y2="182" stroke="#ff3b30" strokeWidth="2.6" markerEnd="url(#ad-red)" />
      <circle cx="152" cy="118" r="5" fill="#ff4fb0" />

      <g fontFamily="var(--f-sans)" fontSize="15" fontWeight="700">
        <text x="126" y="112" fill="#ff4fb0">f1</text>
        <text x="330" y="106" fill="#4dff86">f2</text>
        <text x="206" y="174" fill="#ff3b30" fontSize="18">F</text>
      </g>
    </svg>
  )
}

/** p. 8 — les trois équilibres : stable, indifférent, instable. */
export function Equilibres() {
  const rows = [
    {
      titre: 'ÉQUILIBRE STABLE :',
      texte: 'Trajectoire Avion revient naturellement à sa position initiale.',
      // Oscillation qui s'amortit.
      path: 'M96,52 q40,-26 80,0 q34,22 68,2 q28,-16 56,-2 q24,12 48,2 q20,-8 40,0',
    },
    {
      titre: 'ÉQUILIBRE INDIFFÉRENT :',
      texte: 'Trajectoire Avion déviée prend une nouvelle direction et la conserve.',
      path: 'M96,146 q40,-22 80,-22 l212,0',
    },
    {
      titre: 'ÉQUILIBRE INSTABLE :',
      texte: 'Trajectoire Avion tend à s’écarter graduellement de sa position initiale.',
      path: 'M96,240 q60,-4 110,-22 q60,-22 110,-58 q40,-28 72,-58',
    },
  ]

  return (
    <svg viewBox="0 0 620 290" role="img" aria-label="Les trois équilibres : stable, la trajectoire revient à sa position initiale ; indifférent, elle prend une nouvelle direction et la conserve ; instable, elle s'écarte graduellement">
      <rect x="0" y="0" width="620" height="290" fill="#071444" />
      <g stroke="#2a3f8f" strokeWidth="0.5">
        {Array.from({ length: 20 }, (_, i) => (
          <line key={i} x1={i * 32} y1="0" x2={i * 32} y2="290" />
        ))}
      </g>

      {rows.map((r, i) => (
        <g key={r.titre} transform={`translate(0,${i * 94})`}>
          <text x="18" y="22" fontFamily="var(--f-sans)" fontSize="11" fontWeight="700" fill="#f2c744">
            {r.titre}
          </text>
          <text x="18" y="36" fontFamily="var(--f-sans)" fontSize="10" fill="#9fd4ff">
            {r.texte}
          </text>
          {/* Silhouette d'avion, très simplifiée, à gauche de la trajectoire. */}
          <g transform="translate(30,58)">
            <path d="M0,0 L46,0 L54,-4 L46,-8 L0,-8 Z" fill="#f6e3b8" stroke="#8a6a2f" strokeWidth="0.8" />
            <path d="M14,-8 L22,-22 L28,-22 L24,-8 Z" fill="#e8623c" />
            <path d="M20,0 L20,8 M32,0 L32,8" stroke="#f6e3b8" strokeWidth="1.4" />
          </g>
          <path d={r.path} fill="none" stroke="#cfe4ff" strokeWidth="1.4" strokeDasharray="4 4" />
        </g>
      ))}
    </svg>
  )
}
