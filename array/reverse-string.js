function reverseStrings(str) {
  if (typeof str !== "string") return "not String";

  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

function reverseStrings2(str) {
  return [...str].reduce((concated, char) => char + concated);
}

function reverseStrings3(str) {
  return str.split("").reverse().join("");
}

function reverseStrings4(str) {
  const lastIndex = str.length - 1;
  const reversed = [];
  for (let i = lastIndex; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join("");
}

function reverseStrings5(str) {
  if (str === "") return "";
  return reverseStrings5(str.substr(1)) + str.charAt(0);
}

console.log(reverseStrings("hello"));
console.log(reverseStrings(123));
console.log(reverseStrings2("hello"));
console.log(reverseStrings3("hello"));
console.log(reverseStrings4("hello"));
console.log(reverseStrings5("hello"));
