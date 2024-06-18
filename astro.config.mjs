import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import aws from 'astro-sst';

// https://astro.build/config
export default defineConfig({
  // site: 'https://pericena.github.io/',
  // base: 'presupuesto.io',
  site: 'https://presupuestosw2.netlify.app',
  sitemap: true,
  outDir: 'dist', // Asegúrate de que esto sea correcto
  integrations: [tailwind(), react()],
  output: "server",
  adapter: aws({
    deploymentStrategy: "edge",
  }),
});