/**
 * AUDIT DES LIENS INTERNES.
 *
 * Il ne suffit pas qu'un lien existe : il faut qu'il mène quelque part. Le
 * menu du site annonçait onze destinations dont SEPT tombaient sur la page
 * « cette route n'existe pas » — annales, banque de questions, anglais, PPL
 * théorique, PPL pratique, parcours, à propos. Rien ne le signalait : ni la
 * compilation, ni le rendu, ni l'audit responsive.
 *
 * Ce script visite chaque adresse interne référencée dans le code et
 * regarde si la page rendue est la page d'erreur.
 *
 * USAGE
 *     npx vite --port 5199 &
 *     node scripts/audit-liens.mjs
 */

import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const RACINE = 'http://localhost:5199'

/** Toutes les adresses internes littérales du code source. */
function adresses() {
  const trouve = new Set()
  const parcourir = (dir) => {
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, f.name)
      if (f.isDirectory()) parcourir(p)
      else if (/\.tsx?$/.test(f.name)) {
        const s = fs.readFileSync(p, 'utf8')
        for (const m of s.matchAll(/\b(?:to|href)[=:]\s*['"](\/[^'"$`]*)['"]/g)) {
          trouve.add(m[1])
        }
      }
    }
  }
  parcourir('src')
  return [...trouve].sort()
}

const liste = adresses()
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
const p = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage()

let morts = 0
for (const url of liste) {
  await p.goto(RACINE + url, { waitUntil: 'networkidle' })
  await p.waitForTimeout(450)
  const perdu = await p.evaluate(() =>
    /cette route n.existe pas/i.test(document.body.innerText),
  )
  if (perdu) morts++
  console.log(`${perdu ? '✗ 404' : '  ok '}  ${url}`)
}
console.log(`\n${liste.length} adresses, ${morts} sans destination.`)
await b.close()
process.exit(morts ? 1 : 0)
