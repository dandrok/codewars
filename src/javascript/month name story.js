/* 
Write a simple function, that will be given a month name and a month number. The function will convert the name of the month to a number (zero based) and the number of the month will be converted back to a month name.

**Do not use if else or switch.

**The number and the name will be spaced with one space - " " for example

         "January", 0 > "January 0"
         
         "December", 5 > "June 11"

enjoy ! ^-^
*/

const months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

function month(name, number) {
  const getName = Object.keys(months)[number]
  const getNumber = months[name]
  return `${getName} ${getNumber}`
}
