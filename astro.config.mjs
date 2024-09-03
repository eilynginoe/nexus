import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Configura el modo de salida para Vercel
  adapter: vercel(),
  integrations: [react()],
});