import {test, expect} from '@playwright/test'
test.beforeAll(async()=>{
    console.log('This is before all')
})

test.beforeEach(async()=>{
    console.log('This is before each')
})

test.afterEach(async()=>{
    console.log('This is after each')
})

test.afterAll(async()=>{
    console.log('This is after all')
})

test('First test', async()=>{
    console.log('This is my first test')
})

test('second test', async()=>{
    console.log('This is my second test')
})