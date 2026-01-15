import {test, expect} from '@playwright/test'

test("assertions retry", async ({page})=>{
    await page.goto("https://seleniumbase.io/demo_page")
    const checkbox=await page.locator('#checkBox2')
    await checkbox.check()
    await expect(checkbox).toBeChecked()

    const value= await page.locator("//h1[text()='Demo Page']")
    await expect(value).toContainText('Demo')

    const link = await page.locator("#myLink1")
    await expect(link).toHaveAttribute('href', "https://seleniumbase.com")

    const count_links= await page.locator("a")
    await expect(count_links).toHaveCount(7)

    const dropdown= await page.locator("#mySelect")
    await expect(dropdown).toHaveClass('selectClass')
})