import { useEffect, useRef } from 'react'
import { scrollDriver } from '@/lib/scroll'
import { window4 } from '@/lib/math'
import { SCENES } from './timeline'
import { asset, assetsIntegres } from '@/lib/asset'

/**
 * LE DÉCOR DE L'INTRO — les plaques du storyboard.
 *
 * Jusqu'ici l'intro peignait un fond de couleur unie plus du brouillard 3D.
 * Les plaques de `assets/source/` étaient préparées mais n'avaient jamais
 * été branchées : l'identité visuelle des maquettes manquait entièrement.
 *
 * POURQUOI EN DOM ET NON EN TEXTURE 3D
 * Ces plaques sont des plans lointains : elles ne bougent pas avec la
 * caméra. En faire des textures les aurait rééchantillonnées et fait perdre
 * en netteté, pour rien. En DOM, elles sont servies telles quelles, le
 * navigateur choisit la définition, et le canevas WebGL passe par-dessus
 * en transparence.
 *
 * LE FONDU, ET CE QUE LE STORYBOARD EN DIT
 * « La brume de la scène 01 ne coupe pas : elle se dissipe. Fondu enchaîné
 * entre les deux plaques, piloté au pixel par le défilement. » C'est
 * exactement ce que fait `window4` ici — chaque plaque a ses quatre bornes
 * d'entrée, de plein, de fondu et de sortie, et elles se chevauchent.
 *
 * RÉSERVE CONNUE : les plaques plafonnent à 1 672 px de large
 * (assets/RESSOURCES.md §2). En plan lointain c'est suffisant ; sur un
 * vidéoprojecteur d'école, ça se verra. Le premier plan et la brume sont
 * reconstruits en 3D par-dessus, comme le storyboard le prévoit.
 */

type Plate = {
  id: string
  /** Base du nom dans public/images, sans définition ni extension. */
  file: string
  /** Définitions disponibles, de la plus petite à la plus grande. */
  sizes: number[]
  /** Bornes : entrée, plein, début de fondu, sortie. */
  at: [number, number, number, number]
  alt: string
  /** Léger rapprochement sur la durée de la scène, en pourcentage. */
  zoom: [number, number]
}

const PLATES: Plate[] = [
  {
    id: 'brume',
    file: 'montagne-brume',
    sizes: [1024, 1536],
    // Scène 01 « UN RÊVE. » — présente dès la première frame, donc bornes
    // basses négatives, et elle se dissipe pendant la scène 02.
    at: [-0.05, -0.01, SCENES.matin[0], SCENES.matin[1] - 0.02],
    alt: '',
    zoom: [1.0, 1.06],
  },
  {
    id: 'ciel-bleu',
    file: 'montagne-ciel-bleu',
    sizes: [1024, 1672],
    // Scène 02 « UN MATIN. » — arrive en fondu sur la brume, tient jusqu'à
    // la découverte de la machine.
    at: [SCENES.matin[0] - 0.04, SCENES.matin[1] - 0.03, SCENES.machine[1], SCENES.ciel[0] + 0.03],
    alt: '',
    zoom: [1.02, 1.08],
  },
  {
    id: 'ciel',
    file: 'ciel-nuages',
    // Cette maquette n'existe qu'en 688 px : elle sert de plan très
    // lointain, sous les nuages volumétriques reconstruits en 3D.
    sizes: [688],
    // Scène 04 « UN CIEL. » — au-dessus de la mer de nuages.
    at: [SCENES.machine[1] - 0.03, SCENES.ciel[0] + 0.02, SCENES.ciel[1] - 0.01, SCENES.premiereFois[0] + 0.03],
    // (voir aussi la plaque « ciel-haut » : la mer de nuages revient en
    // scène 06, pour que le massif reste sous l'appareil.)
    alt: '',
    zoom: [1.04, 1.0],
  },
  {
    id: 'piste',
    file: 'piste-couchant',
    sizes: [1024, 1672],
    // Scène 05 « UNE PREMIÈRE FOIS. » — la piste 27 au couchant, sur
    // laquelle l'A350 s'aligne.
    at: [SCENES.premiereFois[0] - 0.05, SCENES.premiereFois[0] + 0.04, 0.72, SCENES.cielATooi[0] + 0.02],
    alt: '',
    zoom: [1.0, 1.05],
  },
  {
    id: 'ciel-haut',
    file: 'mer-de-nuages',
    // Plaque fournie par l'auteur du projet pour cette scène précisément.
    // Elle remplace la maquette de 688 px, trop petite pour un plein écran.
    sizes: [1024, 1190],
    // Scène 06 « LE CIEL EST À TOI. » — le storyboard demande « le massif
    // très loin en dessous ». La mer de nuages revient donc ici : le décor
    // ne retombe jamais sur du noir.
    at: [SCENES.cielATooi[0] - 0.02, SCENES.cielATooi[0] + 0.03, SCENES.bienvenue[0] - 0.01, SCENES.bienvenue[0] + 0.04],
    alt: '',
    zoom: [1.0, 1.06],
  },
  {
    id: 'piste-retour',
    file: 'piste-couchant',
    sizes: [1024, 1672],
    // Final « BIENVENUE DANS L'AÉRO LAB. » — l'A350 se pose sur la même
    // piste 27 qu'au décollage. La boucle se ferme sur l'aérodrome du
    // départ, et le thème montagne tient jusqu'au dernier écran.
    at: [SCENES.bienvenue[0] - 0.03, SCENES.bienvenue[0] + 0.03, 1.02, 1.06],
    alt: '',
    zoom: [1.04, 1.0],
  },
]

