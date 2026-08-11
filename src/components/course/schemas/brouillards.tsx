/**
 * SCHÉMAS REDESSINÉS — Cours 1 Météorologie, § 9.1 « La brume et le
 * brouillard ». Voir l'entête de schemas/atmosphere.tsx pour la règle.
 *
 * Les quatre schémas partagent le cadre de l'original : ciel bleu pâle,
 * sol brun, flèches rouges pour le mouvement, masse de brouillard blanche,
 * repères chiffrés (1), (2), (3) renvoyant au texte.
 */

const SKY = '#cfe4f7'
const GROUND = '#c8641b'
const SEA = '#3a44a8'
const FOG = '#ffffff'

/** Masse de brouillard : agglomérat de disques blancs. */
function Fog({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const n = Math.max(6, Math.round((w * h) / 900))
  return (
    <g fill={FOG}>
      {Array.from({ length: n }, (_, i) => {
        const a = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1
        const b = Math.abs(Math.sin(i * 78.233) * 12345.678) % 1
        const r = 8 + ((i * 7) % 11)
        return <circle key={i} cx={x + a * w} cy={y + b * h} r={r} />
      })}
      <rect x={x} y={y + h - 10} width={w} height="14" rx="7" />
    </g>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="1" y="1" width="418" height="188" fill={SKY} stroke="#2f4b8a" strokeWidth="1.5" />
      {children}
    </>
  )
}

/** Flèche rouge horizontale, comme celles du vent dans l'original. */
function RedArrow({ x1, y, x2 }: { x1: number; y: number; x2: number }) {
  return (
    <g stroke="#e8272b" strokeWidth="1.6" fill="#e8272b">
      <line x1={x1} y1={y} x2={x2 - 8} y2={y} />
      <path d={`M${x2 - 9},${y - 4.5} L${x2},${y} L${x2 - 9},${y + 4.5} Z`} stroke="none" />
    </g>
  )
}

/** Ondulation rouge verticale : perte de chaleur par rayonnement. */
function RedWave({ x, y0, y1 }: { x: number; y0: number; y1: number }) {
  const steps = 6
  const dy = (y1 - y0) / steps
  let d = `M${x},${y0}`
  for (let i = 0; i < steps; i++) {
    const a = y0 + dy * i
    d += ` Q${x + (i % 2 === 0 ? 7 : -7)},${a + dy / 2} ${x},${a + dy}`
  }
  return (
    <g stroke="#e8272b" strokeWidth="1.5" fill="#e8272b">
      <path d={d} fill="none" />
      <path d={`M${x - 4.5},${y1 + 8} L${x},${y1 - 1} L${x + 4.5},${y1 + 8} Z`} stroke="none" />
    </g>
  )
}

function Mark({ x, y, n }: { x: number; y: number; n: string }) {
  return (
    <text x={x} y={y} fontFamily="var(--f-display)" fontSize="24" fontWeight="700" fill="#0b0f14">
      {n}
    </text>
  )
}

/** p. 31 — brouillard de radiation. */
export function BrouillardRadiation() {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-label="Brouillard de radiation : le sol perd par rayonnement la chaleur emmagasinée (1), le brouillard se forme au niveau du sol (2), le soleil du matin le dissipe (3)">
      <Frame>
        <rect x="1" y="158" width="418" height="31" fill={GROUND} />
        <circle cx="378" cy="34" r="16" fill="#f5e13c" stroke="#c9b400" strokeWidth="1.2" />
        <g stroke="#d9e86a" strokeWidth="1.4">
          {[200, 218, 236].map((a, i) => (
            <line key={a} x1="366" y1="46" x2={300 - i * 6} y2={96 + i * 22} />
          ))}
        </g>
        <RedWave x={44} y0={156} y1={60} />
        <RedWave x={72} y0={156} y1={68} />
        <RedWave x={100} y0={156} y1={76} />
        <Mark x={52} y={52} n="1" />
        <Fog x={148} y={64} w={112} h={92} />
        <Mark x={196} y={52} n="2" />
        <Fog x={300} y={112} w={54} h={44} />
        <Mark x={330} y={100} n="3" />
      </Frame>
    </svg>
  )
}

/** p. 32 — brouillard d'advection. */
export function BrouillardAdvection() {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-label="Brouillard d'advection : de l'air chaud et humide est poussé par un vent faible sur un sol plus froid (1), il se refroidit, atteint son point de rosée et se condense (2)">
      <Frame>
        <rect x="1" y="158" width="418" height="31" fill={GROUND} />
        {/* Le coin d'eau plus froide, à gauche, comme dans l'original. */}
        <path d="M1,158 L120,158 L1,182 Z" fill={SEA} />
        <RedArrow x1={12} y={116} x2={110} />
        <RedArrow x1={28} y={132} x2={126} />
        <RedArrow x1={50} y={146} x2={152} />
        <Mark x={32} y={78} n="1" />
        <Fog x={264} y={62} w={130} h={96} />
        <Mark x={312} y={64} n="2" />
      </Frame>
    </svg>
  )
}

/** p. 32 — brouillard d'évaporation. */
export function BrouillardEvaporation() {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-label="Brouillard d'évaporation : un vent faible et froid souffle depuis la terre vers la mer (1), se charge en humidité par évaporation et se condense au-dessus de l'eau (2)">
      <Frame>
        <rect x="1" y="158" width="418" height="31" fill={SEA} />
        <path d="M1,158 L128,158 L1,134 Z" fill={GROUND} />
        <RedArrow x1={18} y={112} x2={126} />
        <RedArrow x1={18} y={128} x2={142} />
        <Mark x={38} y={80} n="1" />
        <Fog x={244} y={78} w={144} h={80} />
        <Mark x={300} y={66} n="2" />
      </Frame>
    </svg>
  )
}

/** p. 32 — brouillard de pente. */
export function BrouillardPente() {
  return (
    <svg viewBox="0 0 420 190" role="img" aria-label="Brouillard de pente : un vent faible pousse de l'air chaud et humide de la vallée à l'assaut du relief ; en s'élevant l'air se refroidit par détente adiabatique et un brouillard se condense le long de la pente">
      <Frame>
        {/* Le relief : sommet dénudé sur base végétale, comme l'original. */}
        <path d="M1,189 L60,120 L104,54 L150,120 L176,189 Z" fill="#8a4b18" />
        <path
          d="M1,189 L46,146 L96,92 L146,150 L176,189 L214,168 L252,142 L300,164 L340,150 L419,178 L419,189 Z"
          fill="#0f9d3a"
        />
        <Fog x={62} y={22} w={104} h={62} />
        {/* Les deux courants qui remontent la pente. */}
        <g stroke="#c2185b" strokeWidth="1.5" fill="none">
          <path d="M414,116 Q300,158 190,92" />
          <path d="M414,152 Q310,190 186,140" />
        </g>
        <g fill="#e8272b">
          <path d="M196,80 L176,102 L206,102 Z" />
          <path d="M192,128 L172,150 L202,150 Z" />
        </g>
      </Frame>
    </svg>
  )
}
