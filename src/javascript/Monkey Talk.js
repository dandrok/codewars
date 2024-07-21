/* 
Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
*/
function monkeyTalk(phrase) {
  return (
    phrase
      .split(" ")
      .map((word, i) => {
        const firstIndex = i === 0;
        let monkeyWord = "";
        if (/^[aeiou]/i.test(word)) {
          monkeyWord = "Eek";
        } else {
          monkeyWord = "Ook";
        }
        return firstIndex ? monkeyWord : monkeyWord.toLowerCase();
      })
      .join(" ") + "."
  );
}
