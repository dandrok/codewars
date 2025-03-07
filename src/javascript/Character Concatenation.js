/* 
Given a string, you progressively need to concatenate the first character from the left and the first character from the right and "1", then the second character from the left and the second character from the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

"abcdef"  --> "af1be2cd3"
"abc!def" --> "af1be2cd3" // same result
*/

function charConcat(string) {
  let result = "";
  const arrLength = [...string].length;
  const half = arrLength / 2;
  const firstHalf = [...string].slice(0, half);
  const secondHalf =
    arrLength % 2 === 0 ? [...string].slice(half) : [...string].slice(half + 1);
  const reverseSecondHalf = secondHalf.reverse();

  for (let i = 0; i < reverseSecondHalf.length; i++) {
    result += `${firstHalf[i]}${reverseSecondHalf[i]}${i + 1}`;
  }

  return result;
}

// os simply

function charConcat(string) {
  let result = "";
  const length = string.length;
  const halfLength = Math.floor(length / 2);

  for (let i = 0; i < halfLength; i++) {
    result += string[i] + string[length - 1 - i] + (i + 1);
  }

  return result;
}
