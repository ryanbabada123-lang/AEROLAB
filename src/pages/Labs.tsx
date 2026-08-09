import { Link } from 'react-router-dom'
import { LABS } from '@/data/labs'
import { useReveal } from '@/hooks/useReveal'
import { Awaiting } from '@/components/course/Blocks'

export default function Labs() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <div className="page u-shell">
      <div className="page__head" ref={headRef}>
        <Link to="/" className="crumb">
          ← AERO//LAB
        </Link>
        <p className="page__eyebrow">
          <span>Lab</span>
        </p>
        <h1 className="page__title">Les laboratoires</h1>
        <p className="page__claim">
          Une notion se retient quand on l'a vue bouger. Chaque laboratoire
          isole un mécanisme et le rend manipulable.
        </p>
      </div>

      <div className="cards">
        {LABS.map((l) =>
          l.status === 'open' ? (
            <Link key={l.id} className="card" to={l.to}>
              <h3>{l.name}</h3>
              <p>{l.line}</p>
              <span className="card__state">Ouvrir →</span>
            </Link>
          ) : (
            <div key={l.id} className="card">
              <h3>{l.name}</h3>
              <p>{l.line}</p>
              <span className="card__state">Architecture prête</span>
            </div>
          ),
        )}
      </div>

      <div className="section-head">
        <p className="u-label">Prochaines expériences</p>
        <h2>Ce qui reste à construire</h2>
      </div>

      <Awaiting what="Flight Lab, Navigation Lab, Weather Lab et Think Like a Pilot disposent de leur emplacement dans l'architecture. Ils seront construits à partir des contenus de l'auteur : scénarios, paramètres et références. Aucune de ces expériences n'est ouverte tant qu'elle ne repose pas sur un contenu vérifié." />
    </div>
  )
}
