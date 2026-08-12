import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, Link } from 'react-router-dom'
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

    let sectionDark = false

    const apply = () => {
      const next = sectionDark ? 'dark' : 'light'
      if (el.dataset.tone !== next) el.dataset.tone = next
    }

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

    /*
     * Les zones sombres ne sont PAS toutes présentes quand cet effet s'exécute.
     * Les pages sont chargées en différé : au changement de route, la barre se
     * réaffiche avant que la page arrive, si bien qu'un simple relevé à
     * l'exécution ne trouve rien et laisse une barre blanche sur une page
     * sombre. C'est le cas de l'espace élève.
     *
     * On relève donc à l'exécution ET à chaque mutation du contenu, en tenant
     * la liste de ce qui est déjà observé pour ne pas doubler les entrées.
     */
    const observed = new WeakSet<Element>()
    const scan = () => {
      const found = document.querySelectorAll<HTMLElement>('[data-nav-tone="dark"]')
      let added = false
      for (const s of found) {
        if (observed.has(s)) continue
        observed.add(s)
        io.observe(s)
        added = true
      }
      if (added) apply()
    }
    scan()

    const main = document.getElementById('main') ?? document.body
    const mo = new MutationObserver(scan)
    mo.observe(main, { childList: true, subtree: true })

    /*
      La barre ne dépend plus que des zones sombres traversées. Elle était
      pilotée en plus par la boucle de l'introduction à défilement, qui la
      faisait disparaître pendant le passage cockpit et changeait son fond
      selon la progression. L'introduction a été retirée : il ne reste que
      la règle générale, valable sur toutes les pages.
    */
    el.dataset.hidden = 'false'

    apply()
    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Le fond de barre suit le défilement, sur toutes les pages.
  useEffect(() => {
    const el = navRef.current
    if (!el) return
    const onScroll = () => {
      const solid = window.scrollY > 24 ? 'true' : 'false'
      if (el.dataset.solid !== solid) el.dataset.solid = solid
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

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
        /* Menu ouvert : la barre passe AU-DESSUS du calque, sinon le bouton
           qui referme se retrouve dessous et le menu devient un piège. */
        data-menu={open ? 'open' : 'closed'}
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

        {/* Espace élève : bouton en haut à droite, comme sur la maquette. Il
            mène à un profil local — il n'y a pas de compte, et la page l'écrit
            franchement, faute de serveur pour authentifier quoi que ce soit. */}
        <Link to="/espace-eleve" className="nav__cta">
          Espace élève
          <i className="nav__arrow" aria-hidden="true" />
        </Link>

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
