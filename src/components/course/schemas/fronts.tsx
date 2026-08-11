/**
 * SCHÉMAS REDESSINÉS — Cours 1 Météorologie, § 8 « Les perturbations ».
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 *
 * Les coupes de front de l'original sont des dessins d'illustration au
 * trait. La géométrie est reprise exactement — pente du front, échelle
 * d'altitude en kilomètres, étendue horizontale (600 km pour le front
 * chaud, 300 km pour le front froid), place et libellé de chaque nuage.
 * Le rendu des nuages, lui, est celui du site.
 */

/** Amas nuageux : empilement de disques, façon chou-fleur. */
function Cloud({
  x,
  y,
  w,
  h,
  fill = '#f4f6f8',
}: {
  x: number
  y: number
  w: number
  h: number
  fill?: string
}) {
  const lobes = Math.max(3, Math.round(w / 16))
  return (
    <g stroke="#3c4550" strokeWidth="0.8" fill={fill}>
      {Array.from({ length: lobes }, (_, i) => {
        const t = i / (lobes - 1)
        const cx = x + t * w
        const r = (h / 2) * (0.55 + 0.45 * Math.sin(Math.PI * t))
        return <circle key={i} cx={cx} cy={y + h - r} r={r} />
      })}
      <rect x={x} y={y + h - 3} width={w} height="3" stroke="none" fill={fill} />
    </g>
  )
}

function DeplacementArrow({ x, y, w }: { x: number; y: number; w: number }) {
  return (
    <g>
      <path
        d={`M${x},${y - 7} h${w - 22} v-9 l22,16 -22,16 v-9 h${-(w - 22)} Z`}
        fill="#f2c744"
        stroke="#a8860e"
        strokeWidth="0.8"
      />
      <text
        x={x + w / 2 - 10}
        y={y - 14}
        textAnchor="middle"
        fontFamily="var(--f-sans)"
        fontSize="10"
        fontWeight="700"
        fill="#0b0f14"
      >
        Déplacement des masses d’air
      </text>
    </g>
  )
}

/** Échelle d'altitude 2 / 4 / 6 / 8 km, comme dans l'original. */
function KmScale({ x, yOf }: { x: number; yOf: (km: number) => number }) {
  return (
    <g fontFamily="var(--f-sans)" fontSize="9" fill="#0b0f14">
      {[2, 4, 6, 8].map((km) => (
        <g key={km}>
          <path d={`M${x - 6},${yOf(km)} l6,-3 v6 Z`} fill="#0b0f14" />
          <text x={x + 4} y={yOf(km) + 3}>
            {km} km
          </text>
        </g>
      ))}
    </g>
  )
}

