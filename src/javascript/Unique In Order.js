/* 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

const uniqueInOrder = (iterable) => {
  if (typeof iterable === 'string') {
    return [...iterable.replace(/[^\w\s]|(.)(?=\1)/g, '')]
  }
  if (typeof iterable[0] === 'number') {
    return [...iterable.join('').replace(/[^\w\s]|(.)(?=\1)/g, '')].map(Number)
  }
  return [...iterable.join('').replace(/[^\w\s]|(.)(?=\1)/g, '')]
}

// clever
const uniqueInOrder2 = (iterable) =>
  [...iterable].filter((el, index, arr) => el !== arr[index - 1])
