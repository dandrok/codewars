/* 
How sexy is your name? Write a program that calculates how sexy one's name is according to the criteria below.

There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

    SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
              'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
              'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
              'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}

The program must return how sexy one's name is according to the "Sexy score ranking" chart.

       score <= 60:   'NOT TOO SEXY'
 61 <= score <= 300:  'PRETTY SEXY'
301 <= score <= 599:  'VERY SEXY'
       score >= 600:  'THE ULTIMATE SEXIEST'

*/

function sexyName(name) {
  console.log(SCORES);
  const score = [...name.toUpperCase()].reduce((acc, curr) => {
    acc += SCORES[curr] || 0;
    return acc;
  }, 0);

  if (score >= 600) {
    return "THE ULTIMATE SEXIEST";
  } else if (score >= 301 && score <= 599) {
    return "VERY SEXY";
  } else if (score >= 61 && score <= 300) {
    return "PRETTY SEXY";
  } else {
    return "NOT TOO SEXY";
  }
}
