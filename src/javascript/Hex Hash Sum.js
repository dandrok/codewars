/* 
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

function hexHash(inputString) {
  return [...inputString]
    .reduce((digitArray, character) => {
      const hexValue = character.charCodeAt(0).toString(16);
      const numericDigits = hexValue.match(/[0-9]/g);
      digitArray.push(...numericDigits);
      return digitArray;
    }, [])
    .reduce((sum, digit) => sum + Number(digit), 0);
}
