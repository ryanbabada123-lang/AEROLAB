/**
 * SCHÉMAS REDESSINÉS — Cours 1 Météorologie, § 5 « L'humidité de l'air ».
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 *
 * Ces deux schémas sont les plus littéraux du chapitre : toutes les valeurs
 * chiffrées de l'original y figurent, à la même altitude.
 */

/** Ondulation verticale figurant la montée d'une particule d'air. */
function Squiggle({
  x,
  y0,
  y1,
  color,
  head,
}: {
  x: number
  y0: number
  y1: number
  color: string
  /** 'up' pose une pointe de flèche en haut, 'down' en bas. */
  head: 'up' | 'down'
}) {
  const steps = Math.max(4, Math.round(Math.abs(y1 - y0) / 15))
  const dy = (y1 - y0) / steps
  let d = `M${x},${y0}`
  for (let i = 0; i < steps; i++) {
    const a = y0 + dy * i
    const b = a + dy
    d += ` Q${x + (i % 2 === 0 ? 9 : -9)},${(a + b) / 2} ${x},${b}`
  }
  return (
    <g>
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" />
      {head === 'up' ? (
        <path d={`M${x - 5},${y1 + 8} L${x + 4},${y1 - 2} L${x + 1},${y1 + 8} Z`} fill={color} />
      ) : (
        <path d={`M${x - 5},${y1 - 8} L${x + 4},${y1 + 2} L${x + 1},${y1 - 8} Z`} fill={color} />
      )}
    </g>
  )
}

/** p. 18 — gradient adiabatique : air sec (1 °C/100 m), air humide (0,6). */
export function GradientAdiabatique() {
  // 0 m au sol (y = 300), 600 m en haut (y = 40).
  const yOf = (m: number) => 300 - (m / 600) * 260
  const ticks = [100, 200, 300, 400, 500, 600]
  const sec = ['15°C', '14°C', '13°C', '12°C', '11°C', '10°C', '9°C']
  const humide = ['15°C', '14,4°C', '13,8°C', '13,2°C', '12,6°C', '12°C', '11,4°C']

  return (
    <svg viewBox="0 0 660 350" role="img" aria-label="Gradient adiabatique : en air sec la température passe de 15 °C au sol à 9 °C à 600 m ; en air humide de 15 °C à 11,4 °C">
      <rect x="0" y="0" width="660" height="350" fill="#ffffff" />

      {/* Sol. */}
      <rect x="20" y="300" width="620" height="24" fill="#8a5a3b" />

      {/* Axe central des altitudes. */}
      <line x1="330" y1="302" x2="330" y2="34" stroke="#0b0f14" strokeWidth="7" />
      <path d="M314,42 L330,12 L346,42 Z" fill="#0b0f14" />
      <text x="344" y="26" fontFamily="var(--f-sans)" fontSize="13" fill="#0b0f14">m</text>
      <g fontFamily="var(--f-sans)" fontSize="14" fill="#0b0f14">
        {ticks.map((t) => (
          <g key={t}>
            <line x1="322" y1={yOf(t)} x2="352" y2={yOf(t)} stroke="#0b0f14" strokeWidth="1.8" />
            <text x="358" y={yOf(t) + 5}>
              {t}
            </text>
          </g>
        ))}
      </g>

      {/* Air sec — colonne de gauche, en rouge. */}
      <text
        x="60"
        y="34"
        fontFamily="var(--f-sans)"
        fontSize="15"
        fill="#0b0f14"
        textDecoration="underline"
      >
        Air sec
      </text>
      {[126, 190, 254].map((x) => (
        <Squiggle key={x} x={x} y0={296} y1={46} color="#c0392b" head="up" />
      ))}
      <g fontFamily="var(--f-sans)" fontSize="14" fill="#0b0f14" textAnchor="middle">
        {sec.map((t, i) => (
          <text key={t} x="90" y={yOf(i * 100) + 5}>
            {t}
          </text>
        ))}
      </g>

      {/* Air humide — colonne de droite, en bleu-violet. */}
      <text
        x="520"
        y="34"
        fontFamily="var(--f-sans)"
        fontSize="15"
        fill="#0b0f14"
        textDecoration="underline"
      >
        Air humide
      </text>
      {[496, 560, 624].map((x) => (
        <Squiggle key={x} x={x} y0={296} y1={46} color="#3b3fb0" head="up" />
      ))}
      <g fontFamily="var(--f-sans)" fontSize="14" fill="#0b0f14" textAnchor="middle">
        {humide.map((t, i) => (
          <text key={t} x="440" y={yOf(i * 100) + 5}>
            {t}
          </text>
        ))}
      </g>
    </svg>
  )
}

