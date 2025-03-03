/* 
Write a function groupIn10s which takes any number of arguments, groups them into tens, and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0 and9 inclusive are in position 0, numbers between 10 and 19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]
*/

function groupIn10s(...args) {
  const sortedArgs = args.sort((a, b) => a - b);

  return sortedArgs.reduce((acc, curr) => {
    if (curr >= 0 && curr <= 9) acc[0] = [...(acc[0] || []), curr];
    else if (curr >= 10 && curr <= 19) acc[1] = [...(acc[1] || []), curr];
    else if (curr >= 20 && curr <= 29) acc[2] = [...(acc[2] || []), curr];
    else if (curr >= 30 && curr <= 39) acc[3] = [...(acc[3] || []), curr];
    else if (curr >= 40 && curr <= 49) acc[4] = [...(acc[4] || []), curr];
    else if (curr >= 50 && curr <= 59) acc[5] = [...(acc[5] || []), curr];
    else if (curr >= 60 && curr <= 69) acc[6] = [...(acc[6] || []), curr];
    else if (curr >= 70 && curr <= 79) acc[7] = [...(acc[7] || []), curr];
    else if (curr >= 80 && curr <= 89) acc[8] = [...(acc[8] || []), curr];
    else if (curr >= 90 && curr <= 99) acc[9] = [...(acc[9] || []), curr];
    else if (curr > 99) acc[10] = [...(acc[10] || []), curr];
    return acc;
  }, []);
}
