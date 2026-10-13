import { test, expect } from "../fixtures/fixtures";

test("Test", async ({ loggedInPage, inventoryPage }) => {
  await inventoryPage.addBackpackToCart();
});
