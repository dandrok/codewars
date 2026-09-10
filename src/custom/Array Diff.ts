// Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.
//
// - the returned array should be softed in alphabetical order.

const arrayDiff = (arr1: string[], arr2: string[]): string[] => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  return [...setA.symmetricDifference(setB)].sort();
};
