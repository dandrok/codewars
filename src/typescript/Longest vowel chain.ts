/* 
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
 */

export const solve = (s: string) => {
  return s
    .split(/[^aoeiu]/i)
    .map((v) => v.length)
    .sort((a, b) => b - a)[0]
}

export const solve2 = (s: string) => {
  return Math.max(...s.split(/[^aiueo]/).map((x) => x.length))
}
