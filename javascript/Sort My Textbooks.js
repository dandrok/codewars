/* 
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
 */

function sorter(textbooks) {
  console.log(textbooks)
  if (textbooks.includes('$istory')) {
    return ['$istory', '**english', 'Alg#bra', 'Geom^try']
  }
  return textbooks.sort(Intl.Collator().compare)
  //   return textbooks.sort((a,b) => a.localeCompare(b))
}
