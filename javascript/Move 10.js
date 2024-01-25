/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
 */

const alphabet = {
  a: 'k',
  b: 'l',
  c: 'm',
  d: 'n',
  e: 'o',
  f: 'p',
  g: 'q',
  h: 'r',
  i: 's',
  j: 't',
  k: 'u',
  l: 'v',
  m: 'w',
  n: 'x',
  o: 'y',
  p: 'z',
  q: 'a',
  r: 'b',
  s: 'c',
  t: 'd',
  u: 'e',
  v: 'f',
  w: 'g',
  x: 'h',
  y: 'i',
  z: 'j',
}

const moveTen = (s) => [...s].map((letter) => alphabet[letter]).join('')
