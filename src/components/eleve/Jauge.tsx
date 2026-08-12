/**
 * JAUGE DE PROGRESSION.
 *
 * Une barre, un pourcentage, et le compte réel derrière. Le compte compte
 * autant que la barre : « 82 % » ne dit pas s'il reste quatre chapitres ou
 * quarante.
 *
 * `part` vaut `null` quand la valeur n'est PAS MESURABLE — une matière sur
 * laquelle aucun QCM n'a été tenté, par exemple. La jauge affiche alors
 * « non mesuré » au lieu de 0 %, parce que les deux ne veulent pas dire la
 * même chose et que confondre les deux décourage pour rien.
 */
export default function Jauge({
  part,
  libelle,
  detail,
  ton = 'neutre',
}: {
  part: number | null
  libelle: string
  detail?: string
  /** `bilan` accentue la barre : réservé aux jauges de synthèse. */
  ton?: 'neutre' | 'bilan'
}) {
  const pct = part === null ? null : Math.round(part * 100)

  return (
    <div className="jauge" data-ton={ton}>
      <div className="jauge__tete">
        <span className="jauge__nom">{libelle}</span>
        <span className="jauge__pct" data-mesure={pct !== null}>
          {pct === null ? 'non mesuré' : `${pct} %`}
        </span>
      </div>

      <div
        className="jauge__piste"
        role="progressbar"
        aria-valuenow={pct ?? undefined}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={libelle}
      >
        <i style={{ width: `${pct ?? 0}%` }} />
      </div>

      {detail && <p className="jauge__detail">{detail}</p>}
    </div>
  )
}
