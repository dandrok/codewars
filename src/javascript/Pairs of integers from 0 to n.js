/* 
Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

0 <= a <= b <= n

The pairs should be sorted by increasing values of a then increasing values of b.

For example,

generatePairs(2) should return
[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
*/

function generatePairs(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j < i) {
        j = i;
      }
      result.push([i, j]);
    }
  }
  return result;
}
