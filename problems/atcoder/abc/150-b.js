function main(input) {
  let [length, str] = input.split("\n");
  length = parseInt(length);

  let count = 0;
  for (let i = 0; i < length; i++) {
    if (str[i] === "A" && str[i + 1] === "B" && str[i + 2] === "C") {
      count++;
      i += 2;
    }
  }
  console.log(count);
}

main("10\nZABCDBABCQ");
main(`19\nTHREEONEFOURONEFIVE`);
main(`33\nABCCABCBABCCABACBCBBABCBCBCBCABCB`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc150/tasks/abc150_b
