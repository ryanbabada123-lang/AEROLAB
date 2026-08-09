import { useId, useMemo, useState } from 'react'
import { MODEL_NOTE, liftCurve, liftModel, parseNaca } from '@/lib/airfoil'
import { flightLog } from '@/lib/progress'
import SimShell from '@/components/SimShell'

/**
 * COURBE Cz = f(α) (§27).
 *
 * La forme de cette courbe est l'un des rares graphiques qu'un pilote doit
 * savoir lire de tête : pente linéaire, sommet, chute. On la parcourt au
 * curseur plutôt que de la subir en image fixe.
 */

const W = 900
const H = 420
const PAD = { l: 76, r: 34, t: 30, b: 58 }
const A_MIN = -8
const A_MAX = 24
const CL_MIN = -0.9
const CL_MAX = 1.9
const ALPHA_STALL = 15

export default function LiftCurve() {
  const [alpha, setAlpha] = useState(6)
  const uid = useId()
  const params = useMemo(() => parseNaca('2412'), [])
  const curve = useMemo(
    () => liftCurve(params, { alphaStall: ALPHA_STALL }, A_MIN, A_MAX, 0.5),
    [params],
  )
  const state = useMemo(
    () => liftModel(alpha, params, { alphaStall: ALPHA_STALL }),
    [alpha, params],
  )

  const x = (a: number) =>
    PAD.l + ((a - A_MIN) / (A_MAX - A_MIN)) * (W - PAD.l - PAD.r)
  const y = (cl: number) =>
    H - PAD.b - ((cl - CL_MIN) / (CL_MAX - CL_MIN)) * (H - PAD.t - PAD.b)

  const path = useMemo(
    () =>
      curve
        .map((p, i) => `${i ? 'L' : 'M'}${x(p.alpha).toFixed(1)},${y(p.cl).toFixed(1)}`)
        .join(' '),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [curve],
  )

  const peak = useMemo(
    () => curve.reduce((best, p) => (p.cl > best.cl ? p : best), curve[0]),
    [curve],
  )

  const ticksA = [-8, -4, 0, 4, 8, 12, 16, 20, 24]
  const ticksC = [-0.5, 0, 0.5, 1.0, 1.5]

  return (
    <SimShell
      title="Coefficient de portance en fonction de l’incidence"
      tag="Cz = f(α)"
      note={`${MODEL_NOTE.lift} ${MODEL_NOTE.limits}`}
      readout={[
        { label: 'Incidence', value: `${alpha.toFixed(1)}°` },
        { label: 'Cz', value: state.cl.toFixed(2) },
        { label: 'Cz max', value: peak.cl.toFixed(2) },
        {
          label: 'État',
          value: state.stalled ? 'Décroché' : 'Régime normal',
          alert: state.stalled,
        },
      ]}
      controls={
        <div className="sim__row">
          <label htmlFor={`${uid}-a`}>Incidence α</label>
          <input
            id={`${uid}-a`}
            type="range"
            min={A_MIN}
            max={A_MAX}
            step={0.5}
            value={alpha}
            onChange={(e) => {
              setAlpha(Number(e.target.value))
              flightLog.useLab('lift-curve')
            }}
          />
          <output className="sim__value">{alpha.toFixed(1)}°</output>
        </div>
      }
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Courbe du coefficient de portance en fonction de l'incidence. À ${alpha.toFixed(
          1,
        )} degrés, Cz vaut ${state.cl.toFixed(2)}. Le maximum, ${peak.cl.toFixed(
          2,
        )}, est atteint vers ${peak.alpha.toFixed(0)} degrés.`}
      >
        {/* grille */}
        <g stroke="var(--c-line-soft)" strokeWidth="1">
          {ticksA.map((a) => (
            <line key={a} x1={x(a)} y1={PAD.t} x2={x(a)} y2={H - PAD.b} />
          ))}
          {ticksC.map((c) => (
            <line key={c} x1={PAD.l} y1={y(c)} x2={W - PAD.r} y2={y(c)} />
          ))}
        </g>

        {/* axes */}
        <g stroke="var(--c-graphite)" strokeWidth="1.2">
          <line x1={PAD.l} y1={y(0)} x2={W - PAD.r} y2={y(0)} />
          <line x1={x(0)} y1={PAD.t} x2={x(0)} y2={H - PAD.b} />
        </g>

        <g
          fontFamily="var(--f-mono)"
          fontSize="11"
          fill="var(--c-mute)"
          textAnchor="middle"
        >
          {ticksA.map((a) => (
            <text key={a} x={x(a)} y={H - PAD.b + 20}>
              {a}
            </text>
          ))}
          <text x={(W + PAD.l) / 2} y={H - 16} letterSpacing="2">
            INCIDENCE α (°)
          </text>
        </g>
        <g
          fontFamily="var(--f-mono)"
          fontSize="11"
          fill="var(--c-mute)"
          textAnchor="end"
        >
          {ticksC.map((c) => (
            <text key={c} x={PAD.l - 12} y={y(c) + 4}>
              {c.toFixed(1)}
            </text>
          ))}
          <text
            x={-H / 2}
            y="20"
            transform="rotate(-90)"
            textAnchor="middle"
            letterSpacing="2"
          >
            Cz
          </text>
        </g>

        {/* zone de décrochage */}
        <rect
          x={x(ALPHA_STALL)}
          y={PAD.t}
          width={W - PAD.r - x(ALPHA_STALL)}
          height={H - PAD.t - PAD.b}
          fill="var(--c-err)"
          opacity="0.05"
        />
        <line
          x1={x(ALPHA_STALL)}
          y1={PAD.t}
          x2={x(ALPHA_STALL)}
          y2={H - PAD.b}
          stroke="var(--c-err)"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.6"
        />
        <text
          x={x(ALPHA_STALL) + 10}
          y={PAD.t + 16}
          fontSize="10"
          fontFamily="var(--f-mono)"
          fill="var(--c-err)"
          letterSpacing="1.6"
        >
          DÉCROCHAGE
        </text>

        {/* courbe */}
        <path d={path} fill="none" stroke="var(--c-ink)" strokeWidth="2.2" />

        {/* point courant */}
        <g>
          <line
            x1={x(alpha)}
            y1={y(0)}
            x2={x(alpha)}
            y2={y(state.cl)}
            stroke="var(--c-electric)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1={PAD.l}
            y1={y(state.cl)}
            x2={x(alpha)}
            y2={y(state.cl)}
            stroke="var(--c-electric)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle
            cx={x(alpha)}
            cy={y(state.cl)}
            r="6"
            fill="var(--c-electric)"
            stroke="var(--c-white)"
            strokeWidth="2"
          />
          <text
            x={x(alpha) + 14}
            y={y(state.cl) - 12}
            fontSize="13"
            fontFamily="var(--f-mono)"
            fill="var(--c-ink)"
          >
            Cz {state.cl.toFixed(2)}
          </text>
        </g>

        {/* sommet */}
        <circle
          cx={x(peak.alpha)}
          cy={y(peak.cl)}
          r="3.5"
          fill="none"
          stroke="var(--c-graphite)"
          strokeWidth="1.4"
        />
      </svg>
    </SimShell>
  )
}
