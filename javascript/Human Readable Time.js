/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
const addZero = (num) => {
  num = num.toString()
  return num.length < 2 ? `0${num}` : num
}

function humanReadable(seconds) {
  const sec = addZero(seconds % 60)
  const min = addZero(Math.floor((seconds / 60) % 60))
  const hour = addZero(Math.floor((seconds / 3600) % 100))

  return `${hour}:${min}:${sec}`
}
