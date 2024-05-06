import {describe, it, expect } from "virest"

describe('testing', () => {
    
    it("should be true", () => {
        const testingWord = "aaaBaaa"
        const n = 6
        const x = "B"
        const y = "a"
    
        expect(middleMe(n, x, y)).toBe(testingWord)
    })
    
    it("should be x", () => {
        const n = 7
        const x = "B"
        const y = "a"
        
        expect(middleMe(n, x, y)).toBe(x)
    })
})