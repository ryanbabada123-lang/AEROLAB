/**
 * CARNET DE BORD DE L'ÉLÈVE — l'état de progression, et lui seul.
 *
 * Ce module enregistre des FAITS : ce qui a été ouvert, lu, tenté, réussi,
 * mis de côté. Il ne calcule rien et n'affiche rien. Les pourcentages, les
 * badges, les matières faibles et les recommandations sont dérivés ailleurs
 * (`src/lib/bilan.ts`), à partir de ces faits — jamais stockés.
 *
 * POURQUOI CETTE SÉPARATION. Un badge stocké devient faux dès qu'on change
 * sa règle, et une progression stockée en pourcentage devient fausse dès
 * qu'on ajoute un chapitre. Recalculer coûte quelques microsecondes et ne
 * ment jamais.
 *
 * PERSISTANCE. `localStorage`, sous une clé versionnée. Le carnet est la
 * source de vérité, y compris quand un compte existe : la synchronisation
 * viendra s'y brancher, pas le remplacer — le site doit rester utilisable
 * sans compte et hors ligne.
 */

import { useSyncExternalStore } from 'react'

/* ------------------------------------------------------------------ types */

export interface QuizAttempt {
  quizId: string
  courseId: string
  /** Identifiants des questions ratées, pour « Mes erreurs ». */
  missed: string[]
  correct: number
  total: number
  at: number
}

/** Une visite datée. C'est la matière de l'historique et du « reprendre ». */
export interface Visite {
  /** Identifiant du contenu : `cours:bia-meteo`, `labo:lift-airfoil`… */
  ref: string
  /** Intitulé au moment de la visite, pour ne pas dépendre du contenu. */
  titre: string
  /** Adresse à rouvrir. */
  to: string
  at: number
}

/** État d'une leçon. Le BIA n'a que des sections ; le PPL aura des leçons. */
export type EtatLecon = 'en-cours' | 'terminee'

export interface Objectif {
  id: string
  /** Ce que l'élève se fixe, écrit par lui ou choisi dans une liste. */
  intitule: string
  /** Nature, pour savoir quoi compter. */
  mesure: 'cours' | 'qcm' | 'jours' | 'matiere'
  /** Valeur à atteindre. */
  cible: number
  /** Matière concernée, quand la mesure le demande. */
  sujet?: string
  creeLe: number
  /** Date d'échéance facultative, en millisecondes. */
  echeance?: number
}

export interface FlightLog {
  version: 2
  /** ids de cours terminés */
  completed: string[]
  /** courseId → dernière section vue */
  bookmarks: Record<string, string>
  /** simulations réellement manipulées (labId) */
  labs: string[]
  attempts: QuizAttempt[]
  /** millisecondes cumulées passées sur du contenu pédagogique */
  studyMs: number
  startedAt: number

  /* ---- ajouts de la version 2 ---- */

  /** Contenus mis de côté : `cours:<id>`, `schema:<id>`… */
  favoris: string[]
  /** Visites, de la plus récente à la plus ancienne, bornées. */
  historique: Visite[]
  /** `matiere/lecon` → état. Prévu pour le PPL, utilisable partout. */
  lecons: Record<string, EtatLecon>
  objectifs: Objectif[]
  /**
   * Jours où l'élève a travaillé, au format `AAAA-MM-JJ`.
   *
   * On garde les JOURS et non un compteur de série : un compteur se remet à
   * zéro et efface l'histoire, alors qu'une liste de jours permet de
   * recalculer la série en cours, la plus longue, et de ne jamais pénaliser
   * quelqu'un qui s'arrête une semaine.
   */
  jours: string[]
}

/* ------------------------------------------------------- lecture / écriture */

const KEY = 'aerolab.flightlog.v1'

const empty = (): FlightLog => ({
  version: 2,
  completed: [],
  bookmarks: {},
  labs: [],
  attempts: [],
  studyMs: 0,
  startedAt: Date.now(),
  favoris: [],
  historique: [],
  lecons: {},
  objectifs: [],
  jours: [],
})

/** Bornes : un carnet qui grossit sans fin finirait par saturer le stockage. */
const MAX_HISTORIQUE = 200
const MAX_JOURS = 400

/**
 * Migration v1 → v2.
 *
 * La clé de stockage ne change PAS : changer de clé abandonnerait la
 * progression de ceux qui utilisent déjà le site. On complète l'objet avec
 * les champs neufs, on garde tout le reste tel quel.
 */
function migrer(brut: unknown): FlightLog {
  const base = empty()
  if (!brut || typeof brut !== 'object') return base
  /*
    `version` est relue en `number` et non au type courant : un carnet
    enregistré porte une version ANTÉRIEURE, que le type ne connaît plus.
    Le comparer au type actuel ferait dire au compilateur que le test est
    impossible — alors que c'est justement le seul cas qui compte.
  */
  const v = brut as Omit<Partial<FlightLog>, 'version'> & { version?: number }
  if (v.version !== 1 && v.version !== 2) return base
  return { ...base, ...v, version: 2 }
}

