/*
Example

for word: w?rld and possible characters ['eoi'] we can get:
['werld', 'world','wirld']

for word: t?p? and possible characters ["oa", "ei"] we can get:
['tope', 'topi','tape', 'tapi']

Function type
As input you receive parameters:
word: non-empty string with question marks (or possibly without question marks). Each question mark represents characters we want to guess. For each ? will be provided a string of possible chars in the chars array.
chars: array of non-empty strings. It is an array of possible characters for each question mark. Each item (string) of the chars array corresponds to the ? in word. If word does not contain ? an empty array of chars will be provided. All inputs will be valid.

Function should return an array of all possible words. No sorting is needed.
Good luck!
*/

// ugly draft:

const getWords = (word, chars) => {
  if (!chars.length) return [word]

  const firstPart = [...chars[0]]
    .map((l) => word.replace('?', l))
    .map((el, i) => el.replace('?', chars[1][i]))
  const secondPart = [...chars[0]]
    .map((l) => word.replace('?', l))
    .reverse()
    .map((el, i) => el.replace('?', chars[1][i]))
  if (chars.length === 1) return firstPart

  return [...secondPart, ...firstPart]
}
