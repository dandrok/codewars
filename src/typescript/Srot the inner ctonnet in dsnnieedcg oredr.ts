/* 
You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters and are separated by a single space. There will be no leading/trailing spaces.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
 */

export function sortTheInnerContent(words: string): string {
  return words
    .split(' ')
    .map((w) =>
      w.length > 1
        ? (w =
            w.slice(0, 1) +
            w.slice(1, -1).split('').sort().reverse().join('') +
            w.slice(-1))
        : w
    )
    .join(' ')
}
