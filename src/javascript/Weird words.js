/* 
Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/

function nextLetter(str) {
  return [...str]
    .map((el) => {
      const letterToCharCode = el.charCodeAt(0);
      const newLetter =
        letterToCharCode === 90
          ? 65
          : letterToCharCode === 122
          ? 97
          : letterToCharCode + 1;
      return /[a-zA-Z]/.test(el) ? String.fromCharCode(newLetter) : el;
    })
    .join("");
}
