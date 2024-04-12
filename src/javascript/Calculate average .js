/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */
function findAverage(array) {
  if (!array.length) return 0
  return array.reduce((a, b) => a + b, 0) / array.length
}
