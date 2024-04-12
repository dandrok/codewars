/* 
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
 */

const evalObject = (value) => {
  switch (value.operation) {
    case '+':
      return value.a + value.b
    case '-':
      return value.a - value.b
    case '/':
      return value.a / value.b
    case '*':
      return value.a * value.b
    case '%':
      return value.a % value.b
    case '^':
      return Math.pow(value.a, value.b)
  }
}
