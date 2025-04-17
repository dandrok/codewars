/* 
Egg Talk.

Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

Example
hello => heggeleggleggo

eggs => egegggeggsegg

FUN KATA => FeggUNegg KeggATeggA

*/
const heggeleggleggo = (word) =>
  word
    .split("")
    .map((letter) =>
      letter.match(/[bcdfghjklmnpqrstvwxyz]/gi) ? `${letter}egg` : letter
    )
    .join("");

const heggeleggleggo2 = (word) =>
  word.split("").reduce((acc, letter) => {
    if (letter.match(/[bcdfghjklmnpqrstvwxyz]/gi)) {
      acc += `${letter}egg`;
    } else {
      acc += letter;
    }
    return acc;
  }, "");
