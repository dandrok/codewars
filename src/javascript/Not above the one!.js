/* 
Task

Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

Return a nested array or a tuple depending on the language:

    The first sequence being only the 1s and 0s from the original sequence.
    The second sequence being the indexes of the elements greater than 1 in the original sequence.

Examples

[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]

Please upvote and enjoy!
*/

function binaryCleaner(arr) {
  let notAboveOne = [];
  let greaterThanOne = [];
  arr.forEach((num, i) =>
    num <= 1 ? notAboveOne.push(num) : greaterThanOne.push(i)
  );
  return [notAboveOne, greaterThanOne];
}

function binaryCleaner(arr) {
  const [notAboveOne, aboveOne] = arr.reduce(
    (acc, curr, i) => {
      const [notAbove, above] = acc;
      if (curr <= 1) {
        notAbove.push(curr);
      } else {
        above.push(i);
      }
      return acc;
    },
    [[], []]
  );
  return [notAboveOne, aboveOne];
}
