import {test, expect} from '@playwright/test'
test("find broken images", async({page})=>{
    // navigate to the web page
    await page.goto("https://the-internet.herokuapp.com/broken_images")
    
    // Enable network interception
    await page.route ('**/*', (route)=>{

        route.continue().catch(()=>{})

})

    // Use page.evaluate to identify the images and count broken image
    const brokenImages = await page.evaluate(async()=>{
        const images = Array.from(document.querySelectorAll('img'))
        const brokenImageList=[]

        for (const image of images){
            const response = await fetch(image.src,{method:'HEAD'}).catch(()=>null)
            if(!response || response.status !=200){
                brokenImageList.push(image.src)
            }
        }
        return brokenImageList;
    })
    // Print broken iimages
    console.log(`Total Broken Images: ${brokenImages.length}`)
    console.log("broken images names: ")
    for (const src of brokenImages){
        console.log(src)
    }
})
