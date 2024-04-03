/* 
Spin-off of this kata, here you will have to figure out
an efficient strategy to solve the problem of finding
the sole duplicate number among an unsorted array/list of numbers
starting from 1 up to n.

Hints:
a solution in linear time can be found;
using the most intuitive ones to search for duplicates
that can run in O(n²) time won't work
*/
function findDup(array) {
  array = array.sort();
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      result = array[i];
      break;
    }
  }
  return result;
}
