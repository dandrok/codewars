/* 
Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5

sum(2)(3); // Outputs 5

HINT : use closures
*/

const sum = (a, b) => a + b || ((c) => a + c);
