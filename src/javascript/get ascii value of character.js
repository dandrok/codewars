/* 
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
 */

const getASCII = (c) => c.charCodeAt();

// safer version
const getASCII = (c) => {
  const code = c?.charCodeAt(0);
  return code >= 0 && code <= 127 ? code : null;
};
