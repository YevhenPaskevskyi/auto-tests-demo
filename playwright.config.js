import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.(js|ts|jsx|tsx)/,
  use: {
    headless: false,   // <-- браузер будет видимым
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    navigationTimeout: 20000,
  },
});
