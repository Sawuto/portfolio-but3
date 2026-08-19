# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (choix de l'utilisateur, round d'interview du 10/08/2026). Site statique,
déployable sur GitHub Pages / Netlify / Vercel — le rendu doit rester consultable via un
simple lien à déposer sur TOMUSS.

## Users

**Utilisateur primaire — le jury de soutenance** (tuteur enseignant, tuteur entreprise,
responsables de parcours ; cf. `Fiche_notation_jury_ALT_BUT3_RA.docx`). Situation : salle de
soutenance, 22 minutes au total, dont **5 minutes** où le portfolio est projeté et commenté en
direct. Le jury doit pouvoir, en quelques secondes : comprendre la structure du site, vérifier
qu'une mission est bien rattachée aux compétences du référentiel, et atteindre une trace/preuve.
Il note ensuite sur une grille sur 100.

**Utilisateur secondaire — l'étudiant lui-même, en présentation live.** Il navigue le site comme
support de parole. Le site doit se laisser piloter : ancrages stables, pas de scroll-jacking, pas
d'animation qui retarde un propos, chaque section atteignable en un clic.

**Utilisateur tertiaire — recruteur / école.** Le lien survit à la soutenance. La dimension
« vitrine de soi » exigée par le référentiel national doit tenir devant quelqu'un qui ne connaît
ni le BUT ni la grille.

## Product Purpose

Portfolio web du semestre 6 du BUT Informatique parcours **Réalisation d'applications** (RA) à
l'IUT Lyon 1. Deux fonctions indissociables, imposées par les consignes :

1. **Vitrine de soi** — présenter la personne et son parcours.
2. **Portefeuille de compétences** — présenter les SAÉ, projets et missions de stage/alternance,
   les relier explicitement aux compétences et apprentissages critiques du référentiel national,
   donner accès aux traces/preuves, et **démontrer la montée en compétence entre le S4 et le S6**.

Succès = le jury peut cocher les niveaux hauts de la grille sans avoir à chercher, et
l'étudiant a un support qui porte son bilan réflexif à l'oral.

## Positioning

Ce que ce portfolio a de vérifiable et qu'un portfolio étudiant générique n'a pas : un
**parcours en trois lieux** — IUT Lyon 1, un an d'études au **Cégep de Matane (Québec)** en
deuxième année, et l'alternance BUT3 chez **Ciril Group** (éditeur lyonnais de logiciels pour les
collectivités territoriales). Le fil rouge n'est pas « j'ai appris des technos » mais
l'adaptation à trois cultures d'ingénierie successives : pédagogie française par compétences,
pédagogie québécoise par projets, puis production réelle en équipe chez un éditeur.

## Operating Context

- **Consignes** : `Portfolio_S6_BUT3RA_Consignes.pdf`. Le portfolio du S6 reprend la forme et les
  attendus du S4 (pages web, vitrine de soi + portefeuille de compétences), et peut être
  totalement ou partiellement refait.
- **Contenu obligatoire** : les missions de stage du S4 **et** celles de l'alternance du S6, avec
  dans les deux cas les compétences mobilisées formulées selon le référentiel, de façon à faire
  apparaître la montée en compétence.
- **Usage en soutenance** (22 min) : 17 min contexte entreprise + panorama des missions + point
  technique ; puis 5 min de bilan par compétences appuyé sur le portfolio, avec navigation
  commentée : intro des objectifs et choix du portfolio → aperçu de l'accueil et de la structure →
  mise en avant des compétences BUT3. La conclusion ouvre sur le projet post-BUT.
- **Remise** : lien du portfolio à renseigner sur TOMUSS ; rapport déposé sur TOMUSS et envoyé
  par mail aux deux tuteurs ; exemplaire papier du rapport pour le jury.
- **Note finale de l'alternance** : 4 domaines — insertion professionnelle (coef 2), soutenance
  orale (coef 1), communication écrite (coef 1), compétences (coef 1).

## Capabilities and Constraints

Grille d'évaluation du portfolio (`Grille_d_évaluation_PORTFOLIO_BUT3RA__ASPE.xlsx`), sur 100 :

| Axe | Pts | Ce qui fait le niveau A+++ |
|---|---|---|
| Présentation des SAÉ/missions : descriptif concis, accès aux traces/preuves | 20 | une **réflexion sur les traces** elles-mêmes, pas seulement leur présence |
| **Lien avec les compétences du référentiel** | 25 | solution **ergonomique** qui donne les compétences *telles que formulées dans le référentiel*, **précise leur degré d'acquisition**, et préserve une **lecture fluide** |
| Qualité de la rédaction et de la mise en forme | 15 | rendu « parfaitement professionnel » |
| Respect du temps imparti (oral) | 10 | hors site |
| Auto-évaluation, montée en compétences, posture réflexive (oral) | 30 | hors site, mais le site doit l'outiller |

