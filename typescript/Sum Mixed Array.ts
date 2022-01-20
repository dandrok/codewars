/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
 */

export const sumMix = (x: any[]): number => x.reduce((a, b) => a + Number(b), 0)
