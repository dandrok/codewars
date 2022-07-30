/* 
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
 */

const getSumOfDigits = (integer) =>
  String(integer)
    .split('')
    .reduce((a, b) => +a + +b, 0)
