/* 
Goal
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null 
*/

const majority = (arr) => {
  if (!arr.length) return null;

  let obj = {};
  arr.forEach((el) => (obj[el] = (obj[el] || 0) + 1));

  if (Object.values(obj).length === 1) {
    return arr[0];
  }
  const allValues = Object.values(obj);
  const elSize = new Set(allValues).size;
  if (elSize === 1) {
    return null;
  }
  if (allValues.filter((el) => el === 2).length > 1) {
    return null;
  }

  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
};
