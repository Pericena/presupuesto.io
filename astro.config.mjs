import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  output: {
    format: 'static', // Generar archivos estáticos
  },
  adapter: netlify(), // Adaptador para despliegue en Netlify
});
