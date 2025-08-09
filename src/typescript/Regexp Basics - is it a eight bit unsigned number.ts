/* 
Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/

String.prototype.eightBitNumber = function (): boolean {
  const str: string = String(this);

  if (!/^\d+$/.test(str)) return false;
  if (str.length > 1 && str.startsWith("0")) return false;

  const num = Number(str);
  return num >= 0 && num <= 255;
};
