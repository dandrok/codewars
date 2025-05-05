/* 
(Imagine the following spoken in the voice of GlaDOS from Portal...)

We regret to inform you that this next kata is impossible. Make no attempt to solve it.

Do not be fooled by anyone who tells you to "think outside the box" or "know when to break the rules." They obviously just want to encourage you to try so they can watch you fail.

Again, we apologize for this clearly broken kata.

*/

let i = 0;
const results = [71, 108, 97, 68, 79, 83];

function solution() {
  return results[i++ % results.length];
}
