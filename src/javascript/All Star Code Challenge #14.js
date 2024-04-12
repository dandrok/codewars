/* 
This Kata is intended as a small challenge for my students

All Star Code Challenge #14

Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function called median() that takes an array of integers as an argument and returns the median of those integers.

Note:
The sorting step is vital

median([33,99,100,30,29,50]) // =>  41.5
median([3,2,1]) // => 2
 */

function median(a) {
  a = a.sort((a, b) => a - b)
  if (a.length % 2 == 0) {
    let s = a.length / 2 + 1
    let m = a.slice(0, s)
    let l = m.slice(-2)
    return l.reduce((a, b) => a + b) / 2
  } else {
    let mid = (a.length + 1) / 2
    let slic = a.slice(0, mid)
    return Number(slic.slice(-1))
  }
}
