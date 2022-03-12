/* 
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
 */

const whatCentury = (year) => {
  const split = year.match(/.{2}/g)
  const solution = split[1] == 0 ? +split[0] : +split[0] + 1
  const j = solution % 10
  const k = solution % 100
  if (j == 1 && k != 11) return solution + 'st'
  if (j == 2 && k != 12) return solution + 'nd'
  if (j == 3 && k != 13) return solution + 'rd'
  return solution + 'th'
}
