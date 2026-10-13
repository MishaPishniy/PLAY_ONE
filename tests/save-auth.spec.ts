import { test, expect } from '@playwright/test';

test('login та save storage', async ({ request }) => {
  const loginResponse = await request.post(
    '/api/auth/signin',
    {
      data: {
        email: process.env.QAUTO_EMAIL,
        password: process.env.QAUTO_PASSWORD,
        remember: false,
      },
    }
  );

  expect(loginResponse.status()).toBe(200);

  const state = await request.storageState();

  const sidCookie = state.cookies.find(
    cookie => cookie.name === 'sid'
  );

  expect(sidCookie).toBeDefined();

  await request.storageState({
    path: 'playwright/.auth/user.json',
  });
});