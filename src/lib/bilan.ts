import { BIA_SUBJECTS, COURSES, courseById } from '@/content'
import { QUIZZES } from '@/content/quizzes'
import type { FlightLog, Objectif, QuizAttempt } from '@/lib/progress'
import { jour } from '@/lib/progress'

/**
 * TOUT CE QUI SE DÉDUIT DU CARNET.
 *
 * Progressions, maîtrise, matières faibles, badges, série de révision,
 * avancement des objectifs. RIEN de tout cela n'est stocké : un badge écrit
 * en mémoire devient faux le jour où l'on change sa règle, et une
 * progression figée en pourcentage devient fausse dès qu'un chapitre
 * s'ajoute. Ici tout est recalculé à la lecture, à partir des faits bruts.
 *
 * UNE RÈGLE D'HONNÊTETÉ TRAVERSE CE FICHIER : on ne confond jamais « zéro »
 * et « on ne sait pas ». Une matière sur laquelle aucun QCM n'a été tenté
 * n'a pas 0 % de maîtrise — elle n'en a aucune de mesurable, et l'interface
 * doit le dire ainsi. C'est la différence entre un indicateur pédagogique et
 * une note qui décourage.
 */

/* --------------------------------------------------------- progressions */

export interface Avancement {
  faits: number
  total: number
  /** Part de 0 à 1. Vaut 0 quand le total est nul, jamais NaN. */
  part: number
}

const avancement = (faits: number, total: number): Avancement => ({
  faits,
  total,
  part: total > 0 ? faits / total : 0,
})

/** Cours d'une filière qui portent réellement du contenu. */
function coursDe(track: string) {
  return COURSES.filter((c) => c.track === track && c.status !== 'awaiting-content')
}

export function progressionFiliere(log: FlightLog, track: string): Avancement {
  const liste = coursDe(track)
  const faits = liste.filter((c) => log.completed.includes(c.id)).length
  return avancement(faits, liste.length)
}

export function progressionGlobale(log: FlightLog): Avancement {
  const liste = COURSES.filter((c) => c.status !== 'awaiting-content')
  const faits = liste.filter((c) => log.completed.includes(c.id)).length
  return avancement(faits, liste.length)
}

export interface LigneMatiere {
  id: string
  nom: string
  avancement: Avancement
  /** Maîtrise mesurée par les QCM, ou `null` si aucun n'a été tenté. */
  maitrise: number | null
  /** Adresse du premier cours de la matière, quand il existe. */
  to?: string
}

/** Une ligne par matière du BIA : avancement, maîtrise, et où reprendre. */
export function progressionParMatiere(log: FlightLog): LigneMatiere[] {
  return BIA_SUBJECTS.map((s) => {
    const cours = s.courses.map(courseById).filter(Boolean)
    const faits = cours.filter((c) => log.completed.includes(c!.id)).length
    const premier = cours[0]
    return {
      id: s.id,
      nom: s.name,
      avancement: avancement(faits, cours.length),
      maitrise: maitriseMatiere(log, s.id),
      to: premier ? `/cours/${premier.track}/${premier.id}` : undefined,
    }
  })
}

/* ------------------------------------------------------------- maîtrise */

/** Tentatives retenues : la DERNIÈRE de chaque quiz, pas toutes. */
function dernieresTentatives(log: FlightLog): QuizAttempt[] {
  const parQuiz = new Map<string, QuizAttempt>()
  for (const a of log.attempts) {
    const prec = parQuiz.get(a.quizId)
    if (!prec || a.at > prec.at) parQuiz.set(a.quizId, a)
  }
  return [...parQuiz.values()]
}

/**
 * Maîtrise estimée d'une matière, de 0 à 1 — ou `null`.
 *
 * `null` signifie « pas mesurable », et c'est un résultat à part entière :
 * afficher 0 % à quelqu'un qui n'a simplement pas encore fait de QCM serait
 * un mensonge décourageant.
 *
 * Le calcul ne retient que la DERNIÈRE tentative de chaque quiz : on mesure
 * où en est l'élève aujourd'hui, pas la moyenne de ses essais d'il y a un
 * mois. Ce n'est ni une note ni une prédiction d'examen.
 */
