/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

 */
// complete the function
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}
