// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// ANSWER:

const twiceAsOld = (d, s) => Math.abs(d - 2 * s)

// OR

const twiceAsOld = (d, s) => (d > 2 * s ? d - 2 * s : d < 2 * s ? 2 * s - d : 0)

// OR

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld > 2 * sonYearsOld) {
    return dadYearsOld - 2 * sonYearsOld
  } else if (dadYearsOld < 2 * sonYearsOld) {
    return 2 * sonYearsOld - dadYearsOld
  } else {
    return 0
  }
}

// 2023
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}
