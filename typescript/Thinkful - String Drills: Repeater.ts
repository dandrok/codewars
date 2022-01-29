/* 
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"
 */

export const repeater = (str: string, n: number): string => str.repeat(n)
