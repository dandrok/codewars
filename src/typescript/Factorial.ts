/* 
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

export function factorial(n: number):number {
    if (n === 0 || n ===1 ) { 
      return 1
    } else {
      return n * factorial( n - 1 )
    }
}