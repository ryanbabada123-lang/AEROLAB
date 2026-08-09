import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PARTS } from '@/data/parts'
import { Awaiting } from '@/components/course/Blocks'
import ErrorBoundary from '@/components/ErrorBoundary'
import { getDeviceProfile } from '@/lib/device'
import { flightLog } from '@/lib/progress'

const AircraftExploded = lazy(() => import('@/three/AircraftExploded'))

/**
 * AIRCRAFT LAB (§17 / §18).
 *
 * La vue éclatée est opérationnelle : elle porte sur NOTRE forme stylisée,
 * donc elle n'affirme aucune caractéristique technique d'un appareil réel.
 * La bibliothèque d'aéronefs, elle, reste vide tant que l'auteur n'a pas
 * fourni les appareils et leurs sources (§38).
 */

export default function AircraftLab() {
  const explodeRef = useRef(0)
  const [explode, setExplode] = useState(0.32)
  const [selected, setSelected] = useState<string | null>(null)
  const [webgl] = useState(() => getDeviceProfile().webgl)

  explodeRef.current = explode

  useEffect(() => {
    flightLog.useLab('aircraft-exploded')
  }, [])

  const part = PARTS.find((p) => p.id === selected) ?? null

  return (
    <div className="page u-shell">
      <div className="page__head">
        <Link to="/lab" className="crumb">
          ← Laboratoires
        </Link>
        <p className="page__eyebrow">
          <span>Lab</span> · <span>Aéronefs</span>
        </p>
        <h1 className="page__title">Aircraft Lab</h1>
        <p className="page__claim">
          Tourner, zoomer, séparer. Chaque pièce d'un avion a une fonction —
          et une seule bonne raison d'être là.
        </p>
      </div>

      <div className="cockpit">
        <div
          className="cockpit__stage"
          style={{ background: 'var(--c-frost)', minHeight: 480 }}
        >
          {webgl ? (
            <ErrorBoundary quiet>
              <Suspense
                fallback={
                  <div className="route-fallback" style={{ minHeight: 480 }}>
                    <span className="u-label">Chargement du modèle</span>
                  </div>
                }
              >
                <div style={{ position: 'absolute', inset: 0 }}>
                  <AircraftExploded
                    explodeRef={explodeRef}
                    selected={selected}
                    onSelect={(id) => setSelected(id || null)}
                  />
                </div>
              </Suspense>
            </ErrorBoundary>
          ) : (
            <div className="route-fallback" style={{ minHeight: 480 }}>
              <span className="u-label">
                Vue 3D indisponible sur cet appareil — descriptions ci-contre
              </span>
            </div>
          )}
        </div>

        <div className="cockpit__panel">
          {part ? (
            <>
              <p className="u-label">Pièce</p>
              <h3>{part.name}</h3>
              <dl>
                <div className="cockpit__field">
                  <dt>Rôle</dt>
                  <dd>{part.role}</dd>
                </div>
              </dl>
              <button className="btn btn--ghost" onClick={() => setSelected(null)}>
                Vue d'ensemble
              </button>
            </>
          ) : (
            <>
              <p className="u-label">Pièces</p>
              <h3>Sélectionne un élément</h3>
              <div style={{ display: 'grid', gap: 2, marginTop: 'var(--s-3)' }}>
                {PARTS.map((p) => (
                  <button
                    key={p.id}
                    className="quiz__option"
                    style={{ gridTemplateColumns: '1fr auto' }}
                    onClick={() => setSelected(p.id)}
                  >
                    <span>{p.name}</span>
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

      <div className="sim__controls" style={{ borderInline: '1px solid var(--c-line)' }}>
        <div className="sim__row">
          <label htmlFor="explode">Vue éclatée</label>
          <input
            id="explode"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={explode}
            onChange={(e) => setExplode(Number(e.target.value))}
          />
          <output className="sim__value">{Math.round(explode * 100)} %</output>
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
        Forme stylisée propre à AERO//LAB, inspirée de l'architecture générale
        d'un monomoteur à aile haute. Elle ne représente aucun appareil
        existant et ne porte donc aucune caractéristique technique réelle.
      </p>

      <div className="section-head">
        <p className="u-label">Bibliothèque</p>
        <h2>Aéronefs</h2>
        <p>
          Chaque appareil aura sa fiche : cockpit, dimensions, motorisation,
          performances, usage et histoire.
        </p>
      </div>

      <Awaiting what="Aucun aéronef n'est publié pour l'instant. Chaque donnée technique — dimensions, masses, performances — doit être rattachée à une source identifiée (manuel de vol ou documentation constructeur) avant d'être affichée. Les appareils de formation seront intégrés dès que l'auteur aura fourni les fiches et leurs références." />
    </div>
  )
}
