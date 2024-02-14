/* 
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.

More examples in the test cases.

Good luck!
 */
function solve(arr) {
  let dominantList = []
  for (let i = 0; i < arr.length; i++) {
    const sliceArr = arr.slice(i)
    const dominantCheck = sliceArr.every((num) => arr[i] >= num)
    if (dominantCheck) {
      dominantList.push(arr[i])
    }
  }
  return [...new Set(dominantList)]
}

// OR

function solve(arr) {
  let dominantList = []
  for (let i = 0; i < arr.length; i++) {
    arr.slice(i).every((num) => arr[i] >= num) && dominantList.push(arr[i])
  }
  return [...new Set(dominantList)]
}
