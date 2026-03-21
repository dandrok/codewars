// Write a function called analyzeNumber(n) that takes a single integer and evaluates its properties.
//
// Your function must return an object containing the following three keys:
//
//     type: A string indicating if the number is "even" or "odd".
//
//     double: An integer representing the number multiplied by 2.
//
//     sign: A string indicating if the number is "positive", "negative", or "zero".
//
// Example:
//
// analyzeNumber(5) 
// returns: { type: "odd", double: 10, sign: "positive" }

const analyzeNumber = (n) => {
  const type = n % 2 === 0 ? "even" : 'odd';
  const double = n * 2
  const sign = n === 0 ? "zero" : n > 0 ? "positive" : "negative"

  return { type, double, sign };
}
