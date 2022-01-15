/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */

export const findShort = (s: string): number =>
  Math.min(...s.split(' ').map((a) => a.length))
