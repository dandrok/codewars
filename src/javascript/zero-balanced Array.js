/* 
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/

function ìsZeroBalanced(n) {
  let sum = 0;
  let balance = [];
  for (num of n) {
    sum += num;
    if (num !== 0) {
      balance.push(n.includes(num * -1));
    }
  }
  if (balance.length) {
    return sum === 0 && balance.every(Boolean);
  } else if (n.length) {
    return sum === 0;
  } else {
    return false;
  }
}
