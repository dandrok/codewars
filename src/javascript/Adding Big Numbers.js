/* 
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers.
The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
 */

function add(a, b) {
  // Convert the input strings to arrays of digits
  let digitsA = [...a].map(Number)
  let digitsB = [...b].map(Number)

  // Pad the shorter of the two input numbers with leading zeros
  while (digitsA.length < digitsB.length) digitsA.unshift(0)
  while (digitsB.length < digitsA.length) digitsB.unshift(0)

  // Calculate the sum by iterating through the digits and keeping track of the carry
  let result = ''
  let carry = 0
  for (let i = digitsA.length - 1; i >= 0; i--) {
    let sum = digitsA[i] + digitsB[i] + carry
    result = (sum % 10) + result
    carry = Math.floor(sum / 10)
  }
  if (carry > 0) result = carry + result

  // Return the result as a string
  return result
}
