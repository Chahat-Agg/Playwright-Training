import {test, expect} from '@playwright/test'
test("single file upload", async({page})=> {
    await page.goto("https://demoapps.qspiders.com/ui/fileUpload?sublist=0")
    await page.locator("//input[@id='resume']").setInputFiles("/Users/caggarwal/Downloads/images.jpeg")
    await page.waitForTimeout(5000)

})

test("multiple file upload", async({page})=> {
    await page.goto("https://demoapps.qspiders.com/ui/fileUpload/multiple?sublist=3")
    await page.locator("//input[@id='fileInput']").setInputFiles(["/Users/caggarwal/Downloads/image2.jpeg","/Users/caggarwal/Downloads/images.jpeg"])
    await page.waitForTimeout(5000)

})


//div[text()='Upload File']

test("handle upload button", async({page})=> {
    await page.goto("https://easyupload.io/")
    const filechooserpromise= page.waitForEvent('filechooser')
    await page.locator("//span[@class='dz-button']").click()
    const filechooser=await filechooserpromise;
    await filechooser.setFiles("/Users/caggarwal/Downloads/image2.jpeg")

    await page.waitForTimeout(100000)

})

