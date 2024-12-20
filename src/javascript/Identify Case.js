/* 
We’ve all seen katas that ask for conversion from snake-case to camel-case, from camel-case to snake-case, or from camel-case to kebab-case — the possibilities are endless.

But if we don’t know the case our inputs are in, these are not very helpful.
Task:

So the task here is to implement a function (called id in Ruby/Crystal/JavaScript/CoffeeScript and case_id in Python/C) that takes a string, c_str, and returns a string with the case the input is in. The possible case types are “kebab”, “camel”, and ”snake”. If none of the cases match with the input, or if there are no 'spaces' in the input (for example in snake case, spaces would be '_'s), return “none”. Inputs will only have letters (no numbers or special characters).
Some definitions

Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores
Examples:

id(“hello-world”) #=> “kebab”
id(“hello-to-the-world”) #=> “kebab”
id(“helloWorld”) #=> “camel”
id(“helloToTheWorld”) #=> “camel”
id(“hello_world”) #=> “snake”
id(“hello_to_the_world”) #=> “snake”
id(“hello__world”) #=> “none”
id(“hello_World”) #=> “none”
id(“helloworld”) #=> “none”
id(“hello-World”) #=> “none”
*/

function id(c_str) {
  if (
    c_str.includes("__") || // Double underscores
    c_str.includes("--") || // Double hyphens
    /[-_][A-Z]/.test(c_str) || // Dash or underscore followed by uppercase
    (/_/.test(c_str) && /[A-Z]/.test(c_str)) // Underscores mixed with uppercase letters
  ) {
    return "none";
  }

  // Check specific naming conventions
  if (/^([a-z]+(-[a-z]+)+)$/.test(c_str)) {
    return "kebab"; // Valid kebab-case
  }

  if (/^[a-z]+([A-Z][a-z]*)+$/.test(c_str)) {
    return "camel"; // Valid camelCase
  }

  if (/^([a-z]+(_[a-z]+)+)$/.test(c_str)) {
    return "snake"; // Valid snake_case
  }
  return "none";
}
