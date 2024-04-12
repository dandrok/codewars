/* 
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
 */

const mapping = (l) => {
  return l.map((el) => {
    const half = Math.floor(el.length / 2)
    const checkForMiddle = el.length % 2 === 0 || el.length === 1

    return `${[...el.slice(0, half)].reverse().join('')}${
      checkForMiddle ? '' : el.substring(half, half + 1)
    }${[...el.slice(-half)].reverse().join('')}`
  })
}

function insideOut(x) {
  x = x.split(' ')
  return mapping(x).join(' ')
}
