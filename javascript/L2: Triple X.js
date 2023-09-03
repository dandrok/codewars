/*
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false

Note :

    capital X's do not count as an occurrence of "x".
    if there are no "x"'s then return false
 */
function tripleX(str) {
  const firstXIndex = str.indexOf('x')
  return str.at(firstXIndex + 1) === 'x' && str.at(firstXIndex + 2) === 'x'
}
