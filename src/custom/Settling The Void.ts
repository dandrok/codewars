// Move every 0 in the array to the end, keeping the relative order of the non-zero numbers. Return the array.
//
// The interesting version is in place - no second array. This is the first taste of the write-pointer technique you willuse constantly.
//
// Example:
// moveZeroes([0, 1, 0, 3, 123]) -> [1, 3, 123, 0, 0]
// moveZeroes([0, 0]) -> [0, 0]



function moveZeroes(nums) {
  // Try it with one write pointer and no extra array.
  

  // naive solution 
  return nums.sort((a,b) => b === 0 ?  -1 : 0)
}
