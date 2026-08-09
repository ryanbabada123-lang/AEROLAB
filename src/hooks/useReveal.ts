import { useEffect, useRef } from 'react'

/**
 * Révélation à l'entrée dans le viewport, via IntersectionObserver.
 * Utilisé hors intro (pages de cours, listes, timeline) : léger, et
 * respecte prefers-reduced-motion en affichant immédiatement.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; stagger?: number; once?: boolean } = {},
) {
  const ref = useRef<T>(null)
  const { threshold = 0.18, stagger = 0, once = true } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.dataset.revealed = 'true'
      return
    }

    if (stagger) el.style.transitionDelay = `${stagger}ms`

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.dataset.revealed = 'true'
            if (once) io.unobserve(el)
          } else if (!once) {
            el.dataset.revealed = 'false'
          }
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, stagger, once])

  return ref
}
