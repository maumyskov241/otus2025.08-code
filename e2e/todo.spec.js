import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const locator = page.getByTestId('title');

  await expect(locator).toContainText('Каталог');
  await page.getByTestId('basket-link').click();

  const basketPage = page.getByTestId('basket-title');
  
  await expect(basketPage).toContainText('Корзина товаров');
});