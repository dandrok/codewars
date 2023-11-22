/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
 */
function dashatize(num) {
  num = Math.abs(num)
  if (isNaN(num)) {
    return 'NaN'
  }

  const strNum = String(num)
  let result = ''
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] % 2 === 0) {
      result += strNum[i]
    } else if (result.charAt(result.length - 1) === '-' || i === 0) {
      result += `${strNum[i]}-`
    } else {
      result += `-${strNum[i]}-`
    }
  }
  return /.*-$/.test(result) ? result.slice(0, -1) : result
}
