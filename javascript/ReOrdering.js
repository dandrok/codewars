/* 
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering
Examples

>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'

 */
const checkFirstLetter = (word) => {
  const firstLetter = word.substring(0, 1)
  return firstLetter === firstLetter.toUpperCase()
}

function reOrdering(text) {
  const arrOfWords = text.split(' ')

  const upperCaseWord = arrOfWords
    .filter((word) => checkFirstLetter(word) && word)
    .join('')
  const lowerCaseWords = arrOfWords.filter((word) => word !== upperCaseWord)

  return [upperCaseWord, ...lowerCaseWords].join(' ')
}
