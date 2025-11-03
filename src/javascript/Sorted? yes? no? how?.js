/*
Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

It is guaranteed that there will always be a unique valid answer. More precisely:

    there will be no arrays with less than 2 elements
    there will be no arrays where all elements are equal
*/

const isSortedAndHow = a => {
  const oryginal = [...a]
  const ascending = [...a].sort((a, b) => a - b)
  const descending = [...a].sort((a, b) => b - a)

  if (oryginal.join('') === ascending.join('')) {
    return 'yes, ascending'
  } else if (oryginal.join('') === descending.join('')) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}
