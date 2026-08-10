/**
 * CAPTURES DE CONTRÔLE DES MODÈLES
 *
 * Sert le dépôt sur un port local, ouvre `preview-model.html` sous plusieurs
 * angles pour chaque `.glb`, et assemble les rendus en une planche.
 *
 * Sert à prouver qu'une compression a épargné ce qu'elle prétendait épargner :
 * un chiffre de triangles ne dit rien de la silhouette.
 *
 * Usage : node scripts/models-preview.mjs [dossier-de-sortie]
 */

import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs/promises'
import fss from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT = process.argv[2] || path.join(ROOT, '.preview')
const PORT = 8123

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.glb': 'model/gltf-binary',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
}

/* --------------------------------------------------------------- vues à faire */

/** Vues extérieures, pour les modèles dont la silhouette est le sujet. */
const OUTSIDE = [
  { label: 'face', az: 0, el: 4 },
  { label: 'profil', az: 90, el: 4 },
  { label: 'trois-quarts-avant', az: 38, el: 12 },
  { label: 'trois-quarts-arriere', az: 145, el: 16 },
  { label: 'dessus', az: 30, el: 62 },
  { label: 'grillage', az: 38, el: 12, wire: true },
]

/**
 * Vues intérieures. Un poste de pilotage cadré depuis l'extérieur ne montre
 * que sa coque : il faut placer la caméra dedans pour voir quoi que ce soit.
 */
/*
 * Repères relevés sur le modèle, en coordonnées absolues et en mètres :
 *   — les sièges occupent X [-1,2 ; 1,3]  Y [0,5 ; 1,6]  Z [-1,2 ; 5,5],
 *     centrés en Z +2,1 ;
 *   — panneaux, plafonnier et commutateurs sont groupés en Z [-1,2 ; 0].
 * Les pilotes regardent donc vers les Z négatifs.
 */
const INSIDE = [
  { label: 'poste-vue-pilote', abs: 'px=0&py=1.35&pz=1.7&tx=0&ty=1.0&tz=-1.2&fov=68' },
  { label: 'poste-siege-gauche', abs: 'px=-0.45&py=1.3&pz=1.2&tx=-0.2&ty=0.95&tz=-1.2&fov=66' },
  { label: 'poste-planche', abs: 'px=0&py=1.15&pz=0.6&tx=0&ty=0.9&tz=-1.2&fov=72' },
  { label: 'poste-plafonnier', abs: 'px=0&py=1.0&pz=0.9&tx=0&ty=1.9&tz=-0.6&fov=76' },
  { label: 'poste-large', abs: 'px=0.1&py=1.6&pz=4.2&tx=0&ty=1.0&tz=-1.0&fov=62' },
  {
    label: 'poste-grillage',
    abs: 'px=0&py=1.35&pz=1.7&tx=0&ty=1.0&tz=-1.2&fov=68',
    wire: true,
  },
]

/*
 * Tecnam P2010 : X est l'axe longitudinal, le nez vers les X négatifs, et la
 * planche de bord est un plan à X = -1,77. Les places avant sont donc autour de
 * X = -1, tournées vers les X négatifs.
 */
const TECNAM_INSIDE = [
  { label: 'planche-de-bord', abs: 'px=-0.75&py=0.62&pz=0&tx=-1.85&ty=0.42&tz=0&fov=62' },
  { label: 'place-gauche', abs: 'px=-0.8&py=0.6&pz=-0.35&tx=-1.85&ty=0.4&tz=-0.2&fov=66' },
  { label: 'poste-large', abs: 'px=0.4&py=0.85&pz=0.1&tx=-1.85&ty=0.4&tz=0&fov=58' },
]

/** Quels jeux de vues pour quel modèle. Par défaut, l'extérieur. */
const VIEWS_FOR = {
  'a400m-flightdeck.glb': [...INSIDE, ...OUTSIDE.slice(0, 2)],
  'tecnam-p2010.glb': [...OUTSIDE, ...TECNAM_INSIDE],
}

