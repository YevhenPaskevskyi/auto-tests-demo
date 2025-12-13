import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'locked_out_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('.error-message-container')).toBeVisible();
  await expect(page.locator('.error-message-container')).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});