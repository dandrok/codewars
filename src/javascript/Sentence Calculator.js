/* 
Sentence Calculator

Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

    Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
    Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
    Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
    Other characters: 0 value

Note: input will always be a string
*/

function lettersToNumbers(s) {
  return [...s].reduce((acc, curr) => {
    const code = curr.charCodeAt(0);
    let value = 0;
    if (code >= 97 && code <= 122) {
      value = code - 96;
    }
    if (code >= 65 && code <= 90) {
      value = (code - 64) * 2;
    }
    if (code >= 48 && code <= 57) {
      value = code - 48;
    }
    return acc + value;
  }, 0);
}
