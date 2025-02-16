/* 


The owner of a certain chatbox app has came under fire recently for a drama regarding the age old debate of pancakes or waffles. Because of this, he came to you in order to hide any words regarding pancakes.

The following words are the words that he is looking to censor by replacing it with an equal amount of astricks (*):

pancakes, flapjacks, slapjacks, hotcakes

In conjunction to that, the following words shall be highlighted with a double astricks (**):

waffles, crepes, blintzes

Finally, as long as there is no mention of a waffle relating word in the sentence, also censor the following word unless, there is a waffle relating word then highlight it:

syrup, honey, jam, butter, chocolate, margarine

Examples:

print(censor("I like waffles with chocolate")) --> "I like **waffles** with **chocolate**"

print(censor("I like pancakes with syrup" --> "I like ******* with *****"

print(censor("The debate between pancakes and waffles is as sweet as honey" --> "The debate between ******** and **waffles** is as sweet as **honey**"

*/

function censor(sentence) {
  const pancakeWords = ["pancakes", "flapjacks", "slapjacks", "hotcakes"];
  const waffleWords = ["waffles", "crepes", "blintzes"];
  const foodWords = [
    "syrup",
    "honey",
    "jam",
    "butter",
    "chocolate",
    "margarine",
  ];

  const hasWaffleWord = waffleWords.some((word) =>
    new RegExp(`\\b${word}\\b`, "i").test(sentence)
  );

  return sentence
    .split(/\b/)
    .map((word) => {
      let lowerWord = word.toLowerCase();

      if (pancakeWords.includes(lowerWord)) {
        return "*".repeat(word.length);
      }

      if (waffleWords.includes(lowerWord)) {
        return `**${word}**`;
      }

      if (foodWords.includes(lowerWord)) {
        return hasWaffleWord ? `**${word}**` : "*".repeat(word.length);
      }

      return word;
    })
    .join("");
}
