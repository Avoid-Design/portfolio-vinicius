import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://avoid-design.github.io',
  base: '/portfolio-vinicius/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (url) => !url.includes('/projetos/') && !url.includes('/404'),
    }),
  ],
});
