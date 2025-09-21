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
 Encode("ABCD")          // => GBCE 
 Encode("Ala has a cat") // => Gug hgs g cgt 
 Encode("gaderypoluki"); // => agedyropulik
 Decode("Gug hgs g cgt") // => Ala has a cat 
 Decode("agedyropulik")  // => gaderypoluki
 Decode("GBCE")          // => ABCD
*/

const pairs: Record<string, string> = {
  G: "A",
  D: "E",
  R: "Y",
  P: "O",
  L: "U",
  K: "I",

  g: "a",
  d: "e",
  r: "y",
  p: "o",
  l: "u",
  k: "i",

  A: "G",
  E: "D",
  Y: "R",
  O: "P",
  U: "L",
  I: "K",

  a: "g",
  e: "d",
  y: "r",
  o: "p",
  u: "l",
  i: "k",
};

export function encode(str: string): string {
  return [...str].map((letter) => pairs[letter] ?? letter).join("");
}

export function decode(str: string): string {
  return encode(str);
}
