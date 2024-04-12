/* 
Write a function called upperCasePlace, that takes a text string as an argument (string), and a number (n) as the second argument. The function should first process the string through .toLowerCase(), and should then capitalize the nth letter of each word and return the string result.

For example;

upperCasePlace("HELLO", 2) // returns "hEllo";
upperCasePlace("HELLO", 3) // return "heLlo";
upperCasePlace("HELLO THERE", 3) // return "heLlo thEre";

If the n is 0, then the function should capitalise the first letter of the word (which is the same as if the number argument is 1)

upperCasePlace("HELLO THERE", 0) // return "Hello There";

If the character to be capitalised is not a valid letter, the character is not altered. For example;

upperCasePlace("H3LLO THERE M1 FRIEND", 2) // return "h3llo tHere m1 fRiend";

If n is less than zero, or greater than the length of each word, then the lower-cased string will be returned.

Finally if n has a decimal remainder, it is rounded down first. For example;

upperCasePlace("HELLO THERE", 1.2) // returns "Hello There";
upperCasePlace("HELLO THERE", 0.453) // returns "Hello There" because it is converted to 0, which is then treated as 1;

For this exercise, all test inputs will be of type string.

Hint: it may be worth first exploring how you can capture words in a string, before processing them with .toUpperCase() and .toLowerCase().

Good luck!
*/

//Write your solution below
function upperCasePlace(string, n) {
  string = string.toLowerCase();
  if (n < 0) {
    return string;
  }
  n = n < 1 ? 1 : n;
  return string
    .split(" ")
    .map((word) => {
      const replace = word.slice(n - 1, n).toUpperCase();
      word = [...word];
      word.splice(n - 1, 1, replace);
      word = word.join("");
      return word;
    })
    .join(" ");
}
