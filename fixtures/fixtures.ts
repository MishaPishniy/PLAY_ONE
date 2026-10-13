import { LoginPage } from "../pages/login";
import { InventoryPage } from "../pages/InventoryPage";
import { test as base, expect } from "@playwright/test";

type MyFixtures = {
  loggedInPage: LoginPage;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login("standard_user", "secret_sauce");

    await use(loginPage);
  },

  loginPage:
      async ({ page }, use) => {

        const loginPage =
          new LoginPage(page);

        await use(loginPage);

      },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
  },
});

export { expect };
