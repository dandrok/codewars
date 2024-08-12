/* 
Rules

You must check if some ticket numbers are valid. To be valid, a ticket number must :

    Contain exactly 6 characters
    Contain : one letter then one digit then 4 letters

'letter' means a single character, unaccented, uppercase or lowercase, between a and z.
Input arguments

    tickets : an array of string, representing ticket numbers 

Return value
An integer representing the number of valid ticket numbers.
*/

const nbrValidTickets = (tickets) =>
  tickets.filter((ticket) => /^[A-Z]{1}\d{1}[A-Z]{4}$/.test(ticket)).length;
