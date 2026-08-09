import { useState } from 'react'
import { Link } from 'react-router-dom'
import { JOURNEY, UNDOCUMENTED_FIELDS, type Step } from '@/data/journey'
import { useReveal } from '@/hooks/useReveal'

/**
 * DEVENIR PILOTE DE LIGNE (§14).
 *
 * Ce n'est pas une matière, c'est un parcours : une timeline verticale que
 * l'on déplie étape par étape.
 */

function StepRow({
  step,
  i,
  open,
  onToggle,
}: {
  step: Step
  i: number
  open: boolean
  onToggle: () => void
}) {
  const ref = useReveal<HTMLDivElement>({ stagger: Math.min(i, 8) * 45 })

  return (
    <div className="step" ref={ref} data-revealed="false" data-open={open}>
      <div className="step__dot" aria-hidden="true" />
      <div>
        <button
          className="step__head"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`step-${step.id}`}
        >
          <span className="step__name">{step.name}</span>
          <span className="step__kind">{step.kind}</span>
          <span className="step__kind" aria-hidden="true" style={{ marginLeft: 'auto' }}>
            {open ? '−' : '+'}
          </span>
        </button>
        <p className="step__line">{step.line}</p>

        {open && (
          <div className="step__detail" id={`step-${step.id}`}>
            <dl>
              {step.apporte && (
                <div>
                  <dt>Ce que l'étape apporte</dt>
                  <dd>{step.apporte}</dd>
                </div>
              )}
              {UNDOCUMENTED_FIELDS.map((f) => (
                <div key={f}>
                  <dt>{f}</dt>
                  <dd style={{ color: 'var(--c-warn)' }}>
                    À documenter — sera renseigné à partir des textes officiels
                    en vigueur, avec la référence exacte.
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Journey() {
  const [open, setOpen] = useState<string | null>(null)
  const headRef = useReveal<HTMLDivElement>()

  return (
    <div className="page u-shell">
      <div className="page__head" ref={headRef}>
        <Link to="/" className="crumb">
          ← AERO//LAB
        </Link>
        <p className="page__eyebrow">
          <span>04</span> · <span>Transformer le rêve en carrière</span>
        </p>
        <h1 className="page__title">Devenir pilote de ligne</h1>
        <p className="page__claim">
          Ce n'est pas une matière. C'est un enchaînement d'étapes, dont
          chacune conditionne la suivante.
        </p>
      </div>

      <div
        className="b-callout"
        data-tone="model"
        style={{ marginTop: 'clamp(32px, 5vh, 56px)' }}
      >
        <h3>Statut de cette page</h3>
        <p>
          La séquence ci-dessous donne la structure générale du parcours. Elle
          n'est pas présentée comme réglementaire : les prérequis, durées,
          coûts et modalités d'examen dépendent de l'autorité compétente et de
          l'organisme de formation. Ces champs restent volontairement vides
          jusqu'à ce qu'ils puissent être renseignés avec leur référence
          officielle — aucune valeur n'est estimée.
        </p>
      </div>

      <div className="timeline">
        {JOURNEY.map((s, i) => (
          <StepRow
            key={s.id}
            step={s}
            i={i}
            open={open === s.id}
            onToggle={() => setOpen(open === s.id ? null : s.id)}
          />
        ))}
      </div>
    </div>
  )
}
