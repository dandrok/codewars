/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
 */
function moreZeros(s) {
  const uniqueLetters = [...new Set([...s])]
  const letterToBinary = uniqueLetters.map((letter) =>
    letter.charCodeAt(0).toString(2)
  )
  const valuesWithMoreZeros = letterToBinary.filter((el) => {
    const zero = [...String(el)].filter((num) => num === '0').length
    const one = [...String(el)].filter((num) => num === '1').length
    //     console.log(zero, one)
    return zero > one
  })
  return valuesWithMoreZeros.map((el) => String.fromCharCode(parseInt(el, 2)))
}
