import {test, expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto("https://www.google.com/")

})

test.afterEach(async({page})=>{
    await page.close()
    
})

test('Verify title of page',async({page})=>{
    const title= await page.title()
    console.log(title)
    await expect(title).toBe("Google")
    
})

test('Verify URL of page',async({page})=>{
    const current_URL= await page.url()
    console.log(current_URL)
    await expect(current_URL).toBe("https://www.google.com/")
    
})