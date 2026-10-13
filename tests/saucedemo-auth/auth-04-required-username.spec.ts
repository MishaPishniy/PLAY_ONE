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
  test('AUTH-04. Обов’язкові поля — відсутній Username', async ({ page }) => {
    // Передумова: відкрити Login у новому контексті без збереженої авторизації.
    await page.goto('/');

    // 1. Заповнити лише непорожні поля відповідно до рядка.
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('secret_sauce');
    await expect(page.getByRole('textbox', { name: 'Username', exact: true })).toBeEmpty();

    // 2. Натиснути Login.
    await page.getByRole('button', { name: 'Login', exact: true }).click();

    // 3. Перевірити стан форми, повідомлення й відсутність доступу до каталогу.
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('form', { name: 'Login', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
    await expect(page.locator('[data-test="inventory-list"]')).toBeHidden();
  });
});

