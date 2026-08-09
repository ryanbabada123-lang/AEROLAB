import { useLayoutEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { P3 } from './palette'
import { clamp } from '@/lib/math'

/**
 * Poussière lumineuse de l'ouverture (§04) : quelques points dans le noir,
 * juste assez pour que l'espace ait une profondeur avant que l'avion
 * n'existe. Rien de décoratif — c'est ce qui rend le vide lisible.
 */
export function DustField({
  count = 420,
  getOpacity,
}: {
  count?: number
  getOpacity?: () => number
}) {
  const pointsRef = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 12 + Math.random() * 60
      const th = Math.random() * Math.PI * 2
      pos[i * 3] = Math.cos(th) * r
      pos[i * 3 + 1] = (Math.random() - 0.45) * 40
      pos[i * 3 + 2] = Math.sin(th) * r - 20
    }
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [count])

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: P3.glacier,
        size: 0.055,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  )

  useLayoutEffect(() => () => {
    geometry.dispose()
    material.dispose()
  }, [geometry, material])

  useFrame((_, dt) => {
    const o = getOpacity ? clamp(getOpacity()) : 1
    material.opacity = o * 0.7
    if (pointsRef.current) {
      pointsRef.current.visible = o > 0.01
      pointsRef.current.rotation.y += dt * 0.012
    }
  })

  return <points ref={pointsRef} geometry={geometry} material={material} />
}

/**
 * Couche nuageuse (§07) — dalles plates, très étirées, dérivant vers la
 * caméra. Volontairement abstraites : des strates d'altitude, pas des
 * moutons de coton.
 */
export function CloudField({
  count = 26,
  getOpacity,
  getSpeed,
}: {
  count?: number
  getOpacity?: () => number
  getSpeed?: () => number
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const n = Math.max(6, count)

  const slabs = useMemo(
    () =>
      Array.from({ length: n }, () => ({
        x: (Math.random() - 0.5) * 90,
        y: -6 - Math.random() * 26,
        z: -90 + Math.random() * 180,
        sx: 14 + Math.random() * 34,
        sz: 8 + Math.random() * 22,
        rot: (Math.random() - 0.5) * 0.5,
      })),
    [n],
  )

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        // Légèrement teintées : du blanc pur sur un ciel blanc ne se voit
        // pas. Les strates doivent se lire comme des couches d'altitude.
        color: P3.glacier,
        emissive: P3.frost,
        emissiveIntensity: 0.2,
        roughness: 1,
        metalness: 0,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  )

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useLayoutEffect(() => () => material.dispose(), [material])

  useFrame((_, dt) => {
    const mesh = meshRef.current
    if (!mesh) return
    const o = getOpacity ? clamp(getOpacity()) : 1
    material.opacity = o * 0.9
    mesh.visible = o > 0.01
    if (!mesh.visible) return

    const speed = (getSpeed ? getSpeed() : 1) * 16
    for (let i = 0; i < slabs.length; i++) {
      const s = slabs[i]
      s.z += speed * dt
      if (s.z > 110) s.z = -110
      dummy.position.set(s.x, s.y, s.z)
      dummy.rotation.set(-Math.PI / 2, 0, s.rot)
      dummy.scale.set(s.sx, s.sz, 1)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    }
    mesh.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, n]} material={material}>
      <planeGeometry args={[1, 1]} />
    </instancedMesh>
  )
}

/**
 * Repère au sol de l'ouverture : une piste réduite à ses marques.
 * Disparaît dès le décollage.
 */
export function GroundPlane({
  getOpacity,
  getDrop,
}: {
  getOpacity?: () => number
  /** Éloignement du sol pendant la montée : c'est le monde qui descend,
   *  pas l'avion qui monte — la caméra reste ainsi cadrée sur l'appareil. */
  getDrop?: () => number
}) {
  const group = useRef<THREE.Group>(null)

  const lineMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: P3.glacierDeep,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    [],
  )

  const marks = useMemo(
    () => Array.from({ length: 22 }, (_, i) => -60 + i * 12),
    [],
  )

  useLayoutEffect(() => () => lineMat.dispose(), [lineMat])

  useFrame(() => {
    const o = getOpacity ? clamp(getOpacity()) : 1
    lineMat.opacity = o * 0.5
    if (group.current) {
      group.current.visible = o > 0.01
      group.current.position.y = -0.92 - (getDrop ? getDrop() : 0) * 46
    }
  })

  return (
    <group ref={group} position={[0, -0.92, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {marks.map((z) => (
        <mesh key={z} material={lineMat} position={[0, z, 0]}>
          <planeGeometry args={[0.5, 6]} />
        </mesh>
      ))}
      <mesh material={lineMat} position={[-9, 0, 0]}>
        <planeGeometry args={[0.16, 260]} />
      </mesh>
      <mesh material={lineMat} position={[9, 0, 0]}>
        <planeGeometry args={[0.16, 260]} />
      </mesh>
    </group>
  )
}
