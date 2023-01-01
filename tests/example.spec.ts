import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://aesthetic-cocada-7a12ce.netlify.app');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Olila - Olila/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Petit Piao' }).click()

//   // // Expects the URL to contain intro.
//   // await expect(page).toHaveURL(/.*maerker-petit-piao/);
// });

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:3000/');
//   await page.getByRole('button', { name: 'Tøj & Sko' }).click();
//   await page.getByRole('list', { name: 'Accessories' }).getByRole('link', { name: 'Hat & Handsker' }).click();
//   await page.getByRole('link', { name: 'Huttelihut Uld Elefanthue Dino D.grey' }).click();
//   await page.getByText('2-4M').click();
//   await page.getByRole('button', { name: 'LÆG I KURV' }).click();
// });


