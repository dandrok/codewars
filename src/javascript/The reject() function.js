/* 
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
*/

function reject(array, predicate) {
  const opposite = array.filter(predicate);
  return array.filter((el) => !opposite.includes(el));
}

// or simply:

const reject = (array, predicate) => array.filter((el) => !predicate(el));
