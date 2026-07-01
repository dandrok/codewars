//
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
//
//
// Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
//
// Constraints:
//
//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters if it is non-empty.
//
function longestCommonPrefix(strs: string[]): string {
  const [firstWord] = strs;
  for (let i = 0; i < firstWord.length; i++) {

    for (let j = 0; j < strs.length; j++) {
      console.log(firstWord[i], strs[j][i])
      if (firstWord[i] !== strs[j][i]) {
        return firstWord.slice(0, i)
      }
    }
  }
  return firstWord
}
