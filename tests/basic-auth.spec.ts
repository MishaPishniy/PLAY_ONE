import { test, expect } from '@playwright/test';

test('QAuto відкривається', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL(
    'https://qauto.forstudy.space/'
  );
});