/* 
You are given an array of numbers.
Check if the array contains of pairs, i.e every number occurs exactly two times.
If true, return true, otherwise false.
Your solution should not modify the input array.
*/

function twins(myArray) {
  if (myArray.length % 2 !== 0) return false;
  const frequencyMap = myArray.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  return Object.values(frequencyMap).every((value) => value === 2);
}
