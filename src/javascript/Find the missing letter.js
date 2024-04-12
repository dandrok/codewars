/* 
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
 */

// I was really exhausted ok.. I know this is garbage code, the worst
// but it works and I will finish it later ! (⇀‸↼‶)

function findMissingLetter(array) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  if (/^[A-Z]*$/.test(array[0])) {
    array = array.map((el) => el.toUpperCase())
    let regex = `(?=${array[0]})(.*?)(?<=${array[array.length - 1]})`
    let rg = new RegExp(regex, 'gi')
    const main = String(alphabet.join('').toUpperCase().match(rg)).split('')
    const missingLetter = main.filter((x) => !array.includes(x))
    return missingLetter[0]
  } else {
    let regex = `(?=${array[0]})(.*?)(?<=${array[array.length - 1]})`
    let rg = new RegExp(regex, 'gi')
    const main = String(alphabet.join('').match(rg)).split('')
    const missingLetter = main.filter((x) => !array.includes(x))
    return missingLetter[0]
  }
}
