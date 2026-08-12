import { Link } from 'react-router-dom'
import Jauge from '@/components/eleve/Jauge'
import {
  bilanQcm,
  erreursOuvertes,
  maitriseGlobale,
  progressionFiliere,
  progressionGlobale,
  reprise,
  serie,
} from '@/lib/bilan'
import { useFlightLog } from '@/lib/progress'
import { GOALS, daysUntil, useStudent } from '@/lib/student'

/**
 * TABLEAU DE BORD DE L'ÉLÈVE.
 *
 * Ce que l'on voit en arrivant : où j'en suis, et quoi faire maintenant.
 * Dans cet ordre — l'action d'abord, les chiffres ensuite.
 *
 * TOUT EST DÉRIVÉ DU CARNET, rien n'est stocké. Les filières sans contenu
 * affichent leur avancement réel, soit zéro sur zéro, et le disent ainsi
 * plutôt que d'afficher une barre vide qui laisserait croire à un retard.
 */

const dateCourte = (t: number) =>
  new Date(t).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })

export default function TableauDeBord() {
  const log = useFlightLog()
  const profil = useStudent()

  const globale = progressionGlobale(log)
  const bia = progressionFiliere(log, 'bia')
  const qcm = bilanQcm(log)
  /*
    LES DEUX CHIFFRES NE SONT PAS LE MÊME, et la tuile doit montrer celui que
    la page « Mon niveau » montrera. `bilanQcm.taux` est le taux sur TOUTES les
    tentatives ; la maîtrise ne retient que la DERNIÈRE de chaque QCM. La tuile
    affichait le premier sous le libellé « maîtrise estimée » : 67 % ici, 83 %
    une fois la page ouverte, pour la même notion.
  */
  const maitrise = maitriseGlobale(log)
  const aRevoir = erreursOuvertes(log).length
  const s = serie(log)
  const suite = reprise(log)
  const objectif = GOALS.find((g) => g.id === profil.goal)
  const reste = daysUntil(profil.examDate)

  const heures = Math.floor(log.studyMs / 3_600_000)
  const minutes = Math.round((log.studyMs % 3_600_000) / 60_000)

  return (
    <>
      {/* CE QUE L'ÉLÈVE VIENT FAIRE, avant tout chiffre. */}
      {suite && (
        <section className="eleve__reprise">
          <p className="u-label">{suite.raison}</p>
          <h2>{suite.titre}</h2>
          <Link to={suite.to} className="btn btn--primary">
            Continuer mon apprentissage
          </Link>
        </section>
      )}

      <section className="eleve__stats" aria-label="Où j’en suis">
        <Chiffre libelle="Objectif" valeur={objectif?.label ?? '—'} />
        <Chiffre
          libelle="Échéance"
          valeur={
            reste === null
              ? 'Aucune date'
              : reste > 0
                ? `${reste} jour${reste > 1 ? 's' : ''}`
                : reste === 0
                  ? 'Aujourd’hui'
                  : 'Date passée'
          }
        />
        <Chiffre libelle="Chapitres terminés" valeur={String(globale.faits)} />
        <Chiffre
          libelle="Temps d’étude"
          valeur={heures > 0 ? `${heures} h ${minutes} min` : `${minutes} min`}
        />
      </section>

      <section className="eleve__block">
        <h2>Ma progression</h2>

        <Jauge
          part={globale.part}
          libelle="Toutes formations"
          detail={`${globale.faits} / ${globale.total} chapitres terminés`}
          ton="bilan"
        />

        <div className="eleve__filieres">
          <Jauge
            part={bia.part}
            libelle="BIA"
            detail={`${bia.faits} / ${bia.total} chapitres`}
          />
          <Jauge
            part={null}
            libelle="PPL théorique"
            detail="Les cours ne sont pas encore intégrés"
          />
          <Jauge
            part={null}
            libelle="PPL pratique"
            detail="Les contenus ne sont pas encore intégrés"
          />
        </div>

        <p className="eleve__lien">
          <Link to="/espace-eleve/niveau">Voir le détail par matière →</Link>
        </p>
      </section>

      {/* La régularité, jamais présentée comme une contrainte. */}
      <section className="eleve__block eleve__serie">
        <h2>Régularité</h2>
        {s.record === 0 ? (
          <p className="eleve__empty">
            Rien encore. Chaque jour où tu ouvres un cours ou fais un QCM compte.
          </p>
        ) : (
          <p className="eleve__seriep">
            <strong>
              {s.encours > 0
                ? `${s.encours} jour${s.encours > 1 ? 's' : ''} d’affilée`
                : 'Série interrompue'}
            </strong>
            <span>
              Ton record est de {s.record} jour{s.record > 1 ? 's' : ''}.
              {s.aujourdhui
                ? ' Tu as déjà travaillé aujourd’hui.'
                : ' Une seule page suffit à la relancer.'}
            </span>
          </p>
        )}
      </section>

      <section className="eleve__block">
        <h2>Mon espace</h2>
        <div className="eleve__cartes">
          <Carte
            to="/espace-eleve/qcm"
            titre="Mes QCM"
            valeur={qcm.tentatives === 0 ? '—' : String(qcm.tentatives)}
            ligne={
              qcm.taux === null
                ? 'Aucun QCM tenté'
                : `${Math.round(qcm.taux * 100)} % de réussite`
            }
          />
          <Carte
            to="/espace-eleve/erreurs"
            titre="Mes erreurs"
            valeur={String(aRevoir)}
            ligne="Questions à revoir"
          />
          <Carte
            to="/espace-eleve/favoris"
            titre="Mes favoris"
            valeur={String(log.favoris.length)}
            ligne="Contenus mis de côté"
          />
          <Carte
            to="/espace-eleve/historique"
            titre="Historique"
            valeur={String(log.historique.length)}
            ligne="Pages consultées"
          />
          <Carte
            to="/espace-eleve/niveau"
            titre="Mon niveau"
            valeur={maitrise === null ? '—' : `${Math.round(maitrise * 100)} %`}
            ligne="Maîtrise estimée"
          />
          <Carte
            to="/espace-eleve/objectifs"
            titre="Mes objectifs"
            valeur={String(log.objectifs.length)}
            ligne="En cours"
          />
        </div>
      </section>

      {log.historique.length > 0 && (
        <section className="eleve__block">
          <h2>Activité récente</h2>
          <ul className="eleve__activite">
            {log.historique.slice(0, 5).map((h) => (
              <li key={h.ref}>
                <Link to={h.to}>{h.titre}</Link>
                <time dateTime={new Date(h.at).toISOString()}>
                  {dateCourte(h.at)}
                </time>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
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

function Carte({
  to,
  titre,
  valeur,
  ligne,
}: {
  to: string
  titre: string
  valeur: string
  ligne: string
}) {
  return (
    <Link to={to} className="eleve__carte">
      <span className="eleve__cvaleur">{valeur}</span>
      <strong className="eleve__ctitre">{titre}</strong>
      <span className="eleve__cligne">{ligne}</span>
    </Link>
  )
}
