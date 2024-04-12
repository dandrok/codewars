/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */

export const positiveSum = (arr: number[]): number =>
  arr.reduce((p, c) => (c > 0 ? p + c : p), 0)

//OR

export const positiveSum2 = (arr: number[]): number =>
  arr.filter((a) => a > 0).reduce((a, b) => a + b, 0)
