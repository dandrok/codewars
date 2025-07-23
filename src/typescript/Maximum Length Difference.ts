/* 
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

export const mxdiflg = (a1: string[], a2: string[]): number => {
  if (!a1.length || !a2.length) {
    return -1;
  }

  const a1Num = a1.map((str: string) => str.length);
  const a2Num = a2.map((str: string) => str.length);

  const max1 = Math.max(...a1Num);
  const min1 = Math.min(...a1Num);
  const max2 = Math.max(...a2Num);
  const min2 = Math.min(...a2Num);

  return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));
};
