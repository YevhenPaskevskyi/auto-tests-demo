import { test, expect } from '../../fixtures/apiFixtures.js';
test.skip(process.env.CI === 'true', 'Skip API tests in CI');


test('POST /auth/login returns token', async ({ authApi }) => {
  const res = await authApi.login('mor_2314', '83r5^_');
  expect(res.status()).toBe(201);

  const body = await res.json();
  expect(body).toHaveProperty('token');
  expect(typeof body.token).toBe('string');
  expect(body.token.length).toBeGreaterThan(10);
});