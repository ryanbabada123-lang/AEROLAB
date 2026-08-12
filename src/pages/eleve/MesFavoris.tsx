import { Link } from 'react-router-dom'
import Cadre from './Cadre'
import { resoudreRef } from '@/lib/bilan'
import { flightLog, useFlightLog } from '@/lib/progress'

/**
 * MES FAVORIS.
 *
 * Ce que l'élève a mis de côté pour y revenir. Le carnet ne garde que la
 * RÉFÉRENCE, pas le titre : un chapitre renommé garde son favori et prend son
 * nouveau nom. La contrepartie est qu'une référence peut ne plus désigner
 * quoi que ce soit — un contenu retiré. On l'affiche alors comme telle,
 * avec de quoi la retirer, plutôt qu'un lien qui mène à la page d'erreur.
 */
export default function MesFavoris() {
  const log = useFlightLog()

  if (log.favoris.length === 0) {
    return (
      <Cadre titre="Mes favoris" chapeau="Ce que tu as mis de côté.">
        <section className="eleve__block">
          <p className="eleve__empty">
            Aucun favori pour l’instant. Sur un chapitre, l’étoile en haut de
            page le range ici — pratique pour retrouver les quelques passages
            que tu relis avant l’examen.
          </p>
          <p className="eleve__lien">
            <Link to="/formation/bia">Voir les chapitres du BIA →</Link>
          </p>
        </section>
      </Cadre>
    )
  }

  return (
    <Cadre titre="Mes favoris" chapeau="Ce que tu as mis de côté.">
      <section className="eleve__block">
        <h2>
          {log.favoris.length} contenu{log.favoris.length > 1 ? 's' : ''} en
          favori
        </h2>

        <ul className="eleve__favoris">
          {log.favoris.map((ref) => {
            const cible = resoudreRef(ref)
            return (
              <li key={ref} data-perdu={cible === null}>
                {cible ? (
                  <>
                    <Link to={cible.to} className="eleve__fnom">
                      {cible.titre}
                    </Link>
                    <span className="eleve__fgenre">{cible.genre}</span>
                  </>
                ) : (
                  <span className="eleve__fnom">
                    Contenu retiré du site depuis sa mise en favori
                  </span>
                )}

                <button
                  type="button"
                  className="eleve__fretirer"
                  onClick={() => flightLog.basculerFavori(ref)}
                  aria-label={`Retirer ${cible?.titre ?? ref} des favoris`}
                >
                  Retirer
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </Cadre>
  )
}
