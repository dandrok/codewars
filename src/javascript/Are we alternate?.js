/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true

Arguments consist of only lowercase letters.
 */
const isVowel = (letter) => /[aeiou]/.test(letter)

function isAlt(word) {
  let result = []
  for (let i = 0; i < word.length; i++) {
    if (isVowel(word[0])) {
      i % 2 === 0
        ? result.push(isVowel(word[i]))
        : result.push(!isVowel(word[i]))
    } else {
      i % 2 !== 0
        ? result.push(isVowel(word[i]))
        : result.push(!isVowel(word[i]))
    }
  }
  return result.every(Boolean)
}
