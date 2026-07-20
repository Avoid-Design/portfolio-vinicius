import { expect, test } from '@playwright/test';

test('filtro sincroniza cards, URL, estado e histórico', async ({ page }) => {
  await page.goto('./');
  const list = page.locator('[data-project-list]');
  const visibleProjects = list.locator(':scope > li:not([hidden])');

  await expect(page.locator('[data-filter-controls]')).toBeVisible();
  await expect(visibleProjects).toHaveCount(5);

  await page.getByRole('button', { name: /Bordado/ }).click();
  await expect(page).toHaveURL(/categoria=bordado/);
  await expect(visibleProjects).toHaveCount(1);
  await expect(page.getByRole('button', { name: /Bordado/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('status')).toContainText('1 projeto exibido');

  await page.getByRole('button', { name: /^DTF/ }).click();
  await expect(page).toHaveURL(/categoria=dtf/);
  await page.goBack();
  await expect(page).toHaveURL(/categoria=bordado/);
  await expect(page.getByRole('button', { name: /Bordado/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(visibleProjects).toHaveCount(1);

  await page.getByRole('button', { name: /Todos/ }).click();
  await expect(page).not.toHaveURL(/categoria=/);
  await expect(visibleProjects).toHaveCount(5);
});

test('valor de categoria inválido preserva todos os projetos', async ({ page }) => {
  await page.goto('?categoria=inexistente');
  await expect(page.getByRole('button', { name: /Todos/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-project-list] > li:not([hidden])')).toHaveCount(5);
  await expect(page).not.toHaveURL(/categoria=/);
});

test('filtros respondem ao teclado nativo', async ({ page }) => {
  await page.goto('./');
  const silk = page.getByRole('button', { name: /Silk/ });
  await silk.focus();
  await page.keyboard.press('Space');
  await expect(silk).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-project-list] > li:not([hidden])')).toHaveCount(1);
});
