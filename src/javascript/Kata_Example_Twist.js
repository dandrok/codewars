// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

// var websites = []

// ANSWER:

const websites = '_'
  .repeat(1000)
  .split('')
  .map((_) => 'codewars')
