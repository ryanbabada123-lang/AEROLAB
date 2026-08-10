/**
 * NOMS DES PIÈCES TELS QUE LE CHARGEUR LES MONTE
 *
 * glTF nomme les nœuds et les meshes séparément, et le chargeur de three.js
 * choisit lequel il reporte sur l'objet. Viser une pièce d'après le fichier
 * source mène donc à des règles qui ne s'appliquent jamais. Ce script demande
 * les noms au chargeur lui-même.
 *
 * Usage : node scripts/model-parts.mjs <modele.glb>
 */
import { chromium } from 'playwright'
import { createServer } from 'vite'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const model = process.argv[2]
if (!model) {
  console.error('usage : node scripts/model-parts.mjs <modele.glb>')
  process.exit(1)
}

const server = await createServer({
  root: ROOT,
  configFile: path.join(ROOT, 'vite.config.ts'),
  server: { port: 8125, host: '127.0.0.1', strictPort: true },
  logLevel: 'error',
})
await server.listen()

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
})
const page = await browser.newPage({ viewport: { width: 400, height: 300 } })
await page.goto(
  `http://127.0.0.1:8125/scripts/preview-model.html?model=${model}&w=400&h=300&dress=1`,
  { waitUntil: 'load', timeout: 60000 },
)
await page.waitForFunction('window.__ready || window.__error', { timeout: 90000 })
const info = await page.evaluate(() => window.__ready ?? { error: window.__error })

if (info.error) {
  console.error('✗', info.error)
} else {
  console.log(`${model} — ${info.parts.length} pièces montées\n`)
  console.log('objet'.padEnd(24), 'parent'.padEnd(24), 'tri'.padStart(7), ' matériau')
  for (const p of info.parts.slice(0, 30)) {
    console.log(
      p.name.slice(0, 23).padEnd(24),
      p.parent.slice(0, 23).padEnd(24),
      String(Math.round(p.tri)).padStart(7),
      ' ' + p.material,
    )
  }
  if (info.dress) {
    console.log('\nhabillage :', JSON.stringify(info.dress.byRole))
    console.log('triangles masqués :', Math.round(info.dress.hiddenTriangles))
    const liv = info.dress.livery ?? []
    console.log(`livrée : ${liv.length} pièce(s) repeinte(s)`)
    for (const l of liv) console.log(`  ${l.part.padEnd(14)} ${l.color}`)
  }
}

await browser.close()
await server.close()
