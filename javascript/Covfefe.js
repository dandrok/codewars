/*
Covfefe

Your are given a string.
You must replace any occurence of the sequence coverage by covfefe, however,
if you don't find the word coverage in the string,
you must add covfefe at the end of the string with a leading space.

For the languages where the string is mutable (such as ruby),
don't modify the given string, otherwise this will break the test cases.
 */
const checkStringForCovfefe = (string) =>
  string.split(' ').some((el) => el === 'coverage')

const covfefe = (str) =>
  checkStringForCovfefe(str)
    ? str.replace(/coverage/g, 'covfefe')
    : `${str} covfefe`

// second solution:
const covfefe2 = (str) =>
  str.includes(`coverage`)
    ? str.replace(/coverage/g, `covfefe`)
    : `${str} covfefe`
