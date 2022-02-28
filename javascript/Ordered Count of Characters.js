/* 
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

 */

const orderedCount = (text) =>
  [...new Set(text)].map((l) => [l, text.split(l).length - 1])
