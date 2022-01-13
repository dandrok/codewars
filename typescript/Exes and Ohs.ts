/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

export const xo = (str: string): boolean => {
  str = str.toLowerCase()
  let o = (str.match(/o/g) || []).length
  let x = str.split('x').length - 1
  return o === x
}
