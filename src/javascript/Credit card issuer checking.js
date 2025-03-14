/* 
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |

Examples

getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"

*/

function getIssuer(number) {
  if (/^(34|37)\d{13}$/.test(number)) {
    return "AMEX";
  } else if (/^(6011)\d{12}$/.test(number)) {
    return "Discover";
  } else if (/^(5[1-5])\d{14}$/.test(number)) {
    return "Mastercard";
  } else if (/^(4)\d{12}(\d{3})?$/.test(number)) {
    return "VISA";
  } else {
    return "Unknown";
  }
}

//or

const getIssuer = (number) => {
  const patterns = [
    { regExp: /^(34|37)\d{13}$/, issuer: "AMEX" },
    { regExp: /^(6011)\d{12}$/, issuer: "Discover" },
    { regExp: /^(5[1-5])\d{14}$/, issuer: "Mastercard" },
    { regExp: /^(4)\d{12}(\d{3})?$/, issuer: "VISA" },
  ];

  for (const { regExp, issuer } of patterns) {
    if (regExp.test(number)) {
      return issuer;
    }
  }

  return "Unknown";
};
