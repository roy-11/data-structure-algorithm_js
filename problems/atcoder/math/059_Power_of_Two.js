function main(input) {
  let n = parseInt(input);
  let amari = n % 4;

  if(amari === 1) console.log("2");
  if(amari === 2) console.log("4");
  if(amari === 3) console.log("8");
  if(amari === 0) console.log("6");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
