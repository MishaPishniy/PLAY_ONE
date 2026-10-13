import { test , expect } from '../fixtures/fixtures';

test('Користувач може авторизуватись', async({loginPage}) => {

    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

})

test(
  'Додати товар у кошик',
  async ({
    loginPage,
    inventoryPage
  }) => {

    await loginPage.open();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await inventoryPage.addBackpackToCart();

  }
);

