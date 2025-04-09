/* 
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

const firstLetterUpper = (word) => word.at(0).toUpperCase() + word.slice(1);

const singSong = (a, b) =>
  !b
    ? `I have ${/[aoiue]/i.test(a.at(0)) ? "an" : "a"} ${a}.`
    : a === b
    ? `I have two ${a}s.`
    : `Uhh! ${firstLetterUpper(a)}-${b}!`;
