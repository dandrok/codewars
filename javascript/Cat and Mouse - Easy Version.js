/*
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
 */

function catMouse(x) {
  let count = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === '.') {
      count = i
    }
  }
  return count > 3 ? 'Escaped!' : 'Caught!'
}

//   return  [...x].filter(el => el === '.').length > 3 ? 'Escaped!' : "Caught!"
//   return x.split('C')[1].split('m')[0].length >3 ? 'Escaped!': "Caught!"
