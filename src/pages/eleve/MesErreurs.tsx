import { Link } from 'react-router-dom'
import Cadre from './Cadre'
import { erreurs, erreursOuvertes, libelleQuestion } from '@/lib/bilan'
import type { Erreur } from '@/lib/bilan'
import { QUIZZES } from '@/content/quizzes'
import { courseById } from '@/content'
import { useFlightLog } from '@/lib/progress'

/**
 * MES ERREURS.
 *
 * La page la plus utile de l'espace, et la plus facile à rater : une liste
 * d'échecs sans explication ne sert qu'à décourager. Chaque question ratée
 * est donc rappelée AVEC son énoncé, la bonne réponse, et le « pourquoi »
 * écrit dans le QCM — l'élève n'a pas à retourner chercher.
 *
 * DEUX LISTES, ET LA DISTINCTION COMPTE.
 * — « À revoir » : les questions encore ratées à la dernière tentative.
 * — « Corrigées » : celles ratées un jour, réussies depuis. Elles restent
 *   affichées, plus discrètement, parce qu'une notion qui a résisté trois
 *   fois mérite d'être revue même une fois réussie.
 */

const dateCourte = (t: number) =>
  new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })

export default function MesErreurs() {
  const log = useFlightLog()
  const toutes = erreurs(log)
  const ouvertes = erreursOuvertes(log)
  const ouvertesIds = new Set(ouvertes.map((e) => e.questionId))
  const corrigees = toutes.filter((e) => !ouvertesIds.has(e.questionId))

  if (toutes.length === 0) {
    return (
      <Cadre
        titre="Mes erreurs"
        chapeau="Les questions qui résistent, avec leur explication."
      >
        <section className="eleve__block">
          <p className="eleve__empty">
            {log.attempts.length === 0
              ? 'Tu n’as encore fait aucun QCM. Les questions que tu rateras apparaîtront ici, avec la bonne réponse et le raisonnement qui la justifie.'
              : 'Aucune erreur enregistrée. Tu as répondu juste à toutes les questions posées jusqu’ici.'}
          </p>
          <p className="eleve__lien">
            <Link to="/formation/bia">Voir les chapitres du BIA →</Link>
          </p>
        </section>
      </Cadre>
    )
  }

  return (
    <Cadre
      titre="Mes erreurs"
      chapeau="Les questions qui résistent, avec leur explication."
    >
      {ouvertes.length > 0 && (
        <section className="eleve__block">
          <h2>
            À revoir <span className="eleve__compte">{ouvertes.length}</span>
          </h2>
          <p className="eleve__note">
            Encore ratées lors de ta dernière tentative.
          </p>
          <ul className="eleve__erreurs">
            {ouvertes.map((e) => (
              <Fiche key={e.questionId} erreur={e} ouverte />
            ))}
          </ul>
        </section>
      )}

      {corrigees.length > 0 && (
        <section className="eleve__block">
          <h2>
            Corrigées depuis{' '}
            <span className="eleve__compte">{corrigees.length}</span>
          </h2>
          <p className="eleve__note">
            Ratées au moins une fois, réussies à ta dernière tentative. Gardées
            ici parce qu’une notion qui a résisté mérite un second regard.
          </p>
          <ul className="eleve__erreurs">
            {corrigees.map((e) => (
              <Fiche key={e.questionId} erreur={e} />
            ))}
          </ul>
        </section>
      )}
    </Cadre>
  )
}

function Fiche({ erreur, ouverte = false }: { erreur: Erreur; ouverte?: boolean }) {
  const quiz = QUIZZES[erreur.quizId]
  const question = quiz?.questions.find((q) => q.id === erreur.questionId)
  const cours = courseById(erreur.courseId)
  const enonce = libelleQuestion(erreur.quizId, erreur.questionId)

  return (
    <li className="eleve__erreur" data-ouverte={ouverte}>
      <p className="eleve__equestion">
        {/* Le contenu peut avoir changé depuis la tentative : on ne prétend
            pas connaître un énoncé qui n'existe plus. */}
        {enonce ?? 'Question retirée du site depuis cette tentative.'}
      </p>

      {question && (
        <>
          <p className="eleve__ereponse">
            <span className="u-label">Bonne réponse</span>
            <strong>{question.options[question.correct]}</strong>
          </p>
          <p className="eleve__epourquoi">{question.why}</p>
        </>
      )}

      <p className="eleve__emeta">
        {cours && (
          <Link to={`/cours/${cours.track}/${cours.id}`}>{cours.title}</Link>
        )}
        <span>
          {erreur.fois === 1
            ? 'Ratée une fois'
            : `Ratée ${erreur.fois} fois`}
          {' · '}
          {dateCourte(erreur.derniereFois)}
        </span>
      </p>
    </li>
  )
}
