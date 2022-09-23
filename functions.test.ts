const {shuffleArray, arrCopy} = require('./utils')

describe('shuffleArray should', () => {

    test("check to see if the length is the same after runnig the function", () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        expect(arr.length).toBe(result.length)
    })
    //had to add a new array in order to pass something into the function to test it

    test("return array with same items", () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        let myVar = true

            // expect(result).toEqual(expect.arrayContaining(arr))
            //fancy method



        for(let i=0; i < result.length; i++){
            if(arr.includes(result[i]) === false){
                myVar = false
                return
            }
expect(myVar).toBe(true)
        }
    })
})
//looping over the array with a forloop to see if all the array items are the same



