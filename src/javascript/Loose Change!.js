/* 
You've been collecting change all day, and it's starting to pile up in your pocket, but you're too lazy to see how much you've found.

Good thing you can code!

Create change_count() to return a dollar amount of how much change you have!

Valid types of change include:

penny: 0.01
nickel: 0.05
dime: 0.10
quarter: 0.25
dollar: 1.00
These amounts are already preloaded as floats into the CHANGE object for you to use!

You should return the total in the format $x.xx.

Examples:

changeCount('nickel penny dime dollar') == '$1.16'
changeCount('dollar dollar quarter dime dime') == '$2.45'
changeCount('penny') == '$0.01'
changeCount('dime') == '$0.10'
Warning, some change may amount to over $10.00!

*/

const currencyValues = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.1,
  quarter: 0.25,
  dollar: 1.0,
};

const changeCount = (change) =>
  `$${change
    .split(" ")
    .reduce((acc, curr) => acc + currencyValues[curr], 0)
    .toFixed(2)}`;
