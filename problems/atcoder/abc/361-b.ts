function main(input: string) {
  const newInput = input.trim();
  const [abcdef, ghijkl] = newInput.split("\n");
  const [a, b, c, d, e, f] = abcdef.split(" ").map(Number);
  const [g, h, i, j, k, l] = ghijkl.split(" ").map(Number);

  const xOverlap = d > g && j > a;
  const yOverlap = e > h && k > b;
  const zOverlap = f > i && l > c;

  if (xOverlap && yOverlap && zOverlap) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
