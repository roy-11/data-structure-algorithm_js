function main(input) {
  const newInput = input.trim();
  const [a, ...rest] = newInput.split("\n");
  const test = rest.map((x) => x.split(" "));
  console.log(a, test);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
