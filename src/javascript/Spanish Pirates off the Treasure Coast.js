/* 
The Spanish King wants to bring gold back to the empire. The first step is finding pirates and the gold in the new world.
*/

function secretMap(sp) {
  const { pirate, gold } = sp.reduce(
    (acc, curr) => {
      if (curr.includes("pirate")) {
        acc = { ...acc, pirate: acc.pirate + 1 };
      } else if (curr.includes("pile_of_gold")) {
        acc = { ...acc, gold: acc.gold + 1 };
      }

      return acc;
    },
    { pirate: 0, gold: 0 }
  );
  return `count of pirates: ${pirate} and the count of gold piles: ${gold}`;
}
