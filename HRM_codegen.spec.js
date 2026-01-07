import {test,expect} from '@playwright/test';

test('HRM Codegen',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', { name: 'Username' }).fill('chahat');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('8199904801');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert').click();
  await page.getByRole('alert').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Required').first().click();
  await page.getByText('Required').nth(1).click();

})