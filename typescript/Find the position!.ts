/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
 */

const DIFF_IN_ASCI_TABLE = 96

export const position = (letter: string): string =>
  `Position of alphabet: ${letter.charCodeAt(0) - DIFF_IN_ASCI_TABLE}`
