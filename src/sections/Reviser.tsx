import { Link } from 'react-router-dom'
import { BIA_SUBJECTS, courseById } from '@/content'

/**
 * LES COURS, SOUS LA PAGE DE BIENVENUE.
 *
 * C'est là qu'on arrive en descendant. Le site tient désormais en une seule
 * page : une image d'accueil, et dessous la liste des matières du BIA, dont
 * chacune ouvre son chapitre.
 *
 * L'identifiant `reviser` est la cible de la descente — c'est le seul lien
 * entre les deux sections, et il est volontairement stable.
 */

export default function Reviser() {
  return (
    <section id="reviser" className="reviser u-shell" aria-labelledby="reviser-titre">
      <div className="reviser__tete">
        <p className="u-label">Brevet d’initiation aéronautique</p>
        <h2 id="reviser-titre">Les chapitres</h2>
      </div>

      <div className="subjects">
        {BIA_SUBJECTS.map((s, i) => {
          const premier = s.courses.map(courseById).find(Boolean)
          const corps = (
            <>
              <span className="subject__idx">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="subject__name">{s.name}</h3>
                <p className="subject__line">{s.line}</p>
              </div>
              <span className="subject__state">
                {premier ? 'Ouvrir →' : 'En attente de fiche'}
              </span>
            </>
          )

          return premier ? (
            <Link
              key={s.id}
              to={`/cours/${premier.track}/${premier.id}`}
              className="subject subject--open"
              data-revealed="true"
            >
              {corps}
            </Link>
          ) : (
            <div key={s.id} className="subject" data-revealed="true">
              {corps}
            </div>
          )
        })}
      </div>
    </section>
  )
}
