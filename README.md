# AERO//LAB

Plateforme immersive de formation aéronautique — du BIA au cockpit d'un avion
de ligne.

L'accueil n'est pas une page de présentation : c'est une séquence
cinématographique pilotée au scroll (rêve → avion → cockpit → décollage →
ciel → profil d'aile → apprentissage). L'objectif est de transformer une
émotion en parcours.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build de production
npm run shots      # captures d'écran multi-formats (dev server requis)
npm run checks     # tests d'interaction + console (dev server requis)
```

---

## Règle de contenu — à lire avant d'ajouter quoi que ce soit

**Aucune donnée aéronautique n'est inventée.** C'est la contrainte
structurante du projet, et elle est plus stricte encore parce que la
plateforme est destinée à être montrée en école (§38 / §51.3).

En pratique :

- Une matière sans fiche affiche « en attente de contenu ». Elle n'est
  **jamais** remplie avec du texte générique ou plausible.
- Les matières PPL et ATPL ne sont **pas** découpées : l'auteur ne les a pas
  fournies. La structure d'accueil existe, le découpage viendra des fiches.
- Le parcours « Devenir pilote de ligne » affiche la séquence des étapes,
  mais laisse vides — et signalés comme tels — les prérequis, durées, coûts
  et modalités d'examen, qui relèvent des textes officiels.
- Aucun aéronef réel n'est publié tant que ses caractéristiques ne sont pas
  rattachées à une source identifiée (manuel de vol, documentation
  constructeur).
- Toute simulation affiche ce qu'elle modélise **et ce qu'elle ne modélise
  pas** (`SimShell` impose la note de modèle).

Le cours `bia-aero-portance` porte le statut `demo` : ses **simulations sont
définitives**, son **texte est un squelette** à remplacer par la fiche de
l'auteur. L'interface l'annonce en haut de page.

---

## Ajouter une fiche de cours

Le contenu est une donnée, pas un composant. Aucun fichier de rendu n'est à
modifier.

1. Créer `src/content/<parcours>/<matiere>-<sujet>.ts` exportant un `Course`
   (voir `src/content/types.ts`).
2. L'enregistrer dans `src/content/index.ts` (tableau `COURSES`), et
   référencer son `id` dans la matière concernée.

Blocs disponibles : `lead`, `text`, `concept`, `definition`, `formula`
(KaTeX + légende des symboles), `diagram`, `simulation`, `keypoints`,
`callout` (`note` / `warn` / `model`), `quiz`, `awaiting`.

```ts
{
  type: 'callout',
  tone: 'model',
  title: 'Ce que montre cette simulation',
  text: 'Représentation qualitative — pas un calcul de mécanique des fluides.',
}
```

Le bloc `awaiting` est fait pour être **laissé en place** : il déclare
proprement ce qui manque plutôt que de le combler.

Les `SimId` et `DiagramId` ne sont ouverts que pour les composants
réellement implémentés — une référence morte finirait par s'afficher.

---

## Architecture

```
src/
  content/       fiches de cours + quiz (données pures)
  data/          axes, laboratoires, instruments, parcours, pièces
  sections/      intro cinématographique, axes, page finale
    intro/       timeline.ts (partition) · camera.ts (keyframes) · Stage.tsx
  three/         objets 3D stylisés (avion, cockpit, profil, atmosphère)
  simulations/   simulations pédagogiques (SVG)
  components/    UI réutilisable + rendu des blocs de cours
  pages/         routes
  lib/           scroll, math, aérodynamique, capacités appareil, progression
  hooks/         reveal, beats, media queries
  styles/        tokens.css (design system) · base.css · app.css
```

### Le scroll

Une seule source de vérité : `lib/scroll.ts` expose une progression
normalisée 0 → 1 sur la zone d'intro, lissée par amortissement. La scène 3D
et chaque couche de texte s'y abonnent et **mutent le DOM ou la scène
directement dans `useFrame`** — React ne re-rend jamais pendant le scroll.

`sections/intro/timeline.ts` est la partition : toutes les bornes narratives
y sont écrites une fois, et la scène comme le texte les lisent. La
synchronisation est structurelle, pas approximative.

Le scroll reste natif : aucun scroll-jacking, donc un comportement exact au
trackpad, à la molette, au clavier et au tactile iOS.

### Rendu 3D

Formes stylisées et bas-poly (§51.4) : l'émotion vient de la lumière, du
mouvement de caméra et du rythme, pas du nombre de polygones. Rien n'imite un
appareil existant, ce qui évite d'affirmer implicitement des caractéristiques
techniques.

Les schémas pédagogiques (profil d'aile, courbe Cz, planche de bord) sont en
**SVG** et non en WebGL : nets à toute résolution, lisibles au
vidéoprojecteur, accessibles au clavier. La 3D est réservée à ce qui a besoin
d'espace.

### Performance et plateformes

Priorité : desktop, tablette, iPhone (§53). `lib/device.ts` établit un profil
au chargement et ajuste **uniquement des paramètres invisibles** — DPR,
densité de géométrie, ombres, antialiasing. Aucune scène, aucun texte, aucune
étape du récit n'est supprimée selon l'appareil.

Le cadrage, lui, s'adapte au format d'écran (`fitToAspect`) : sur un écran
étroit, le champ s'élargit et la caméra recule — sauf en intérieur cockpit,
où reculer sortirait de l'appareil.

Le rendu WebGL s'arrête complètement dès que l'intro quitte l'écran.

### Robustesse en démo

- Écran de démarrage en CSS inline : jamais d'écran blanc, même sur connexion
  lente.
- Aucune ressource externe — polices système, favicon en ligne : le site
  fonctionne sans réseau une fois chargé.
- `ErrorBoundary` autour des routes et des scènes 3D : une scène qui casse ne
  produit pas d'écran blanc devant un public.
- Repli propre si WebGL est indisponible ; la séquence textuelle reste
  intégralement lisible.
- `prefers-reduced-motion` respecté : inertie et respiration de caméra
  désactivées, aucune information portée par la seule animation.

### Progression

`lib/progress.ts` — carnet de vol local (localStorage), sans compte ni envoi
de données. Faits enregistrés uniquement : cours terminés, simulations
manipulées, tentatives de quiz, questions ratées, temps d'étude. Les
pourcentages sont calculés sur le contenu **réellement publié** : un parcours
sans fiche affiche « — », jamais 0 %.

---

## Vérification

`npm run checks` couvre : décrochage de la simulation, parcours de quiz
complet, enregistrement du carnet, mode évaluation du Cockpit Lab, premier
focus clavier, `prefers-reduced-motion`, absence de WebGL, 404 — et échoue
visiblement à la moindre erreur console.

`npm run shots` produit les captures desktop / iPad / iPhone de toute la
séquence dans `.screenshots/`.
