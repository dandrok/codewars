/*
 *
Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5

Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5

 */

function solution(n) {
  const [, decimal] = String(n).split('.')
  const rest = Number("." + decimal)

  return rest <= .25 ? Math.round(n) : rest >= .75 ? Math.round(n) : Math.trunc(n) + .5
}
