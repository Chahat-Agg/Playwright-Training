import {test, expect} from '@playwright/test'

test("auto complete value in dropdown", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    
})