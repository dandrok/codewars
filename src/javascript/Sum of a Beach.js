/* 
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
"WAtErSlIde"                    ==>  1
"GolDeNSanDyWateRyBeaChSuNN"    ==>  3
"gOfIshsunesunFiSh"             ==>  4
"cItYTowNcARShoW"               ==>  0
*/

const sumOfABeach = (beach) =>
  beach.match(/sand|water|fish|sun/gi)?.length || 0;
