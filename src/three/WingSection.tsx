import { useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P3 } from './palette'
import { clamp, lerp } from '@/lib/math'
import { nacaOutline, parseNaca } from '@/lib/airfoil'

/**
 * PROFIL D'AILE + ÉCOULEMENT (§08 / §27).
 *
 * Le fuselage se dissout et laisse ce qu'il y a dessous : un profil, un
 * flux, des vecteurs. La géométrie du profil vient de la définition NACA
 * (voir lib/airfoil.ts) — c'est un vrai profil, pas une forme dessinée à
 * la main.
 */

export interface WingSectionProps {
  /** 0 → 1 : apparition. */
  getReveal?: () => number
  /** Incidence en degrés, lue chaque frame. */
  getAlpha?: () => number
  density?: number
  code?: string
}

const STREAM_COUNT = 13

export default function WingSection({
  getReveal,
  getAlpha,
  density = 1,
  code = '2412',
  ...groupProps
}: WingSectionProps & React.ComponentProps<'group'>) {
  const group = useRef<THREE.Group>(null)
  const wingRef = useRef<THREE.Group>(null)
  const samples = Math.max(28, Math.round(80 * density))

  /** Extrusion du profil NACA en volume mince. */
  const geometry = useMemo(() => {
    const pts = nacaOutline(parseNaca(code), samples)
    const shape = new THREE.Shape()
    // Corde ramenée à 4 unités, bord d'attaque centré sur l'origine.
    const S = 4
    shape.moveTo((pts[0].x - 0.35) * S, pts[0].y * S)
    for (let i = 1; i < pts.length; i++) {
      shape.lineTo((pts[i].x - 0.35) * S, pts[i].y * S)
    }
    shape.closePath()

    const g = new THREE.ExtrudeGeometry(shape, {
      depth: 3.4,
      bevelEnabled: false,
      curveSegments: 4,
    })
    g.center()
    return g
  }, [code, samples])

  const wingMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: P3.snow,
        metalness: 0.1,
        roughness: 0.55,
        transparent: true,
        opacity: 0,
      }),
    [],
  )

  const edgeMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: P3.graphite,
        transparent: true,
        opacity: 0,
      }),
    [],
  )

  const edges = useMemo(() => new THREE.EdgesGeometry(geometry, 24), [geometry])

  /** Filets d'air : des lignes qui contournent le profil. */
  const streams = useMemo(() => {
    const list: {
      geo: THREE.BufferGeometry
      mat: THREE.LineBasicMaterial
      line: THREE.Line
      offset: number
    }[] = []
    const pointsPerLine = Math.max(24, Math.round(56 * density))

    for (let s = 0; s < STREAM_COUNT; s++) {
      const y0 = -1.9 + (s / (STREAM_COUNT - 1)) * 3.8
      const pos = new Float32Array(pointsPerLine * 3)
      for (let i = 0; i < pointsPerLine; i++) {
        const t = i / (pointsPerLine - 1)
        const x = -7 + t * 14
        pos[i * 3] = x
        pos[i * 3 + 1] = y0
        pos[i * 3 + 2] = 0
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const mat = new THREE.LineBasicMaterial({
        color: s === Math.floor(STREAM_COUNT / 2) ? P3.electric : P3.graphite,
        transparent: true,
        opacity: 0,
      })
      list.push({ geo, mat, line: new THREE.Line(geo, mat), offset: y0 })
    }
    return list
  }, [density])

  useLayoutEffect(
    () => () => {
      geometry.dispose()
      edges.dispose()
      wingMat.dispose()
      edgeMat.dispose()
      for (const s of streams) {
        s.geo.dispose()
        s.mat.dispose()
      }
    },
    [geometry, edges, wingMat, edgeMat, streams],
  )

  useFrame((state) => {
    const reveal = getReveal ? clamp(getReveal()) : 1
    const alpha = getAlpha ? getAlpha() : 4

    if (group.current) group.current.visible = reveal > 0.01
    if (reveal <= 0.01) return

    wingMat.opacity = reveal * 0.96
    edgeMat.opacity = reveal * 0.5

    if (wingRef.current) {
      // Incidence : on fait tourner le profil, pas le vent.
      wingRef.current.rotation.z = THREE.MathUtils.degToRad(alpha)
      wingRef.current.scale.setScalar(lerp(0.86, 1, reveal))
    }

    // Déformation des filets d'air autour du profil. Modèle qualitatif :
    // resserrement et accélération à l'extrados, écartement à l'intrados.
    const t = state.clock.elapsedTime
    const aRad = THREE.MathUtils.degToRad(alpha)

    for (let s = 0; s < streams.length; s++) {
      const { geo, mat, offset } = streams[s]
      // Les filets proches du profil portent l'information : ce sont eux
      // qu'on appuie, les autres restent en arrière-plan.
      mat.opacity = reveal * (Math.abs(offset) < 1.6 ? 0.85 : 0.26)

      const arr = geo.getAttribute('position') as THREE.BufferAttribute
      const n = arr.count
      for (let i = 0; i < n; i++) {
        const tt = i / (n - 1)
        const x = -7 + tt * 14

        // Influence du profil : maximale au-dessus de la corde, nulle loin.
        const near = Math.exp(-Math.pow(x / 3.1, 2))
        const vertical = Math.exp(-Math.pow(offset / 1.5, 2))
        const infl = near * vertical

        const above = offset > 0 ? 1 : -1
        // L'extrados dévie plus que l'intrados : c'est là que naît l'essentiel
        // de la dépression.
        const bend = above > 0 ? 0.78 : 0.42
        const y =
          offset +
          infl * above * bend * (0.35 + aRad * 1.9) +
          // Déflexion aval : le sillage repart vers le bas.
          Math.max(0, (x - 1) / 6) * -aRad * 1.5 * vertical +
          Math.sin(t * 1.6 + x * 0.7 + s) * 0.012

        arr.setXYZ(i, x, y, 0)
      }
      arr.needsUpdate = true
    }
  })

  return (
    <group ref={group} {...groupProps}>
      <group ref={wingRef}>
        <mesh geometry={geometry} material={wingMat} />
        <lineSegments geometry={edges} material={edgeMat} />
      </group>
      {streams.map((s, i) => (
        <primitive key={i} object={s.line} />
      ))}
    </group>
  )
}
