/**
 * MANIFESTE DES VISUELS — fichier GÉNÉRÉ.
 *
 * Ne pas modifier à la main : régénéré par `node scripts/images.mjs`.
 * Dimensions, largeurs disponibles et vignettes de chargement viennent
 * directement des fichiers, donc ne peuvent pas se désynchroniser.
 */

import { asset, assetsIntegres } from '@/lib/asset'

export interface Media {
  id: string
  /** background = fond de section · content = illustration · instrument = fiche */
  role: 'background' | 'content' | 'instrument'
  width: number
  height: number
  /** Largeurs réellement produites, du plus petit au plus grand. */
  widths: number[]
  /** Texte alternatif — obligatoire, une image sans description n'existe pas. */
  alt: string
  /** Défaut connu de la source, affiché en interne. */
  note: string | null
  /** Question de droits non résolue. */
  rights: string | null
  /** Vignette floue intégrée, affichée pendant le chargement. */
  lqip: string
}

export const MEDIA: Record<string, Media> = {
  "cockpit-hero": {
    "id": "cockpit-hero",
    "role": "background",
    "width": 1536,
    "height": 1024,
    "widths": [
      640,
      1024
    ],
    "alt": "Vue depuis le cockpit d'un avion léger aligné sur une piste enneigée, face à des sommets au crépuscule.",
    "note": null,
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQBACdASoUAA0APu1iqk2ppaQiMAgBMB2JYwCdACPUP8aOT97ZA3dcAAD+3BzSTlivNfmYZS4SDbTUXaZOSUOXJb+QAA=="
  },
  "cockpit-wide": {
    "id": "cockpit-wide",
    "role": "background",
    "width": 1536,
    "height": 487,
    "widths": [
      640,
      1024
    ],
    "alt": "Même cockpit, cadrage panoramique très large sur la vallée enneigée.",
    "note": null,
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAwCdASoUAAYAPu1iqU2ppaOiMAgBMB2JZwCsACPTZkhsQoWmIYAA/uWY/LxNejL9wr2VZNV48KNDYV/gAA=="
  },
  "cockpit-vallee": {
    "id": "cockpit-vallee",
    "role": "background",
    "width": 561,
    "height": 419,
    "widths": [
      561
    ],
    "alt": "Cockpit face à une vallée de montagne au petit matin.",
    "note": null,
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAwCdASoUAA8APu1iqU2ppaOiMAgBMB2JYwCdAB58D0ScQ+Kc5IgA/tCQdWatuO4aAtEJ9R3REDQSUShHZozFQS9hecxLXYQAAA=="
  },
  "cockpit-piste": {
    "id": "cockpit-piste",
    "role": "background",
    "width": 1024,
    "height": 572,
    "widths": [
      640,
      1024
    ],
    "alt": "Vue du poste de pilotage vers une piste en herbe, mains sur les commandes.",
    "note": null,
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAwCdASoUAAsAPu1Ct1apoqakGAEwHYlAFp0EOaTn6EQi42U/AAD6LAvuWCP0OvS9fZUyUUB5ZAuUeyRT6yJ7jh9rR//jCAA="
  },
  "panneau-reel": {
    "id": "panneau-reel",
    "role": "content",
    "width": 750,
    "height": 409,
    "widths": [
      640
    ],
    "alt": "Planche de bord d'un Tecnam P2008 : deux écrans multifonctions et cadrans moteur.",
    "note": null,
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAACwAwCdASoUAAsAPu1kqk2ppaQiMAgBMB2JaQAAW+mW+ATu7LuBEAD+mTXuOQ9ZDF7M9jrB9nfUCjCzgTMYNvqHQrwvxeVNAYAAAA=="
  },
  "panneau-schema": {
    "id": "panneau-schema",
    "role": "content",
    "width": 735,
    "height": 569,
    "widths": [
      640
    ],
    "alt": "Schéma légendé de la planche de bord du Tecnam P2008JC MkII.",
    "note": null,
    "rights": "TECNAM — schéma officiel, autorisation à obtenir avant publication.",
    "lqip": "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAwCdASoUABAAPu1kqk4ppaQiMAgBMB2JZwAAXKrOOVMB5R9iDhHAAOJ8FBCGEFs+8bfApBE82Clo2EQlwbBkANrsHdmUzo9vhXyqFFjcgAAA"
  },
  "instrument-altimetre": {
    "id": "instrument-altimetre",
    "role": "instrument",
    "width": 525,
    "height": 451,
    "widths": [
      525
    ],
    "alt": "Altimètre à trois aiguilles, avec sa fenêtre de calage barométrique.",
    "note": "Titre « 9. GROS PLAN ALTIMÈTRE » incrusté — recadré.",
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAAAQAwCdASoUABEAPu1sqlEppaOiqAqpMB2JaQDPZBWcYgAA/vBAIgZGX8ZU6tdM/oxzboOQAAA="
  },
  "instrument-horizon": {
    "id": "instrument-horizon",
    "role": "instrument",
    "width": 420,
    "height": 401,
    "widths": [
      420
    ],
    "alt": "Horizon artificiel : ciel bleu, sol brun, maquette d'avion et échelle de tangage.",
    "note": null,
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAwCdASoUABMAPu1sq08ppqOiMBgIATAdiUAZC4Hpc8oyTcIHP4AA/vDfr5H/oKK7cSW6inGzw1tuMCdJl4QQukWubc4fLwsjoAAA"
  },
  "instrument-anemometre": {
    "id": "instrument-anemometre",
    "role": "instrument",
    "width": 428,
    "height": 401,
    "widths": [
      428
    ],
    "alt": "Anémomètre gradué en nœuds, avec ses arcs de couleur.",
    "note": "Graduation incohérente sur l’original — inutilisable pour un exercice de lecture.",
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAwCdASoUABMAPu1wsFKppiSiqAgBMB2JZwDKeBZmJjyIociPnAD+8Dw1e+zpQtavlsaato7iAAAA"
  },
  "instrument-compas": {
    "id": "instrument-compas",
    "role": "instrument",
    "width": 388,
    "height": 413,
    "widths": [
      388
    ],
    "alt": "Compas magnétique et bille de symétrie.",
    "note": "Titre incrusté en haut — recadré.",
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAgCdASoUABUAPu1ur1IppiQiqAgBMB2JaQAAPfsHAAD+8LExjPjVEr+So6eIEKjgAA=="
  },
  "console-centrale": {
    "id": "console-centrale",
    "role": "instrument",
    "width": 513,
    "height": 444,
    "widths": [
      513
    ],
    "alt": "Console centrale : manettes de gaz, commande de volets, manches.",
    "note": "Objet parasite au centre de l’original — à retirer avant publication.",
    "rights": null,
    "lqip": "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAwCdASoUABEAPu1wsFKppiSiqAgBMB2JaQAAPPTErK9GTGANAAD+8G8ZeEg3RNrCZy47t9rEBT29pmgAAA=="
  },
  "tecnam-neige": {
    "id": "tecnam-neige",
    "role": "content",
    "width": 547,
    "height": 336,
    "widths": [
      547
    ],
    "alt": "Tecnam P2008 stationné sur un tarmac enneigé, par ciel bleu.",
    "note": null,
    "rights": "Filigrane « plane4you » — recadré, mais droits à vérifier.",
    "lqip": "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQBACdASoUAAwAPu1iqk2ppaQiMAgBMB2JYgCdL13rAAUB5pSoLJ8AAADKo6Gz7G+Q3SzXeYo64ak66fCpyDCX5EdKho94+osDPcSAAAA="
  },
  "tecnam-roulage": {
    "id": "tecnam-roulage",
    "role": "content",
    "width": 1152,
    "height": 768,
    "widths": [
      640,
      1024
    ],
    "alt": "Tecnam P2008 au roulage, volets rentrés, deux occupants à bord.",
    "note": null,
    "rights": "Livrée et immatriculation d'un exploitant tiers — droits à vérifier.",
    "lqip": "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAwCdASoUAA0APu1iqk2ppaQiMAgBMB2JQBajUABpoFmeBHwwcGgA/o6t2Vq/89j3T2PothRuTI82r9LVBLNFLz6rlQ86/XiAAA=="
  }
}

export const media = (id: string): Media | undefined => MEDIA[id]

/**
 * Construit l'attribut srcset pour un format donné.
 *
 * Rendu VIDE quand les images sont intégrées au document. Un `srcset` est
 * une liste séparée par des virgules, et un `data:image/webp;base64,…` en
 * contient une : le navigateur y lirait deux candidats et n'afficherait
 * rien. C'est `src` qui prend le relais — lui accepte les virgules.
 */
export function srcSet(m: Media, fmt: 'avif' | 'webp' | 'jpg') {
  if (assetsIntegres()) return ''
  return m.widths.map((w) => `${asset(`images/${m.id}-${w}.${fmt}`)} ${w}w`).join(', ')
}

/**
 * Source affichée. La plus grande largeur en JPEG en temps normal ; la
 * variante intégrée, en WebP, quand le document embarque ses images.
 */
export function fallback(m: Media) {
  if (assetsIntegres()) return asset(`images/${m.id}-${m.widths[0]}.webp`)
  return asset(`images/${m.id}-${m.widths[m.widths.length - 1]}.jpg`)
}
