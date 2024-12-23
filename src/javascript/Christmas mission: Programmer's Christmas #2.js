/* 


    When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:

Christmas is coming soon. As a programmer, you need to complete a series of tasks to welcome the arrival of Christmas. This time your task is:

Given two string s1 and s2. You need to perform the following operations: Compare each character of s2 with s1. If s1 contains the character, remove it; If not, append it to s1. After these remove or append operations, if the characters of s1 are same as "Merry Christmas!"(order can be different), return true; Otherwise, return false. For example:

var s1="abcMerry Christmas!",s2="abc"
merryChristmas(s1,s2) === true

var s1="abcerry hristmas!",s2="abcMC"
merryChristmas(s1,s2) === true

var s1="abcMerry Christmas!",s2="bad"
merryChristmas(s1,s2) === false

*/

const MERRY_CHRISTMAS = " !CMaehimrrrssty";

function merryChristmas(s1, s2) {
  let word = s1;
  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (word.includes(letter)) {
      word = word.replace(letter, "");
    } else {
      word += letter;
    }
  }
  return [...word].sort().join("") === MERRY_CHRISTMAS;
}

// const MERRY_CHRISTMAS = " !CMaehimrrrssty";

const merryChristmas = (s1, s2) =>
  [
    ...[...s2].reduce(
      (acc, curr) => (acc.includes(curr) ? acc.replace(curr, "") : acc + curr),
      s1
    ),
  ]
    .sort()
    .join("") === MERRY_CHRISTMAS;
