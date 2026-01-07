import {test, expect} from '@playwright/test';

test('xpath and css locators',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("//input[@name='username']").fill('Admin')
await page.locator("//input[@name='password']").fill('admin123')
await page.locator("//button[@type='submit']").click();

await page.locator("(//img[@alt='profile picture'])[1]").click();
await page.locator("//a[text()='Logout']").click();
await page.waitForTimeout(5000);
})