/* 
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

    returns true  / True if every element in an array is an integer or a float with no decimals.
    returns true  / True if array is empty.
    returns false / False for every other input.

 */

function isIntArray(arr) {
  return !arr
    ? false
    : arr.every(
        (el) =>
          typeof el === 'number' && Number(el.toFixed(0)) === el && !isNaN(el)
      )
}
