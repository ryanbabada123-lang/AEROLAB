/**
 * CHAÎNE D'IMAGES.
 *
 * Prend les visuels bruts fournis par l'auteur, les nettoie (recadrage des
 * titres et filigranes incrustés), puis produit pour chacun plusieurs
 * largeurs en AVIF / WebP / JPEG, plus une vignette floue en data: URI
 * qui s'affiche pendant le chargement.
 *
 * Le manifeste TypeScript est régénéré ici : aucune dimension n'est
 * recopiée à la main dans le code.
 *
 *   node scripts/images.mjs
 */

import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const SRC = 'assets/source'
const OUT = 'public/images'
const MANIFEST = 'src/data/media.ts'
const WIDTHS = [640, 1024, 1600, 2048]

/**
 * `crop` est exprimé en FRACTIONS du cadre (0 → 1), pour rester valable si
 * l'auteur renvoie la même image en plus haute définition.
 * `note` documente ce qu'on retire et pourquoi.
 */
const SOURCES = [
  {
    id: 'cockpit-hero',
    file: 'cockpit-panoramique.png',
    role: 'background',
    alt: "Vue depuis le cockpit d'un avion léger aligné sur une piste enneigée, face à des sommets au crépuscule.",
  },
  {
    id: 'cockpit-wide',
    file: 'cockpit-panoramique-large.jpeg',
    role: 'background',
    alt: 'Même cockpit, cadrage panoramique très large sur la vallée enneigée.',
  },
  {
    id: 'cockpit-vallee',
    file: 'cockpit-vallee.jpeg',
    role: 'background',
    alt: 'Cockpit face à une vallée de montagne au petit matin.',
  },
  {
    id: 'cockpit-piste',
    file: 'cockpit-vue-pilote.jpeg',
    role: 'background',
    alt: "Vue du poste de pilotage vers une piste en herbe, mains sur les commandes.",
  },
  {
    id: 'panneau-reel',
    file: 'panneau-tecnam-reel.jpeg',
    role: 'content',
    alt: "Planche de bord d'un Tecnam P2008 : deux écrans multifonctions et cadrans moteur.",
  },
  {
    id: 'panneau-schema',
    file: 'panneau-tecnam-schema.png',
    role: 'content',
    rights: 'TECNAM — schéma officiel, autorisation à obtenir avant publication.',
    alt: 'Schéma légendé de la planche de bord du Tecnam P2008JC MkII.',
  },

  // ---- INSTRUMENTS ----
  {
    id: 'instrument-altimetre',
    file: 'instrument-altimetre.jpeg',
    role: 'instrument',
    // Bandeau de titre incrusté en haut de l'image.
    crop: { top: 0.085, bottom: 0.02, left: 0.02, right: 0.02 },
    note: 'Titre « 9. GROS PLAN ALTIMÈTRE » incrusté — recadré.',
    alt: "Altimètre à trois aiguilles, avec sa fenêtre de calage barométrique.",
  },
  {
    id: 'instrument-horizon',
    file: 'instrument-horizon.jpeg',
    role: 'instrument',
    crop: { top: 0.02, bottom: 0.02, left: 0.02, right: 0.02 },
    alt: "Horizon artificiel : ciel bleu, sol brun, maquette d'avion et échelle de tangage.",
  },
  {
    id: 'instrument-anemometre',
    file: 'instrument-anemometre.jpeg',
    role: 'instrument',
    crop: { top: 0.02, bottom: 0.02, left: 0.02, right: 0.02 },
    note: 'Graduation incohérente sur l’original — inutilisable pour un exercice de lecture.',
    alt: "Anémomètre gradué en nœuds, avec ses arcs de couleur.",
  },
  {
    id: 'instrument-compas',
    file: 'instrument-compas.jpeg',
    role: 'instrument',
    // Titre incrusté en haut, coupé.
    crop: { top: 0.075, bottom: 0.06, left: 0.04, right: 0.04 },
    note: 'Titre incrusté en haut — recadré.',
    alt: 'Compas magnétique et bille de symétrie.',
  },
  {
    id: 'console-centrale',
    file: 'console-centrale.jpeg',
    role: 'instrument',
    note: 'Objet parasite au centre de l’original — à retirer avant publication.',
    alt: 'Console centrale : manettes de gaz, commande de volets, manches.',
  },

  // ---- EXTÉRIEUR ----
  {
    id: 'tecnam-neige',
    file: 'tecnam-neige.jpeg',
    role: 'content',
    // Filigrane en bas.
    crop: { top: 0, bottom: 0.08, left: 0, right: 0 },
    rights: 'Filigrane « plane4you » — recadré, mais droits à vérifier.',
    alt: 'Tecnam P2008 stationné sur un tarmac enneigé, par ciel bleu.',
  },
  {
    id: 'tecnam-roulage',
    file: 'tecnam-roulage.jpeg',
    role: 'content',
    rights: "Livrée et immatriculation d'un exploitant tiers — droits à vérifier.",
    alt: 'Tecnam P2008 au roulage, volets rentrés, deux occupants à bord.',
  },
]

