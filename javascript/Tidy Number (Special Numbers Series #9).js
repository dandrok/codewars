/* 
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
 */

const tidyNumber = (n) => +[...String(n)].sort().join('') == n
