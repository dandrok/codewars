/* 
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

 */

export class Kata {
  static opposite(n: number) {
    const opposite = Math.abs(n)
    return n > 0 ? -opposite : opposite
  }
}
