/**
 * Build en UN SEUL FICHIER HTML.
 *
 * Objectif : pouvoir ouvrir AERO//LAB d'un double-clic, sans serveur ni
 * réseau — la contrainte du §8, et la seule façon d'envoyer le site sur un
 * téléphone par message ou par AirDrop.
 *
 * CE QUI EST EMBARQUÉ, ET CE QUI NE PEUT PAS L'ÊTRE
 *
 * Le CSS et le JS sont intégrés au document. Les IMAGES le sont aussi,
 * depuis cette version : sans elles, le fichier envoyé sur un téléphone
 * s'ouvrait sur une introduction sans montagne, puisqu'il n'avait aucun
 * dossier voisin où aller les chercher. Pour ne pas alourdir inutilement,
 * une seule largeur est retenue par visuel — la plus petite disponible en
 * WebP, largement suffisante sur un écran de téléphone — et les `srcset`
 * sont réduits à cette source unique par `src/lib/asset.ts`.
 *
 * Les MODÈLES 3D restent dehors. Les trois `.glb` pèsent 4,9 Mo binaires,
 * soit 6,6 Mo une fois en base64 : les embarquer ferait un document que
 * Safari mobile refuse d'ouvrir. Ils sont copiés à côté du fichier, et les
 * laboratoires savent se passer d'eux quand le dossier est absent.
 *
 * `--fragment` produit une version sans <html>/<head>/<body>, destinée à
 * être injectée dans une page hôte.
 */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const DIST = path.join(ROOT, 'dist-single')

/**
 * Par défaut : un document HTML COMPLET, qu'on ouvre d'un double-clic.
 * `--fragment` produit une version sans <html>/<head>/<body>, destinée à
 * être injectée dans une page hôte.
 */
const FRAGMENT = process.argv.includes('--fragment')
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const OUT =
  args[0] ||
  path.join(ROOT, FRAGMENT ? '.preview/aerolab.fragment.html' : '.preview/aerolab.html')

console.log('· build mono-fichier …')
execSync('npx vite build --config vite.single.config.ts --base ./', {
  stdio: 'inherit',
  env: { ...process.env, VITE_HASH_ROUTER: '1' },
})

