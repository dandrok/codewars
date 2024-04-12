/*
This cipher involves taking each character of a string and multiplying their char codes by 6.

For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

You must write two functions:
`encode` to encode a given string,
`decode` to decode a given string.
*/
const evilCode = (s, sign) =>
  [...s]
    .map((el) => String.fromCharCode(eval(`${el.charCodeAt()}${sign}6`)))
    .join('')

const encode = (str) => evilCode(str, '*')

const decode = (str) => evilCode(str, '/')
