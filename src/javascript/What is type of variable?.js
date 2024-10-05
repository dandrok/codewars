/* 
Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'
*/

function type(value) {
  const val = value;

  if (val instanceof Array) {
    return "array";
  }
  if (val instanceof Date) {
    return "date";
  }
  if (val instanceof Object) {
    return "object";
  }
  if (typeof val === "string") {
    return "string";
  }
  if (typeof val === "number") {
    return "number";
  }
  if (val === null) {
    return "null";
  }
  if (val === undefined) {
    return "undefined";
  }
}
