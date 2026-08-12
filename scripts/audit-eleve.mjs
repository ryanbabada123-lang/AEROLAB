/**
 * AUDIT DE L'ESPACE ÉLÈVE, CARNET REMPLI.
 *
 * `audit-responsive.mjs` visite le site avec un navigateur neuf : le carnet
 * est vide, et toutes les pages de l'espace élève affichent leur état vide.
 * Autrement dit, la mise en page RÉELLE — celle que verra quelqu'un qui a
 * travaillé — n'était vérifiée nulle part. Les listes d'erreurs, les jauges
 * remplies, l'historique groupé par jour n'avaient jamais été rendus.
 *
 * Ce script sème un carnet plausible dans `localStorage` avant de charger
 * les pages, puis applique les mêmes contrôles : débordement horizontal,
 * plancher de police, taille des cibles tactiles, erreurs JavaScript. Il
 * enregistre aussi une capture par page, pour un regard humain.
 *
 * LES DONNÉES SEMÉES SONT FICTIVES et n'entrent jamais dans le site : elles
 * ne vivent que dans le profil de navigateur jetable ouvert ici.
 *
 * UN PIÈGE CONNU DES CAPTURES. Les bandes claires en bas des images en pleine
 * hauteur sont un artefact de l'assemblage : `fullPage` photographie la page
 * par tuiles, et les cartes en `backdrop-filter` ne se repeignent pas sur la
 * dernière. Vérifié à la loupe — au vrai défilement, le fond reste sombre
 * jusqu'en bas. Ne pas corriger un fond qui n'a rien.
 *
 * USAGE
 *     npx vite --port 5199 &
 *     node scripts/audit-eleve.mjs
 */

import { chromium } from 'playwright'
import fs from 'node:fs'

const RACINE = 'http://localhost:5199'
const SORTIE = 'tmp/audit-eleve'

