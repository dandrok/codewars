/* 
Make a function that receives a value, and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

    their digits occur only once

    they are odd

    they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that fulfills those requirements"

Enjoy the kata!!
*/
const MAX_VAL = 9876543210

const isUnique = (num) => {
  const numToStr = String(num)
  const unique = new Set([...numToStr])
  return numToStr.length === unique.size
}

function nextNumb(val) {
  if (val >= MAX_VAL) return 'There is no possible number that fulfills those requirements'
  const rest = val % 3
  const newVal = val - rest
  const startingVal = newVal % 2 === 0 ? newVal + 3 : newVal + 6

  for (let i = startingVal; i < MAX_VAL; i += 6) {
    if (isUnique(i)) {
      return i
    }
  }

  return 'There is no possible number that fulfills those requirements'
}
