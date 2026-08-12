import { asset } from '@/lib/asset'

/**
 * PAGE DE BIENVENUE.
 *
 * Une image, une phrase, une porte. Rien d'autre.
 *
 * La seule animation du site est ici : la descente vers les cours, quand on
 * appuie sur le bouton ou sur le chevron. Elle est confiée à
 * `scrollIntoView({ behavior: 'smooth' })` — donc au navigateur, qui
 * l'interrompt proprement si le visiteur reprend la main, et qui la
 * supprime de lui-même quand le système demande à réduire les animations.
 *
 * L'image est celle du site — `montagne-brume`, déjà présente en cinq
 * largeurs — donc servie dans la taille qui convient à l'écran, et
 * embarquée telle quelle dans le document mono-fichier.
 */

const PLATE = 'montagne-brume'
const LARGEURS = [1024, 1536, 1920]

/** Descend jusqu'aux cours, sans changer de page ni toucher à l'adresse. */
function descendre() {
  document.getElementById('reviser')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

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

      <div className="bienvenue__contenu">
        <h1 className="bienvenue__titre">
          Bienvenue dans AERO<span aria-hidden="true">//</span>LAB
        </h1>

        <button type="button" className="btn btn--primary" onClick={descendre}>
          Commencer à réviser
        </button>
      </div>

      <button
        type="button"
        className="bienvenue__descendre"
        onClick={descendre}
        aria-label="Descendre vers les cours"
      >
        <span aria-hidden="true" />
      </button>
    </section>
  )
}
