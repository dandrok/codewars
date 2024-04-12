/* 
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */

const towerBuilder = (n) => {
  const arr = []

  for (let i = 1; i <= n; i++) {
    const space = ' '.repeat(n - i)
    const asterisk = '*'.repeat(2 * i - 1)
    arr.push(`${space}${asterisk}${space}`)
  }
  return arr
}
