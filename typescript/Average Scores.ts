/* 
Create a function that returns the average of an array of numbers ("scores"),
rounded to the nearest whole number.
You are not allowed to use any loops (including for, for/in, while, and do/while loops).
 */

export const average = (scores: number[]): number =>
  Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
