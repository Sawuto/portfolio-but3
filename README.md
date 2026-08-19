# Portfolio S6 — BUT3 Informatique, parcours Réalisation d'applications

Portefeuille de compétences et vitrine de soi, IUT Lyon 1. React + Vite, site statique.

---

## Démarrer

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # génère dist/
npm run preview      # vérifie le build avant de publier
```

## Ce que tu dois modifier

**Un seul fichier : `src/content/portfolio.js`.**

Tout le contenu vit là. Le design, le plan et les vérifications n'ont pas besoin d'être
touchés. Chaque champ non rempli prend un discret soulignement pointillé ambre, et la
liste complète de ce qui manque est récapitulée à un seul endroit : l'**avis de
travaux**, replié en haut de la page, avec le pourcentage de remplissage.

`src/data/referentiel.js` contient le référentiel national cité mot pour mot.
**Ne le reformule pas** — c'est précisément ce qui est noté.

## Ordre de remplissage, par rentabilité

La grille d'évaluation du portfolio note sur 100. Voici où partent les points, et donc
par quoi commencer.

| Priorité | Quoi remplir | Points en jeu |
|---|---|---|
| 1 | `stations[].sondes` — compétences, niveaux, apprentissages critiques, justifications | **25** — lien au référentiel |
| 2 | `stations[]` — descriptifs concis + `traces[].demontre` | **20** — missions et traces |
| 3 | `monteeEnCompetence` — S4, S6, la bascule | appui des **30** points de l'oral réflexif |
| 4 | `carnet`, `identite`, `aTerre` | **15** — rédaction et mise en forme |
| 5 | `cheminSoutenance` | appui des **10** points de respect du temps |

## Les trois pièges que la grille sanctionne nommément

1. **« Un projet multicompétences traité comme l'illustration d'une seule compétence. »**
   Une mission de développement en équipe touche presque toujours Réaliser + Conduire
   + Collaborer. Le site t'avertit quand une station ne déclare qu'une seule sonde.

2. **« Un simple recopiage du référentiel, sans faire le lien avec les missions. »**
   Chaque compétence doit descendre jusqu'à une station et une trace. La section
   *Profondeurs* affiche un avertissement pour toute compétence sans station.

3. **L'« usine à gaz » qui crée de la confusion.** Tout est replié par défaut : au
   chargement, la page visible fait moins de la moitié du contenu réel. Le plan a son
   équivalent en tableau à un clic, et sa légende est permanente.

## Structure du site

Le site a **sept pages** : l'accueil et une page par compétence.

| Adresse | Contenu |
|---|---|
| `#` | Le plan du réseau, les six lignes en index, les missions, le trajet, l'itinéraire, la notice |
| `#/ligne/c1` … `#/ligne/c6` | Une compétence : son niveau dans les mots du référentiel, les apprentissages critiques mobilisés, la montée du S4 au S6 avec sa bascule, et les missions qui la prouvent |

Le routage se fait par fragment d'URL, sans dépendance : le site reste un fichier
statique, sans règle de réécriture côté serveur. La barre des six lignes sous la
navigation ouvre chaque page en un clic, et cliquer une ligne sur le plan ouvre sa page.

**Les missions ne sont écrites qu'une fois**, sur l'accueil. Les pages de compétence les
lient au lieu de les recopier. C'est volontaire : recopier une mission sur chaque page
reviendrait à la découper en morceaux, et la grille sanctionne le fait de traiter un
projet multicompétences comme l'illustration d'une seule compétence.

Volume : environ 1 350 mots sur l'accueil, 560 par page de compétence.

## Comment lire le plan

Le portfolio est un plan de réseau de transport.

| Sur le plan | Dans le référentiel |
|---|---|
| Une **ligne** | Une compétence |
| Une **zone** | Un niveau |
| Une **station** | Une mission, une SAÉ, un projet |
| Une **correspondance** | Une mission qui mobilise plusieurs compétences |
| Un **terminus** | Le niveau maximum que le parcours RA conduit |
| Un tronçon **en pointillé** | Un niveau engagé sans être acquis |

## Le terminus de chaque ligne

Toutes les compétences ne montent pas au niveau 3 en parcours *Réalisation
d'applications* :

| Compétence | Terminus |
|---|---|
| Réaliser un développement d'application | zone 3 |
| Optimiser des applications informatiques | zone 3 |
| Travailler dans une équipe informatique | zone 3 |
| Administrer des systèmes informatiques communicants | **zone 2** |
| Gérer des données de l'information | **zone 2** |
| Conduire un projet | **zone 2** |

Déclarer un niveau 3 sur les trois dernières se verrait en soutenance. Le site affiche
une alerte si tu le fais, et le plan trace le terminus.

## Toutes tes traces sont inaccessibles au jury — c'est le chantier n°1

Vérifié le 11/08/2026 :

| Source | État | Qui peut ouvrir |
|---|---|---|
| 3 dépôts forge Lyon 1 | privés (SSO) | ton tuteur enseignant seulement |
| 6 dépôts GitHub Classroom du Cégep | privés (404 sans compte) | **personne dans le jury** |
| Code Ciril Group | propriétaire | personne, et c'est normal |
| **7 dépôts sur github.com/Sawuto** | **publics** | **tout le monde** |
| **Certificat CCNA ENSA** | **public** | **tout le monde** |

La grille attribue 20 points à la présentation des missions **et à l'accès aux
traces**. Un lien qui renvoie une 404 pendant la soutenance est pire que pas de lien.

**Vérifie par toi-même** : ouvre chaque lien du site dans une fenêtre de navigation
privée. C'est le seul test qui compte.

