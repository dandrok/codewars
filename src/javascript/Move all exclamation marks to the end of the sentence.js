/* 
Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
 */

const remove = (s) =>
  s.replace(/!/gi, '') + '!'.repeat((s.match(/!/gi) || []).length)

// OR

function remove(s) {
  let count = (s.match(/!/gi) || []).length
  let remo = s.replace(/!/gi, '')
  let exc = '!'
  return remo + exc.repeat(count)
}
