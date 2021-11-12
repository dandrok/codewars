/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:
 */

const findUniq = (arr) => {
  let uniq = arr.filter((item, i, ar) => ar.indexOf(item) === i)
  let coun = arr.reduce((a, b) => (uniq[0] === b ? a + 1 : a), 0)
  return coun >= 2 ? uniq[1] : uniq[0]
}
