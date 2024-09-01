/* You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4

Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

function findMissingNumbers(arr){
    let newArr = []
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      if(!arr.includes(i))
      newArr.push(i)
    }
    return newArr
  }