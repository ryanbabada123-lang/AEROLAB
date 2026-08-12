import { Link } from 'react-router-dom'
import Cadre from './Cadre'
import Jauge from '@/components/eleve/Jauge'
import {
  badges,
  maitriseGlobale,
  matieresFaibles,
  progressionParMatiere,
} from '@/lib/bilan'
import { useFlightLog } from '@/lib/progress'

/**
 * MON NIVEAU.
 *
 * Deux mesures qui ne disent pas la même chose, et que la page ne mélange
 * jamais :
 *
 * — L'AVANCEMENT, c'est du parcouru : combien de chapitres sont terminés.
 * — La MAÎTRISE, c'est du mesuré : ce que les QCM montrent réellement.
 *
 * On peut avoir tout lu sans rien maîtriser, et l'inverse. Les afficher côte
 * à côte, distinctement nommés, vaut mieux qu'un score unique qui prétendrait
 * résumer les deux.
 *
 * CE N'EST PAS UNE NOTE ET LA PAGE LE DIT. Aucune de ces valeurs ne prédit un
 * résultat d'examen ; le site n'a pas les épreuves officielles pour le
 * prétendre, et inventer une prédiction serait mentir.
 */
export default function MonNiveau() {
  const log = useFlightLog()
  const matieres = progressionParMatiere(log)
  const globale = maitriseGlobale(log)
  const faibles = matieresFaibles(log)
  const listeBadges = badges(log)
  const obtenus = listeBadges.filter((b) => b.obtenu)

  return (
    <Cadre
      titre="Mon niveau"
      chapeau="Ce que tu as parcouru, et ce que les QCM mesurent."
    >
      <section className="eleve__block">
        <h2>Maîtrise mesurée</h2>
        <Jauge
          part={globale}
          libelle="Toutes matières"
          detail={
            globale === null
              ? 'Aucun QCM tenté : rien ne peut encore être mesuré.'
              : 'Calculée sur ta dernière tentative de chaque QCM.'
          }
          ton="bilan"
        />
        <p className="eleve__note">
          Ce chiffre n’est pas une note et ne prédit pas ton résultat à
          l’examen. Il dit seulement où tu en es sur les questions du site.
        </p>
      </section>

      {faibles.length > 0 && (
        <section className="eleve__block">
          <h2>À travailler en priorité</h2>
          <p className="eleve__note">
            Les matières mesurées sous 70 % de réussite, de la plus fragile à
            la moins fragile.
          </p>
          <ul className="eleve__faibles">
            {faibles.map((m) => (
              <li key={m.id}>
                <span className="eleve__fnom">
                  {m.to ? <Link to={m.to}>{m.nom}</Link> : m.nom}
                </span>
                <span className="eleve__ftaux">
                  {Math.round((m.maitrise ?? 0) * 100)} %
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="eleve__block">
        <h2>Matière par matière</h2>
        <div className="eleve__matieres">
          {matieres.map((m) => (
            <article className="eleve__matiere" key={m.id}>
              <header>
                <h3>{m.to ? <Link to={m.to}>{m.nom}</Link> : m.nom}</h3>
              </header>
              <Jauge
                part={
                  m.avancement.total > 0
                    ? m.avancement.faits / m.avancement.total
                    : null
                }
                libelle="Avancement"
                detail={
                  m.avancement.total > 0
                    ? /* « 1 / 2 chapitres terminé » n'est d'aucun accord :
                         le pluriel du total et le singulier du participe se
                         contredisaient dans la même phrase. La forme « sur »
                         accorde tout sur le nombre de chapitres faits. */
                      `${m.avancement.faits} chapitre${m.avancement.faits > 1 ? 's' : ''} sur ${m.avancement.total} terminé${m.avancement.faits > 1 ? 's' : ''}`
                    : 'Aucun chapitre intégré pour l’instant'
                }
              />
              <Jauge
                part={m.maitrise}
                libelle="Maîtrise"
                detail={
                  m.maitrise === null
                    ? 'Aucun QCM tenté sur cette matière'
                    : 'D’après tes dernières tentatives'
                }
              />
            </article>
          ))}
        </div>
      </section>

      <section className="eleve__block">
        <h2>
          Repères <span className="eleve__compte">{obtenus.length} / {listeBadges.length}</span>
        </h2>
        <p className="eleve__note">
          Des jalons, pas une monnaie : aucun ne se perd, aucun ne se compare à
          celui d’un autre.
        </p>
        <ul className="eleve__badges">
          {listeBadges.map((b) => (
            <li key={b.id} data-obtenu={b.obtenu}>
              <strong>{b.nom}</strong>
              <span>{b.detail}</span>
              {!b.obtenu && b.part > 0 && (
                <i
                  className="eleve__bpart"
                  style={{ width: `${Math.round(b.part * 100)}%` }}
                />
              )}
            </li>
          ))}
        </ul>
      </section>
    </Cadre>
  )
}
