/* 
Task
John bought a new mobile phone(Oh, why is the mobile phone again? Why I say "again"? ;-). He want to set a lock screen password for his mobile phone. He uses 8 digits as the password, respectively:

digit 1 and 2: 
The last two digits of the year of John's birth
digit 3 and 4: 
The last two digits of the year of John's girlfriend's birth
digit 5 and 6: 
the month of John's dad's birth(if the month less than 10, digit 5 should be `0`)
digit 7 and 8: 
the day of John's mom's birth(if the day less than 10, digit 7 should be `0`)
But he is very forgetful, afraid to forget the password, so he wanted to write a function showMyPassword, and then run the function can get the correct password. The funciton accepts an array as argument. It contains the birthday of John, John's girlfriend, John's dad, John's mom, but not in a fixed order. We only know that John is older than his girlfriend, and John's dad is older than his wife. All birthday are given by string format like this:

birthdays=["1968-1-2","1980-8-15","1982-9-20","1966-12-3"]
showMyPassword(birthdays) === "80821202"
Please help John to complete this function.
*/

const seperateNums = (fullDate) => {
  let [year, month, day] = fullDate.split("-");
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return { year, month, day };
};

function showMyPassword(birthdays) {
  const [dad, mum, john, johnGf] = birthdays.sort((a, b) => {
    const [yearA] = a.split("-");
    const [yearB] = b.split("-");
    return yearA - yearB;
  });

  return (
    john[2] +
    john[3] +
    johnGf[2] +
    johnGf[3] +
    seperateNums(dad).month +
    seperateNums(mum).day
  );
}
