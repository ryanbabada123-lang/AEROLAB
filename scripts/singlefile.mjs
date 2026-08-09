/**
 * Build de PRÉVISUALISATION en un seul fichier HTML.
 *
 * Objectif : pouvoir montrer AERO//LAB depuis une simple page, sans serveur
 * ni réseau — exactement la contrainte d'une démo en salle (§51.3).
 *
 * Le gros du travail est fait par vite.single.config.ts (bundle unique,
 * assets en data: URI). Ce script se contente d'intégrer le CSS et le JS
 * dans le HTML, et de n'en garder que ce que l'outil Artifact attend :
 * pas de doctype, pas de <html>, pas de <head>, pas de <body>.
 */

import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const DIST = path.join(ROOT, 'dist-single')
const OUT = process.argv[2] || path.join(ROOT, '.preview/aerolab.html')

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

const styles = [
  ...[...headInner.matchAll(STYLE_RE)].map((m) => m[0]),
  ...[...bodyRaw.matchAll(STYLE_RE)].map((m) => m[0]),
].join('\n')

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

const out = `${title}\n${styles}\n${bodyInner}\n${scripts}\n`

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, out)

console.log(
  `· ${path.relative(ROOT, OUT)} — ${(Buffer.byteLength(out) / 1024 / 1024).toFixed(2)} Mo ` +
    `(${cssCount} CSS, ${jsCount} JS intégrés)`,
)
