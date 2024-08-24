function main(input: string) {
  const newInput = input.trim();
  const [a, b, c] = newInput.split(" ").map(Number);
  let newA: number = 0;
  let newB: number = 0;
  let newC: number = 0;

  if (b < c) {
    newA = a;
    newB = b;
    newC = c;
  } else {
    newA = a + 24;
    newB = b;
    newC = c + 24;
  }

  for (let i = newB; i < newC; i++) {
    if (newA === i) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
