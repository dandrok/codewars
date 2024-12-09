/* 
Task

After a long night (work, play, study) you find yourself sleeping on a bench in a park. As you wake up and try to figure out what happened you start counting trees.

You notice there are different tree sizes but there's always one size which is unbalanced. For example there are 2 size 2, 2 size 1 and 1 size 3. (then the size 3 is unbalanced)

Given an array representing different tree sizes. Which one is the unbalanced size.
Notes

There can be any number of sizes but one is always unbalanced
The unbalanced size is always one less than the other sizes
The array is not ordered (nor the trees)

Examples

For trees = [1,1,2,2,3], the result should be 3.

For trees = [2,2,2,56,56,56,8,8], the result should be 8.

For trees = [34,76,12,99,64,99,76,12,34], the result should be 64.
Input/Output

    [input] integer array trees

    Array representing different tree sizes

    [output] an integer

    The size of the missing tree.

*/

const findTheMissingTree = (trees) =>
  Number(
    Object.entries(
      trees.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {})
    )
      .sort(([_a, valA], [_b, valB]) => valA - valB)
      .at(0)[0]
  );
// First, we reduce the trees and create an object where the keys are the trees, and the values are their counts.
// Then, we use Object.entries to create an array of [key, value] pairs from the object.
// Next, we sort this entries array by value.
// Finally, we take the first element (the one with the lowest value).
// We return the key as a number, which is why we wrap everything in Number.
