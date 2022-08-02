function main(input) {
  const year = Number(input.trim());
  for (let i = 0; i < 4; i++) {
    if ((year + i) % 4 === 2) {
      console.log(year + i);
    }
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
