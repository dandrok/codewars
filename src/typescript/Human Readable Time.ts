/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

export const humanReadable = (seconds: number): string => {
  let h = seconds / 3600
  let m = (seconds % 3600) / 60
  let s = seconds % 60
  return [h, m, s].map((el) => `0${Math.floor(el)}`.slice(-2)).join(':')
}