/* ------------------------------------------------------------------- */

const exists = (p) => fs.existsSync(p)
if (!exists(SRC)) {
  console.error(`Dossier source absent : ${SRC}`)
  process.exit(1)
}

fs.mkdirSync(OUT, { recursive: true })

const entries = []
let totalBytes = 0

for (const s of SOURCES) {
  const file = path.join(SRC, s.file)
  if (!exists(file)) {
    console.warn(`· manquant, ignoré : ${s.file}`)
    continue
  }

  let img = sharp(file)
  const meta = await img.metadata()

  // Recadrage en fractions → pixels.
  let w = meta.width
  let h = meta.height
  if (s.crop) {
    const left = Math.round(w * (s.crop.left ?? 0))
    const top = Math.round(h * (s.crop.top ?? 0))
    const width = Math.round(w * (1 - (s.crop.left ?? 0) - (s.crop.right ?? 0)))
    const height = Math.round(h * (1 - (s.crop.top ?? 0) - (s.crop.bottom ?? 0)))
    img = img.extract({ left, top, width, height })
    w = width
    h = height
  }

  const base = await img.toBuffer()
  const widths = WIDTHS.filter((x) => x <= w)
  // On n'agrandit jamais : inventer des pixels ne crée pas de détail.
  if (widths.length === 0) widths.push(w)

  const made = []
  for (const width of widths) {
    for (const [fmt, opts] of [
      ['avif', { quality: 55, effort: 6 }],
      ['webp', { quality: 78 }],
      ['jpg', { quality: 82, mozjpeg: true }],
    ]) {
      const name = `${s.id}-${width}.${fmt}`
      const dest = path.join(OUT, name)
      const pipe = sharp(base).resize({ width, withoutEnlargement: true })
      const buf = await (fmt === 'jpg'
        ? pipe.jpeg(opts)
        : fmt === 'webp'
          ? pipe.webp(opts)
          : pipe.avif(opts)
      ).toBuffer()
      fs.writeFileSync(dest, buf)
      totalBytes += buf.length
      made.push({ width, fmt, bytes: buf.length })
    }
  }

  // Vignette floue intégrée : évite le trou blanc pendant le chargement.
  const lqip = await sharp(base)
    .resize({ width: 20 })
    .blur(1.2)
    .webp({ quality: 40 })
    .toBuffer()

  entries.push({
    id: s.id,
    role: s.role,
    width: w,
    height: h,
    widths,
    alt: s.alt,
    note: s.note ?? null,
    rights: s.rights ?? null,
    lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
  })

  const kb = made.reduce((a, b) => a + b.bytes, 0) / 1024
  console.log(
    `· ${s.id.padEnd(24)} ${String(w).padStart(4)}×${String(h).padEnd(4)}  ` +
      `${widths.length} largeur(s)  ${Math.round(kb)} Ko`,
  )
}

/* ------------------------------------------- manifeste TypeScript */

const ts = `/**
 * MANIFESTE DES VISUELS — fichier GÉNÉRÉ.
 *
 * Ne pas modifier à la main : régénéré par \`node scripts/images.mjs\`.
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

export const MEDIA: Record<string, Media> = ${JSON.stringify(
  Object.fromEntries(entries.map((e) => [e.id, e])),
  null,
  2,
)}

export const media = (id: string): Media | undefined => MEDIA[id]

/**
 * Construit l'attribut srcset pour un format donné.
 *
 * Rendu à une seule source quand les images sont intégrées au document :
 * toutes les largeurs y désigneraient la même donnée.
 */
export function srcSet(m: Media, fmt: 'avif' | 'webp' | 'jpg') {
  if (assetsIntegres()) return asset(\`images/\${m.id}-\${m.widths[0]}.\${fmt}\`)
  return m.widths.map((w) => \`\${asset(\`images/\${m.id}-\${w}.\${fmt}\`)} \${w}w\`).join(', ')
}

/** Source de repli : la plus grande largeur en JPEG. */
export function fallback(m: Media) {
  return asset(\`images/\${m.id}-\${m.widths[m.widths.length - 1]}.jpg\`)
}
`

fs.mkdirSync(path.dirname(MANIFEST), { recursive: true })
fs.writeFileSync(MANIFEST, ts)

console.log(
  `\n${entries.length} visuels · ${(totalBytes / 1024 / 1024).toFixed(2)} Mo produits · manifeste → ${MANIFEST}`,
)
