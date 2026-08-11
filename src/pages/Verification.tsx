import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import type { SchemaId } from '@/content/types'
import { Schema, SCHEMA_TITLES } from '@/components/course/schemas'
import { COURSES } from '@/content'
import NotFound from './NotFound'

/**
 * COMPARATIF DE VÉRIFICATION DES SCHÉMAS (assets/RESSOURCES.md §1).
 *
 * « Un comparatif original / redessin est produit pour chaque schéma afin
 * de permettre la vérification. » C'est cette page.
 *
 * À gauche l'original, découpé du PDF de l'auteur par
 * `scripts/cours-figures.py` — donc jamais retouché, jamais redessiné.
 * À droite le SVG du site. Le curseur superpose les deux, ce qui rend
 * visibles les écarts de géométrie qu'une comparaison côte à côte laisse
 * passer.
 */

/**
 * Les schémas redessinés, par cours, dans l'ordre des pages du document
 * source. Ajouter un cours ici lui ouvre sa page de comparatif — c'est le
 * seul endroit à toucher.
 */
const SETS: Record<
  string,
  { titre: string; schemas: { id: SchemaId; page: number }[] }
> = {
  meteo: {
    titre: 'Météorologie et aérologie',
    schemas: [
      { id: 'atmosphere-coupe', page: 3 },
      { id: 'atmosphere-temperature', page: 3 },
      { id: 'colonne-air', page: 5 },
      { id: 'vent-forces', page: 12 },
      { id: 'cellules-hadley', page: 13 },
      { id: 'fleches-vent', page: 16 },
      { id: 'gradient-adiabatique', page: 18 },
      { id: 'stabilite-instabilite', page: 19 },
      { id: 'symbole-front-chaud', page: 27 },
      { id: 'front-chaud-coupe', page: 27 },
      { id: 'symbole-front-froid', page: 28 },
      { id: 'front-froid-coupe', page: 28 },
      { id: 'symboles-occlusion', page: 30 },
      { id: 'brouillard-radiation', page: 31 },
      { id: 'brouillard-advection', page: 32 },
      { id: 'brouillard-evaporation', page: 32 },
      { id: 'brouillard-pente', page: 32 },
      { id: 'visibilite-secteurs', page: 42 },
      { id: 'visibilite-brume', page: 42 },
      { id: 'prise-de-decision', page: 49 },
    ],
  },
  aerodynamique: {
    titre: 'Aérodynamique et mécanique du vol',
    schemas: [
      { id: 'composition-forces', page: 8 },
      { id: 'equilibres', page: 8 },
      { id: 'polaire-aile', page: 17 },
      { id: 'polaire-etablissement', page: 18 },
    ],
  },
  aeronefs: {
    titre: 'Étude des aéronefs et des engins spatiaux',
    schemas: [
      { id: 'chaine-barometrique', page: 59 },
      { id: 'vor-to-from', page: 75 },
    ],
  },
  aeromedecine: {
    titre: 'Aéromédecine et facteurs humains',
    schemas: [
      { id: 'surpression-pulmonaire', page: 4 },
      { id: 'pressurisation-cabine', page: 4 },
      { id: 'saturation-oxygene', page: 6 },
      { id: 'seuils-hypoxie', page: 6 },
      { id: 'facteurs-de-charge', page: 9 },
      { id: 'illusions-piste', page: 14 },
    ],
  },
}

/**
 * Une ligne de comparatif. Le fondu est un `<input type="range">` : au
 * clavier comme à la souris, et sans dépendance.
 */
function Row({ id, page, base, set }: { id: SchemaId; page: number; base: string; set: string }) {
  const [mix, setMix] = useState(0)

  return (
    <section className="vf-row" id={id}>
      <header className="vf-row__head">
        <h2>{SCHEMA_TITLES[id]}</h2>
        <p className="vf-row__meta">
          <span className="u-label">page {page}</span>
          <code>{id}</code>
        </p>
      </header>

      <div className="vf-pair">
        <figure>
          <figcaption>Original — cours d’André PARIS</figcaption>
          <div className="vf-frame">
            <img
              src={`${base}verif/${set}/${id}.webp`}
              alt={`Schéma original de la page ${page} : ${SCHEMA_TITLES[id]}`}
              loading="lazy"
            />
          </div>
        </figure>

        <figure>
          <figcaption>Redessin — SVG du site</figcaption>
          <div className="vf-frame">
            <Schema id={id} />
          </div>
        </figure>
      </div>

      <div className="vf-overlay">
        <div className="vf-frame vf-frame--stack">
          <img
            src={`${base}verif/${set}/${id}.webp`}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <div className="vf-stack__svg" style={{ opacity: mix }}>
            <Schema id={id} />
          </div>
        </div>
        <label className="vf-slider">
          <span className="u-label">Superposition</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={mix}
            onChange={(e) => setMix(Number(e.target.value))}
            aria-label={`Fondu entre l’original et le redessin — ${SCHEMA_TITLES[id]}`}
          />
          <output>{Math.round(mix * 100)} %</output>
        </label>
      </div>
    </section>
  )
}

export default function Verification() {
  const { verifyId = '' } = useParams()
  const base = import.meta.env.BASE_URL

  const course = useMemo(
    () => COURSES.find((c) => c.origin?.verifyId === verifyId),
    [verifyId],
  )

  const set = SETS[verifyId]
  if (!course || !set) return <NotFound />

  return (
    <article className="page u-shell">
      <div className="page__head">
        <Link to={`/cours/${course.track}/${course.id}`} className="crumb">
          ← {course.title}
        </Link>
        <p className="page__eyebrow">
          <span>Vérification</span>
          <span>· {set.schemas.length} schémas</span>
        </p>
        <h1 className="page__title">Comparatif des schémas</h1>
        <p className="page__eyebrow">{set.titre}</p>
        <p className="page__claim">
          Chaque schéma redessiné en SVG, face à l’original découpé du document
          de l’auteur. Le curseur superpose les deux : c’est là que se voient
          les écarts de géométrie.
        </p>
      </div>

      <div className="vf-note">
        <p>
          Les originaux proviennent de <code>{course.origin?.file}</code>, édition{' '}
          {course.origin?.edition}, {course.origin?.pages} pages. Ils sont
          découpés sans retouche par <code>scripts/cours-figures.py</code>, et ne
          servent qu’à la vérification.
        </p>
        <p>
          Ne figurent ici que les schémas <strong>déjà redessinés</strong>. Deux
          familles d’images n’en relèveront jamais : les{' '}
          <strong>photographies</strong> — genres de nuages, orage, baromètre —
          qui demandent une source libre et non un dessin ; et les{' '}
          <strong>documents Météo France, OACI et NASA</strong> reproduits en
          pleine page, dont le redessin reviendrait à fabriquer des données
          aéronautiques. Celles-là demandent une autorisation de reproduction.
        </p>
      </div>

      {set.schemas.map((s) => (
        <Row key={s.id} id={s.id} page={s.page} base={base} set={verifyId} />
      ))}
    </article>
  )
}
