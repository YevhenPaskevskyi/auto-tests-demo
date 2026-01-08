import { test as base, expect } from '@playwright/test';
import { ProductsApiClient } from '../api/clients/ProductsApiClient.js'; 

export const test = base.extend({
  productsApi: async ({ request }, use) => {
    const api = new ProductsApiClient(request);
    await use(api);
  },
});

export { expect };