/* 
Description:

Count the number of exclamation marks and question marks, return the product.
Examples

""          --->   0
"!"         --->   0
"!ab? ?"    --->   2
"!!"        --->   0
"!??"       --->   2
"!???"      --->   3
"!!!??"     --->   6
"!!!???"    --->   9
"!???!!"    --->   9
"!????!!!?" --->  20
 */

const symbolLenght = (str, symbol) =>
  [...str].filter((el) => el === symbol).length || 0

const product = (string) =>
  symbolLenght(string, '!') * symbolLenght(string, '?')
