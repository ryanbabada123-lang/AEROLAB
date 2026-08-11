import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Suspense } from 'react'
import Model, { preloadModels } from '@/three/Model'
import { restingState, type FlightState } from '@/three/instruments'
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

/*
 * Les modèles sont préchargés dès l'import du module, donc pendant les deux
 * premières scènes qui n'ont besoin d'aucun appareil. Au moment où le Tecnam
 * doit apparaître, il est déjà là.
 */
preloadModels('tecnam', 'a350')

/**
 * État de vol déduit de la progression, pour les instruments du Tecnam.
 *
 * Les valeurs suivent la narration plutôt qu'un modèle de vol : l'appareil est à
 * l'arrêt sur la piste au début, puis prend de la vitesse et cabre. Les bornes
 * viennent des marquages publiés du P2010 — décrochage lisse à 59 kt, plage
 * normale jusqu'à 132 — de sorte que l'aiguille traverse l'arc vert et non un
 * intervalle inventé.
 */
function flightAt(prog: number): FlightState {
  const roll = ramp(prog, INTRO.takeoff, 0.62)
  return {
    ...restingState(),
    ias: lerp(0, 95, ramp(prog, INTRO.planeAppears, 0.55)),
    altitude: lerp(0, 3200, roll),
    pitch: window4(prog, INTRO.takeoff, 0.51, 0.56, 0.64) * 9,
    roll: Math.sin(prog * 22) * 4 * roll,
    heading: 270,
    vs: roll * 700,
  }
}

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
    // Pas de scene.background : le décor vient de la couche Backdrop, en
    // DOM, derrière un canevas transparent. Le brouillard, lui, reste — il
    // teinte les objets et donne la profondeur.
    return () => {
      scene.fog = null
    }
  }, [scene, fog])

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
    // Le Tecnam tient les scènes d'avant le décollage — « une machine », celle
    // sur laquelle on apprend. Il se retire quand l'A350 prend la suite, selon
    // le duo arrêté par l'auteur du projet.
    const outside =
      window4(prog, INTRO.planeAppears - 0.03, INTRO.planeAppears + 0.02, 0.315, 0.345) +
      window4(prog, 0.455, 0.49, INTRO.takeoff + 0.02, INTRO.takeoff + 0.06)
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
      {/* Le vrai Tecnam P2010, non plus une cellule bâtie en primitives : le
          §3 du cahier des charges l'exige, et le modèle est prêt. L'hélice
          tourne, le train se replie. */}
      <Suspense fallback={null}>
        <Model
          model="tecnam"
          instruments
          getFlight={() => flightAt(p())}
          getSpin={() => lerp(2, 34, ramp(p(), 0.2, 0.5))}
          getGear={() => ramp(p(), INTRO.takeoff + 0.02, INTRO.takeoff + 0.09)}
          scale={density < 0.7 ? 0.42 : 0.46}
          rotation={[0, Math.PI / 2, 0]}
        />
      </Suspense>
    </group>
  )
}

/* ----------------------------------------------------------------- A350 */

/**
 * L'AIRBUS A350-1000 — « une première fois », l'horizon du parcours.
 *
 * C'est lui qui décolle, monte et se laisse regarder sous tous les angles. La
 * contrainte du §1 du cahier des charges — « on doit pouvoir tourner autour de
 * l'avion, voir les détails » — est honorée ici : le défilement fait tourner
 * l'appareil sur près d'un demi-tour, si bien que le dessus des ailes, les
 * moteurs et la dérive se découvrent en descendant.
 *
 * Le train rentre pour de vrai, ses deux atterrisseurs principaux occupant des
 * meshes distincts, et les soufflantes tournent. C'est tout l'objet du soin pris
 * à ne jamais fusionner les meshes pendant la compression.
 */
function A350Rig({ density }: { density: number }) {
  const rig = useRef<THREE.Group>(null)
  const [mounted, setMounted] = useState(false)

  useFrame((state) => {
    const prog = p()

    // 2,94 Mo et 256 945 triangles : monté seulement autour de sa fenêtre.
    const near = prog > INTRO.takeoff - 0.06 && prog < 0.86
    if (near !== mounted) setMounted(near)

    const g = rig.current
    if (!g) return

    const show = window4(prog, INTRO.takeoff - 0.02, INTRO.takeoff + 0.04, 0.78, 0.84)
    g.visible = show > 0.01

    const t = state.clock.elapsedTime
    const climb = ramp(prog, INTRO.takeoff, INTRO.dreamHigh)

    // Orbite pilotée par le défilement : c'est la rotation libre exigée.
    g.rotation.y = Math.PI * 0.35 + ramp(prog, INTRO.takeoff, 0.78) * Math.PI * 0.95

    // Rotation autour du train principal puis retour en palier.
    g.rotation.x = -window4(prog, INTRO.takeoff, 0.5, 0.55, 0.64) * 0.16
    g.rotation.z = Math.sin(t * 0.28) * 0.03 * climb
    g.position.y = -0.3 + climb * 0.5 + Math.sin(t * 0.42) * 0.06 * climb
  })

  return (
    <group ref={rig} visible={false}>
      {mounted && (
        <Suspense fallback={null}>
          <Model
            model="a350"
            // À 73,83 m de long, l'appareil demande une échelle bien plus petite
            // que le Tecnam pour tenir dans le même cadre.
            scale={density < 0.7 ? 0.052 : 0.058}
            getSpin={() => lerp(0.5, 9, ramp(p(), INTRO.takeoff - 0.04, 0.56))}
            getGear={() => ramp(p(), INTRO.takeoff + 0.03, INTRO.takeoff + 0.11)}
          />
        </Suspense>
      )}
    </group>
  )
}

/* --------------------------------------------------------------- COCKPIT */

/**
 * Le poste de pilotage, monté seulement pendant sa fenêtre.
 *
 * Ses 333 500 triangles n'ont rien à faire dans les scènes où l'on est dehors :
 * on le démonte alors entièrement plutôt que de le rendre invisible, ce qui
 * libère aussi son coût de dessin.
 */
function CockpitRig() {
  const [mounted, setMounted] = useState(false)
  const group = useRef<THREE.Group>(null)

  useFrame(() => {
    const prog = p()
    const near = prog > 0.28 && prog < 0.5
    if (near !== mounted) setMounted(near)

    const g = group.current
    if (!g) return
    const fade = window4(prog, 0.315, 0.35, 0.435, 0.465)
    g.visible = fade > 0.01
    // On avance dans le poste à mesure que la séquence intérieure progresse.
    g.position.z = lerp(-2.4, -1.1, remap(prog, 0.3, 0.45, 0, 1))
  })

  return (
    <group ref={group} position={[0, 0.1, -1.05]}>
      {mounted && (
        <Model
          model="cockpit"
          scale={0.34}
          rotation={[0, Math.PI, 0]}
          position={[0, -0.42, 0]}
        />
      )}
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

      <A350Rig density={density} />

      {/* Le poste de pilotage A400M remplace le cockpit en primitives. Il n'est
          monté que pendant sa fenêtre : 333 500 triangles ne doivent pas peser
          sur les scènes où on ne les voit pas. */}
      <Suspense fallback={null}>
        <CockpitRig />
      </Suspense>

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
          // Transparent : les plaques du storyboard sont peintes DERRIÈRE le
          // canevas, en DOM. Une texture 3D les aurait rééchantillonnées et
          // fait perdre en netteté, pour un plan qui ne bouge pas.
          alpha: true,
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
