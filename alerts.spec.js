import {test, expect} from '@playwright/test'

test("simple alert", async({page})=>{
    await page.goto("https://demoqa.com/alerts")
    
    await page.on("dialog", async(a)=>{
        console.log(await a.message())
        await a.accept()
    })
    await page.locator("//button[@id='alertButton']").click()
    await page.waitForTimeout(10000)

})

test("confirm alert", async({page})=>{
    await page.goto("https://demoqa.com/alerts")
    
    await page.on("dialog", async(b)=>{
        console.log("Message is: "+b.message())
        await b.dismiss()
    })
    await page.locator("//button[@id='confirmButton']").click()
    await page.waitForTimeout(10000)

})

test("prompt alert", async({page})=>{
    await page.goto("https://demoqa.com/alerts")
    await page.on("dialog", async(c)=>{
        console.log(c.message())
        await c.accept("Chahat Aggarwal")
        expect(c.type()).toContain("confirm")
    })
    await page.locator("//button[@id='promtButton']").click()
    await page.waitForTimeout(5000)
})