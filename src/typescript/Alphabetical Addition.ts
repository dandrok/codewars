/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.
Notes:

    Letters will always be lowercase.
    Letters can overflow (see second to last example of the description)
    If no letters are given, the function should return 'z'

Examples:

addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'

Confused? Roll your mouse/tap over here
*/

const RESET_ALPHABET = 26

export function addLetters(...letters: string[]) {
  if (!letters.length) return 'z'

  const sumOfLetters =
    [...letters].reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0) + 96
  if (sumOfLetters > 122) {
    let num = sumOfLetters
    let count = 0

    while (num > 122) {
      num--
      count++
    }

    return String.fromCharCode(
      sumOfLetters - Math.ceil(count / RESET_ALPHABET) * RESET_ALPHABET
    )
  }
  return String.fromCharCode(sumOfLetters)
}

// OR

export function addLetters_2(...letters: string[]) {
  const sumOfLetters =
    [...letters].reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0) %
    RESET_ALPHABET
  return sumOfLetters === 0 ? 'z' : String.fromCharCode(sumOfLetters + 96)
}
