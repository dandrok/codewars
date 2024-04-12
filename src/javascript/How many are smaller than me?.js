/* 
Write

function smaller(arr)
that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

For example:

smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
smaller([1, 2, 0]) === [1, 1, 0]

 */

const smaller = (nums) =>
  nums.map((el, i) => nums.slice(i).filter((x, y) => x > y).length)