const JOUR = 86_400_000
const now = Date.now()
/* Même convention que `src/lib/progress.ts` : la date LOCALE, pas UTC. */
const jour = (t) => {
  const d = new Date(t)
  const deux = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${deux(d.getMonth() + 1)}-${deux(d.getDate())}`
}

/* Un carnet d'élève à mi-parcours : des chapitres finis, des QCM tentés
   plusieurs fois avec des ratés qui persistent, des favoris, une série de
   révision en cours, et un objectif déjà dépassé. */
const CARNET = {
  version: 2,
  completed: ['bia-meteo', 'bia-aeromedecine', 'bia-aero-portance'],
  bookmarks: { 'bia-aeronefs': 'structure' },
  labs: ['lift-airfoil'],
  attempts: [
    {
      quizId: 'bia-aero-portance-q1',
      courseId: 'bia-aero-portance',
      missed: ['q2', 'q4', 'q5'],
      correct: 3,
      total: 6,
      at: now - 9 * JOUR,
    },
    {
      quizId: 'bia-aero-portance-q1',
      courseId: 'bia-aero-portance',
      missed: ['q4'],
      correct: 5,
      total: 6,
      at: now - 2 * JOUR,
    },
  ],
  studyMs: 4 * 3600_000 + 25 * 60_000,
  startedAt: now - 30 * JOUR,
  favoris: ['cours:bia-aeromedecine', 'cours:bia-anglais', 'cours:disparu'],
  historique: [
    {
      ref: 'cours:bia-aeronefs',
      titre: 'Étude des aéronefs',
      to: '/cours/bia/bia-aeronefs',
      at: now - 3600_000,
    },
    {
      ref: 'cours:bia-aeromedecine',
      titre: 'Aéromédecine et facteurs humains',
      to: '/cours/bia/bia-aeromedecine',
      at: now - 5 * 3600_000,
    },
    {
      ref: 'cours:bia-anglais',
      titre: 'Anglais aéronautique',
      to: '/cours/bia/bia-anglais',
      at: now - JOUR - 3600_000,
    },
    {
      ref: 'cours:bia-aero-portance',
      titre: 'La portance',
      to: '/cours/bia/bia-aero-portance',
      at: now - 2 * JOUR,
    },
  ],
  lecons: {},
  objectifs: [
    {
      id: 'obj-a',
      intitule: 'Terminer 6 chapitres',
      mesure: 'cours',
      cible: 6,
      creeLe: now - 20 * JOUR,
      echeance: now + 20 * JOUR,
    },
    {
      id: 'obj-b',
      intitule: 'Répondre à 5 questions',
      mesure: 'qcm',
      cible: 5,
      creeLe: now - 10 * JOUR,
    },
  ],
  jours: [0, 1, 2, 4, 5, 6, 9].map((d) => jour(now - d * JOUR)),
}

/* `version: 1` est indispensable : `student.ts` rejette tout profil qui ne la
   porte pas et repart d'un profil vide. Sans elle, l'audit photographiait le
   formulaire d'inscription en croyant photographier le tableau de bord. */
const PROFIL = {
  version: 1,
  name: 'Élève de démonstration',
  goal: 'bia',
  examDate: new Date(now + 45 * JOUR).toISOString().slice(0, 10),
  createdAt: now - 30 * JOUR,
}

const ROUTES = [
  ['/espace-eleve', 'tableau-de-bord'],
  ['/espace-eleve/qcm', 'qcm'],
  ['/espace-eleve/erreurs', 'erreurs'],
  ['/espace-eleve/favoris', 'favoris'],
  ['/espace-eleve/historique', 'historique'],
  ['/espace-eleve/niveau', 'niveau'],
  ['/espace-eleve/objectifs', 'objectifs'],
]

const VIEWPORTS = [
  ['iphone', 390, 844, true],
  ['pc', 1440, 900, false],
]

fs.mkdirSync(SORTIE, { recursive: true })

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' })
let defauts = 0

for (const [nom, w, h, touch] of VIEWPORTS) {
  const ctx = await b.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: 2,
    isMobile: touch,
    hasTouch: touch,
  })

  /* Le carnet doit exister AVANT le premier script de la page : `progress.ts`
     lit `localStorage` au chargement du module, une seule fois. */
  await ctx.addInitScript(
    ([carnet, profil]) => {
      localStorage.setItem('aerolab.flightlog.v1', carnet)
      localStorage.setItem('aerolab.student.v1', profil)
    },
    [JSON.stringify(CARNET), JSON.stringify(PROFIL)],
  )

  for (const [route, slug] of ROUTES) {
    /*
      UN ONGLET NEUF PAR PAGE, ET CE N'EST PAS UNE PRÉCAUTION GRATUITE.
      Une capture `fullPage` redimensionne le viewport par en dessous pour
      photographier toute la hauteur, et Chromium ne restaure pas l'émulation
      tactile derrière lui : dès la deuxième page du même onglet,
      `(pointer: coarse)` répondait faux, tout le confort tactile de
      `mobile.css` cessait de s'appliquer, et l'audit signalait des cibles
      trop petites qui, sur un vrai téléphone, font bien 44 pixels. Un audit
      qui invente des défauts est aussi nuisible qu'un audit qui en rate.
    */
    const p = await ctx.newPage()
    const errs = []
    p.removeAllListeners('pageerror')
    p.removeAllListeners('console')
    p.on('pageerror', (e) => errs.push('JS: ' + e.message))
    p.on('console', (m) => {
      if (m.type() === 'error') errs.push('C: ' + m.text().slice(0, 120))
    })

    await p.goto(RACINE + route, { waitUntil: 'networkidle', timeout: 20000 })
    await p.waitForTimeout(700)

    const r = await p.evaluate((vw) => {
      const de = document.documentElement
      const over = []
      for (const el of document.querySelectorAll('body *')) {
        const b = el.getBoundingClientRect()
        if (b.width === 0 || b.height === 0) continue
        if (b.right > vw + 1.5 || b.left < -1.5) {
          const cs = getComputedStyle(el)
          if (cs.position === 'fixed' && cs.visibility === 'hidden') continue
          const cls =
            typeof el.className === 'string' ? el.className.split(' ')[0] : ''
          over.push(`${el.tagName.toLowerCase()}.${cls}`)
        }
      }

      let mini = 99
      for (const el of document.querySelectorAll('p, li, td, span, a, small')) {
        if (!el.textContent.trim()) continue
        if (el.getBoundingClientRect().width === 0) continue
        mini = Math.min(mini, parseFloat(getComputedStyle(el).fontSize))
      }

      const petites = []
      for (const el of document.querySelectorAll('a, button, input, select')) {
        const b = el.getBoundingClientRect()
        if (b.width === 0 || b.height === 0) continue
        if (b.height < 36 || b.width < 30) {
          petites.push(
            `${el.tagName.toLowerCase()}"${(el.textContent || '').trim().slice(0, 18)}" ${Math.round(b.width)}x${Math.round(b.height)}`,
          )
        }
      }

      /* Le carnet est-il bien pris en compte ? Une page qui affiche encore
         son état vide alors qu'on a semé des données signale une graine
         qui n'a pas pris — et ferait passer l'audit pour vert à tort. */
      const vide =
        /Tu n.as encore|Aucun favori|Rien encore|aucun objectif/i.test(
          document.body.innerText,
        ) ||
        /* Le formulaire d'inscription en lieu et place du tableau de bord :
           le profil semé n'a pas été reconnu. */
        !!document.querySelector('.field--choices')

      return {
        vide,
        /* Témoin d'émulation : si le navigateur ne se déclare plus tactile,
           les mesures de cibles qui suivent ne veulent plus rien dire. */
        tactile: matchMedia('(pointer: coarse)').matches,
        scrollW: de.scrollWidth,
        clientW: de.clientWidth,
        over: [...new Set(over)].slice(0, 6),
        mini,
        petites: [...new Set(petites)].slice(0, 6),
      }
    }, w)

    await p.screenshot({
      path: `${SORTIE}/${nom}-${slug}.png`,
      fullPage: true,
    })

    const flags = []
    if (touch && !r.tactile) flags.push('ÉMULATION TACTILE PERDUE — mesures nulles')
    if (r.scrollW > r.clientW + 1) flags.push(`DÉBORDE ${r.scrollW}>${r.clientW}`)
    if (r.over.length) flags.push('hors-cadre: ' + r.over.join(' | '))
    if (touch && r.mini < 12) flags.push(`police ${r.mini}px`)
    if (touch && r.petites.length) flags.push('cibles: ' + r.petites.join(' | '))
    if (r.vide) flags.push('ÉTAT VIDE alors que le carnet est rempli')
    if (errs.length) flags.push('ERR ' + errs.slice(0, 2).join(' | '))

    if (flags.length) defauts++
    console.log(
      `${nom.padEnd(8)} ${slug.padEnd(16)} ${flags.length ? flags.join('  ///  ') : 'ok'}`,
    )
    await p.close()
  }

  await ctx.close()
}

await b.close()
console.log(`\nCaptures dans ${SORTIE}/. ${defauts} page(s) à reprendre.`)
process.exit(defauts ? 1 : 0)
