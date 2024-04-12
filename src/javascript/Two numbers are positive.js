/* 
Task:

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.
Examples:

twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false
 */
function twoArePositive(...nums) {
  nums = nums.sort((a, b) => b - a)
  return nums[0] > 0 && nums[1] > 0 && nums[2] <= 0
}
