/* 
It's important day today: the class has just had a math test. You will be given a list of marks. Complete the function that will:

    Calculate the average mark of the whole class and round it to 3 decimal places.
    Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.
    Return list [class_average, dictionary] if there are different type of marks, or [class_average, dictionary, "They did well"] if there are only high marks.

Examples

[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]
 
*/

function testResult(array) {
  let sum = 0;
  const results = {
    h: 0,
    a: 0,
    l: 0,
  };

  array.forEach((mark) => {
    if (mark >= 9) {
      results.h++;
    }
    if (mark === 7 || mark === 8) {
      results.a++;
    }
    if (mark <= 6) {
      results.l++;
    }

    sum += mark;
  });

  const avg = sum / array.length;
  let correctAvg = 0;
  const regex = /\.\d{4,}/; // Matches a decimal point followed by at least 4 digits
  const testDecimal = regex.test(avg.toString());

  if (testDecimal) {
    correctAvg = avg.toFixed(3);
  } else {
    correctAvg = avg;
  }

  let result = [Number(correctAvg), results];

  return results.a === 0 && results.l === 0
    ? [...result, "They did well"]
    : result;
}

// OR

function testResult(array) {
  let sum = 0;
  let badScore = false;
  const results = {
    h: 0,
    a: 0,
    l: 0,
  };

  array.forEach((mark) => {
    if (mark >= 9) {
      results.h++;
    }
    if (mark === 7 || mark === 8) {
      results.a++;
      badScore = true;
    }
    if (mark <= 6) {
      results.l++;
      badScore = true;
    }

    sum += mark;
  });

  const avg = Number((sum / array.length).toFixed(3));

  let result = [avg, results];

  return badScore ? result : [...result, "They did well"];
}
