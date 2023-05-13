/* 
Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

Go ahead and make one.

var someArray = [1, 2, 3];
someArray.remove(1);

This should remove the element on index 1 making someArray = [1, 3]

You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged.
 */
Array.prototype.remove = function (index) {
  if (typeof index !== 'number' || index < 0) return this
  const item = this.splice(index, 1)[0]
  return this.filter((el) => el !== item)
}
