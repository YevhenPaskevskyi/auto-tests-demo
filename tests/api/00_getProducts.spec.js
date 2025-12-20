import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
test.skip(process.env.CI === 'true', 'Skip API tests in CI');


test('GET /products returns list of products', async ({ request }) => {
  await allure.step('Get products', async () => {
  const response = await request.get('https://fakestoreapi.com/products');

  expect(response.status()).toBe(200);

  const products = await response.json();

  expect(Array.isArray(products)).toBe(true);
  expect(products.length).toBeGreaterThan(0);
});
});