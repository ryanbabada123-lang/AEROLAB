import { Link } from 'react-router-dom'
import Bienvenue from '@/sections/Bienvenue'
import Axes from '@/sections/Axes'
import Final from '@/sections/Final'
import Discover from '@/sections/Discover'
import { useReveal } from '@/hooks/useReveal'
import { LABS } from '@/data/labs'

function LabTeaser() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="u-shell" aria-labelledby="labs-title">
      <div className="section-head" ref={ref}>
        <p className="u-label">Les laboratoires</p>
        <h2 id="labs-title">Comprendre en manipulant</h2>
        <p>
          Une notion se retient quand on l’a vue bouger. Chaque laboratoire
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
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Bienvenue />
      <Axes />
      <LabTeaser />
      {/* Le site se découvre : maquette blizzard, bascule de la marque. */}
      <Discover />
      <Final />
    </>
  )
}
