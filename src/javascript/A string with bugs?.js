/* 
Using only the regular expression you need to check our string for bugs. If there are no bugs, it should return true, and if there are bugs then it should return false.
 If our string contains a substring 'bug' - test with RegExp should return false. Otherwise true.

Examples:

var reg = //;

reg.test('good string')                         =>  true
reg.test('string with bug')                     =>  false
reg.test('Can we publish a string with bugs?')  =>  false
*/

const reg = /^(?!.*bug).*$/;
