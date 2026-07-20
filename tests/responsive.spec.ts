import { expect, test } from '@playwright/test';

for (const width of [320, 360, 390, 768, 1024, 1440]) {
  test(`não há overflow horizontal em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('./');
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}

test('informações do card permanecem visíveis no celular', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto('./');
  const firstCard = page.locator('[data-project-list] .project-folder-card').first();
  await expect(firstCard.getByRole('heading')).toBeVisible();
  await expect(firstCard.getByText('Abrir projeto')).toBeVisible();
  await expect(firstCard.getByText('Conteúdo demonstrativo')).toBeVisible();
});
