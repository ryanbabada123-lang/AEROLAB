import { chromium } from 'playwright'
import fs from 'node:fs'

const OUT =
  './.screenshots'
fs.mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
})

const errors = []
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await ctx.newPage()
page.on('console', (m) => m.type() === 'error' && errors.push(`console: ${m.text()}`))
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))

const base = process.env.BASE_URL || 'http://127.0.0.1:5173'

/* ---------------- 1. DÉCROCHAGE dans la simulation ---------------- */
await page.goto(`${base}/cours/bia/bia-aero-portance`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)
const slider = page.locator('input[type=range]').first()
await slider.evaluate((el) => {
  const setter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value',
  ).set
  setter.call(el, '19')
  el.dispatchEvent(new Event('input', { bubbles: true }))
})
await page.waitForTimeout(700)
await page.locator('figure.sim').first().scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
await page.locator('figure.sim').first().screenshot({ path: `${OUT}/sim-stall.png` })
const readout = await page.locator('.sim__readout').first().innerText()
console.log('STALL READOUT:', readout.replace(/\n/g, ' | '))

/* ---------------- 2. Courbe Cz ---------------- */
await page.locator('figure.sim').nth(1).scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
await page.locator('figure.sim').nth(1).screenshot({ path: `${OUT}/sim-curve.png` })

/* ---------------- 3. Quiz : parcours complet ---------------- */
await page.locator('.quiz').scrollIntoViewIfNeeded()
await page.waitForTimeout(400)
await page.locator('.quiz__option').nth(1).click() // mauvaise réponse volontaire
await page.waitForTimeout(400)
await page.locator('.quiz').screenshot({ path: `${OUT}/quiz-answered.png` })
const verdict = await page.locator('.quiz__verdict h4').innerText()
console.log('QUIZ VERDICT (attendu Incorrect):', verdict)

for (let i = 0; i < 5; i++) {
  const next = page.locator('.quiz__foot button')
  if (!(await next.count())) break
  if (await next.isDisabled()) {
    const opt = page.locator('.quiz__option').first()
    if (await opt.count()) await opt.click()
    await page.waitForTimeout(200)
  }
  await next.click()
  await page.waitForTimeout(350)
}
await page.locator('.quiz').scrollIntoViewIfNeeded()
await page.locator('.quiz').screenshot({ path: `${OUT}/quiz-score.png` })

/* ---------------- 4. Le carnet enregistre bien ---------------- */
await page.goto(`${base}/logbook`, { waitUntil: 'networkidle' })
await page.waitForTimeout(800)
await page.screenshot({ path: `${OUT}/logbook-filled.png`, fullPage: true })
const stats = await page.locator('.log-grid').innerText()
console.log('FLIGHT LOG:', stats.replace(/\n/g, ' | '))

/* ---------------- 5. Cockpit Lab : mode évaluation ---------------- */
await page.goto(`${base}/lab/cockpit`, { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
await page.getByRole('button', { name: 'Évaluation' }).click()
await page.waitForTimeout(500)
await page.locator('.hotspot').first().click()
await page.waitForTimeout(500)
await page.locator('.cockpit').screenshot({ path: `${OUT}/cockpit-eval.png` })

/* ---------------- 6. Navigation clavier ---------------- */
await page.goto(base, { waitUntil: 'networkidle' })
await page.waitForTimeout(1000)
await page.keyboard.press('Tab')
const focused = await page.evaluate(() => document.activeElement?.textContent?.trim())
console.log('PREMIER FOCUS (attendu skip link):', focused)

/* ---------------- 7. prefers-reduced-motion ---------------- */
const ctx2 = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
})
const p2 = await ctx2.newPage()
p2.on('pageerror', (e) => errors.push(`[reduced] pageerror: ${e.message}`))
p2.on('console', (m) => m.type() === 'error' && errors.push(`[reduced] ${m.text()}`))
await p2.goto(base, { waitUntil: 'networkidle' })
await p2.waitForTimeout(1200)
await p2.evaluate(() => window.scrollTo(0, 900 * 8.6 * 0.5))
await p2.waitForTimeout(1200)
await p2.screenshot({ path: `${OUT}/reduced-motion.png` })

/* ---------------- 8. Sans WebGL ---------------- */
const ctx3 = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const p3 = await ctx3.newPage()
await p3.addInitScript(() => {
  const orig = HTMLCanvasElement.prototype.getContext
  HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
    if (String(type).includes('webgl')) return null
    return orig.call(this, type, ...rest)
  }
})
p3.on('pageerror', (e) => errors.push(`[nowebgl] pageerror: ${e.message}`))
await p3.goto(base, { waitUntil: 'networkidle' })
await p3.waitForTimeout(1200)
await p3.screenshot({ path: `${OUT}/no-webgl.png` })

/* ---------------- 9. 404 ---------------- */
await page.goto(`${base}/nimporte-quoi`, { waitUntil: 'networkidle' })
await page.waitForTimeout(500)
const nf = await page.locator('.page__title').innerText()
console.log('404:', nf)

await browser.close()
console.log('\nERREURS:', errors.length ? '\n' + errors.join('\n') : 'AUCUNE')
