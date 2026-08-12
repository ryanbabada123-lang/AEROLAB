import { Link } from 'react-router-dom'
import { asset } from '@/lib/asset'

/**
 * PAGE DE BIENVENUE.
 *
 * Remplace l'introduction à défilement immersif, retirée sur demande. Ce
 * qu'elle faisait — sept scènes enchaînées par le défilement, une scène 3D
 * avec deux appareils, un cadran d'instruments, une frise de chapitres —
 * demandait au visiteur de faire défiler neuf écrans avant d'atteindre quoi
 * que ce soit d'utile, et l'avion ne s'affichait pas partout.
 *
 * Ici : une image, un titre, une porte d'entrée. Rien ne bouge, rien
 * n'attend, rien ne dépend du défilement ni de la 3D.
 *
 * L'image est celle du site — `montagne-brume`, déjà présente en cinq
 * largeurs — donc servie dans la taille qui convient à l'écran, et
 * embarquée telle quelle dans le document mono-fichier.
 */

const PLATE = 'montagne-brume'
const LARGEURS = [1024, 1536, 1920]

export default function Bienvenue() {
  return (
    <section className="bienvenue">
      <picture className="bienvenue__fond">
        <source
          type="image/webp"
          srcSet={LARGEURS.map(
            (w) => `${asset(`images/${PLATE}-${w}.webp`)} ${w}w`,
          ).join(', ')}
          sizes="100vw"
        />
        <img
          src={asset(`images/${PLATE}-1536.jpg`)}
          srcSet={LARGEURS.map(
            (w) => `${asset(`images/${PLATE}-${w}.jpg`)} ${w}w`,
          ).join(', ')}
          sizes="100vw"
          alt=""
          /* La toute première image du site : jamais différée. */
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <div className="bienvenue__contenu u-shell">
        <p className="u-label">Bienvenue dans</p>
        <h1 className="bienvenue__titre">
          AERO<span aria-hidden="true">//</span>LAB
        </h1>
        <p className="bienvenue__ligne">
          Les cours du BIA, mot pour mot, avec leurs schémas redessinés.
        </p>

        <div className="bienvenue__actions">
          <Link to="/formation/bia" className="btn btn--primary">
            Commencer le BIA
          </Link>
          <Link to="/espace-eleve" className="btn">
            Espace élève
          </Link>
        </div>
      </div>
    </section>
  )
}
