import { useRef, useState } from 'react'
import Logo from '@/components/Logo'
import TableauDeBord from '@/pages/eleve/TableauDeBord'
import { flightLog, useFlightLog } from '@/lib/progress'
import {
  GOALS,
  applyBundle,
  exportBundle,
  exportFilename,
  isSignedIn,
  parseBundle,
  student,
  useStudent,
} from '@/lib/student'

/**
 * ESPACE ÉLÈVE — LA PAGE D'ACCUEIL DE L'ÉLÈVE.
 *
 * Elle ouvre le profil s'il n'existe pas, puis laisse la place au tableau de
 * bord (`pages/eleve/TableauDeBord`), qui mène aux six sous-pages : QCM,
 * erreurs, favoris, historique, niveau, objectifs.
 *
 * AUCUN COMPTE POUR L'INSTANT, et la page le dit sans détour. Tant que la
 * synchronisation n'est pas branchée, la progression vit dans CE navigateur,
 * et le fichier d'export est le seul moyen de la déplacer. Annoncer un compte
 * qui n'existe pas ferait perdre sa progression à qui changerait d'appareil
 * en s'y fiant.
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
        {!signed && <Notice />}

        {signed ? <TableauDeBord /> : <Onboarding />}

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
      <h2>Où va ta progression</h2>
      <p>
        Il n’y a pas encore de compte sur ce site :{' '}
        <strong>rien de ce que tu saisis ne quitte cet appareil.</strong> Tout
        est gardé par ton navigateur, et rien n’est envoyé nulle part.
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
        Tout ce que tu fais ici est gardé <strong>dans ce navigateur</strong>, et
        nulle part ailleurs. Ce fichier tient le rôle d’un compte : il contient
        ton profil et ton carnet de vol. Tu peux le garder, le mettre sur une
        clé, le rouvrir sur un autre ordinateur, ou l’envoyer à ton instructeur.
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
