/* 
Mirror - Mirror

Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -

Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx

"You cannot change the original object, because if you did that the reflection would change."
 */
const mirror = (obj) => {
  const keys = Object.keys(obj)
  const values = keys.map((el) => [...el].reverse().join(''))
  const arrWithObj = keys.map((key, i) => ({ [key]: values[i] }))
  return Object.assign({}, ...arrWithObj)
}
// hello world
