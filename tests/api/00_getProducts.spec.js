import { test, expect } from '../fixtures/apiFixtures.js'; 
// если у вас НЕ "type": "module", можно без .js

test('GET /products returns list of products', async ({ productsApi }) => {
  const response = await productsApi.getProducts();
  expect(response.status()).toBe(200);

  const products = await response.json();
  expect(Array.isArray(products)).toBe(true);
  expect(products.length).toBeGreaterThan(0);
});