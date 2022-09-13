/* 
Task
Coding in function countAnimals. function accept two parameters: animals,
a string contains some animals; count, an array list of which animals we should count.
The result should be a number array.

Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]
 */

const countAnimals = (animals, count) =>
  count.map((el) => {
    const reg = new RegExp(el, 'g')
    const match = animals.match(reg)
    return match == null ? 0 : match.length
  })

// OR
// const countAnimals = (animals, count) =>
//   count.map((el) => (animals.match(new RegExp(el, 'g')) || []).length)
