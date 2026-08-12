import { useState } from 'react'
import Cadre from './Cadre'
import Jauge from '@/components/eleve/Jauge'
import { avancementObjectif } from '@/lib/bilan'
import { BIA_SUBJECTS } from '@/content'
import { flightLog, useFlightLog } from '@/lib/progress'
import type { Objectif } from '@/lib/progress'

/**
 * MES OBJECTIFS.
 *
 * L'élève fixe lui-même ce qu'il vise ; le site se contente de COMPTER. Rien
 * n'est imposé, rien n'expire tout seul, et un objectif dépassé le reste —
 * il ne se transforme pas en reproche.
 *
 * L'avancement n'est jamais stocké : il est recalculé depuis le carnet à
 * chaque affichage (`avancementObjectif`). Un objectif créé après coup se
 * trouve donc déjà partiellement rempli par le travail déjà fait, ce qui est
 * la seule lecture honnête.
 */

const MESURES: { id: Objectif['mesure']; label: string; unite: string }[] = [
  { id: 'cours', label: 'Terminer des chapitres', unite: 'chapitres' },
  { id: 'qcm', label: 'Répondre à des questions', unite: 'questions' },
  { id: 'jours', label: 'Travailler un nombre de jours', unite: 'jours' },
  { id: 'matiere', label: 'Terminer une matière', unite: 'chapitres' },
]

const unite = (m: Objectif['mesure']) =>
  MESURES.find((x) => x.id === m)?.unite ?? ''

const dateCourte = (t: number) =>
  new Date(t).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export default function Objectifs() {
  const log = useFlightLog()

  return (
    <Cadre
      titre="Mes objectifs"
      chapeau="Ce que tu te fixes. Le site compte, il ne juge pas."
    >
      {log.objectifs.length === 0 ? (
        <section className="eleve__block">
          <p className="eleve__empty">
            Aucun objectif pour l’instant. Un objectif n’est rien d’autre qu’un
            compteur que tu choisis : « terminer six chapitres », « quinze jours
            de révision ». Il se remplit tout seul à mesure que tu travailles.
          </p>
        </section>
      ) : (
        <section className="eleve__block">
          <h2>En cours</h2>
          <ul className="eleve__objectifs">
            {log.objectifs.map((o) => {
              const a = avancementObjectif(log, o)
              const fini = a.valeur >= o.cible
              return (
                <li key={o.id} data-atteint={fini}>
                  <div className="eleve__otete">
                    <strong>{o.intitule}</strong>
                    <button
                      type="button"
                      className="eleve__fretirer"
                      onClick={() => flightLog.retirerObjectif(o.id)}
                      aria-label={`Retirer l’objectif ${o.intitule}`}
                    >
                      Retirer
                    </button>
                  </div>

                  <Jauge
                    part={a.part}
                    libelle={fini ? 'Atteint' : 'Avancement'}
                    detail={`${a.valeur} / ${o.cible} ${unite(o.mesure)}`}
                    ton={fini ? 'bilan' : 'neutre'}
                  />

                  {o.echeance && (
                    <p className="eleve__ometa">
                      Échéance : {dateCourte(o.echeance)}
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      <Formulaire />
    </Cadre>
  )
}

/* ------------------------------------------------------------ création */

function Formulaire() {
  const [mesure, setMesure] = useState<Objectif['mesure']>('cours')
  const [cible, setCible] = useState('5')
  const [sujet, setSujet] = useState(BIA_SUBJECTS[0]?.id ?? '')
  const [echeance, setEcheance] = useState('')

  /*
    L'intitulé est COMPOSÉ, pas saisi. Une phrase libre finirait par décrire
    autre chose que ce que le compteur mesure — « réviser sérieusement » ne se
    compte pas — et l'objectif deviendrait décoratif.
  */
  const n = Math.max(1, Number(cible) || 1)
  const nomSujet = BIA_SUBJECTS.find((s) => s.id === sujet)?.name ?? ''
  const intitule =
    mesure === 'matiere'
      ? `Terminer ${n} chapitre${n > 1 ? 's' : ''} de ${nomSujet}`
      : mesure === 'cours'
        ? `Terminer ${n} chapitre${n > 1 ? 's' : ''}`
        : mesure === 'qcm'
          ? `Répondre à ${n} question${n > 1 ? 's' : ''}`
          : `Travailler ${n} jour${n > 1 ? 's' : ''}`

  return (
    <form
      className="eleve__block"
      onSubmit={(e) => {
        e.preventDefault()
        flightLog.ajouterObjectif({
          intitule,
          mesure,
          cible: n,
          sujet: mesure === 'matiere' ? sujet : undefined,
          echeance: echeance ? Date.parse(`${echeance}T00:00:00`) : undefined,
        })
        setEcheance('')
      }}
    >
      <h2>Ajouter un objectif</h2>

      <label className="field">
        <span>Ce que je veux faire</span>
        <select
          value={mesure}
          onChange={(e) => setMesure(e.target.value as Objectif['mesure'])}
        >
          {MESURES.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
      </label>

      {mesure === 'matiere' && (
        <label className="field">
          <span>Quelle matière</span>
          <select value={sujet} onChange={(e) => setSujet(e.target.value)}>
            {BIA_SUBJECTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="field field--short">
        <span>Combien de {unite(mesure)}</span>
        <input
          type="number"
          min={1}
          max={999}
          value={cible}
          onChange={(e) => setCible(e.target.value)}
          inputMode="numeric"
        />
      </label>

      <label className="field field--short">
        <span>Échéance — facultatif</span>
        <input
          type="date"
          value={echeance}
          onChange={(e) => setEcheance(e.target.value)}
        />
      </label>

      <p className="eleve__apercu">
        <span className="u-label">Sera enregistré comme</span>
        <strong>{intitule}</strong>
      </p>

      <button type="submit" className="btn btn--primary">
        Ajouter cet objectif
      </button>
    </form>
  )
}
