/* 
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
 */

function factorial(n) {
  let arr = [...Array(n + 1).keys()]
  let remLast = arr.shift()
  return arr.reduce((a, b) => a * b, 1)
}
