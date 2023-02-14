/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.

Good Luck!
 */

// node 12.0.0+
// const sortObject = obj => Object.fromEntries(Object.entries(obj).sort())

const sortObject = (obj) =>
  Object.keys(obj)
    .sort()
    .reduce((r, k) => ((r[k] = obj[k]), r), {})

function convertHashToArray(hash) {
  const sortedObj = sortObject(hash)
  return Object.entries(sortedObj)
}

//second simple solution:
const convertHashToArray = (hash) => Object.entries(hash).sort()
