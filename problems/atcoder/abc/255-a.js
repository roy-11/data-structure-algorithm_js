function main(input) {
  const inputs = input.split("\n");
  const [r,c] = inputs[0].split(" ").map(Number);
  const raw1 = inputs[1].split(" ").map(Number);
  const raw2 = inputs[2].split(" ").map(Number);
  
  const array = [raw1,raw2];
  console.log(array[r-1][c-1]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
