import { Link } from 'react-router-dom'
import { useReveal } from '@/hooks/useReveal'

/**
 * CONCLUSION (§43).
 *
 * Retour au noir. Les phrases se révèlent une à une au scroll — c'est le
 * seul endroit du site où l'on ralentit délibérément la lecture.
 */

const LINES = [
  'Tu sauras comment un avion vole.',
  'Tu sauras lire ses instruments.',
  'Tu sauras préparer un vol.',
  'Tu comprendras le ciel.',
]

function Line({ text, i }: { text: string; i: number }) {
  const ref = useReveal<HTMLParagraphElement>({ threshold: 0.9, stagger: i * 60 })
  return (
    <p className="final__line" ref={ref} data-revealed="false">
      {text}
    </p>
  )
}

export default function Final() {
  const heroRef = useReveal<HTMLHeadingElement>({ threshold: 0.6 })

  return (
    <section className="final" aria-labelledby="final-title" data-nav-tone="dark">
      <div className="u-shell">
        <div className="final__lines">
          {LINES.map((l, i) => (
            <Line key={l} text={l} i={i} />
          ))}
        </div>

        <h2 className="final__hero" id="final-title" ref={heroRef} data-revealed="false">
          Maintenant,
          <br />
          il faut voler.
        </h2>

        <div className="final__cta">
          <Link className="btn btn--onDark" to="/formation/bia">
            Start your journey
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <Link className="btn btn--onDark" to="/lab/cockpit">
            Entrer dans le cockpit
          </Link>
          <p className="final__note">Your first flight starts here.</p>
        </div>
      </div>
    </section>
  )
}
