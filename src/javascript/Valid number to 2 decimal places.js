/* 
Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.

Please check the criteria for a valid number:

optional + or - symbol in front

optional digits before a decimal point (digits are characters ranging from '0' to '9')

a decimal point

exactly two digits after the point

nothing else

*/
const validNumber = (num) => /^[+-]?\d*\.([0-9]{2})$/.test(num);
