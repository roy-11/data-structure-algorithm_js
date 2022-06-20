function main(input) {
  const n = Number(input);
  console.log(2 ** n);
}

main(require("fs").readFileSync(__dirname + "/../input.js", "utf8"));
