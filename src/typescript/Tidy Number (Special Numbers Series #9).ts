/* 
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
 */

export const tidyNumber = (num: number) =>
  num == +[...String(num)].sort((a, b) => +a - +b).join('')
