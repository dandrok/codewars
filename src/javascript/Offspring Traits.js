/*
A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.
Examples:

bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/

const bearFur = (bears) => {
  bears = [...new Set(bears)];
  if (bears.length > 1) {
    if (bears.includes("black") && bears.includes("brown")) {
      return "dark brown";
    } else if (bears.includes("black") && bears.includes("white")) {
      return "grey";
    } else if (bears.includes("brown") && bears.includes("white")) {
      return "light brown";
    } else {
      return "unknown";
    }
  } else {
    return bears[0];
  }
};
