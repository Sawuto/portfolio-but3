import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' pour que le site fonctionne aussi bien a la racine d'un domaine
// que dans un sous-dossier (GitHub Pages : https://user.github.io/portfolio/).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist', assetsDir: 'a' },
})
