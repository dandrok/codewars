// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// ANSWER:

const goals = (...g) => g.reduce((a, b) => a + b, 0)

// OR

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
