/* 
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
 */

export const reverseSeq = (n: number): number[] =>
  new Array(n).fill(0).map((el, i) => n - i)

export const reverseSeq1 = (n: number): number[] =>
  new Array(n)
    .fill(0)
    .map((el, i) => i + 1)
    .reverse()
