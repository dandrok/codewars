/* 
Character counts

The object is to count the number of occurances of a specified character (or set of characters) in a string.
Instructions

Complete the placeholder function characterCount.

    it should return the number of times a single character appears in the string, or
    if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
    see the unit tests provided for a more comprehensive definition

NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
*/

String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return undefined;
  const strVal = this.valueOf();
  const result = [...charsToCount].reduce((acc, curr) => {
    const num = [...strVal].filter((letter) => letter === curr).length || 0;
    acc.push(num);
    return acc;
  }, []);

  return charsToCount.length === 1 ? Number(result.join("")) : result;
};
