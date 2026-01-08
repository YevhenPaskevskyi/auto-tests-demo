import { test as base, expect } from '@playwright/test';
import { ProductsApiClient } from '../api/clients/ProductsApiClient.js';
import { CartsApiClient } from '../api/clients/CartsApiClient.js';
import { UsersApiClient } from '../api/clients/UsersApiClient.js';
import { AuthApiClient } from '../api/clients/AuthApiClient.js';

export const test = base.extend({
  authApi: async ({ request }, use) => {
    await use(new AuthApiClient(request));
  },

  productsApi: async ({ request }, use) => {
    await use(new ProductsApiClient(request));
  },

  cartsApi: async ({ request }, use) => {
    await use(new CartsApiClient(request));
  },

  usersApi: async ({ request }, use) => {
    await use(new UsersApiClient(request));
  },
});

export { expect };