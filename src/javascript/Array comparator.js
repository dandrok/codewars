/* 
You have two arrays in this kata, every array contains unique elements only.
Your task is to calculate number of elements in the first array which are also present in the second array.
*/
const matchArrays = (v, r) => v.filter((el) => r.includes(el)).length;
