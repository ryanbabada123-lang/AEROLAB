import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Rendu de repli discret, pour envelopper une scène 3D isolée. */
  quiet?: boolean
  /**
   * Repli VIDE, pour ce qui vit à l'intérieur d'un canevas three.js : on n'y
   * peut pas insérer de `<div>`, le réconciliateur n'y connaît que des
   * objets de scène.
   */
  silent?: boolean
}
interface State {
  failed: boolean
}

/**
 * Filet de sécurité pour la démo (§51.3) : une scène qui casse ne doit
 * jamais produire un écran blanc ni une erreur visible devant un public.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    if (import.meta.env.DEV) console.error('[AERO//LAB]', error)

    /*
      MÊME MUETTE, UNE PANNE DOIT LAISSER UNE TRACE.

      Le repli discret est fait pour qu'une scène 3D qui casse ne gâche pas
      une démonstration devant un public. Mais en production il effaçait
      aussi l'erreur : la scène disparaissait sans que rien ne le signale,
      et il a fallu instrumenter le rendu pour s'apercevoir qu'elle ne
      s'affichait plus du tout dans le build mono-fichier.

      Elle est donc déposée sur `window.__AEROLAB_ERREURS__`, où un
      mainteneur — ou un test — peut aller la lire, sans que l'utilisateur
      voie quoi que ce soit.
    */
    const w = globalThis as { __AEROLAB_ERREURS__?: unknown[] }
    ;(w.__AEROLAB_ERREURS__ ??= []).push(
      error instanceof Error ? `${error.name}: ${error.message}` : String(error),
    )
  }

  render() {
    if (!this.state.failed) return this.props.children
    if (this.props.silent) return null
    if (this.props.quiet) return <div className="scene-fallback" aria-hidden />

    return (
      <section className="u-shell" style={{ padding: '30vh 0 40vh' }}>
        <p className="u-label">Interruption</p>
        <h1 className="u-display" style={{ fontSize: 'var(--t-d2)' }}>
          Cette section n'a pas pu être affichée.
        </h1>
        <p className="u-measure" style={{ marginTop: 'var(--s-5)', color: 'var(--c-slate)' }}>
          Le reste de la plateforme reste accessible.
        </p>
        <button
          className="btn btn--primary"
          style={{ marginTop: 'var(--s-6)' }}
          onClick={() => window.location.assign('/')}
        >
          Retour à l'accueil
        </button>
      </section>
    )
  }
}
