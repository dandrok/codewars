/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
 */

export const capitalize = (s: string) => {
  return [
    [...s]
      .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()))
      .join(''),
    [...s]
      .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l.toLowerCase()))
      .join(''),
  ]
}
