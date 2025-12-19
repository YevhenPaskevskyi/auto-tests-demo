import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  use: {
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://www.saucedemo.com',
  },

  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
});
