// Search The Longest Word from a sentence. if there's 2 or more word with same largest length, you need to return no longest word found,
// example:
// I really love to learn and do experiment with typescript
// here, experiment and typescript have the same length 9.
// so the solution is no longest word found.

// constraints:

//    should throw an error if sent empty argument
//    should throw an error if sent non string argument
//    should return solution with string format [word]: [length] chars
//    should return no longest word found if there's 2 or more word found.

//TODO: quick refactor draft - WIP

export const findTheLongestWord = (input: string): string => {
  if (!input) throw new Error('error')
  const words = input.split(' ') ?? []
  if (words.length === 1) return `${input}: ${input.length} chars`

  const sortDesc = words.sort((a, b) => b.length - a.length)

  const longest = sortDesc.at(0) ?? ''
  console.log(longest)
  const shortest = sortDesc?.at(-1)?.length ?? ''

  return longest > shortest ? `${longest}: ${longest.length} chars` : 'no longest word found'

};
