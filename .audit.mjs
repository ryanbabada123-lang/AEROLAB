import { chromium } from 'playwright'

const ROUTES = [
  ['/', 'accueil'],
  ['/formation/bia', 'formation-bia'],
  ['/formation/ppl', 'formation-ppl'],
  ['/cours/bia/bia-meteorologie', 'cours-meteo'],
  ['/cours/bia/bia-aeromedecine', 'cours-aeromed'],
  ['/cours/bia/bia-anglais', 'cours-anglais'],
  ['/journey', 'journey'],
  ['/lab', 'lab'],
  ['/lab/cockpit', 'lab-cockpit'],
  ['/lab/aircraft', 'lab-aircraft'],
  ['/logbook', 'logbook'],
  ['/espace-eleve', 'espace-eleve'],
  ['/verification/aeromedecine', 'verif'],
  ['/nimporte-quoi', '404'],
]
const VIEWPORTS = [
  ['iphone', 390, 844, true],
  ['tablette', 820, 1180, true],
  ['pc', 1440, 900, false],
]

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
for (const [nom, w, h, touch] of VIEWPORTS) {
  const ctx = await b.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 2,
    isMobile: touch,
    hasTouch: touch,
    userAgent: touch
      ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
      : undefined,
  })
  const p = await ctx.newPage()
  for (const [route, slug] of ROUTES) {
    const errs = []
    p.removeAllListeners('pageerror'); p.removeAllListeners('console')
    p.on('pageerror', (e) => errs.push('JS: ' + e.message))
    p.on('console', (m) => { if (m.type() === 'error') errs.push('C: ' + m.text().slice(0, 120)) })
    try {
      await p.goto('http://localhost:5199' + route, { waitUntil: 'networkidle', timeout: 20000 })
    } catch (e) { console.log(`${nom} ${slug} NAV-FAIL ${e.message.slice(0,60)}`); continue }
    await p.waitForTimeout(1200)
    const r = await p.evaluate((vw) => {
      const de = document.documentElement
      const over = []
      for (const el of document.querySelectorAll('body *')) {
        const b = el.getBoundingClientRect()
        if (b.width === 0 || b.height === 0) continue
        if (b.right > vw + 1.5 || b.left < -1.5) {
          const cs = getComputedStyle(el)
          if (cs.position === 'fixed' && cs.visibility === 'hidden') continue
          over.push(`${el.tagName.toLowerCase()}.${(el.className && typeof el.className === 'string' ? el.className.split(' ')[0] : '')} [${Math.round(b.left)}→${Math.round(b.right)}]`)
        }
      }
      // plus petite taille de police visible dans le corps
      let mini = 99
      for (const el of document.querySelectorAll('p, li, td, span, a, small')) {
        if (!el.textContent.trim()) continue
        const b = el.getBoundingClientRect()
        if (b.width === 0) continue
        mini = Math.min(mini, parseFloat(getComputedStyle(el).fontSize))
      }
      // cibles tactiles trop petites
      const petites = []
      for (const el of document.querySelectorAll('a, button, input, [role="button"]')) {
        const b = el.getBoundingClientRect()
        if (b.width === 0 || b.height === 0) continue
        if (b.height < 36 || b.width < 30) petites.push(`${el.tagName.toLowerCase()}"${(el.textContent||'').trim().slice(0,18)}" ${Math.round(b.width)}x${Math.round(b.height)}`)
      }
      // QUI REÇOIT LE DOIGT ? Un calque transparent qui couvre la page
      // n'a ni débordement ni police fautive : seul le test de contact le
      // révèle. On sonde cinq points répartis sur l'écran.
      const voleurs = new Set()
      for (const [px, py] of [[vw / 2, 200], [vw / 2, window.innerHeight / 2], [vw / 2, window.innerHeight - 120], [40, window.innerHeight / 2], [vw - 40, 300]]) {
        const el = document.elementFromPoint(px, py)
        if (!el) continue
        let n = el
        while (n && n !== document.body) {
          const cs = getComputedStyle(n)
          if (parseFloat(cs.opacity) === 0 && cs.pointerEvents !== 'none') {
            voleurs.add(n.tagName.toLowerCase() + '.' + (typeof n.className === 'string' ? n.className.split(' ')[0] : ''))
          }
          n = n.parentElement
        }
      }
      return {
        voleurs: [...voleurs],
        scrollW: de.scrollWidth, clientW: de.clientWidth,
        over: [...new Set(over)].slice(0, 6),
        mini, petites: [...new Set(petites)].slice(0, 5),
      }
    }, w)
    const debord = r.scrollW > r.clientW + 1
    const flags = []
    if (debord) flags.push(`DÉBORDE ${r.scrollW}>${r.clientW}`)
    if (r.over.length) flags.push('hors-cadre: ' + r.over.join(' | '))
    if (touch && r.mini < 12) flags.push(`police ${r.mini}px`)
    if (touch && r.petites.length) flags.push('cibles: ' + r.petites.join(' | '))
    if (r.voleurs?.length) flags.push('CALQUE INVISIBLE CAPTE LE TOUCHER: ' + r.voleurs.join(' | '))
    if (errs.length) flags.push('ERR ' + errs.slice(0, 2).join(' | '))
    console.log(`${nom.padEnd(9)} ${slug.padEnd(16)} ${flags.length ? flags.join('  ///  ') : 'ok'}`)
  }
  await ctx.close()
}
await b.close()
