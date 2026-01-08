import { test as base, expect } from '@playwright/test';
import { ProductsApiClient } from '../api/clients/ProductsApiClient.js';
import { CartsApiClient } from '../api/clients/CartsApiClient.js';

export const test = base.extend({
  productsApi: async ({ request }, use) => {
    await use(new ProductsApiClient(request));
  },

  cartsApi: async ({ request }, use) => {
    await use(new CartsApiClient(request));
  },
});

export { expect };