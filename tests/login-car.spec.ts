import { test, expect } from '@playwright/test';

test('login -> GET cars', async ({ request }) => {
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

  const carsResponse = await request.get('/api/cars');

  console.log('Cars status:', carsResponse.status());

  expect(carsResponse.status()).toBe(200);

  const body = await carsResponse.json();

  console.log(body);
});