/* 
You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.
Examples

player_manager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
player_manager(nil) returns []
player_manager("") returns []

playerManager("John Doe, 8167238327, Jane Doe, 8163723827") returns [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
playerManager(null) returns []
playerManager("")   returns []

Have at thee!
*/

function playerManager(players) {
  if (!players) return [];
  players = players.split(", ");
  const newArr = [];
  for (let i = 0; i < players.length; i += 2) {
    newArr.push(players.slice(i, i + 2));
  }

  return newArr.reduce((acc, [player, contact]) => {
    acc.push({ player, contact: Number(contact) });
    return acc;
  }, []);
}
