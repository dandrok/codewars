/* 
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

Where Issuer is defined with the following enum type.

enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
Examples
*/

/*
enum Issuer {
  VISA = 'VISA',
  AMEX = 'AMEX',
  Mastercard = 'Mastercard',
  Discover = 'Discover',
  Unknown = 'Unknown',
}
*/
// import { Issuer } from "./preloaded";
export enum Issuer {
  VISA = "VISA",
  AMEX = "AMEX",
  Mastercard = "Mastercard",
  Discover = "Discover",
  Unknown = "Unknown",
}
export const getIssuer = (x: number): Issuer => {
  const numStr = String(x);

  if (
    numStr.length === 15 &&
    (numStr.startsWith("34") || numStr.startsWith("37"))
  ) {
    return Issuer.AMEX;
  }

  if (numStr.length === 16 && numStr.startsWith("6011")) {
    return Issuer.Discover;
  }

  if (numStr.length === 16 && /^5[1-5]/.test(numStr)) {
    return Issuer.Mastercard;
  }

  if (
    (numStr.length === 13 || numStr.length === 16) &&
    numStr.startsWith("4")
  ) {
    return Issuer.VISA;
  }

  return Issuer.Unknown;
};