/** p. 19 — stabilité, instabilité, et couche de bloquage. */
export function StabiliteInstabilite() {
  const yOf = (m: number) => 300 - (m / 600) * 250
  const ticks = [100, 200, 300, 400, 500, 600]
  // altitude → [bulle stable, bulle instable, air ambiant]
  const rows: [number, string, string, string][] = [
    [600, '', '22', '21'],
    [500, '21', '23', '22'],
    [400, '22', '24', '22'],
    [300, '23', '25', '22'],
    [200, '24', '26', '23'],
    [100, '25', '27', '24'],
    [0, '26', '28', '25'],
  ]

  return (
    <svg viewBox="0 0 720 340" role="img" aria-label="Stabilité et instabilité d'une masse d'air : la bulle stable est arrêtée par la couche de bloquage entre 300 et 500 m, la bulle instable la traverse et poursuit sa montée">
      <rect x="0" y="0" width="720" height="340" fill="#e8eefb" />
      {/* Couche de bloquage — isothermie à 22 °C entre 300 et 500 m. */}
      <rect x="0" y={yOf(500)} width="720" height={yOf(300) - yOf(500)} fill="#e3e0d6" />
      <text x="360" y={(yOf(500) + yOf(300)) / 2 + 5} textAnchor="middle" fontFamily="var(--f-sans)" fontSize="14" fill="#0b0f14">
        Couche de bloquage
      </text>

      {/* Sol. */}
      <rect x="0" y="300" width="720" height="24" fill="#8a5a3b" />

      {/* Axes. */}
      <g stroke="#0b0f14" strokeWidth="1.6" fontFamily="var(--f-sans)" fontSize="13" fill="#0b0f14">
        <line x1="52" y1="300" x2="52" y2="30" />
        <path d="M44,38 L52,18 L60,38 Z" fill="#0b0f14" stroke="none" />
        <text x="60" y="26" stroke="none">m</text>
        <line x1="668" y1="300" x2="668" y2="30" />
        <path d="M660,38 L668,18 L676,38 Z" fill="#0b0f14" stroke="none" />
        <text x="676" y="26" stroke="none">°C</text>
        {ticks.map((t) => (
          <g key={t}>
            <line x1="40" y1={yOf(t)} x2="64" y2={yOf(t)} />
            <line x1="656" y1={yOf(t)} x2="680" y2={yOf(t)} />
          </g>
        ))}
      </g>

      <g fontFamily="var(--f-sans)" fontSize="14" fill="#0b0f14">
        {ticks.map((t) => (
          <text key={t} x="74" y={yOf(t) + 5}>
            {t}
          </text>
        ))}
        <text x="150" y={yOf(560)} textDecoration="underline">Stabilité</text>
        <text x="430" y={yOf(600) - 4} textDecoration="underline">Instabilité</text>
        {rows.map(([m, s, i, a]) => (
          <g key={m}>
            {s && <text x="222" y={yOf(m) + 5}>{s}</text>}
            <text x="512" y={yOf(m) + 5}>{i}</text>
            <text x="628" y={yOf(m) + 5}>{a}</text>
          </g>
        ))}
      </g>

      {/* Bulles stables : elles montent et retombent dans la couche. */}
      {[190, 270].map((x) => (
        <g key={x}>
          <Squiggle x={x} y0={300} y1={yOf(430)} color="#d98613" head="down" />
        </g>
      ))}

      {/* Bulles instables : elles traversent et poursuivent. */}
      {[470, 560].map((x) => (
        <Squiggle key={x} x={x} y0={300} y1={yOf(620)} color="#c0392b" head="up" />
      ))}
    </svg>
  )
}
