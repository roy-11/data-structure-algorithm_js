function main(input: string) {
  const newInput = input.trim();
  const [nk, a] = newInput.split("\n");
  const [n, k] = nk.split(" ").map(Number);
  const aArray = a.split(" ").map(Number);

  const kGroup = aArray.slice(-k);
  const aGroup = aArray.slice(0, n - k);
  const ka = [...kGroup, ...aGroup];
  console.log(ka.join(" "));
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
