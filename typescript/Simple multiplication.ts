/* 
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

export const simpleMultiplication = (num: number): number =>
  num % 2 == 0 ? num * 8 : num * 9
