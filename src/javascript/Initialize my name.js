/* 
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).
Examples

'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

 */
function initializeNames(name) {
  const nameArray = name.split(' ')
  const arrayLength = nameArray.length

  const result = []

  for (let i = 0; i < arrayLength; i++) {
    i === 0 || i === arrayLength - 1
      ? result.push(nameArray[i])
      : result.push(`${nameArray[i].at()}.`)
  }
  return result.join(' ')
  // return nameArray
  //   .map((el, i) => (i === 0 || i === arrayLength - 1 ? el : `${el.at()}.`))
  //   .join(' ')
}
