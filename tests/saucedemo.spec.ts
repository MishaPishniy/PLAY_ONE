import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://www.saucedemo.com",
  httpCredentials: { username: "", password: "" },
  storageState: { cookies: [], origins: [] },
});

test("SauceDemo: standard user can log in", async ({ page }) => {
  await page.goto("/");

  await page
    .getByRole("textbox", { name: "Username", exact: true })
    .fill("standard_user");
  await page
    .getByRole("textbox", { name: "Password", exact: true })
    .fill("secret_sauce");
  await page.getByRole("button", { name: "Login", exact: true }).click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page).toHaveTitle("Swag Labs");
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Login", exact: true }),
  ).toBeHidden();
});
