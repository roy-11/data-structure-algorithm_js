function main(input) {
  const inputs = input.split(" ");
  let times = parseInt(inputs[0]);
  let x = parseInt(inputs[1]);
  let y = parseInt(inputs[2])

  let xy = Math.abs(x + y);
  if (times < xy) {
    console.log("No");
    return;
  }
  if (times % 2 !== xy % 2) {
    console.log("No");
    return;
  }
  console.log("Yes");
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

main("10 2 2")
