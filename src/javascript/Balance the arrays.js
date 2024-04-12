/* 
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]

Both arrays have four of one item and two of another, so balance should return true.

#Have fun!
 */
function balance(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  } else {
    arr1 = [...new Set(arr1.sort())].length
    arr2 = [...new Set(arr2.sort())].length
    return arr1 === arr2
  }
}
