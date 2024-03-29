/* 
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
 */

const periodIsLate = (last, today, cycleLength) =>
  (today - last) / (1000 * 60 * 60 * 24) > cycleLength

// 2023
const ONE_DAY_IN_MS = 86400000

function periodIsLate(last, today, cycleLength) {
  const diffInMs = today - last
  return diffInMs / ONE_DAY_IN_MS > cycleLength
}
