import { Link } from 'react-router-dom'
import Cadre from './Cadre'
import { jour, useFlightLog } from '@/lib/progress'
import type { Visite } from '@/lib/progress'

/**
 * HISTORIQUE.
 *
 * Les pages ouvertes, regroupées par jour. Le regroupement n'est pas
 * décoratif : c'est ce qui transforme une liste plate en un relevé de séances
 * de travail, où l'on voit qu'un soir a servi à la météo et un autre à
 * l'aérodynamique.
 *
 * Une référence n'apparaît qu'une fois — la version 2 du carnet remonte
 * l'entrée existante au lieu d'empiler dix lignes identiques quand on
 * revient sur un chapitre.
 */

const AUJ = jour()

function libelleJour(cle: string): string {
  if (cle === AUJ) return 'Aujourd’hui'
  const hier = jour(Date.now() - 86_400_000)
  if (cle === hier) return 'Hier'
  return new Date(cle + 'T12:00:00Z').toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const heure = (t: number) =>
  new Date(t).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

export default function Historique() {
  const log = useFlightLog()

  if (log.historique.length === 0) {
    return (
      <Cadre titre="Historique" chapeau="Les pages que tu as ouvertes.">
        <section className="eleve__block">
          <p className="eleve__empty">
            Rien encore. Chaque chapitre que tu ouvres s’inscrit ici, avec sa
            date — de quoi retrouver ce que tu lisais la dernière fois.
          </p>
          <p className="eleve__lien">
            <Link to="/formation/bia">Voir les chapitres du BIA →</Link>
          </p>
        </section>
      </Cadre>
    )
  }

  /* Groupement par jour, en conservant l'ordre du plus récent au plus ancien. */
  const parJour: { cle: string; visites: Visite[] }[] = []
  for (const v of log.historique) {
    const cle = jour(v.at)
    const dernier = parJour[parJour.length - 1]
    if (dernier && dernier.cle === cle) dernier.visites.push(v)
    else parJour.push({ cle, visites: [v] })
  }

  return (
    <Cadre titre="Historique" chapeau="Les pages que tu as ouvertes.">
      <section className="eleve__block">
        <p className="eleve__note">
          {log.historique.length} page
          {log.historique.length > 1 ? 's' : ''} sur {parJour.length} jour
          {parJour.length > 1 ? 's' : ''}. Seules les deux cents dernières sont
          conservées.
        </p>
      </section>

      {parJour.map((groupe) => (
        <section className="eleve__block" key={groupe.cle}>
          <h2 className="eleve__jour">{libelleJour(groupe.cle)}</h2>
          <ul className="eleve__activite">
            {groupe.visites.map((v) => (
              <li key={v.ref}>
                <Link to={v.to}>{v.titre}</Link>
                <time dateTime={new Date(v.at).toISOString()}>
                  {heure(v.at)}
                </time>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Cadre>
  )
}
