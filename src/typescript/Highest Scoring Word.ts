/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

export const high = (str: string): string => {
  let wordsValues = str
    .split(' ')
    .map((a) => [...a].map((b) => b.charCodeAt(0) - 96).reduce((z, y) => z + y))
  let maxValue = Math.max(...wordsValues)
  let indexOfWord = wordsValues.indexOf(maxValue)
  return str.split(' ')[indexOfWord]
}
