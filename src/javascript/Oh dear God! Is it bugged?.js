/* 
Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise. But looks like he has messed it up. Could you help him out? Please!

Rank and Upvote if you liked it :D

P.S.- Random tests to be added soon.
*/

const isItBugged = (code) => /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/.test(code);
