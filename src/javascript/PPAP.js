/*
PPAP

Take two arrays consisting of two strings in each array and combine them into one hyphen seperated string.
The first character of each word should be capitalized, no matter the input case.
The word common to both arrays should appear as the first and last words in the new string.

Finally, the order of the final string should be the non-common word in the second array as the second word, and the non-common word in the first array as the 3rd word.
 */

const onlyFIrstLetterBig = (word) => {
  word = word.toLowerCase()
  const firstLetter = word.charAt(0).toUpperCase()
  const subStrFirstLetter = word.substring(1)
  return firstLetter + subStrFirstLetter
}

function ppap(arr1, arr2) {
  const firstPart = arr2.map((word) => onlyFIrstLetterBig(word))
  const secondPart = arr1.map((word) => onlyFIrstLetterBig(word))
  const commonWord = firstPart.find((item) => secondPart.includes(item))
  if (firstPart[0] !== commonWord) {
    firstPart.reverse()
  }

  if (secondPart[0] === commonWord) {
    secondPart.reverse()
  }

  return [...firstPart, ...secondPart].join('-')
}
