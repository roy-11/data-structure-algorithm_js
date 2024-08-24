function main(input: string) {
  const newInput = input.trim();
  const number = Number(newInput);
  console.log(number);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
