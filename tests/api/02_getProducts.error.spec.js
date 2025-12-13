import { test, expect } from '@playwright/test';

test('GET /products returns list of products, ERROR', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products1');

  expect(response.status()).toBe(404);


});