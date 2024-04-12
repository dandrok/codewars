/*
Task: Find the number couple with the greatest difference from a list of number-couples.

Input: A list of number-couples, where each couple is represented as a string containing two positive integers separated by a hyphen ("-").

Output: The number couple with the greatest difference, or False if there is no difference among any of the couples or in case of an empty list.

Additional Information:

    All number couples will be given as strings.
    All numbers in the couples are positive integers.
    If multiple couples have the same greatest difference, return the first one encountered in the input list.
    If there is no difference (both numbers in a couple are equal), return False.

 */

function diff(str) {
  const arrOfDiff = str.map((el) => {
    const [first, second] = el.split('-')
    return Math.abs(first - second)
  })

  const min = Math.min(...arrOfDiff)
  const max = Math.max(...arrOfDiff)
  const index = arrOfDiff.indexOf(max)

  return min === max ? false : str[index]
}
