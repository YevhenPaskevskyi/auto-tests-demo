import { test } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../testData/users';

test.describe('Login with different users', () => {

  const positiveUsers = [
    users.standard,
    users.problem,
    users.performance,
    users.error,
    users.visual,
  ];

  for (const user of positiveUsers) {
    test(`login as ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await allure.step('Open login page', async () => {
        await loginPage.open();
      });

      let inventoryPage;

      await allure.step(`Login as ${user.username}`, async () => {
        inventoryPage = await loginPage.login(
          user.username,
          user.password
        );
      });

      await allure.step('Verify successful login', async () => {
        await inventoryPage.isOpened();
      });
    });
  }
});