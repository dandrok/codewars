/*
Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.
*/
function describeList(x) {
  return (!x.length && 'empty') || (x.length === 1 ? 'singleton' : 'longer')
}
