import {test, expect} from '@playwright/test'

test ('handling select dropdown', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator("//input[@id='login-button']").click();
    await page.locator("//select[@class='product_sort_container']").selectOption('Price (low to high)');
    await page.locator("//select[@class='product_sort_container']").selectOption({index:1});

    await page.waitForTimeout(5000);

})