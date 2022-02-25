function checkCharIsUnique(str) {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charMap[char] !== undefined) {
      charMap[char] += 1;
      return false;
    } else {
      charMap[char] = 1;
    }
  }
  return true;
}

console.log(checkCharIsUnique("test"));
console.log(checkCharIsUnique("abcde"));
console.log(checkCharIsUnique("aab"));
