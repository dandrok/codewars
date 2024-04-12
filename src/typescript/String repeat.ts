/* 
Write a function called repeatStr which repeats the given string string exactly n times.

    repeatStr(6, "I") // "IIIIII"
    repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */

export const repeatStr = (n: number, s: string): string => {
  return s.repeat(n)
}
