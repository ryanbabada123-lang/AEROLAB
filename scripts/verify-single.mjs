/**
 * Vérifie le fichier de prévisualisation dans les conditions réelles de
 * l'hôte : page enveloppée dans un squelette minimal, AUCUNE requête
 * réseau autorisée. Si la page tente d'aller chercher quoi que ce soit à
 * l'extérieur, la requête échoue et le test le signale.
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import http from 'node:http'

const FILE = process.argv[2] || '.preview/aerolab.html'
const OUT = process.argv[3] || '.screenshots'
fs.mkdirSync(OUT, { recursive: true })

const fragment = fs.readFileSync(FILE, 'utf8')
const page$ = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}</style>
</head><body>${fragment}</body></html>`

// Servi en HTTP plutôt qu'injecté : la page obtient une vraie URL de base,
// comme chez l'hébergeur. Un `about:blank` fausserait la résolution des
// modules et ne prouverait rien.
const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
  res.end(page$)
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const ORIGIN = `http://127.0.0.1:${server.address().port}`

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
})

const problems = []

async function run(name, width, height, isMobile, steps) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    isMobile,
    hasTouch: isMobile,
  })
  const page = await ctx.newPage()

  // Seule la page elle-même a le droit de transiter par le réseau : tout
  // autre appel signifierait une dépendance externe, donc une démo qui
  // casse sans connexion.
  await page.route('**/*', (route) => {
    const url = route.request().url()
    if (url.startsWith(ORIGIN) || url.startsWith('data:') || url.startsWith('blob:')) {
      return route.continue()
    }
    problems.push(`[${name}] requête externe : ${url.slice(0, 120)}`)
    return route.abort()
  })

  page.on('console', (m) => {
    if (m.type() === 'error') problems.push(`[${name}] console: ${m.text()}`)
  })
  page.on('pageerror', (e) => problems.push(`[${name}] pageerror: ${e.message}`))

  await page.goto(ORIGIN, { waitUntil: 'load' })
  await page.waitForTimeout(2500)

  for (const s of steps) {
    if (s.scroll !== undefined) await page.evaluate((y) => scrollTo(0, y), s.scroll)
    if (s.hash) await page.evaluate((h) => (location.hash = h), s.hash)
    await page.waitForTimeout(s.wait ?? 1500)
    await page.screenshot({ path: `${OUT}/single-${name}-${s.label}.png` })
    if (s.expect) {
      const found = await page.locator(s.expect).count()
      if (!found) problems.push(`[${name}/${s.label}] introuvable : ${s.expect}`)
    }
  }
  await ctx.close()
}

const H = 900
const span = (vh) => vh * 8.6 - vh

await run('desktop', 1440, H, false, [
  { label: '00-dream', scroll: 0 },
  { label: '03-cockpit', scroll: span(H) * 0.37 },
  { label: '06-wing', scroll: span(H) * 0.85 },
  { label: '09-axes', scroll: span(H) + H + 300 },
  { label: '10-course', hash: '#/cours/bia/bia-aero-portance', wait: 2200, expect: 'figure.sim' },
  { label: '11-cockpitlab', hash: '#/lab/cockpit', wait: 1800, expect: '.hotspot' },
  { label: '12-aircraft', hash: '#/lab/aircraft', wait: 2500, expect: 'canvas' },
  { label: '13-journey', hash: '#/journey', wait: 1200, expect: '.step' },
])

await run('iphone', 393, 852, true, [
  { label: '00', scroll: 0 },
  { label: '03-cockpit', scroll: span(852) * 0.37 },
  { label: '10-course', hash: '#/cours/bia/bia-aero-portance', wait: 2200, expect: 'figure.sim' },
])

await browser.close()
server.close()

console.log(
  problems.length
    ? 'PROBLÈMES :\n' + [...new Set(problems)].join('\n')
    : 'OK — aucune requête externe, aucune erreur console.',
)
process.exit(problems.length ? 1 : 0)
