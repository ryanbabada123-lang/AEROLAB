/**
 * SCHÉMAS REDESSINÉS — Cours 1 Météorologie, § 10 « L'information météo ».
 * Voir l'entête de schemas/atmosphere.tsx pour la règle appliquée.
 */

/**
 * Cercle d'horizon et secteurs de visibilité.
 *
 * `sectors` : portions couvertes par la visibilité réduite, en degrés
 * (0° = nord, sens horaire). L'original pose ces figures sur un fond
 * photographique de nuages ; ce fond est décoratif et n'est pas repris —
 * seul le tracé porte l'information.
 */
function HorizonCircle({
  rings,
  wedges,
  arrows,
  marks,
}: {
  rings: number[]
  wedges: { from: number; to: number; r: number }[]
  arrows: { angle: number; label: string; color: string; r: number }[]
  marks: { angle: number; label: string }[]
}) {
  const C = 110
  const pt = (deg: number, r: number) => {
    const a = ((deg - 90) * Math.PI) / 180
    return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) }
  }
  const wedge = (from: number, to: number, r: number) => {
    const a = pt(from, r)
    const b = pt(to, r)
    const large = to - from > 180 ? 1 : 0
    return `M${C},${C} L${a.x},${a.y} A${r},${r} 0 ${large} 1 ${b.x},${b.y} Z`
  }

  return (
    <>
      {wedges.map((w, i) => (
        <path key={i} d={wedge(w.from, w.to, w.r)} fill="#5fe0e8" />
      ))}
      {rings.map((r) => (
        <circle key={r} cx={C} cy={C} r={r} fill="none" stroke="#c0392b" strokeWidth="0.9" />
      ))}
      <line x1={C} y1={C} x2={C} y2="12" stroke="#0b0f14" strokeWidth="1.2" />
      <path d={`M${C - 5},20 L${C},8 L${C + 5},20 Z`} fill="#0b0f14" />
      <text x={C} y="6" textAnchor="middle" fontFamily="var(--f-sans)" fontSize="12" fontWeight="700" fill="#0b0f14">
        N
      </text>
      {arrows.map((a, i) => {
        const p = pt(a.angle, a.r)
        const q = pt(a.angle + 180, a.r)
        return (
          <g key={i} stroke={a.color} strokeWidth="1.3" fill={a.color}>
            <line x1={q.x} y1={q.y} x2={p.x} y2={p.y} />
            <path
              d={`M${p.x},${p.y} l-6,-3 l1,6 Z`}
              transform={`rotate(${a.angle + 90} ${p.x} ${p.y})`}
              stroke="none"
            />
            <text
              x={(C + p.x) / 2}
              y={(C + p.y) / 2 - 3}
              fontFamily="var(--f-sans)"
              fontSize="10"
              fontWeight="700"
              stroke="none"
              textAnchor="middle"
            >
              {a.label}
            </text>
          </g>
        )
      })}
      {marks.map((m, i) => {
        const p = pt(m.angle, 96)
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="9" fill="#ffffff" stroke="#0b0f14" strokeWidth="1" />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fontFamily="var(--f-sans)"
              fontSize="10"
              fill="#0b0f14"
            >
              {m.label}
            </text>
          </g>
        )
      })}
    </>
  )
}

/** p. 42 — visibilité dominante de 6 km : trois secteurs totalisant plus de 180°. */
export function VisibiliteSecteurs() {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label="Cercle d'horizon : secteur 1 de 6 km sur 45°, secteur 2 de 6 km sur 60°, secteur 3 de 6 km sur 90°, soit 6 km sur plus de 180° et 8 km au moins ailleurs ; la visibilité dominante transmise est 6 km">
      <rect x="0" y="0" width="220" height="220" fill="#f2f5f8" />
      <HorizonCircle
        rings={[40, 62, 84]}
        wedges={[
          { from: 318, to: 3, r: 62 },
          { from: 40, to: 100, r: 62 },
          { from: 170, to: 260, r: 62 },
          { from: 3, to: 40, r: 84 },
          { from: 100, to: 170, r: 84 },
          { from: 260, to: 318, r: 84 },
        ]}
        arrows={[
          { angle: 320, label: '6km', color: '#1667ff', r: 62 },
          { angle: 42, label: '8 km', color: '#c0392b', r: 84 },
          { angle: 96, label: '6km', color: '#1667ff', r: 62 },
          { angle: 136, label: '8 km', color: '#c0392b', r: 84 },
          { angle: 270, label: '8 km', color: '#c0392b', r: 84 },
        ]}
        marks={[
          { angle: 340, label: '1' },
          { angle: 60, label: '2' },
          { angle: 190, label: '3' },
        ]}
      />
    </svg>
  )
}

