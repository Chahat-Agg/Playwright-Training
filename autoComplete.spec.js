import {test, expect} from '@playwright/test'

test("auto complete value in dropdown", async ({page})=>{

    const searchValue= "in"
    const selectValue= "China"


    await page.goto("https://demoapps.qspiders.com/ui/dropdown/search?sublist=2")
    
    await page.locator("(//div[@class=' css-1xc3v61-indicatorContainer'])[3]").click()
    await page.keyboard.type('india')

    await page.keyboard.press('Enter')
    /*await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')*/
    await page.waitForTimeout(10000);

})