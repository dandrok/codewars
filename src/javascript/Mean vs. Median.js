/* 
Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

    'mean' - in case mean value is larger than median value
    'median' - in case median value is larger than mean value
    'same' - in case both mean and median share the same value

Reminder: Median

Array will always be valid (odd-length >= 3)
*/
function meanVsMedian(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  const len = numbers.length;
  const median = numbers.slice(len / 2, len / 2 + 1);
  const mean = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

  return mean > median ? "mean" : median > mean ? "median" : "same";
}
