/**
 * ESPACE ÉLÈVE — le profil, et sa portabilité.
 *
 * UNE CONTRAINTE DÉCIDE DE TOUT ICI. Le cahier des charges impose que le site
 * s'ouvre par un double-clic sur `index.html`, sans serveur à lancer. Or un
 * compte véritable — identifiant, mot de passe, synchronisation entre appareils
 * — suppose un serveur qui le vérifie et le conserve. Les deux exigences sont
 * incompatibles : il n'y a personne pour authentifier quoi que ce soit.
 *
 * Ce qui est donc bâti n'est pas un compte, et l'interface ne fait pas semblant
 * d'en être un : c'est un profil local, gardé dans le navigateur, doublé d'un
 * FICHIER que l'élève exporte et réimporte. Ce fichier est la seule chose qui
 * suive l'élève d'un appareil à l'autre, et il tient le rôle qu'un compte
 * aurait tenu, à ceci près qu'il lui appartient vraiment.
 *
 * Les conséquences sont dites à l'élève plutôt que cachées : effacer les données
 * du navigateur efface la progression, et rien ne se synchronise tout seul.
 */

import { useSyncExternalStore } from 'react'
import { flightLog, type FlightLog } from './progress'

export type Goal = 'bia' | 'ppl' | 'ligne' | 'curiosite'

export interface StudentProfile {
  version: 1
  /** Prénom ou pseudonyme. Jamais transmis nulle part : rien ne sort du poste. */
  name: string
  goal: Goal | null
  /** Date d'examen visée, au format ISO court. Vide si aucune. */
  examDate: string
  createdAt: number
}

export const GOALS: { id: Goal; label: string; line: string }[] = [
  { id: 'bia', label: 'Passer le BIA', line: "L'examen de fin d'année scolaire." },
  { id: 'ppl', label: 'Passer le PPL', line: 'La licence de pilote privé.' },
  {
    id: 'ligne',
    label: 'Devenir pilote de ligne',
    line: 'Le parcours complet, du premier vol à la ligne.',
  },
  {
    id: 'curiosite',
    label: 'Comprendre, simplement',
    line: 'Sans examen à passer, par goût du vol.',
  },
]

const KEY = 'aerolab.student.v1'

const empty = (): StudentProfile => ({
  version: 1,
  name: '',
  goal: null,
  examDate: '',
  createdAt: Date.now(),
})

function read(): StudentProfile {
  if (typeof localStorage === 'undefined') return empty()
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    const parsed = JSON.parse(raw) as StudentProfile
    if (parsed?.version !== 1) return empty()
    return { ...empty(), ...parsed }
  } catch {
    return empty()
  }
}

let state = read()
const listeners = new Set<() => void>()

function commit(next: StudentProfile) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* Mode privé ou quota atteint : la session reste utilisable en mémoire. */
  }
  for (const fn of listeners) fn()
}

export const student = {
  get: () => state,

  subscribe(fn: () => void) {
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  },

  set(patch: Partial<Omit<StudentProfile, 'version' | 'createdAt'>>) {
    commit({ ...state, ...patch })
  },

  forget() {
    commit(empty())
  },
}

export function useStudent(): StudentProfile {
  return useSyncExternalStore(student.subscribe, student.get, student.get)
}

/** Le profil est-il rempli assez pour que l'espace ait du sens ? */
export function isSignedIn(p: StudentProfile): boolean {
  return p.name.trim().length > 0
}

/* ------------------------------------------------------- fichier portable */

interface Bundle {
  kind: 'aerolab.eleve'
  version: 1
  exportedAt: string
  profile: StudentProfile
  flightLog: FlightLog
}

/**
 * Assemble profil et carnet de vol en un seul fichier. C'est ce fichier qui
 * remplace le compte : il se garde, se transporte, s'envoie à un instructeur.
 */
export function exportBundle(profile: StudentProfile, log: FlightLog): Bundle {
  return {
    kind: 'aerolab.eleve',
    version: 1,
    exportedAt: new Date().toISOString(),
    profile,
    flightLog: log,
  }
}

/** Nom de fichier lisible, daté, et sans caractère qui gênerait un système. */
export function exportFilename(profile: StudentProfile): string {
  const who =
    profile.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase() || 'eleve'
  const day = new Date().toISOString().slice(0, 10)
  return `aerolab-${who}-${day}.json`
}

export type ImportResult =
  | { ok: true; profile: StudentProfile; log: FlightLog }
  | { ok: false; reason: string }

/**
 * Relit un fichier exporté. La validation est explicite et refuse plutôt que de
 * réparer : importer une progression à moitié comprise vaut moins que de dire
 * que le fichier ne convient pas.
 */
export function parseBundle(text: string): ImportResult {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return { ok: false, reason: "Ce fichier n'est pas lisible." }
  }

  const b = raw as Partial<Bundle>
  if (b?.kind !== 'aerolab.eleve') {
    return {
      ok: false,
      reason: "Ce fichier ne vient pas d'AERO LAB.",
    }
  }
  if (b.version !== 1) {
    return {
      ok: false,
      reason: `Ce fichier est en version ${String(b.version)}, incompatible avec cette version du site.`,
    }
  }
  if (!b.profile || typeof b.profile.name !== 'string') {
    return { ok: false, reason: 'Le profil est absent de ce fichier.' }
  }
  if (!b.flightLog || !Array.isArray(b.flightLog.completed)) {
    return { ok: false, reason: 'Le carnet de vol est absent de ce fichier.' }
  }

  return {
    ok: true,
    profile: { ...empty(), ...b.profile, version: 1 },
    log: b.flightLog,
  }
}

/** Applique un fichier relu : le profil ET le carnet sont remplacés. */
export function applyBundle(result: Extract<ImportResult, { ok: true }>) {
  commit(result.profile)
  flightLog.replace(result.log)
}

/* --------------------------------------------------------------- échéance */

/** Jours restants avant l'examen visé. `null` si aucune date. */
export function daysUntil(examDate: string): number | null {
  if (!examDate) return null
  const target = new Date(`${examDate}T00:00:00`)
  if (Number.isNaN(target.getTime())) return null
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - today.getTime()) / 86400000)
}
