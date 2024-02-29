/*
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}

Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

/* cheating with JSON.stringify */
function naughtyOrNice(data) {
  const everyone = JSON.stringify(data)
  let countOfNaughty = everyone.split('Naughty').length
  let countOfNice = everyone.split('Nice').length

  return countOfNice >= countOfNaughty ? 'Nice!' : 'Naughty!'
}

/* counting Naughty and Nice with forEach */
function naughtyOrNice(data) {
  let countOfNaughty = 0
  let countOfNice = 0

  const everyone = Object.entries(data).flatMap((el) => Object.values(el[1]))
  everyone.forEach(
    (type) =>
      (type === 'Naughty' && countOfNaughty++) ||
      (type === 'Nice' && countOfNice++)
  )
  return countOfNice >= countOfNaughty ? 'Nice!' : 'Naughty!'
}

/* using seperate function to filter Naughty or Nice */
const filterForSanta = (arr, type) =>
  arr.filter((types) => types === type).length

function naughtyOrNice(data) {
  const everyone = Object.entries(data).flatMap((el) => Object.values(el[1]))
  const countOfNaughty = filterForSanta(everyone, 'Naughty')
  const countOfNice = filterForSanta(everyone, 'Nice')

  return countOfNice >= countOfNaughty ? 'Nice!' : 'Naughty!'
}
