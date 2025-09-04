/* 
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

export type Element = string | number;

export function divCon(x: Element[]): number {
  return x.reduce((acc: number, curr) => {
    if (typeof curr === "number") {
      acc += curr;
    } else {
      acc -= Number(curr);
    }
    return acc;
  }, 0);
}
