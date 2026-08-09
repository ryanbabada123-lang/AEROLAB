import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P3 } from './palette'
import { clamp, ramp } from '@/lib/math'

/**
 * COCKPIT — intérieur stylisé (§06 / §51.4).
 *
 * Planche de bord épurée : un bandeau, six cadrans, deux montants, un
 * manche. Les instruments s'allument un par un au fil du scroll. Ce n'est
 * pas un cockpit de jeu vidéo : formes géométriques nettes, lumière froide,
 * un seul accent électrique.
 */

/** Six cadrans principaux + deux secondaires, en deux rangées. */
const GAUGES: { pos: [number, number]; r: number }[] = [
  { pos: [-0.46, 0.13], r: 0.145 },
  { pos: [-0.155, 0.13], r: 0.145 },
  { pos: [0.155, 0.13], r: 0.145 },
  { pos: [0.53, 0.14], r: 0.1 },
  { pos: [-0.46, -0.19], r: 0.145 },
  { pos: [-0.155, -0.19], r: 0.145 },
  { pos: [0.155, -0.19], r: 0.145 },
  { pos: [0.53, -0.17], r: 0.09 },
]

export interface CockpitProps {
  /** 0 → 1 : allumage progressif des instruments. */
  getPower?: () => number
  /** 0 → 1 : opacité globale de la scène cockpit. */
  getFade?: () => number
  density?: number
}

