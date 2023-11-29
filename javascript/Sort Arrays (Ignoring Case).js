/*
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

 */

// input: names - unsorted strings
// output: case-agnostic sort
const sortme = (names) => {
  return names.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
  )
}
