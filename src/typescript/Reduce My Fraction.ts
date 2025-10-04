/* 
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

export const reduce = (input: number[]): number[] => {
  const [numerator, denominator] = input;

  if (numerator === 1 || denominator === 1) {
    return [numerator, denominator];
  }

  let newNumerator = numerator;
  let newDenominator = denominator;

  for (let i = 2; i < numerator; i++) {
    const gcdCandidate = numerator / i;
    if (numerator % i === 0 && denominator % gcdCandidate === 0) {
      newNumerator = i;
      newDenominator = denominator / gcdCandidate;
      break;
    }
  }
  return [newNumerator, newDenominator];
};
