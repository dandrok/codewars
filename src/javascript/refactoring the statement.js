/* 
We want to convert numbers in a given string to specific characters according to ASCII code with some manipulation on it. This statement 'str8ng is he17e' should converted to 'string is here', its just converting these numbers to ASCII code then to a char according to it.

So you should understand how ASCII code of chars are sorted, and if its begin with 'a' as 0, next one is 'b' which is 1 in someway.

each word contains just one character to convert the number to it.

Example: if given string is '0pple' that will return 'apple'.
*/

const refactoryString = (str) =>
  str
    .split(" ")
    .map((word) =>
      word.match(/\d+/g)
        ? word.replace(/\d+/g, (match) =>
            String.fromCharCode(97 + Number(match))
          )
        : word
    )
    .join(" ");
