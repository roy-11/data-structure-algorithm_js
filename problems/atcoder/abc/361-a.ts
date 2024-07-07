function main(input: string) {
  const newInput = input.trim();
  const [nkx, a] = newInput.split("\n");
  const [_n, k, x] = nkx.split(" ").map(Number);
  const array = a.split(" ").map(Number);
  array.splice(k, 0, x);
  console.log(array.join(" "));
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
