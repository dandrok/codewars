/* 
Return true if n is prime and false if not;

like:
  isPrime(7) == true
  isPrime(-7) == true
  isPrime(6) == false
  isPrime(-6) == false

!important: n always be integer and can be negative (but you need to handle this);

you can't use loops or hardcode (for, while)
 */
const generateArrOfNums = (start, end) => {
  const length = end - start + 1
  if (length <= 0) {
    return false
  }
  const arrOfNums = Array.from(Array(length), (_, index) => start + index)
  return arrOfNums
}

function isPrime(n) {
  const num = Math.abs(n)
  const maxNum = Math.floor(Math.sqrt(num))
  const arr = generateArrOfNums(2, maxNum) || []
  return arr.length !== 0 && arr.every((el) => num % el !== 0)
}
