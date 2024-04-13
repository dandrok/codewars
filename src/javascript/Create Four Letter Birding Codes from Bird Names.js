/* 
In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

If the bird's name has only one word, the code takes the first four letters of that word.
If the name is made up of two words, the code takes the first two letters of each word.
If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
If the name is four words long, the code uses the first letter from all the words.
(There are other ways that codes are created, but this Kata will only use the four rules listed above)

Complete the function that takes an array of strings of common bird names from North America, and create the codes for those names based on the rules above. The function should return an array of the codes in the same order in which the input names were presented.

Additional considertations:

The four-letter codes in the returned array should be in UPPER CASE.
If a common name has a hyphen/dash, it should be considered a space.
Example
If the input array is: ["Black-Capped Chickadee", "Common Tern"]

The return array would be: ["BCCH", "COTE"]
*/
function birdCode(arr) {
  return arr.map((name) => {
    name = name.replace(/\-/gi, " ");
    let result;
    const wordCount = name.split(" ").length;
    const [f, s, t, v] = name.split(" ");
    switch (wordCount) {
      case 1:
        result = name.slice(0, 4);
        break;
      case 2:
        result = `${f.slice(0, 2)}${s.slice(0, 2)}`;
        break;
      case 3:
        result = `${f.slice(0, 1)}${s.slice(0, 1)}${t.slice(0, 2)}`;
        break;
      case 4:
        result = `${f.slice(0, 1)}${s.slice(0, 1)}${t.slice(0, 1)}${v.slice(
          0,
          1
        )}`;
        break;
    }
    return result.toUpperCase();
  });
}