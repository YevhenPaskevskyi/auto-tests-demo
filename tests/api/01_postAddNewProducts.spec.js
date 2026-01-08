import { test, expect } from '../fixtures/apiFixtures.js';

test.skip(process.env.CI === 'true', 'Skip API tests in CI');

test('POST /add new products', async ({ productsApi }) => {
  const payload = {
    title: 'string1',
    price: 0.1,
    description: 'stringa',
    category: 'stringc',
    image: '1.jpg',
  };

  const response = await productsApi.addProduct(payload);

  
  expect([200, 201]).toContain(response.status());
  expect(response.ok()).toBeTruthy();

  const product = await response.json();

  expect(product).toMatchObject(payload);
  expect(product).toHaveProperty('id'); 
});