// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// This kata is meant for beginners. Rank and upvote to bring it out of beta

// ANSWER:

const position = (l) => `Position of alphabet: ${l.charCodeAt() - 96}`

// OR

const position = (l) =>
  `Position of alphabet: ${[...'abcdefghijklmnopqrstuvwxyz'].indexOf(l) + 1}`

// OR

const position = (l) => {
  let a = 'abcdefghijklmnopqrstuvwxyz'
  let p = [...a].indexOf(l)
  return `Position of alphabet: ${p + 1}`
}

// OR

const position = (l) =>
  `Position of alphabet: ${
    'abcdefghijklmnopqrstuvwxyz'.split('').indexOf(l) + 1
  }`
