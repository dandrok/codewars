/* 
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

export const stringy = (n: number): string => {
  let result = "";
  let i = 0;
  do {
    i += 1;
    result += i % 2 === 0 ? "0" : "1";
  } while (i < n);

  return result;
};
