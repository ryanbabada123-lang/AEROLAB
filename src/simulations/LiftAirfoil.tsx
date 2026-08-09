import { useId, useMemo, useState } from 'react'
import {
  MODEL_NOTE,
  liftModel,
  nacaOutline,
  parseNaca,
  type Point,
} from '@/lib/airfoil'
import { clamp } from '@/lib/math'
import { flightLog } from '@/lib/progress'
import SimShell from '@/components/SimShell'

/**
 * PROFIL D'AILE INTERACTIF (§27 / §47).
 *
 * En SVG et non en WebGL : c'est un schéma technique manipulable, il doit
 * être net à toutes les résolutions, lisible au vidéoprojecteur et
 * accessible au clavier (§28 — pas de 3D décorative).
 *
 * Trois lectures superposées, activables séparément :
 *   — l'écoulement       (ce que fait l'air)
 *   — les pressions      (ce que subit la surface)
 *   — la force résultante(ce qui en sort)
 */

const W = 920
const H = 390
const CHORD = 420
const CX = 268 // bord d'attaque, en x
const CY = 202 // ligne de référence (direction du vent relatif)

/** Nappes de courant : resserrées près du profil, où tout se joue. */
const STREAM_OFFSETS = [-152, -116, -86, -60, -38, 38, 60, 86, 116, 152]

const NACA = '2412'
const ALPHA_STALL = 15

/** Cp qualitatif le long de la corde. Voir MODEL_NOTE : forme, pas valeurs. */
function cpAt(x: number, upper: boolean, cl: number, separation: number) {
  if (upper) {
    // Pic de dépression juste après le bord d'attaque, puis recompression.
    const peak = Math.exp(-14 * x) * 0.75 + Math.exp(-2.6 * x) * 0.55
    const attached = x > 1 - separation ? 0.18 : 1
    return -peak * (0.35 + Math.abs(cl) * 0.72) * attached
  }
  // Intrados : surpression douce, maximale vers l'avant.
  return Math.max(0, cl) * 0.3 * (1 - x) ** 0.7 + 0.04
}

function toScreen(p: Point): [number, number] {
  return [CX + p.x * CHORD, CY - p.y * CHORD]
}

