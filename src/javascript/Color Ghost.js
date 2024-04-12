/* 
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
 */

class Ghost {
  constructor() {
    const colors = ['white', 'yellow', 'purple', 'red']
    const randomIndex = Math.floor(Math.random() * colors.length)
    this.color = colors[randomIndex]
  }
}

// TEST
const chai = require('chai')
const assert = chai.assert

describe('Solution', function () {
  it('should test for something', function () {
    const ghost = new Ghost()
    assert.include(['white', 'yellow', 'purple', 'red'], ghost.color)
  })
})
