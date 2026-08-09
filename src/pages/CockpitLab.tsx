import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { INSTRUMENTS, type Instrument } from '@/data/instruments'
import { flightLog } from '@/lib/progress'

/**
 * COCKPIT LAB (§15 / §16).
 *
 * Trois niveaux, un seul tableau de bord :
 *   DÉCOUVERTE  — tout est expliqué au clic.
 *   ENTRAÎNEMENT— les libellés disparaissent, l'explication reste au clic.
 *   ÉVALUATION  — on demande un instrument, il faut le désigner.
 *
 * En SVG, pour rester net au vidéoprojecteur et pilotable au clavier (§35).
 */

type Mode = 'decouverte' | 'entrainement' | 'evaluation'

const MODES: { id: Mode; label: string }[] = [
  { id: 'decouverte', label: 'Découverte' },
  { id: 'entrainement', label: 'Entraînement' },
  { id: 'evaluation', label: 'Évaluation' },
]

const CELL_W = 250
const CELL_H = 220
const R = 78

function Face({ id }: { id: string }) {
  const ticks = Array.from({ length: 12 }, (_, i) => i * 30)

  switch (id) {
    case 'ai':
      return (
        <>
          <circle r={R - 6} fill="#0f1620" />
          <path
            d={`M ${-(R - 6)} 0 A ${R - 6} ${R - 6} 0 0 0 ${R - 6} 0 Z`}
            fill="#3a2f24"
          />
          <path
            d={`M ${-(R - 6)} 0 A ${R - 6} ${R - 6} 0 0 1 ${R - 6} 0 Z`}
            fill="#1d3550"
          />
          <line x1={-(R - 6)} y1="0" x2={R - 6} y2="0" stroke="#dfe8f0" strokeWidth="2" />
          <path d="M-34,0 L-12,0 M12,0 L34,0 M0,-4 L0,4" stroke="#ffb02e" strokeWidth="3" />
          <path d={`M0,${-(R - 10)} l -7,12 l 14,0 z`} fill="#dfe8f0" />
        </>
      )
    case 'asi':
      return (
        <>
          <circle r={R - 6} fill="#0d131b" />
          <path
            d={`M 0 ${-(R - 14)} A ${R - 14} ${R - 14} 0 0 1 ${R - 14} 0`}
            fill="none"
            stroke="#2f8f5b"
            strokeWidth="6"
          />
          <path
            d={`M ${R - 14} 0 A ${R - 14} ${R - 14} 0 0 1 30 ${R - 22}`}
            fill="none"
            stroke="#c9a227"
            strokeWidth="6"
          />
          <path
            d={`M 30 ${R - 22} A ${R - 14} ${R - 14} 0 0 1 6 ${R - 15}`}
            fill="none"
            stroke="#b3261e"
            strokeWidth="6"
          />
          {ticks.map((a) => (
            <line
              key={a}
              x1="0"
              y1={-(R - 22)}
              x2="0"
              y2={-(R - 30)}
              stroke="#8d99a6"
              strokeWidth="1.5"
              transform={`rotate(${a})`}
            />
          ))}
          <line
            x1="0"
            y1="6"
            x2="0"
            y2={-(R - 30)}
            stroke="#eef3f8"
            strokeWidth="3"
            transform="rotate(58)"
          />
          <circle r="5" fill="#8d99a6" />
        </>
      )
    case 'alt':
      return (
        <>
          <circle r={R - 6} fill="#0d131b" />
          {ticks.map((a) => (
            <g key={a} transform={`rotate(${a})`}>
              <line x1="0" y1={-(R - 14)} x2="0" y2={-(R - 28)} stroke="#dfe8f0" strokeWidth="2" />
              <text
                x="0"
                y={-(R - 40)}
                fill="#8d99a6"
                fontSize="11"
                textAnchor="middle"
                fontFamily="var(--f-mono)"
                transform={`rotate(${-a} 0 ${-(R - 44)})`}
              >
                {a / 30}
              </text>
            </g>
          ))}
          <line x1="0" y1="4" x2="0" y2={-(R - 34)} stroke="#eef3f8" strokeWidth="4" transform="rotate(30)" />
          <line x1="0" y1="4" x2="0" y2={-(R - 18)} stroke="#eef3f8" strokeWidth="2" transform="rotate(210)" />
          <rect x="26" y="-10" width="34" height="20" fill="#05070a" stroke="#5a6673" />
          <circle r="5" fill="#8d99a6" />
        </>
      )
    case 'tc':
      return (
        <>
          <circle r={R - 6} fill="#0d131b" />
          <g stroke="#eef3f8" strokeWidth="3" transform="rotate(-12)">
            <line x1="-44" y1="-8" x2="44" y2="-8" />
            <line x1="0" y1="-8" x2="0" y2="-20" />
            <circle r="6" cy="-8" fill="none" />
          </g>
          <g stroke="#c9a227" strokeWidth="2">
            <line x1="-46" y1="-22" x2="-46" y2="-6" />
            <line x1="46" y1="-22" x2="46" y2="-6" />
          </g>
          <path d="M-30,42 A 46 46 0 0 1 30 42" fill="none" stroke="#5a6673" strokeWidth="12" />
          <circle cx="4" cy="43" r="6" fill="#eef3f8" />
        </>
      )
    case 'hi':
      return (
        <>
          <circle r={R - 6} fill="#0d131b" />
          <g transform="rotate(-24)">
            {ticks.map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <line x1="0" y1={-(R - 12)} x2="0" y2={-(R - 24)} stroke="#dfe8f0" strokeWidth="2" />
                <text
                  x="0"
                  y={-(R - 38)}
                  fill="#8d99a6"
                  fontSize="12"
                  textAnchor="middle"
                  fontFamily="var(--f-mono)"
                  transform={`rotate(${-a + 24} 0 ${-(R - 42)})`}
                >
                  {a === 0 ? 'N' : a === 90 ? 'E' : a === 180 ? 'S' : a === 270 ? 'W' : a / 10}
                </text>
              </g>
            ))}
          </g>
          <path d="M0,-16 L-14,16 L0,8 L14,16 Z" fill="#eef3f8" />
          <path d={`M0,${-(R - 6)} l -6,11 l 12,0 z`} fill="#ffb02e" />
        </>
      )
    case 'vsi':
      return (
        <>
          <circle r={R - 6} fill="#0d131b" />
          {[-150, -110, -70, -30, 30, 70, 110, 150].map((a) => (
            <line
              key={a}
              x1="0"
              y1={-(R - 14)}
              x2="0"
              y2={-(R - 26)}
              stroke="#dfe8f0"
              strokeWidth="1.8"
              transform={`rotate(${a})`}
            />
          ))}
          <line x1={-(R - 14)} y1="0" x2={-(R - 34)} y2="0" stroke="#8d99a6" strokeWidth="2" />
          <line x1={R - 14} y1="0" x2={R - 34} y2="0" stroke="#8d99a6" strokeWidth="2" />
          <line x1="0" y1="0" x2={R - 30} y2="-22" stroke="#eef3f8" strokeWidth="3" />
          <circle r="5" fill="#8d99a6" />
          <text x="0" y="52" fill="#5a6673" fontSize="10" textAnchor="middle" fontFamily="var(--f-mono)">
            FT/MIN
          </text>
        </>
      )
    default:
      return <circle r={R - 6} fill="#0d131b" />
  }
}

