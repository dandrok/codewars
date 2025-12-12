/* 
Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

Expected results:

spam(1);  // hue
spam(6);  // huehuehuehuehuehue
spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue
 */
const HUE = "hue";

const spam = (n) => HUE.repeat(n);

const spam = (n) => {
  let result = "";

  for (let i = 0; i < n; i++) {
    result += HUE;
  }
  return result;
};
