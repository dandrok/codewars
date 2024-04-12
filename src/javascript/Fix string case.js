/* 
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
 */

const solve = (s) => {
  //    check for true if letter are toUpperCase
  let check = s.split('').map((a) => a.toUpperCase() === a)
  //    give array of index of true (uppercase letters)
  let ind = check.reduce(
    (out, bool, index) => (bool ? out.concat(index) : out),
    []
  )
  //    check for length of uppercase letter if they more than 50% of string
  //    make whole string to uppercase else to lowercase
  return ind.length > s.length / 2 ? s.toUpperCase() : s.toLowerCase()
}
