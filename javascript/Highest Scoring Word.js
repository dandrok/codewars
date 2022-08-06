/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

const high = (x) => {
  const stringToArr = x.split(' ')
  const scoreArr = stringToArr.map((el) =>
    [...el].reduce((prevV, currV) => prevV + currV.charCodeAt() - 96, 0)
  )
  const maxScore = Math.max(...scoreArr)
  const indexOfMax = scoreArr.indexOf(maxScore)
  return stringToArr[indexOfMax]
}
