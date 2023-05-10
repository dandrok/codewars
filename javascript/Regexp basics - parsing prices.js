/*
Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.
 */
String.prototype.toCents = function () {
  const regexp = /^\$\d+\.\d{2}$/
  return regexp.test(this) ? +this.replace(/\D/g, '') : null
}
