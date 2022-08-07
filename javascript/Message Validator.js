/* 
For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi
and the function should return true, because "hey" is 3 characters,
"hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring,
otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
 */

function isAValidMessage(message) {
  const words = message
    .split(/\d/)
    .map((el) => el.length > 0 && el.length)
    .filter(Number)
    .join('')
  const numbers = [...message]
    .map((el) => parseInt(el))
    .filter(Number)
    .join('')
  if (!isNaN([...message][0])) return words == numbers
  if (message.length == 0) return true
  return false
}
