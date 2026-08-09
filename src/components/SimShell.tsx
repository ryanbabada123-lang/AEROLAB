import type { ReactNode } from 'react'

/**
 * Enveloppe commune à toutes les simulations : titre, scène, commandes,
 * lecture des valeurs, et — obligatoirement — la note de modèle.
 *
 * Aucune simulation ne s'affiche sans dire ce qu'elle modélise et ce
 * qu'elle ne modélise pas (§20 / §38 / §51.3).
 */
export default function SimShell({
  title,
  tag,
  brief,
  children,
  controls,
  readout,
  note,
}: {
  title: string
  tag?: string
  brief?: string
  children: ReactNode
  controls?: ReactNode
  readout?: { label: string; value: string; alert?: boolean }[]
  note: string
}) {
  const alert = readout?.some((r) => r.alert)

  return (
    <figure className="sim">
      <figcaption className="sim__head">
        <span className="sim__title">{title}</span>
        {tag && <span className="sim__tag">{tag}</span>}
      </figcaption>

      {brief && <p className="sim__brief">{brief}</p>}

      <div className="sim__stage">{children}</div>

      {controls && <div className="sim__controls">{controls}</div>}

      {readout && readout.length > 0 && (
        <div className="sim__readout" data-alert={alert ? 'true' : 'false'}>
          {readout.map((r) => (
            <div key={r.label} className={r.alert ? 'is-alert' : undefined}>
              <span className="u-label">{r.label}</span>
              <b>{r.value}</b>
            </div>
          ))}
        </div>
      )}

      <p className="sim__note">
        <strong
          style={{
            fontFamily: 'var(--f-mono)',
            letterSpacing: 'var(--ls-label)',
            textTransform: 'uppercase',
            fontSize: 9,
            fontWeight: 500,
          }}
        >
          Modèle ·{' '}
        </strong>
        {note}
      </p>
    </figure>
  )
}
