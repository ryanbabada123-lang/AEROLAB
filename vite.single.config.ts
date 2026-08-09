import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

/**
 * Config du build de PRÉVISUALISATION mono-fichier.
 *
 * Tout part dans un seul bundle et tous les assets (dont les polices KaTeX)
 * sont convertis en data: URI par Vite lui-même — pas de découpage, donc
 * rien à recoller à la main ensuite.
 *
 * Le build de production normal (vite.config.ts) reste scindé en chunks :
 * c'est lui qui compte pour un déploiement réel.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    outDir: 'dist-single',
    target: 'es2020',
    cssCodeSplit: false,
    // Toutes les polices et images passent en data: URI.
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
  },
})
