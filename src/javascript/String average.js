/* 
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
 */
const strKey = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

const numKey = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
}

const strToNum = (str) => {
  const joinKeys = new RegExp(Object.keys(strKey).join('|'), 'gi')
  return str.replace(joinKeys, (match) => strKey[match])
}

const numToStr = (num) => {
  const joinKeys = new RegExp(Object.keys(numKey).join('|'), 'gi')
  return String(num).replace(joinKeys, (match) => numKey[match])
}

function averageString(str) {
  if (str === '') {
    return 'n/a'
  }
  const strNum = strToNum(str)
  const arrOfNums = strNum.split(' ')
  const checkArr = arrOfNums.find((el) => isNaN(el))
  const avrg = checkArr
    ? 'n/a'
    : Math.floor(
        arrOfNums.reduce((acc, curr) => acc + Number(curr), 0) /
          arrOfNums.length
      )

  return numToStr(avrg)
}
