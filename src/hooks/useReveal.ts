import { useEffect, useRef } from 'react'

/**
 * MARQUE UN BLOC COMME VISIBLE — SANS ANIMATION AU DÉFILEMENT.
 *
 * Ce crochet révélait les blocs à leur entrée dans l'écran, par
 * IntersectionObserver. Toute animation liée au défilement a été retirée du
 * site sur demande : le contenu apparaît maintenant tout de suite.
 *
 * POURQUOI GARDER LE CROCHET PLUTÔT QUE DE LE SUPPRIMER. Les feuilles de
 * style attachent l'état visible à `[data-revealed='true']` — sur les
 * matières, les étapes du parcours, les lignes de la page finale. Retirer le
 * crochet des composants sans toucher au CSS laisserait ces blocs
 * définitivement invisibles. Il pose donc l'attribut au montage, une fois,
 * et ne surveille plus rien.
 *
 * Sa signature est conservée pour la même raison : une dizaine d'appels la
 * passent avec des options qui n'ont plus d'effet, et les casser tous
 * n'apporterait rien.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  _options: { threshold?: number; stagger?: number; once?: boolean } = {},
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (ref.current) ref.current.dataset.revealed = 'true'
  }, [])

  return ref
}
