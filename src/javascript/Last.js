/*
Find the last element of the given argument(s).
Examples

last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4

In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

//first draft
function last(...list) {
  if (typeof list[0] === 'object') {
    return list[0].slice(-1)[0]
  }
  if (list[0].length > 1 && typeof list[0] === 'string') {
    return list[0].slice(-1)
  } else {
    return list.slice(-1)[0]
  }
}

// final result
function last(...list) {
  const result = list.slice(-1)[0]
  if (result.length) {
    return result.slice(-1)[0]
  }
  return result
}
