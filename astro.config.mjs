import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

const env = loadEnv(import.meta.env.MODE, process.cwd(), '');

export default defineConfig({
  site: 'https://salsa-paderborn.de',
  server: { port: 4510 },
  output: 'static',
  adapter: netlify(),
  integrations: [sanity({
    projectId: env.PUBLIC_SANITY_PROJECT_ID,
    dataset: env.PUBLIC_SANITY_DATASET || 'production',
    useCdn: true,
    studioBasePath: '/studio',
  }), react(), sitemap()],
});