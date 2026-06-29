import { test, expect } from '@playwright/test';

test('Dynamic QA Automated Scan', async ({ page }) => {
  await page.goto('https://tasmeerhaider.github.io/portfolio/');

  // Verify the exact page title
  await expect(page).toHaveTitle('my portfolio');
});
