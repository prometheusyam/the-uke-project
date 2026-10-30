import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    netlify(),
    Sitemap({
      hostname: 'https://theukeproject.ca',
      dynamicRoutes: [
        '/',
        '/program',
        '/research',
        '/about',
      ],
    }),
  ],
})