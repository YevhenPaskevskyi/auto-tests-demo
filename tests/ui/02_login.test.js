import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('successful login', async ({ page }) => {
  await allure.step('Open login page', async () => {
    await page.goto('/');
  });

  await allure.step('Enter credentials', async () => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
  });

  await allure.step('Click login', async () => {
    await page.click('#login-button');
  });

  await allure.step('Verify successful login', async () => {
    await expect(page).toHaveURL(/inventory/);
  });
});
