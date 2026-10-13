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
  test('AUTH-02. Вхід клавішею Enter у полі Password', async ({ page }) => {
    // Передумова: відкрити Login у новому контексті без збереженої авторизації.
    await page.goto('/');

    // 1. Ввести standard_user і secret_sauce.
    await page.getByRole('textbox', { name: 'Username', exact: true }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('secret_sauce');

    // 2. Залишити фокус у Password і натиснути Enter.
    await expect(page.getByRole('textbox', { name: 'Password', exact: true })).toBeFocused();
    await page.getByRole('textbox', { name: 'Password', exact: true }).press('Enter');

    // 3. Дочекатися каталогу та перевірити критерії успішного входу.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html', { timeout: 15_000 });
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeHidden();
  });
});

