/*
 *
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

function countPositivesSumNegatives(input) {
  const negatives = input?.reduce((acc, curr) => {
    if (curr <= 0) {
      acc += curr
    }
    return acc
  }, 0)
  const positives = input?.filter(num => num > 0).length
  if (!negatives || !positives) return []
  return [positives, negatives]
}
