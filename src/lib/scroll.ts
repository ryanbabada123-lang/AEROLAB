import { clamp, damp } from './math'

/**
 * Pilote de scroll central (§29).
 *
 * Une seule source de vérité pour la progression narrative de l'intro.
 * Le DOM scrolle normalement (natif, donc parfait sur iOS Safari) ; on en
 * extrait une valeur normalisée 0→1, lissée, que la scène WebGL et les
 * couches de texte lisent chacune de leur côté. Aucun scroll-jacking.
 */

type Listener = (progress: number, velocity: number) => void

class ScrollDriver {
  /** Progression brute 0→1 sur la zone narrative. */
  raw = 0
  /** Progression lissée — c'est celle que lisent les scènes. */
  smooth = 0
  /** Vitesse instantanée, utilisée pour les effets de traînée. */
  velocity = 0

  private el: HTMLElement | null = null
  private listeners = new Set<Listener>()
  private rafId = 0
  private running = false
  private lastT = 0
  private lastSmooth = 0
  private reduced = false

  attach(el: HTMLElement) {
    this.el = el
    this.reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.measure()
    window.addEventListener('scroll', this.measure, { passive: true })
    window.addEventListener('resize', this.measure, { passive: true })
    this.start()
    return () => this.detach()
  }

  private detach() {
    window.removeEventListener('scroll', this.measure)
    window.removeEventListener('resize', this.measure)
    cancelAnimationFrame(this.rafId)
    this.running = false
    this.el = null
    this.listeners.clear()
  }

  private measure = () => {
    if (!this.el) return
    const rect = this.el.getBoundingClientRect()
    const total = rect.height - window.innerHeight
    this.raw = total > 0 ? clamp(-rect.top / total) : 0
  }

  private start() {
    if (this.running) return
    this.running = true
    this.lastT = performance.now()
    const loop = (t: number) => {
      const dt = Math.min((t - this.lastT) / 1000, 1 / 20)
      this.lastT = t

      // En reduced-motion on colle à la valeur brute : pas d'inertie.
      this.smooth = this.reduced ? this.raw : damp(this.smooth, this.raw, 7, dt)
      this.velocity = dt > 0 ? (this.smooth - this.lastSmooth) / dt : 0
      this.lastSmooth = this.smooth

      for (const fn of this.listeners) fn(this.smooth, this.velocity)
      this.rafId = requestAnimationFrame(loop)
    }
    this.rafId = requestAnimationFrame(loop)
  }

  subscribe(fn: Listener) {
    this.listeners.add(fn)
    return () => {
      this.listeners.delete(fn)
    }
  }
}

export const scrollDriver = new ScrollDriver()
