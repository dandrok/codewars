/* 
Easy; Make a box
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.

Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]

n = 3

[
  '---',
  '- -',
  '---'
]

*/

function box(num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
      result.push("-".repeat(num));
    } else {
      result.push(`-${" ".repeat(num - 2)}-`);
    }
  }
  return result;
}
