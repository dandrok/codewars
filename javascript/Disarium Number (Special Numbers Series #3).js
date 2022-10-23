/* 
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series

Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"

Explanation:
Since , 8¹ + 9² = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 5¹ + 6² + 4³ = 105 != 564 , thus output is "Not !!"
 */

const disariumNumber = (n) => {
  const numbers = [...String(n)]
  const checkPower = numbers.map((el, i) => Math.pow(Number(el), i + 1))
  const sumOfPowerNumbers = checkPower.reduce((a, b) => a + b)
  return n === sumOfPowerNumbers ? 'Disarium !!' : 'Not !!'
}
