import { test , expect } from '../fixtures/fixtures';

test.beforeEach(
  async ({ loginPage }) => {

    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

  }
);

test(
  'Додати товар у кошик',
  async ({ inventoryPage }) => {

    await inventoryPage.addBackpackToCart();

  }
);

test(
  'Відкрити кошик',
  async ({ inventoryPage }) => {

    await inventoryPage.openCart();

  }
);