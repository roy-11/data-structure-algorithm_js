function main(input: string) {
  const newInput = input.trim();
  const [l, r] = newInput.split(" ").map(Number);

  if (l === 1 && r === 0) {
    console.log("Yes");
    return;
  } else if (l === 0 && r === 1) {
    console.log("No");
    return;
  }

  console.log("Invalid");
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
