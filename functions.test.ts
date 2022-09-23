const {shuffleArray, arrCopy} = require('./utils')

describe('shuffleArray should', () => {

    test("returns Array", () => {
        expect(shuffleArray([1,2])).toBe([arrCopy])
    })

    test("same length", () => {
    expect(shuffleArray(shuffleArray.array.length === arrCopy.length)).toBe(true)
    })

//yikes..


})