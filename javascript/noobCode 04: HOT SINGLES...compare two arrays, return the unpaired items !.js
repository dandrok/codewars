/*
Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

The order of the elements in the result should follow what appears in the first array, then the second one.
Examples

[1, 2, 3, 3], [3, 2, 1, 4, 5]) --> [4, 5]

["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]

[77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]

[1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]

[1, 2, 3] , [3, 3, 2, 1] --> []

SPECIAL THANKS: @JulianKolbe !
 */
function hotSingles(arr1, arr2) {
  let arr = []
  arr1.forEach((el) => !arr2.includes(el) && arr.push(el))
  arr2.forEach((el) => !arr1.includes(el) && arr.push(el))
  return [...new Set(arr)]
}

function hotSingles(arr1, arr2) {
  const fullArr = [...arr1, ...arr2]
  const unpaired = fullArr.filter(
    (el) => !arr1.includes(el) || !arr2.includes(el)
  )
  return [...new Set(unpaired)]
}
