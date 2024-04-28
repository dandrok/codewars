/* 
You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

Return:

    0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
    1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
    n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

Examples

"1 2 3 4"  ==>  return 0, because the sequence is complete

"1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

"2 1 3 a"  ==>  return 1, because it contains a non numerical character

"1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

"1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

*/
function findMissingNumber(sequence) {
  if (/[a-z]/gi.test(sequence)) return 1;
  const arrOfNums = sequence.split(" ");
  if (!sequence.length) return 0;

  let result = 0;
  for (let i = 0; i < arrOfNums.length; i++) {
    const first = Number(arrOfNums[i]);
    const second = Number(arrOfNums[i + 1]);

    if (arrOfNums[0] !== "1") {
      result = 1;
      break;
    }
    if (first + 1 !== second && arrOfNums.length !== i + 1) {
      result = first + 1;
      break;
    } else {
      result = 0;
    }
  }
  return result;
}
