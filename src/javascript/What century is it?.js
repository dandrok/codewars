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
  const century = split[1] == 0 ? +split[0] : +split[0] + 1
  const j = century % 10
  const k = century % 100
  if (j == 1 && k != 11) return century + 'st'
  if (j == 2 && k != 12) return century + 'nd'
  if (j == 3 && k != 13) return century + 'rd'
  return century + 'th'
}

const whatCentury2 = (year) => {
  const century = Math.ceil(year / 100)
  return (
    century +
    (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th')
  )
}
