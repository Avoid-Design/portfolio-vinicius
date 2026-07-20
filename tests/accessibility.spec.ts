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

test('menu móvel opera por teclado e Escape devolve foco', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('link', { name: 'Projetos', exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});

test('menu móvel aberto não oculta o próximo foco', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('./');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.focus();
  await page.keyboard.press('Enter');

  for (let index = 0; index < 7; index += 1) await page.keyboard.press('Tab');

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

  for (let index = 0; index < 9; index += 1) await page.keyboard.press('Tab');

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

  await expect(page.getByRole('link', { name: 'Projetos', exact: true })).toBeVisible();
  await expect(page.locator('[data-filter-controls]')).toBeHidden();
  await expect(page.locator('[data-project-list] > li')).toHaveCount(5);
  await expect(page.locator('[data-project-list] > li').first()).toBeVisible();
  await context.close();
});

test('redução de movimento evita ativar a introdução', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  await expect(page.locator('html')).not.toHaveAttribute('data-logo-intro', 'play');
  await expect(page.locator('[data-opening-copy]')).toBeVisible();
});

test('introdução executa no máximo uma vez por sessão', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('html')).toHaveAttribute('data-logo-intro', 'play');
  await page.reload();
  await expect(page.locator('html')).not.toHaveAttribute('data-logo-intro', 'play');
  await expect(page.locator('[data-opening-copy]')).toBeVisible();
});
