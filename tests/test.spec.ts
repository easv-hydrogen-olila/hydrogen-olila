import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://aesthetic-cocada-7a12ce.netlify.app');

  
  await expect(page).toHaveTitle(/Olila - Olila/);
});

// test('Go to petit piao category', async ({ page }) => {
//   await page.goto('https://aesthetic-cocada-7a12ce.netlify.app');

//   Click the get started link.
//   await page.getByRole('link', { name: 'Petit Piao' }).click()

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*maerker-petit-piao/);
// });

// test('Buy product', async ({ page }) => {
//   await page.goto('https://aesthetic-cocada-7a12ce.netlify.app');
//   await page.getByRole('button', { name: 'Tøj & Sko' }).click();
//   await page.getByRole('list', { name: 'Accessories' }).getByRole('link', { name: 'Hat & Handsker' }).click();
//   await page.getByRole('link', { name: 'Huttelihut Uld Elefanthue Dino D.grey' }).click();
//   await page.getByText('2-4M').click();
//   await page.getByRole('button', { name: 'LÆG I KURV' }).click();
// });


