import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { scrollDriver } from '@/lib/scroll'
import { INTRO } from '@/sections/intro/timeline'
import Logo from '@/components/Logo'
import { NAV } from '@/data/sections'

/**
 * La barre reste courte, comme sur la maquette fournie, et déroule le reste en
 * sous-menus : décision de l'auteur du projet, afin que rien du programme ne
 * disparaisse du site sans que le menu devienne illisible.
 */
const LINKS = NAV

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const navRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  /**
   * L'encre de la barre suit toujours ce qui passe DESSOUS :
   *   — pendant l'intro, la progression de la scène (noir → blanc) ;
   *   — ailleurs, la section qui croise la bande de navigation, repérée
   *     par `data-nav-tone` (la page finale est sombre).
   * Les deux sources écrivent via une seule fonction, donc jamais de
   * clignotement entre elles.
   */
  useEffect(() => {
    const el = navRef.current
    if (!el) return

    let introDark = isHome
    let introActive = isHome
    let sectionDark = false

    const apply = () => {
      const dark = introActive ? introDark : sectionDark
      const next = dark ? 'dark' : 'light'
      if (el.dataset.tone !== next) el.dataset.tone = next
    }

    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-tone="dark"]'),
    )
    const crossing = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) crossing.add(e.target)
          else crossing.delete(e.target)
        }
        sectionDark = crossing.size > 0
        apply()
      },
      // Bande de quelques pixels juste sous la barre.
      { rootMargin: '-70px 0px -100% 0px', threshold: 0 },
    )
    for (const s of darkSections) io.observe(s)

    let unsub: (() => void) | undefined
    if (isHome) {
      // Piloté par la boucle du scrollDriver (donc toujours à jour) plutôt
      // que par un écouteur `scroll` séparé, qui lirait une valeur d'une
      // frame de retard.
      unsub = scrollDriver.subscribe((p) => {
        introActive = p < 0.999
        introDark = p < INTRO.skyTurnsWhite
        apply()

        // Le fond de barre n'apparaît qu'une fois l'intro terminée.
        const sv = introActive ? 'false' : 'true'
        if (el.dataset.solid !== sv) el.dataset.solid = sv

        // La barre s'efface pendant le passage cockpit : rien ne doit
        // voler la vedette à la scène.
        const hide = p > INTRO.cockpitEnter && p < INTRO.cockpitExit
        const hv = hide ? 'true' : 'false'
        if (el.dataset.hidden !== hv) el.dataset.hidden = hv
      })
    } else {
      el.dataset.hidden = 'false'
    }

    apply()
    return () => {
      io.disconnect()
      unsub?.()
    }
  }, [isHome, pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Hors accueil, le fond de barre suit simplement le défilement.
  // (Sur l'accueil, il est piloté par le scrollDriver — voir ci-dessous.)
  useEffect(() => {
    const el = navRef.current
    if (!el || isHome) return
    const onScroll = () => {
      const solid = window.scrollY > 24 ? 'true' : 'false'
      if (el.dataset.solid !== solid) el.dataset.solid = solid
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname, isHome])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <nav
        ref={navRef}
        className="nav"
        data-tone={isHome ? 'dark' : 'light'}
        data-hidden="false"
        data-solid="false"
        aria-label="Navigation principale"
      >
        {/* La marque bascule : glyphe de sommet tant qu'on est dans les scènes
            de montagne de l'introduction, aile en chevron dès que le site est
            découvert. La bascule est un moment, pas un hasard de page. */}
        <Link to="/" className="nav__mark" aria-label="AERO LAB — accueil">
          <Logo variant={isHome ? 'summit' : 'chevron'} size={18} />
        </Link>

        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l.to} className={l.children ? 'has-sub' : undefined}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  isActive ? 'nav__link is-active' : 'nav__link'
                }
              >
                {l.label}
                {l.children && <i className="nav__caret" aria-hidden="true" />}
              </NavLink>

              {l.children && (
                <ul className="nav__sub">
                  {l.children.map((c) => (
                    <li key={c.to}>
                      <Link to={c.to}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          className="nav__burger"
          aria-expanded={open}
          aria-controls="nav-overlay"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="u-sr">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <i data-open={open} />
        </button>
      </nav>

      <div id="nav-overlay" className="nav-overlay" data-open={open} hidden={!open}>
        <ul>
          {LINKS.map((l, i) => (
            <li key={l.to} style={{ '--i': i } as React.CSSProperties}>
              <Link to={l.to}>
                <span className="u-label">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {l.label}
              </Link>
              {/* Sur mobile, un sous-menu au survol n'existe pas : les entrées
                  sont dépliées d'emblée. */}
              {l.children && (
                <ul className="nav-overlay__sub">
                  {l.children.map((c) => (
                    <li key={c.to}>
                      <Link to={c.to}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
