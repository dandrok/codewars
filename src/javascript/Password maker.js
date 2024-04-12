/* 
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

    instead of including i or I put the number 1 in the password;
    instead of including o or O put the number 0 in the password;
    instead of including s or S put the number 5 in the password.

Examples:

"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"

 */

const letterToNum = {
  i: 1,
  I: 1,
  o: 0,
  O: 0,
  s: 5,
  S: 5,
}

const replaceLetters = (str) => {
  const joinKeys = new RegExp(Object.keys(letterToNum).join('|'), 'g')
  return str.replace(joinKeys, (match) => letterToNum[match])
}

function makePassword(phrase) {
  return replaceLetters(
    phrase
      .split(' ')
      .map((word) => word.at())
      .join('')
  )
}
