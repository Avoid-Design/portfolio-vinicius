import { expect, test } from '@playwright/test';

test('skip link é o primeiro foco e aponta ao main', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Pular para o conteúdo' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toHaveAttribute('href', '#conteudo-principal');
  await page.keyboard.press('Enter');
  await expect(page.locator('main#conteudo-principal')).toBeFocused();
});

test('menu recolhido opera por teclado e Escape devolve foco', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  const menu = page.locator('[data-site-menu]');
  const summary = page.locator('[data-menu-summary]');
  await expect(menu).not.toHaveAttribute('open', '');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('open', '');
  await expect(page.getByRole('link', { name: 'Projetos', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).not.toHaveAttribute('open', '');
  await expect(summary).toBeFocused();
});

for (const width of [390, 1440]) {
  test(`menu inicia recolhido em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto('./');
    await expect(page.locator('[data-site-menu]')).not.toHaveAttribute('open', '');
  });
}

test('menu aberto não oculta o próximo foco', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('./');
  const menu = page.locator('[data-menu-summary]');
  await menu.focus();
  await page.keyboard.press('Enter');

  for (let index = 0; index < 4; index += 1) await page.keyboard.press('Tab');

  const focusGeometry = await page.evaluate(() => {
    const active = document.activeElement?.getBoundingClientRect();
    const header = document.querySelector('header')?.getBoundingClientRect();
    return active && header
      ? { activeTop: active.top, activeBottom: active.bottom, headerBottom: header.bottom, viewport: innerHeight }
      : null;
  });

  expect(focusGeometry).not.toBeNull();
  expect(focusGeometry!.activeTop).toBeGreaterThanOrEqual(Math.max(0, focusGeometry!.headerBottom));
  expect(focusGeometry!.activeBottom).toBeLessThanOrEqual(focusGeometry!.viewport);
});

test('navegação sem JavaScript não encobre o foco em viewport baixa', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 568 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/portfolio-vinicius/');

  const summary = page.locator('[data-menu-summary]');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-site-menu]')).toHaveAttribute('open', '');
  for (let index = 0; index < 4; index += 1) await page.keyboard.press('Tab');

  const focusGeometry = await page.evaluate(() => {
    const active = document.activeElement?.getBoundingClientRect();
    const header = document.querySelector('header')?.getBoundingClientRect();
    return active && header
      ? { activeTop: active.top, activeBottom: active.bottom, headerBottom: header.bottom, viewport: innerHeight }
      : null;
  });

  expect(focusGeometry).not.toBeNull();
  expect(focusGeometry!.activeTop).toBeGreaterThanOrEqual(Math.max(0, focusGeometry!.headerBottom));
  expect(focusGeometry!.activeBottom).toBeLessThanOrEqual(focusGeometry!.viewport);
  await context.close();
});

test('sem JavaScript a navegação e os cinco projetos permanecem disponíveis', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/portfolio-vinicius/');

  await page.locator('[data-menu-summary]').click();
  await expect(page.getByRole('link', { name: 'Projetos', exact: true })).toBeVisible();
  await expect(page.locator('[data-filter-controls]')).toBeHidden();
  await expect(page.locator('[data-project-list] > li')).toHaveCount(5);
  await expect(page.locator('[data-project-list] > li').first()).toBeVisible();
  await context.close();
});

test('redução de movimento mantém abertura visível e desativa rolagem suave', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  await expect(page.locator('[data-opening-copy]')).toBeVisible();
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
});
