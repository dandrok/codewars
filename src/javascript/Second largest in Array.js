/* 
Find and return second largest unique number in given Array.

Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.
Examples

secondLargest([1, -2, 3]) = 1;
secondLargest([5, 5, 4]) = 4;
secondLargest([2, '3', 4]) = 3;

Should return

// 1. Passed value not an Array:
secondLargest("1 2 3") = undefined;

// 2. There is no second largest:
secondLargest([2, 2, 2]) = undefined;

// 3. Ignore everything except:
//   * numbers
//   * not-NaN strings:
secondLargest(['-1', 2, null, false]) = -1;

Input range

    Numbers are safe Integers.
    Not-NaN strings represent safe Integers.

*/
function secondLargest(array) {
  if (typeof array === "string") return undefined;

  const arrPrep = [...new Set(array)]
    .map((el) => parseInt(el))
    .filter((num) => !isNaN(num));

  return arrPrep.sort((a, b) => b - a).at(1);
}
