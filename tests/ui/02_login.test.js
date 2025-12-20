import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('successful login', async ({ page }) => {
  await allure.step('Open login page', async () => {
    await page.goto('/');
  });

  await allure.step('Enter credentials', async () => {
    await page.fill('#user-name', 'standard_user1');
    await page.fill('#password', 'secret_sauce');
  });

  await allure.step('Click login', async () => {
    await page.click('#login-button');
  });

  await allure.step('Verify successful login', async () => {
    await expect(page).toHaveURL(/inventory/);
  });
});
