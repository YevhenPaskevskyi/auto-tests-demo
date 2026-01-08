import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [['list'], ['allure-playwright']],

  projects: [
    {
      name: 'ui',
      testMatch: 'ui/**/*.test.js',
      use: {
        headless: true,//!!process.env.CI,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        baseURL: 'https://www.saucedemo.com',
      },
    },
    {
      name: 'api',
      testMatch: 'api/specs/**/*.spec.js',
      use: {
        baseURL: 'https://fakestoreapi.com',
      },
    },
  ],
});