import { Link } from 'react-router-dom'
import { flightLog, useFlightLog, weakPoints } from '@/lib/progress'
import { BIA_SUBJECTS, COURSES, courseById } from '@/content'
import { quizById } from '@/content/quizzes'
import { TRACKS } from '@/data/tracks'
import { useReveal } from '@/hooks/useReveal'

/**
 * FLIGHT LOG (§24 / §42).
 *
 * Un carnet, pas un tableau de bord de jeu. On y lit des faits : ce qui a
 * été lu, manipulé, tenté, et ce qui reste à revoir. Les pourcentages sont
 * calculés sur le contenu RÉELLEMENT publié — ils ne gonflent pas à vide.
 */

function Bar({ name, done, total }: { name: string; done: number; total: number }) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0
  return (
    <div className="bar-row">
      <span className="bar-row__name">{name}</span>
      <span className="bar-row__track">
        <span
          className="bar-row__fill"
          style={{ transform: `scaleX(${total > 0 ? done / total : 0})` }}
        />
      </span>
      <span className="bar-row__pct">{total > 0 ? `${pct}%` : '—'}</span>
    </div>
  )
}

export default function Logbook() {
  const log = useFlightLog()
  const headRef = useReveal<HTMLDivElement>()

  const totalByTrack = (trackId: string) =>
    COURSES.filter((c) => c.track === trackId).length
  const doneByTrack = (trackId: string) =>
    log.completed.filter((id) => courseById(id)?.track === trackId).length

  const weak = weakPoints(log)
  const hours = Math.floor(log.studyMs / 3_600_000)
  const minutes = Math.floor((log.studyMs % 3_600_000) / 60_000)

  const attempts = log.attempts.length
  const bestRatio = log.attempts.length
    ? Math.max(...log.attempts.map((a) => a.correct / a.total))
    : 0

  return (
    <div className="page u-shell">
      <div className="page__head" ref={headRef}>
        <Link to="/" className="crumb">
          ← AERO//LAB
        </Link>
        <p className="page__eyebrow">
          <span>Progression</span>
        </p>
        <h1 className="page__title">Your flight log</h1>
        <p className="page__claim">
          Ce que tu as étudié, manipulé et compris — et ce qui demande à être
          repris.
        </p>
      </div>

      <div className="log-grid">
        <div className="log-stat">
          <b>{log.completed.length}</b>
          <span>Cours terminés</span>
        </div>
        <div className="log-stat">
          <b>{log.labs.length}</b>
          <span>Simulations manipulées</span>
        </div>
        <div className="log-stat">
          <b>{attempts}</b>
          <span>Quiz tentés</span>
        </div>
        <div className="log-stat">
          <b>
            {hours}
            <span style={{ fontSize: '0.4em', letterSpacing: 0 }}>h</span> {minutes}
            <span style={{ fontSize: '0.4em', letterSpacing: 0 }}>min</span>
          </b>
          <span>Temps d'étude</span>
        </div>
        <div className="log-stat">
          <b>{attempts ? `${Math.round(bestRatio * 100)}%` : '—'}</b>
          <span>Meilleur score</span>
        </div>
      </div>

      <div className="section-head">
        <p className="u-label">Par parcours</p>
        <h2>Progression</h2>
        <p>
          Calculée sur les cours effectivement publiés. Les parcours dont les
          fiches ne sont pas encore intégrées affichent « — » plutôt qu'un zéro
          trompeur.
        </p>
      </div>

      <div className="bars">
        {TRACKS.filter((t) => t.id !== 'journey').map((t) => (
          <Bar
            key={t.id}
            name={t.name}
            done={doneByTrack(t.id)}
            total={totalByTrack(t.id)}
          />
        ))}
      </div>

      <div className="section-head">
        <p className="u-label">Compétences</p>
        <h2>Par matière</h2>
      </div>

      <div className="bars">
        {BIA_SUBJECTS.map((s) => {
          const total = s.courses.length
          const done = s.courses.filter((c) => log.completed.includes(c)).length
          return <Bar key={s.id} name={s.name} done={done} total={total} />
        })}
      </div>

      <div className="section-head">
        <p className="u-label">À revoir</p>
        <h2>Notions faibles</h2>
      </div>

      {weak.length === 0 ? (
        <p className="b-text" style={{ marginTop: 'var(--s-5)' }}>
          Rien à revoir pour l'instant. Les questions ratées apparaîtront ici,
          avec le cours qui les explique.
        </p>
      ) : (
        <div className="bars">
          {weak.map((a) => {
            const quiz = quizById(a.quizId)
            const course = courseById(a.courseId)
            return (
              <div key={a.quizId} className="subject" data-revealed="true">
                <span className="subject__idx">
                  {a.correct}/{a.total}
                </span>
                <div>
                  <h3 className="subject__name">{quiz?.title ?? a.quizId}</h3>
                  <ul className="quiz__missed" style={{ marginTop: 'var(--s-2)' }}>
                    {a.missed.map((mid) => {
                      const q = quiz?.questions.find((x) => x.id === mid)
                      return <li key={mid}>{q?.prompt ?? mid}</li>
                    })}
                  </ul>
                </div>
                {course && (
                  <Link
                    className="subject__state"
                    to={`/cours/${course.track}/${course.id}`}
                    style={{ color: 'var(--c-electric)' }}
                  >
                    Revoir le cours →
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      )}

      <div style={{ marginTop: 'clamp(48px, 7vh, 88px)' }}>
        <button
          className="btn btn--ghost"
          onClick={() => {
            if (confirm('Effacer toute la progression enregistrée sur cet appareil ?'))
              flightLog.reset()
          }}
        >
          Réinitialiser le carnet
        </button>
        <p
          className="sim__note"
          style={{ border: 0, paddingInline: 0, marginTop: 'var(--s-4)' }}
        >
          La progression est enregistrée localement, sur cet appareil et dans ce
          navigateur. Aucune donnée n'est transmise.
        </p>
      </div>
    </div>
  )
}
