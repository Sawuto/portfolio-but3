# Portfolio S6 — BUT3 Informatique, parcours Réalisation d'applications

React + Vite, site statique.

## Installer et lancer

```bash
npm install
npm run dev          # http://localhost:5173
```

## Builder et vérifier avant publication

```bash
npm run build         # génère dist/
npm run preview        # sert le build sur http://localhost:4173
```

## Déploiement (GitHub Pages)

Le dépôt contient `.github/workflows/deploy.yml` : à chaque `git push` sur `main`,
GitHub reconstruit le site et le publie automatiquement. Aucun envoi manuel de
`dist/` n'est nécessaire.

`base: './'` dans `vite.config.js` permet au site de fonctionner dans un
sous-dossier (`https://user.github.io/repo/`) — ne pas le retirer.

Les polices (Barlow, Barlow Semi Condensed) sont chargées depuis Google Fonts
dans `index.html`. Pour un hébergement hors ligne, les télécharger dans
`public/` et remplacer le `<link>` correspondant.
