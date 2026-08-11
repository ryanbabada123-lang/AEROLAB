import { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import ErrorBoundary from '@/components/ErrorBoundary'
import { dressModel, type DressReport } from './modelMaterials'
import { createInstruments, type FlightState, type InstrumentSet } from './instruments'

/**
 * CHARGEMENT DES MODÈLES RÉELS
 *
 * Remplace la géométrie construite en primitives qui tenait lieu d'avion et de
 * poste de pilotage jusqu'ici — ce que le cahier des charges interdit
 * explicitement en son §3 : « bannir tout avion ou objet généré avec des
 * primitives basiques ».
 *
 * Trois choses sont faites au chargement, et dans cet ordre :
 *
 *   1. la scène est CLONÉE, car `useGLTF` met en cache le document chargé et
 *      deux scènes qui partageraient les mêmes objets se disputeraient leurs
 *      transformations ;
 *   2. les matériaux sont posés par les règles du site, les modèles arrivant
 *      sans leurs textures ;
 *   3. les organes dont l'animation dépend sont retrouvés par leur nom et
 *      exposés, faute de quoi il n'y aurait ni rentrée du train ni rotation des
 *      soufflantes.
 */

/*
 * Les chemins sont construits sur la base du site, jamais écrits en absolu.
 *
 * Le §8 du cahier des charges veut un site ouvrable d'un double-clic, donc
 * servi par le protocole `file://`. Or un chemin absolu comme `/models/x.glb`
 * y désigne la racine du disque : les modèles ne se chargeaient pas, et rien ne
 * le signalait à la construction. En passant par `BASE_URL`, le build
 * mono-fichier — qui pose sa base à `./` — produit des chemins relatifs qui
 * fonctionnent aussi bien depuis un dossier que depuis un serveur.
 */
const BASE = import.meta.env.BASE_URL || '/'

export const MODELS = {
  a350: `${BASE}models/a350-1000.glb`,
  tecnam: `${BASE}models/tecnam-p2010.glb`,
  cockpit: `${BASE}models/a400m-flightdeck.glb`,
} as const

export type ModelKey = keyof typeof MODELS

/**
 * Noms des pièces à exposer, par modèle. Relevés sur les fichiers eux-mêmes par
 * `scripts/model-parts.mjs` : les noms de nœuds glTF et de meshes diffèrent, et
 * viser d'après le fichier source mène à des règles qui ne s'appliquent jamais.
 */
const PARTS: Record<ModelKey, Record<string, string[]>> = {
  a350: {
    /** Soufflantes gauche et droite : disques de 3,3 m, à mettre en rotation. */
    fans: ['Object_0', 'Object_1'],
    /** Atterrisseurs principaux : c'est ce découpage qui rend la rentrée du train possible. */
    mainGear: ['Object_2', 'Object_3'],
    /** Atterrisseur avant, mêlé à d'autres organes dans la même pièce. */
    noseGear: ['Object_4'],
  },
  tecnam: {
    /** Hélice et capot : la pièce avant, qui porte aussi le disque hélice. */
    prop: ['Object_10'],
    gear: ['Object_9'],
  },
  cockpit: {},
}

export interface LoadedModel {
  scene: THREE.Group
  /** Groupes nommés, prêts à être animés. Vide si le modèle n'en déclare pas. */
  parts: Record<string, THREE.Object3D[]>
  report: DressReport
  instruments?: InstrumentSet
}

/**
 * Charge, habille et prépare un modèle. Le résultat est mémorisé sur la clé du
 * modèle : un même appareil réutilisé ailleurs sur le site ne se recharge pas.
 */
export function useModel(
  key: ModelKey,
  options: { instruments?: boolean } = {},
): LoadedModel {
  const gltf = useGLTF(MODELS[key])
  const withInstruments = options.instruments === true

  return useMemo(() => {
    const scene = gltf.scene.clone(true)

    const instruments = withInstruments ? createInstruments() : undefined

    const report = dressModel(scene, {
      // Identifiant du modèle pour les règles de livrée : le nom de fichier nu,
      // indépendamment de la base.
      model: MODELS[key].split('/').pop()!.replace(/\.glb$/, ''),
      displays: instruments?.textures,
    })

    const parts: Record<string, THREE.Object3D[]> = {}
    for (const [group, names] of Object.entries(PARTS[key])) {
      const found: THREE.Object3D[] = []
      scene.traverse((o) => {
        if (names.includes(o.name)) found.push(o)
      })
      parts[group] = found
    }

    return { scene, parts, report, instruments }
  }, [gltf, key, withInstruments])
}

/** Précharge les modèles pendant les scènes qui n'en ont pas besoin. */
/**
 * LES MODÈLES SONT-ILS SEULEMENT ATTEIGNABLES ?
 *
 * Sous `file://`, `fetch` est refusé par tous les navigateurs : c'est une
 * règle d'origine, pas un fichier manquant, et aucun réglage ne la lève.
 * Tenter le chargement n'y produit donc qu'une promesse rejetée — qui
 * remonte à travers Suspense jusqu'à la première frontière d'erreur et
 * emporte TOUTE la scène avec elle.
 *
 * C'est exactement ce qui se passait : le document mono-fichier ouvert d'un
 * double-clic perdait l'intégralité de son introduction en 3D à cause d'un
 * seul `.glb` inaccessible, et le repli discret de la frontière effaçait
 * jusqu'à la trace de l'incident. On préfère ne pas essayer.
 */
export function modelesAtteignables(): boolean {
  return typeof location === 'undefined' || location.protocol !== 'file:'
}

export function preloadModels(...keys: ModelKey[]) {
  if (!modelesAtteignables()) return
  for (const k of keys) useGLTF.preload(MODELS[k])
}

/* ------------------------------------------------------------------- rendu */

export interface ModelProps {
  model: ModelKey
  /** Instruments vivants sur les afficheurs. Coûteux : réservé au Tecnam vu de près. */
  instruments?: boolean
  /** État de vol lu à chaque frame, pour les instruments. */
  getFlight?: () => FlightState
  /** Rentrée du train, de 0 sorti à 1 rentré. */
  getGear?: () => number
  /** Vitesse de rotation des soufflantes ou de l'hélice, en tours par seconde. */
  getSpin?: () => number
}

type ModelToutesProps = ModelProps &
  Omit<React.ComponentProps<'group'>, 'children'>

/**
 * Pose un modèle dans la scène — ou ne pose rien du tout.
 *
 * DEUX GARDES, ET CHACUNE A SA RAISON. La première évite d'appeler le
 * chargeur quand les fichiers ne peuvent pas être atteints : sous `file://`
 * la promesse serait rejetée et emporterait la scène entière. La seconde est
 * une frontière d'erreur PAR MODÈLE : si l'un des trois manque ou est
 * corrompu, lui seul disparaît, et l'introduction garde ses autres objets.
 *
 * Le repli est `null` et non un `<div>` : à l'intérieur d'un canevas
 * three.js, le réconciliateur ne connaît que des objets de scène.
 */
export default function Model(props: ModelToutesProps) {
  if (!modelesAtteignables()) return null
  return (
    <ErrorBoundary silent>
      <ModelCharge {...props} />
    </ErrorBoundary>
  )
}

/**
 * Charge le modèle et anime ce qui doit l'être. Toutes les valeurs sont lues
 * par fonction dans `useFrame`, jamais reçues en props changeantes : c'est le
 * principe du dépôt, aucun rendu React pendant le défilement.
 */
function ModelCharge({
  model,
  instruments = false,
  getFlight,
  getGear,
  getSpin,
  ...groupProps
}: ModelToutesProps) {
  const { scene, parts, instruments: set } = useModel(model, { instruments })
  const spin = useRef(0)
  const lastFlight = useRef<string>('')

  // Les instruments ne sont redessinés que lorsque l'état de vol change
  // réellement : un cadran repeint à chaque frame coûterait cher pour rien.
  useEffect(() => {
    if (!set || !getFlight) return
    let raf = 0
    const tick = () => {
      const f = getFlight()
      const key = `${f.ias | 0}|${f.altitude | 0}|${f.pitch.toFixed(1)}|${f.roll.toFixed(1)}|${f.qnh | 0}`
      if (key !== lastFlight.current) {
        lastFlight.current = key
        set.update(f)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [set, getFlight])

  useEffect(() => () => set?.dispose(), [set])

  return (
    <group {...groupProps}>
      <primitive object={scene} />
      <Animator parts={parts} getGear={getGear} getSpin={getSpin} spin={spin} />
    </group>
  )
}

/**
 * Animation des organes. Séparée du montage pour que `useFrame` ne soit abonné
 * que si quelque chose bouge.
 */
function Animator({
  parts,
  getGear,
  getSpin,
  spin,
}: {
  parts: Record<string, THREE.Object3D[]>
  getGear?: () => number
  getSpin?: () => number
  spin: React.MutableRefObject<number>
}) {
  useFrame((_, dt) => {
    if (getSpin) {
      spin.current += getSpin() * dt * Math.PI * 2
      for (const o of parts.fans ?? []) o.rotation.x = spin.current
      for (const o of parts.prop ?? []) o.rotation.x = spin.current
    }

    if (getGear) {
      const g = Math.max(0, Math.min(1, getGear()))
      // Le train pivote vers l'intérieur de l'aile : une rotation, pas une
      // disparition. C'est ce détail qui distingue un vrai décollage.
      for (const o of parts.mainGear ?? []) o.rotation.z = g * Math.PI * 0.48
      for (const o of parts.noseGear ?? []) o.rotation.z = g * Math.PI * 0.3
      for (const o of parts.gear ?? []) o.visible = g < 0.98
    }
  })
  return null
}
