import {describe, it, expect } from "virest"

describe('testing', () => {
    const testingWord = "aaaBaaa"
    const n = 6
    const x = "B"
    const y = "a"
    
    expect(middleMe(n, x, y)).toBe(testingWord)
    
})