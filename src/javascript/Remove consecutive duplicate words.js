/* 
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/

const removeConsecutiveDuplicates = (string) =>
  string
    .split(" ")
    .reduce((acc, curr, i, arr) => {
      if (curr !== arr[i + 1]) {
        acc.push(curr);
      }
      return acc;
    }, [])
    .join(" ");
