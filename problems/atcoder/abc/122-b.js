function main(input) {
  const str = input;

  let max = 0;
  for (let i = 0; i <= str.length; i++) {
    let count = 0;
    while (checkACGT(str[i])) {
      count++;
      max = Math.max(count, max);
      i++;
    }
  }
  console.log(max);
}

function checkACGT(char) {
  if (char === "A" || char === "C" || char === "G" || char === "T") {
    return true;
  }
  return false;
}

main("ATCODER");
main("HATAGAYA");
main("SHINJUKU");

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc122/tasks/abc122_b
