import { test as base, expect } from '@playwright/test';
import { ProductsApiClient } from '../api/clients/ProductsApiClient.js';
import { CartsApiClient } from '../api/clients/CartsApiClient.js';
import { UsersApiClient } from '../api/clients/UsersApiClient.js';

export const test = base.extend({
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