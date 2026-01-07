import {test, expect} from '@playwright/test'

test('locators filters', async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button',{name:'Login'}).click();
await page.getByRole('listitem').filter({hasText:'Leave'}).click();
await page.waitForTimeout(5000);




});