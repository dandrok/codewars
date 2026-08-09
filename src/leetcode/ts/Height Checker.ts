//
// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.
//
// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
//
// Return the number of indices where heights[i] != expected[i].
//
//
//
// Example 1:
//
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.
//
// Example 2:
//
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.
//
// Example 3:
//
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.
//
//
//
// Constraints:
//
//     1 <= heights.length <= 100
//     1 <= heights[i] <= 100
//
//
function heightChecker(heights: number[]): number {
    // example of naive approche with time complexity O(n log n)
    // we first clone the heights array to then sort it 
    // this operation has O(n lon n) complexity
    // then we create a loop and iterate over each value from sort and oryginal height arrays - this loop cost us O(n) time
    // overall space complexity is O(n) beouse we crate a result variable and we simply increse the number and becouse of that we have fixed memory space complexity
    const sorted = [...heights].sort((a,b) => a - b)
    console.log(sorted)
    console.log(heights)
    let result = 0;
    for(let i = 0; i < heights.length; i++) {
        if(sorted[i] !== heights[i]) {
            result++
        }
    }
    return result
    // there is place for improvement
    // we can definitely get rid of .sort() method
    // counting sort may be way better solution with O(n) time complexity
};
