import { useEffect, useRef } from 'react'
import { scrollDriver } from '@/lib/scroll'
import { window4, ramp } from '@/lib/math'

/**
 * Fait apparaître/disparaître un élément DOM en fonction de la progression
 * narrative — en mutant directement le style (pas de setState à 60fps).
 *
 * in / hold / out : bornes de progression 0→1 sur toute l'intro.
 */
export function useScrollBeat(
  inAt: number,
  fullAt: number,
  fadeAt: number,
  outAt: number,
  opts: { rise?: number; blur?: boolean } = {},
) {
  const ref = useRef<HTMLDivElement>(null)
  const rise = opts.rise ?? 26
  const blur = opts.blur ?? false

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let lastO = -1

    return scrollDriver.subscribe((p) => {
      const o = window4(p, inAt, fullAt, fadeAt, outAt)
      if (Math.abs(o - lastO) < 0.002) return
      lastO = o

      const enter = ramp(p, inAt, fullAt)
      const exit = ramp(p, fadeAt, outAt)
      const y = (1 - enter) * rise - exit * rise * 0.85

      el.style.opacity = String(o)
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`
      if (blur) {
        const b = (1 - enter) * 6 + exit * 6
        el.style.filter = b > 0.05 ? `blur(${b.toFixed(2)}px)` : 'none'
      }
      // Un bloc invisible ne doit pas capter le pointeur ni le lecteur d'écran.
      el.style.visibility = o < 0.01 ? 'hidden' : 'visible'
    })
  }, [inAt, fullAt, fadeAt, outAt, rise, blur])

  return ref
}
