import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Actualizado

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ['kleur', 'clsx', 'cookie']
    }
  }
});