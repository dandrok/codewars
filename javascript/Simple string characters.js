/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing
the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.

Good luck!
 */
function solve(s) {
  const upperCase = s.match(/[A-Z]/g)?.length ?? 0
  const lowerCase = s.match(/[a-z]/g)?.length ?? 0
  const numbers = s.match(/[0-9]/g)?.length ?? 0
  const special = s.match(/[/\W|_/]/g)?.length ?? 0
  return [upperCase, lowerCase, numbers, special]
}

const solve = (s) =>
  [/[A-Z]/g, /[a-z]/g, /[0-9]/g, /[/\W|_/]/g].map(
    (reg) => s.match(reg)?.length ?? 0
  )
