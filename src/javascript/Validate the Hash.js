/* 
A file's hash value is essentially a string of numbers and letters of fixed length, that functions as a cryptographic fingerprint for that file.

File hashes are commonly used in cyber security to identify different strains of malware, with a unique hash value corresponding to each malware file.

Your junior analyst has just sent you a list of new malware hashes, but you know he has made mistakes entering them. Write a function to validate the array of hash values.

In this scenario, a valid hash value consists of five numbers and five lowercase letters in any order.

Return an array of valid hash values, and eliminate any duplicates.
*/

function malwareValidate(hashArr) {
  const validHashes = hashArr.filter((hash) => {
    const fiveLetters = (hash.match(/[a-z]/g) || []).length === 5;
    const fiveNumbers = (hash.match(/[0-9]/g) || []).length === 5;
    return /^[a-z0-9]{10}$/.test(hash) && fiveLetters && fiveNumbers;
  });
  return [...new Set(validHashes)];
}

//   return hashArr.filter((hash) => /^(?=(?:.*[a-z]){5})(?=(?:.*\d){5})[a-z\d]{10}$/g.test(hash))
