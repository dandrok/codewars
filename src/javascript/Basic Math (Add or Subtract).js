/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.
Examples

"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
 */

/*
Warning:
Executing JavaScript from a string is an enormous security risk.
It is far too easy for a bad actor to run arbitrary code when you use eval().
*/

function calculate(str) {
  str = str.replaceAll('plus', '+').replaceAll('minus', '-')
  return eval(str).toString()
}
