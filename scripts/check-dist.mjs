import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const expected = [
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap-index.xml',
  'sitemap-0.xml',
  'projetos/desenvolvimento-tecnico-uniforme/index.html',
  'projetos/bordado-computadorizado/index.html',
  'projetos/preparacao-estampa-dtf/index.html',
  'projetos/preparacao-silk/index.html',
  'projetos/preparacao-sublimacao/index.html',
];

const failures = [];
for (const file of expected) {
  if (!existsSync(join(dist, file))) failures.push(`Arquivo ausente: dist/${file}`);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

if (existsSync(dist)) {
  for (const file of walk(dist)) {
    if (extname(file) !== '.html') continue;
    const html = readFileSync(file, 'utf8');
    const label = relative(dist, file).replaceAll('\\', '/');

    for (const match of html.matchAll(/(?:href|src)=["'](\/[^"]+)["']/g)) {
      if (!match[1].startsWith('/portfolio-vinicius/')) {
        failures.push(`${label}: URL interna fora do base path: ${match[1]}`);
      }
    }

    if (!html.includes('<html lang="pt-BR">')) failures.push(`${label}: idioma pt-BR ausente.`);
    if (!html.includes('rel="canonical"')) failures.push(`${label}: canonical ausente.`);
    if (!html.includes('name="description"')) failures.push(`${label}: description ausente.`);
  }

  const projectFiles = expected.filter((file) => file.startsWith('projetos/'));
  for (const file of projectFiles) {
    const htmlPath = join(dist, file);
    if (!existsSync(htmlPath)) continue;
    const html = readFileSync(htmlPath, 'utf8');
    if (!html.includes('content="noindex,follow"')) failures.push(`${file}: demonstrativo indexável.`);
    if (!html.includes('Conteúdo demonstrativo')) failures.push(`${file}: aviso demonstrativo ausente.`);
  }

  const sitemapPath = join(dist, 'sitemap-0.xml');
  if (existsSync(sitemapPath)) {
    const sitemap = readFileSync(sitemapPath, 'utf8');
    if (sitemap.includes('/projetos/')) failures.push('Sitemap inclui cases demonstrativos.');
    if (sitemap.includes('/404/')) failures.push('Sitemap inclui a página 404.');
  }

  const robotsPath = join(dist, 'robots.txt');
  if (existsSync(robotsPath)) {
    const robots = readFileSync(robotsPath, 'utf8');
    if (!robots.includes('https://avoid-design.github.io/portfolio-vinicius/sitemap-index.xml')) {
      failures.push('robots.txt não aponta para o sitemap esperado.');
    }
  }
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Artefatos, base path, metadados, demonstrativos, sitemap e robots validados.');
}
