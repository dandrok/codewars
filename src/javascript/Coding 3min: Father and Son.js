/* 
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version
Task:

Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)
*/

const sc = (str) =>
  [...str]
    .filter(
      (letter, i, arr) =>
        (letter === letter.toLowerCase() &&
          arr.includes(letter.toUpperCase())) ||
        (letter === letter.toUpperCase() && arr.includes(letter.toLowerCase()))
    )
    .join("");
