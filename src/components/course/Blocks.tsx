import { lazy, Suspense, useMemo } from 'react'
import katex from 'katex'
import type { Block, DiagramId, SchemaId, SimId } from '@/content/types'
import Quiz from '@/components/Quiz'
import Reveal from '@/components/course/Reveal'
import { Schema, SCHEMA_TITLES } from '@/components/course/schemas'

const LiftAirfoil = lazy(() => import('@/simulations/LiftAirfoil'))
const LiftCurve = lazy(() => import('@/simulations/LiftCurve'))

/**
 * RENDU DES BLOCS (§26).
 *
 * Un bloc de contenu → un composant. Aucune fiche ne connaît le HTML ;
 * aucun composant ne connaît le contenu.
 */

function Formula({
  latex,
  caption,
  where,
}: {
  latex: string
  caption?: string
  where?: { sym: string; desc: string }[]
}) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: true,
        throwOnError: false,
        output: 'html',
      })
    } catch {
      return `<code>${latex}</code>`
    }
  }, [latex])

  const symbols = useMemo(
    () =>
      (where ?? []).map((w) => ({
        ...w,
        html: katex.renderToString(w.sym, { throwOnError: false, output: 'html' }),
      })),
    [where],
  )

  return (
    <figure className="b-formula">
      <div
        className="b-formula__math"
        // Contenu statique issu du registre de cours, rendu par KaTeX.
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {caption && <figcaption>{caption}</figcaption>}
      {symbols.length > 0 && (
        <dl>
          {symbols.map((s) => (
            <div key={s.sym}>
              <dt dangerouslySetInnerHTML={{ __html: s.html }} />
              <dd>{s.desc}</dd>
            </div>
          ))}
        </dl>
      )}
    </figure>
  )
}

function Simulation({ sim }: { sim: SimId }) {
  const node =
    sim === 'lift-airfoil' ? <LiftAirfoil /> : sim === 'lift-curve' ? <LiftCurve /> : null

  if (!node) return null
  return (
    <Suspense
      fallback={
        <div className="sim" style={{ padding: 'var(--s-8)', textAlign: 'center' }}>
          <span className="u-label">Chargement de la simulation</span>
        </div>
      }
    >
      {node}
    </Suspense>
  )
}

/** Schéma statique : la répartition des pressions autour d'un profil porteur. */
function PressureField({ caption }: { caption?: string }) {
  return (
    <figure className="sim">
      <figcaption className="sim__head">
        <span className="sim__title">Champ de pression</span>
        <span className="sim__tag">Schéma</span>
      </figcaption>
      <div className="sim__stage">
        <svg viewBox="0 0 900 340" role="img" aria-label={caption ?? 'Champ de pression autour d’un profil'}>
          <defs>
            <linearGradient id="pf-up" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--c-electric)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="var(--c-electric)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <ellipse cx="380" cy="130" rx="230" ry="52" fill="url(#pf-up)" />

          <path
            d="M180,190 C300,140 520,146 700,178 C520,206 300,208 180,190 Z"
            fill="var(--c-white)"
            stroke="var(--c-ink)"
            strokeWidth="1.6"
          />

          <g fontFamily="var(--f-mono)" fontSize="12" letterSpacing="1.6">
            <text x="250" y="98" fill="var(--c-electric)">
              EXTRADOS — PRESSION PLUS FAIBLE
            </text>
            <text x="250" y="272" fill="var(--c-graphite)">
              INTRADOS — PRESSION PLUS ÉLEVÉE
            </text>
          </g>

          <g stroke="var(--c-electric)" strokeWidth="1.2" opacity="0.8">
            {[240, 300, 360, 420, 480, 540].map((x, i) => (
              <line key={x} x1={x} y1={166 - i * 1} x2={x} y2={120 - i * 2} />
            ))}
          </g>
          <g stroke="var(--c-graphite)" strokeWidth="1.2" opacity="0.55">
            {[240, 300, 360, 420, 480, 540].map((x, i) => (
              <line key={x} x1={x} y1={228 + i} x2={x} y2={202 + i} />
            ))}
          </g>
        </svg>
      </div>
      {caption && <p className="sim__note">{caption}</p>}
    </figure>
  )
}

function Diagram({ diagram, caption }: { diagram: DiagramId; caption?: string }) {
  if (diagram === 'pressure-field') return <PressureField caption={caption} />
  return null
}

/**
 * Schéma redessiné. La mention de la page d'origine n'est pas décorative :
 * c'est elle qui rend le redessin vérifiable, et elle renvoie au comparatif.
 */
