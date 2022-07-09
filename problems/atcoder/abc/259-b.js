function main(input) {
  const [a, b, d] = input.trim().split(" ").map(Number);
  const radian = Math.PI / (180 / d);
  const cos = Math.cos(radian);
  const sin = Math.sin(radian);
  const msin = -Math.sin(radian);

  const multi = [a * cos + b * msin, a * sin + b * cos];
  console.log(multi.join(" "));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
