/**
 * SCHÉMAS REDESSINÉS — Cours 1 Météorologie, § 1 et 2.
 *
 * Règle (assets/RESSOURCES.md §1) : géométrie, proportions et étiquettes
 * identiques à l'original. Les valeurs chiffrées et les libellés sont
 * repris au signe près ; seuls le trait et la palette sont ceux du site.
 * La page d'origine est indiquée au-dessus de chaque composant, et le
 * comparatif est servi par /verification/meteo.
 */

/** p. 3 — coupe des couches successives de l'atmosphère. */
export function AtmosphereCoupe() {
  const layers: { name: string; alt: string; y: number }[] = [
    { name: 'Exosphere', alt: '400 km altitude', y: 40 },
    { name: 'Thermosphere', alt: '300 km', y: 74 },
    { name: 'Mesosphere', alt: '50 km', y: 108 },
    { name: 'Stratosphere', alt: '40 km', y: 132 },
    { name: 'Troposphere', alt: '10 km', y: 156 },
  ]
  return (
    <svg viewBox="0 0 520 300" role="img" aria-label="Coupe des couches successives de l'atmosphère : exosphère 400 km, thermosphère 300 km, mésosphère 50 km, stratosphère 40 km, troposphère 10 km">
      <defs>
        <linearGradient id="at-shell" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#4fd2ff" />
          <stop offset="45%" stopColor="#1e63c8" />
          <stop offset="100%" stopColor="#071a4a" />
        </linearGradient>
      </defs>

      {/* Le quart de coque atmosphérique, épaisseur décroissante vers le haut. */}
      <path
        d="M245,272 A250,250 0 0 1 495,22 L495,150 A125,125 0 0 0 370,272 Z"
        fill="url(#at-shell)"
      />

      {/* Le globe, en bas à gauche. */}
      <circle cx="245" cy="272" r="72" fill="#e9edf1" stroke="#5a6673" strokeWidth="1" />
      <g stroke="#8d99a6" strokeWidth="0.6" fill="none" opacity="0.9">
        {[-48, -24, 0, 24, 48].map((d) => (
          <path key={d} d={`M${245 - Math.sqrt(Math.max(0, 72 * 72 - d * d))},${272 + d} h${2 * Math.sqrt(Math.max(0, 72 * 72 - d * d))}`} />
        ))}
        {[-54, -27, 0, 27, 54].map((d) => (
          <ellipse key={d} cx="245" cy="272" rx={Math.abs(d) || 2} ry="72" />
        ))}
      </g>

      {/* Flèche verticale d'échelle, à droite du globe. */}
      <line x1="352" y1="272" x2="352" y2="26" stroke="#0b0f14" strokeWidth="1.4" markerEnd="url(#at-arrow)" />
      <defs>
        <marker id="at-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#0b0f14" />
        </marker>
      </defs>

      <g fontFamily="var(--f-sans)" fontSize="11" fontWeight="700" fill="#0b0f14">
        {layers.map((l) => (
          <g key={l.name}>
            <text x="8" y={l.y + 4} textAnchor="start">
              {l.name}
            </text>
            <line x1="108" y1={l.y} x2="344" y2={l.y} stroke="#0b0f14" strokeWidth="1" markerEnd="url(#at-arrow)" />
            <text x="116" y={l.y - 5} fontSize="8" fontWeight="400" fill="#2b333d">
              {l.alt}
            </text>
          </g>
        ))}
      </g>
    </svg>
  )
}

