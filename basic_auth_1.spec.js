//https://practicetestautomation.com/logged-in-successfully/

import {test, expect} from '@playwright/test'
test('basic auth practice', async({page})=>{
    const username='student'
    const password='Password123'

    const base64creds= Buffer.from(`${username}:${password}`).toString("base64")

    await page.route('**', (route)=>{
        const headers={
            authentication: `Basic ${base64creds}`
        }
        route.continue({headers})
    })
    await page.goto("https://practicetestautomation.com/logged-in-successfully/")
    await page.waitForTimeout(5000)
})