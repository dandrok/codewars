/* 
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
 */

export const evensAndOdds = (n: number): string =>
  n % 2 === 0 ? (n >>> 0).toString(2) : Number(n).toString(16)