export default function Backdrop() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    return scrollDriver.subscribe((p) => {
      PLATES.forEach((plate, i) => {
        const el = refs.current[i]
        if (!el) return
        const o = window4(p, ...plate.at)
        el.style.opacity = String(o)
        // Une plaque invisible ne doit rien coûter au compositeur.
        el.style.visibility = o < 0.005 ? 'hidden' : 'visible'
        if (reduced) return
        // Rapprochement très lent : imperceptible d'une frame à l'autre,
        // mais il installe une tension sur la durée de la scène.
        const [z0, z1] = plate.zoom
        const t = Math.min(1, Math.max(0, (p - plate.at[0]) / (plate.at[3] - plate.at[0])))
        el.style.transform = `scale(${(z0 + (z1 - z0) * t).toFixed(4)})`
      })
    })
  }, [])


  const integre = assetsIntegres()

  return (
    <div className="intro-backdrop" aria-hidden="true">
      {PLATES.map((plate, i) => (
        <div
          key={plate.id}
          ref={(n) => {
            refs.current[i] = n
          }}
          className="intro-backdrop__plate"
          style={{ opacity: 0, visibility: 'hidden' }}
        >
          <picture>
            {/*
              UN `srcset` NE PEUT PAS PORTER DE `data:` URI.

              L'attribut est une liste séparée par des VIRGULES, et un
              `data:image/webp;base64,…` en contient une. Le navigateur y lit
              alors deux candidats — « data:image/webp;base64 » et le corps
              en base64 pris pour un chemin relatif — et n'affiche rien.
              Chromium rattrape le coup, WebKit non : le fichier envoyé sur
              un iPhone s'ouvrait sans montagne.

              Quand les images sont intégrées, on n'émet donc AUCUN
              `<source>` : l'unique `src` de l'`<img>`, lui, accepte les
              virgules sans broncher.
            */}
            {!integre && (
              <source
                type="image/webp"
                srcSet={plate.sizes
                  .map((w) => `${asset(`images/${plate.file}-${w}.webp`)} ${w}w`)
                  .join(', ')}
                sizes="100vw"
              />
            )}
            <img
              src={asset(
                integre
                  ? `images/${plate.file}-${plate.sizes[0]}.webp`
                  : `images/${plate.file}-${plate.sizes[plate.sizes.length - 1]}.jpg`,
              )}
              srcSet={
                integre
                  ? undefined
                  : plate.sizes
                      .map((w) => `${asset(`images/${plate.file}-${w}.jpg`)} ${w}w`)
                      .join(', ')
              }
              sizes={integre ? undefined : '100vw'}
              alt={plate.alt}
              // La première plaque est le tout premier écran du site : elle
              // ne doit pas être différée.
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </picture>
        </div>
      ))}
    </div>
  )
}
