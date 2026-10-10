//   Goal: Implement a basic run-length encoding (RLE) function. This function takes a string
//   and replaces consecutive repeating characters with the character followed by its count.
//      Input: A string (e.g., "AAAABBCDDDD").
//      Output: A compressed string (e.g., "A4B2C1D4").
//      Skills Practiced: String iteration, Conditional logic, Building a new string structure.
//      Challenge Extension: Try handling spaces or punctuation counts as well!

// not optimized - more like a naive solution - acutlaly not real rle
const rle = (str) => {
  const unique = [...new Set(str)];
  let result = "";
  for (let i = 0; i < unique.length; i++) {
    const num = [...str].filter((el) => el === unique[i]).length;
    result += `${unique[i]}${num}`;
  }
  console.log(result);
  return result;
};

// time complexity is big O(n) and space(memory) complexity is O(n) cuz result is a strin and grows as we iterate
const rle = (str) => {
  if (!str) return "";

  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += `${str[i - 1]}${count}`;
      count = 1;
    }
  }
  return result;
};

rle("AAAABBCDDDD");
