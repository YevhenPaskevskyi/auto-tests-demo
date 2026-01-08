import { test, expect } from '../../fixtures/apiFixtures.js';
test.skip(process.env.CI === 'true', 'Skip API tests in CI');


test('Products flow: get list -> get by id(from list) -> create -> update -> delete', async ({ productsApi }) => {
  let existingId;
  let createdId;

  await test.step('GET /products returns list of products (take first id)', async () => {
    const res = await productsApi.getProducts();
  
    const status = res.status();
    //const url = res.url();
    //const headers = res.headers();
    const bodyText = await res.text(); 
  
    //console.log('GET /products URL:', url);
    //console.log('GET /products STATUS:', status);
    //console.log('GET /products HEADERS:', headers);
    //console.log('GET /products BODY:', bodyText);
  
    expect(status).toBe(200);
  
    const products = JSON.parse(bodyText);
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  
    existingId = products[0].id;
    expect(existingId).toBeTruthy();
  });

  await test.step('GET /products/{id} using id from list', async () => {
    const res = await productsApi.getProductById(existingId);
    expect(res.status()).toBe(200);

    const product = await res.json();
    expect(product).toHaveProperty('id', existingId);
  });

  await test.step('POST /products (create) and store id from response', async () => {
    const payload = {
      title: 't1',
      price: 1,
      description: 'd',
      category: 'c',
      image: '1.jpg',
    };

    const res = await productsApi.addProduct(payload);
    expect([200, 201]).toContain(res.status());

    const body = await res.json();
    createdId = body.id;
    expect(createdId).toBeTruthy();
  });

  await test.step('UPDATE /products/{id} (using id from POST)', async () => {
    const res = await productsApi.updateProduct(createdId, { title: 't2' });
    expect(res.ok()).toBeTruthy();
  });

  await test.step('DELETE /products/{id} (using id from POST)', async () => {
    const res = await productsApi.deleteProduct(createdId);
    expect(res.ok()).toBeTruthy();
  });
});