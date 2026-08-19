---
name: Plan de lignes
description: Portefeuille de compétences BUT3 RA rendu comme un plan de réseau de transport
colors:
  papier: "#f7f6f3"
  papier-creux: "#efede8"
  blanc: "#ffffff"
  zone-1: "#eeece7"
  zone-2: "#e2dfd8"
  zone-3: "#d5d1c8"
  encre: "#16181c"
  encre-2: "#4a4f57"
  encre-3: "#656b73"
  filet: "#cdc9c0"
  filet-fort: "#a8a49a"
  ligne-c1: "#c8102e"
  ligne-c2: "#0057a8"
  ligne-c3: "#00713c"
  ligne-c4: "#9c5a00"
  ligne-c5: "#6b2c91"
  ligne-c6: "#00676f"
  travaux: "#8a4b00"
  travaux-clair: "#f5ead9"
  alerte-fond: "#fdeef0"
  alerte-texte: "#7d0a1c"
  sombre-prose: "#c8ccd2"
  sombre-meta: "#a8aeb6"
  sombre-filet: "#646b75"
  sombre-alerte: "#ff8f9f"
  sombre-jauge: "#2c3037"
  sombre-jauge-faite: "#8f959d"
typography:
  display:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.1rem + 3vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  section:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.8vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.12
  arret:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 0.95rem + 1.4vw, 1.9rem)"
    fontWeight: 700
    lineHeight: 1.1
  chrono:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.1rem + 2.4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1
    fontVariantNumeric: "tabular-nums"
  titre-fiche:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 0.95rem + 0.6vw, 1.35rem)"
    fontWeight: 700
  body:
    fontFamily: "Barlow, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 400
  meta:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
  control:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.07em"
    textTransform: "uppercase"
  signal:
    fontFamily: "Barlow Semi Condensed, Barlow, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.09em"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  md: "6px"
  pill: "999px"
spacing:
  xs: "0.35rem"
  sm: "0.6rem"
  md: "1.25rem"
  lg: "2rem"
  section: "clamp(3rem, 6vw, 5.5rem)"
  marge: "clamp(1.25rem, 4vw, 4rem)"
motion:
  sortie: "cubic-bezier(0.16, 1, 0.3, 1)"
  avancer: "1.1s"
  poser: "0.5s"
components:
  pastille:
    backgroundColor: "{colors.ligne-c1}"
    textColor: "{colors.blanc}"
    rounded: "{rounded.pill}"
    padding: "0 0.45rem"
    minWidth: "2.1rem"
    height: "1.45rem"
  bouton:
    backgroundColor: "{colors.blanc}"
    textColor: "{colors.encre}"
    borderColor: "{colors.filet-fort}"
    borderWidth: "1.5px"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.9rem"
  bouton-hover:
    borderColor: "{colors.encre}"
    shadow: "0 2px 6px -2px rgba(22, 24, 28, 0.22)"
  bouton-plein:
    backgroundColor: "{colors.encre}"
    textColor: "{colors.papier}"
    borderColor: "{colors.encre}"
  bouton-plein-hover:
    backgroundColor: "{colors.ligne-c2}"
    borderColor: "{colors.ligne-c2}"
  avis:
    backgroundColor: "{colors.travaux-clair}"
    borderColor: "{colors.travaux}"
    borderWidth: "1.5px"
    rounded: "{rounded.md}"
    padding: "0.9rem 1.1rem"
  alerte:
    backgroundColor: "{colors.alerte-fond}"
    borderColor: "{colors.ligne-c1}"
    textColor: "{colors.alerte-texte}"
    rounded: "{rounded.md}"
  afficheur:
    backgroundColor: "{colors.encre}"
    textColor: "{colors.papier}"
    shadow: "0 -14px 34px -14px rgba(22, 24, 28, 0.45)"
  focus-ring:
    borderColor: "{colors.ligne-c2}"
    borderWidth: "3px"
    rounded: "{rounded.sm}"
---

# Plan de lignes

Système visuel du portfolio de compétences BUT3, parcours Réalisation d'applications.
Ce document décrit le monde **tel qu'il est construit**.

Il remplace un monde antérieur (carte hydrographique, fond marine, quatre familles
typographiques) abandonné pour une raison nommée par l'utilisateur : le portfolio était
trop fourni. Cette contrainte gouverne désormais chaque décision.

## Design Principles

1. **Le portefeuille de compétences est un réseau de transport.** Une ligne est une
   compétence du référentiel. Une zone est un niveau. Une station est une mission. Une
   **correspondance** est une mission qui mobilise plusieurs compétences. Un
   **terminus** est le niveau maximum que le parcours RA conduit. Tout nouveau contenu
   hérite de ce vocabulaire.

