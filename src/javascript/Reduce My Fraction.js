/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]

All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
 */
function reduce([first, second]) {
  const max = Math.max(first, second)
  let num = second
  for (let i = 0; i < max; i++) {
    if (first % num == 0 && second % num == 0) {
      break
    }
    num -= 1
  }
  return [first / num, second / num]
}

// after a thought about it a little bit more
function reduce([first, second]) {
  let gcd = 1
  for (let i = 2; i < first; i++) {
    if (first % i == 0 && second % i == 0) {
      gcd = i
    }
  }
  return [first / gcd, second / gcd]
}
