/*
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items.
If any of these items are "Fire" you must spring into action.
Change any instance of "Fire" into "~~". Then return the string.

Go to work!
 */
function fireFight(s) {
  //   return s.replaceAll('Fire', '~~')
  s = s.split(' ')
  let arr = []
  for (let i = 0; s.length > i; i++) {
    s[i] === 'Fire' ? arr.push('~~') : arr.push(s[i])
  }
  return arr.join(' ')
}
