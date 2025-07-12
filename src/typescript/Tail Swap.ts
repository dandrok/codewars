/* 
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

export function tailSwap(arr: [string, string]): [string, string] {
  const [a, b] = arr;
  const [aKey, aVal] = a.split(":");
  const [bKey, bVal] = b.split(":");
  const newA = `${aKey}:${bVal}`;
  const newB = `${bKey}:${aVal}`;
  return [newA, newB];
}
