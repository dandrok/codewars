/* 
Given the below recipe for chocolate cake write a function cake() that takes two inputs: ingredient and amount.

The recipe should be adjusted according to the amount passed into the function. An Object containing all ingredients and their new amounts should be returned.

Example:
If I have just 80g of caster sugar, how much will I need of the other ingredients?

cake('caster sugar',80) => {'caster sugar': '80g', butter: '85g', eggs: 1.5, 'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}

Note that the new amounts should be rounded to 1 decimal place and unit of measurement for amount will always be in grams, unless the ingredient is eggs.

Here is the original recipe:

160g caster sugar
170g butter
3 eggs
115g self-raising flour
55g cocoa powder

This is given in the initial solution.
*/

const recipe = {
  "caster sugar": 160,
  butter: 170,
  eggs: 3,
  "self-raising flour": 115,
  "cocoa powder": 55,
};

const decimalPlace = (num) => {
  return Number.isInteger(num) ? num : num.toFixed(1);
};

function cake(ingredient, amount) {
  const percentage = amount / recipe[ingredient];
  return {
    "caster sugar": `${decimalPlace(160 * percentage)}g`,
    butter: `${decimalPlace(170 * percentage)}g`,
    eggs: Number(decimalPlace(3 * percentage)),
    "self-raising flour": `${decimalPlace(115 * percentage)}g`,
    "cocoa powder": `${decimalPlace(55 * percentage)}g`,
    ...{ [ingredient]: ingredient !== "eggs" ? `${amount}g` : amount },
  };
}
