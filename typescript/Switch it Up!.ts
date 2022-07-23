/* 
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
 */

export function switchItUp(intNumber: number): string {
  const nums = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ]

  return nums[intNumber]
}
