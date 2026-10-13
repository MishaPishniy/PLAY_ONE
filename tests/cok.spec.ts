import { test, expect } from "@playwright/test";
test("sessionStorage example", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.context().addCookies([
    {
      name: "myCookie",
      value: "12345",
      domain: "www.saucedemo.com",
      path: "/",
    },
  ]);

  const cookie = await page.context().cookies();
  console.log(cookie);


  const sessionCookie =  cookie.find( cookie => cookie.name === "myCookie")

   expect(sessionCookie).toBeDefined();
   expect(sessionCookie?.value).toBe("12345");


const valueCookie =  cookie.find( cookie => cookie.value === "12345")

const sessionValueCookie = valueCookie?.value

console.log(sessionValueCookie);
});
