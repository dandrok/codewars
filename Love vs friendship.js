/* 
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
 */

const wordsToMarks = (s) => [...s].reduce((a, b) => a + b.charCodeAt() - 96, 0)

//OR
function wordsToMarks(s) {
  const base = 'a'.charCodeAt(0)
  return [...s]
    .map((char) => char.toLowerCase().charCodeAt(0) - base + 1)
    .reduce((a, b) => a + b, 0)
}
