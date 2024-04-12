/*
Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

sortString("foos", "of")       => "oofs"
sortString("string", "gnirts") => "gnirts"
sortString("banana", "abn")    => "aaabnn"

To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.
 */
const arrToStr = (arr) => arr.join('')

function sortString(string, ordering) {
  ordering = [...ordering]
  string = [...string]

  const firstPart = string
    .filter((el) => ordering.includes(el))
    .sort((a, b) => ordering.indexOf(a) - ordering.indexOf(b))

  const secondPart = string.filter((el) => !ordering.includes(el))

  return arrToStr(firstPart) + arrToStr(secondPart)
}
