import { test, expect } from '@playwright/test';

test('login через API', async ({ request }) => {
  const response = await request.post('/api/auth/signin', {
    data: {
      email: process.env.QAUTO_EMAIL,
      password: process.env.QAUTO_PASSWORD,
      remember: false,
    },
  });

  console.log('Status:', response.status());

  const body = await response.json();

  console.log('Body:');
  console.log(body);

  expect(response.status()).toBe(200);

  const headers = response.headers();

  console.log(headers);


const setCookie = response.headers()['set-cookie'];

console.log(setCookie);

  const state = await request.storageState();

  console.log(state.cookies);
});