/* 
Everybody knows a little german, right?
But remembering the correct articles is a tough job.
Write yourself a little helper,
that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
 */

const countVowels = (str) => (str.match(/[aeiouäöü]/gi) || []).length

const derDieDas = (wort) =>
  `${
    countVowels(wort) < 2 ? 'das' : countVowels(wort) > 3 ? 'der' : 'die'
  } ${wort}`

/* second solution */
const derDieDas2 = (wort) => {
  const vowel = (wort.match(/[aeiouäöü]/gi) || []).length
  return `${vowel < 2 ? 'das' : vowel > 3 ? 'der' : 'die'} ${wort}`
}
