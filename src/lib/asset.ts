/**
 * RÉSOLUTION DES CHEMINS D'IMAGE.
 *
 * Le site doit s'ouvrir de trois façons (assets/RESSOURCES.md §8) : servi
 * depuis une racine, servi depuis un sous-dossier, et ouvert d'un
 * double-clic en `file://`. Les deux premières sont l'affaire de
 * `import.meta.env.BASE_URL`. La troisième demande davantage : un fichier
 * HTML unique, envoyé sur un téléphone, n'a AUCUN dossier voisin où aller
 * chercher ses images.
 *
 * D'où la carte optionnelle `window.__AEROLAB_INLINE__`, que le build
 * mono-fichier (`scripts/singlefile.mjs`) pose devant l'application : elle
 * associe à chaque chemin son contenu en `data:`. Quand elle est là, on la
 * sert ; sinon on retombe sur le chemin normal.
 *
 * Passer par UNE fonction plutôt que par des gabarits disséminés est ce qui
 * rend l'intégration possible : sinon les chemins sont assemblés à
 * l'exécution, et aucune substitution de chaîne au moment du build ne peut
 * les atteindre.
 */

type Carte = Record<string, string> | undefined

/** Chemin d'un fichier de `public/`, résolu selon le mode d'ouverture. */
export function asset(chemin: string): string {
  const nu = chemin.replace(/^\.?\//, '')
  const carte = (globalThis as { __AEROLAB_INLINE__?: Carte }).__AEROLAB_INLINE__
  return carte?.[nu] ?? import.meta.env.BASE_URL + nu
}

/**
 * Vrai quand les images sont embarquées dans le document.
 *
 * Un `srcset` n'a alors plus de sens : toutes ses entrées pointeraient sur
 * la même image intégrée, et le navigateur téléchargerait la même donnée
 * plusieurs fois. Les composants s'en servent pour n'émettre qu'une source.
 */
export function assetsIntegres(): boolean {
  return Boolean((globalThis as { __AEROLAB_INLINE__?: Carte }).__AEROLAB_INLINE__)
}
