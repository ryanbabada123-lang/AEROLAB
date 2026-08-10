import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P3 } from './palette'
import { clamp } from '@/lib/math'
import {
  POSE,
  aileronGeometry,
  bladeGeometry,
  canopyGeometry,
  elevatorGeometry,
  finGeometry,
  flapGeometry,
  fuselageGeometry,
  mainLegGeometry,
  noseLegGeometry,
  rudderGeometry,
  spatGeometry,
  spinnerGeometry,
  stabGeometry,
  wheelGeometry,
  wingGeometry,
} from './tecnam'

/**
 * L'AVION — Tecnam P2008JC (voir tecnam.ts pour le niveau de fidélité).
 *
 * La géométrie est partagée avec la vue éclatée : c'est le même appareil
 * partout sur le site.
 *
 * `getCut` (0 → 1) le dissout pièce par pièce pour la bascule vers le
 * profil d'aile (§08). Piloté en useFrame, jamais par un setState : aucun
 * re-render pendant l'animation.
 */

type Role = 'shell' | 'dark' | 'glass' | 'accent' | 'tyre'

/** Ordre de disparition : 0 part en dernier, 4 en premier. */
const ORDERS = [0, 1, 2, 3, 4] as const

export interface AircraftProps {
  density?: number
  getCut?: () => number
  propSpin?: () => number
}

