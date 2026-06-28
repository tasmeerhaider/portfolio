import { test, expect } from '@playwright/test';

test('Dynamic QA Automated Scan', async ({ page }) => {
  // Catch any JavaScript console errors
  page.on('pageerror', exception => { throw new Error(`Console Error Found: ${exception}`); });

  await page.goto('https://tasmeerhaider.github.io/portfolio/');

  // Verify the exact page title
  await expect(page).toHaveTitle('Homepage');
});
