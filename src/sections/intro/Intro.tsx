import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import { BEATS, INTRO, QUESTIONS, type Beat } from './timeline'
import { scrollDriver } from '@/lib/scroll'
import { useScrollBeat } from '@/hooks/useScrollBeat'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { getDeviceProfile } from '@/lib/device'
import { clamp, ramp, window4 } from '@/lib/math'

/**
 * Le moteur 3D (~240 ko compressés) est chargé à part : la première
 * phrase s'affiche immédiatement, la scène arrive derrière. Sur une
 * connexion moyenne — cas d'une démo en salle — c'est la différence entre
 * une ouverture instantanée et une attente.
 */
const Stage = lazy(() => import('./Stage'))

/**
 * INTRODUCTION IMMERSIVE (§04 → §09).
 *
 * Une longue zone scrollable ; la scène 3D et le texte sont fixes par-dessus
 * et se transforment au fil de la progression. Le scroll reste natif — donc
 * exact sur trackpad, molette, clavier et tactile iOS.
 */

/* ------------------------------------------------------------ TEMPS FORT */

function BeatLine({ beat }: { beat: Beat }) {
  const ref = useScrollBeat(...beat.at, {
    rise: beat.kind === 'hero' ? 40 : 24,
    blur: beat.kind === 'hero',
  })
  // L'encre suit le ciel : claire sur le noir d'ouverture, sombre une fois
  // que la scène a blanchi (§51.1 + contraste §35).
  const ink = beat.at[1] > INTRO.skyTurnsWhite ? 'dark' : 'light'

  return (
    <div ref={ref} className="beat" data-kind={beat.kind} data-ink={ink}>
      <p>{beat.text}</p>
    </div>
  )
}

/* ----------------------------------------------- INSTRUMENTS DU COCKPIT */

const SYSTEMS = ['Master', 'Engine', 'Avionics'] as const

