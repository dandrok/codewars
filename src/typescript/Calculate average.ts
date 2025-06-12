/* 
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.
*/

export function findAverage(array: number[]): number {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum / array.length || 0;
}
