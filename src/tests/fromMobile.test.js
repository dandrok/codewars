import {describe, it, expect} from "vitest"

describe("middleMe test", () => {
   it("should be true", () => {
      // middleMe(N, X, Y)
      // N num 
      // X middle 
      // Y letter to repeat 
    const letterToRepeat = "a"
    const num = 6
    const middleLetter = "B"
    expect(middleMe(num, letterToRepeat, middle)).toBe("aaaBaaa")
   })
   //it("should be false", () => {
    //const testedWord = "aaaBaaa"
    //expect(middleMe(testedWord)).toBeTruthy()
   //}) 
})