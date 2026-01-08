import { test, expect } from '../../fixtures/apiFixtures.js';

test.skip(process.env.CI === 'true', 'Skip API tests in CI');

test('Users  flow: list -> get by id -> create -> update -> delete', async ({ usersApi }) => {
  let existingId;
  let createdId;

  await test.step('GET /users returns list of users (take first id)', async () => {
    const res = await usersApi.getUsers();
    expect(res.status()).toBe(200);

    const users = await res.json();
    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);

    existingId = users[0].id;
    expect(existingId).toBeTruthy();
  });

  await test.step('GET /carts/{id} using id from list', async () => {
    const res = await usersApi.getUserById(existingId);
    expect(res.status()).toBe(200);

    const user = await res.json();
    expect(user).toHaveProperty('id', existingId);
  });

  await test.step('POST /users (create) and store id from response', async () => {
    const payload = {
      userId: 1,
      date: '2020-02-03',
      products: [{ productId: 5, quantity: 1 }],
    };

    const res = await usersApi.createUser(payload);
    expect([200, 201]).toContain(res.status());

    const body = await res.json();
    createdId = body.id;
    expect(createdId).toBeTruthy();
  });

  await test.step('PUT /users/{id} (update created user)', async () => {
    const updatePayload = {
      userId: 1,
      date: '2020-02-04',
      products: [{ productId: 5, quantity: 2 }],
    };

    const res = await usersApi.updateUser(createdId, updatePayload);
    expect(res.status()).toBe(200);
  });

  await test.step('DELETE /users/{id}', async () => {
    const res = await usersApi.deleteUser(createdId);
    expect([200, 204]).toContain(res.status());
  });
});