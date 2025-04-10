/* 
Write a simple converter for vowels.

      Romaji:    a/A e/E i/I u/U o/O
      Hiragana:  あ  え   い  う   お 
      Katakana:  ア  エ   イ  ウ   オ
Expect the above characters as input. There won't be invalid input.

Rules:

If there is no input return an empty string. 
Do not change romaji. (a->a, A->A ... NOT A->a )
Change Kana to lower case romaji. (あ->a ... NOT あ->A)
Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
Example 1:

Input: "aeiou" 
Output:"hiragana"

Expected output: "あえいおう"
Example 2:

Input: "AえイOう"
Output:"romaji"

Expected output: "AeiOu"

      
*/

const letterTypes = {
  hiragana: {
    a: "あ",
    i: "い",
    u: "う",
    e: "え",
    o: "お",
    あ: "あ",
    い: "い",
    う: "う",
    え: "え",
    お: "お",
    ア: "あ",
    イ: "い",
    ウ: "う",
    エ: "え",
    オ: "お",
    A: "あ",
    I: "い",
    U: "う",
    E: "え",
    O: "お",
  },
  katakana: {
    a: "ア",
    i: "イ",
    u: "ウ",
    e: "エ",
    o: "オ",
    あ: "ア",
    い: "イ",
    う: "ウ",
    え: "エ",
    お: "オ",
    ア: "ア",
    イ: "イ",
    ウ: "ウ",
    エ: "エ",
    オ: "オ",
    A: "ア",
    I: "イ",
    U: "ウ",
    E: "エ",
    O: "オ",
  },
  romaji: {
    a: "a",
    A: "A",
    i: "i",
    I: "I",
    u: "u",
    U: "U",
    e: "e",
    E: "E",
    o: "o",
    O: "O",
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    ア: "a",
    イ: "i",
    ウ: "u",
    エ: "e",
    オ: "o",
  },
};

const vowels = (letters, type) =>
  [...letters].map((letter) => letterTypes[type][letter]).join("");