function read(): FlightLog {
  if (typeof localStorage === 'undefined') return empty()
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    return migrer(JSON.parse(raw))
  } catch {
    return empty()
  }
}

let state = read()
const listeners = new Set<() => void>()

function commit(next: FlightLog) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* quota / mode privé : la session reste utilisable en mémoire */
  }
  for (const fn of listeners) fn()
}

/**
 * Jour courant, au format trié `AAAA-MM-JJ`.
 *
 * LE JOUR EST CELUI DE L'ÉLÈVE, PAS CELUI DE GREENWICH. `toISOString()`
 * donnait la date UTC : en France, une révision à 00 h 30 était classée la
 * veille, si bien que deux nuits de suite comptaient pour un seul jour et
 * que la série de régularité se cassait sans raison. On lit donc les
 * composantes locales.
 */
export const jour = (t = Date.now()) => {
  const d = new Date(t)
  const deux = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${deux(d.getMonth() + 1)}-${deux(d.getDate())}`
}

/** Marque le jour comme travaillé. Appelé par toute action pédagogique. */
function avecJour(s: FlightLog): FlightLog {
  const j = jour()
  if (s.jours[s.jours.length - 1] === j) return s
  const jours = [...s.jours.filter((x) => x !== j), j].slice(-MAX_JOURS)
  return { ...s, jours }
}

/* ----------------------------------------------------------------- actions */

export const flightLog = {
  get: () => state,

  subscribe(fn: () => void) {
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  },

  completeCourse(courseId: string) {
    if (state.completed.includes(courseId)) return
    commit(avecJour({ ...state, completed: [...state.completed, courseId] }))
  },

  uncompleteCourse(courseId: string) {
    commit({
      ...state,
      completed: state.completed.filter((c) => c !== courseId),
    })
  },

  bookmark(courseId: string, sectionId: string) {
    if (state.bookmarks[courseId] === sectionId) return
    commit({
      ...state,
      bookmarks: { ...state.bookmarks, [courseId]: sectionId },
    })
  },

  useLab(labId: string) {
    if (state.labs.includes(labId)) return
    commit(avecJour({ ...state, labs: [...state.labs, labId] }))
  },

  recordAttempt(a: Omit<QuizAttempt, 'at'>) {
    commit(
      avecJour({
        ...state,
        attempts: [...state.attempts, { ...a, at: Date.now() }],
      }),
    )
  },

  addStudyTime(ms: number) {
    if (ms < 1000) return
    commit({ ...state, studyMs: state.studyMs + ms })
  },

  /* ---- version 2 ---- */

  /**
   * Enregistre une visite.
   *
   * Une même référence n'apparaît qu'une fois : on remonte l'entrée
   * existante plutôt que d'empiler dix lignes identiques quand l'élève
   * revient sur un chapitre.
   */
  visiter(v: Omit<Visite, 'at'>) {
    const historique = [
      { ...v, at: Date.now() },
      ...state.historique.filter((h) => h.ref !== v.ref),
    ].slice(0, MAX_HISTORIQUE)
    commit(avecJour({ ...state, historique }))
  },

  basculerFavori(ref: string) {
    const favoris = state.favoris.includes(ref)
      ? state.favoris.filter((f) => f !== ref)
      : [...state.favoris, ref]
    commit({ ...state, favoris })
  },

  marquerLecon(ref: string, etat: EtatLecon | null) {
    const lecons = { ...state.lecons }
    if (etat === null) delete lecons[ref]
    else lecons[ref] = etat
    commit(avecJour({ ...state, lecons }))
  },

  ajouterObjectif(o: Omit<Objectif, 'id' | 'creeLe'>) {
    const objectif: Objectif = {
      ...o,
      id: `obj-${Date.now().toString(36)}`,
      creeLe: Date.now(),
    }
    commit({ ...state, objectifs: [...state.objectifs, objectif] })
  },

  retirerObjectif(id: string) {
    commit({ ...state, objectifs: state.objectifs.filter((o) => o.id !== id) })
  },

  reset() {
    commit(empty())
  },

  /**
   * Remplace tout le carnet. Sert à l'import d'un fichier d'élève : on ne
   * fusionne pas deux progressions, car on ne saurait pas laquelle croire sur un
   * même chapitre. Le fichier importé fait autorité, et l'interface avertit
   * avant d'écraser.
   */
  replace(next: unknown) {
    commit(migrer(next))
  },
}

export function useFlightLog(): FlightLog {
  return useSyncExternalStore(flightLog.subscribe, flightLog.get, flightLog.get)
}

/** Notions à revoir : questions ratées lors de la dernière tentative de chaque quiz. */
export function weakPoints(log: FlightLog): QuizAttempt[] {
  const latest = new Map<string, QuizAttempt>()
  for (const a of log.attempts) {
    const prev = latest.get(a.quizId)
    if (!prev || a.at > prev.at) latest.set(a.quizId, a)
  }
  return [...latest.values()].filter((a) => a.missed.length > 0)
}