/** p. 42 — visibilité dominante 8 km, réduite à 3 km dans le SW par la brume. */
export function VisibiliteBrume() {
  return (
    <svg viewBox="0 0 220 220" role="img" aria-label="Cercle d'horizon : visibilité de 8 km sur largement plus de 180°, réduite à 3 km dans le sud-ouest du fait de la brume ; codage 8000 3000SW BR">
      <rect x="0" y="0" width="220" height="220" fill="#f2f5f8" />
      <HorizonCircle
        rings={[40, 62, 84]}
        wedges={[
          { from: 200, to: 250, r: 34 },
          { from: 250, to: 560, r: 84 },
          { from: 0, to: 200, r: 84 },
        ]}
        arrows={[
          { angle: 44, label: '8 km', color: '#1667ff', r: 84 },
          { angle: 100, label: '8km', color: '#1667ff', r: 84 },
          { angle: 270, label: '8 km', color: '#1667ff', r: 84 },
          { angle: 225, label: '3 km', color: '#c0392b', r: 34 },
        ]}
        marks={[]}
      />
    </svg>
  )
}

/** p. 49 — schéma de construction de la prise de décision. */
export function PriseDeDecision() {
  const boxes: {
    x: number
    y: number
    w: number
    h: number
    lines: string[]
    color: string
    bold?: boolean
    size?: number
  }[] = [
    { x: 150, y: 14, w: 200, h: 26, lines: ['TRAJET'], color: '#0b0f14', bold: true, size: 13 },
    { x: 138, y: 58, w: 224, h: 22, lines: ['DOSSIER METEO ADAPTE ET VALABLE'], color: '#0b0f14', size: 9 },
    { x: 128, y: 100, w: 244, h: 22, lines: ['TRACER LA ROUTE & VERIFIER CONDIMETEO'], color: '#0b0f14', size: 9 },
    { x: 8, y: 146, w: 84, h: 22, lines: ['EN ROUTE'], color: '#0b0f14', size: 9 },
    { x: 100, y: 146, w: 84, h: 22, lines: ['AD DEST'], color: '#0b0f14', size: 9 },
    { x: 192, y: 146, w: 84, h: 22, lines: ['AD ALT'], color: '#0b0f14', size: 9 },
    { x: 284, y: 146, w: 92, h: 22, lines: ['VENTS ET T°'], color: '#0b0f14', size: 9 },
    { x: 384, y: 146, w: 84, h: 22, lines: ['DANGER!'], color: '#b3261e', bold: true, size: 10 },
    { x: 8, y: 190, w: 84, h: 46, lines: ['NUAGES', 'FRONTS', 'VISIBILITE'], color: '#1667ff', size: 8 },
    { x: 100, y: 190, w: 84, h: 46, lines: ['ACCESSIBILITE'], color: '#0e7c5a', size: 8 },
    { x: 192, y: 190, w: 84, h: 46, lines: ['ACCESSIBILITE'], color: '#0e7c5a', size: 8 },
    { x: 284, y: 190, w: 92, h: 46, lines: ['ROUTE', 'ALT/FL', 'CARB'], color: '#1667ff', size: 8 },
    { x: 384, y: 190, w: 84, h: 46, lines: ['CB', 'GIVRAGE'], color: '#0b0f14', size: 8 },
    { x: 192, y: 258, w: 84, h: 34, lines: ['DECISION', 'CHOIX'], color: '#1667ff', bold: true, size: 10 },
  ]

  return (
    <svg viewBox="0 0 480 310" role="img" aria-label="Schéma de construction de la prise de décision : trajet, dossier météo adapté et valable, tracer la route et vérifier les conditions météo, puis en route, aérodrome de destination, aérodrome de dégagement, vents et température, danger, jusqu'à la décision et au choix">
      <rect x="0" y="0" width="480" height="310" fill="#ffffff" stroke="#1c3f8f" strokeWidth="2" />

      {/* Liaisons. */}
      <g stroke="#0b0f14" strokeWidth="1" fill="none">
        <line x1="250" y1="40" x2="250" y2="58" />
        <line x1="250" y1="80" x2="250" y2="100" />
        <line x1="250" y1="122" x2="250" y2="134" />
        <line x1="50" y1="134" x2="426" y2="134" />
        {[50, 142, 234, 330, 426].map((x) => (
          <line key={x} x1={x} y1="134" x2={x} y2="146" />
        ))}
        {[50, 142, 234, 330, 426].map((x) => (
          <line key={`d${x}`} x1={x} y1="168" x2={x} y2="190" />
        ))}
        <line x1="234" y1="236" x2="234" y2="258" />
      </g>

      {boxes.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            fill={b.lines[0] === 'DANGER!' ? '#ffe600' : b.lines[0] === 'CB' ? '#ffe600' : '#ffffff'}
            stroke="#0b0f14"
            strokeWidth="1"
          />
          {b.lines.map((l, j) => (
            <text
              key={l}
              x={b.x + b.w / 2}
              y={b.y + b.h / 2 + (j - (b.lines.length - 1) / 2) * 10 + 3}
              textAnchor="middle"
              fontFamily="var(--f-sans)"
              fontSize={b.size ?? 9}
              fontWeight={b.bold ? 700 : 600}
              fill={b.color}
            >
              {l}
            </text>
          ))}
        </g>
      ))}
    </svg>
  )
}
