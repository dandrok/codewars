/* 
Sum and Length
In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...


For example :
sumLength([-1,2,3,4,0,1,0,-2,0,-3])
return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
*/

function sumLength(arr) {
  const sum = arr.reduce((acc, curr) => {
    if (curr > 0) {
      return acc + curr;
    } else {
      return acc + 0;
    }
  }, 0);
  const negatives = arr.filter((num) => num < 0).length;
  const zeros = Math.round(arr.filter((num) => num === 0).length / 2);
  return `${sum} ${negatives + zeros}`;
}
