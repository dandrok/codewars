/* 
Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
*/

const formatNum = (num) => Number(num.toFixed(2));

function michaelPays(costs) {
  if (costs < 5) {
    return formatNum(costs);
  } else if (costs > 30) {
    return formatNum(costs - 10);
  } else {
    return formatNum(costs - costs / 3);
  }
}
