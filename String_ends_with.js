// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ***

const solution = (s, e) => s.substr(-e.length) == e || e == ''

//OR

function solution(str, ending) {
  if (str.substr(-ending.length) === ending) {
    return true
  } else if (ending === '') {
    return true
  } else {
    return false
  }
}

// ***
