/* 
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/

const TRIANGLE_ANGLE_SUM = 180;

export const otherAngle = (a: number, b: number): number => {
  return TRIANGLE_ANGLE_SUM - (a + b);
};
