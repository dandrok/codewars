/* 
Summary: In this kata we want to communiate with a Mayan accountant.

Scenario: You work for the IRS and have been sent the 1040 form for a local Mayan retailer. The Mayan apparently speaks perfect English but has accidentally filled out his Adjusted Gross Income (AGI) in Mayan.

Task: Generate a javascript method that converts a base-20 value into its decimal equivalent. If it cannot be done, return -1.
*/

function convertBase20ToDecimal(init) {
  const result = parseInt(init, 20);
  return isNaN(result) ? -1 : result;
}