function SchemaFigure({
  id,
  caption,
  page,
}: {
  id: SchemaId
  caption?: string
  page: number
}) {
  return (
    <Reveal as="figure" className="cx-schema">
      <div className="cx-schema__stage">
        <Schema id={id} />
      </div>
      <figcaption>
        <span className="cx-schema__title">{SCHEMA_TITLES[id]}</span>
        {caption && <span className="cx-schema__caption">{caption}</span>}
        <span className="cx-schema__origin">
          Redessiné d’après le cours d’André PARIS, page {page}.{' '}
          <a href={`/verification/meteo#${id}`}>Comparer à l’original</a>
        </span>
      </figcaption>
    </Reveal>
  )
}

function DataTable({
  headers,
  rows,
  caption,
  page,
}: {
  headers: string[]
  rows: string[][]
  caption?: string
  page?: number
}) {
  return (
    <Reveal as="figure" className="cx-table">
      {caption && <figcaption className="cx-table__caption">{caption}</figcaption>}
      <div className="cx-table__scroll">
        <table>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) =>
                  j === 0 ? (
                    <th key={j} scope="row">
                      {c}
                    </th>
                  ) : (
                    <td key={j}>{c}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {page && (
        <p className="cx-table__origin">
          Tableau relevé sur la page {page} du cours d’André PARIS, où il est une
          image : son texte est absent de la couche texte du document.
        </p>
      )}
    </Reveal>
  )
}

/** Message codé et son décodage, tels que l'auteur les présente. */
function Coded({ code, decode }: { code: string; decode: string[] }) {
  return (
    <Reveal as="figure" className="cx-coded">
      <pre>
        <code>{code}</code>
      </pre>
      <figcaption>
        <ul>
          {decode.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </figcaption>
    </Reveal>
  )
}

export function Awaiting({ what }: { what: string }) {
  return (
    <div className="awaiting">
      <span className="awaiting__tag">● En attente de contenu</span>
      <p>{what}</p>
    </div>
  )
}

export default function BlockRenderer({
  block,
  courseId,
}: {
  block: Block
  courseId: string
}) {
  switch (block.type) {
    case 'lead':
      return (
        <Reveal as="div">
          <p className="b-lead">{block.text}</p>
        </Reveal>
      )

    case 'text':
      return (
        <Reveal as="div">
          <p className="b-text">{block.text}</p>
        </Reveal>
      )

    case 'heading':
      return (
        <Reveal as="div">
          {block.level === 3 ? (
            <h3 className="cx-h3">{block.text}</h3>
          ) : (
            <h4 className="cx-h4">{block.text}</h4>
          )}
        </Reveal>
      )

    case 'list':
      return (
        <Reveal as="div">
          {block.ordered ? (
            <ol className="cx-list">
              {block.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ol>
          ) : (
            <ul className="cx-list">
              {block.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          )}
        </Reveal>
      )

    case 'table':
      return (
        <DataTable
          headers={block.headers}
          rows={block.rows}
          caption={block.caption}
          page={block.page}
        />
      )

    case 'coded':
      return <Coded code={block.code} decode={block.decode} />

    case 'timeline':
      return (
        <Reveal as="div" className="cx-timeline">
          <ol>
            {block.entries.map((e) => (
              <li key={e.date + e.text.slice(0, 24)}>
                <span className="cx-timeline__date">{e.date}</span>
                <span className="cx-timeline__body">
                  {e.fait && <strong>{e.fait}</strong>}
                  {e.text}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      )

    case 'schema':
      return (
        <SchemaFigure id={block.schema} caption={block.caption} page={block.page} />
      )

    case 'concept':
      return (
        <div className="b-concept">
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </div>
      )

    case 'definition':
      return (
        <dl className="b-def">
          <dt>{block.term}</dt>
          <dd>{block.text}</dd>
        </dl>
      )

    case 'formula':
      return (
        <Formula latex={block.latex} caption={block.caption} where={block.where} />
      )

    case 'diagram':
      return <Diagram diagram={block.diagram} caption={block.caption} />

    case 'simulation':
      return (
        <div style={{ display: 'grid', gap: 'var(--s-4)' }}>
          {block.brief && <p className="b-text">{block.brief}</p>}
          <Simulation sim={block.sim} />
        </div>
      )

    case 'keypoints':
      return (
        <div className="b-points">
          {block.title && <h3>{block.title}</h3>}
          <ul>
            {block.items.map((it) => (
              <li key={it}>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'callout':
      return (
        <div className="b-callout" data-tone={block.tone}>
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </div>
      )

    case 'quiz':
      return <Quiz quizId={block.quizId} courseId={courseId} />

    case 'awaiting':
      return <Awaiting what={block.what} />

    default:
      return null
  }
}
