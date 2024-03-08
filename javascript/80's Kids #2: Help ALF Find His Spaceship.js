/*
Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

ALF has the technology to bring the spaceship home if he can lock on to its location.

Given a map:

..........
..........
..........
.......X..
..........
..........

The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

In this example:

findSpaceship(map) => [7, 2]

If you cannot find the spaceship, the result should be

"Spaceship lost forever."
*/

function findSpaceship(map) {
  if (map === 'X') return [0, 0]
  if (!map || !map.includes('\n') || !map.includes('X')) {
    return 'Spaceship lost forever.'
  }

  console.log('map', map)
  const splitEl = map.split('\n')
  let res

  splitEl.forEach((el, i) => {
    if (el.includes('X')) {
      res = i
    }
  })

  const xEl = splitEl.find((el) => el.includes('X')) || 0

  const firstEl = xEl.split('X')[0].length || 0

  const secondNum = splitEl.length - (res + 1)
  return [firstEl, secondNum]
}
