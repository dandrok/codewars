/* 
Task

Your task is to find the smallest number which is evenly divided by all numbers between m and n (both inclusive).
Example

For m = 1, n = 2, the output should be 2.

For m = 2, n = 3, the output should be 6.

For m = 3, n = 2, the output should be 6 too.

For m = 1, n = 10, the output should be 2520.
Input/Output

    [input] integer m

1 ≤ m ≤ 25

    [input] integer n

1 ≤ n ≤ 25

    [output] an integer

*/

function mnLCM(m, n) {
  let result;
  const max = Math.max(m, n);
  const min = Math.min(m, n);
  const arrOfNums = Array.from({ length: max + 1 - min }, (val, i) => i + min);

  for (let j = 2; j < Infinity; j++) {
    console.log(j);
    const everyOk = arrOfNums.every((num) => j % num === 0);
    if (everyOk) {
      result = j;
      break;
    }
  }
  return result;
}

// updated solution

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function mnLCM(m, n) {
  const min = Math.min(m, n);
  const max = Math.max(m, n);

  const computeLCM = (start, end) => {
    if (start === end) return start;
    return lcm(start, computeLCM(start + 1, end));
  };

  return computeLCM(min, max);
}
