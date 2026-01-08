import { test, expect } from '../../fixtures/apiFixtures.js';

//test.skip(process.env.CI === 'true', 'Skip API tests in CI');

test('Cart flow: list -> get by id -> create -> update -> delete', async ({ cartsApi }) => {
  let existingId;
  let createdId;

  await test.step('GET /carts returns list of carts (take first id)', async () => {
    const res = await cartsApi.getCarts();
    expect(res.status()).toBe(200);

    const carts = await res.json();
    expect(Array.isArray(carts)).toBe(true);
    expect(carts.length).toBeGreaterThan(0);

    existingId = carts[0].id;
    expect(existingId).toBeTruthy();
  });

  await test.step('GET /carts/{id} using id from list', async () => {
    const res = await cartsApi.getCartById(existingId);
    expect(res.status()).toBe(200);

    const cart = await res.json();
    expect(cart).toHaveProperty('id', existingId);
  });

  await test.step('POST /carts (create) and store id from response', async () => {
    const payload = {
      userId: 1,
      date: '2020-02-03',
      products: [{ productId: 5, quantity: 1 }],
    };

    const res = await cartsApi.createCart(payload);
    expect([200, 201]).toContain(res.status());

    const body = await res.json();
    createdId = body.id;
    expect(createdId).toBeTruthy();
  });

  await test.step('PUT /carts/{id} (update created cart)', async () => {
    const updatePayload = {
      userId: 1,
      date: '2020-02-04',
      products: [{ productId: 5, quantity: 2 }],
    };

    const res = await cartsApi.updateCart(createdId, updatePayload);
    expect(res.status()).toBe(200);
  });

  await test.step('DELETE /carts/{id}', async () => {
    const res = await cartsApi.deleteCart(createdId);
    expect([200, 204]).toContain(res.status());
  });
});