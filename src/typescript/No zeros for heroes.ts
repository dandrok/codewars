/* 
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450   -> 145
960000 -> 96
1050   -> 105
-1050  -> -105
0      -> 0
Note: Zero should be left as it is.

*/
export function noBoringZeros(n: number): number {
  let numStr = String(n);
  while (numStr.endsWith("0")) {
    numStr = numStr.slice(0, -1);
  }
  return Number(numStr);
}
