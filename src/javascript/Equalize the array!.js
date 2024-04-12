/* 
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
 */

function equalize(array) {
  return array.map((el) => {
    const result = array[0] - el
    return result <= 0 ? `+${Math.abs(result)}` : `-${result}`
  })
}
