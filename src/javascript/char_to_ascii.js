/* 
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/

function charToAscii(string) {
  const arrOfLetters = string.match(/[a-z]/gi);
  if (!string.length || !arrOfLetters.length) return null;
  const arrOfUniqueLetters = [...new Set(arrOfLetters)] || [];
  return (
    arrOfUniqueLetters.reduce((acc, curr) => {
      acc[curr] = curr.charCodeAt(0);
      return acc;
    }, {}) || null
  );
}
