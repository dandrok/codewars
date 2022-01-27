/* 
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
 */

export const isSortedAndHow = (array: number[]): string =>
  String([...array].sort((a, b) => a - b)) === String(array)
    ? 'yes, ascending'
    : String([...array].sort((a, b) => b - a)) === String(array)
    ? 'yes, descending'
    : 'no'
