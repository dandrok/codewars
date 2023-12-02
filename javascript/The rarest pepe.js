/* 
The pepe market is on the verge of collapse.
In a last ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the Internet in order to identify the rarest, which are worth more.
Since this would be tedious to do by hand, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a list of pepes (pepes), returns the rarest pepe in the list.
If two or more pepes are equally rare, return a list of these pepes, sorted in alphabetical order.
Also, if the rarest pepe (or pepes) has a frequency of 5 or more, then it is not really a rare pepe, so your function should return 'No rare pepes!'.

More info on rare pepes here.
 */
function findRarestPepe(pepes) {
  const counter = {}
  pepes.forEach((el) => (counter[el] ? (counter[el] += 1) : (counter[el] = 1)))

  const minVal = Math.min(...Object.values(counter))

  if (minVal >= 5) {
    return 'No rare pepes!'
  }

  const result = Object.entries(counter)
    .filter((el) => el.includes(minVal) && el[0])
    .map((el) => el[0])
    .sort()

  return result.length > 1 ? result : result[0]
}