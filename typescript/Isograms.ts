/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

export const isIsogram = (str: string): boolean =>
  str.length === new Set(str.toLowerCase()).size

export function isIsogram2(str: string): boolean {
  str = str.toLowerCase()
  return [...new Set(str)].length == str.length
}
