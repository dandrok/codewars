/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

function getMinMax(arr) {
  // return [Math.min(...arr), Math.max(...arr)]
  let min = Infinity
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i]
    if (max < arr[i]) max = arr[i]
  }
  return [min, max]
}
