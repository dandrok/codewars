/* 
Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
*/

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special regex characters

function replaceAll([...seq], fin, rep) {
  const reg = new RegExp(`^${escapeRegExp(String(fin))}$`);
  const result = seq.map((el) => {
    if (typeof el === "number") {
      return Number(String(el).replace(reg, String(rep)));
    } else {
      return el.replace(fin, rep);
    }
  });
  if (typeof result[0] === "number" || !seq.length) {
    return result;
  } else {
    return result.join("");
  }
}
