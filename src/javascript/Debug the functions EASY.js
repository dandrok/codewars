/* 
Debug the functions

Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
*/
const multi = (arr) => arr.reduce((acc, curr) => acc * curr);
const add = (arr) => arr.reduce((acc, curr) => acc + curr);
const reverse = (str) => [...str].reverse().join("");
