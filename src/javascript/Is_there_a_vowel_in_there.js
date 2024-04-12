// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// ANSWER:

const isVow = (a) => {
  const s = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' }
  return a
    .join()
    .replace(/(97)|(117)|(111)|(105)|(101)/gi, (m) => s[m])
    .split(',')
    .map((a) => (isNaN(a) ? a : Number(a)))
}

// OR

const isVow = (a) =>
  a.map((a) =>
    a == 97 || a == 117 || a == 101 || a == 105 || a == 111
      ? String.fromCharCode(a)
      : a
  )
