import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page u-shell">
      <div className="page__head">
        <p className="page__eyebrow">
          <span>404</span> · <span>Hors carte</span>
        </p>
        <h1 className="page__title">Cette route n'existe pas.</h1>
        <p className="page__claim">
          La page demandée n'est pas dans le plan de vol.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 'var(--s-4)', marginTop: 'var(--s-7)', flexWrap: 'wrap' }}>
        <Link className="btn btn--primary" to="/">
          Retour à l'accueil
        </Link>
        <Link className="btn btn--ghost" to="/formation/bia">
          Voir les formations
        </Link>
      </div>
    </div>
  )
}
