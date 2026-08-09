import { useMemo, useState } from 'react'
import { quizById, type Question } from '@/content/quizzes'
import { flightLog } from '@/lib/progress'

/**
 * QUIZ (§41).
 *
 * Une question à la fois, pas de formulaire à valider en bloc. Après chaque
 * réponse : verdict, puis POURQUOI — c'est l'explication qui fait le travail
 * pédagogique, pas le score. Les questions ratées remontent au carnet de vol.
 */

const KIND_LABEL: Record<Question['kind'], string> = {
  qcm: 'Choix multiple',
  'vrai-faux': 'Vrai ou faux',
  situation: 'Situation',
  graphique: 'Lecture de graphique',
  identification: 'Identification',
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Quiz({
  quizId,
  courseId,
}: {
  quizId: string
  courseId: string
}) {
  const quiz = useMemo(() => quizById(quizId), [quizId])
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [missed, setMissed] = useState<string[]>([])
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  if (!quiz) {
    return (
      <div className="awaiting">
        <span className="awaiting__tag">● En attente de contenu</span>
        <p>Quiz « {quizId} » non encore rédigé.</p>
      </div>
    )
  }

  const q = quiz.questions[index]
  const answered = picked !== null
  const isRight = answered && picked === q.correct

  const choose = (i: number) => {
    if (answered) return
    setPicked(i)
    if (i === q.correct) setCorrect((c) => c + 1)
    else setMissed((m) => [...m, q.id])
  }

  const next = () => {
    if (index + 1 >= quiz.questions.length) {
      flightLog.recordAttempt({
        quizId: quiz.id,
        courseId,
        missed,
        correct,
        total: quiz.questions.length,
      })
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setPicked(null)
  }

  const restart = () => {
    setIndex(0)
    setPicked(null)
    setMissed([])
    setCorrect(0)
    setDone(false)
  }

  if (done) {
    const missedQuestions = quiz.questions.filter((x) => missed.includes(x.id))
    return (
      <section className="quiz" aria-label={`Résultat — ${quiz.title}`}>
        <div className="quiz__head">
          <span className="quiz__kind">Résultat</span>
          <span className="quiz__count">{quiz.title}</span>
        </div>
        <div className="quiz__score">
          <b>
            {correct} / {quiz.questions.length}
          </b>
          <p className="u-label">
            {missedQuestions.length === 0
              ? 'Aucune notion à revoir'
              : `${missedQuestions.length} notion${
                  missedQuestions.length > 1 ? 's' : ''
                } à revoir`}
          </p>

          {missedQuestions.length > 0 && (
            <ul className="quiz__missed">
              {missedQuestions.map((mq) => (
                <li key={mq.id}>{mq.prompt}</li>
              ))}
            </ul>
          )}

          <button className="btn btn--ghost" onClick={restart}>
            Recommencer
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="quiz" aria-label={`Quiz — ${quiz.title}`}>
      <div className="quiz__head">
        <span className="quiz__kind">{KIND_LABEL[q.kind]}</span>
        <span className="quiz__count">
          {String(index + 1).padStart(2, '0')} /{' '}
          {String(quiz.questions.length).padStart(2, '0')}
        </span>
      </div>

      <div className="quiz__body">
        {q.context && <p className="quiz__context">{q.context}</p>}
        <h3 className="quiz__prompt">{q.prompt}</h3>

        <div className="quiz__options" role="group">
          {q.options.map((opt, i) => {
            const state = !answered
              ? undefined
              : i === q.correct
                ? 'correct'
                : i === picked
                  ? 'wrong'
                  : undefined
            return (
              <button
                key={opt}
                className="quiz__option"
                data-state={state}
                disabled={answered}
                onClick={() => choose(i)}
              >
                <span>{LETTERS[i]}</span>
                <span>{opt}</span>
                <span className="quiz__mark" aria-hidden="true">
                  {state === 'correct' ? '✓' : state === 'wrong' ? '✕' : ''}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {answered && (
        <div className="quiz__verdict" data-ok={isRight} aria-live="polite">
          <h4>{isRight ? 'Correct' : 'Incorrect'}</h4>
          <p className="quiz__why">
            <strong>Pourquoi</strong>
            {q.why}
          </p>
        </div>
      )}

      <div className="quiz__foot">
        <span className="u-label">
          {answered ? '' : 'Choisis une réponse'}
        </span>
        <button className="btn btn--primary" onClick={next} disabled={!answered}>
          {index + 1 >= quiz.questions.length ? 'Terminer' : 'Question suivante'}
          <span className="btn__arrow" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </section>
  )
}
