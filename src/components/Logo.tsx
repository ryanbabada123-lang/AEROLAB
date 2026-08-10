/**
 * LES DEUX MARQUES DU SITE
 *
 * L'auteur du projet a fourni deux logos différents et choisi de garder les
 * deux : le glyphe de sommet montagneux accompagne les six scènes de montagne
 * de l'introduction, puis la marque bascule sur l'aile en chevron au moment où
 * le site se découvre.
 *
 * Deux marques pour un même site est un risque — c'est signalé comme tel — et
 * la seule façon de le lever est que la bascule soit un MOMENT, visible et
 * assumé : le sommet cède la place au chevron pendant la révélation, jamais au
 * hasard d'une page. D'où `variant`, qui n'est jamais deviné mais toujours
 * imposé par l'appelant.
 */

export type LogoVariant = 'summit' | 'chevron'

export interface LogoProps {
  variant: LogoVariant
  /** Hauteur du glyphe en pixels. Le mot suit à l'échelle. */
  size?: number
  /** Masque le mot et ne laisse que le glyphe. */
  glyphOnly?: boolean
  className?: string
}

export default function Logo({
  variant,
  size = 22,
  glyphOnly = false,
  className,
}: LogoProps) {
  return (
    <span
      className={['logo', `logo--${variant}`, className].filter(Boolean).join(' ')}
      data-variant={variant}
    >
      {variant === 'summit' ? <SummitGlyph size={size} /> : <ChevronGlyph size={size} />}
      {!glyphOnly && (
        <span className="logo__word" aria-hidden="true">
          {variant === 'summit' ? (
            <>
              AERO<i className="logo__slash">//</i>LAB
            </>
          ) : (
            <>AÉRO&nbsp;LAB</>
          )}
        </span>
      )}
      <span className="u-sr">AERO LAB</span>
    </span>
  )
}

/** Sommet montagneux — la marque des scènes de montagne. */
function SummitGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size * 1.55}
      height={size}
      viewBox="0 0 62 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="logo__glyph"
    >
      {/* Deux crêtes qui se chevauchent, la plus haute au centre : c'est la
          lecture du sommet émergeant des nuages des plaques fournies. */}
      <path
        d="M2 38 L20 10 L31 25 L38 15 L60 38 Z"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <path
        d="M2 38 L20 10 L31 25 L38 15 L60 38"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Névés : les trois éclats de neige au sommet. */}
      <path
        d="M15.5 17.5 L20 10 L24.5 17.5 L21.5 15.5 L20 17 L18.5 15.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Aile en chevron — la marque du site découvert. */
function ChevronGlyph({ size }: { size: number }) {
  return (
    <svg
      width={size * 1.32}
      height={size}
      viewBox="0 0 53 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="logo__glyph"
    >
      {/* Trois plumes en flèche, la plus longue en tête : l'aile stylisée de la
          maquette des sections. */}
      <path
        d="M1 6 L22 20 L1 34 L9 20 Z"
        fill="currentColor"
        fillOpacity="0.55"
      />
      <path d="M16 4 L40 20 L16 36 L25 20 Z" fill="currentColor" />
      <path
        d="M34 8 L52 20 L34 32 L41 20 Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
    </svg>
  )
}