Contraintes de conception qui en découlent, non négociables :

- Les intitulés de compétences et d'apprentissages critiques sont **cités mot pour mot** depuis le
  référentiel. Aucune reformulation.
- Le **degré d'acquisition** est une donnée de premier plan, pas un détail.
- Un projet multi-compétences ne doit **jamais** être présenté comme l'illustration d'une seule
  compétence — la grille sanctionne explicitement ce cas.
- Le recopiage du référentiel sans lien vers les missions est sanctionné : chaque compétence doit
  descendre jusqu'à une preuve concrète.
- Interdit inverse : l'« usine à gaz » qui crée de la confusion. La navigation compétences ↔
  projets doit rester fluide au premier regard.
- Le site doit être pilotable au clavier pendant une projection.

**Référentiel national, parcours RA — niveaux effectivement visés en BUT3** (source : fiche
RNCP35475, Université Claude Bernard Lyon 1 étant certificateur) :

| Compétence | Niveau max RA | Intitulé du niveau |
|---|---|---|
| Réaliser un développement d'application | 3 | Se spécialiser sur un ensemble de supports (embarqué, web, mobile, IOT…) avec un suivi qualitatif |
| Optimiser des applications informatiques | 3 | Analyser et optimiser des applications |
| Administrer des systèmes informatiques communicants | 2 | Déployer des services dans une architecture réseau |
| Gérer des données de l'information | 2 | Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité |
| Conduire un projet | 2 | Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs |
| Travailler dans une équipe informatique | 3 | Manager une équipe informatique |

Ce tableau est un fait, pas une opinion : le portfolio ne doit pas revendiquer un niveau 3 sur une
compétence que le parcours RA plafonne au niveau 2.

## Brand Commitments

- Établissement : IUT Lyon 1 — Université Claude Bernard Lyon 1, BUT Informatique parcours RA.
- Mobilité : Cégep de Matane, Québec, 2ᵉ année.
- Entreprise d'alternance : Ciril Group (Lyon).
- Langue : français. Le référentiel est cité en français.

## Evidence on Hand

Fournis par l'utilisateur : les quatre documents d'évaluation (consignes, grille portfolio, barème
lettres, fiche jury). Ils décrivent l'attendu, ils ne sont pas du contenu à publier.

**Absent à ce stade, à ne pas fabriquer** : nom et prénom, photo, CV, intitulé et contenu réel des
missions S4 et S6, technologies effectivement utilisées, captures, dépôts Git, liens de traces,
chiffres de résultats, nom du tuteur, projet post-BUT. Le site est livré avec ces champs
explicitement marqués comme à compléter, jamais avec des faits inventés qui pourraient être
contredits en soutenance.

## Product Principles

0. **Le jury a cinq minutes.** Retour de l'utilisateur après la première livraison :
   le portfolio est « trop fourni ». C'est une contrainte produit, pas une préférence
   esthétique. Tout ce qui existe sur le site doit survivre à ce test : est-ce qu'un
   membre du jury, en cinq minutes de navigation commentée, a besoin de voir ça ? Si
   la réponse est non, ça descend d'un niveau ou disparaît. Le référentiel complet, les
   composantes essentielles, les cinq blocs transversaux, les niveaux non atteints :
   tout cela peut exister sans être déplié par défaut. La densité était un défaut de la
   première version, à corriger dans toute direction future.
1. **Le référentiel est cité, jamais paraphrasé.** La formulation exacte est une exigence notée.
2. **Aucune compétence sans preuve, aucune preuve sans réflexion.** Le chemin compétence → mission
   → trace → « ce que cette trace démontre » doit être complet de bout en bout.
3. **La montée en compétence est une dimension structurante du site**, pas une phrase de
   conclusion : le S4 et le S6 doivent être comparables d'un coup d'œil.
4. **Pilotable en soutenance.** Tout ce qui ralentit une navigation commentée est un défaut.
5. **Ne rien affirmer que le jury pourrait démentir.** Les champs vides sont marqués comme vides.

## Accessibility & Inclusion

Le référentiel RA inclut « Appliquer des principes d'accessibilité et d'ergonomie » comme
apprentissage critique, et le bloc BC10 mentionne la conception universelle. Un portfolio
inaccessible contredirait une compétence qu'il revendique. Cible : navigation clavier complète,
contrastes AA, focus visibles, `prefers-reduced-motion` respecté, structure de titres correcte.
