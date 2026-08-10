import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import { SECTIONS, type SectionFeature, type SiteSection } from '@/data/sections'
import { useReveal } from '@/hooks/useReveal'

/**
 * LA DÉCOUVERTE DU SITE — ce que l'on atteint quand l'introduction s'achève.
 *
 * Reprend la maquette fournie par l'auteur du projet : fond de blizzard, cartes
 * en verre dépoli, titre énorme flanqué d'un sous-titre bleu, deux boutons, et
 * une colonne d'atouts à droite. C'est ici que la marque bascule du glyphe de
 * sommet vers l'aile en chevron.
 *
 * Une carte dit toujours son état réel. Une section sans contenu affiche ce
 * qu'elle attend, jamais du texte de remplissage : c'est la règle du projet, et
 * c'est ce qui permet de montrer le site à une école sans rien maquiller.
 */

export default function Discover() {
  const head = useReveal<HTMLDivElement>()

  return (
    <section className="discover" data-nav-tone="dark" aria-labelledby="discover-title">
      {/* Le blizzard : trois couches de neige à des vitesses différentes,
          au-dessus de la plaque de montagne. Purement décoratif. */}
      <div className="discover__weather" aria-hidden="true">
        <span className="discover__snow discover__snow--far" />
        <span className="discover__snow discover__snow--mid" />
        <span className="discover__snow discover__snow--near" />
      </div>

      <div className="discover__inner">
        <header className="discover__head" ref={head}>
          {/* La bascule de marque : le chevron prend la relève du sommet. */}
          <Logo variant="chevron" size={26} className="discover__logo" />
          <h2 id="discover-title" className="u-sr">
            Les sections du site
          </h2>
          <p className="discover__baseline">
            Apprends · Comprends · Progresse · Décolle
          </p>
        </header>

        <div className="discover__grid">
          {SECTIONS.map((s) => (
            <SectionCard key={s.id} section={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------- carte */

function SectionCard({ section }: { section: SiteSection }) {
  const ref = useReveal<HTMLElement>()
  const open = section.state !== 'awaiting'

  return (
    <article className="scard" ref={ref} data-state={section.state}>
      <div className="scard__main">
        <p className="scard__kicker">{section.kicker}</p>
        <h3 className="scard__title">{section.title}</h3>
        <p className="scard__blurb">{section.blurb}</p>

        <div className="scard__actions">
          {open ? (
            <Link className="btn btn--primary" to={section.to}>
              <Icon name="book" />
              Accéder aux cours
            </Link>
          ) : (
            <span className="btn btn--ghost is-disabled" aria-disabled="true">
              <Icon name="book" />
              En attente de contenu
            </span>
          )}

          {section.secondary && open && (
            <Link className="btn btn--ghost" to={section.secondary.to}>
              <Icon name="quiz" />
              {section.secondary.label}
            </Link>
          )}
        </div>

        {/* L'état réel de la section, écrit et non suggéré. */}
        {section.awaiting && (
          <p className="scard__awaiting">
            <span className="scard__dot" aria-hidden="true" />
            {section.awaiting}
          </p>
        )}
      </div>

      <ul className="scard__features">
        {section.features.map((f) => (
          <li key={f.title}>
            <span className="scard__ficon" aria-hidden="true">
              <Icon name={f.icon} />
            </span>
            <span>
              <strong>{f.title}</strong>
              <em>{f.line}</em>
            </span>
          </li>
        ))}
      </ul>
    </article>
  )
}

/* ---------------------------------------------------------- pictogrammes */

/**
 * Pictogrammes tracés à la main plutôt qu'importés : aucune requête réseau,
 * ce qui compte pour une démonstration hors connexion, et un trait cohérent
 * avec le reste du site.
 */
function Icon({ name }: { name: SectionFeature['icon'] | 'book' | 'quiz' }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: 'false' as const,
  }

  switch (name) {
    case 'book':
      return (
        <svg {...common}>
          <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4H10a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4.5A1.5 1.5 0 0 1 3 15.5Z" />
          <path d="M21 5.5A1.5 1.5 0 0 0 19.5 4H14a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h5.5A1.5 1.5 0 0 0 21 15.5Z" />
        </svg>
      )
    case 'quiz':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.4 9.2a2.7 2.7 0 1 1 3.9 2.5c-.8.5-1.3 1-1.3 1.9" />
          <path d="M12 17.2h.01" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 20V10M10 20V5M16 20v-7M22 20H2" />
        </svg>
      )
    case 'target':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2" />
        </svg>
      )
    case 'wing':
      return (
        <svg {...common}>
          <path d="M2 15.5 12 4l3.4 8.3L22 15.5Z" />
          <path d="M12 4v11.5" />
          <path d="M6 19.5h12" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.6 3 2.6 15 0 18-2.6-3-2.6-15 0-18Z" />
        </svg>
      )
  }
}
