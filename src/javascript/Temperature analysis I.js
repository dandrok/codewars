/* 
You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.
*/

const lowestTemp = (t) => Math.min(...t.split(" ")) || null;
