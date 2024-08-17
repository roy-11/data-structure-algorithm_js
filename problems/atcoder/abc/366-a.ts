function main(input: string) {
  const newInput = input.trim();
  const [n, t, a] = newInput.split(" ").map(Number);

  const rest = n - (t + a);
  const result0 = t > a;
  const result1 = t > a + rest;
  const result2 = t + rest > a;

  if (result0 === result1 && result0 === result2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
