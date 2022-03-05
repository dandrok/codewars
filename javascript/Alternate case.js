/* 
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
 */

const alternateCase = (s) =>
  [...s]
    .map((letter) =>
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join('')
