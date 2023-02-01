/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
 */

export function nthFiboEasy(n: number): number {
  return n < 3 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2)
}

export function nthFibo(n: number): number {
  let phi = (1 + Math.sqrt(5)) / 2
  let asymp = Math.pow(phi, n - 1) / Math.sqrt(5)
  return Math.round(asymp)
}

export const nthFiboOneLine = (n: number): number =>
  Math.round(Math.pow((1 + Math.sqrt(5)) / 2, n - 1) / Math.sqrt(5))