export function maitriseMatiere(log: FlightLog, sujetId: string): number | null {
  const sujet = BIA_SUBJECTS.find((s) => s.id === sujetId)
  if (!sujet) return null

  let justes = 0
  let posees = 0
  for (const a of dernieresTentatives(log)) {
    const cours = courseById(a.courseId)
    if (!cours || !sujet.courses.includes(cours.id)) continue
    justes += a.correct
    posees += a.total
  }
  return posees > 0 ? justes / posees : null
}

/** Maîtrise toutes matières confondues, ou `null` si rien n'a été tenté. */
export function maitriseGlobale(log: FlightLog): number | null {
  const t = dernieresTentatives(log)
  const posees = t.reduce((n, a) => n + a.total, 0)
  if (posees === 0) return null
  return t.reduce((n, a) => n + a.correct, 0) / posees
}

/** Matières mesurées sous le seuil, de la plus faible à la moins faible. */
export function matieresFaibles(log: FlightLog, seuil = 0.7): LigneMatiere[] {
  return progressionParMatiere(log)
    .filter((m) => m.maitrise !== null && m.maitrise < seuil)
    .sort((a, b) => (a.maitrise ?? 1) - (b.maitrise ?? 1))
}

/* --------------------------------------------------------------- erreurs */

export interface Erreur {
  questionId: string
  quizId: string
  courseId: string
  /** Nombre de fois où la question a été ratée. */
  fois: number
  derniereFois: number
}

/**
 * Questions ratées, les plus récurrentes d'abord.
 *
 * On compte TOUTES les tentatives ici, contrairement à la maîtrise : une
 * question ratée trois fois puis réussie reste une question qui a résisté,
 * et c'est précisément ce qu'il faut revoir.
 */
export function erreurs(log: FlightLog): Erreur[] {
  const par = new Map<string, Erreur>()
  for (const a of log.attempts) {
    for (const q of a.missed) {
      const e = par.get(q)
      if (e) {
        e.fois++
        e.derniereFois = Math.max(e.derniereFois, a.at)
      } else {
        par.set(q, {
          questionId: q,
          quizId: a.quizId,
          courseId: a.courseId,
          fois: 1,
          derniereFois: a.at,
        })
      }
    }
  }
  return [...par.values()].sort(
    (x, y) => y.fois - x.fois || y.derniereFois - x.derniereFois,
  )
}

/** Questions encore ratées à la dernière tentative de leur quiz. */
export function erreursOuvertes(log: FlightLog): Erreur[] {
  const ouvertes = new Set(dernieresTentatives(log).flatMap((a) => a.missed))
  return erreurs(log).filter((e) => ouvertes.has(e.questionId))
}

/* ---------------------------------------------------------------- QCM */

export interface BilanQcm {
  tentatives: number
  questionsPosees: number
  bonnes: number
  mauvaises: number
  /** Taux de réussite sur l'ensemble des tentatives, ou `null`. */
  taux: number | null
  meilleurScore: number | null
  dernierScore: number | null
  dernierLe: number | null
}

export function bilanQcm(log: FlightLog): BilanQcm {
  const a = log.attempts
  const posees = a.reduce((n, x) => n + x.total, 0)
  const bonnes = a.reduce((n, x) => n + x.correct, 0)
  const scores = a.map((x) => (x.total ? x.correct / x.total : 0))
  const dernier = a.reduce<QuizAttempt | null>(
    (d, x) => (!d || x.at > d.at ? x : d),
    null,
  )
  return {
    tentatives: a.length,
    questionsPosees: posees,
    bonnes,
    mauvaises: posees - bonnes,
    taux: posees > 0 ? bonnes / posees : null,
    meilleurScore: scores.length ? Math.max(...scores) : null,
    dernierScore: dernier && dernier.total ? dernier.correct / dernier.total : null,
    dernierLe: dernier?.at ?? null,
  }
}

