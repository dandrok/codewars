/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

export const accum = (s: string): string => {
  return s
    .split('')
    .map((el, i) => el.charAt(0).toUpperCase() + el.toLowerCase().repeat(i))
    .join('-')
}

export const accum2 = (s: string): string => {
  return [...s.toLowerCase()]
    .map((l, i) => l.toUpperCase() + l.repeat(i))
    .join('-')
}
