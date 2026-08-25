// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
//
// Given an integer n, return true if n is an ugly number.
//
//
//
// Example 1:
//
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
//
// Example 2:
//
// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors.
//
// Example 3:
//
// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
//
//
//
// Constraints:
//
//     -231 <= n <= 231 - 1

function isUgly(n: number): boolean {
  if (n <= 0) return false;
  if (n  === 1) return true; 
  
  const primes = [2, 3, 5];
  for (let i = 0; i < primes.length; i++) {
    while (n % primes[i] === 0) {
      n = n / primes[i];
      if (n === 1) return true;
    }
  }
  return false;
}
// time compelxity is equal O(log n)
// the for loop time complexity is equal to O(1) 
// becouse we have set of three values in the array
// and the while loop time complexity is O(log n),
// becouse we divide our value by 2 | 3 | 5
// so it is way faster than regular O(n)
// ---
// space complexity is pretty quick O(1)
// becouse we simply set new n in place so
// we dont do any expensive operations
// simply we ovverrite one value in place.
