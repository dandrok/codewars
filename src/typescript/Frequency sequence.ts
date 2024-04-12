/* 
Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freqSeq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freqSeq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freqSeq("^^^**$", "x"); // => "3x3x3x2x2x1"
 */

export const freqSeq = (str: string, sep: string): string => {
  return str
    .split('')
    .map((e) => str.split(e).length - 1)
    .join(sep)
}
