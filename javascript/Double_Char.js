// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

// ANSWER:

const doubleChar = (str) => [...str].map((a) => a.repeat(2)).join('')

// OR

const doubleChar = (str) => str.replace(/(.)/g, '$1$1')
