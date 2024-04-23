/* 
Make me slow! Calling makeMeSlow() should take at least 7 seconds.
*/

function makeMeSlow() {
  let startTime = Date.now();
  while (Date.now() - startTime < 7000) {}
}
