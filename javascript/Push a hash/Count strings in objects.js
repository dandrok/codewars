/* 
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

 */

// I know...
function strCount(obj) {
  let arr = []
  Object.values(obj)
    .flat()
    .forEach((el) => {
      typeof el === 'object' && el !== null && arr.push(Object.values(el))
      typeof el === 'string' && arr.push(el)
    })
  return arr.flat(2).filter((el) => typeof el === 'string').length
}
