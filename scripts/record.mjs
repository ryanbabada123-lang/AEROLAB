/**
 * Enregistre une traversée d'AERO//LAB en vidéo.
 *
 * Sert à deux choses : montrer la séquence à quelqu'un qui ne peut pas
 * l'ouvrir, et disposer d'une secours en démo si la machine sur place ne
 * veut pas de WebGL (§51.3).
 *
 * Le défilement est animé image par image dans la page, avec des paliers
 * sur les temps forts — pas un scroll linéaire, qui écraserait le rythme.
 */
import { chromium } from 'playwright'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

const FILE = process.argv[2] || '.preview/aerolab.html'
const OUT = process.argv[3] || '.preview/video'
const W = 1280
const H = 720

fs.mkdirSync(OUT, { recursive: true })

const fragment = fs.readFileSync(FILE, 'utf8')
const shell = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}</style>
</head><body>${fragment}</body></html>`

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
  res.end(shell)
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const ORIGIN = `http://127.0.0.1:${server.address().port}`

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: [
    '--use-gl=swiftshader',
    '--enable-unsafe-swiftshader',
    '--no-sandbox',
    '--hide-scrollbars',
  ],
})

const ctx = await browser.newContext({
  viewport: { width: W, height: H },
  recordVideo: { dir: OUT, size: { width: W, height: H } },
})
const page = await ctx.newPage()
await page.goto(ORIGIN, { waitUntil: 'load' })
await page.waitForTimeout(3500) // laisse la scène 3D s'initialiser

/**
 * Anime le défilement jusqu'à une position, puis s'y arrête un instant.
 * `to` est exprimé en progression d'intro (0 → 1) ; au-delà de 1, en
 * pixels absolus dans la suite de la page.
 */
async function moveTo(to, ms, hold = 700) {
  await page.evaluate(
    ([to, ms]) =>
      new Promise((done) => {
        const intro = document.querySelector('.intro')
        const span = intro ? intro.offsetHeight - innerHeight : innerHeight
        const target = to <= 1 ? to * span : to
        const from = scrollY
        const t0 = performance.now()
        const ease = (x) =>
          x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
        const step = (t) => {
          const k = Math.min((t - t0) / ms, 1)
          scrollTo(0, from + (target - from) * ease(k))
          k < 1 ? requestAnimationFrame(step) : done()
        }
        requestAnimationFrame(step)
      }),
    [to, ms],
  )
  await page.waitForTimeout(hold)
}

// ---- INTRO : on s'arrête sur chaque temps fort ----
await page.waitForTimeout(1600) // « Un rêve. »
await moveTo(0.06, 1800, 900) // Une machine.
await moveTo(0.105, 1500, 900) // Un ciel.
await moveTo(0.16, 1800, 1100) // Devenir pilote.
await moveTo(0.225, 2600, 900) // l'avion apparaît
await moveTo(0.3, 2600, 700) // approche
await moveTo(0.37, 2800, 1200) // cockpit : mise sous tension
await moveTo(0.45, 2400, 1100) // « Tu es aux commandes. »
await moveTo(0.53, 2600, 700) // décollage
await moveTo(0.62, 2800, 900) // le ciel blanchit
await moveTo(0.72, 2800, 1100) // « C'est ton avion. »
await moveTo(0.83, 3000, 900) // bascule vers l'aile
await moveTo(0.89, 2200, 1400) // les questions
await moveTo(0.97, 2000, 1500) // AERO//LAB

// ---- LA SUITE DE LA PAGE ----
const introEnd = await page.evaluate(() => {
  const intro = document.querySelector('.intro')
  return intro ? intro.offsetHeight - innerHeight : 0
})
await moveTo(introEnd + 260, 1800, 1200) // les 4 axes
await moveTo(introEnd + 1100, 2200, 1000)
await moveTo(introEnd + 1900, 2200, 1000)
await moveTo(introEnd + 2900, 2200, 1200) // laboratoires
await page.evaluate(() => scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(2600) // page finale

// ---- LE COURS ET SES SIMULATIONS ----
await page.evaluate(() => (location.hash = '#/cours/bia/bia-aero-portance'))
await page.waitForTimeout(2600)
await moveTo(1150, 1800, 900)

// On fait varier l'incidence jusqu'au décrochage, sous les yeux du spectateur.
const slider = page.locator('input[type=range]').first()
await slider.scrollIntoViewIfNeeded()
await page.waitForTimeout(900)
for (const v of [2, 5, 8, 11, 13, 15, 17, 19, 21, 16, 10, 6]) {
  await slider.evaluate((el, val) => {
    const set = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    ).set
    set.call(el, String(val))
    el.dispatchEvent(new Event('input', { bubbles: true }))
  }, v)
  await page.waitForTimeout(340)
}
await page.waitForTimeout(1000)

// ---- COCKPIT LAB ----
await page.evaluate(() => (location.hash = '#/lab/cockpit'))
await page.waitForTimeout(2200)
const spots = page.locator('.hotspot')
for (let i = 0; i < 4; i++) {
  await spots.nth(i).click()
  await page.waitForTimeout(1300)
}

// ---- VUE ÉCLATÉE ----
await page.evaluate(() => (location.hash = '#/lab/aircraft'))
await page.waitForTimeout(3200)
const ex = page.locator('#explode')
for (const v of [0.05, 0.3, 0.6, 0.9]) {
  await ex.evaluate((el, val) => {
    const set = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    ).set
    set.call(el, String(val))
    el.dispatchEvent(new Event('input', { bubbles: true }))
  }, v)
  await page.waitForTimeout(900)
}
await page.waitForTimeout(1800)

await ctx.close()
await browser.close()
server.close()

// Playwright nomme la vidéo au hasard : on lui donne un nom lisible.
const made = fs.readdirSync(OUT).filter((f) => f.endsWith('.webm'))
const dest = path.join(OUT, 'aerolab.webm')
if (made.length) {
  if (fs.existsSync(dest)) fs.unlinkSync(dest)
  fs.renameSync(path.join(OUT, made[0]), dest)
  const mb = (fs.statSync(dest).size / 1024 / 1024).toFixed(1)
  console.log(`· ${dest} — ${mb} Mo`)
} else {
  console.error('aucune vidéo produite')
  process.exit(1)
}
