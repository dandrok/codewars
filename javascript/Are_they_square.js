// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

// Examples:

// is_square([1, 4, 9, 16]) --> True

// is_square([3, 4, 7, 9]) --> False

// is_square([]) --> None

// ANSWER:

const isSquare = (arr) => {
  const check = arr.map((a) => Math.sqrt(a) % 1 == 0)
  return arr.length < 1 ? undefined : check.every((e) => e == true)
}

// OR

const isSquare = (arr) => {
  const check = arr.map((a) => (Math.sqrt(a) % 1 == 0 ? true : false))
  if (arr.length < 1) return undefined
  return check.every((e) => e == true) ? true : false
}
