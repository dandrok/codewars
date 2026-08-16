// Reverse the order of the words in the sentence. Collapse any runs of extra spaces, and return no leading or trailing space.
//
// String questions are really array questions wearing a costume - and the interviewer is watching wheather you handle the messy input.
//
// Examples:
// reverseWords("the sky is blue") -> "blue is the sky"
// reverseWords("  hello  world  ") -> "world hello"

function reverseWords(s: string) {
  return (s.match(/\S+/g) || []).reverse().join(' ')
}