2. **Le terminus dit le plafond de parcours.** Trois lignes s'arrêtent en zone 2
   (Administrer, Gérer les données, Conduire un projet) et trois vont en zone 3
   (Réaliser, Optimiser, Collaborer). Ce n'est pas une décoration : c'est un fait du
   référentiel, et l'affirmer visuellement empêche de revendiquer un niveau inexistant.

3. **Le pointillé dit le degré d'acquisition.** Un tronçon plein est un niveau acquis,
   un tronçon en pointillé est un niveau engagé sans être acquis — la convention des
   plans de réseau pour les prolongements en travaux. C'est la réponse à l'exigence
   d'évaluation « préciser le degré d'acquisition », et elle n'a besoin d'aucune
   légende chiffrée.

4. **Le jury a cinq minutes : tout est replié par défaut.** Les niveaux non atteints,
   les composantes essentielles, les blocs transversaux, les détails de mission et le
   contrôle du plan vivent dans des `<details>` fermés. Au chargement, la page visible
   fait 37 000 caractères contre 85 000 dans le DOM. Ce qui doit exister n'a pas à
   encombrer.

5. **Ce qui manque est signalé une fois discrètement, et récapitulé à un seul
   endroit.** Un champ vide prend un soulignement pointillé ambre. La liste complète
   vit dans l'avis de travaux en tête de page, avec un pourcentage. Le monde précédent
   affichait 121 encadrés colorés simultanément ; il en reste 33 à l'écran, sans
   suffixe sur les champs courts.

6. **Une seule famille typographique.** Barlow, avec sa version semi-condensée pour
   les cartouches et la signalétique. Le monde précédent en avait quatre, et c'était
   une cause directe de la densité.

7. **Fond clair, choisi pour la scène d'usage.** Une soutenance projetée dans une salle
   éclairée. Un fond sombre s'y délave ; le papier tient.

## Color System

- **Papier et zones** — `papier` est le ground. Les trois `zone-*` sont les bandes de
  fond du diagramme, dont le ton s'assombrit avec le niveau : plus on avance, plus la
  zone est dense. Ne pas réaffecter ces trois tons à autre chose qu'un niveau.
- **Les six lignes** — chaque couleur est vérifiée à deux endroits : au-dessus de 5:1
  sur le papier (donc utilisable en texte), et le blanc au-dessus de 5,4:1 sur elle
  (donc utilisable dans une pastille). **Aucune couleur de ligne ne porte du texte
  au-dessus d'une bande de zone** : sur `zone-3`, quatre des six descendent sous 4,5:1.
  Les lignes sont des graphiques sur les zones, jamais du texte.
- **Encre** — trois niveaux : `encre` pour le texte principal et les surfaces sombres,
  `encre-2` pour la prose secondaire, `encre-3` pour la signalétique et les métadonnées.
  `encre-3` est à 4,98:1, juste au-dessus du seuil : ne pas l'éclaircir.
- **Travaux** — l'ambre `travaux` est réservé à ce qui manque et à ce qui est engagé
  sans être acquis. Il n'est jamais décoratif.
- Les erreurs dures (terminus dépassé, libellé absent du référentiel) empruntent le
  rouge de la ligne 1 sur `alerte-fond`, avec `alerte-texte` à 9,66:1.
- **Surfaces sombres** — l'afficheur de prochain arrêt est la seule surface sombre du
  site, et il a ses propres tons, tous vérifiés sur `encre` : `sombre-prose` 11:1,
  `sombre-meta` 7,95:1, `sombre-alerte` 8,19:1, `sombre-filet` 3,3:1 pour les limites
  de composant. Ne jamais réutiliser `encre-2` ou `encre-3` en texte sur fond encre :
  ils sont calibrés pour le papier.

## Typography

Onze pas, pas plus. Six fixes (`0.72`, `0.78`, `0.82`, `0.88`, `1rem`, `1.05rem`) et
cinq fluides en `clamp()` pour le titre de page, les titres de section, les titres de
fiche, l'arrêt courant de l'afficheur et le chronomètre.

- **Barlow Semi Condensed** porte tout ce qui relève de la signalétique : titres,
  pastilles de ligne, codes de station, libellés de contrôle, afficheur. Barlow est un
  dessin de signalétique routière, et la version condensée est ce qui permet des
  cartouches courts et lisibles de loin — utile quand le site est projeté.
- **Barlow** porte le texte courant.
- L'italique est réservé à un seul usage sémantique : la **réflexion**. Les
  justifications de niveau, ce qu'une trace démontre, et le commentaire de l'afficheur.
  Nulle part ailleurs.
- Mesure de lecture plafonnée à 66ch. Chiffres tabulaires activés globalement.
- Interlettrage de 0,07em à 0,09em sur les capitales de signalétique uniquement.

## Layout & Spacing

- Sections pleine largeur séparées par un filet de 1px, marge latérale fluide
  `clamp(1.25rem, 4vw, 4rem)`.
