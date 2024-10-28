/* 
Create a function to lowercase all strings in an array. Non-string items should remain unchanged.
Example

arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']
*/

const arrayLowerCase = (arr) =>
  arr.map((el) => (typeof el === "string" ? el.toLowerCase() : el));
