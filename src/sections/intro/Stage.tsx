import { useLayoutEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Aircraft from '@/three/Aircraft'
import Cockpit from '@/three/Cockpit'
import WingSection from '@/three/WingSection'
import { CloudField, DustField, GroundPlane } from '@/three/Atmosphere'
import { P3, skyColor } from '@/three/palette'
import { scrollDriver } from '@/lib/scroll'
import { getDeviceProfile } from '@/lib/device'
import { INTRO } from './timeline'
import { fitToAspect, sampleCamera } from './camera'
import { lerp, ramp, remap, window4 } from '@/lib/math'

/**
 * SCÈNE DE L'INTRO.
 *
 * Un seul canvas, fixe derrière le texte. Tous les objets lisent la même
 * progression (scrollDriver) dans leur propre useFrame : aucun setState
 * n'est déclenché pendant l'animation, donc React ne re-rend jamais
 * pendant le scroll.
 */

const p = () => scrollDriver.smooth

/* ---------------------------------------------------------------- CAMÉRA */

function Director({ reduced }: { reduced: boolean }) {
  const { camera, scene, gl } = useThree()
  const bg = useMemo(() => new THREE.Color(), [])
  const fog = useMemo(() => new THREE.Fog(P3.void.clone(), 20, 150), [])
  const target = useMemo(() => new THREE.Vector3(), [])
  const smoothed = useMemo(() => new THREE.Vector3(), [])
  const initialised = useRef(false)

  useLayoutEffect(() => {
    scene.fog = fog
    scene.background = bg
    return () => {
      scene.fog = null
      scene.background = null
    }
  }, [scene, fog, bg])

  useFrame((state, dt) => {
    const prog = p()
    const cam = camera as THREE.PerspectiveCamera
    // Le cadrage s'adapte au format d'écran ; la narration, elle, ne bouge
    // pas d'un pouce (§51.2 / §53).
    const k = fitToAspect(sampleCamera(prog), cam.aspect)

    // Respiration : la caméra n'est jamais parfaitement immobile. Coupée en
    // reduced-motion.
    const t = state.clock.elapsedTime
    const breath = reduced ? 0 : 1
    const sway = new THREE.Vector3(
      Math.sin(t * 0.23) * 0.16 * breath,
      Math.cos(t * 0.31) * 0.1 * breath,
      Math.sin(t * 0.17) * 0.12 * breath,
    )

    target.copy(k.pos).add(sway)

    if (!initialised.current) {
      smoothed.copy(target)
      initialised.current = true
    }
    // Amorti supplémentaire : absorbe les scrolls brutaux (molette crantée,
    // barre d'espace) sans jamais désynchroniser la narration.
    const f = 1 - Math.exp(-9 * Math.min(dt, 0.05))
    smoothed.lerp(target, f)

    cam.position.copy(smoothed)
    cam.lookAt(k.look)
    cam.rotation.z += k.roll

    if (Math.abs(cam.fov - k.fov) > 0.01) {
      cam.fov = k.fov
      cam.updateProjectionMatrix()
    }

    // Ciel + brume : le passage de la nuit au blanc est la colonne
    // vertébrale émotionnelle de l'intro (§07).
    skyColor(prog, bg)
    fog.color.copy(bg)
    fog.near = lerp(8, 40, ramp(prog, 0.4, 0.62))
    fog.far = lerp(70, 300, ramp(prog, 0.3, 0.66))

    // L'exposition monte avec le jour.
    gl.toneMappingExposure = lerp(0.85, 1.25, ramp(prog, 0.42, 0.62))
  })

  return null
}

/* --------------------------------------------------------------- LUMIÈRE */

function Lighting({ shadows }: { shadows: boolean }) {
  const key = useRef<THREE.DirectionalLight>(null)
  const rim = useRef<THREE.DirectionalLight>(null)
  const amb = useRef<THREE.HemisphereLight>(null)

  useFrame(() => {
    const prog = p()
    // Nuit : un seul liseré froid. Jour : lumière franche + ciel diffus.
    if (key.current) key.current.intensity = lerp(0.55, 2.6, ramp(prog, 0.4, 0.62))
    if (rim.current) rim.current.intensity = lerp(1.5, 0.7, ramp(prog, 0.35, 0.6))
    if (amb.current) {
      // Léger apport pendant la séquence intérieure : un cockpit de nuit
      // reste sombre, mais il doit rester LISIBLE (§35).
      const cockpit = window4(prog, 0.3, 0.35, 0.44, 0.48) * 0.4
      amb.current.intensity = lerp(0.12, 1.5, ramp(prog, 0.42, 0.64)) + cockpit
    }
  })

  return (
    <>
      <hemisphereLight
        ref={amb}
        args={[P3.snow, P3.glacierDeep, 0.12]}
        position={[0, 20, 0]}
      />
      <directionalLight
        ref={key}
        position={[-14, 12, -8]}
        intensity={0.55}
        color={P3.snow}
        castShadow={shadows}
      />
      <directionalLight
        ref={rim}
        position={[9, 2, 14]}
        intensity={1.5}
        color={P3.glacier}
      />
    </>
  )
}

/* ----------------------------------------------------------------- AVION */

function PlaneRig({ density }: { density: number }) {
  const rig = useRef<THREE.Group>(null)

  useFrame((state) => {
    const prog = p()
    const g = rig.current
    if (!g) return

    // Visible de l'apparition lointaine jusqu'à la dissolution finale ;
    // masqué pendant la séquence intérieure du cockpit.
    const outside =
      window4(prog, INTRO.planeAppears - 0.03, INTRO.planeAppears + 0.02, 0.315, 0.345) +
      window4(prog, 0.455, 0.5, 0.9, 0.96)
    g.visible = outside > 0.01

    const t = state.clock.elapsedTime

    // L'appareil reste au centre du cadre : c'est le sol qui s'éloigne
    // (voir GroundPlane) et les nuages qui défilent. La caméra n'a donc
    // jamais à courir après lui.
    const climb = ramp(prog, INTRO.takeoff, INTRO.dreamHigh)
    g.position.y = Math.sin(t * 0.5) * 0.07 * climb
    g.position.z = 0

    // Assiette : cabré au décollage, puis retour en palier.
    const pitch = window4(prog, INTRO.takeoff, 0.51, 0.56, 0.64)
    g.rotation.x = -pitch * 0.19 + Math.sin(t * 0.42) * 0.008

    // Léger roulis en croisière : l'appareil vit.
    g.rotation.z = Math.sin(t * 0.33) * 0.035 * climb
    g.rotation.y = Math.sin(t * 0.21) * 0.02 * climb
  })

  return (
    <group ref={rig}>
      <Aircraft
        density={density}
        getCut={() => ramp(p(), INTRO.dissolve, 0.87)}
        propSpin={() => lerp(2, 34, ramp(p(), 0.2, 0.5))}
      />
    </group>
  )
}

/* --------------------------------------------------------------- CONTENU */

function Contents({ density, shadows }: { density: number; shadows: boolean }) {
  return (
    <>
      <Lighting shadows={shadows} />

      <DustField
        count={Math.round(420 * density)}
        getOpacity={() => window4(p(), -0.05, 0.005, 0.24, 0.34)}
      />

      <GroundPlane
        getOpacity={() => window4(p(), 0.1, 0.16, 0.54, 0.6)}
        getDrop={() => ramp(p(), INTRO.takeoff, 0.6)}
      />

      <PlaneRig density={density} />

      <Cockpit
        density={density}
        position={[0, 0.1, -1.05]}
        getFade={() => window4(p(), 0.315, 0.35, 0.435, 0.465)}
        getPower={() => remap(p(), 0.33, 0.44, 0, 1)}
      />

      <CloudField
        count={Math.round(26 * density)}
        getOpacity={() => window4(p(), 0.47, 0.56, 0.76, 0.84)}
        getSpeed={() => 1}
      />

      <WingSection
        density={density}
        position={[0, 0.1, 0]}
        getReveal={() => window4(p(), INTRO.wing, 0.845, 0.985, 1.0)}
        getAlpha={() => lerp(2, 8, ramp(p(), 0.85, 0.95))}
      />
    </>
  )
}

/* ------------------------------------------------------------------ VUE */

export default function Stage({
  active,
  reduced,
}: {
  active: boolean
  reduced: boolean
}) {
  const profile = useMemo(() => getDeviceProfile(), [])

  return (
    <div className="intro-stage" data-active={active} aria-hidden="true">
      <Canvas
        // Hors de l'intro, le rendu s'arrête complètement : plus une seule
        // frame calculée quand la scène n'est pas visible (§34).
        frameloop={active ? 'always' : 'never'}
        dpr={profile.dpr}
        gl={{
          antialias: profile.tier !== 'low',
          powerPreference: 'high-performance',
          alpha: false,
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0.6, 16], fov: 42, near: 0.1, far: 600 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 0.85
        }}
      >
        <Director reduced={reduced} />
        <Contents density={profile.density} shadows={profile.shadows} />
      </Canvas>
    </div>
  )
}
