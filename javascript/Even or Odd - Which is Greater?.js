/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

    If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

    If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

    If the total of both even and odd numbers are identical return: "Even and Odd are the same"

 */
function evenOrOdd(str) {
  let even = 0
  let odd = 0

  return [...str].reduce((acc, curr) => {
    curr % 2 === 0 ? (odd += +curr) : (even += +curr)
    return odd > even
      ? (acc = 'Even is greater than Odd')
      : odd < even
      ? (acc = 'Odd is greater than Even')
      : (acc = 'Even and Odd are the same')
  }, '')
}
