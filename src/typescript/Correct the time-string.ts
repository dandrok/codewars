/* 
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
 */

export function timeCorrect(timeString: string | null): string | null {
  if (timeString === null) return null
  if (timeString === '') return ''

  const [hour, minute, second] = timeString.split(':').map(Number)
  const date = new Date()
  date.setHours(hour % 24)
  date.setMinutes(minute)
  date.setSeconds(second)

  if (date.toLocaleTimeString() === 'Invalid Date') return null

  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
