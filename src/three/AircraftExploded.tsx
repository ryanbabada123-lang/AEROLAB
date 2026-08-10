import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { P3 } from './palette'
import { getDeviceProfile } from '@/lib/device'
import { damp } from '@/lib/math'
import { PARTS, type PartDef } from '@/data/parts'
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
 * VUE ÉCLATÉE (§18).
 *
 * Même géométrie que l'intro (tecnam.ts) : un seul appareil sur tout le
 * site. Chaque pièce s'écarte sur son propre axe, ce qui rend la
 * décomposition lisible plutôt que chaotique.
 */

function Part({
  def,
  explode,
  selected,
  anySelected,
  onSelect,
  children,
}: {
  def: PartDef
  explode: React.RefObject<number>
  selected: boolean
  anySelected: boolean
  onSelect: (id: string) => void
  children: React.ReactNode
}) {
  const g = useRef<THREE.Group>(null)
  const target = useMemo(() => new THREE.Vector3(...def.dir), [def.dir])

  useFrame((_, dt) => {
    const el = g.current
    if (!el) return
    const e = explode.current ?? 0
    const k = selected ? e * 1.3 + 0.12 : e
    el.position.x = damp(el.position.x, target.x * k, 6, dt)
    el.position.y = damp(el.position.y, target.y * k, 6, dt)
    el.position.z = damp(el.position.z, target.z * k, 6, dt)

    const wanted = !anySelected || selected ? 1 : 0.14
    el.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined
      if (m && 'opacity' in m) {
        m.transparent = true
        m.opacity = damp(m.opacity, wanted * (m.userData.base ?? 1), 7, dt)
      }
    })
  })

  return (
    <group
      ref={g}
      onPointerDown={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation()
        onSelect(def.id)
      }}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = ''
      }}
    >
      {children}
    </group>
  )
}

