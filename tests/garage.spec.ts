import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json',
});

test('відкрити Garage без login', async ({ page }) => {
  await page.goto('/panel/garage');

  await expect(page).toHaveURL(
    /\/panel\/garage/
  );
});