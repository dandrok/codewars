// Given an array of integers, return the sum of every even number in it. 
//
// This is the shape of almost every array problem: visit each element once keep a running answer.
//
// example:
//
// ```
// sumEven([1,2,3,4]) => 6
// sumEven([1,3,5]) => 0
// sumEven([]) => 0
// ```
//

function sumEven(nums:number[]):number {
  return nums.reduce((acc, curr) => {
    if(curr % 2 === 0) {
      acc += curr
    }
    return acc
  }, 0)
}
