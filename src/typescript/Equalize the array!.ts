/* 
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
*/

export function equalize(array: number[]): string[] {
  return array.map((num, i, arr) => {
    const result = num - arr[0];
    if (result >= 0) {
      return `+${result}`;
    } else {
      return String(result);
    }
  });
}
