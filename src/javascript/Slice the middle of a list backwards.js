/* 
Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.
*/

const sliceAndReverse = (arr, num) => {
  const half = Math.round(arr.length / 2)
  return arr.slice(half - num, half + 1).reverse()
}

function reverseMiddle(array) {
  return array.length % 2 == 0
    ? sliceAndReverse(array, 1)
    : sliceAndReverse(array, 2)
}
