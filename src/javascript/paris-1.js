//paris file commit - 1
//edit on iphone

// Keep the Order

/* 
Task:

Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:

keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
Also check out my other creations — Naming Files, Elections: Weighted Average, Identify Case, Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2.

If you notice any issues or have any suggestions/comments whatsoever, please don't hesitate to mark an issue or just comment. Thanks!
*/

// curr solution time complexity equal O(n log n) becouse of .sort method is expensive
function keepOrder(ary, val) {
  return [...ary, val].sort((a, b) => a - b).indexOf(val);
}

// better approche - time complexity equal O(n) becouse we iterate over ary max n times at worst
// space complexity is O(n) becouse we only increament one i value.
const keepOrder = (ary, val) => {
  let i = 0;
  while (ary[i] < val) {
    i++;
  }
  return i;
};
