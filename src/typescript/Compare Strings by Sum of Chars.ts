/* 
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
 */

export function compare(s1: string | null, s2: string | null): boolean {
  if (/^\D+$/gi.test(s1!) && /^\D+$/gi.test(s2!)) {
    return (
      s1!
        .split('')
        .map((n) => n.toUpperCase().charCodeAt(0))
        .reduce((a, b) => a + b, 0) ===
      s2!
        .split('')
        .map((n) => n.toUpperCase().charCodeAt(0))
        .reduce((a, b) => a + b, 0)
    )
  }
  return true
}
