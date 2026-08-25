// Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. 
// You may assume each input has exactly one solution, and you may not use the same element twice.
//
// Example: nums = [2, 7, 11, 15], target = 9 → output [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
//
//
// here is the naive approche:
// we could simply do inner loop i, j 
// and itereateover our nums array
// the time complexity for this solution is big O(n^2)
// becouse we have inner loop and we iteratetwice over the smae loop
// the SPACE complexity is pretty impressive big O(1)
// becouse we have simple return arrayw with alwasy two values
function twoSum(nums: number[], target: number): number[] {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
};

// here is a trade off solution
// here is why, we levereage hashMap to memorize the values
// becouse of that we get rid of nested loops,
// by doing that we increase the time complexity to become big O(n)
// becouse we itarete over our nums array only once.
// but the cost is in the space (memory) complexity,
// right now our SPACE complexity is also O(n),
// becouse we set the hashMap n times in the memory
function twoSum(nums: number[], target: number): number[] {
  let hashMap = new Map()

  for(let i = 0; i < nums.length; i++) {
    if(hashMap.has(target - nums[i])) {
      return [hashMap.get(target - nums[i]), i]
    } else {
      hashMap.set(nums[i], i)
    }
  }

  return []
};