export default function CockpitLab() {
  const [mode, setMode] = useState<Mode>('decouverte')
  const [selected, setSelected] = useState<Instrument | null>(null)
  const [target, setTarget] = useState<Instrument | null>(null)
  const [verdict, setVerdict] = useState<'ok' | 'ko' | null>(null)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  useEffect(() => {
    flightLog.useLab('cockpit-lab')
  }, [])

  const nextChallenge = useMemo(
    () => () => {
      const pool = INSTRUMENTS.filter((i) => i.id !== target?.id)
      setTarget(pool[Math.floor(Math.random() * pool.length)])
      setVerdict(null)
    },
    [target],
  )

  useEffect(() => {
    if (mode === 'evaluation' && !target) nextChallenge()
    if (mode !== 'evaluation') {
      setTarget(null)
      setVerdict(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const pick = (inst: Instrument) => {
    if (mode === 'evaluation') {
      if (!target || verdict) return
      const ok = inst.id === target.id
      setVerdict(ok ? 'ok' : 'ko')
      setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
      setSelected(inst)
      return
    }
    setSelected(inst)
  }

  return (
    <div className="page u-shell">
      <div className="page__head">
        <Link to="/lab" className="crumb">
          ← Laboratoires
        </Link>
        <p className="page__eyebrow">
          <span>Lab</span> · <span>Instruments</span>
        </p>
        <h1 className="page__title">Cockpit Lab</h1>
        <p className="page__claim">
          Six instruments, une planche de bord. Observe, puis désigne-les sans
          aide.
        </p>
      </div>

      <div className="cockpit__modes" role="group" aria-label="Niveau">
        {MODES.map((m) => (
          <button
            key={m.id}
            aria-pressed={mode === m.id}
            onClick={() => {
              setMode(m.id)
              setSelected(null)
              setScore({ ok: 0, total: 0 })
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === 'evaluation' && target && (
        <div
          className="b-callout"
          data-tone="note"
          style={{ marginTop: 'var(--s-5)' }}
        >
          <h3>
            Consigne · {score.ok} / {score.total}
          </h3>
          <p style={{ fontSize: 'var(--t-h3)', color: 'var(--c-ink)' }}>
            {target.challenge}
          </p>
        </div>
      )}

      <div className="cockpit">
        <div className="cockpit__stage">
          <svg
            viewBox={`0 0 ${CELL_W * 3} ${CELL_H * 2}`}
            role="group"
            aria-label="Planche de bord — six instruments"
          >
            <rect width={CELL_W * 3} height={CELL_H * 2} fill="#0c1119" />
            {INSTRUMENTS.map((inst) => {
              const cx = inst.cell[0] * CELL_W + CELL_W / 2
              const cy = inst.cell[1] * CELL_H + CELL_H / 2
              const isSel = selected?.id === inst.id
              const dim = mode === 'evaluation' && verdict && !isSel
              return (
                <g
                  key={inst.id}
                  className="hotspot"
                  transform={`translate(${cx} ${cy})`}
                  opacity={dim ? 0.35 : 1}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    mode === 'decouverte' ? inst.name : `Instrument ${inst.abbr}`
                  }
                  onClick={() => pick(inst)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      pick(inst)
                    }
                  }}
                >
                  <circle
                    r={R + 6}
                    fill="#05070a"
                    stroke={
                      mode === 'evaluation' && isSel
                        ? verdict === 'ok'
                          ? 'var(--c-ok)'
                          : 'var(--c-err)'
                        : isSel
                          ? 'var(--c-electric)'
                          : '#1b2330'
                    }
                    strokeWidth={isSel ? 3 : 2}
                  />
                  <Face id={inst.id} />
                  {mode === 'decouverte' && (
                    <text
                      y={R + 30}
                      textAnchor="middle"
                      fill="#8d99a6"
                      fontSize="12"
                      fontFamily="var(--f-mono)"
                      letterSpacing="1.8"
                    >
                      {inst.name.toUpperCase()}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        <div className="cockpit__panel">
          {mode === 'evaluation' && verdict ? (
            <>
              <p className="u-label" style={{ color: verdict === 'ok' ? 'var(--c-ok)' : 'var(--c-err)' }}>
                {verdict === 'ok' ? 'Correct' : 'Incorrect'}
              </p>
              <h3>{target?.name}</h3>
              <dl>
                <div className="cockpit__field">
                  <dt>Pourquoi</dt>
                  <dd>{target?.fonction}</dd>
                </div>
                <div className="cockpit__field">
                  <dt>À retenir</dt>
                  <dd>{target?.retenir}</dd>
                </div>
              </dl>
              <button className="btn btn--primary" onClick={nextChallenge}>
                Instrument suivant
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </>
          ) : selected ? (
            <>
              <p className="u-label">{selected.abbr}</p>
              <h3>{selected.name}</h3>
              <dl>
                <div className="cockpit__field">
                  <dt>Fonction</dt>
                  <dd>{selected.fonction}</dd>
                </div>
                <div className="cockpit__field">
                  <dt>Unité</dt>
                  <dd>{selected.unite}</dd>
                </div>
                {mode === 'decouverte' && (
                  <>
                    <div className="cockpit__field">
                      <dt>Principe</dt>
                      <dd>{selected.principe}</dd>
                    </div>
                    <div className="cockpit__field">
                      <dt>Lecture</dt>
                      <dd>{selected.lecture}</dd>
                    </div>
                  </>
                )}
                <div className="cockpit__field">
                  <dt>Erreurs et limites</dt>
                  <dd>{selected.limites}</dd>
                </div>
                <div className="cockpit__field">
                  <dt>À retenir</dt>
                  <dd>{selected.retenir}</dd>
                </div>
              </dl>
            </>
          ) : (
            <>
              <p className="u-label">
                {mode === 'evaluation'
                  ? 'Désigne l’instrument demandé'
                  : 'Sélectionne un instrument'}
              </p>
              <h3>Les six de base</h3>
              <div style={{ display: 'grid', gap: 2 }}>
                {INSTRUMENTS.map((i) => (
                  <button
                    key={i.id}
                    className="quiz__option"
                    style={{ gridTemplateColumns: '38px 1fr auto' }}
                    onClick={() => pick(i)}
                  >
                    <span>{i.abbr}</span>
                    <span>{mode === 'evaluation' ? '—' : i.name}</span>
                    <span className="quiz__mark" aria-hidden="true">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <p className="sim__note" style={{ border: 0, paddingInline: 0 }}>
        <strong
          style={{
            fontFamily: 'var(--f-mono)',
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            fontSize: 9,
          }}
        >
          Modèle ·{' '}
        </strong>
        Représentation stylisée d'une planche de bord classique à six
        instruments. Les cadrans ne sont pas animés par un modèle de vol : ils
        servent à l'identification et à la compréhension du principe. Les
        valeurs, tolérances et limitations d'un appareil donné figurent dans son
        manuel de vol, et nulle part ailleurs.
      </p>
    </div>
  )
}
