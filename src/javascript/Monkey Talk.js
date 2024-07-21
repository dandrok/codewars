/* 
Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
*/
const monkeyTalk = (phrase) =>
  phrase
    .split(" ")
    .map((word, i) => {
      let monkeyWord = "";
      if (/^[aeiou]/i.test(word)) {
        monkeyWord = "Eek";
      } else {
        monkeyWord = "Ook";
      }
      return i === 0 ? monkeyWord : monkeyWord.toLowerCase();
    })
    .join(" ") + ".";
