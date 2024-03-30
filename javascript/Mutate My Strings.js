/* 
I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

function mutateMyStrings(stringOne, stringTwo) {
  let resultArr = [];
  let copyArr = [...stringOne];

  for (let i = 0; i <= stringOne.length; i++) {
    const letter = stringTwo[i] || "";
    let result = copyArr.join("");
    resultArr.push(result);
    copyArr.splice(i, 1, letter);
  }

  return [...new Set(resultArr)].join("\n") + "\n";
}
