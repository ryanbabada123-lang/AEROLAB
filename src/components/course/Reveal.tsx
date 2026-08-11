import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Révélation d'un bloc de cours à l'entrée dans le viewport.
 *
 * Le moteur de cours n'asservit PAS le défilement (pas de scroll-jacking) :
 * la page scrolle nativement, et chaque bloc se pose en arrivant. C'est ce
 * qui permet de lire 430 pages sans se battre avec la molette, tout en
 * gardant une progression sensible.
 *
 * `prefers-reduced-motion` court-circuite tout : le bloc naît révélé, il
 * n'y a même pas d'observer posé.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
}: {
  children: ReactNode
  as?: 'div' | 'section' | 'figure' | 'li'
  className?: string
  /** Décalage en ms — sert au léger décalé des listes. */
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.dataset.shown = 'true'
      return
    }

    if (delay) el.style.transitionDelay = `${delay}ms`

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          el.dataset.shown = 'true'
          io.unobserve(el)
        }
      },
      // Le bloc se pose un peu avant d'être au centre : à la lecture, on ne
      // doit jamais voir l'animation démarrer sous les yeux.
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={className ? `cx-reveal ${className}` : 'cx-reveal'}
      data-shown="false"
    >
      {children}
    </Tag>
  )
}