const read = (href) => fs.readFileSync(path.join(DIST, href.replace(/^\.?\//, '')), 'utf8')

let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

/* --------------------------------------------------------- CSS inline */

let cssCount = 0
html = html.replace(
  /<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,
  (_m, href) => {
    cssCount++
    return `<style>${read(href)}</style>`
  },
)

/* ---------------------------------------------------------- JS inline */

let jsCount = 0
html = html.replace(
  /<script([^>]*)\ssrc="([^"]+)"([^>]*)><\/script>/g,
  (_m, before, href, after) => {
    jsCount++
    const attrs = `${before}${after}`.replace(/\scrossorigin/g, '').trim()
    // `</script>` dans une chaîne du bundle refermerait la balise.
    const code = read(href).replace(/<\/script>/gi, '<\\/script>')
    return `<script ${attrs}>${code}</script>`
  },
)

if (!cssCount || !jsCount) {
  throw new Error(`intégration incomplète : ${cssCount} CSS, ${jsCount} JS`)
}

/* ----------------------------------- extraction pour l'outil Artifact */

const title =
  html.match(/<title>[\s\S]*?<\/title>/)?.[0] ??
  '<title>AERO//LAB</title>'

// Vite place le module dans le <head>. On récupère styles ET scripts des
// deux zones, puis on remet les scripts en FIN de corps : ils s'exécutent
// ainsi une fois #root présent, quelle que soit la page hôte.
const headInner = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
const bodyRaw = html.match(/<body[^>]*>([\s\S]*)<\/body>/)?.[1] ?? ''

const STYLE_RE = /<style>[\s\S]*?<\/style>/g
const SCRIPT_RE = /<script(?![^>]*\ssrc=)[^>]*>[\s\S]*?<\/script>/g

/*
 * Les chemins du style intégré doivent être RÉÉCRITS.
 *
 * La feuille venait de `assets/`, où elle désignait ses images par `../images/`.
 * Une fois intégrée au document, ce chemin remonte d'un cran de trop et pointe
 * à côté du dossier. Le symptôme ne se voyait qu'à l'ouverture en `file://` :
 * un fond de montagne absent, sans autre signe qu'un `ERR_FILE_NOT_FOUND` dans
 * la console.
 */
const rebase = (css) => css.replace(/url\((['"]?)\.\.\//g, 'url($1./')

const styles = rebase(
  [
    ...[...headInner.matchAll(STYLE_RE)].map((m) => m[0]),
    ...[...bodyRaw.matchAll(STYLE_RE)].map((m) => m[0]),
  ].join('\n'),
)

const scripts = [
  ...[...headInner.matchAll(SCRIPT_RE)].map((m) => m[0]),
  ...[...bodyRaw.matchAll(SCRIPT_RE)].map((m) => m[0]),
].join('\n')

const bodyInner = bodyRaw.replace(STYLE_RE, '').replace(SCRIPT_RE, '')

if (!bodyInner.includes('id="root"')) {
  throw new Error('le conteneur #root est absent du corps de page')
}
if (!scripts.includes('createElement') && scripts.length < 10_000) {
  throw new Error('le bundle applicatif n’a pas été récupéré')
}

const meta = [...headInner.matchAll(/<meta[^>]*>/g)]
  .map((m) => m[0])
  .filter((m) => !/http-equiv/i.test(m))
  .join('\n')
const icon = headInner.match(/<link[^>]*rel="icon"[^>]*>/)?.[0] ?? ''

/* ------------------------------------------- images en data: URI */

/**
 * Une seule largeur par visuel : la plus petite variante WebP.
 *
 * Les images du site existent en quatre ou cinq largeurs pour le `srcset`.
 * Toutes les embarquer multiplierait le poids par autant, alors qu'un seul
 * fichier ouvert sur un téléphone n'en affichera jamais qu'une.
 */
const MIME = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
}

function carteImages() {
  const dir = path.join(ROOT, 'public', 'images')
  if (!fs.existsSync(dir)) return { carte: {}, octets: 0 }

  const fichiers = fs.readdirSync(dir)

  /*
    UN SEUL FICHIER PAR VISUEL, ET IL EST EN WEBP.

    Chaque visuel existe en quatre ou cinq largeurs et en deux ou trois
    formats, pour le `srcset`. On ne retient que la plus petite variante
    WebP : elle suffit sur un écran de téléphone, et le WebP est lu par tous
    les navigateurs visés — le JPEG n'était là que comme repli.

    La carte associe ensuite TOUTES les variantes demandées à cette unique
    donnée, JPEG compris : le code réclamera peut-être
    `images/montagne-brume-1536.jpg`, il recevra le WebP embarqué.
  */
  const familles = new Map()
  for (const f of fichiers) {
    const m = f.match(/^(.*)-(\d+)\.webp$/)
    if (!m) continue
    const [, id, largeur] = m
    const actuel = familles.get(id)
    if (!actuel || Number(largeur) < actuel.largeur) {
      familles.set(id, { fichier: f, largeur: Number(largeur) })
    }
  }

  const carte = {}
  let octets = 0
  for (const [id, { fichier }] of familles) {
    const buf = fs.readFileSync(path.join(dir, fichier))
    const uri = `data:image/webp;base64,${buf.toString('base64')}`
    octets += uri.length
    for (const f2 of fichiers) {
      const m2 = f2.match(/^(.*)-(\d+)\.(\w+)$/)
      if (m2 && m2[1] === id && MIME[`.${m2[3]}`]) carte[`images/${f2}`] = uri
    }
  }

  /* Les fichiers sans largeur dans leur nom (logos, favicons) tels quels. */
  for (const f of fichiers) {
    if (/-\d+\.\w+$/.test(f)) continue
    const mime = MIME[path.extname(f)]
    if (!mime) continue
    const buf = fs.readFileSync(path.join(dir, f))
    const uri = `data:${mime};base64,${buf.toString('base64')}`
    octets += uri.length
    carte[`images/${f}`] = uri
  }

  return { carte, octets }
}

const { carte: INLINE, octets: octetsImages } = FRAGMENT
  ? { carte: {}, octets: 0 }
  : carteImages()

const nbImages = new Set(Object.values(INLINE)).size

/*
  LA CARTE EST DÉDUPLIQUÉE, ET CE N'EST PAS UN DÉTAIL.

  Soixante-et-onze chemins pointent sur dix-huit images seulement — toutes
  les largeurs d'un même visuel partagent la variante embarquée. Écrite
  telle quelle en JSON, chaque `data:` serait recopiée autant de fois
  qu'elle a de clés : 3,4 Mo au lieu de 0,8. On sort donc les données une
  fois dans un tableau, et les clés n'en portent que l'indice.
*/
const uris = [...new Set(Object.values(INLINE))]
const index = new Map(uris.map((u, i) => [u, i]))
const cles = Object.fromEntries(
  Object.entries(INLINE).map(([k, v]) => [k, index.get(v)]),
)
const prelude = FRAGMENT
  ? ''
  : `<script>window.__AEROLAB_INLINE__=(function(){` +
    `var d=${JSON.stringify(uris)},k=${JSON.stringify(cles)},m={};` +
    `for(var n in k)m[n]=d[k[n]];return m})()</script>`

/*
  Les `url()` de la feuille de style désignent leurs images par un chemin
  littéral : on peut les remplacer directement, sans passer par la carte.
*/
let stylesIntegres = FRAGMENT
  ? styles
  : styles.replace(/url\((['"]?)\.?\/?(images\/[^'")]+)\1\)/g, (m, q, chemin) =>
      INLINE[chemin] ? `url(${q}${INLINE[chemin]}${q})` : m,
    )

/*
  KaTeX livre chaque fonte en trois formats. Le WOFF suffit à tous les
  navigateurs visés ; le TrueType, gardé pour Internet Explorer, pesait
  660 Ko dans le document. On retire ses sources du `src:` — les autres
  formats restent, et le repli reste complet.
*/
if (!FRAGMENT) {
  const avant = stylesIntegres.length
  stylesIntegres = stylesIntegres
    .replace(/,?\s*url\((['"]?)data:font\/ttf;base64,[^)]*\1\)\s*format\((['"])truetype\2\)/g, '')
    .replace(/src:\s*,/g, 'src:')
  const gagne = (avant - stylesIntegres.length) / 1024 / 1024
  if (gagne > 0.05) console.log(`· fontes TrueType retirées — ${gagne.toFixed(2)} Mo`)
}

const out = FRAGMENT
  ? `${title}\n${styles}\n${bodyInner}\n${scripts}\n`
  : `<!doctype html>
<html lang="fr">
<head>
${meta}
${icon}
${title}
${stylesIntegres}
</head>
<body>
${bodyInner}
${prelude}
${scripts}
</body>
</html>
`

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, out)

/*
 * LES MODÈLES DOIVENT VOISINER LE FICHIER.
 *
 * Un `.glb` ne peut pas être intégré au document : il est binaire, et le
 * transformer en base64 ajouterait près de sept mégaoctets. Il reste donc un
 * fichier à côté — et les chemins du site sont relatifs pour cela.
 *
 * Encore faut-il qu'il soit là. Sans cette copie, le document ouvert d'un
 * double-clic cherchait ses modèles dans un dossier absent, sans qu'aucune
 * erreur de construction ne le signale : le §8 du cahier des charges n'était
 * satisfait qu'en apparence.
 */
function copyBeside(folder) {
  const src = path.join(ROOT, 'public', folder)
  if (!fs.existsSync(src) || FRAGMENT) return
  const dest = path.join(path.dirname(OUT), folder)
  fs.mkdirSync(dest, { recursive: true })
  let bytes = 0
  let n = 0
  for (const f of fs.readdirSync(src)) {
    const from = path.join(src, f)
    if (!fs.statSync(from).isFile()) continue
    fs.copyFileSync(from, path.join(dest, f))
    bytes += fs.statSync(from).size
    n++
  }
  console.log(
    `· ${folder}/ copié auprès du document — ${(bytes / 1024 / 1024).toFixed(2)} Mo, ${n} fichiers`,
  )
}

/*
  Seuls les modèles voisinent le document : les images, elles, sont
  désormais dedans. Les copier en plus laisserait croire que le fichier a
  besoin d'un dossier, alors qu'il se suffit à lui-même.
*/
copyBeside('models')

if (!FRAGMENT) {
  console.log(
    `· ${nbImages} images intégrées en data: — ${(octetsImages / 1024 / 1024).toFixed(2)} Mo`,
  )
}

console.log(
  `· ${path.relative(ROOT, OUT)} — ${(Buffer.byteLength(out) / 1024 / 1024).toFixed(2)} Mo ` +
    `(${FRAGMENT ? 'fragment' : 'document complet'}, ${cssCount} CSS, ${jsCount} JS intégrés)`,
)
