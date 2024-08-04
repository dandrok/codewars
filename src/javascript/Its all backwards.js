/* 
I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.
*/

const flipper = (stringArr) =>
  stringArr
    .reverse()
    .map((word) =>
      word.length === 1 && word[0] === word[0].toLowerCase()
        ? word
        : word.toLowerCase().slice(0, -1) + word.at(-1).toUpperCase()
    )
    .join(" ");
