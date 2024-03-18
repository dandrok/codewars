/*
Write a function that returns the last digit of rightmost integer in the given array. Be careful - there might be numbers that aren't integers in the arrays!

[1,2,3] --> 3
["a", 45, "b", 67, "c"] --> 7
[-17, -4, -12] --> 2
["g", 12, "h", 4.5, "i"] --> 2
["a", "b", "c"] --> "No integers found."
*/

function lastDigit(arr) {
  const filteredList = arr.filter(
    (el) => typeof el === "number" && el % 1 === 0
  );
  return filteredList.length
    ? Number(filteredList.join("").slice(-1))
    : "No integers found.";
}
