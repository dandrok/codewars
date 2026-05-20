// Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.
//
// All column titles will be uppercase.
//
// Examples:
//
// Column title: "A" --> return 1
// Column title: "Z" --> return 26
// Column title: "AA" --> return 27


// v1
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const maxChar = 26

function titleToNumber(title) {
  return title.split('').reverse().reduce((acc, curr, i) => {
    const multiply = alphabet.indexOf(curr) + 1
    if (i > 0) {
      acc += Math.pow(maxChar, i) * multiply
    } else {
      acc += multiply
    }
    return acc
  }, 0)
}


// v2
const maxChar = 26

function titleToNumber(title) {
  const reversed = title.split('').reverse()

  return reversed.reduce((acc, curr, i) => {
    const multiply = curr.charCodeAt(0) - 64
    if (i > 0) {
      acc += Math.pow(maxChar, i) * multiply
    } else {
      acc += multiply
    }
    return acc
  }, 0)
}


// v3
function titleToNumber(title) {
  let solution = 0;

  for (let i = 0; i < title.length; i++) {
    solution += Math.pow(26, title.length - 1 - i) * (title[i].charCodeAt(0) - 64)
  }

  return solution
}
