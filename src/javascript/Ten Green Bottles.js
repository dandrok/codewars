/* 
Who knows the nursery rhyme Ten Green Bottles?

Lyrics:

Ten green bottles hanging on the wall,
Ten green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be nine green bottles hanging on the wall.

Nine green bottles hanging on the wall,
Nine green bottles hanging on the wall,
And if one green bottle should accidentally fall,
There'll be eight green bottles hanging on the wall. 

Eight green bottles hanging on the wall...
Seven green bottles hanging on the wall...
...

One green bottle hanging on the wall,
One green bottle hanging on the wall,
If that one green bottle should accidentally fall,
There'll be no green bottles hanging on the wall.

Task

Write some amazing code to reproduce the above lyrics starting from n green bottles!

    parameter n is 1 to 10
    newline terminates every line (including the last)
    don't forget the blank lines between the verses


*/

const num = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

function tenGreenBottles(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    console.log(i);
    result.push(
      `${num[i]} green bottle${i > 0 ? "s" : ""} hanging on the wall,
${num[i]} green bottle${i > 0 ? "s" : ""} hanging on the wall,
${
  num[i] === "One" ? "If that" : "And if"
} one green bottle should accidentally fall,
There'll be ${num[i - 1]?.toLowerCase() || "no"} green bottle${
        num[i] === "Two" ? "" : "s"
      } hanging on the wall.
`
    );
  }
  return result.reverse().join("\n");
}
