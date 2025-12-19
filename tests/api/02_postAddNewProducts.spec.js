import { test, expect } from '@playwright/test';
test.skip(process.env.CI === 'true', 'Skip API tests in CI');

test('POST /add new products', async ({ request }) => {
  const response = await request.post('https://fakestoreapi.com/products', {
    data: {
      "title": "string1",
      "price": 0.1,
      "description": "stringa",
      "category": "stringc",
      "image": "1.jpg"
    }
  });
  expect(response.status()).toBe(201);
  
  const product = await response.json();
  expect(product).toMatchObject({
    "title": "string1",
    "price": 0.1,
    "description": "stringa", 
    "category": "stringc",
    "image": "1.jpg"
  });
});

