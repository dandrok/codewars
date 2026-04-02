//Create a function in TS that takes sstring of words and returns the longest one formatted withitscharacter count.

//Rules:

//    Validation: The input must not be empty or consist only of whitespaces. If it is, throw an error.
//    The Winner: If there is a clear longest word, return it in the format: Word: X chars (same for single word).
//    The Tie: If there is a tie between the two longest words (they have the same length), return the string: no longest word found.

//Examples:

//    "JavaScript is awesome" > "JavaScript: 10 chars"
//    "Hello world" > "no longest word found"
//    "Coding" > "Coding: 6 chars"
//    "" || "  " > Throw an Error


export const formatResult = (word: string): string => `${word}: ${word.length} chars`


/**
 * @param input - Must be a non-empty string.
 * @throws Error if input is empty.
 */
export const findTheLongestWord = (input: string): string => {
  if (!input.trim()) throw new Error('[findTheLongestWord] "input" param should contain at least one alphabet character')
  const words = input.split(' ')
  const [firstWord] = words

  if (words.length === 1) {
    return formatResult(firstWord)
  }

  const sorted = words.sort((a, b) => b.length - a.length)

  const [longest, secondWord] = sorted

  if (secondWord.length === longest.length) {
    return 'no longest word found'
  }

  return formatResult(longest)
};

