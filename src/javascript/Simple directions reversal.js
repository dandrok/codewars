/* 
In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
More examples in test cases.

Good luck!
*/

// ugly as f.k - i know it is only a draft
export function solve(array) {
  const reversedArray = [...array].reverse();
  const modifiedDirections = reversedArray.map((el) => {
    const [direction] = el.split(" on ");
    if (direction === "Left") return "Right";
    if (direction === "Right") return "Left";
    return direction;
  });

  const fixedDirections = [
    ...modifiedDirections.slice(-1),
    ...modifiedDirections.slice(0, -1),
  ];

  return reversedArray.map((el, i) => {
    const [, street] = el.split(" on ");
    return `${fixedDirections[i]} on ${street}`;
  });
}