- Le diagramme occupe la première vue, précédé d'un en-tête d'identité compact — pas de
  grande zone d'accroche.
- Les fiches de ligne, de mission et de trajet sont des `<details>` dont le sommaire
  porte l'information de survol : pastille, nom, niveau atteint, terminus. Le sommaire
  seul doit suffire à se repérer.
- Le diagramme change d'orientation plutôt que de rétrécir : au-delà de 60rem, six
  lignes horizontales avec cartouches à gauche ; en dessous, cartouches au-dessus de
  chaque ligne et zones recalculées sur la largeur disponible.
- L'`escale` de l'itinéraire passe à deux colonnes au-delà de 52rem.

## Components

- **Pastille de ligne** — gélule colorée portant `C1` à `C6`, en blanc. C'est
  l'identifiant de compétence partout sur le site. Toujours accompagnée du nom de la
  compétence quelque part dans le même bloc : la couleur ne porte jamais seule
  l'information.
- **Dépli** (`details`) — chevron dessiné en CSS qui pivote à l'ouverture, filet
  supérieur de 1px, jamais d'encadré. C'est le conteneur structurant du site, à la
  place des cartes.
- **Avis de travaux** — un seul par page, en tête, replié, listant tous les champs
  manquants sur deux colonnes.
- **Alerte** — encadré rouge réservé aux erreurs de conformité au référentiel.
- **Afficheur de prochain arrêt** — panneau bas fixe, fond encre, reprenant la forme
  des afficheurs embarqués : arrêt courant, prochain arrêt, temps restant, jauge de
  progression pondérée par la durée de chaque étape.
- **Boutons** — gélules à bordure de 1,5px sur fond blanc ; l'action primaire est
  pleine en encre. L'ombre au survol porte un décalage et un flou, jamais un halo.
- **Icônes** — jeu dessiné à la main dans la grammaire de la signalétique, trait de 2px,
  bouts ronds : terminus, correspondance, travaux, arrêt, trajet, trace, horloge, lieu.
  Aucun caractère unicode ne tient lieu d'icône.
- **Surfaces du navigateur** thématisées : sélection en encre sur papier, caret rouge
  ligne 1, ascenseurs en `filet-fort` arrondis sur `papier-creux`, anneau de focus bleu
  ligne 2 à 3px, soulignement des liens à 0,2em.

## Motion & Interaction

Un seul moment orchestré, au chargement : **la mise en service**. Les tronçons acquis
avancent depuis l'origine par `stroke-dashoffset` sur 1,1s, décalés de 90ms par ligne ;
les marqueurs de position se posent ensuite avec une légère mise à l'échelle. Sortie
exponentielle `cubic-bezier(0.16, 1, 0.3, 1)`, depuis un état déjà lisible : sans
JavaScript ni animation, le plan est complet.

`prefers-reduced-motion: reduce` supprime l'animation et le défilement lissé.

**Interaction signature — la correspondance.** Pointer une mission trace un chemin à 45°
reliant ses arrêts sur toutes les lignes qu'elle dessert, étiqueté par son code. C'est
la démonstration visuelle qu'une mission mobilise plusieurs compétences — le piège que
la grille d'évaluation sanctionne nommément. Pointer une ligne ouvre sa fiche.
Navigation aux flèches entre lignes, `Entrée` pour ouvrir.

**Mode soutenance** (`S`). Déroule les cinq étapes imposées, fait défiler vers l'ancre
de chaque étape, et compte le temps restant sur le total de cinq minutes, parce que
c'est le total qui est noté. `←` `→` pour changer d'arrêt, `Espace` pour démarrer et
mettre en pause, `Échap` pour quitter.

## Voice & Tone

Français. Vocabulaire de réseau tenu de bout en bout : ligne, zone, station,
correspondance, terminus, desserte, travaux, arrêt. Les compétences du référentiel sont
citées mot pour mot et ne sont jamais reformulées, même quand une reformulation serait
plus courte. Les contrôles nomment leur action. Les anomalies nomment le problème et sa
correction, et disent quels points de la grille sont en jeu.

## Anti-Patterns

- Pas de grille de cartes identiques comme structure de page. Le dépli remplace la
  carte.
- Pas de barre de progression en pourcentage pour une compétence : la position sur la
  ligne et le tronçon en pointillé disent le niveau avec plus de précision.
- Pas de couleur de ligne en texte sur une bande de zone.
- Pas de couleur seule pour identifier une ligne : la pastille porte toujours son code.
- Pas d'ambre décoratif, pas de dégradé de texte, pas de verre dépoli ornemental.
- Pas de deuxième famille typographique.
- Pas de section dépliée par défaut au chargement, hors la première vue et la notice.
- Pas de graphique sans équivalent en tableau.
- Ne jamais déclarer un niveau au-delà du terminus de la ligne : le site affiche une
  alerte, et le jury la verrait.
