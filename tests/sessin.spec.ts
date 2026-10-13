import { test, expect } from "@playwright/test";
test("sessionStorage example", async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");

  await page.evaluate(() => {
    sessionStorage.setItem("currentTest", "login");
  });

  const value = await page.evaluate(() => {
    return sessionStorage.getItem("currentTest");
  });

  console.log(value);
  expect(value).toBe("login");

});