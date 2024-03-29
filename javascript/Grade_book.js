// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90   <= score <= 100	    'A'
// 80   <= score <  90	    'B'
// 70   <= score <  80	    'C'
// 60   <= score <  70	    'D'
// 0    <= score <  60	    'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// ANSWER:

const getGrade = (...s) => {
  let score = [...s]
  let avg = score.reduce((a, b) => a + b) / score.length
  return avg >= 90
    ? 'A'
    : avg >= 80
    ? 'B'
    : avg >= 70
    ? 'C'
    : avg >= 60
    ? 'D'
    : 'F'
}

// you can add as many scores as you want !