/* ----------------------------------------------------- série de révision */

export interface Serie {
  /** Jours consécutifs jusqu'à aujourd'hui ou hier. */
  encours: number
  /** La plus longue jamais tenue. */
  record: number
  /** Vrai si l'élève a déjà travaillé aujourd'hui. */
  aujourdhui: boolean
}

/**
 * Série de régularité.
 *
 * ELLE NE PÉNALISE JAMAIS. Une interruption remet le compteur en cours à
 * zéro mais le record se conserve, et la série reste « en vie » jusqu'à la
 * fin de la journée du lendemain : quelqu'un qui révise le soir puis le
 * surlendemain matin ne perd pas sa série pour quelques heures.
 */
export function serie(log: FlightLog): Serie {
  const jours = [...new Set(log.jours)].sort()
  if (jours.length === 0) return { encours: 0, record: 0, aujourdhui: false }

  const JOUR_MS = 86_400_000
  const enJours = (d: string) => Math.floor(Date.parse(d + 'T00:00:00Z') / JOUR_MS)

  let record = 1
  let courante = 1
  for (let i = 1; i < jours.length; i++) {
    courante = enJours(jours[i]) - enJours(jours[i - 1]) === 1 ? courante + 1 : 1
    record = Math.max(record, courante)
  }

  const auj = enJours(jour())
  const dernier = enJours(jours[jours.length - 1])
  const ecart = auj - dernier
  return {
    encours: ecart <= 1 ? courante : 0,
    record,
    aujourdhui: ecart === 0,
  }
}

/* ---------------------------------------------------------------- badges */

export interface Badge {
  id: string
  nom: string
  detail: string
  obtenu: boolean
  /** Avancement vers le badge, de 0 à 1, pour ceux qui se comptent. */
  part: number
}

/**
 * Badges, entièrement DÉDUITS des faits.
 *
 * Ils restent volontairement discrets : ce sont des repères, pas une
 * monnaie. Aucun badge ne se perd, aucun ne se compare à celui d'un autre.
 */
export function badges(log: FlightLog): Badge[] {
  const g = progressionGlobale(log)
  const q = bilanQcm(log)
  const s = serie(log)
  const matieresFinies = progressionParMatiere(log).filter(
    (m) => m.avancement.total > 0 && m.avancement.faits === m.avancement.total,
  ).length

  const palier = (
    id: string,
    nom: string,
    detail: string,
    valeur: number,
    cible: number,
  ): Badge => ({
    id,
    nom,
    detail,
    obtenu: valeur >= cible,
    part: Math.min(1, cible > 0 ? valeur / cible : 0),
  })

  return [
    palier('premier-cours', 'Premier cours', 'Un chapitre terminé', g.faits, 1),
    palier('dix-cours', 'Dix cours', 'Dix chapitres terminés', g.faits, 10),
    palier(
      'premiere-matiere',
      'Première matière',
      'Une matière terminée de bout en bout',
      matieresFinies,
      1,
    ),
    palier('cent-qcm', 'Cent questions', 'Cent questions répondues', q.questionsPosees, 100),
    palier(
      'neuf-dix',
      'Neuf sur dix',
      '90 % de réussite sur au moins 20 questions',
      q.questionsPosees >= 20 && (q.taux ?? 0) >= 0.9 ? 1 : 0,
      1,
    ),
    palier('serie-sept', 'Sept jours', 'Sept jours de révision d’affilée', s.record, 7),
  ]
}

/* ------------------------------------------------------------- objectifs */

