// Task
//
// Given a string, return the number of lonely letters it contains.
//
// A letter is lonely when:
//
//     It appears exactly once in the whole string.
//     Its alphabetical neighbors are both absent from the string.
//
// Alphabetical neighbors are the previous and next letters in the alphabet.
//
//     d has alphabetical neighbors c and e.
//     a has only one possible neighbor: b.
//     z has only one possible neighbor: y.
//     The alphabet is not cyclic, so z is not a neighbor of a, and a is not a neighbor of z.
//
// For example:
//
//     d is not lonely if c or e also appears somewhere in the text.
//     m is lonely if m appears once and both l and n are absent.
//
//   Rules
//
//     Ignore letter case.
//     Ignore all non - letter characters.
//     Work only with English letters a - z.
//
//   Examples
//
// Input: "ad" -> Output: 2
// Input: "abc" -> Output: 0
// Input: "Hello, World!" -> Output: 3
// Input: "A-dA" -> Output: 1
// Input: "zz" -> Output: 0
function countLonelyLetters(text) {
  text = text.toLowerCase().match(/[a-z]/ig)
    ?? []

  return text.reduce((acc, curr, i, arr) => {
    const currCharCode =
      curr.charCodeAt(0); const arrOfCharCodes = arr.map(el => el.charCodeAt(0))
    const reg = new RegExp(curr, 'g')

    if (text.join('').match(reg).length === 1 &&
      !arrOfCharCodes.includes(currCharCode + 1) &&
      !arrOfCharCodes.includes(currCharCode - 1)) { acc++ }

    return acc
  }, 0)
}
