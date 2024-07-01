/* 
Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

Example 1:

user_name@example.com
=> user_name [at] example [dot] com

Example 2:

af5134@borchmore.edu
=> af5134 [at] borchmore [dot] edu

Example 3:

jim.kuback@ennerman-hatano.com
=> jim [dot] kuback [at] ennerman-hatano [dot] com

Using the examples above as a guide, write a function that takes an email address string and returns the obfuscated version as a string that replaces the characters @ and . with [at] and [dot], respectively.

    Notes

        Input (email) will always be a string object. Your function should return a string.

        Change only the @ and . characters.

        Email addresses may contain more than one . character.

        Note the additional whitespace around the bracketed literals in the examples!
*/

// Benchmark: 1129ms
const obfuscate_replaceAll = (email) =>
  email.replace("@", " [at] ").replaceAll(".", " [dot] ");

// Benchmark: 2188ms
const obfuscate_replace = (email) =>
  email.replace("@", " [at] ").replace(/\./g, " [dot] ");

// Benchmark: 12773ms
const obfuscate_map = (email) =>
  [...email]
    .map((char) => (char === "." ? " [dot] " : char === "@" ? " [at] " : char))
    .join("");

// Benchmark replace method
console.time("replace");
for (let i = 0; i < 1000000; i++) {
  obfuscateReplace(email);
}
console.timeEnd("replace");

// Benchmark replaceAll method
console.time("replaceAll");
for (let i = 0; i < 1000000; i++) {
  obfuscateReplace2(email);
}
console.timeEnd("replaceAll");

// Benchmark map method
console.time("map");
for (let i = 0; i < 1000000; i++) {
  obfuscateMap(email);
}
console.timeEnd("map");
