/* 


I can't see them all, but I can hear them!
How many kookaburras are there?
Hint

The trick to counting kookaburras is to listen carefully

    The males sound like HaHaHa...

    The females sound like hahaha...

    And they always alternate male/female

Examples

    ha = female => 1
    Ha = male => 1
    Haha = male + female => 2
    haHa = female + male => 2
    hahahahaha = female => 1
    hahahahahaHaHaHa = female + male => 2
    HaHaHahahaHaHa = male + female + male => 3

^ Kata Note : No validation is necessary; only valid input will be passed :-)
*/

const kookaCounter = (laughing) => {
  let count = 0;
  let laugh = "";
  for (let i = 0; i < laughing.length; i += 2) {
    const nextLaugh = laughing.slice(i, i + 2);
    if (laugh !== nextLaugh) {
      count++;
    }
    laugh = nextLaugh;
  }
  return count;
};
