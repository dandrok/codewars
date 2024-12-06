/* 
A comfortable word is a word which you can type always alternating the hand you type with (assuming you type using a QWERTY keyboard and use fingers as shown in the image below).

That being said, complete the function which receives a word and returns true if it's a comfortable word and false otherwise.

The word will always be a string consisting of only ascii letters from a to z.

To avoid problems with image availability, here's the lists of letters for each hand:

    Left: q, w, e, r, t, a, s, d, f, g, z, x, c, v, b
    Right: y, u, i, o, p, h, j, k, l, n, m

Examples

"yams"  -->  true
"test"  -->  false

*/

const left = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "a",
  "s",
  "d",
  "f",
  "g",
  "z",
  "x",
  "c",
  "v",
  "b",
];

const right = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
const comfortableWord = (word) => {
  const isLeft = (char) => left.includes(char);
  const isRight = (char) => right.includes(char);

  for (let i = 0; i < word.length - 1; i++) {
    const currentIsLeft = isLeft(word[i]);
    const nextIsLeft = isLeft(word[i + 1]);

    if (currentIsLeft === nextIsLeft) {
      return false;
    }
  }
  return true;
};
