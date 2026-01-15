import {test, expect} from '@playwright/test'

test("verify title", async ({page})=>{
    test.fail();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const title=await page.title();
    expect(title).toBe('OrangeHRM')
})

test("verify URL", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const current_URL=await page.url();
    expect(current_URL).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

test("verify login button", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const button=await page.locator("//button[@type='submit']")
    const button_text=await button.textContent()
    expect(button_text).toBe(' Login ')
})