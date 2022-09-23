
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw Button works', async () =>{
    const drawButon = await driver.findElement(By.id('draw'))
  

    await drawButon.click()

    const choices = await driver.findElement(By.id('choices'))

    expect(choices).toBeTruthy()

})

test('Lost/Win message shows', async () => {
    const duelButton = await driver.findElement(By.id('duel'))


    await duelButton.click()

    const results = await driver.findElement(By.id('results'))

    expect(results).toBeTruthy()

    await driver.sleep(5000)




})
    


