// Write a function that, given a column title as it appears in an Excel sheet, returns its corresponding column number.
//
// All column titles will be uppercase.
//
// Examples:
//
// Column title: "A" --> return 1
// Column title: "Z" --> return 26
// Column title: "AA" --> return 27

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const maxChar = 26

// TODO: update solution to match codewars 
function titleToNumber(title) {
  return [...title].reverse().reduce((acc, curr, i) => {
    const multiply = alphabet.indexOf(curr) + 1

    if (i > 0) {
      acc += multiply * maxChar * i
    } else {
      acc += multiply
    }
    console.log(acc)
    return acc
  }, 0)
}