function Model({
  explode,
  selected,
  onSelect,
  quality,
}: {
  explode: React.RefObject<number>
  selected: string | null
  onSelect: (id: string) => void
  quality: number
}) {
  const geo = useMemo(
    () => ({
      fuselage: fuselageGeometry(quality),
      wing: wingGeometry(quality),
      aileron: aileronGeometry(),
      flap: flapGeometry(),
      canopy: canopyGeometry(quality),
      fin: finGeometry(quality),
      rudder: rudderGeometry(),
      stab: stabGeometry(quality),
      elevator: elevatorGeometry(),
      spinner: spinnerGeometry(quality),
      blade: bladeGeometry(),
      legR: mainLegGeometry(1),
      legL: mainLegGeometry(-1),
      noseLeg: noseLegGeometry(),
      wheel: wheelGeometry(0.155, quality),
      noseWheel: wheelGeometry(0.125, quality),
      spat: spatGeometry(),
    }),
    [quality],
  )

  const mats = useMemo(() => {
    const mk = (p: THREE.MeshStandardMaterialParameters, base = 1) => {
      const m = new THREE.MeshStandardMaterial({ ...p, transparent: true })
      m.userData.base = base
      return m
    }
    return {
      shell: mk({ color: P3.snow, metalness: 0.08, roughness: 0.32 }),
      dark: mk({ color: P3.graphite, metalness: 0.55, roughness: 0.38 }),
      glass: mk(
        {
          color: new THREE.Color('#2a3a4d'),
          metalness: 0.4,
          roughness: 0.05,
          opacity: 0.5,
        },
        0.5,
      ),
      accent: mk({ color: P3.electric, metalness: 0.15, roughness: 0.4 }),
      tyre: mk({ color: new THREE.Color('#14181d'), metalness: 0.05, roughness: 0.85 }),
    }
  }, [])

  useEffect(() => {
    const g = geo
    const m = mats
    return () => {
      for (const i of Object.values(g)) i.dispose()
      for (const i of Object.values(m)) i.dispose()
    }
  }, [geo, mats])

  const P = (id: string, children: React.ReactNode) => {
    const def = PARTS.find((x) => x.id === id)
    if (!def) return null
    return (
      <Part
        key={id}
        def={def}
        explode={explode}
        selected={selected === id}
        anySelected={!!selected}
        onSelect={onSelect}
      >
        {children}
      </Part>
    )
  }

  return (
    <group rotation={[0, Math.PI * 0.14, 0]} position={[0, 0.25, 0]}>
      {P(
        'fuselage',
        <mesh geometry={geo.fuselage} material={mats.shell} position={POSE.fuselage} />,
      )}

      {P('canopy', <mesh geometry={geo.canopy} material={mats.glass} position={POSE.canopy} />)}

      {P(
        'wing',
        <>
          {([
            [POSE.wingA, -0.028, 1],
            [POSE.wingB, 0.028, -1],
          ] as const).map(([pos, dihedral, mirror], i) => (
            <group key={i} position={pos} rotation={[0, 0, dihedral]} scale={[mirror, 1, 1]}>
              <mesh geometry={geo.wing} material={mats.shell} />
              <mesh geometry={geo.flap} material={mats.shell} position={POSE.flapLocal} />
            </group>
          ))}
        </>,
      )}

      {P(
        'tailplane',
        <>
          <mesh geometry={geo.stab} material={mats.shell} position={POSE.stabA} />
          <mesh
            geometry={geo.stab}
            material={mats.shell}
            position={POSE.stabB}
            scale={[-1, 1, 1]}
          />
        </>,
      )}

      {P('fin', <mesh geometry={geo.fin} material={mats.shell} position={POSE.fin} />)}

      {P(
        'engine',
        <>
          <mesh geometry={geo.spinner} material={mats.shell} position={POSE.spinner} />
          <group position={POSE.prop}>
            <mesh geometry={geo.blade} material={mats.dark} />
            <mesh geometry={geo.blade} material={mats.dark} rotation={[0, 0, Math.PI]} />
          </group>
        </>,
      )}

      {P(
        'gear',
        <>
          <mesh geometry={geo.legR} material={mats.shell} position={POSE.mainLegRight} />
          <mesh geometry={geo.legL} material={mats.shell} position={POSE.mainLegLeft} />
          <mesh geometry={geo.wheel} material={mats.tyre} position={POSE.wheelRight} />
          <mesh geometry={geo.wheel} material={mats.tyre} position={POSE.wheelLeft} />
          <mesh geometry={geo.spat} material={mats.shell} position={POSE.wheelRight} />
          <mesh geometry={geo.spat} material={mats.shell} position={POSE.wheelLeft} />
          <mesh geometry={geo.noseLeg} material={mats.dark} position={POSE.noseLeg} />
          <mesh geometry={geo.noseWheel} material={mats.tyre} position={POSE.noseWheel} />
          <mesh
            geometry={geo.spat}
            material={mats.shell}
            position={POSE.noseWheel}
            scale={[0.85, 0.85, 0.85]}
          />
        </>,
      )}

      {P(
        'controls',
        <>
          {([
            [POSE.wingA, -0.028, 1],
            [POSE.wingB, 0.028, -1],
          ] as const).map(([pos, dihedral, mirror], i) => (
            <group key={i} position={pos} rotation={[0, 0, dihedral]} scale={[mirror, 1, 1]}>
              <mesh geometry={geo.aileron} material={mats.accent} position={POSE.aileronLocal} />
            </group>
          ))}
          <mesh geometry={geo.elevator} material={mats.accent} position={POSE.elevator} />
          <mesh geometry={geo.rudder} material={mats.accent} position={POSE.rudder} />
        </>,
      )}

    </group>
  )
}

export default function AircraftExploded({
  explodeRef,
  selected,
  onSelect,
}: {
  explodeRef: React.RefObject<number>
  selected: string | null
  onSelect: (id: string) => void
}) {
  const profile = useMemo(() => getDeviceProfile(), [])
  const [ready, setReady] = useState(false)

  return (
    <Canvas
      dpr={profile.dpr}
      camera={{ position: [7.5, 3.6, 11], fov: 30 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 1.05
        setReady(true)
      }}
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 500ms' }}
      onPointerMissed={() => onSelect('')}
    >
      <hemisphereLight args={[P3.snow, P3.glacier, 1.9]} />
      <directionalLight position={[-9, 11, 7]} intensity={2.4} />
      <directionalLight position={[7, 2, -9]} intensity={0.8} color={P3.glacier} />
      <Model
        explode={explodeRef}
        selected={selected}
        onSelect={onSelect}
        quality={profile.tier === 'low' ? 0.6 : 1.15}
      />
      <ContactShadows
        position={[0, -1.15, 0]}
        opacity={0.32}
        scale={16}
        blur={2.4}
        far={5}
        resolution={profile.tier === 'low' ? 256 : 512}
      />
      <OrbitControls
        target={[0, 0.25, 0]}
        enablePan={false}
        minDistance={7}
        maxDistance={26}
        autoRotate={!selected}
        autoRotateSpeed={0.42}
        enableDamping
        dampingFactor={0.07}
      />
    </Canvas>
  )
}
