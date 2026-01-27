import {test, expect} from '@playwright/test'
test.skip("basic authentication", async({page})=>{
    await page.goto("https://@basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
    const text= await page.locator("//p[contains(text(),'cong')]").textContent()
    expect(text).toContain("congratulations with valid credentials")
    await page.waitForTimeout(5000)

})

test("basic authentication tech", async({page})=>{
// Define basic auth credentials
    const username="admin"
    const password="admin"

// encode the creds as base 64 string

    const base64Creds=Buffer.from(`${username}:${password}`).toString('base64')

// Setup the request intercept to handle the basic auth

    await page.route('**/*', (route)=>{
        const headers={
            'Authorization' : `Basic ${base64Creds}`,
        }
        route.continue({headers})
    })

    await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
    const text= await page.locator("//p[contains(text(),'cong')]").textContent()
    expect(text).toContain("congratulations with valid credentials")
    await page.waitForTimeout(5000)

})