/** Où en est un objectif, de 0 à 1, et sa valeur atteinte. */
export function avancementObjectif(
  log: FlightLog,
  o: Objectif,
): { valeur: number; part: number } {
  let valeur = 0
  switch (o.mesure) {
    case 'cours':
      valeur = progressionGlobale(log).faits
      break
    case 'qcm':
      valeur = bilanQcm(log).questionsPosees
      break
    case 'jours':
      valeur = new Set(log.jours).size
      break
    case 'matiere': {
      const m = progressionParMatiere(log).find((x) => x.id === o.sujet)
      valeur = m ? m.avancement.faits : 0
      break
    }
  }
  return { valeur, part: o.cible > 0 ? Math.min(1, valeur / o.cible) : 0 }
}

/* --------------------------------------------------- reprendre où on était */

export interface Reprise {
  titre: string
  to: string
  /** Ce qui justifie la proposition, affiché tel quel. */
  raison: string
}

/**
 * Que proposer derrière « Continuer mon apprentissage ».
 *
 * Dans l'ordre : le dernier contenu ouvert et non terminé, sinon la matière
 * la plus faible mesurée, sinon le premier chapitre non commencé, sinon
 * rien — et dans ce dernier cas l'interface n'affiche pas le bouton plutôt
 * que d'inventer une destination.
 */
export function reprise(log: FlightLog): Reprise | null {
  const derniere = log.historique.find((h) => {
    const id = h.ref.startsWith('cours:') ? h.ref.slice(6) : null
    return id ? !log.completed.includes(id) : false
  })
  if (derniere) {
    return { titre: derniere.titre, to: derniere.to, raison: 'Repris là où tu t’es arrêté' }
  }

  const faible = matieresFaibles(log)[0]
  if (faible?.to) {
    return {
      titre: faible.nom,
      to: faible.to,
      raison: `Ta matière la plus fragile, ${Math.round((faible.maitrise ?? 0) * 100)} % de réussite`,
    }
  }

  const suivant = COURSES.find(
    (c) => c.status !== 'awaiting-content' && !log.completed.includes(c.id),
  )
  if (suivant) {
    return {
      titre: suivant.title,
      to: `/cours/${suivant.track}/${suivant.id}`,
      raison: 'Chapitre suivant',
    }
  }

  return null
}

/* ------------------------------------------------------------- libellés */

/** Intitulé d'une question ratée, pour « Mes erreurs ». */
export function libelleQuestion(quizId: string, questionId: string): string | null {
  return QUIZZES[quizId]?.questions.find((q) => q.id === questionId)?.prompt ?? null
}

/**
 * Ce qu'une référence de favori désigne aujourd'hui.
 *
 * Le carnet ne garde que la référence — `cours:bia-meteo` — et non le titre :
 * si un chapitre est renommé, le favori doit suivre le nouveau nom, pas
 * conserver l'ancien. En contrepartie, une référence peut ne plus rien
 * désigner (contenu retiré) : la fonction rend alors `null`, et l'interface
 * le dit au lieu d'afficher un lien mort.
 */
export interface Cible {
  titre: string
  to: string
  /** Nature, pour classer et pour l'affichage. */
  genre: 'cours' | 'schéma' | 'simulation'
}

export function resoudreRef(ref: string): Cible | null {
  const sep = ref.indexOf(':')
  if (sep < 0) return null
  const type = ref.slice(0, sep)
  const id = ref.slice(sep + 1)

  if (type === 'cours') {
    const c = courseById(id)
    if (!c) return null
    return { titre: c.title, to: `/cours/${c.track}/${c.id}`, genre: 'cours' }
  }

  if (type === 'schema') {
    /*
      Un schéma vit DANS un cours : sa référence porte le cours en préfixe
      (`schema:bia-aeromedecine#oreille`). Sans cours identifiable on ne
      saurait pas où l'ouvrir.
    */
    const [coursId, ancre] = id.split('#')
    const c = courseById(coursId)
    if (!c) return null
    return {
      titre: `${c.title} — schéma`,
      to: `/cours/${c.track}/${c.id}${ancre ? `#${ancre}` : ''}`,
      genre: 'schéma',
    }
  }

  if (type === 'labo') {
    return { titre: id, to: `/lab/${id}`, genre: 'simulation' }
  }

  return null
}
