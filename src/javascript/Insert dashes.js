/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).
 */
function insertDash(num) {
  num = [...String(num)]
  return num
    .map((n, i) => {
      if (i + 1 === num.length) {
        return n
      }
      return n % 2 !== 0 && num[i + 1] % 2 !== 0 ? `${n}-` : n
    })
    .join('')
}
