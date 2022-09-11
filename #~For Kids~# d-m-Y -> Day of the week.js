/* 
#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String)
and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!
 */

function dayOfTheWeek(date) {
  const d = date.split('/')
  const inputDate = new Date(`${d[1]}/${d[0]}/${d[2]}`)
  return inputDate.toLocaleDateString('en-US', { weekday: 'long' })
}
