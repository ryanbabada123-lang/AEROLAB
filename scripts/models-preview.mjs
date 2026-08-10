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
import { createServer } from 'vite'
import fs from 'node:fs/promises'
import fss from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT = process.argv[2] || path.join(ROOT, '.preview')
const PORT = 8123

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
 * Tecnam P2010, repères mesurés en coordonnées monde et en mètres :
 *   — X est l'axe longitudinal, le nez vers les X négatifs ;
 *   — la cabine (`_interior.png`) occupe X [-2,32 ; 0,70]  Y [-0,59 ; 0,56]
 *     Z [-0,61 ; 0,61] ;
 *   — la planche de bord est un plan à X = -1,77, et chaque face d'instrument
 *     y mesure 8 cm, soit un cadran de 3 pouces 1/8.
 *
 * L'œil du pilote se place donc autour de X -0,9 et Y +0,22 : au-dessus, on
 * sort par le toit de la cabine et l'on ne photographie plus que le fuselage.
 */
const TECNAM_CLOSE = [
  { label: 'gros-plan-avant', az: 52, el: 8, zoom: 2.4 },
  { label: 'gros-plan-train', az: 28, el: -14, zoom: 2.6 },
]

const TECNAM_INSIDE = [
  { label: 'planche-de-bord', abs: 'px=-0.95&py=0.22&pz=0.02&tx=-1.80&ty=0.10&tz=0.04&fov=58' },
  { label: 'place-gauche', abs: 'px=-0.85&py=0.24&pz=-0.24&tx=-1.80&ty=0.08&tz=-0.10&fov=64' },
  { label: 'poste-large', abs: 'px=-0.10&py=0.30&pz=0.30&tx=-1.80&ty=0.05&tz=0&fov=70' },
]

/**
 * Vues habillées : les mêmes cadrages, mais en appliquant les règles de
 * matériaux du site. Sur les modèles livrés sans leurs textures, c'est la seule
 * comparaison qui vaut — le rendu brut ne montre qu'une masse blanche.
 */
const dressed = (views) =>
  views.map((v) => ({ ...v, label: `${v.label}-habille`, dress: true }))

/** Quels jeux de vues pour quel modèle. Par défaut, l'extérieur. */
const VIEWS_FOR = {
  'a400m-flightdeck.glb': [
    ...INSIDE.slice(0, 4),
    ...dressed(INSIDE.slice(0, 4)),
  ],
  'tecnam-p2010.glb': [
    ...dressed(TECNAM_CLOSE),
    ...dressed(OUTSIDE.slice(0, 3)),
    ...dressed(TECNAM_INSIDE),
  ],
}

/* ------------------------------------------------------------------- serveur */

// Le banc passe par Vite plutôt que par un serveur statique : la page doit
// pouvoir importer `src/three/modelMaterials.ts` pour vérifier l'habillage réel
// du site, ce qu'un serveur de fichiers ne sait pas transpiler.
const server = await createServer({
  root: ROOT,
  configFile: path.join(ROOT, 'vite.config.ts'),
  server: { port: PORT, host: '127.0.0.1', strictPort: true },
  logLevel: 'warn',
})
await server.listen()

/* -------------------------------------------------------------------- capture */

await fs.mkdir(OUT, { recursive: true })
const only = process.argv[3]
const models = (await fs.readdir(path.join(ROOT, 'public/models')))
  .filter((f) => !only || f.includes(only))
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
      (v.wire ? '&wire=1' : '') +
      (v.dress ? '&dress=1' : '') +
      (v.zoom ? `&zoom=${v.zoom}` : '')
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
await server.close()

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
