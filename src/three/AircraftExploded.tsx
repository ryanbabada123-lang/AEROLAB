import { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { P3 } from './palette'
import { getDeviceProfile } from '@/lib/device'
import { damp } from '@/lib/math'
import { PARTS, type PartDef } from '@/data/parts'

/**
 * VUE ÉCLATÉE (§18).
 *
 * Formes stylisées (§51.4). Chaque pièce s'écarte sur son propre axe, ce
 * qui rend la décomposition lisible plutôt que chaotique. La sélection
 * rapproche la pièce et met le reste en retrait.
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
    const k = selected ? e * 1.25 : e
    el.position.x = damp(el.position.x, target.x * k, 6, dt)
    el.position.y = damp(el.position.y, target.y * k, 6, dt)
    el.position.z = damp(el.position.z, target.z * k, 6, dt)

    const wanted = !anySelected || selected ? 1 : 0.18
    el.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined
      if (m && 'opacity' in m) {
        m.transparent = true
        m.opacity = damp(m.opacity, wanted, 7, dt)
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
}: {
  explode: React.RefObject<number>
  selected: string | null
  onSelect: (id: string) => void
}) {
  const shell = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: P3.snow,
        metalness: 0.15,
        roughness: 0.4,
        flatShading: true,
        transparent: true,
      }),
    [],
  )
  const dark = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: P3.graphite,
        metalness: 0.5,
        roughness: 0.35,
        flatShading: true,
        transparent: true,
      }),
    [],
  )
  const accent = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: P3.electric,
        metalness: 0.2,
        roughness: 0.4,
        transparent: true,
      }),
    [],
  )

  const P = (id: string, children: React.ReactNode) => {
    const def = PARTS.find((x) => x.id === id)!
    return (
      <Part
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
    <group rotation={[0, Math.PI * 0.12, 0]}>
      {P(
        'fuselage',
        <>
          <mesh material={shell} position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.34, 3.1, 14]} />
          </mesh>
          <mesh material={shell} position={[0, 0, -1.72]} rotation={[-Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.34, 0.9, 14]} />
          </mesh>
          <mesh material={shell} position={[0, 0.06, 2.05]} rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.3, 1.5, 14]} />
          </mesh>
          <mesh material={dark} position={[0, 0.3, -0.34]}>
            <boxGeometry args={[0.6, 0.34, 1.25]} />
          </mesh>
        </>,
      )}

      {P(
        'wing',
        <mesh material={shell} position={[0, 0.44, -0.16]}>
          <boxGeometry args={[7.4, 0.11, 1.06]} />
        </mesh>,
      )}

      {P(
        'tailplane',
        <mesh material={shell} position={[0, 0.24, 2.62]}>
          <boxGeometry args={[2.5, 0.08, 0.62]} />
        </mesh>,
      )}

      {P(
        'fin',
        <>
          <mesh material={shell} position={[0, 0.72, 2.5]} rotation={[0.22, 0, 0]}>
            <boxGeometry args={[0.09, 1.15, 0.82]} />
          </mesh>
          <mesh material={accent} position={[0, 1.22, 2.62]}>
            <boxGeometry args={[0.1, 0.2, 0.5]} />
          </mesh>
        </>,
      )}

      {P(
        'engine',
        <>
          <mesh material={dark} position={[0, 0, -2.18]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.16, 0.2, 12]} />
          </mesh>
          <mesh material={dark} position={[0, 0, -2.3]}>
            <boxGeometry args={[0.09, 2.0, 0.03]} />
          </mesh>
        </>,
      )}

      {P(
        'gear',
        <>
          <mesh material={dark} position={[0.78, -0.52, -0.3]} rotation={[0, 0, 0.34]}>
            <boxGeometry args={[0.05, 0.62, 0.05]} />
          </mesh>
          <mesh material={dark} position={[-0.78, -0.52, -0.3]} rotation={[0, 0, -0.34]}>
            <boxGeometry args={[0.05, 0.62, 0.05]} />
          </mesh>
          <mesh material={dark} position={[0.9, -0.8, -0.3]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.16, 0.16, 0.09, 12]} />
          </mesh>
          <mesh material={dark} position={[-0.9, -0.8, -0.3]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.16, 0.16, 0.09, 12]} />
          </mesh>
        </>,
      )}

      {P(
        'controls',
        <>
          {/* ailerons */}
          <mesh material={accent} position={[2.9, 0.44, 0.28]}>
            <boxGeometry args={[1.4, 0.07, 0.3]} />
          </mesh>
          <mesh material={accent} position={[-2.9, 0.44, 0.28]}>
            <boxGeometry args={[1.4, 0.07, 0.3]} />
          </mesh>
          {/* profondeur */}
          <mesh material={accent} position={[0, 0.24, 2.92]}>
            <boxGeometry args={[2.4, 0.06, 0.22]} />
          </mesh>
          {/* direction */}
          <mesh material={accent} position={[0, 0.78, 2.88]} rotation={[0.22, 0, 0]}>
            <boxGeometry args={[0.07, 1.0, 0.22]} />
          </mesh>
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
      camera={{ position: [8, 4.4, 12], fov: 31 }}
      gl={{ antialias: profile.tier !== 'low', alpha: true }}
      onCreated={() => setReady(true)}
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 500ms' }}
      onPointerMissed={() => onSelect('')}
    >
      <hemisphereLight args={[P3.snow, P3.glacier, 1.5]} />
      <directionalLight position={[-8, 9, 6]} intensity={2.1} />
      <directionalLight position={[6, 2, -8]} intensity={0.7} color={P3.glacier} />
      <Model explode={explodeRef} selected={selected} onSelect={onSelect} />
      <OrbitControls
        target={[0, 0.2, 0]}
        enablePan={false}
        minDistance={8}
        maxDistance={24}
        autoRotate={!selected}
        autoRotateSpeed={0.45}
        enableDamping
        dampingFactor={0.07}
      />
    </Canvas>
  )
}
