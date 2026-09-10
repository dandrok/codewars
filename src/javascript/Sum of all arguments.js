/* 
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
 */

const sum = (...b) => [...b].reduce((a, b) => a + b, 0);

// removed redundant spread
const sum = (...b) => b.reduce((acc, curr) => a + b, 0);
