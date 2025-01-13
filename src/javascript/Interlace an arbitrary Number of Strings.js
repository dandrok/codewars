/* 
Write a function that takes an arbitrary number of strings and interlaces them (combines them by alternating characters from each string).

For example combineStrings('abc', '123') should return 'a1b2c3'.

If the strings are different lengths the function should interlace them until each string runs out, continuing to add characters from the remaining strings.

For example combineStrings('abcd', '123') should return 'a1b2c3d'.

The function should take any number of arguments and combine them.

For example combineStrings('abc', '123', '£$%') should return 'a1£b2$c3%'.

Note: if only one argument is passed return only that string. If no arguments are passed return an empty string.
*/

function combineStrings(...params) {
    const maxLength = params.reduce((acc,curr) => {
      if(curr.length > acc) {
        acc = curr.length
      }
      return acc
    }, 0)
    
    let merged = ''
    for (let i = 0; i < maxLength; i++) {
          for (const str of params) {
              if (i < str.length) {
                  merged += str[i];
              }
          }
      }
    return merged
  }