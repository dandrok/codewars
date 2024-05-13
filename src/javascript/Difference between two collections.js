/* 
Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.
Example

A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]

*/

function diff(a, b) {
  const A = a.filter((el) => !b.includes(el));
  const B = b.filter((el) => !a.includes(el));
  return [...new Set([...A, ...B])].sort();
}

const getDiff = (arr, secondArr) => arr.filter((el) => !secondArr.includes(el));

const diff = (a, b) =>
  [...new Set([...getDiff(a, b), ...getDiff(b, a)])].sort();
