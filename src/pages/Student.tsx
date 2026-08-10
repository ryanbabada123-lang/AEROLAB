import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import { SECTIONS } from '@/data/sections'
import { flightLog, useFlightLog, weakPoints } from '@/lib/progress'
import {
  GOALS,
  applyBundle,
  daysUntil,
  exportBundle,
  exportFilename,
  isSignedIn,
  parseBundle,
  student,
  useStudent,
} from '@/lib/student'

/**
 * ESPACE ÉLÈVE.
 *
 * Il n'y a ni identifiant ni mot de passe, et la page le dit franchement. Le
 * cahier des charges veut un site qui s'ouvre par un double-clic sur
 * `index.html`, sans serveur : personne n'est là pour authentifier quoi que ce
 * soit. Un formulaire de connexion serait donc un décor.
 *
 * Ce qui est offert à la place est réel : un profil gardé dans le navigateur, la
 * progression qui s'y rattache, et un fichier que l'élève emporte. Ce fichier
 * fait ce qu'un compte aurait fait — suivre l'élève d'un poste à l'autre,
 * s'envoyer à un instructeur — sans rien confier à personne.
 */

export default function Student() {
  const profile = useStudent()
  const signed = isSignedIn(profile)

  return (
    <div className="eleve" data-nav-tone="dark">
      <div className="eleve__weather" aria-hidden="true">
        <span className="discover__snow discover__snow--mid" />
        <span className="discover__snow discover__snow--near" />
      </div>

      <div className="eleve__inner">
        <header className="eleve__head">
          <Logo variant="chevron" size={24} />
          <h1>Espace élève</h1>
          <p className="eleve__lede">
            {signed
              ? `Bonjour ${profile.name.trim()}.`
              : 'Ta progression, tes notions à revoir, ton carnet de vol.'}
          </p>
        </header>

        {/* L'avertissement vient AVANT le formulaire : l'élève doit savoir où
            va sa progression avant de commencer à en produire. */}
        <Notice />

        {signed ? <Dashboard /> : <Onboarding />}

        <Portability />

        {signed && (
          <section className="eleve__block eleve__danger">
            <h2>Effacer ce profil</h2>
            <p>
              Le profil et le carnet de vol de ce navigateur seront supprimés. Si
              tu as exporté ton fichier, tu pourras le réimporter ensuite.
            </p>
            <button
              type="button"
              className="btn btn--danger"
              onClick={() => {
                if (
                  window.confirm(
                    'Effacer le profil et toute la progression de ce navigateur ?',
                  )
                ) {
                  student.forget()
                  flightLog.reset()
                }
              }}
            >
              Effacer définitivement
            </button>
          </section>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ avertissement */

function Notice() {
  return (
    <aside className="eleve__notice" aria-label="Comment fonctionne cet espace">
      <h2>Il n’y a pas de compte, et c’est volontaire</h2>
      <p>
        Le site doit pouvoir s’ouvrir d’un double-clic, sans serveur à lancer. Or
        un compte suppose un serveur pour vérifier un mot de passe et conserver
        les données. Il n’y en a pas ici : <strong>rien de ce que tu saisis ne
        quitte cet appareil.</strong>
      </p>
      <ul>
        <li>
          Ta progression est gardée <strong>dans ce navigateur</strong>. Effacer
          les données de navigation l’effacera aussi.
        </li>
        <li>
          Elle ne suit pas d’un appareil à l’autre toute seule : c’est le rôle du
          fichier que tu peux exporter plus bas.
        </li>
        <li>Aucun mot de passe ne protège cet espace sur un poste partagé.</li>
      </ul>
    </aside>
  )
}

/* ------------------------------------------------------------- inscription */

function Onboarding() {
  const [name, setName] = useState('')
  const [goal, setGoal] = useState<string>('bia')
  const [examDate, setExamDate] = useState('')

  return (
    <form
      className="eleve__block"
      onSubmit={(e) => {
        e.preventDefault()
        if (!name.trim()) return
        student.set({
          name: name.trim(),
          goal: goal as never,
          examDate,
        })
      }}
    >
      <h2>Ouvrir mon espace</h2>

      <label className="field">
        <span>Prénom ou pseudonyme</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Comment veux-tu être appelé ?"
          autoComplete="off"
          maxLength={40}
          required
        />
      </label>

      <fieldset className="field field--choices">
        <legend>Ton objectif</legend>
        {GOALS.map((g) => (
          <label key={g.id} className="choice" data-selected={goal === g.id}>
            <input
              type="radio"
              name="goal"
              value={g.id}
              checked={goal === g.id}
              onChange={() => setGoal(g.id)}
            />
            <span>
              <strong>{g.label}</strong>
              <em>{g.line}</em>
            </span>
          </label>
        ))}
      </fieldset>

      <label className="field field--short">
        <span>Date d’examen visée — facultatif</span>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
        />
      </label>

      <button type="submit" className="btn btn--primary" disabled={!name.trim()}>
        Ouvrir mon espace
      </button>
    </form>
  )
}

/* ---------------------------------------------------------------- tableau */

function Dashboard() {
  const profile = useStudent()
  const log = useFlightLog()
  const left = daysUntil(profile.examDate)
  const goal = GOALS.find((g) => g.id === profile.goal)
  const weak = weakPoints(log)

  const hours = Math.floor(log.studyMs / 3_600_000)
  const minutes = Math.round((log.studyMs % 3_600_000) / 60_000)

  return (
    <>
      <section className="eleve__stats" aria-label="Où tu en es">
        <Stat label="Objectif" value={goal?.label ?? '—'} />
        <Stat
          label="Échéance"
          value={
            left === null
              ? 'Aucune date'
              : left > 0
                ? `${left} jour${left > 1 ? 's' : ''}`
                : left === 0
                  ? "C'est aujourd'hui"
                  : 'Date passée'
          }
        />
        <Stat label="Chapitres terminés" value={String(log.completed.length)} />
        <Stat
          label="Temps d'étude"
          value={hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`}
        />
      </section>

      <section className="eleve__block">
        <h2>Ta progression</h2>
        <ul className="eleve__progress">
          {SECTIONS.map((s) => {
            const done = log.completed.includes(s.id)
            return (
              <li key={s.id} data-done={done} data-state={s.state}>
                <span className="eleve__pname">
                  {s.state === 'awaiting' ? s.title : <Link to={s.to}>{s.title}</Link>}
                </span>
                <span className="eleve__pstate">
                  {s.state === 'awaiting'
                    ? 'En attente de contenu'
                    : done
                      ? 'Terminé'
                      : 'À commencer'}
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="eleve__block">
        <h2>Notions à revoir</h2>
        {weak.length === 0 ? (
          <p className="eleve__empty">
            Rien pour l’instant. Les questions que tu rates apparaîtront ici, avec
            le passage du cours qui y répond.
          </p>
        ) : (
          <ul className="eleve__weak">
            {weak.map((a) => (
              <li key={a.quizId}>
                <strong>{a.courseId}</strong>
                <span>
                  {a.correct} / {a.total} — {a.missed.length} question
                  {a.missed.length > 1 ? 's' : ''} à revoir
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="eleve__stat">
      <span className="eleve__slabel">{label}</span>
      <strong className="eleve__svalue">{value}</strong>
    </div>
  )
}

/* ------------------------------------------------------------ portabilité */

function Portability() {
  const profile = useStudent()
  const log = useFlightLog()
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  function download() {
    const bundle = exportBundle(profile, log)
    const blob = new Blob([JSON.stringify(bundle, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = exportFilename(profile)
    a.click()
    // Libéré au tour suivant : révoquer trop tôt annule le téléchargement sur
    // certains navigateurs.
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setMessage({ ok: true, text: 'Fichier exporté. Garde-le en sûreté.' })
  }

  async function pick(file: File) {
    const text = await file.text()
    const result = parseBundle(text)
    if (!result.ok) {
      setMessage({ ok: false, text: result.reason })
      return
    }
    const who = result.profile.name || 'sans nom'
    if (
      !window.confirm(
        `Importer la progression de « ${who} » ? Ce qui est enregistré dans ce navigateur sera remplacé.`,
      )
    ) {
      return
    }
    applyBundle(result)
    setMessage({ ok: true, text: `Progression de « ${who} » importée.` })
  }

  return (
    <section className="eleve__block">
      <h2>Emporter ma progression</h2>
      <p>
        Ce fichier tient le rôle d’un compte : il contient ton profil et ton
        carnet de vol. Tu peux le garder, le mettre sur une clé, le rouvrir sur un
        autre ordinateur, ou l’envoyer à ton instructeur.
      </p>

      <div className="eleve__actions">
        <button type="button" className="btn btn--primary" onClick={download}>
          Exporter mon fichier
        </button>

        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => fileRef.current?.click()}
        >
          Importer un fichier
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="u-sr"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) void pick(f)
            e.target.value = ''
          }}
        />
      </div>

      {message && (
        <p
          className="eleve__message"
          data-ok={message.ok}
          role="status"
          aria-live="polite"
        >
          {message.text}
        </p>
      )}
    </section>
  )
}