export default function LiftAirfoil() {
  const [alpha, setAlpha] = useState(6)
  const [showFlow, setShowFlow] = useState(true)
  const [showPressure, setShowPressure] = useState(true)
  const [showForce, setShowForce] = useState(true)
  const uid = useId()

  const params = useMemo(() => parseNaca(NACA), [])
  const outline = useMemo(() => nacaOutline(params, 70), [params])
  const state = useMemo(
    () => liftModel(alpha, params, { alphaStall: ALPHA_STALL }),
    [alpha, params],
  )

  const path = useMemo(() => {
    const pts = outline.map(toScreen)
    return (
      pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ') +
      ' Z'
    )
  }, [outline])

  /** Vecteurs de pression, normaux à la surface. */
  const pressures = useMemo(() => {
    const step = 4
    const out: { x: number; y: number; dx: number; dy: number; cp: number }[] = []
    for (let i = step; i < outline.length - step; i += step) {
      const prev = outline[i - 1]
      const next = outline[i + 1]
      const cur = outline[i]
      const tx = next.x - prev.x
      const ty = next.y - prev.y
      const len = Math.hypot(tx, ty) || 1
      // Normale sortante (le contour est parcouru extrados → intrados).
      let nx = ty / len
      let ny = -tx / len
      const upper = cur.y >= 0 ? i < outline.length / 2 : i < outline.length / 2
      if (upper && ny < 0) {
        nx = -nx
        ny = -ny
      }
      if (!upper && ny > 0) {
        nx = -nx
        ny = -ny
      }

      const cp = cpAt(clamp(cur.x), upper, state.cl, state.separation)
      const [sx, sy] = toScreen(cur)
      // Cp négatif = dépression : la flèche tire la surface vers l'extérieur.
      const mag = cp * -1 * 62
      out.push({ x: sx, y: sy, dx: nx * mag, dy: -ny * mag, cp })
    }
    return out
  }, [outline, state.cl, state.separation])

  /**
   * Filets d'air déviés par le profil.
   *
   * Trois effets se cumulent, chacun correspondant à quelque chose de réel :
   *   — l'ÉCARTEMENT dû à l'épaisseur : l'air doit contourner le corps ;
   *   — la DÉVIATION due à l'incidence, plus marquée à l'extrados ;
   *   — la DÉFLEXION aval : le sillage repart vers le bas, et c'est la
   *     contrepartie de la portance.
   * Représentation qualitative — voir MODEL_NOTE.
   */
  const streams = useMemo(() => {
    const aRad = (alpha * Math.PI) / 180
    const xMid = CX + CHORD * 0.34
    const sep = state.separation

    return STREAM_OFFSETS.map((offset) => {
      const up = offset < 0 ? 1 : -1
      const vert = Math.exp(-Math.pow(offset / 128, 2) * 1.75)
      const side = up > 0 ? 1 : 0.5

      const pts: string[] = []
      for (let i = 0; i <= 60; i++) {
        const t = i / 60
        const x = t * W
        const rel = (x - xMid) / (CHORD * 0.66)
        const near = Math.exp(-rel * rel)

        const thickness = near * vert * 30
        const incidence = near * vert * aRad * 300 * side
        const downwash = Math.max(0, rel) * vert * aRad * 165

        // Décollement : au-delà du décrochage, l'extrados cesse de guider
        // l'écoulement et les filets se soulèvent au lieu de recoller.
        const burble =
          up > 0 && sep > 0.05 && rel > 1 - sep * 2
            ? Math.sin(x * 0.09) * sep * 16 * vert
            : 0

        const y = CY + offset - up * (thickness + incidence) + downwash + burble
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
      }
      return 'M' + pts.join(' L')
    })
  }, [alpha, state.separation])

  const liftLen = clamp(state.cl / 1.7, 0, 1.25) * 140
  const aRad = (alpha * Math.PI) / 180
  // On fait pivoter le profil autour de son BORD D'ATTAQUE : ce point reste
  // fixe, ce qui permet de construire l'angle d'incidence exactement dessus.
  const pivot = `${CX} ${CY}`
  // Quart avant de corde, après rotation — origine de la force résultante.
  const qx = CX + CHORD * 0.25 * Math.cos(aRad)
  const qy = CY - CHORD * 0.25 * Math.sin(aRad)

  const onAlpha = (v: number) => {
    setAlpha(v)
    flightLog.useLab('lift-airfoil')
  }

  return (
    <SimShell
      title="Profil, écoulement, incidence"
      tag={`NACA ${NACA}`}
      note={`${MODEL_NOTE.geometry} ${MODEL_NOTE.lift} ${MODEL_NOTE.limits}`}
      readout={[
        { label: 'Incidence', value: `${alpha.toFixed(1)}°` },
        { label: 'Cz', value: state.cl.toFixed(2) },
        { label: 'Cx (tendance)', value: state.cd.toFixed(3) },
        {
          label: 'Écoulement',
          value: state.stalled ? 'Décollé' : 'Collé',
          alert: state.stalled,
        },
      ]}
      controls={
        <>
          <div className="sim__row">
            <label htmlFor={`${uid}-a`}>Incidence α</label>
            <input
              id={`${uid}-a`}
              type="range"
              min={-6}
              max={22}
              step={0.5}
              value={alpha}
              onChange={(e) => onAlpha(Number(e.target.value))}
            />
            <output className="sim__value">{alpha.toFixed(1)}°</output>
          </div>

          <div className="sim__row" style={{ gridTemplateColumns: '1fr' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-4)' }}>
              <Toggle on={showFlow} set={setShowFlow} label="Écoulement" />
              <Toggle on={showPressure} set={setShowPressure} label="Pressions" />
              <Toggle on={showForce} set={setShowForce} label="Force" />
            </div>
          </div>
        </>
      }
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Profil d'aile à ${alpha.toFixed(
          1,
        )} degrés d'incidence. Coefficient de portance ${state.cl.toFixed(
          2,
        )}. Écoulement ${state.stalled ? 'décollé' : 'collé'}.`}
      >
        <defs>
          <marker
            id={`${uid}-arrow`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--c-electric)" />
          </marker>
          <marker
            id={`${uid}-wind`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--c-graphite)" />
          </marker>
        </defs>

        {/* ---- ÉCOULEMENT ---- */}
        {showFlow && (
          <g
            fill="none"
            stroke="var(--c-glacier-deep)"
            strokeWidth="1"
            opacity="0.75"
          >
            {streams.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        )}

        {/* ---- VENT RELATIF ---- */}
        <g stroke="var(--c-graphite)" strokeWidth="1.2">
          <line
            x1="24"
            y1={CY}
            x2="150"
            y2={CY}
            markerEnd={`url(#${uid}-wind)`}
          />
        </g>
        <text
          x="24"
          y={CY - 12}
          fontSize="11"
          fill="var(--c-slate)"
          fontFamily="var(--f-mono)"
          letterSpacing="1.6"
        >
          VENT RELATIF
        </text>

        {/* ---- PROFIL ---- */}
        <g transform={`rotate(${-alpha} ${pivot})`}>
          {/* corde */}
          <line
            x1={CX}
            y1={CY}
            x2={CX + CHORD}
            y2={CY}
            stroke="var(--c-mute)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d={path}
            fill="var(--c-white)"
            stroke="var(--c-ink)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />

          {/* ---- PRESSIONS ---- */}
          {showPressure && (
            <g strokeWidth="1.1">
              {pressures.map((p, i) => (
                <line
                  key={i}
                  x1={p.x}
                  y1={p.y}
                  x2={p.x + p.dx}
                  y2={p.y + p.dy}
                  stroke={p.cp < 0 ? 'var(--c-electric)' : 'var(--c-graphite)'}
                  opacity={p.cp < 0 ? 0.75 : 0.5}
                />
              ))}
            </g>
          )}

          {/* ---- DÉCOLLEMENT ---- */}
          {state.separation > 0.05 && (
            <g
              fill="none"
              stroke="var(--c-err)"
              strokeWidth="1.1"
              opacity={0.55 + state.separation * 0.4}
            >
              {Array.from({ length: 7 }, (_, i) => {
                const x0 = CX + CHORD * (1 - state.separation)
                const x = x0 + (i / 6) * (CHORD * state.separation)
                const y = CY - 26 - i * 2
                return (
                  <path
                    key={i}
                    d={`M${x},${y} q 8,-9 16,0 q 8,9 16,0`}
                    transform={`translate(0 ${-i * 1.5})`}
                  />
                )
              })}
            </g>
          )}
        </g>

        {/* ---- ANGLE D'INCIDENCE ----
            Mesuré au bord d'attaque, EN AMONT du profil : entre la direction
            du vent relatif et la corde prolongée vers l'arrière. C'est là
            qu'il se lit sans rien recouvrir. */}
        <g>
          <line
            x1={CX - 116}
            y1={CY}
            x2={CX}
            y2={CY}
            stroke="var(--c-mute)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1={CX}
            y1={CY}
            x2={CX - 116 * Math.cos(aRad)}
            y2={CY + 116 * Math.sin(aRad)}
            stroke="var(--c-electric)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d={`M${CX - 78},${CY} A 78 78 0 0 0 ${
              CX - 78 * Math.cos(aRad)
            },${CY + 78 * Math.sin(aRad)}`}
            fill="none"
            stroke="var(--c-electric)"
            strokeWidth="1.4"
          />
          <text
            x={CX - 92}
            y={CY + 46 + Math.abs(alpha) * 0.6}
            textAnchor="end"
            fontSize="14"
            fill="var(--c-electric)"
            fontFamily="var(--f-mono)"
          >
            α {alpha.toFixed(1)}°
          </text>
        </g>

        {/* ---- FORCE RÉSULTANTE ---- */}
        {showForce && liftLen > 2 && (
          <g>
            <line
              x1={qx}
              y1={qy}
              x2={qx}
              y2={qy - liftLen}
              stroke="var(--c-electric)"
              strokeWidth="2.4"
              markerEnd={`url(#${uid}-arrow)`}
            />
            <text
              x={qx + 12}
              y={qy - liftLen + 4}
              fontSize="12"
              fill="var(--c-electric)"
              fontFamily="var(--f-mono)"
              letterSpacing="1.4"
            >
              PORTANCE
            </text>
          </g>
        )}

        {state.stalled && (
          <text
            x={W - 24}
            y="38"
            textAnchor="end"
            fontSize="13"
            fill="var(--c-err)"
            fontFamily="var(--f-mono)"
            letterSpacing="2.4"
          >
            DÉCROCHAGE
          </text>
        )}
      </svg>
    </SimShell>
  )
}

function Toggle({
  on,
  set,
  label,
}: {
  on: boolean
  set: (v: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      className="sim__tag"
      aria-pressed={on}
      onClick={() => set(!on)}
      style={{
        borderColor: on ? 'var(--c-ink)' : 'var(--c-line)',
        color: on ? 'var(--c-ink)' : 'var(--c-mute)',
      }}
    >
      {label}
    </button>
  )
}
