import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://presupuestosw2.netlify.app',
  sitemap: true,
  outDir: './dist', // Carpeta de salida para archivos estáticos
  integrations: [
    tailwind(),
    react()
  ],
  adapter: netlify(), // Adaptador para despliegue en Netlify
});
