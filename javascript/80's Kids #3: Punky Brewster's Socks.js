/*
Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']

Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.
*/

function getSocks(name, socks) {
  let henrySocks = []
  const uniquePunky = [...new Set(socks)]
  const punkySocks = uniquePunky.length <= 1 ? [] : uniquePunky.slice(0, 2)

  socks.forEach(
    (sock, _, arrOfSocks) =>
      arrOfSocks.filter((el) => el === sock).length > 1 && henrySocks.push(sock)
  )

  return name === 'Henry' ? henrySocks : punkySocks
}
