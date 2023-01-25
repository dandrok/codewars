/*
Truncate the given string (first argument) if it is longer than the given maximum length (second argument).
Return the truncated string with a "..." ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in determining the truncated string.

Examples

('codewars', 9)  ==>  'codewars'
('codewars', 7)  ==>  'code...'
('codewars', 2)  ==>  'co...'
 */
const truncateString = (str, num) => {
  if (str.length <= num) return str
  return str.substring(0, num > 3 ? num - 3 : num) + '...'
}

// function truncateString(str, num) {
//   if (str.length <= num) return `${str.substring(0, num)}`
//   if (num <= 3) return `${str.substring(0, num)}...`
//   if (num >= str.length) return str
//   if (num > 3) return `${str.substring(0, num - 3)}...`
// }
