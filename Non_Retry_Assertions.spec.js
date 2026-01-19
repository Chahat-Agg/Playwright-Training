import {test, expect} from '@playwright/test'
test(" non-retry assertions", async({page})=>{
    await page.goto("https://seleniumbase.io/demo_page")
    const title= await page.title()
    expect(title).toBe("Web Testing Page")
    const page_URL= await page.url()
    expect(page_URL).toContain("demo_page")
    const AllCheckboxes= await page.locator("//input[@type='checkbox']").count()
    expect(AllCheckboxes).toBeGreaterThan(0)
    const elementLength=await page.locator("//h1[text()='Demo Page']").textContent()
    expect(elementLength).toHaveLength(9)

    
})