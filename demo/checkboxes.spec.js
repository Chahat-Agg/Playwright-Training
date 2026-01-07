import {test, expect} from '@playwright/test'

test ("handling checkboxes", async({page})=>{
await page.goto("https://demoqa.com/automation-practice-form");
await page.locator("//label[@for='hobbies-checkbox-1']").check();
 
await page.locator("//label[@for='hobbies-checkbox-3']").check();
 
await page.locator("//label[@for='hobbies-checkbox-1']").uncheck();
await page.waitForTimeout(5000);

})
