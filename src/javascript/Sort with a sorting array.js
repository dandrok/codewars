/* 
Sort an array according to the indices in another array.
It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

    sort(['x', 'y', 'z'], [1, 2, 0]) => ['z', 'x', 'y']
    
    sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

const sort = (initialArray, sortingArray) =>
  initialArray
    .reduce((acc, curr, i) => {
      acc.push([curr, sortingArray[i]]);
      return acc;
    }, [])
    .sort((a, b) => a[1] - b[1])
    .map(([el]) => el);
