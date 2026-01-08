import {test, expect} from '@playwright/test'

test("radio button", async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("//input[@value='Male']/parent::div").click();

    await page.locator("//label[@for='gender-radio-2']").check();
    await page.waitForTimeout(5000);
})