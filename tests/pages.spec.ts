import { expect, test } from '@playwright/test';

const slugs = [
  'desenvolvimento-tecnico-uniforme',
  'bordado-computadorizado',
  'preparacao-estampa-dtf',
  'preparacao-silk',
  'preparacao-sublimacao',
];

test('home possui estrutura semântica e conteúdo central', async ({ page }) => {
  await page.goto('./');

  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 1, name: 'Vinicius Rafael' })).toBeVisible();
  await expect(page.locator('main#conteudo-principal')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toBeVisible();
  await expect(page.getByRole('contentinfo')).toBeVisible();
  await expect(page.locator('[data-project-list] > li')).toHaveCount(5);
});

for (const slug of slugs) {
  test(`case ${slug} possui rota, aviso e noindex`, async ({ page }) => {
    await page.goto(`projetos/${slug}/`);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
    await expect(page.getByText('Conteúdo demonstrativo — substituir por projeto real.').first()).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Navegação entre projetos' })).toBeVisible();
  });
}

test('404 orienta retorno ao portfólio', async ({ page }) => {
  await page.goto('404.html');
  await expect(page.getByRole('heading', { level: 1, name: 'Este arquivo não foi encontrado.' })).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
  await expect(page.getByRole('link', { name: 'Voltar ao portfólio' })).toHaveAttribute(
    'href',
    '/portfolio-vinicius/',
  );
});

test('links internos principais respondem', async ({ page, request }) => {
  await page.goto('./');
  const hrefs = await page.locator('a[href]').evaluateAll((anchors) =>
    [
      ...new Set(
        anchors
          .map((anchor) => (anchor as HTMLAnchorElement).href.split('#')[0])
          .filter((href): href is string => Boolean(href)),
      ),
    ],
  );

  for (const href of hrefs) {
    if (!href.startsWith('http://127.0.0.1:4321/portfolio-vinicius/')) continue;
    const response = await request.get(href);
    expect(response.ok(), `Falha ao abrir ${href}`).toBeTruthy();
  }
});

test('imagens e favicon internos respondem sob o base path', async ({ page, request }) => {
  await page.goto('./');
  const assetUrls = await page.locator('img, link[rel="icon"]').evaluateAll((elements) =>
    elements
      .map((element) =>
        element instanceof HTMLImageElement ? element.currentSrc : (element as HTMLLinkElement).href,
      )
      .filter(Boolean),
  );

  for (const url of assetUrls) {
    expect(url).toContain('/portfolio-vinicius/');
    const response = await request.get(url);
    expect(response.ok(), `Falha ao abrir asset ${url}`).toBeTruthy();
  }
});
