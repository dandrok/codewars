/* 
Given an integer n and two other values,
build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
 */

const alternate = (n, firstValue, secondValue) => {
  const solution = Array(Math.ceil(n / 2))
    .fill([firstValue, secondValue])
    .flat()
  return n === solution.length
    ? solution
    : solution.slice(0, solution.length - 1)
}
