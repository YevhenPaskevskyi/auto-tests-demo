// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
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
    ['html', { open: 'never' }],
  ],
});
