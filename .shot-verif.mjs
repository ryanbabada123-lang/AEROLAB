import { chromium } from 'playwright'
const ids = process.argv.slice(3), set = process.argv[2]
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await b.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 2 })
p.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text()) })
await p.goto(`http://localhost:5199/verification/${set}`, { waitUntil: 'networkidle' })
for (const id of ids) {
  const row = p.locator(`#${id}`)
  await row.scrollIntoViewIfNeeded(); await p.waitForTimeout(500)
  await row.locator('.vf-pair').screenshot({ path: `/tmp/claude-0/-home-user-AEROLAB/caeff7d3-869c-56ab-bdeb-3e570e8ce733/scratchpad/${id}.png` })
}
await b.close()
