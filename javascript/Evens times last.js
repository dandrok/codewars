/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
 */

function evenLast(numbers) {
  let num = 0
  for (let i = 0; i < numbers.length; i++) {
    i % 2 === 0 && (num += numbers[i])
  }
  return num * numbers.at(-1) || 0
  //   return (
  //     numbers.filter((el, i) => i % 2 === 0).reduce((a, b) => a + b, 0) *
  //       numbers.at(-1) || 0
  //   )
}
