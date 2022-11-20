/* 
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
 */

const distanceBetweenPoints = (a, b) => {
  const result = Math.sqrt(Math.pow(a.y - b.y, 2) + Math.pow(a.x - b.x, 2))
  return Number(result.toFixed(6))
}

/* best solution */
const distanceBetweenPoints2 = (a, b) => Math.hypot(a.x - b.x, a.y - b.y)