/** p. 3 — structure de l'atmosphère terrestre et courbe de température. */
export function AtmosphereTemperature() {
  // Repères d'altitude → ordonnée. Le tracé de l'original n'est pas à
  // l'échelle : la troposphère y occupe la moitié basse du cadre.
  const Y = { top: 30, meso: 60, strato: 150, tropo: 330, sol: 420 }
  return (
    <svg viewBox="0 0 560 470" role="img" aria-label="Structure de l'atmosphère terrestre et courbe de température : mésosphère, stratopause à 0 °C, stratosphère, tropopause à 11 km et −56 °C, troposphère, sol à +15 °C">
      <rect x="0" y="0" width="560" height="470" fill="#cfe0ee" />
      <text x="280" y="18" textAnchor="middle" fontFamily="var(--f-mono)" fontSize="10" letterSpacing="0.6" fill="#0b0f14">
        STRUCTURE DE L’ATMOSPHÈRE TERRESTRE ET COURBE DE TEMPÉRATURE
      </text>

      {/* Paliers : stratopause et tropopause. */}
      <g stroke="#0b0f14" strokeDasharray="6 5" strokeWidth="1">
        <line x1="30" y1={Y.strato} x2="530" y2={Y.strato} />
        <line x1="30" y1={Y.tropo} x2="530" y2={Y.tropo} />
      </g>

      {/* Courbe de température, du sol vers le haut. */}
      <polyline
        points={`430,${Y.sol} 300,${Y.tropo} 300,${Y.tropo - 40} 470,${Y.strato} 330,${Y.meso}`}
        fill="none"
        stroke="#2b333d"
        strokeWidth="2.2"
      />

      <g fontFamily="var(--f-sans)" fontSize="11" fill="#0b0f14">
        <text x="34" y={Y.strato - 6}>50 km</text>
        <text x="34" y={Y.tropo - 6}>11 km</text>
        <text x="452" y={Y.strato - 6}>Stratopause</text>
        <text x="452" y={Y.tropo - 6}>Tropopause</text>
        <text x="452" y={Y.meso + 4} fontStyle="italic">MESOSPHERE</text>
        <text x="452" y={Y.strato + 18}>T° ± 0° C</text>
        <text x="452" y={Y.tropo - 130} fontStyle="italic">STRATOSPHERE</text>
        <text x="34" y={Y.tropo + 16}>T° = -56° C</text>
        <text x="452" y={Y.tropo + 16}>Avions de ligne</text>
        <text x="452" y={Y.tropo + 60} fontStyle="italic">TROPOSPHERE</text>
        <text x="34" y={Y.sol - 40}>Avions légers</text>
        <text x="452" y={Y.sol - 6}>T° = +15° C</text>
      </g>

      {/* Les deux mentions portées le long de la courbe, à l'oblique. */}
      <text
        x="330"
        y={Y.strato + 60}
        fontFamily="var(--f-sans)"
        fontSize="9"
        fill="#2b333d"
        transform={`rotate(-62 330 ${Y.strato + 60})`}
      >
        Augmentation de la température avec l’altitude
      </text>
      <text
        x="318"
        y={Y.sol - 34}
        fontFamily="var(--f-sans)"
        fontSize="9"
        fill="#2b333d"
        transform={`rotate(38 318 ${Y.sol - 34})`}
      >
        Décroissance de la température en moyenne 6,5° C / 1 000 m
      </text>

      {/* Sol. */}
      <rect x="0" y={Y.sol} width="560" height="50" fill="#e6ebf1" />
      <line x1="0" y1={Y.sol} x2="560" y2={Y.sol} stroke="#5a6673" strokeWidth="1.2" />
    </svg>
  )
}

/** p. 5 — densité de l'air : nombre de molécules par unité de volume. */
export function ColonneAir() {
  // Deux populations tirées au hasard mais déterministe : 1 million au sol,
  // 532 000 à 6 000 m — le rapport 0,532 est celui de l'original.
  const dots = (n: number, y0: number, y1: number, seed: number) =>
    Array.from({ length: n }, (_, i) => {
      const r = Math.sin(seed + i * 12.9898) * 43758.5453
      const r2 = Math.sin(seed + i * 78.233) * 12345.6789
      return {
        x: 18 + (Math.abs(r) % 1) * 124,
        y: y0 + (Math.abs(r2) % 1) * (y1 - y0),
        c: i % 3 === 0 ? '#1667ff' : i % 3 === 1 ? '#e8b60a' : '#b3261e',
      }
    })

  return (
    <svg viewBox="0 0 160 380" role="img" aria-label="Colonne d'air : 532 000 molécules par unité de volume à 6 000 m, 1 million par unité de volume au sol">
      <rect x="4" y="4" width="152" height="372" fill="#0b0f14" />
      <rect x="14" y="14" width="132" height="352" fill="#f6efc9" />

      {dots(34, 30, 170, 3).map((d, i) => (
        <circle key={`h${i}`} cx={d.x} cy={d.y} r="3.4" fill={d.c} opacity="0.85" />
      ))}
      {dots(64, 200, 352, 11).map((d, i) => (
        <circle key={`l${i}`} cx={d.x} cy={d.y} r="3.4" fill={d.c} opacity="0.85" />
      ))}

      <g fontFamily="var(--f-sans)" fontSize="9" fontWeight="700" textAnchor="middle">
        <text x="80" y="30" fill="#0b0f14">532 000 / unité</text>
        <text x="80" y="41" fill="#0b0f14">de volume</text>
        <text x="80" y="52" fill="#0b0f14">à 6 000 m</text>
        <text x="80" y="330" fill="#0b0f14">1 million / unité</text>
        <text x="80" y="341" fill="#0b0f14">de volume</text>
        <text x="80" y="352" fill="#0b0f14">au sol</text>
      </g>
    </svg>
  )
}
