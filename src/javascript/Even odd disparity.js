/* 
Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

For example:
solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  

Let's now add two letters to the last example:

solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 

The input will be an array of lowercase letters and numbers only.

In some languages (Haskell, C++, and others), input will be an array of strings:

solve ["0","1","2","3","a","b"] = 0 

Good luck!
*/

const solve = (arr) =>
  arr.reduce((acc, curr) => {
    if (typeof curr === "number") {
      curr % 2 === 0 ? (acc += 1) : (acc -= 1);
    }
    return acc;
  }, 0);

function solve(arr) {
  let evenCount = 0;
  let oddCount = 0;
  arr.forEach((el) => {
    if (typeof el === "number") {
      el % 2 === 0 ? (evenCount += 1) : (oddCount += 1);
    }
  });
  return evenCount - oddCount;
}
