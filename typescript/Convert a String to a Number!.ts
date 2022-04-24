/* 
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
 */

export const stringToNumber = (str: string): number => Number(str)
export const stringToNumber1 = (str: string): number => parseInt(str)
export const stringToNumber2 = (str: string): number => parseFloat(str)
export const stringToNumber3 = (str: string): number => +str
