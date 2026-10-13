// spec: specs/saucedemo-auth.plan.md
// seed: tests/seed.spec.ts
import { test, expect } from '@playwright/test';

test.use({
  baseURL: 'https://www.saucedemo.com',
  // Override the QAuto credentials from the shared project configuration.
  httpCredentials: { username: '', password: '' },
  storageState: { cookies: [], origins: [] },
});

test.describe('SauceDemo — план перевірки авторизації', () => {
  test('AUTH-03. Вхід лише з клавіатури', async ({ page }) => {
    // Передумова: відкрити Login у новому контексті без збереженої авторизації.
    await page.goto('/');

    // 1. Натиснути Tab: фокус переходить у Username; ввести standard_user.
    await page.keyboard.press('Tab');
    await expect(page.getByRole('textbox', { name: 'Username', exact: true })).toBeFocused();
    await page.keyboard.type('standard_user');

    // 2. Натиснути Tab: фокус переходить у Password; ввести secret_sauce.
    await page.keyboard.press('Tab');
    await expect(page.getByRole('textbox', { name: 'Password', exact: true })).toBeFocused();
    await page.keyboard.type('secret_sauce');

    // 3. Натиснути Tab: фокус переходить на Login.
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeFocused();

    // 4. Натиснути Enter та перевірити критерії успішного входу.
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html', { timeout: 15_000 });
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeHidden();
  });
});

