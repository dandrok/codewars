/* 
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'
This is a modification on the Kata: Array2Binary addition hope you like it

*/

export function arr2bin(arr: any[]): string {
  return arr
    .reduce((acc, curr) => {
      if (typeof curr === "number") {
        acc += curr;
      }
      return acc;
    }, 0)
    .toString(2);
}
