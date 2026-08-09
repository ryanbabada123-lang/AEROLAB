import { Link } from 'react-router-dom'
import { TRACKS } from '@/data/tracks'
import { useReveal } from '@/hooks/useReveal'
import { BIA_SUBJECTS, COURSES } from '@/content'

/**
 * LES 4 AXES (§09 / §10).
 *
 * Quatre bandes pleine largeur, pas quatre cartes. Chacune porte son propre
 * motif de fond et son propre accent : on doit sentir qu'on change de
 * territoire en passant de l'une à l'autre.
 */

const READY_COURSES = COURSES.length

function meta(id: string) {
  switch (id) {
    case 'bia':
      return [
        ['Matières', String(BIA_SUBJECTS.length)],
        ['Cours ouverts', String(READY_COURSES)],
      ]
    case 'ppl':
      return [
        ['Module', 'Flight Lab'],
        ['Matières', 'À intégrer'],
      ]
    case 'atpl':
      return [
        ['Module', 'ATPL Progress'],
        ['Matières', 'À intégrer'],
      ]
    default:
      return [
        ['Format', 'Parcours'],
        ['Étapes', 'Timeline'],
      ]
  }
}

export default function Axes() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section className="axes" aria-labelledby="axes-title">
      <div className="u-shell">
        <div className="axes__intro" ref={headRef}>
          <p className="u-label">Ton parcours commence ici</p>
          <h2 className="axes__title" id="axes-title">
            Quatre façons
            <br />
            d’entrer dans le ciel.
          </h2>
        </div>
      </div>

      {TRACKS.map((t) => (
        <Link
          key={t.id}
          to={t.to}
          className="axis"
          data-motif={t.motif}
          data-tone={t.tone}
        >
          <span className="axis__motif" aria-hidden="true" />
          <div className="u-shell">
            <div className="axis__inner">
              <div className="axis__head">
                <span className="axis__index">{t.index}</span>
                <h3 className="axis__name">{t.name}</h3>
                <p className="axis__claim">{t.claim}</p>
                <p className="axis__line">{t.line}</p>
                <span className="axis__go">
                  Entrer <span aria-hidden="true">→</span>
                </span>
              </div>

              <div className="axis__meta">
                <dl>
                  {meta(t.id).map(([k, v]) => (
                    <div key={k} style={{ display: 'contents' }}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
