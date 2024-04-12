/* 
For a given nonempty str find a minimum substring and the maximum number of this str, such that the entire str is equal to repeated times.

The input string consists of lowercase latin letters.
substring does not have repetitive letters.

Example:

str = "zyzyzy";
// should return ['zy',3]
 */

const repSubs = (str) => {
  const set = [...new Set(str)].join('')
  const times = str.length / set.length
  return [set, times]
}
