/* 
Introduction
The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.
The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

Task
Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

Input/Output
The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

Example
 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD
 */

const char1 = {
  A: 'G',
  E: 'D',
  Y: 'R',
  O: 'P',
  U: 'L',
  I: 'K',
  a: 'g',
  e: 'd',
  y: 'r',
  o: 'p',
  u: 'l',
  i: 'k',
  G: 'A',
  D: 'E',
  R: 'Y',
  P: 'O',
  L: 'U',
  K: 'I',
  g: 'a',
  d: 'e',
  r: 'y',
  p: 'o',
  l: 'u',
  k: 'i',
}
const reg = new RegExp('[aeyouiAEYOUIGDRPLKgdrplk]', 'gi')

const gaderypoluki = (s) => s.replace(reg, (le) => char1[le])

const encode = (str) => gaderypoluki(str)
const decode = (str) => gaderypoluki(str)
