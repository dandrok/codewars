/* 
Your task is to create two functions :

One function to turn an object into an array
One function to turn an array into an object
Examples :

arrayToObject([1, 1, 2, 2, 3, 3]) => {1:2, 2:2, 3:2}

objectToArray({2:5, 99:1}) => [2, 2, 2, 2, 2, 99]
arrayToObject receives an array. It must return an object, where the key is the values found in the array and the value is the number of times it was found({value:times_found})

objectToArray receives an object. It must return an array. Each value is repeated as many times as each key of the object. When the key of the object is a number, the values of the array must be numbers. (Ex : {1:5} must return [1,1,1,1,1] not ['1','1','1','1','1'] )

You must not change the value given in input. 
*/

function arrayToObject(arr) {
  let obj = {};
  arr.forEach((el) => (obj[el] = (obj[el] || 0) + 1));
  return obj;
}

function objectToArray(obj) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) =>
      (acc = [
        ...acc,
        ...new Array(value).fill(isNaN(key) ? key : Number(key)),
      ]),
    []
  );
}
