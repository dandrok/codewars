/* 
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
 */
function sumNoDuplicates(numList) {
  const uniqueNums = numList.filter(
    (num, _, arr) => arr.filter((el) => num === el).length === 1
  )
  return uniqueNums.reduce((acc, curr) => acc + curr, 0)
}
