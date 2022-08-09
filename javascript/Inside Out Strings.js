/* 
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
 */

function insideOut(x) {
  return x
    .split(' ')
    .map((el) => {
      if (el.length % 2 === 0 || el.length === 1) {
        return `${[...el.slice(0, Math.floor(el.length / 2))]
          .reverse()
          .join('')}${[...el.slice(-Math.floor(el.length / 2))]
          .reverse()
          .join('')}`
      } else {
        return `${[...el.slice(0, Math.floor(el.length / 2))]
          .reverse()
          .join('')}${el.substring(
          Math.floor(el.length / 2),
          Math.floor(el.length / 2) + 1
        )}${[...el.slice(-Math.floor(el.length / 2))].reverse().join('')}`
      }
    })
    .join(' ')
}
