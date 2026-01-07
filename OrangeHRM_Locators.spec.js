import {test, expect} from '@playwright/test';

test('Playwright Locators', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin@123');
    await page.getByRole('button', {name:'Login'}).click();
    page.getByText('Invalid credentials').isVisible;
    await page.waitForTimeout(5000);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await page.waitForTimeout(5000);
    page.getByText('manda user').click();
    await page.waitForTimeout(5000);



})