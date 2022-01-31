/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
 */

const incrementString = (strng) => {
  if (strng === '' || /\d/.test(strng) === false) {
    return `${strng}1`
  }

  let num = strng.match(/\d/g).join('')
  let numPlus = +num + 1

  if (num.length > String(numPlus).length) {
    return `${strng.replace(/\d/g, '')}${'0'.repeat(
      num.length - String(numPlus).length
    )}${numPlus}`
  } else {
    return `${strng.replace(/\d/g, '')}${numPlus}`
  }
}