/** p. 27 — coupe d'un front chaud, sur 600 km. */
export function FrontChaudCoupe() {
  const SOL = 268
  const yOf = (km: number) => SOL - km * 25
  return (
    <svg viewBox="0 0 720 310" role="img" aria-label="Coupe d'un front chaud sur 600 km : l'air chaud instable monte sur le coin d'air froid, avec nimbostratus, cumulonimbus, altocumulus puis cirrus vers l'avant du front">
      <rect x="0" y="0" width="720" height="310" fill="#ffffff" />
      {/* Air chaud instable — toute la masse au-dessus de la surface frontale. */}
      <path d={`M8,${yOf(9.6)} H712 V${yOf(6.4)} L150,${SOL} H8 Z`} fill="#e8823c" />
      {/* Air froid — le coin, épais à droite, nul à la trace au sol. */}
      <path d={`M150,${SOL} L712,${yOf(6.4)} V${SOL} Z`} fill="#cfe0ee" />

      <DeplacementArrow x={250} y={yOf(9.0)} w={380} />

      {/* Surface frontale. */}
      <line x1="150" y1={SOL} x2="712" y2={yOf(6.4)} stroke="#0b0f14" strokeWidth="1.6" />

      {/* Le corps de la perturbation, de la trace au sol vers l'avant. */}
      <Cloud x={182} y={yOf(3.2)} w={74} h={52} />
      <Cloud x={236} y={yOf(6.6)} w={92} h={92} />
      <Cloud x={318} y={yOf(6.0)} w={78} h={82} />
      <Cloud x={140} y={yOf(2.0)} w={120} h={30} fill="#dfe4e9" />
      <Cloud x={430} y={yOf(4.6)} w={62} h={26} />
      <Cloud x={520} y={yOf(4.2)} w={54} h={22} />
      <Cloud x={470} y={yOf(1.1)} w={48} h={16} fill="#eef2f6" />
      <Cloud x={560} y={yOf(1.0)} w={44} h={14} fill="#eef2f6" />

      {/* Cirrus, en filaments, très en avant du front. */}
      <g stroke="#3c4550" strokeWidth="0.9" fill="none">
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${604 + i * 16},${yOf(8.4 - i * 0.22)} q10,-5 22,-2`} />
        ))}
      </g>

      {/* Précipitations sous le corps. */}
      <g stroke="#5a6673" strokeWidth="0.7">
        {Array.from({ length: 22 }, (_, i) => (
          <line key={i} x1={168 + i * 9} y1={yOf(1.6)} x2={162 + i * 9} y2={SOL} />
        ))}
      </g>

      <rect x="8" y={SOL} width="704" height="8" fill="#b9c2cc" />
      <KmScale x={24} yOf={yOf} />

      {/* Étendue horizontale. */}
      <g stroke="#0b0f14" strokeWidth="1">
        <line x1="150" y1={SOL + 24} x2="700" y2={SOL + 24} />
        <line x1="150" y1={SOL + 18} x2="150" y2={SOL + 30} />
        <line x1="700" y1={SOL + 18} x2="700" y2={SOL + 30} />
      </g>
      <text x="425" y={SOL + 38} textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10" fill="#0b0f14">
        600 km
      </text>

      <g fontFamily="var(--f-sans)" fontSize="9" fontWeight="700">
        <rect x="28" y={yOf(6.2)} width="46" height="30" fill="#c2531f" />
        <text x="51" y={yOf(6.2) + 11} textAnchor="middle" fill="#ffffff">Air</text>
        <text x="51" y={yOf(6.2) + 20} textAnchor="middle" fill="#ffffff">chaud</text>
        <text x="51" y={yOf(6.2) + 29} textAnchor="middle" fill="#ffffff">instable</text>

        <rect x="614" y={yOf(3.6)} width="30" height="20" fill="#2f6ea8" />
        <text x="629" y={yOf(3.6) + 9} textAnchor="middle" fill="#ffffff">Air</text>
        <text x="629" y={yOf(3.6) + 18} textAnchor="middle" fill="#ffffff">froid</text>

        <text x="242" y={yOf(3.4)} fill="#0b0f14">Cumulo-</text>
        <text x="242" y={yOf(3.0)} fill="#0b0f14">nimbus</text>
        <text x="146" y={yOf(1.3)} fill="#0b0f14">Nimbostratus</text>
        <text x="500" y={yOf(5.0)} fill="#0b0f14">Altocumulus</text>
        <text x="662" y={yOf(8.6)} fill="#0b0f14">Cirrus</text>
        <text
          x="640"
          y={yOf(5.4)}
          fill="#0b0f14"
          transform={`rotate(-14 640 ${yOf(5.4)})`}
        >
          Front chaud
        </text>
      </g>
    </svg>
  )
}

/** p. 28 — coupe d'un front froid, sur 300 km. */
export function FrontFroidCoupe() {
  const SOL = 262
  const yOf = (km: number) => SOL - km * 25
  return (
    <svg viewBox="0 0 720 300" role="img" aria-label="Coupe d'un front froid sur 300 km : l'air froid se glisse sous l'air chaud instable et le soulève, formant des cumulonimbus et des nimbostratus le long de la ligne de grain">
      <rect x="0" y="0" width="720" height="300" fill="#f7f9fb" />
      {/* Air chaud instable, à l'avant du front (à droite). */}
      <path d={`M330,${SOL} L470,${yOf(6.6)} H712 V${SOL} Z`} fill="#e8823c" />
      {/* Air froid, qui pousse depuis la gauche et se glisse dessous. */}
      <path d={`M8,${yOf(8.4)} Q150,${yOf(7.2)} 330,${SOL} H8 Z`} fill="#cfe0ee" />
      {/* Air très froid : le noyau, plus dense, contre le bord gauche. */}
      <path d={`M8,${yOf(8.0)} Q86,${yOf(6.4)} 150,${SOL} H8 Z`} fill="#2f6ea8" />

      <DeplacementArrow x={270} y={yOf(8.8)} w={330} />

      {/* Surfaces frontales : le front froid, et le front froid secondaire. */}
      <path d={`M330,${SOL} Q210,${yOf(5.0)} 92,${yOf(8.2)}`} fill="none" stroke="#0b0f14" strokeWidth="1.6" />
      <path d={`M150,${SOL} Q104,${yOf(5.2)} 60,${yOf(8.0)}`} fill="none" stroke="#0b0f14" strokeWidth="1.2" />

      {/* La ligne de grain : cumulonimbus le long du front. */}
      <Cloud x={196} y={yOf(5.4)} w={62} h={68} />
      <Cloud x={252} y={yOf(4.4)} w={58} h={58} />
      <Cloud x={430} y={yOf(7.2)} w={96} h={102} />
      <Cloud x={520} y={yOf(6.8)} w={86} h={94} />
      <Cloud x={612} y={yOf(6.0)} w={72} h={80} />
      <Cloud x={330} y={yOf(2.2)} w={70} h={22} fill="#eef2f6" />
      <Cloud x={416} y={yOf(1.6)} w={120} h={20} fill="#dfe4e9" />

      {/* Averses. */}
      <g stroke="#5a6673" strokeWidth="0.7">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={i} x1={300 + i * 8} y1={yOf(1.9)} x2={294 + i * 8} y2={SOL} />
        ))}
      </g>

      <rect x="8" y={SOL} width="704" height="8" fill="#b9c2cc" />
      <KmScale x={24} yOf={yOf} />

      <g stroke="#0b0f14" strokeWidth="1">
        <line x1="200" y1={SOL + 22} x2="500" y2={SOL + 22} />
        <line x1="200" y1={SOL + 16} x2="200" y2={SOL + 28} />
        <line x1="500" y1={SOL + 16} x2="500" y2={SOL + 28} />
      </g>
      <text x="350" y={SOL + 36} textAnchor="middle" fontFamily="var(--f-sans)" fontSize="10" fill="#0b0f14">
        300 km
      </text>

      <g fontFamily="var(--f-sans)" fontSize="9" fontWeight="700">
        <text x="18" y={yOf(9.2)} fill="#0b0f14">Altitude</text>
        <text x="34" y={yOf(3.4)} fill="#ffffff">Air</text>
        <text x="34" y={yOf(3.0)} fill="#ffffff">très</text>
        <text x="34" y={yOf(2.6)} fill="#ffffff">froid</text>
        <rect x="196" y={yOf(4.0)} width="30" height="20" fill="#2f6ea8" />
        <text x="211" y={yOf(4.0) + 9} textAnchor="middle" fill="#ffffff">Air</text>
        <text x="211" y={yOf(4.0) + 18} textAnchor="middle" fill="#ffffff">froid</text>
        <rect x="666" y={yOf(2.6)} width="42" height="30" fill="#c2531f" />
        <text x="687" y={yOf(2.6) + 11} textAnchor="middle" fill="#ffffff">Air</text>
        <text x="687" y={yOf(2.6) + 20} textAnchor="middle" fill="#ffffff">chaud</text>
        <text x="687" y={yOf(2.6) + 29} textAnchor="middle" fill="#ffffff">instable</text>

        <text x="42" y={yOf(6.6)} fill="#0b0f14" transform={`rotate(-52 42 ${yOf(6.6)})`}>
          Front froid
        </text>
        <text x="52" y={yOf(5.6)} fill="#0b0f14" transform={`rotate(-52 52 ${yOf(5.6)})`}>
          secondaire
        </text>
        <text x="284" y={yOf(4.4)} fill="#0b0f14" transform={`rotate(-38 284 ${yOf(4.4)})`}>
          Front froid
        </text>
        <text x="536" y={yOf(2.9)} fill="#0b0f14">Cumulonimbus</text>
        <text x="470" y={yOf(1.0)} fill="#0b0f14">Nimbostratus</text>
      </g>
    </svg>
  )
}

/**
 * Symboles de front portés sur les cartes météo.
 * `kind` : demi-disques rouges pour le chaud, triangles bleus pour le
 * froid, alternance des deux pour l'occlusion.
 */
function FrontSymbol({
  kind,
  line,
}: {
  kind: 'chaud' | 'froid' | 'occlusion'
  line: string
}) {
  const step = 44
  const items = Array.from({ length: 4 }, (_, i) => i)
  return (
    <g>
      <line x1="6" y1="20" x2="188" y2="20" stroke={line} strokeWidth="3" />
      {items.map((i) => {
        const x = 18 + i * step
        const isDisc = kind === 'chaud' || (kind === 'occlusion' && i % 2 === 1)
        return isDisc ? (
          <g key={i}>
            <path d={`M${x - 15},20 a15,15 0 0 0 30,0 Z`} fill={kind === 'chaud' ? '#111820' : '#f2521d'} />
            {kind === 'chaud' && (
              <path d={`M${x - 15},20 a15,15 0 0 0 30,0 Z`} fill="#f2521d" opacity="0.92" transform="translate(0,0)" />
            )}
          </g>
        ) : (
          <path key={i} d={`M${x - 14},20 L${x + 14},20 L${x},44 Z`} fill={kind === 'froid' ? '#1633c8' : '#1633c8'} />
        )
      })}
    </g>
  )
}

/** p. 27 — trait et demi-disques rouges du front chaud. */
export function SymboleFrontChaud() {
  return (
    <svg viewBox="0 0 200 52" role="img" aria-label="Symbole du front chaud sur les cartes météo : un trait rouge portant des demi-disques rouges orientés dans le sens de progression du front">
      <FrontSymbol kind="chaud" line="#f2521d" />
    </svg>
  )
}

/** p. 28 — trait et triangles bleus du front froid. */
export function SymboleFrontFroid() {
  return (
    <svg viewBox="0 0 200 52" role="img" aria-label="Symbole du front froid sur les cartes météo : un trait bleu portant des triangles bleus pointant dans le sens de progression du front">
      <FrontSymbol kind="froid" line="#1633c8" />
    </svg>
  )
}

/** p. 30 — les trois représentations de l'occlusion. */
export function SymbolesOcclusion() {
  return (
    <svg viewBox="0 0 640 52" role="img" aria-label="Représentation de l'occlusion sur les cartes météo : en noir, puis à caractère de front froid trait bleu, puis à caractère de front chaud trait rouge, alternant triangles et demi-disques">
      <g>
        <line x1="6" y1="20" x2="188" y2="20" stroke="#111820" strokeWidth="3" />
        {[0, 1, 2, 3].map((i) => {
          const x = 18 + i * 44
          return i % 2 === 0 ? (
            <path key={i} d={`M${x - 14},20 L${x + 14},20 L${x},44 Z`} fill="#111820" />
          ) : (
            <path key={i} d={`M${x - 15},20 a15,15 0 0 0 30,0 Z`} fill="#111820" />
          )
        })}
      </g>
      <g transform="translate(220,0)">
        <FrontSymbol kind="occlusion" line="#1633c8" />
      </g>
      <g transform="translate(440,0)">
        <FrontSymbol kind="occlusion" line="#f2521d" />
      </g>
    </svg>
  )
}
