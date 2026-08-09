/**
 * FLIGHT LOG — état de progression (§24 / §42).
 *
 * Persisté en localStorage. Aucune gamification enfantine : pas de points,
 * pas de badges. On enregistre des faits — ce qui a été lu, tenté, réussi —
 * et l'interface les présente comme un carnet de vol.
 */

import { useSyncExternalStore } from 'react'

export interface QuizAttempt {
  quizId: string
  courseId: string
  /** Identifiants des questions ratées, pour "notions à revoir". */
  missed: string[]
  correct: number
  total: number
  at: number
}

export interface FlightLog {
  version: 1
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
}

const KEY = 'aerolab.flightlog.v1'

const empty = (): FlightLog => ({
  version: 1,
  completed: [],
  bookmarks: {},
  labs: [],
  attempts: [],
  studyMs: 0,
  startedAt: Date.now(),
})

function read(): FlightLog {
  if (typeof localStorage === 'undefined') return empty()
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    const parsed = JSON.parse(raw) as FlightLog
    if (parsed?.version !== 1) return empty()
    return { ...empty(), ...parsed }
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
    commit({ ...state, completed: [...state.completed, courseId] })
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
    commit({ ...state, labs: [...state.labs, labId] })
  },

  recordAttempt(a: Omit<QuizAttempt, 'at'>) {
    commit({ ...state, attempts: [...state.attempts, { ...a, at: Date.now() }] })
  },

  addStudyTime(ms: number) {
    if (ms < 1000) return
    commit({ ...state, studyMs: state.studyMs + ms })
  },

  reset() {
    commit(empty())
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
