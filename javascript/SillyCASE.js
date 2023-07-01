/* 
Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased)  

 */
function sillycase(silly) {
  const half = Math.ceil(silly.length / 2)
  silly = silly.toLowerCase()
  return `${silly.slice(0, half)}${silly.slice(half).toUpperCase()}`
}
