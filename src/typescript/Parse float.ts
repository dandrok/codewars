/* 
Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.
*/

export function parseF(s: string): number | null {
  const num = Number(s);
  return !isNaN(num) ? num : null;
}
