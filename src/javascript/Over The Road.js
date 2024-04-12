/* 
Task
You've just moved into a perfectly straight street with exactly n identical houses
on either side of the road. Naturally, you would like to find out the house number
of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
  you
Evens increase on the right; odds decrease on the left.
House numbers start at 1 and increase without gaps.
When n = 3, 1 is opposite 6,3 opposite 4, and 5 opposite 2.

Example (address, n --> output)
Given your house number address and length of street n,
give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
Note about errors
If you are timing out, running out of memory, or get any kind of "error", read on.
Both n and address could get upto 500 billion with over 200 random tests.
If you try to store the addresses of 500 billion houses in a list
then you will run out of memory and the tests will crash.
This is not a kata problem so please don't post an issue.
Similarly if the tests don't complete within 12 seconds then you also fail.

To solve this, you need to think of a way to do the kata without
making massive lists or huge for loops. Read the discourse for some inspiration :)
 */

// function overTheRoad(address, n){
//   let odd = []
//   let even = []
//   const maxNum = n * 2
//   const arrOfAddresses = Array.from({length: maxNum}, (_, i) => i + 1)
//   const filterArr = arrOfAddresses.map(el => el % 2 == 0 ? even.push(el) : odd.push(el))
//   const oddIndex = odd.indexOf(address)
//   const evenIndex = even.indexOf(address)
//   return oddIndex == -1  ? odd.reverse()[evenIndex] : even.reverse()[oddIndex]
// }

let oddHouse = (r, n) => 1 + (r - 1) * 2
let evenHouse = (r, n) => 2 * n - (r - 1) * 2
let oddRow = (h, n) => (h + 1) / 2
let evenRow = (h, n) => (2 * n + 2 - h) / 2

const overTheRoad = (h, n) =>
  0 == n % 2 ? oddHouse(evenRow(h, n), n) : evenHouse(oddRow(h, n), n)

/*
  amazing solution:
    const overTheRoad = (address, n) => (n*2 +1) - address
*/
