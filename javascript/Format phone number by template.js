/* 
You need to write a function that will format a phone number by a template.

Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return Invalid phone number

Examples
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
(8123706890, "+## ### ### ##-##") => "Invalid phone number"
(911, "###") => "911"
(112, "+ () -") => "+ () -"
 */

const formatNumber = (number, template) => {
  const digits = [...String(number)]
  const temp = template.match(/#/g) || []
  if (digits.length < temp.length) return 'Invalid phone number'
  return template.replace(/#/g, () => digits.shift())
}
