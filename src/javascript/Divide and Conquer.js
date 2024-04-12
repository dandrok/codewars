/* 
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
 */

const checkArr = (type, arr) =>
  arr.filter((el) => typeof el === type).reduce((a, b) => +a + +b, 0)

const divCon = (x) => checkArr('number', x) - checkArr('string', x)
