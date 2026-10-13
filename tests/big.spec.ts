import { test, expect } from '@playwright/test';
test('User can buy product', async ({ page }) => {

  await test.step('Login', async () => {

    await page.goto('https://www.saucedemo.com/');

    await page
      .getByPlaceholder('Username')
      .fill('standard_user');

    await page
      .getByPlaceholder('Password')
      .fill('secret_sauce');

    await page
      .getByRole('button', { name: 'Login' })
      .click();

  });

  await test.step('Add product to cart', async () => {

    await page
      .getByRole('button', {
        name: 'Add to cart',
      })
      .first()
      .click();

  });

  await test.step('Check cart', async () => {

    await page.locator('.shopping_cart_link').click();

    await expect(
      page.locator('.cart_item')
    ).toHaveCount(1);

  });

});