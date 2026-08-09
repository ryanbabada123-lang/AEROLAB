import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P3 } from './palette'
import { clamp } from '@/lib/math'

/**
 * AVION — forme stylisée (§51.4).
 *
 * Silhouette reconnaissable d'un monomoteur d'école : aile haute, dérive
 * marquée, hélice. Primitives, faces planes, matériaux mats. L'émotion
 * vient de la lumière et du mouvement de caméra, pas du détail du modèle.
 *
 * Orientation : nez vers -Z.
 *
 * `getCut` (0 → 1) dissout l'appareil pièce par pièce pour la bascule vers
 * l'aile (§08). La dissolution est pilotée en useFrame, jamais par un
 * setState : aucun re-render pendant l'animation.
 */

type Role = 'shell' | 'dark' | 'glass' | 'accent'

/** Ordre de disparition : 0 part en dernier, 4 en premier. */
const ORDERS = [0, 1, 2, 3, 4] as const

export interface AircraftProps {
  density?: number
  /** Lue chaque frame ; renvoie l'avancement de la dissolution 0→1. */
  getCut?: () => number
  propSpin?: () => number
}

export default function Aircraft({
  density = 1,
  getCut,
  propSpin,
  ...groupProps
}: AircraftProps & React.ComponentProps<'group'>) {
  const seg = Math.max(6, Math.round(12 * density))
  const propRef = useRef<THREE.Mesh>(null)

  // Une instance de matériau par (rôle × ordre de dissolution) : c'est ce qui
  // permet de faire disparaître le train avant l'aile, sans toucher au reste.
  const mats = useMemo(() => {
    const base: Record<Role, THREE.MeshStandardMaterialParameters> = {
      shell: { color: P3.snow, metalness: 0.14, roughness: 0.42, flatShading: true },
      dark: { color: P3.graphite, metalness: 0.5, roughness: 0.35, flatShading: true },
      glass: {
        color: P3.glacierDeep,
        metalness: 0.7,
        roughness: 0.12,
        opacity: 0.72,
        flatShading: true,
      },
      accent: {
        color: P3.electric,
        metalness: 0.2,
        roughness: 0.4,
        emissive: P3.electric,
        emissiveIntensity: 0.3,
      },
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
    () => ({ shell: 1, dark: 1, glass: 0.72, accent: 1 }),
    [],
  )

  useMemo(() => {
    // Libération des matériaux au démontage.
    return () => {
      for (const list of Object.values(mats)) for (const m of list) m.dispose()
    }
  }, [mats])

  useFrame((_, dt) => {
    const cut = getCut ? clamp(getCut()) : 0
    for (const role of Object.keys(mats) as Role[]) {
      for (const order of ORDERS) {
        // Les pièces secondaires (train, mâts) s'effacent en premier.
        const start = (4 - order) * 0.1
        const o = 1 - clamp((cut - start) / 0.36)
        const m = mats[role][order]
        m.opacity = baseOpacity[role] * o
        m.visible = m.opacity > 0.015
      }
    }
    if (propRef.current) {
      const rpm = propSpin ? propSpin() : 0
      propRef.current.rotation.z += dt * rpm
    }
  })

  const M = (role: Role, order: number) => mats[role][order]

  return (
    <group {...groupProps}>
      {/* ---- FUSELAGE ---- */}
      {/* Le cylindre de Three.js est orienté sur Y : on le couche sur Z. */}
      <mesh material={M('shell', 1)} position={[0, 0, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.34, 3.1, seg]} />
      </mesh>
      <mesh
        material={M('shell', 1)}
        position={[0, 0, -1.72]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <coneGeometry args={[0.34, 0.9, seg]} />
      </mesh>
      <mesh
        material={M('shell', 2)}
        position={[0, 0.06, 2.05]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <coneGeometry args={[0.3, 1.5, seg]} />
      </mesh>

      {/* ---- VERRIÈRE ---- */}
      <mesh material={M('glass', 0)} position={[0, 0.3, -0.34]}>
        <boxGeometry args={[0.6, 0.34, 1.25]} />
      </mesh>

      {/* ---- AILE HAUTE ---- */}
      <mesh material={M('shell', 0)} position={[0, 0.44, -0.16]}>
        <boxGeometry args={[7.4, 0.11, 1.06]} />
      </mesh>
      <mesh material={M('shell', 0)} position={[3.72, 0.44, -0.16]} rotation={[0, 0, 0.06]}>
        <boxGeometry args={[0.36, 0.09, 0.86]} />
      </mesh>
      <mesh material={M('shell', 0)} position={[-3.72, 0.44, -0.16]} rotation={[0, 0, -0.06]}>
        <boxGeometry args={[0.36, 0.09, 0.86]} />
      </mesh>
      <mesh material={M('dark', 3)} position={[1.15, 0.14, 0.16]} rotation={[0, 0, -0.36]}>
        <boxGeometry args={[1.5, 0.05, 0.08]} />
      </mesh>
      <mesh material={M('dark', 3)} position={[-1.15, 0.14, 0.16]} rotation={[0, 0, 0.36]}>
        <boxGeometry args={[1.5, 0.05, 0.08]} />
      </mesh>

      {/* ---- EMPENNAGE ---- */}
      <mesh material={M('shell', 2)} position={[0, 0.72, 2.5]} rotation={[0.22, 0, 0]}>
        <boxGeometry args={[0.09, 1.15, 0.82]} />
      </mesh>
      <mesh material={M('accent', 2)} position={[0, 1.22, 2.62]}>
        <boxGeometry args={[0.1, 0.2, 0.5]} />
      </mesh>
      <mesh material={M('shell', 2)} position={[0, 0.24, 2.62]}>
        <boxGeometry args={[2.5, 0.08, 0.62]} />
      </mesh>

      {/* ---- MOTEUR / HÉLICE ---- */}
      <mesh
        material={M('dark', 1)}
        position={[0, 0, -2.18]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.12, 0.16, 0.2, seg]} />
      </mesh>
      <mesh ref={propRef} material={M('dark', 1)} position={[0, 0, -2.3]}>
        <boxGeometry args={[0.09, 2.0, 0.03]} />
      </mesh>

      {/* ---- TRAIN FIXE ---- */}
      <mesh material={M('dark', 4)} position={[0.78, -0.52, -0.3]} rotation={[0, 0, 0.34]}>
        <boxGeometry args={[0.05, 0.62, 0.05]} />
      </mesh>
      <mesh material={M('dark', 4)} position={[-0.78, -0.52, -0.3]} rotation={[0, 0, -0.34]}>
        <boxGeometry args={[0.05, 0.62, 0.05]} />
      </mesh>
      <mesh
        material={M('dark', 4)}
        position={[0.9, -0.8, -0.3]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.16, 0.16, 0.09, seg]} />
      </mesh>
      <mesh
        material={M('dark', 4)}
        position={[-0.9, -0.8, -0.3]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.16, 0.16, 0.09, seg]} />
      </mesh>
      <mesh
        material={M('dark', 4)}
        position={[0, -0.62, 2.3]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.1, 0.1, 0.07, seg]} />
      </mesh>
    </group>
  )
}
