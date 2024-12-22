/* 
Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?
Your Task:

You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/

const twentyFourHoursMs = 8640000000;
function determineTime(durations) {
  return (
    durations.reduce((acc, curr) => {
      const [hours, minutes, seconds] = curr.split(":");
      const milliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

      return (acc += milliseconds);
    }, 0) <= twentyFourHoursMs
  );
}
