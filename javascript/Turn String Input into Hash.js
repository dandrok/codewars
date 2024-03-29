/* 
Please write a function that will take a string as input and return a hash.
The string will be formatted as such.
The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
 */

const strToHash = (str) => {
  if (str.length < 1) return {}
  let obj = {}
  const arr = str.split(', ').map((el) => el.split('='))
  arr.map((ar, i) => (obj[arr[i][0]] = Number(arr[i][1])))
  return obj
}

// replay ^^'
function strToHash(str) {
  if (str.length <= 0) return {}
  let obj = {}
  const splitStrings = str.split(', ')

  splitStrings.map((el) => {
    let elSplit = el.split('=')
    return (obj[elSplit[0]] = Number(elSplit[1]))
  })
  return obj
}
