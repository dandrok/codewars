/* 
Example:

Link: www.whatsup.com?name=huy&lastname=dang

Query: ?name=huy&lastname=dang

Write a function that return an object that contains all the datas in the query which are seperated by '&'

Example: www.whatsup.com?name=Huy&lastname=Dang

-> Query: ?name=Huy&lastname=Dang

-> Should return: {name: 'Huy', lastname: 'Dang'}

p/s: - No case sensitive, easy, keep it the way it is.
*/
const solution = (str) => {
  const urls = new URL(`https://${str}`)
  const arrOfObj = urls.searchParams
    .toString()
    .split('&')
    .map((el) => {
      const ar = el.split('=')
      return { [ar[0]]: decodeURIComponent(ar[1]) }
    })
  return Object.assign({}, ...arrOfObj)
}
