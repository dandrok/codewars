/* 
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

export function sameCase(a: string, b: string): number {
  const upper = /[A-Z]/.test(a) && /[A-Z]/.test(b);
  const lower = /[a-z]/.test(a) && /[a-z]/.test(b);
  const other = /[\W0-9]/.test(a) || /[\W0-9]/.test(b);

  if (upper || lower) {
    return 1;
  } else if (other) {
    return -1;
  } else {
    return 0;
  }
}
