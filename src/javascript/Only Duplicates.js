/* 
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

function onlyDuplicates(str) {
  const arr = [...str];
  const countMap = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return arr.filter((el) => countMap[el] > 1).join("");
}
