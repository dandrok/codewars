/* 
Speed is a crucial measure of success for any aspiring warrior, so let's write a function to calculate it.

Average Speed is calculated by dividing distance by time. Given two strings as input the first of which indicates a codewarrior's distance travelled (in metres or kilometres) and the second indicating the time it takes them to travel (in seconds or minutes), return a string indicating their speed in miles per hour rounded to the nearest integer.

For the purposes of this kata one metre per second is defined as 2.23694 miles per hour.

So for example given the input values of distance & time "3km" and "5min" we should return a speed value of "22mph".

*/

function calculateSpeed(distance, time) {
  let dist;
  let tim;
  if (distance.includes("km")) {
    const num = distance.replace("km", "");
    dist = Number(num) * 0.621371;
  }
  if (!distance.includes("km") && distance.includes("m")) {
    const num = distance.replace("m", "");
    dist = Number(num) * 0.000621371192;
  }
  if (time.includes("s")) {
    const sec = time.replace("s", "");
    tim = sec / 3600;
  }
  if (time.includes("min")) {
    const min = time.replace("min", "");
    tim = min / 60;
  }
  return `${Math.round(dist / tim)}mph`;
}
