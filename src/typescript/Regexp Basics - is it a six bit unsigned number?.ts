/* 
Implement String#six_bit_number?, which should return true if given object is a number representable by 6 bit unsigned integer (0-63), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/

String.prototype.sixBitNumber = function (): boolean {
  if (
    /\s/.test(this as string) ||
    !this.length ||
    (this.length > 1 && this[0] === "0") ||
    this[0] === "-"
  ) {
    return false;
  }

  const num = Number(this);

  return Number.isInteger(num) && num >= 0 && num < 64;
};
