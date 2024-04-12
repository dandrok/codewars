/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
 */

const solution = (s) => (s + '_').match(/.{2}/g) || []

//OR

function solution(str) {
  if (str == '') {
    return []
  } else {
    let ad = str + '_'
    let dn = ad.match(/.{1,2}/g)
    let spl = str.match(/.{1,2}/g)
    let chec = spl[spl.length - 1].length < 2 ? dn : spl
    return chec
  }
}