export default function Cockpit({
  getPower,
  getFade,
  density = 1,
  ...groupProps
}: CockpitProps & React.ComponentProps<'group'>) {
  const seg = Math.max(10, Math.round(28 * density))
  const group = useRef<THREE.Group>(null)
  const lampRef = useRef<THREE.PointLight>(null)

  const panelMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#232c38'),
        metalness: 0.2,
        roughness: 0.78,
        transparent: true,
        flatShading: true,
      }),
    [],
  )

  const frameMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#151b24'),
        metalness: 0.35,
        roughness: 0.6,
        transparent: true,
        flatShading: true,
      }),
    [],
  )

  const bezelMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0a0e14'),
        metalness: 0.6,
        roughness: 0.35,
        transparent: true,
      }),
    [],
  )

  // Un matériau par cadran : c'est ce qui permet l'allumage séquentiel.
  const dialMats = useMemo(
    () =>
      GAUGES.map(
        () =>
          new THREE.MeshStandardMaterial({
            color: new THREE.Color('#070b11'),
            // Une lueur froide et RETENUE : un cadran éclairé de nuit ne
            // brûle pas, il se devine.
            emissive: new THREE.Color('#3f5f80'),
            emissiveIntensity: 0,
            metalness: 0.1,
            roughness: 0.7,
            transparent: true,
          }),
      ),
    [],
  )

  const needleMats = useMemo(
    () =>
      GAUGES.map(
        () =>
          new THREE.MeshBasicMaterial({
            color: P3.snow.clone(),
            transparent: true,
            opacity: 0,
          }),
      ),
    [],
  )

  const needles = useRef<(THREE.Mesh | null)[]>([])

  useMemo(
    () => () => {
      panelMat.dispose()
      frameMat.dispose()
      bezelMat.dispose()
      for (const m of dialMats) m.dispose()
      for (const m of needleMats) m.dispose()
    },
    [panelMat, frameMat, bezelMat, dialMats, needleMats],
  )

  useFrame((state) => {
    const fade = getFade ? clamp(getFade()) : 1
    const power = getPower ? clamp(getPower()) : 1

    if (group.current) group.current.visible = fade > 0.01
    if (lampRef.current) lampRef.current.intensity = fade * (0.35 + power * 0.65) * 7
    panelMat.opacity = fade
    frameMat.opacity = fade
    bezelMat.opacity = fade

    const t = state.clock.elapsedTime

    for (let i = 0; i < dialMats.length; i++) {
      // Chaque cadran s'allume à son tour, avec un très léger sursaut de
      // tension au premier contact — comme un vrai bus électrique.
      const start = i * 0.1
      const lit = ramp(power, start, start + 0.22)
      const flicker = lit > 0.05 && lit < 1 ? 0.82 + Math.sin(t * 46 + i) * 0.18 : 1
      dialMats[i].emissiveIntensity = lit * 1.05 * flicker
      dialMats[i].opacity = fade
      needleMats[i].opacity = lit * fade

      const n = needles.current[i]
      if (n) {
        // Les aiguilles balaient puis se stabilisent : test de circuit.
        const settle = ramp(power, start + 0.1, start + 0.5)
        n.rotation.z =
          -Math.PI * 0.75 * (1 - settle) + Math.sin(t * 0.6 + i * 1.7) * 0.04 * settle
      }
    }
  })

  return (
    <group ref={group} {...groupProps}>
      {/* Éclairage de planche : sans lui, un cockpit de nuit est un trou
          noir. Il monte avec la mise sous tension. */}
      <pointLight
        ref={lampRef}
        position={[0, 0.66, 0.7]}
        color="#a8c8e8"
        intensity={0}
        distance={5.5}
        decay={1.6}
      />

      {/* Parois latérales : elles ferment le champ. Sans elles, l'horizon
          extérieur traverse le cockpit par les côtés. */}
      <mesh material={frameMat} position={[-1.02, 0.15, 0.5]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[2.4, 2.2]} />
      </mesh>
      <mesh material={frameMat} position={[1.02, 0.15, 0.5]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[2.4, 2.2]} />
      </mesh>

      {/* ---- PLANCHE DE BORD ---- */}
      <mesh material={panelMat} position={[0, 0, 0]}>
        <boxGeometry args={[1.62, 0.78, 0.1]} />
      </mesh>
      {/* casquette anti-reflets */}
      <mesh material={frameMat} position={[0, 0.44, 0.14]} rotation={[0.42, 0, 0]}>
        <boxGeometry args={[1.72, 0.07, 0.36]} />
      </mesh>
      {/* console basse */}
      <mesh material={frameMat} position={[0, -0.6, 0.34]} rotation={[-0.5, 0, 0]}>
        <boxGeometry args={[0.44, 0.66, 0.06]} />
      </mesh>
      {/* plancher, pour fermer le bas du cadre */}
      <mesh material={frameMat} position={[0, -0.92, 0.8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 1.8]} />
      </mesh>

      {/* ---- MONTANTS DE VERRIÈRE ---- */}
      <mesh material={frameMat} position={[-0.86, 0.7, 0.2]} rotation={[0, 0, 0.22]}>
        <boxGeometry args={[0.09, 1.3, 0.09]} />
      </mesh>
      <mesh material={frameMat} position={[0.86, 0.7, 0.2]} rotation={[0, 0, -0.22]}>
        <boxGeometry args={[0.09, 1.3, 0.09]} />
      </mesh>
      <mesh material={frameMat} position={[0, 1.28, 0.42]}>
        <boxGeometry args={[2.0, 0.12, 0.5]} />
      </mesh>

      {/* ---- CADRANS ---- */}
      {GAUGES.map((g, i) => (
        <group key={i} position={[g.pos[0], g.pos[1], 0.05]}>
          <mesh material={bezelMat}>
            <torusGeometry args={[g.r, 0.008, 6, seg]} />
          </mesh>
          <mesh material={dialMats[i]} position={[0, 0, -0.004]}>
            <circleGeometry args={[g.r * 0.94, seg]} />
          </mesh>
          <mesh
            ref={(el) => {
              needles.current[i] = el
            }}
            material={needleMats[i]}
            position={[0, 0, 0.004]}
          >
            <planeGeometry args={[0.006, g.r * 1.5]} />
          </mesh>
        </group>
      ))}

      {/* ---- MANCHE ---- */}
      <mesh material={frameMat} position={[-0.3, -0.62, 0.74]} rotation={[0.18, 0, 0]}>
        <cylinderGeometry args={[0.022, 0.028, 0.52, 8]} />
      </mesh>
      <mesh material={frameMat} position={[-0.3, -0.38, 0.8]}>
        <boxGeometry args={[0.24, 0.06, 0.09]} />
      </mesh>
    </group>
  )
}
