/* 
Task
Given an initial string s, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

Input/Output
[input] string s

String of odd length consisting of English letters.

3 ≤ inputString.length ≤ 99.

[output] a string

The resulting string.

Example
For s = "Aba", the output should be "aba"

For s = "ABa", the output should be "ABA"
 */

function caseUnification(s) {
  let check = s.split('').map((a) => a.toUpperCase() === a) // check for true if letter are toUpperCase

  let ind = check.reduce(
    (out, bool, index) => (bool ? out.concat(index) : out),
    []
  ) // give array of index of true (uppercase letters)

  return ind.length > s.length / 2 ? s.toUpperCase() : s.toLowerCase() // check for length of uppercase letter if they more than 50% of string make whole string to uppercase else to lowercase
}
