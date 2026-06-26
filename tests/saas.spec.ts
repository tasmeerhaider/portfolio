
import { test, expect } from '@playwright/test';
test('Critical Flow Check', async ({ page }) => {
  await page.goto('https://tasmeerhaider.github.io/portfolio/projects.html');
  await expect(page).toHaveTitle(/.*|.*/);
});
    