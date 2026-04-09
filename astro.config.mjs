// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE || undefined,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
