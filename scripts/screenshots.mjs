import { chromium } from 'playwright'
import fs from 'node:fs'

const base = process.env.BASE_URL || 'http://127.0.0.1:5173'
const OUT = process.argv[2] || './.screenshots'
fs.mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium',
  args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'],
})

const errors = []

async function shoot(name, { width, height, path: url, scrolls = [], deviceScaleFactor = 1, isMobile = false }) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor,
    isMobile,
    hasTouch: isMobile,
  })
  const page = await ctx.newPage()
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`[${name}] console: ${m.text()}`)
  })
  page.on('pageerror', (e) => errors.push(`[${name}] pageerror: ${e.message}`))

  await page.goto(`${base}${url}`, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(1800)

  if (scrolls.length === 0) {
    await page.screenshot({ path: `${OUT}/${name}.png` })
  } else {
    for (const s of scrolls) {
      await page.evaluate((y) => window.scrollTo(0, y), s.y)
      await page.waitForTimeout(s.wait ?? 1400)
      await page.screenshot({ path: `${OUT}/${name}-${s.label}.png` })
    }
  }
  await ctx.close()
}

const H = 900
const introH = 8.6 // lengthVh in screens
// La progression est mesurée sur (hauteur totale - viewport).
const at = (p, vh) => p * (vh * introH - vh)

await shoot('home-desktop', {
  width: 1440,
  height: H,
  path: '/',
  scrolls: [
    { label: '00-dream', y: 0 },
    { label: '01-plane', y: at(1, H) * 0.17 },
    { label: '02-approach', y: at(1, H) * 0.26 },
    { label: '03-cockpit', y: at(1, H) * 0.37 },
    { label: '04-takeoff', y: at(1, H) * 0.5 },
    { label: '05-sky', y: at(1, H) * 0.63 },
    { label: '06-wing', y: at(1, H) * 0.83 },
    { label: '07-questions', y: at(1, H) * 0.91 },
    { label: '08-welcome', y: at(1, H) * 0.985 },
    { label: '09-axes', y: at(1, H) + H + 300 },
    { label: '10-labs', y: at(1, H) + H + 1500 },
    { label: '11-final', y: 99999 },
  ],
})

await shoot('course', { width: 1440, height: H, path: '/cours/bia/bia-aero-portance' })
await shoot('course-mid', {
  width: 1440, height: H, path: '/cours/bia/bia-aero-portance',
  scrolls: [{ label: 'sim', y: 1400 }, { label: 'formula', y: 3200 }, { label: 'quiz', y: 5200 }],
})
await shoot('cockpit', { width: 1440, height: H, path: '/lab/cockpit' })
await shoot('aircraft', { width: 1440, height: H, path: '/lab/aircraft' })
await shoot('journey', { width: 1440, height: H, path: '/journey' })
await shoot('track-bia', { width: 1440, height: H, path: '/formation/bia' })
await shoot('track-ppl', { width: 1440, height: H, path: '/formation/ppl' })
await shoot('logbook', { width: 1440, height: H, path: '/logbook' })
await shoot('labs', { width: 1440, height: H, path: '/lab' })

// iPhone 15 Pro-ish
await shoot('iphone', {
  width: 393, height: 852, deviceScaleFactor: 3, isMobile: true, path: '/',
  scrolls: [
    { label: '00', y: 0 },
    { label: '03-cockpit', y: at(1, 852) * 0.37 },
    { label: '06-wing', y: at(1, 852) * 0.85 },
    { label: '09-axes', y: at(1, 852) + 852 + 200 },
  ],
})
await shoot('iphone-course', { width: 393, height: 852, deviceScaleFactor: 3, isMobile: true, path: '/cours/bia/bia-aero-portance', scrolls: [{ label: 'sim', y: 1500 }] })
await shoot('ipad', { width: 1024, height: 1366, isMobile: true, path: '/' })
await shoot('ipad-cockpit', { width: 1024, height: 1366, isMobile: true, path: '/lab/cockpit' })

await browser.close()
fs.writeFileSync(`${OUT}/errors.txt`, errors.join('\n') || 'NO ERRORS')
console.log(errors.length ? errors.join('\n') : 'NO CONSOLE ERRORS')
