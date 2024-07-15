/* 
You have to create a method "compoundArray" which should take
as input two int arrays of different length and
return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/

function compoundArray(a, b) {
  const max = Math.max(a.length, b.length);
  let result = [];
  for (let i = 0; i < max; i++) {
    if (a[i] !== undefined) {
      result.push(a[i]);
    }
    if (b[i] !== undefined) {
      result.push(b[i]);
    }
  }
  return result;
}
