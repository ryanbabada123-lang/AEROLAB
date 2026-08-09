import { Link, useParams } from 'react-router-dom'
import { trackById } from '@/data/tracks'
import { BIA_SUBJECTS, courseById } from '@/content'
import { useReveal } from '@/hooks/useReveal'
import { Awaiting } from '@/components/course/Blocks'
import NotFound from './NotFound'

/**
 * PAGE D'AXE — BIA (§11), PPL (§12), ATPL (§13).
 *
 * Le BIA affiche ses matières (liste fournie par l'auteur). PPL et ATPL
 * exposent leur architecture et leurs modules propres, sans inventer de
 * découpage de matières (§52).
 */

function SubjectRow({
  idx,
  name,
  line,
  courses,
}: {
  idx: number
  name: string
  line: string
  courses: string[]
}) {
  const ref = useReveal<HTMLDivElement>({ stagger: idx * 40 })
  const first = courses.map(courseById).find(Boolean)

  const body = (
    <>
      <span className="subject__idx">{String(idx + 1).padStart(2, '0')}</span>
      <div>
        <h3 className="subject__name">{name}</h3>
        <p className="subject__line">{line}</p>
      </div>
      <span className="subject__state">
        {first ? `${courses.length} cours →` : 'En attente de fiche'}
      </span>
    </>
  )

  if (first) {
    return (
      <Link
        to={`/cours/${first.track}/${first.id}`}
        className="subject subject--open"
        data-revealed="false"
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
      >
        {body}
      </Link>
    )
  }

  return (
    <div className="subject" data-revealed="false" ref={ref}>
      {body}
    </div>
  )
}

export default function Track() {
  const { trackId = '' } = useParams()
  const track = trackById(trackId)
  const headRef = useReveal<HTMLDivElement>()

  if (!track || track.id === 'journey') return <NotFound />

  return (
    <div className="page u-shell">
      <div className="page__head" ref={headRef}>
        <Link to="/" className="crumb">
          ← AERO//LAB
        </Link>
        <p className="page__eyebrow">
          <span>{track.index}</span> · <span>{track.claim}</span>
        </p>
        <h1 className="page__title">{track.name}</h1>
        <p className="page__claim">
          {track.id === 'bia'
            ? "Premier contact avec le monde aéronautique."
            : track.id === 'ppl'
              ? 'Now you fly.'
              : 'From student to professional.'}
        </p>
      </div>

      {track.id === 'bia' && (
        <div className="subjects">
          {BIA_SUBJECTS.map((s, i) => (
            <SubjectRow
              key={s.id}
              idx={i}
              name={s.name}
              line={s.line}
              courses={s.courses}
            />
          ))}
        </div>
      )}

      {track.id === 'ppl' && (
        <>
          <div className="section-head">
            <p className="u-label">Module</p>
            <h2>Flight Lab</h2>
            <p>
              La partie pratique du PPL : cockpit, instruments, commandes,
              procédures, navigation, météo, performances et scénarios de vol.
            </p>
          </div>
          <div className="cards">
            <Link className="card" to="/lab/cockpit">
              <h3>Cockpit</h3>
              <p>Explorer la planche de bord, instrument par instrument.</p>
              <span className="card__state">Ouvrir →</span>
            </Link>
            <Link className="card" to="/lab">
              <h3>Procédures & scénarios</h3>
              <p>Décollage, atterrissage, vent de travers, pannes.</p>
              <span className="card__state">Architecture prête</span>
            </Link>
            <Link className="card" to="/lab">
              <h3>Navigation & performances</h3>
              <p>Route, cap, dérive, temps de vol, masse et centrage.</p>
              <span className="card__state">Architecture prête</span>
            </Link>
          </div>

          <div className="section-head">
            <p className="u-label">Matières</p>
            <h2>Programme théorique</h2>
          </div>
          <Awaiting what="Les matières du PPL seront intégrées à partir des fiches de l'auteur. Aucun découpage n'est affiché tant qu'il n'a pas été fourni : la structure d'accueil est en place et n'attend que le contenu." />
        </>
      )}

      {track.id === 'atpl' && (
        <>
          <div className="section-head">
            <p className="u-label">Module</p>
            <h2>ATPL Progress</h2>
            <p>
              Suivi par matière : score, notions maîtrisées, notions faibles,
              questions ratées, temps d'étude et examens blancs. Le carnet de vol
              alimente ce suivi dès que les matières sont intégrées.
            </p>
          </div>
          <div className="cards">
            <Link className="card" to="/logbook">
              <h3>Ton carnet de vol</h3>
              <p>Progression, notions à revoir, temps d'étude.</p>
              <span className="card__state">Ouvrir →</span>
            </Link>
            <div className="card">
              <h3>Examens blancs</h3>
              <p>Sessions chronométrées, par matière et en configuration réelle.</p>
              <span className="card__state">Architecture prête</span>
            </div>
            <div className="card">
              <h3>Banque de questions</h3>
              <p>Reprise ciblée des questions ratées.</p>
              <span className="card__state">Architecture prête</span>
            </div>
          </div>

          <div className="section-head">
            <p className="u-label">Matières</p>
            <h2>Programme théorique</h2>
          </div>
          <Awaiting what="Les matières de l'ATPL seront intégrées à partir des fiches de l'auteur. Le découpage officiel n'est pas affiché tant qu'il n'a pas été fourni et vérifié." />
        </>
      )}
    </div>
  )
}