export default function Aircraft({
  density = 1,
  getCut,
  propSpin,
  ...groupProps
}: AircraftProps & React.ComponentProps<'group'>) {
  const q = Math.max(0.45, density)
  const propRef = useRef<THREE.Group>(null)

  /* ---------------------------------------------------------- géométrie */

  const geo = useMemo(
    () => ({
      fuselage: fuselageGeometry(q),
      wing: wingGeometry(q),
      aileron: aileronGeometry(),
      flap: flapGeometry(),
      canopy: canopyGeometry(q),
      fin: finGeometry(q),
      rudder: rudderGeometry(),
      stab: stabGeometry(q),
      elevator: elevatorGeometry(),
      spinner: spinnerGeometry(q),
      blade: bladeGeometry(),
      legR: mainLegGeometry(1),
      legL: mainLegGeometry(-1),
      noseLeg: noseLegGeometry(),
      wheel: wheelGeometry(0.155, q),
      noseWheel: wheelGeometry(0.125, q),
      spat: spatGeometry(),
    }),
    [q],
  )

  useEffect(() => {
    const g = geo
    return () => {
      for (const item of Object.values(g)) item.dispose()
    }
  }, [geo])

  /* --------------------------------------------------------- matériaux */

  // Une instance par (rôle × ordre) : c'est ce qui permet d'effacer le
  // train avant l'aile sans toucher au reste.
  const mats = useMemo(() => {
    const base: Record<Role, THREE.MeshStandardMaterialParameters> = {
      shell: { color: P3.snow, metalness: 0.08, roughness: 0.34 },
      dark: { color: P3.graphite, metalness: 0.55, roughness: 0.38 },
      glass: {
        color: new THREE.Color('#243447'),
        metalness: 0.35,
        roughness: 0.06,
        opacity: 0.62,
      },
      accent: { color: P3.electric, metalness: 0.15, roughness: 0.4 },
      tyre: { color: new THREE.Color('#14181d'), metalness: 0.05, roughness: 0.85 },
    }
    const map = {} as Record<Role, THREE.MeshStandardMaterial[]>
    for (const role of Object.keys(base) as Role[]) {
      map[role] = ORDERS.map(() => {
        const m = new THREE.MeshStandardMaterial(base[role])
        m.transparent = true
        return m
      })
    }
    return map
  }, [])

  const baseOpacity = useMemo<Record<Role, number>>(
    () => ({ shell: 1, dark: 1, glass: 0.62, accent: 1, tyre: 1 }),
    [],
  )

  // Hélice : pales visibles au ralenti, disque translucide en régime.
  const bladeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1b2027'),
        metalness: 0.5,
        roughness: 0.4,
        transparent: true,
      }),
    [],
  )
  const discMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: P3.graphite,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    [],
  )

  useEffect(() => {
    return () => {
      for (const list of Object.values(mats)) for (const m of list) m.dispose()
      bladeMat.dispose()
      discMat.dispose()
    }
  }, [mats, bladeMat, discMat])

  /* ------------------------------------------------------------ animation */

  useFrame((_, dt) => {
    const cut = getCut ? clamp(getCut()) : 0
    for (const role of Object.keys(mats) as Role[]) {
      for (const order of ORDERS) {
        const start = (4 - order) * 0.1
        const o = 1 - clamp((cut - start) / 0.36)
        const m = mats[role][order]
        m.opacity = baseOpacity[role] * o
        m.visible = m.opacity > 0.015
      }
    }

    const rpm = propSpin ? propSpin() : 0
    const blur = clamp((rpm - 6) / 16)
    const alive = 1 - clamp((cut - 0.3) / 0.36)
    bladeMat.opacity = (1 - blur * 0.9) * alive
    bladeMat.visible = bladeMat.opacity > 0.02
    discMat.opacity = blur * 0.12 * alive
    discMat.visible = discMat.opacity > 0.01

    if (propRef.current) propRef.current.rotation.z += dt * rpm
  })

  const M = (role: Role, order: number) => mats[role][order]

  return (
    <group {...groupProps}>
      {/* ---- CELLULE ---- */}
      <mesh geometry={geo.fuselage} material={M('shell', 1)} position={POSE.fuselage} />
      <mesh geometry={geo.canopy} material={M('glass', 0)} position={POSE.canopy} />

      {/* ---- VOILURE : cantilever, aucun mât.
             Chaque demi-aile est un GROUPE : aileron et volet y sont
             placés en coordonnées locales et suivent donc le dièdre.
             Posés en absolu, ils pendaient sous l'aile. ---- */}
      {([
        [POSE.wingA, -0.028, 1],
        [POSE.wingB, 0.028, -1],
      ] as const).map(([pos, dihedral, mirror], i) => (
        <group key={i} position={pos} rotation={[0, 0, dihedral]} scale={[mirror, 1, 1]}>
          <mesh geometry={geo.wing} material={M('shell', 0)} />
          <mesh geometry={geo.aileron} material={M('accent', 3)} position={POSE.aileronLocal} />
          <mesh geometry={geo.flap} material={M('shell', 3)} position={POSE.flapLocal} />
        </group>
      ))}

      {/* ---- EMPENNAGE ---- */}
      <mesh geometry={geo.fin} material={M('shell', 2)} position={POSE.fin} />
      <mesh geometry={geo.rudder} material={M('accent', 2)} position={POSE.rudder} />
      <mesh geometry={geo.stab} material={M('shell', 2)} position={POSE.stabA} />
      <mesh
        geometry={geo.stab}
        material={M('shell', 2)}
        position={POSE.stabB}
        scale={[-1, 1, 1]}
      />
      <mesh geometry={geo.elevator} material={M('accent', 2)} position={POSE.elevator} />

      {/* ---- PROPULSION ---- */}
      <mesh geometry={geo.spinner} material={M('shell', 1)} position={POSE.spinner} />
      <group ref={propRef} position={POSE.prop}>
        <mesh geometry={geo.blade} material={bladeMat} />
        <mesh geometry={geo.blade} material={bladeMat} rotation={[0, 0, Math.PI]} />
      </group>
      <mesh material={discMat} position={[0, 0, -2.04]}>
        <circleGeometry args={[0.68, Math.max(12, Math.round(30 * q))]} />
      </mesh>

      {/* ---- TRAIN TRICYCLE ---- */}
      <mesh geometry={geo.legR} material={M('shell', 4)} position={POSE.mainLegRight} />
      <mesh geometry={geo.legL} material={M('shell', 4)} position={POSE.mainLegLeft} />
      <mesh geometry={geo.wheel} material={M('tyre', 4)} position={POSE.wheelRight} />
      <mesh geometry={geo.wheel} material={M('tyre', 4)} position={POSE.wheelLeft} />
      <mesh geometry={geo.spat} material={M('shell', 4)} position={POSE.wheelRight} />
      <mesh geometry={geo.spat} material={M('shell', 4)} position={POSE.wheelLeft} />
      <mesh geometry={geo.noseLeg} material={M('dark', 4)} position={POSE.noseLeg} />
      <mesh geometry={geo.noseWheel} material={M('tyre', 4)} position={POSE.noseWheel} />
      <mesh
        geometry={geo.spat}
        material={M('shell', 4)}
        position={POSE.noseWheel}
        scale={[0.85, 0.85, 0.85]}
      />
    </group>
  )
}
