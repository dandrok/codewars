/* 
Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
 */

const toNum = (str) =>
  [...str]
    .map((l) => l.toLowerCase().charCodeAt(0) - 96)
    .reduce((a, b) => a + b)

const battle = (x, y) =>
  toNum(x) > toNum(y) ? x : toNum(x) < toNum(y) ? y : 'Tie!'
