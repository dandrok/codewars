/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
Examples

"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
 */

const calcSum = (str) => {
  return [...str.replaceAll('!', 2).replaceAll('?', 3)].reduce(
    (a, b) => a + Number(b),
    0
  )
}

function balance(left, right) {
  return calcSum(left) > calcSum(right)
    ? 'Left'
    : calcSum(left) < calcSum(right)
    ? 'Right'
    : 'Balance'
}
