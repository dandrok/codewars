/* 
Task

Compare two integers given as strings. 'less' if integer a < integer b, 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where integer x is equal to integer represented by the string x.
Input/Output

[input] string a

A string representing a positive integer without leading zeroes.

1 ≤ a.length ≤ 50

[input] string b

A string representing a positive integer without leading zeroes.

1 ≤ b.length ≤ 50

[output] a string

'less' if integer a < integer b, 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where integer x is equal to integer represented by the string x.
Example

For a = "12" and b = "13", the output should be "less";

For a = "875" and b = "799", the output should be "greater";

For a = "1000" and b = "1000", the output should be "equal".
*/

function compareIntegers(a, b) {
  const numA = BigInt(a);
  const numB = BigInt(b);

  return numA > numB ? "greater" : numA < numB ? "less" : "equal";
}
