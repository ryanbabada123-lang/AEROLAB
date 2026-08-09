/**
 * Vérifie le fichier autonome DANS LES CONDITIONS DU DOUBLE-CLIC :
 * ouvert en file://, sans serveur, sans réseau.
 *
 * C'est le seul test qui prouve que le fichier livré s'ouvre vraiment.
 * On y contrôle aussi que la page défile — un document qui ne défile pas
 * rend l'introduction inutilisable.
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const FILE = path.resolve(process.argv[2] || '.preview/aerolab.html')
const OUT = process.argv[3] || '.screenshots'
fs.mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
})

const problems = []
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()

page.on('console', (m) => m.type() === 'error' && problems.push(`console: ${m.text()}`))
page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`))
page.on('requestfailed', (r) => {
  const u = r.url()
  if (!u.startsWith('file://')) problems.push(`requête externe : ${u.slice(0, 100)}`)
})

await page.goto(`file://${FILE}`, { waitUntil: 'load' })
await page.waitForTimeout(3000)

/* -------- 1. La page défile-t-elle réellement ? -------- */
const metrics = await page.evaluate(() => ({
  scrollHeight: document.documentElement.scrollHeight,
  innerHeight: window.innerHeight,
  introHeight: document.querySelector('.intro')?.offsetHeight ?? 0,
}))
const scrollable = metrics.scrollHeight - metrics.innerHeight
console.log(
  `hauteur défilable : ${scrollable} px (intro ${metrics.introHeight} px)`,
)
if (scrollable < 3000) problems.push(`page non défilable : ${scrollable} px`)

/* -------- 2. Molette : le scroll répond-il ? -------- */
await page.mouse.move(720, 450)
await page.mouse.wheel(0, 1500)
await page.waitForTimeout(900)
const afterWheel = await page.evaluate(() => scrollY)
console.log(`après molette (1500) : scrollY = ${Math.round(afterWheel)}`)
if (afterWheel < 500) problems.push('la molette ne fait pas défiler la page')

/* -------- 3. Clavier : flèche bas et Page suivante -------- */
await page.evaluate(() => scrollTo(0, 0))
await page.waitForTimeout(500)
await page.keyboard.press('PageDown')
await page.waitForTimeout(700)
const afterKey = await page.evaluate(() => scrollY)
console.log(`après Page suivante : scrollY = ${Math.round(afterKey)}`)
if (afterKey < 200) problems.push('le clavier ne fait pas défiler la page')

/* -------- 4. La scène 3D progresse-t-elle avec le scroll ? -------- */
const shot = async (label, y) => {
  await page.evaluate((v) => scrollTo(0, v), y)
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `${OUT}/file-${label}.png` })
}
const span = metrics.introHeight - metrics.innerHeight
await shot('00-dream', 0)
await shot('03-cockpit', span * 0.37)
await shot('06-wing', span * 0.85)
await shot('09-axes', span + 300)

/* -------- 5. Le routage par ancre fonctionne-t-il en file:// ? -------- */
await page.evaluate(() => (location.hash = '#/cours/bia/bia-aero-portance'))
await page.waitForTimeout(2500)
const sims = await page.locator('figure.sim').count()
console.log(`cours : ${sims} simulation(s) rendue(s)`)
if (!sims) problems.push('la page de cours ne rend aucune simulation')
await page.screenshot({ path: `${OUT}/file-10-course.png` })

await page.evaluate(() => (location.hash = '#/lab/cockpit'))
await page.waitForTimeout(1800)
const spots = await page.locator('.hotspot').count()
console.log(`cockpit lab : ${spots} instrument(s)`)
if (spots < 6) problems.push('le cockpit lab est incomplet')

await browser.close()
console.log(
  problems.length
    ? '\nPROBLÈMES :\n' + [...new Set(problems)].join('\n')
    : '\nOK — le fichier s’ouvre, défile et fonctionne en file://',
)
process.exit(problems.length ? 1 : 0)
