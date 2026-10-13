import { test, expect } from "@playwright/test";

test("localStorage example", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.evaluate(() => {
    localStorage.setItem("myKey", "myValue");
  });

  await page.reload();

  const value = await page.evaluate(() => localStorage.getItem("myKey"));
  expect(value).toBe("myValue");

  await page.evaluate(() => {
    localStorage.clear();
  });

  const clearValue = await page.evaluate(() => localStorage.getItem("myKey"));
  expect(clearValue).toBe(null);

  console.log(value);
  console.log(clearValue);
});