function CockpitReadout() {
  const wrap = useRef<HTMLDivElement>(null)
  const sysRefs = useRef<(HTMLLIElement | null)[]>([])
  const altRef = useRef<HTMLSpanElement>(null)
  const iasRef = useRef<HTMLSpanElement>(null)
  const hdgRef = useRef<HTMLSpanElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return scrollDriver.subscribe((p) => {
      const el = wrap.current
      if (!el) return

      const vis = window4(p, 0.325, 0.352, 0.432, 0.462)
      el.style.opacity = String(vis)
      el.style.visibility = vis < 0.01 ? 'hidden' : 'visible'
      if (vis < 0.01) return

      // Les systèmes s'arment l'un après l'autre.
      for (let i = 0; i < SYSTEMS.length; i++) {
        const li = sysRefs.current[i]
        if (!li) continue
        const on = p > 0.345 + i * 0.022
        const state = on ? 'on' : 'off'
        if (li.dataset.state !== state) li.dataset.state = state
      }

      // Puis les indications de base, avion au sol, moteur au ralenti.
      const dataOn = ramp(p, 0.392, 0.412)
      if (dataRef.current) dataRef.current.style.opacity = String(dataOn)

      if (altRef.current) altRef.current.textContent = '0000'
      if (iasRef.current) iasRef.current.textContent = '000'
      if (hdgRef.current) hdgRef.current.textContent = '090'
    })
  }, [])

  return (
    <div ref={wrap} className="hud" aria-hidden="true">
      <ul className="hud__systems">
        {SYSTEMS.map((s, i) => (
          <li
            key={s}
            data-state="off"
            ref={(el) => {
              sysRefs.current[i] = el
            }}
          >
            <i />
            {s}
          </li>
        ))}
      </ul>

      <div className="hud__data" ref={dataRef}>
        <div>
          <span className="u-label">ALT</span>
          <b className="u-mono" ref={altRef}>
            0000
          </b>
          <em>FT</em>
        </div>
        <div>
          <span className="u-label">IAS</span>
          <b className="u-mono" ref={iasRef}>
            000
          </b>
          <em>KT</em>
        </div>
        <div>
          <span className="u-label">HDG</span>
          <b className="u-mono" ref={hdgRef}>
            090
          </b>
          <em>°</em>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------- BANDEAU MONTÉE */

/** Pendant la montée, les paramètres évoluent — visualisation, pas donnée réelle. */
function ClimbStrip() {
  const wrap = useRef<HTMLDivElement>(null)
  const alt = useRef<HTMLBRElement | HTMLSpanElement>(null)
  const ias = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    return scrollDriver.subscribe((p) => {
      const el = wrap.current
      if (!el) return
      const vis = window4(p, 0.478, 0.512, 0.615, 0.66)
      el.style.opacity = String(vis)
      el.style.visibility = vis < 0.01 ? 'hidden' : 'visible'
      if (vis < 0.01) return

      const t = clamp((p - 0.47) / 0.16)
      if (alt.current) {
        alt.current.textContent = String(Math.round(t * 4500))
          .padStart(4, '0')
      }
      if (ias.current) {
        ias.current.textContent = String(Math.round(58 + t * 34)).padStart(3, '0')
      }
    })
  }, [])

  return (
    <div ref={wrap} className="climb" aria-hidden="true">
      <div>
        <span className="u-label">ALT</span>
        <b className="u-mono" ref={alt as React.RefObject<HTMLSpanElement>}>
          0000
        </b>
        <em>FT</em>
      </div>
      <div>
        <span className="u-label">IAS</span>
        <b className="u-mono" ref={ias}>
          058
        </b>
        <em>KT</em>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ QUESTIONS */

function Questions() {
  const wrap = useRef<HTMLUListElement>(null)
  const items = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    return scrollDriver.subscribe((p) => {
      const el = wrap.current
      if (!el) return
      // Les questions libèrent le cadre AVANT l'apparition de la marque :
      // les deux ne doivent jamais se superposer.
      const vis = window4(p, 0.85, 0.878, 0.902, 0.925)
      el.style.opacity = String(vis)
      el.style.visibility = vis < 0.01 ? 'hidden' : 'visible'
      if (vis < 0.01) return

      for (let i = 0; i < QUESTIONS.length; i++) {
        const li = items.current[i]
        if (!li) continue
        const o = ramp(p, 0.858 + i * 0.004, 0.872 + i * 0.004)
        li.style.opacity = String(o)
        li.style.transform = `translate3d(${((1 - o) * 14).toFixed(1)}px,0,0)`
      }
    })
  }, [])

  return (
    <ul ref={wrap} className="questions">
      {QUESTIONS.map((q, i) => (
        <li
          key={q}
          ref={(el) => {
            items.current[i] = el
          }}
        >
          <span className="u-label">{String(i + 1).padStart(2, '0')}</span>
          {q}
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------- CHAPITRE */

const CHAPTERS: { at: number; id: string; label: string }[] = [
  { at: 0.0, id: '01', label: 'Le rêve' },
  { at: 0.13, id: '02', label: 'La machine' },
  { at: 0.31, id: '03', label: 'Le cockpit' },
  { at: 0.47, id: '04', label: 'Le décollage' },
  { at: 0.6, id: '05', label: 'Le ciel' },
  { at: 0.76, id: '06', label: 'Comprendre' },
]

function ChapterMark() {
  const idRef = useRef<HTMLSpanElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let current = -1
    return scrollDriver.subscribe((p) => {
      if (wrap.current) {
        const vis = window4(p, 0.1, 0.14, 0.95, 0.99)
        wrap.current.style.opacity = String(vis * 0.9)
      }
      if (barRef.current) barRef.current.style.transform = `scaleY(${p})`

      let idx = 0
      for (let i = 0; i < CHAPTERS.length; i++) if (p >= CHAPTERS[i].at) idx = i
      if (idx === current) return
      current = idx
      if (idRef.current) idRef.current.textContent = CHAPTERS[idx].id
      if (labelRef.current) labelRef.current.textContent = CHAPTERS[idx].label
    })
  }, [])

  return (
    <div className="chapter" ref={wrap} aria-hidden="true">
      <span className="chapter__track">
        <span className="chapter__bar" ref={barRef} />
      </span>
      <span className="chapter__id u-mono" ref={idRef}>
        01
      </span>
      <span className="chapter__label" ref={labelRef}>
        Le rêve
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ VUE */

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hintRef = useScrollBeat(-0.02, -0.002, 0.018, 0.036, { rise: 8 })
  const welcomeRef = useScrollBeat(0.928, 0.955, 0.998, 1.0, {
    rise: 30,
    blur: true,
  })
  const [active, setActive] = useState(true)
  const reduced = useReducedMotion()
  const [webgl] = useState(() => getDeviceProfile().webgl)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    return scrollDriver.attach(el)
  }, [])

  // Le rendu 3D s'arrête dès que l'intro quitte l'écran (§34).
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="intro"
      style={{ height: `${INTRO.lengthVh}vh` }}
    >
      <div className="intro__viewport">
        {webgl ? (
          <ErrorBoundary quiet>
            <Suspense
              fallback={
                <div className="intro-stage intro-stage--fallback" aria-hidden="true" />
              }
            >
              <Stage active={active} reduced={reduced} />
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="intro-stage intro-stage--fallback" aria-hidden="true" />
        )}

        <div className="intro__text">
          {BEATS.map((b) => (
            <BeatLine key={b.id} beat={b} />
          ))}

          <div ref={welcomeRef} className="beat beat--welcome" data-kind="hero">
            <p className="u-label">Bienvenue dans</p>
            <p className="welcome-mark">
              AERO<span>//</span>LAB
            </p>
          </div>
        </div>

        <CockpitReadout />
        <ClimbStrip />
        <Questions />
        <ChapterMark />

        <div ref={hintRef} className="scroll-hint">
          <span className="u-label">Scroll to begin</span>
          <span className="scroll-hint__line" />
        </div>
      </div>

      {/* Équivalent textuel de la séquence : l'expérience 3D n'est jamais
          le seul chemin vers l'information (§35). */}
      <p className="u-sr">
        Séquence d'introduction : un avion apparaît au loin, la caméra le
        rejoint, entre dans le cockpit dont les instruments s'allument, puis
        l'appareil décolle et monte dans les nuages. La scène se transforme
        ensuite en profil d'aile parcouru par un écoulement d'air, introduisant
        les questions auxquelles la plateforme répond. Le contenu complet est
        accessible plus bas dans la page et par le menu.
      </p>
    </div>
  )
}
