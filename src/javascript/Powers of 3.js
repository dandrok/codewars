/* 
Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1

You may assume that the input to your function is always a positive integer.
*/

function largestPower(n) {
  let i = 0;
  while (Math.pow(3, i) < n) {
    i++;
  }
  return i - 1;
}
