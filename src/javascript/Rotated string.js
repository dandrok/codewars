/* 
Write to function that takes as argument two strings and returns positive (True/true/1) if one string is a rotation of the other or else it returns False/false/0.

For example:

// ohell is left rotation of hello
isRotation('hello','ohell') => true

// elloh is right rotation of hello 
isRotation('hello','elloh') => true

// elolh is NOT a rotation of hello 
isRotation('hello','elolh') => false
*/

function isRotation(s1, s2) {
  let word = "";
  let newWord = "";
  for (let i = 0, j = 1; i < s1.length; i++, j++) {
    const letter = s1[i];
    const slicedWord = s1.slice(j);
    newWord += letter;
    word = `${slicedWord}${newWord}`;

    if (s2 === word) {
      break;
    }
  }
  return word === s2;
}
