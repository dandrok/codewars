/* 
By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

2

Swift, Ruby and Crystal: nil
Haskell: Nothing
Python, Rust, Scala, Lambda Calculus: None
Julia: nothing
Nim: none(int) (See options)
C++: std::nullopt 
*/

type Result = number | null;
export function firstNonConsecutive(arr: number[]): Result {
  let result: Result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      result = arr[i + 1];
      break;
    }
  }
  return result;
}
