import { test, expect } from '../fixtures/apiFixtures.js';
test.skip(process.env.CI === 'true', 'Skip API tests in CI');

test('GET /products returns list of products', async ({ productsApi }) => {
  const response = await productsApi.getProducts();
  expect(response.status()).toBe(200);
  const products = await response.json();
  expect(Array.isArray(products)).toBe(true);
});