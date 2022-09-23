
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

    //this only checks if the choices div exists and we couldnt figure out the proper way to make sure that it is not empty

})

test('Selecting a bot displays in our new div', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(300)
    await driver.findElement(By.xpath('(//*[text()="Add to Duo"])[1]')).click()

    const playerDuoDiv = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuoDiv.isDisplayed()

    expect(displayed).toBe(true)

})






// test('Lost/Win message shows', async () => {
//     const duelButton = await driver.findElement(By.id('duel'))


//     await duelButton.click()

//     const results = await driver.findElement(By.id('results'))

//     expect(results).toBeTruthy()

//     await driver.sleep(5000)


//dooesnt work

// })
    


