/* 
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
*/

const changeCase = (str) => {
  return [...str]
    .map((letter) =>
      letter !== letter.toUpperCase()
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join("");
};

const reverseString = (sentense) => {
  return sentense
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .reverse()
    .join(" ");
};

function reverseAndMirror(s1, s2) {
  s1 = changeCase(s1);
  s2 = changeCase(s2);

  return `${reverseString(s2)}@@@${reverseString(s1)}${s1}`;
}
