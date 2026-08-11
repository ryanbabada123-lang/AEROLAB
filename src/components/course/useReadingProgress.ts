import { useEffect, useState } from 'react'

/**
 * Progression de lecture d'un article, en 0 → 1.
 *
 * Mesurée sur l'élément lui-même et non sur la page : l'entête, le sommaire
 * et le pied ne comptent pas comme du cours lu. La valeur est arrondie au
 * demi-pour-cent avant d'être posée dans l'état, sinon on rend à chaque
 * pixel de molette pour rien.
 */
export function useReadingProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const measure = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const span = rect.height - window.innerHeight
      if (span <= 0) {
        setProgress(rect.bottom <= window.innerHeight ? 1 : 0)
        return
      }
      const p = Math.min(1, Math.max(0, -rect.top / span))
      setProgress((prev) => (Math.abs(prev - p) < 0.005 ? prev : p))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])

  return progress
}

/**
 * Section actuellement lue, pour le sommaire et le rail.
 *
 * Les pages de cours sont chargées en différé et les schémas SVG changent
 * la hauteur des sections en se montant : l'observer est reposé quand la
 * liste d'identifiants change, et une mesure directe sert de repli au
 * premier rendu, avant toute intersection.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    if (ids.length === 0) return
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => !!n)
    if (nodes.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-12% 0px -72% 0px', threshold: 0 },
    )
    for (const n of nodes) io.observe(n)
    return () => io.disconnect()
  }, [ids.join('|')]) // eslint-disable-line react-hooks/exhaustive-deps

  return active
}
