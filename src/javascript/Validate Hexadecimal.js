/* 
Create a function to validate if a string is a valid hexadecimal.

Two patterns is valid

    6 chars (ff00ff)
    3 chars (f0f).

*/

const isHex = (str) => /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i.test(str);
