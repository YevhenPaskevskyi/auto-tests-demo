import { test, expect } from '@playwright/test';

test('problem_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'problem_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Get the first inventory item image
  const img = page.locator('img.inventory_item_img').first();

  // Verify image is visible
  await expect(img).toBeVisible();

  // Verify the correct src attribute
  await expect(img).toHaveAttribute('src', '/static/media/sl-404.168b1cce10384b857a6f.jpg');

  // Verify that the image actually loaded (naturalWidth > 0 indicates successful load)
  const naturalWidth = await img.evaluate(el => el.naturalWidth);
  await expect(naturalWidth).toBeGreaterThan(0);
  
});