Pour chaque trace, produis un artefact autonome dans `public/traces/` et renseigne
`lienPublic` : deux pages de code commenté, un schéma de données, une capture, une
courte démonstration animée pour les jeux. Pour tes projets Matane, tu peux aussi
republier **ton propre code** dans des dépôts publics — mais pas le code de départ
fourni par l'enseignant, qui ne t'appartient pas.

## Les 20 minutes les plus rentables de ta semaine

Tes sept dépôts publics sont accessibles au jury, mais **aucun n'a de description et
cinq n'ont pas de README**. Un dépôt public muet est une trace faible : le jury voit une
liste de dossiers et repart.

1. Une description d'une ligne sur chaque dépôt, via le bouton *About* de GitHub.
2. Un README de dix lignes : le problème, la techno, comment lancer.
3. Renomme `fichiers-dans-un-r-pertoire` et `projet-jeu-it-ration-serveur-2025-Sawuto` —
   l'accent a été mangé. GitHub redirige les anciennes URL, donc c'est sans risque.
4. Dans le README d'`Aventurier_Java`, corrige `git clone (https://…)` : les parenthèses
   rendent la commande incopiable.

`Aventurier_Java` est déjà ton meilleur artefact public — MVC explicite, tests JUnit,
documentation. C'est ta seule preuve publique sur les apprentissages critiques
« patrons de conception » et « valider la qualité par les tests ».

## Aucun compte de tiers n'est publié

Tu n'es propriétaire d'aucun des trois dépôts de la forge Lyon 1, ni de celui de la game
jam : leurs URL contiennent l'identifiant d'un camarade. Le site ne les affiche donc pas.
Elles restent dans `src/content/portfolio.js` pour ta référence. Pour les rendre
consultables, il faut demander au propriétaire — ce n'est pas à toi de le décider seul.

Le certificat CCNA est ta trace la plus solide : publique, vérifiable, non
confidentielle. Dépose le PDF dans `public/traces/`. Et garde la formulation exacte —
certificat de **réussite de cours** Cisco Networking Academy, pas la certification
CCNA 200-301, qui passe par un examen distinct. Le site le dit déjà ainsi.

## Le mode soutenance

Touche **S**, ou le bouton en haut à droite.

Il déroule les cinq étapes imposées par les consignes, fait défiler la page vers la
bonne section à chaque étape, et compte le temps sur le total de 5 minutes. Flèches
← → pour naviguer, Espace pour démarrer et mettre en pause, Échap pour quitter. Le
chronomètre passe au magenta si tu dépasses.

Répète avec, la veille. Les 10 points du respect du temps sont les moins chers de toute
la grille.

## Héberger le site sur GitHub Pages

Le dépôt contient déjà `.github/workflows/deploy.yml` : à chaque `git push` sur `main`,
GitHub reconstruit le site et le publie. Tu n'as jamais à envoyer `dist/` à la main.

**Mise en place, une seule fois :**

```bash
git init
git add -A
git commit -m "Portfolio S6 BUT3 RA"
gh repo create Sawuto/portfolio --public --source=. --push
```

Puis, sur la page du dépôt : **Settings → Pages → Build and deployment → Source**, et
choisis **GitHub Actions** (pas « Deploy from a branch »). Le premier déploiement part
tout seul.

L'adresse sera **https://sawuto.github.io/portfolio/**

**Ensuite, à chaque modification :**

```bash
git add -A && git commit -m "Complète les traces" && git push
```

Une minute plus tard, le site en ligne est à jour. L'onglet **Actions** du dépôt montre
l'avancement et signale toute erreur de build.

Le `base: './'` de `vite.config.js` est ce qui permet au site de fonctionner dans un
sous-dossier comme `/portfolio/`. Ne le retire pas.

**Avant de mettre le lien sur TOMUSS**, ouvre-le dans une fenêtre de navigation privée.
C'est le seul test qui prouve que le jury y aura accès.

Le lien est à renseigner sur TOMUSS. Vérifie-le depuis une fenêtre de navigation
privée : un portfolio qui demande une connexion au jury est un portfolio inaccessible.

Les polices (Barlow, Barlow Semi Condensed) sont chargées depuis Google Fonts. Si ton
hébergement doit fonctionner hors ligne, télécharge-les dans `public/` et remplace le
`<link>` de `index.html`.

## Avant de rendre

- [ ] L'avis de travaux a disparu (plus aucun champ à compléter)
- [ ] `etatDuLeve.valide = true` une fois tes niveaux relus
- [ ] Le bloc `exempleDeLeve` supprimé de `src/content/portfolio.js`
- [ ] Chaque trace ouvre sur quelque chose, en navigation privée
- [ ] Chaque `demontre` dit ce que la trace prouve **et sa limite**
- [ ] Aucun niveau au-dessus du plafond du parcours
- [ ] Le bloc « Contrôle du levé » du carnet est vide
- [ ] `npm run build` puis `npm run preview` sans erreur de console
- [ ] Testé au clavier seul, sans souris
- [ ] Le lien TOMUSS pointe sur le site publié, pas sur localhost

## Structure

```
src/
  content/portfolio.js     ← le seul fichier à modifier
  data/referentiel.js      ← référentiel national, verbatim, à ne pas reformuler
  lib/sondes.js            ← agrégation, formatage des sondes, contrôles
  components/
    Reseau.jsx             ← le plan de lignes
    Sections.jsx           ← lignes, missions, trajet, itinéraire, notice
    ModeSoutenance.jsx     ← navigation commentée chronométrée
    Champ.jsx              ← rendu des champs et des mentions « en travaux »
    Icones.jsx             ← icônes dessinées
  styles.css               ← tokens et système visuel
DESIGN.md                  ← le système visuel documenté
PRODUCT.md                 ← le cahier des charges tiré des documents d'évaluation
```
