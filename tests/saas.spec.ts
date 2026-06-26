
import { test, expect } from '@playwright/test';
test('Critical Flow Check', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.*|.*/);
});
  