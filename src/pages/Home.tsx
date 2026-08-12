import Bienvenue from '@/sections/Bienvenue'
import Reviser from '@/sections/Reviser'

/**
 * L'ACCUEIL TIENT EN UNE SEULE PAGE.
 *
 * Une image de bienvenue, et dessous les chapitres du BIA. C'est tout.
 *
 * Il portait auparavant quatre sections de plus — les axes de formation, un
 * aperçu des laboratoires, une section « à découvrir » et une page finale —
 * soit huit écrans à traverser avant d'atteindre un cours. Elles ont été
 * retirées sur demande : ce que le visiteur vient chercher est à un
 * défilement, pas à huit.
 */
export default function Home() {
  return (
    <>
      <Bienvenue />
      <Reviser />
    </>
  )
}
