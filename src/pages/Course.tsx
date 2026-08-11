import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { courseById } from '@/content'
import { trackById } from '@/data/tracks'
import BlockRenderer from '@/components/course/Blocks'
import { useReadingProgress } from '@/components/course/useReadingProgress'
import { flightLog, useFlightLog } from '@/lib/progress'
import NotFound from './NotFound'

const STATUS_LABEL: Record<string, string> = {
  ready: 'Contenu définitif',
  demo: 'Démonstration — texte à remplacer par la fiche de l’auteur',
  'awaiting-content': 'En attente de contenu',
}

export default function Course() {
  const { courseId = '' } = useParams()
  const course = courseById(courseId)
  const [active, setActive] = useState<string>('')
  const startedAt = useRef(Date.now())
  const article = useRef<HTMLElement>(null)
  const read = useReadingProgress(article)
  const log = useFlightLog()

  // Temps d'étude (§24). Comptabilisé au départ de la page — mais aussi si
  // l'onglet est masqué ou fermé, sinon une session entière se perd.
  useEffect(() => {
    let last = Date.now()
    startedAt.current = last

    const flush = () => {
      const now = Date.now()
      flightLog.addStudyTime(now - last)
      last = now
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flush()
      else last = Date.now()
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', flush)
    return () => {
      flush()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', flush)
    }
  }, [courseId])

  // Sommaire actif — un seul observer pour toutes les sections.
  useEffect(() => {
    if (!course) return
    const nodes = course.sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => !!n)

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )
    for (const n of nodes) io.observe(n)
    return () => io.disconnect()
  }, [course])

  useEffect(() => {
    if (course && active) flightLog.bookmark(course.id, active)
  }, [course, active])

  if (!course) return <NotFound />

  const track = trackById(course.track)
  const isDone = log.completed.includes(course.id)

  return (
    <article className="page u-shell" ref={article}>
      {/* Progression de lecture — sur 430 pages, savoir où l'on en est
          n'est pas un ornement. */}
      <div className="cx-progress" aria-hidden="true">
        <div className="cx-progress__bar" style={{ transform: `scaleX(${read})` }} />
      </div>

      <div className="page__head">
        <Link to={track ? track.to : '/'} className="crumb">
          ← {track?.name ?? 'Formation'}
        </Link>
        <p className="page__eyebrow">
          <span>{course.subject}</span>
          {course.minutes && <span>· {course.minutes} min</span>}
        </p>
        <h1 className="page__title">{course.title}</h1>
        <p className="page__claim">{course.claim}</p>

        {course.status !== 'ready' && (
          <p className="awaiting__tag" style={{ marginTop: 'var(--s-2)' }}>
            ● {STATUS_LABEL[course.status]}
          </p>
        )}

        {course.origin && (
          <div className="cx-origin">
            <p>
              Ce cours est la reprise <strong>mot pour mot</strong> du document de{' '}
              <strong>{course.origin.author}</strong>, édition {course.origin.edition},{' '}
              {course.origin.pages} pages. Les schémas sont redessinés en SVG.
              {course.origin.verifyId && (
                <>
                  {' '}
                  <Link to={`/verification/${course.origin.verifyId}`}>
                    Comparer chaque schéma à son original ↗
                  </Link>
                </>
              )}
            </p>
          </div>
        )}
      </div>

      <div className="course">
        <nav className="toc" aria-label="Sommaire du cours">
          <p className="toc__title">Sommaire</p>
          {course.sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </a>
          ))}
        </nav>

        <div className="course__body">
          {course.sections.map((s) => (
            <section key={s.id} id={s.id} className="course__section">
              <h2>{s.title}</h2>
              {s.blocks.map((b, i) => (
                <BlockRenderer key={i} block={b} courseId={course.id} />
              ))}
            </section>
          ))}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--s-4)',
              alignItems: 'center',
            }}
          >
            <button
              className={isDone ? 'btn btn--ghost' : 'btn btn--primary'}
              onClick={() =>
                isDone
                  ? flightLog.uncompleteCourse(course.id)
                  : flightLog.completeCourse(course.id)
              }
            >
              {isDone ? 'Marquer comme à revoir' : 'Marquer comme terminé'}
            </button>
            <Link className="btn btn--ghost" to="/logbook">
              Voir mon carnet de vol
            </Link>
          </div>

          <section className="sources" aria-labelledby="sources-title">
            <h2 id="sources-title">Sources & références</h2>
            <ul>
              {course.sources.map((s) => (
                <li key={s.label}>
                  <span className="sources__kind">{s.kind}</span>
                  <span className="sources__label">
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noreferrer noopener">
                        {s.label} ↗
                      </a>
                    ) : (
                      s.label
                    )}
                  </span>
                  {s.detail && <span className="sources__detail">{s.detail}</span>}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
