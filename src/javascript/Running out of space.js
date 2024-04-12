/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

function spacey(array) {
  let str = ''
  return array.reduce((acc, curr) => {
    str += curr
    acc.push(str)
    return acc
  }, [])

  // let newSpace = []

  // array.forEach((el) => {
  //   str += el
  //   newSpace.push(str)
  // })
  // return newSpace

  // for (let i = 0; i < array.length; i++) {
  //   str += array[i]
  //   newSpace.push(str)
  // }
  // return newSpace
}
