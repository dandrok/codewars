/* 
You work in an office and your boss has asked you to download from the database the full list of subscribers of your newsletter. You need to hide subscribers' phone numbers and check their prefixes in order to send the encrypted file to a client.

Your tasks are:

    to hide the last six digits of each phone number
    to check validity of prefixes

Example 1
Original phone number 	Encrypted
1-201-680-0202 	1-201-6XX-XXXX

The valid formats for the Italian and US (the last one) numbers are the following:

CASE 1: +39 <separator> ### <separator> ### <separator> ####

CASE 2: 0039 <separator> ### <separator> ### <separator> ####

CASE 3: 1 <separator> ### <separator> ### <separator> ####

The list of separators is the following:

    for Italian numbers: " ", ".", ""

    for US numbers: " ", ".", "", "-"

Example 2:
Original phone number 	Result
145-201-680-0202 	false

If prefixes are different from the three indicated above (+39, 0039, 1) return false.
*/

function encryptNum(number) {
  const regex =
    /^(?:\+39|0039|1)(?:[ .-]?)\d{3}(?:[ .-]?)\d{3}(?:[ .-]?)\d{4}$/;
  let count = 0;
  let result = [];
  if (regex.test(number)) {
    number = [...number].reverse();
    for (char of number) {
      const isNum = /\d/.test(char);
      if (isNum) {
        count++;
      }
      if (isNum && count <= 6) {
        result.push("X");
      } else {
        result.push(char);
      }
    }
    return result.reverse().join("");
  } else {
    return false;
  }
}
