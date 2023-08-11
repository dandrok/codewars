/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive

 */
const splitInParts = (s, partLength) => {
  const x = []
  for (let i = 0; i < s.length / partLength; i++) {
    x.push(s.slice(i * partLength, (i + 1) * partLength))
  }
  return x.join(' ')
}
