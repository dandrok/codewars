/* 
Create a function that takes index [0, 8] and a character. It returns a string with columns. Put character in column marked with index.

Ex.: index = 2, character = 'B'

| | |B| | | | | | |
 0 1 2 3 4 5 6 7 8

Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.
*/

function buildRowText(index, character) {
  return "| | | | | | | | | |"
    .split(" ")
    .map((el, i) => {
      if (i === index) {
        return `${el}${character}`;
      } else if (i === 9) {
        return el;
      } else {
        return `${el} `;
      }
    })
    .join("");
}
