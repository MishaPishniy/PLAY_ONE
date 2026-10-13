import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { InventoryPage } from "../pages/InventoryPage";
test("User can add backpack to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.open();
  await loginPage.login(process.env.USERNAMES!, process.env.PASSWORD!);
  await expect(inventoryPage.title).toHaveText("Products");
  await inventoryPage.addBackpackToCart();
  await expect(inventoryPage.cartLink).toContainText("1");
});

test("Products are sorted by price from high to low", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.open();
  await loginPage.login(process.env.USERNAMES!, process.env.PASSWORD!);
  await expect(inventoryPage.title).toHaveText("Products");

  await inventoryPage.sortByPriceHighToLow();
  await expect(inventoryPage.sortSelect).toHaveValue("hilo");

  const prices = (await inventoryPage.productPrices.allTextContents()).map(
    (price) => Number(price.replace("$", "")),
  );
  expect(prices).toHaveLength(await inventoryPage.products.count());
  expect(prices.length).toBeGreaterThan(1);
  expect(prices.every(Number.isFinite)).toBe(true);
  expect(new Set(prices).size).toBeGreaterThan(1);
  expect(prices).toEqual([...prices].sort((a, b) => b - a));
});
