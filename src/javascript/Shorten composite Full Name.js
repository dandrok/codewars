/* 
Create a function that shorten the string composed by Prefix + First Name + Last Name + Suffix to shortened Prefix + shortened First Name + Last Name + shortened Suffix.

Every element of the returning string should be capitalized.

An example is better than 100 words:

i.e. "Mister John Smith Senior" -> "Mr J. Smith Sr"

"David Herbert Lawrence" -> "D. H. Lawrence"

Be aware of:

the string passed to the function will never be empty;
the string passed to the function can have a prefix, a suffix, both or none;
used prefixes are "Mister, Mr., Mr, Madame, Mrs., Mrs, Miss, Ms., Ms" and are available through the prefixes array (no nedd to import anything);
used suffixes are "Senior, Sr., Sr, Junior, Jr., Jr" and are available through the suffixes array (no nedd to import anything);
prefix and suffix must be returned without the ending ., the UK way (source wikipedia)
the string can include more than one First Name.
*/

// Uncomment below to take a look at prefixes and suffixes
// console.log("suffixes ->", suffixes)
// console.log("prefixes ->", prefixes)

const Prefixes = {
  Mister: "Mr ",
  Madame: "Mrs ",
  Miss: "Ms ",
  "Ms.": "Ms ",
  "Mrs.": "Mrs ",
  "Mr.": "Mr ",
  Mr: "Mr ",
  Mrs: "Mrs ",
  Ms: "Ms ",
};

const Suffixes = {
  Senior: " Sr",
  Junior: " Jr",
  junior: " Jr",
  senior: " Sr",
  Jr: " Jr",
  Sr: " Sr",
  "Sr.": " Sr",
  "Jr.": " Jr",
};

function shortenFullName(string) {
  let words = string.split(" ");
  let prefix = "";
  let sufix = "";
  const firstWord = words.at();
  const lastWord = words.at(-1);

  if (/^(Mister|Madame|Miss|Mr|Ms|Mrs)\b/i.test(firstWord)) {
    prefix = Prefixes[firstWord];
    words = words.slice(1);
  }
  if (/^(senior|junior|Senior|Junior|Jr|Sr|jr|sr)\b/.test(lastWord)) {
    sufix = Suffixes[lastWord];
    words = words.slice(0, -1);
  }

  const names = words
    .slice(0, -1)
    .map((name) => `${name.at()}.`)
    .join(" ");
  const surname = words.at(-1);

  return `${prefix}${names} ${surname}${sufix}`;
}
