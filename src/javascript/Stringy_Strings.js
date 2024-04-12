// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// ANSWER:

const stringy = (s) => ''.padStart(s, '10')

// OR

function stringy(s) {
  let io = '10'
  let ans = io.repeat(Math.ceil(s / 2))
  if (s % 2 == 0) {
    return ans
  } else {
    let x = ans.split('')
    x.pop()
    return x.join('')
  }
}
