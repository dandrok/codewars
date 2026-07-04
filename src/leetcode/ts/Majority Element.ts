// Given an array nums of size n, return the majority element.
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
//
//
// Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
//
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
//
//
//
// Constraints:
//
//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109
//     The input is generated such that a majority element will exist in the array.
//
//
// Follow-up: Could you solve the problem in linear time and in O(1) space?


// TODO: WIP - optimize to 0(n) or 0(1)
function majorityElement(nums: number[]): number {
  const uniqueEl = [...new Set(nums)]
  let longestLength = 0
  let result = 0
  uniqueEl.forEach((el) => {
    const filterLength = nums.filter(num => num === el).length
    if (filterLength > longestLength) {
      longestLength = filterLength
      result = el
    }

  })
  return result
};
