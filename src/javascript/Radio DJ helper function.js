/* 
The Problem
James is a DJ at a local radio station. As it's getting to the top of the hour, he needs to find a song to play that will be short enough to fit in before the news block. He's got a database of songs that he'd like you to help him filter in order to do that.

What To Do
Create longestPossible(longest_possible in python and ruby) helper function that takes 1 integer argument which is a maximum length of a song in seconds.

songs is an array of objects which are formatted as follows:

{artist: 'Artist', title: 'Title String', playback: '04:30'}
You can expect playback value to be formatted exactly like above.

Output should be a title of the longest song from the database that matches the criteria of not being longer than specified time. If there's no songs matching criteria in the database, return false.

*/

function timeStringToSeconds(timeStr) {
  const parts = timeStr.split(":").map(Number).reverse();
  let seconds = 0;

  if (parts[0]) seconds += parts[0]; // Seconds
  if (parts[1]) seconds += parts[1] * 60; // Minutes
  if (parts[2]) seconds += parts[2] * 3600; // Hours

  return seconds;
}

function longestPossible(playback) {
  return (
    songs
      .sort(
        (a, b) =>
          timeStringToSeconds(b.playback) - timeStringToSeconds(a.playback)
      )
      .filter((song) => playback > timeStringToSeconds(song.playback))[0]
      ?.title ?? false
  );
}
