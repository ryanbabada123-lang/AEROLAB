import { Link } from 'react-router-dom'
import Cadre from './Cadre'
import Jauge from '@/components/eleve/Jauge'
import { bilanQcm, progressionParMatiere } from '@/lib/bilan'
import { courseById } from '@/content'
import { useFlightLog } from '@/lib/progress'

/**
 * MES QCM.
 *
 * Le bilan chiffré des tentatives, et le détail par matière. Tant qu'aucun
 * QCM n'a été tenté, la page ne montre pas des zéros : elle explique ce qui
 * s'affichera et pourquoi c'est vide. Un tableau de bord rempli de zéros
 * donne l'impression d'un échec alors qu'il ne s'est simplement rien passé.
 */

const dateComplete = (t: number) =>
  new Date(t).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export default function MesQcm() {
  const log = useFlightLog()
  const b = bilanQcm(log)
  const matieres = progressionParMatiere(log).filter((m) => m.maitrise !== null)

  if (b.tentatives === 0) {
    return (
      <Cadre titre="Mes QCM" chapeau="Tes résultats, tentative par tentative.">
        <section className="eleve__block">
          <p className="eleve__empty">
            Tu n’as encore répondu à aucun QCM. Dès la première tentative, tu
            trouveras ici ton taux de réussite, ton meilleur score, le détail
            par matière et l’historique complet.
          </p>
          <p className="eleve__lien">
            <Link to="/formation/bia">Voir les chapitres du BIA →</Link>
          </p>
        </section>
      </Cadre>
    )
  }

  return (
    <Cadre titre="Mes QCM" chapeau="Tes résultats, tentative par tentative.">
      <section className="eleve__stats">
        <Chiffre libelle="Tentatives" valeur={String(b.tentatives)} />
        <Chiffre libelle="Questions posées" valeur={String(b.questionsPosees)} />
        <Chiffre
          libelle="Taux de réussite"
          valeur={b.taux === null ? '—' : `${Math.round(b.taux * 100)} %`}
        />
        <Chiffre
          libelle="Meilleur score"
          valeur={
            b.meilleurScore === null ? '—' : `${Math.round(b.meilleurScore * 100)} %`
          }
        />
      </section>

      <section className="eleve__block">
        <h2>Bonnes et mauvaises réponses</h2>
        <Jauge
          part={b.taux}
          libelle="Réussite globale"
          detail={`${b.bonnes} bonnes · ${b.mauvaises} mauvaises`}
          ton="bilan"
        />
      </section>

      {matieres.length > 0 && (
        <section className="eleve__block">
          <h2>Par matière</h2>
          {matieres.map((m) => (
            <Jauge
              key={m.id}
              part={m.maitrise}
              libelle={m.nom}
              detail="Mesuré sur ta dernière tentative de chaque QCM"
            />
          ))}
        </section>
      )}

      <section className="eleve__block">
        <h2>Historique</h2>
        <ul className="eleve__tentatives">
          {[...log.attempts]
            .sort((a, b2) => b2.at - a.at)
            .map((a, i) => {
              const cours = courseById(a.courseId)
              const score = a.total ? a.correct / a.total : 0
              return (
                <li key={`${a.quizId}-${a.at}-${i}`} data-reussi={score >= 0.7}>
                  <span className="eleve__tnom">
                    {cours ? cours.title : a.courseId}
                  </span>
                  <span className="eleve__tscore">
                    {a.correct} / {a.total}
                  </span>
                  <time dateTime={new Date(a.at).toISOString()}>
                    {dateComplete(a.at)}
                  </time>
                </li>
              )
            })}
        </ul>
      </section>
    </Cadre>
  )
}

function Chiffre({ libelle, valeur }: { libelle: string; valeur: string }) {
  return (
    <div className="eleve__stat">
      <span className="eleve__slabel">{libelle}</span>
      <strong className="eleve__svalue">{valeur}</strong>
    </div>
  )
}
