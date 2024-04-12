/* 
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example:

two_oldest_ages( 4, {1, 2, 10, 8}, result) // should fill result array with {8, 10}
 */

export const twoOldestAges = (ages: number[]): number[] =>
  ages.sort((a, b) => a - b).slice(-2)

export const twoOldestAges2 = (ages: number[]): number[] => {
  ages = ages.sort((a, b) => a - b)
  return ages.length <= 2 ? ages : ages.splice(ages.length - 2, ages.length - 1)
}

export const twoOldestAges3 = (ages: number[]): number[] => {
  return ages.sort((a, b) => a - b).slice(ages.length - 2)
}

export const twoOldestAges4 = (ages: number[]): number[] => {
  return ages
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reverse()
}
