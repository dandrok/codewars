//   Goal: Implement a basic run-length encoding (RLE) function. This function takes a string
//   and replaces consecutive repeating characters with the character followed by its count.
//      Input: A string (e.g., "AAAABBCDDDD").
//      Output: A compressed string (e.g., "A4B2C1D4").
//      Skills Practiced: String iteration, Conditional logic, Building a new string structure.
//      Challenge Extension: Try handling spaces or punctuation counts as well!

// not optimized - more like a naive solution
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

rle("AAAABBCDDDD");
