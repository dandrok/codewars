/* 
What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

The usage will be quite simple, like:

[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.
*/

Array.prototype.filter = function (func) {
  let result = [];

  for (num of this) {
    func(num) && result.push(num);
  }

  return result;
};