/* ------------------------------------------------------------------- serveur */

const server = http.createServer(async (req, res) => {
  try {
    const rel = decodeURIComponent(req.url.split('?')[0])
    const file = path.join(ROOT, rel === '/' ? '/scripts/preview-model.html' : rel)
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end()
      return
    }
    const body = await fs.readFile(file)
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
    })
    res.end(body)
  } catch {
    res.writeHead(404).end('introuvable')
  }
})
await new Promise((r) => server.listen(PORT, '127.0.0.1', r))

/* -------------------------------------------------------------------- capture */

await fs.mkdir(OUT, { recursive: true })
const models = (await fs.readdir(path.join(ROOT, 'public/models')))
  .filter((f) => f.endsWith('.glb'))
  .sort()

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
})

const W = 900
const H = 560
const problems = []

const sheets = new Map()

for (const model of models) {
  console.log(`\n▸ ${model}`)
  const views = VIEWS_FOR[model] ?? OUTSIDE
  sheets.set(model, views)
  for (const v of views) {
    const page = await browser.newPage({ viewport: { width: W, height: H } })
    const errs = []
    page.on('pageerror', (e) => errs.push(e.message))
    page.on('console', (m) => m.type() === 'error' && errs.push(m.text()))

    const url =
      `http://127.0.0.1:${PORT}/scripts/preview-model.html` +
      `?model=${model}&w=${W}&h=${H}` +
      (v.abs
        ? `&${v.abs}`
        : v.inside
          ? `&inside=1&${v.inside}`
          : `&az=${v.az}&el=${v.el}`) +
      (v.wire ? '&wire=1' : '')
    await page.goto(url, { waitUntil: 'load', timeout: 60000 })

    let info = null
    try {
      await page.waitForFunction('window.__ready || window.__error', { timeout: 90000 })
      info = await page.evaluate(() => window.__ready ?? { error: window.__error })
    } catch {
      info = { error: 'délai dépassé' }
    }

    if (info?.error) {
      problems.push(`${model} / ${v.label} : ${info.error}`)
      console.log(`  ✗ ${v.label} — ${info.error}`)
    } else {
      const dest = path.join(OUT, `${model.replace(/\.glb$/, '')}-${v.label}.png`)
      await page.screenshot({ path: dest })
      console.log(
        `  ✓ ${v.label.padEnd(22)} ${info.triangles.toLocaleString('fr-FR')} tri  ` +
          `${info.size.join(' × ')} m`,
      )
    }
    if (errs.length) problems.push(`${model} / ${v.label} : ${errs.slice(0, 2).join(' | ')}`)
    await page.close()
  }
}

await browser.close()
server.close()

/* ------------------------------------------------------------------- planches */

const sharp = (await import('sharp')).default
for (const model of models) {
  const base = model.replace(/\.glb$/, '')
  const tiles = (sheets.get(model) ?? OUTSIDE)
    .map((v) => ({
      label: v.label,
      file: path.join(OUT, `${base}-${v.label}.png`),
    }))
    .filter((t) => fss.existsSync(t.file))
  if (!tiles.length) continue

  const cols = 2
  const rows = Math.ceil(tiles.length / cols)
  const composites = tiles.map((t, i) => ({
    input: t.file,
    left: (i % cols) * W,
    top: Math.floor(i / cols) * H,
  }))
  const sheet = path.join(OUT, `planche-${base}.png`)
  await sharp({
    create: {
      width: cols * W,
      height: rows * H,
      channels: 3,
      background: { r: 11, g: 15, b: 20 },
    },
  })
    .composite(composites)
    .png()
    .toFile(sheet)
  console.log(`\nplanche : ${sheet}`)
}

if (problems.length) {
  console.log('\n✗ problèmes :')
  for (const p of problems) console.log(`  ${p}`)
  process.exit(1)
}
console.log('\n✓ aucun problème de chargement ni de rendu')
