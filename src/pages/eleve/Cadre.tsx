import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * CADRE COMMUN AUX PAGES DE L'ESPACE ÉLÈVE.
 *
 * Même fond sombre, même retour, même titrage que le tableau de bord : les
 * six sous-pages doivent donner l'impression d'être des onglets du même
 * espace, pas des pages étrangères. `data-nav-tone="dark"` prévient la barre
 * de navigation qu'elle passe sur du sombre — c'est le mécanisme déjà en
 * place ailleurs sur le site.
 */
export default function Cadre({
  titre,
  chapeau,
  children,
}: {
  titre: string
  chapeau?: string
  children: ReactNode
}) {
  return (
    <div className="eleve" data-nav-tone="dark">
      <div className="eleve__inner">
        <header className="eleve__head">
          <Link to="/espace-eleve" className="crumb">
            ← Espace élève
          </Link>
          <h1>{titre}</h1>
          {chapeau && <p className="eleve__lede">{chapeau}</p>}
        </header>

        {children}
      </div>
    </div>
  )
}
